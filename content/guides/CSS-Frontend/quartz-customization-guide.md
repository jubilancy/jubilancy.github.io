# How to Customize Your Quartz Site

Quartz 4 is extremely customizable without needing to touch code. Here's everything you can do.

---

## Overview of Customization Levels

| Level | What you change | Difficulty | Code needed? |
|-------|-----------------|------------|--------------|
| **1. Basic** | Site title, theme, colors, fonts | ⭐ Easy | No |
| **2. Intermediate** | Layout, components, add plugins | ⭐⭐⭐ Medium | Maybe |
| **3. Advanced** | Custom CSS, write plugins, create components | ⭐⭐⭐⭐⭐ Hard | Yes |

---

## Level 1: Basic Customization (YAML only)

Edit **`quartz.config.yaml`** in your Quartz root directory. No coding required.

### 1.1 Change the Site Title & Branding

```yaml
configuration:
  pageTitle: "My Awesome Site"           # The main title
  pageTitleSuffix: " | My Site"          # Suffix added to page titles
  baseUrl: "mysite.com"                  # Your domain
  locale: "en-US"                        # Language/region
```

### 1.2 Change Colors (Light & Dark Mode)

```yaml
configuration:
  theme:
    colors:
      lightMode:
        light: "#faf8f8"           # Background
        lightgray: "#e5e5e5"       # Borders, subtle elements
        gray: "#b8b8b8"            # Secondary text
        darkgray: "#4e4e4e"        # Main text
        dark: "#2b2b2b"            # Dark accents
        secondary: "#284b63"       # Links, buttons
        tertiary: "#84a59d"        # Hover states, highlights
        highlight: "rgba(143, 159, 169, 0.15)"  # Highlighted text background
        textHighlight: "#fff23688" # Text search highlights (yellow)
      
      darkMode:
        light: "#161618"           # Dark background
        lightgray: "#393639"
        gray: "#646464"
        darkgray: "#d4d4d4"
        dark: "#efefef"
        secondary: "#7298c6"       # Adjusted for dark
        tertiary: "#a8bed8"
        highlight: "rgba(200, 200, 200, 0.15)"
        textHighlight: "#ff922b88"
```

**Easier way — use preset theme plugins** (see next section).

### 1.3 Change Fonts

```yaml
configuration:
  theme:
    typography:
      header: "Schibsted Grotesk"    # Headings font
      body: "Source Sans Pro"        # Main text font
      code: "IBM Plex Mono"          # Code font
```

