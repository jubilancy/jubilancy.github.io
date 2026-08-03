---
tags:
  - guides
  - terminal
---
# qlmarkdown_cli Reference Guide

## Overview

`qlmarkdown_cli` is the command-line interface bundled with **QLMarkdown**, a macOS Quick Look plugin that renders Markdown files natively in Finder. The CLI converts `.md` files to formatted HTML directly from the terminal — useful for automation, batch processing, and scripting pipelines. It uses the same rendering engine as the QLMarkdown macOS app, so all extensions (emoji, math, syntax highlighting, tables) are accessible from the command line.

---

## Installation

**Step 1 — Install QLMarkdown via Homebrew:**

```zsh
brew install --cask qlmarkdown
```

**Step 2 — Remove macOS quarantine (required for unsigned apps):**

```zsh
xattr -r -d com.apple.quarantine /Applications/QLMarkdown.app
```

**Step 3 — Create a system-wide symlink:**

```zsh
sudo ln -s /Applications/QLMarkdown.app/Contents/Resources/qlmarkdown_cli /usr/local/bin/qlmarkdown_cli
```

After this, `qlmarkdown_cli --help` should work from any directory.

> **Verify Markdown content type recognition:**
> ```zsh
> touch /tmp/test.md && mdls -name kMDItemContentType /tmp/test.md && rm /tmp/test.md
> # Expected: kMDItemContentType = "net.daringfireball.markdown"
> ```

---

## Basic Usage

```
qlmarkdown_cli [-o <file|dir>] [-v] <file> [..]
```

| Argument | Description |
|----------|-------------|
| `<file>` | One or more `.md` source files to process |
| `-o <file/dir>` | Output destination. A directory creates `<source>.html` inside it. The output file is always overwritten. Omit to print to stdout. |
| `-v` | Verbose mode (only valid with `-o`) |
| `-h` | Show help and exit |

### Quick Examples

```zsh
# Print rendered HTML to terminal
qlmarkdown_cli README.md

# Save to a specific file
qlmarkdown_cli README.md -o output.html

# Batch convert all .md files into ./html/
qlmarkdown_cli -o ./html/ *.md
```

---

## Rendering Options

These flags override the QLMarkdown app settings. Unspecified options fall back to the GUI app configuration.

| Flag | Values | Description |
|------|--------|-------------|
| `--footnotes` | on/off | Parse Markdown footnote syntax |
| `--hard-break` | on/off | Render soft breaks as hard `<br>` line breaks |
| `--no-soft-break` | on/off | Render soft breaks as spaces |
| `--raw-html` | on/off | Allow raw HTML and unsafe links |
| `--smart-quotes` | on/off | Convert straight quotes to curly quotes |
| `--validate-utf8` | on/off | Validate UTF-8 encoding before parsing |
| `--code` | on/off | Show raw plain text instead of rendered HTML |
| `--appearance` | light/dark | Force light or dark theme in output |
| `--about` | on/off | Show/hide a QLMarkdown footer in the output |
| `--debug` | on/off | Inject debug information into the HTML output |

---

## Extensions

| Extension | Values | Description |
|-----------|--------|-------------|
| `--autolink` | on/off | Auto-convert bare URLs and emails to clickable links |
| `--emoji` | image/font/off | Render `:shortcodes:` as image or font emoji |
| `--github-mentions` | on/off | Convert `@username` to a GitHub profile link |
| `--heads-anchor` | on/off | Add anchor links to all headings |
| `--highlight` | on/off | Highlight text wrapped in `==double equals==` |
| `--inline-images` | on/off | Embed images as Base64 directly in the HTML |
| `--math` | on/off | Render LaTeX math expressions |
| `--table` | on/off | Enable GFM pipe tables |
| `--tag-filter` | on/off | Strip dangerous HTML tags like `<script>` |
| `--tasklist` | on/off | Render `- [ ]` / `- [x]` as checkboxes |
| `--strikethrough` | single/double/off | Use single or double tilde for strikethrough |
| `--syntax-highlight` | on/off | Syntax-color content inside fenced code blocks |
| `--sub` | on/off | Format `~subscript~` text |
| `--sup` | on/off | Format `^superscript^` text |
| `--yaml` | rmd/qmd/all/off | Render YAML front matter header |

---

## Common Workflows

**Full-featured single file export:**

```zsh
qlmarkdown_cli --table on --syntax-highlight on --emoji image --math on README.md -o README.html
```

**Safe batch export (strip dangerous HTML, embed images):**

```zsh
qlmarkdown_cli --tag-filter on --inline-images on -o ./export/ docs/*.md
```

**Dark-themed output for a personal site:**

```zsh
qlmarkdown_cli --appearance dark --heads-anchor on -o site/ *.md
```

---

## Key Notes

- When processing **multiple files**, `-o` must point to a **directory**, not a single file.
- The `sudo` symlink step is required because `/usr/local/bin` is root-owned on macOS with SIP enabled.
- `--inline-images` produces a fully self-contained HTML file with no external image dependencies.
- All unspecified rendering options inherit from the QLMarkdown GUI app preferences — configure your defaults there.
