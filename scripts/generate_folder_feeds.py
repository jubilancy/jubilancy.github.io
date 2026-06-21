#!/usr/bin/env python3
"""
generate_folder_feeds.py

Generates per-folder RSS feeds for a Quartz site deployed to GitHub Pages.
Run this after `npx quartz build`, before deploying the `public/` folder.

Reads:  content/<folder>/**/*.md
Writes: public/feed/<folder>/index.xml
        public/feed/all/index.xml     (everything across all folders)
"""

import os
import re
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from email.utils import format_datetime
from pathlib import Path

# ─── Configuration ────────────────────────────────────────────────────────────

SITE_URL = "https://jubilancy.github.io"  # ← change to your actual URL
SITE_TITLE = "eliana's site"                   # ← change to your site name
SITE_DESCRIPTION = "my commonplace notebook and digital garden"

CONTENT_DIR = Path("content")
OUTPUT_DIR = Path("public/feed")

# All folders to generate feeds for
FOLDERS = [
    "blogroll",
    "collections",
    "garden",
    "guides",
    "reference",
    "site",
]

# Folder display names and descriptions for the feed metadata
FOLDER_META = {
    "blogroll":    ("Blogroll",    "Links and sites worth following"),
    "collections": ("Collections", "Curated collections of resources"),
    "garden":      ("Garden",      "Digital garden notes and ideas"),
    "guides":      ("Guides",      "How-to guides and walkthroughs"),
    "reference":   ("Reference",   "Reference material and documentation"),
    "site":        ("Site",        "Site updates and meta posts"),
}

RSS_LIMIT = 20  # max items per feed (0 = unlimited)

# ─── Helpers ──────────────────────────────────────────────────────────────────

FRONT_MATTER_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.DOTALL)
DATE_FIELDS = ["date", "created", "lastmod", "updated"]


def parse_front_matter(text: str) -> dict:
    """Extract YAML-ish front matter into a plain dict (no PyYAML dependency)."""
    match = FRONT_MATTER_RE.match(text)
    if not match:
        return {}
    fm = {}
    for line in match.group(1).splitlines():
        if ":" in line:
            key, _, value = line.partition(":")
            fm[key.strip().lower()] = value.strip().strip('"').strip("'")
    return fm


def get_body(text: str) -> str:
    """Return content after front matter."""
    match = FRONT_MATTER_RE.match(text)
    if match:
        return text[match.end():]
    return text


def strip_markdown(text: str) -> str:
    """Very light markdown → plain text for RSS descriptions."""
    text = re.sub(r"!\[.*?\]\(.*?\)", "", text)   # images
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text)  # links
    text = re.sub(r"#{1,6}\s+", "", text)          # headings
    text = re.sub(r"\*{1,2}([^*]+)\*{1,2}", r"\1", text)  # bold/italic
    text = re.sub(r"`[^`]+`", "", text)            # inline code
    text = re.sub(r"\n{3,}", "\n\n", text)         # extra newlines
    return text.strip()


def parse_date(fm: dict) -> datetime | None:
    """Try common date fields; return a timezone-aware datetime or None."""
    for field in DATE_FIELDS:
        raw = fm.get(field)
        if not raw:
            continue
        for fmt in ("%Y-%m-%d", "%Y-%m-%dT%H:%M:%S", "%Y-%m-%d %H:%M:%S"):
            try:
                dt = datetime.strptime(raw[:19], fmt)
                return dt.replace(tzinfo=timezone.utc)
            except ValueError:
                continue
    return None


def slug_from_path(md_path: Path, folder: str) -> str:
    """
    Convert a content path to a URL slug.
    content/guides/my-note.md  →  /guides/my-note
    content/guides/sub/note.md →  /guides/sub/note
    """
    rel = md_path.relative_to(CONTENT_DIR)
    parts = list(rel.with_suffix("").parts)
    # Quartz strips "index" filenames
    if parts[-1].lower() == "index":
        parts = parts[:-1]
    return "/" + "/".join(parts)