**Available fonts:** Any Google Font (https://fonts.google.com)

### 1.4 Enable/Disable Core Features

```yaml
configuration:
  enableSPA: true                # Single Page App mode (faster navigation)
  enablePopovers: true           # Hover preview of linked notes
  defaultDateType: "modified"    # Show "modified" or "created" date
  ignorePatterns:                # Don't process these folders
    - "private"
    - "templates"
    - ".obsidian"
```

### 1.5 Enable Analytics

```yaml
configuration:
  analytics:
    provider: "plausible"        # Privacy-friendly analytics
    # Or use: "google" or "goatcounter"
```

### 1.6 Search Configuration

```yaml
configuration:
  search:
    tokenizeOnDiacritics: false  # Handle accented characters
```

---

## Level 2: Using Themes Plugin (YAML + Plugin)

Instead of manually setting colors, use a pre-made theme plugin.

### Install a Theme Plugin

```bash
npx quartz plugin add github:saberzero1/quartz-themes
```

Then in `quartz.config.yaml`:

```yaml
plugins:
  - source: github:saberzero1/quartz-themes
    enabled: true
    options:
      theme: "tokyo-night"    # or "dracula", "nord", "catppuccin", etc.
      mode: "both"            # "light", "dark", or "both"
```

**Available themes:**
- `tokyo-night` (modern dark theme)
- `dracula` (dark theme with vibrant colors)
- `nord` (cool Arctic blue theme)
- `catppuccin` (pastel theme)
- `ayu` (minimalist theme)
- `solarized` (classic light/dark)
- Custom themes via `quartz-community/themes`

### Color Mode Toggle

Enable light/dark mode toggle:

```yaml
plugins:
  - source: github:quartz-community/plugins
    name: DarkModeToggle
    enabled: true
```

---

## Level 2B: Layout & Component Customization

Change where components appear on your site.

### Example: Rearrange Components

In `quartz.config.yaml`:

```yaml
layout:
  groups:
    toolbar: [Search, DarkModeToggle, Links]  # Top bar components
  
  byPageType:
    content:
      beforeBody: [Breadcrumbs]               # Above content
      left: [TableOfContents]                 # Left sidebar
      right: [Backlinks, TagList]             # Right sidebar
    
    folder:
      left: []                                # No left sidebar on folder pages
      right: [RecentNotes, PopularNotes]
```

### Available Layout Components

```
- Search              (search bar)
- DarkModeToggle      (light/dark mode)
- Breadcrumbs         (navigation path)
- TableOfContents     (page TOC)
- Backlinks           (pages linking to this)
- TagList             (tags on page)
- Graph               (note graph visualization)
- RecentNotes         (recently modified)
- AllPages            (sitemap)
```

See **Layout Components** in Quartz docs for full list.

---

## Level 2C: Add/Remove Plugins

Plugins extend Quartz functionality.

### Common Plugins to Add

**Comments (Giscus):**
```bash
npx quartz plugin add github:quartz-community/comments
```

```yaml
plugins:
  - source: github:quartz-community/comments
    enabled: true
    options:
      provider: giscus
      options:
        repo: "username/repo"          # Your GitHub repo
        repoId: "YOUR_REPO_ID"         # From giscus.app
        category: "Announcements"
        categoryId: "YOUR_CATEGORY_ID"
```

**Syntax Highlighting:**
```yaml
plugins:
  - source: github:quartz/plugins/transformers/syntax-highlighting
    options:
      theme:
        light: "github-light"
        dark: "github-dark"
```

**Math (LaTeX):**
```yaml
plugins:
  - source: github:quartz/plugins/transformers/latex
    options:
      renderEngine: "katex"  # Fast math rendering
```

**Full-text Search:**
Built-in by default. Configure with:
```yaml
plugins:
  - source: github:quartz/plugins/emitters/contentIndex
    options:
      enableSiteMap: true
      enableRSS: true
```

### Disable a Plugin

Set `enabled: false`:
```yaml
plugins:
  - source: github:quartz/plugins/transformers/ObsidianFlavoredMarkdown
    enabled: false
```

---

## Level 3: Custom Styling (CSS)

Edit **`quartz/styles/custom.scss`** for custom CSS.

### Example: Change Title Color

```scss
// quartz/styles/custom.scss

h1 {
  color: #your-color;
  font-size: 2.5rem;
}

// Change link colors
a {
  color: #0066cc;
  
  &:hover {
    color: #0052a3;
  }
}

// Customize code blocks
pre {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 1rem;
}
```

### Override Component Styles

```scss
// Hide the breadcrumbs
.breadcrumb-nav {
  display: none;
}

// Make the sidebar wider
.sidebar {
  width: 350px;
}

// Style blockquotes differently
blockquote {
  border-left: 4px solid #your-color;
  padding-left: 1.5rem;
  background-color: #f0f0f0;
  border-radius: 4px;
}
```

### Responsive Design

```scss
// Mobile adjustments
@media (max-width: 600px) {
  .sidebar {
    display: none;  // Hide sidebar on mobile
  }
  
  h1 {
    font-size: 1.5rem;  // Smaller title
  }
}
```

---

## Level 3B: Custom Theme with CSS

Create a full custom theme file.

1. Create `quartz/static/your-theme.css`
2. Add your CSS
3. Reference it in `quartz.config.ts` (or use the theme plugin)

```css
/* quartz/static/custom-theme.css */

:root {
  --color-primary: #0066cc;
  --color-text: #2b2b2b;
  --color-background: #fff;
  --color-border: #e5e5e5;
}

[data-theme="dark"] {
  --color-primary: #7298c6;
  --color-text: #d4d4d4;
  --color-background: #161618;
  --color-border: #393639;
}

body {
  color: var(--color-text);
  background: var(--color-background);
}

a {
  color: var(--color-primary);
}
```

---

## Level 3C: Customize Markdown Features

Control what Markdown syntax is available.

```yaml
plugins:
  - source: github:quartz/plugins/transformers/ObsidianFlavoredMarkdown
    options:
      enableInHtmlEmbed: false        # Disable wiki-links in HTML
      
  - source: github:quartz/plugins/transformers/GitHubFlavoredMarkdown
    # Enables tables, strikethrough, task lists
```

### Callouts (Blockquote Styling)

```markdown
> [!NOTE]
> This is a note callout

> [!WARNING]
> This is a warning callout

> [!TIP]
> This is a tip callout
```

---

## Level 4: Advanced Customization (Code Required)

### Create Custom Components

Components are React/JSX files in `quartz/components/`.

**Example: Custom footer**

```tsx
// quartz/components/CustomFooter.tsx
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function CustomFooter(props: QuartzComponentProps) {
    return (
      <footer>
        <p>© 2024 My Site. All rights reserved.</p>
        <p>Built with Quartz</p>
      </footer>
    )
  }
  
  return CustomFooter
}) satisfies QuartzComponentConstructor
```

Then add to layout:
```yaml
layout:
  byPageType:
    content:
      afterBody: [CustomFooter]
```

### Create Custom Plugins

Plugins transform content during the build process.

See **Making Your Own Plugins** in Quartz docs for full guide.

---

## Configuration File Structure Quick Reference

```yaml
# quartz.config.yaml

configuration:
  # Site info
  pageTitle: "My Site"
  pageTitleSuffix: ""
  baseUrl: "example.com"
  locale: "en-US"
  
  # Features
  enableSPA: true
  enablePopovers: true
  defaultDateType: "modified"
  
  # Theme
  theme:
    fontOrigin: "googleFonts"
    cdnCaching: true
    typography:
      header: "Font Name"
      body: "Font Name"
      code: "Font Name"
    colors:
      lightMode: { ... }
      darkMode: { ... }
  
  # Analytics
  analytics:
    provider: "plausible"

plugins:
  - source: github:user/repo
    enabled: true
    options: { ... }

filters:
  - source: github:quartz/plugins/filters/RemoveDrafts

emitters:
  - source: github:quartz/plugins/emitters/ContentPage
```

---

## Common Customizations by Goal

### Goal: Minimal Design
```yaml
configuration:
  theme:
    colors:
      lightMode:
        light: "#ffffff"
        lightgray: "#f0f0f0"
        gray: "#a0a0a0"
        darkgray: "#404040"
        dark: "#000000"
        secondary: "#0066cc"
        tertiary: "#6600cc"

plugins:
  - source: github:saberzero1/quartz-themes
    options:
      theme: "nord"
      mode: "both"
```

### Goal: Dark Theme by Default
```yaml
configuration:
  theme:
    colors:
      darkMode:
        light: "#0a0e27"
        lightgray: "#1a1f3a"
        gray: "#565f89"
        darkgray: "#d0d6e8"
        dark: "#eef2f5"
```

### Goal: Academic/Research Site
```yaml
plugins:
  - source: github:quartz/plugins/transformers/latex
    options:
      renderEngine: "katex"
  
  - source: github:quartz/plugins/transformers/CitationProcessor
    enabled: true
```

### Goal: Blog with Comments
```yaml
plugins:
  - source: github:quartz-community/comments
    options:
      provider: giscus
      options:
        repo: "your/repo"
        repoId: "..."
        categoryId: "..."
```

---

## How to Find Settings for Specific Plugins

1. **Official plugins:** https://github.com/jackyzha0/quartz/tree/v4/quartz/plugins
2. **Community plugins:** https://github.com/search?q=quartz-community-plugin
3. **Check the plugin's README** for available options
4. **VS Code hint:** Use Ctrl+Space in `quartz.config.yaml` for autocomplete

---

## Testing Your Changes

```bash
# Rebuild with your changes
npx quartz build

# Serve locally to preview
npx quartz build --serve

# Visit http://localhost:8080
```

Hot reload is built-in — your changes appear instantly!

---

## Common Gotchas

| Problem | Solution |
|---------|----------|
| **Colors don't change** | Clear browser cache, hard-refresh (Ctrl+Shift+R) |
| **Plugin won't load** | Check spelling, use `npx quartz plugin add` to install |
| **Custom CSS not working** | Put in `quartz/styles/custom.scss`, not in a new file |
| **Components not showing** | Make sure they're added to the correct `layout` section |
| **Site title not updating** | Rebuild with `npx quartz build` |

---

## Summary: Where to Edit What

| What you want to change | Edit this file | Difficulty |
|------------------------|---------------|-----------|
| Site title, domain, locale | `quartz.config.yaml` | ⭐ |
| Colors (light/dark) | `quartz.config.yaml` | ⭐ |
| Fonts | `quartz.config.yaml` | ⭐ |
| Theme preset | `quartz.config.yaml` + plugin | ⭐ |
| Layout (sidebars, components) | `quartz.config.yaml` | ⭐⭐ |
| Add plugins (comments, analytics) | `quartz.config.yaml` | ⭐⭐ |
| Custom CSS styling | `quartz/styles/custom.scss` | ⭐⭐⭐ |
| Custom components (React) | `quartz/components/` | ⭐⭐⭐⭐ |
| Custom plugins (transformers) | `quartz/plugins/` | ⭐⭐⭐⭐⭐ |

---

## Next Steps

1. **Start with Level 1** — Change title, colors, fonts in YAML
2. **Try a theme plugin** — Use presets for instant visual change
3. **Customize layout** — Move components around via YAML
4. **Add plugins** — Comments, analytics, etc.
5. **Custom CSS** — Only if you need pixel-perfect control
6. **Custom components** — Only if YAML can't do what you want

Quartz is designed so you can accomplish 95% of customizations without leaving `quartz.config.yaml`!
