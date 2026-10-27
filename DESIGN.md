---
version: alpha
name: Commonplace Garden
description: |
  A warm-paper commonplace book for a digital garden. Serif reading text on
  cream stock, monospace marginalia for metadata and navigation, forest-green
  ink for links, and a terracotta accent for hover and emphasis. Flat color
  blocking and hairline rules instead of shadows.
source:
  derivedFrom:
    - ref: agentsure
      url: https://designmd.me/discover/agentsure
      used: forest green, mono labels, hairline borders, dark terminal code, flat elevation
    - ref: anthropic
      url: https://designmd.me/discover/anthropic
      used: cream paper, terracotta accent, serif-led reading type, generous whitespace
colors:
  paper: "#F7F2E8"
  surface: "#EFE7D6"
  hairline: "#DDD2BD"
  ink: "#141413"
  body: "#33322D"
  faint: "#7A776C"
  primary: "#005032"
  accent: "#C6613F"
  highlight: "#E68846"
themes:
  dark:
    paper: "#0C1211"
    surface: "#1B201F"
    hairline: "#2A302F"
    ink: "#F5F8F7"
    body: "#CDD3D1"
    faint: "#7F8886"
    primary: "#00A265"
    accent: "#E68846"
typography:
  display:
    fontFamily: "Newsreader"
    fontStyle: italic
    fontWeight: 500
    letterSpacing: -0.01em
  body:
    fontFamily: "Newsreader"
    fontSize: 18px
    lineHeight: 1.65
  label:
    fontFamily: "JetBrains Mono"
    fontSize: 11px
    letterSpacing: 0.08em
    textTransform: uppercase
  code:
    fontFamily: "JetBrains Mono"
    fontSize: 13px
    lineHeight: 1.7
rounded:
  none: 0px
  sm: 4px
  md: 8px
spacing:
  unit: 4px
  gutter: 24px
  section: 48px
layout:
  left-rail: 264px
  reading-column: 42rem
  right-margin: 288px
elevation: color-blocking
---

# Commonplace Garden

## Principles

- **Paper first.** The page is cream stock; surfaces are slightly darker paper, never white cards with shadows.
- **Serif to read, mono to navigate.** Newsreader carries prose and headings; JetBrains Mono carries metadata, breadcrumbs, tags, the explorer, and code.
- **Marginalia.** Table of contents and backlinks live in the right margin like notes in a book.
- **Ink, not fills.** Links are green ink with an underline; hover shifts to terracotta. Highlight fills are reserved for `==marks==`.
- **Hairlines.** 1px rules separate regions; radius is 0 for structure, 4–8px for tags and code.

## Color roles

| Token | Light | Dark | Role |
|---|---|---|---|
| paper | `#F7F2E8` | `#0C1211` | page background |
| surface | `#EFE7D6` | `#1B201F` | code, callouts, tags |
| hairline | `#DDD2BD` | `#2A302F` | rules, borders |
| ink | `#141413` | `#F5F8F7` | headings |
| body | `#33322D` | `#CDD3D1` | prose |
| primary | `#005032` | `#00A265` | links |
| accent | `#C6613F` | `#E68846` | hover, active |

## Components

- **Masthead (left rail):** site title in italic serif, mono explorer beneath, hairline right border.
- **Article header:** mono breadcrumb, large italic title, mono meta line (date · reading time), tags as outlined chips.
- **Right margin:** TOC, then backlinks; each headed by a mono uppercase label.
- **Home:** recent notes list after the intro.

## Performance

- **Top-level nav only.** The left rail is generated at build time and lists top-level folders and root pages; there is no client-side file tree.
- **Search index excerpts.** `static/contentIndex.json` keeps the first 1,500 characters of each note and no link lists (`searchExcerptLength` in the ContentIndex plugin).
- **Page weight budget.** Notes heavier than `pageWeightBudget` (2,500 in `quartz.config.ts`) are split at build time into `note`, `note-page-2`, … with a pager. Weight is 1 per element, +2 per link, +1 per 30 characters of text. Parts break at headings when possible, and long lists, tables and paragraphs are cut between items.
- **External-link marker in CSS.** The per-link inline SVG is off; `a.external::after` draws the arrow.