def collect_posts(folder: str) -> list[dict]:
    """Return a list of post dicts for a given folder, sorted newest first."""
    folder_path = CONTENT_DIR / folder
    if not folder_path.exists():
        return []

    posts = []
    for md_file in sorted(folder_path.rglob("*.md")):
        # Skip Quartz special files
        if md_file.name.startswith("_"):
            continue

        text = md_file.read_text(encoding="utf-8")
        fm = parse_front_matter(text)

        # Skip drafts
        if fm.get("draft", "").lower() in ("true", "yes", "1"):
            continue

        title = fm.get("title") or md_file.stem.replace("-", " ").title()
        url = SITE_URL + slug_from_path(md_file, folder)
        date = parse_date(fm)
        description = fm.get("description") or strip_markdown(get_body(text))[:280]
        tags = fm.get("tags", "")

        posts.append({
            "title": title,
            "url": url,
            "date": date,
            "description": description,
            "tags": tags,
            "folder": folder,
        })

    # Sort: posts with dates newest-first, undated posts at the end
    posts.sort(key=lambda p: p["date"] or datetime.min.replace(tzinfo=timezone.utc), reverse=True)

    if RSS_LIMIT:
        posts = posts[:RSS_LIMIT]

    return posts


def build_rss(title: str, link: str, description: str, posts: list[dict]) -> str:
    """Build an RSS 2.0 XML string from a list of post dicts."""

    rss = ET.Element("rss", version="2.0", attrib={
        "xmlns:atom": "http://www.w3.org/2005/Atom",
        "xmlns:dc":   "http://purl.org/dc/elements/1.1/",
    })
    channel = ET.SubElement(rss, "channel")

    ET.SubElement(channel, "title").text = title
    ET.SubElement(channel, "link").text = link
    ET.SubElement(channel, "description").text = description
    ET.SubElement(channel, "language").text = "en"
    ET.SubElement(channel, "lastBuildDate").text = format_datetime(
        datetime.now(tz=timezone.utc)
    )
    ET.SubElement(channel, "atom:link", attrib={
        "href": link.rstrip("/") + "/index.xml",
        "rel":  "self",
        "type": "application/rss+xml",
    })

    for post in posts:
        item = ET.SubElement(channel, "item")
        ET.SubElement(item, "title").text = post["title"]
        ET.SubElement(item, "link").text = post["url"]
        ET.SubElement(item, "guid", isPermaLink="true").text = post["url"]
        ET.SubElement(item, "description").text = post["description"]

        if post["date"]:
            ET.SubElement(item, "pubDate").text = format_datetime(post["date"])

        if post["tags"]:
            for tag in re.split(r"[,\s]+", post["tags"].strip("[]")):
                tag = tag.strip()
                if tag:
                    ET.SubElement(item, "category").text = tag

    ET.indent(rss, space="  ")
    return '<?xml version="1.0" encoding="UTF-8"?>\n' + ET.tostring(rss, encoding="unicode")


def write_feed(path: Path, xml: str):
    path.mkdir(parents=True, exist_ok=True)
    (path / "index.xml").write_text(xml, encoding="utf-8")
    print(f"  ✓ {path / 'index.xml'}")


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    print(f"\nGenerating RSS feeds → {OUTPUT_DIR}/\n")

    all_posts = []

    for folder in FOLDERS:
        posts = collect_posts(folder)
        display_name, desc = FOLDER_META.get(folder, (folder.title(), f"{folder.title()} posts"))

        feed_url = f"{SITE_URL}/feed/{folder}"
        xml = build_rss(
            title=f"{SITE_TITLE} — {display_name}",
            link=feed_url,
            description=desc,
            posts=posts,
        )
        write_feed(OUTPUT_DIR / folder, xml)
        all_posts.extend(posts)
        print(f"     {len(posts)} posts in /{folder}\n")

    # Combined "all" feed
    all_posts.sort(
        key=lambda p: p["date"] or datetime.min.replace(tzinfo=timezone.utc),
        reverse=True,
    )
    if RSS_LIMIT:
        all_posts = all_posts[:RSS_LIMIT]

    xml = build_rss(
        title=f"{SITE_TITLE} — Everything",
        link=f"{SITE_URL}/feed/all",
        description="All posts across every section",
        posts=all_posts,
    )
    write_feed(OUTPUT_DIR / "all", xml)
    print(f"     {len(all_posts)} posts in /all\n")
    print("Done.\n")


if __name__ == "__main__":
    main()
