---
title: Bear Blog Reference Guide
description: Comprehensive guide to Bear Blog features, configuration, and advanced techniques
tags: [bear, blogging, static-site, reference, documentation]
created: 2025-10-06
updated: 2026-06-02
---

# 🐻 Bear Blog Reference Guide

A complete reference guide for Bear Blog features, configuration, and best practices for your blogging platform.

## Quick Links

- **[Bear Docs Home](https://docs.bearblog.dev/)**
- **[Bear Platform](https://bearblog.dev/)**
- **[Feature Requests](https://bear.nolt.io/)**

---

## Core Features

### Post Templates

Set up consistent post structures to improve efficiency and maintain formatting consistency across your blog.

- Access post templates in the **Posts section** of your dashboard
- Remove boilerplate content and set custom parameters
- Templates streamline the publishing process
- Useful for recurring post types (newsletters, reviews, updates)

### Embedded Post Lists

Dynamically insert filtered post lists into any content (posts, homepage, footer).

**Basic Syntax:**
```
{{ posts }}
```

**Optional Filters and Parameters:**

| Parameter | Description | Example |
|-----------|-------------|---------|
| `tag` | Filter posts by specific tags | `{{ posts\|tag:news }}` |
| `tag` (multiple) | Filter by multiple tags | `{{ posts\|tag:news,opinion }}` |
| `limit` | Limit number of posts displayed | `{{ posts\|limit:5 }}` |
| `order` | Sort by date (asc/desc, default: desc) | `{{ posts\|order:asc }}` |
| `description` | Show post meta descriptions | `{{ posts\|description:True }}` |
| `content` | Show full post content (pages only) | `{{ posts\|content:True }}` |

**Combined Parameters:**
```
{{ posts|tag:news|limit:5|order:asc|description:True }}
```

**Note:** Spaces are optional around filter delimiters.

**Styling Embedded Content:**
```css
ul.embedded.blog-posts li {
    display: flex;
    flex-flow: row wrap;
}
```

### Mathematical Notation

Write mathematical notation in LaTeX format in any content field.

**Example:**
```
Energy conversion: 4 \, \text{H} \rightarrow \text{He} + 2 \, \text{e}^+ + 2 \, \nu_e + \gamma
```

---

## Blog & Post Attributes

Insert dynamic variables into any post or blog content:

### Blog Attributes
```
{{ blog_title }}
{{ blog_description }}
{{ blog_link }}
{{ blog_created_date }}
{{ blog_last_modified }} ago
{{ blog_last_posted }} ago
```

### Post Attributes
```
{{ post_title }}
{{ post_description }}
{{ post_link }}
{{ post_published_date }}
{{ post_last_modified }} ago
```

**Example Usage:**
```
This post ({{ post_title }}) was last edited {{ post_last_modified }} ago.
```

---

## Navigation

Set up blog navigation using standard markdown syntax for links.

**Basic Navigation:**
```
Home [/] Blog [/blog/] RSS [/feed/]
```

**Homepage as Blog List:**
Leave the content of your homepage empty (everything below `___`) to display your blog list as the homepage.

**Adding Pages:**
```
Home [/] Projects [/projects/]
```

**External Links:**
```
Home [/] Example [https://example.com]
```

**Custom Bear Markdown Syntax:**
```
Home [/] Example [tab:https://example.com]
```

### Internal Page Linking

Link to specific sections on the same page using heading IDs.

Headings automatically generate IDs: `# Subsection 2` becomes `subsection-2`

```
[Subsection 2 link](#subsection-2)
```

---

## Advanced Configuration

### Dashboard Styling

Customize your dashboard appearance via **Customise dashboard** in your account settings.

**Example CSS:**
```css
body { 
    max-width: 1024px; 
}

button { 
    padding: 10px 15px; 
    background-color: #eceff4; 
    border-radius: 10px;
    border: 0; 
}
```

### robots.txt Configuration

Edit your `robots.txt` file in **Settings > Advanced settings** to control search engine and bot access.

**Block ChatGPT Example:**
```
User-agent: GPTBot
Disallow: /
```

### Tag Management

Previously used tags appear in the **Attributes** dropdown above the post text area for easy reference and reuse.

---

## Comments System

Bear does not have native comments. Instead, Bear recommends encouraging readers to reach out via email for more meaningful interactions.

### Adding Comments with Cusdis

Use [Cusdis](https://cusdis.com/) (or [Komments](https://komments.cloud/)) as a privacy-respecting comments solution.

**Setup Steps:**
1. Sign up for Cusdis
2. Add your blog to the dashboard
3. Get the embedded code

**Implementation:**
Replace the following variables in the Cusdis embed code:
- `{{ PAGE_ID }}` → `{{ post_link }}`
- `{{ PAGE_URL }}` → `{{ post_link }}`
- `{{ PAGE_TITLE }}` → `{{ post_title }}`

**Example Code:**
```html
<div id="cusdis_thread"
  data-host="https://cusdis.com"
  data-app-id="xxx"
  data-page-id="{{ post_link }}"
  data-page-url="{{ post_link }}"
  data-page-title="{{ post_title }}"
></div>
<script async defer src="https://cusdis.com/js/cusdis.es.js"></script>
```

**Add to All Posts:**
Add the code to your Post template so every post is pre-populated with the comment system.

---

## CSS & Styling

### Bear CSS Classes

Bear provides built-in CSS selectors for customizing specific pages and elements.

**Page-Level Classes:**
```css
.home {}        /* Homepage root */
.post {}        /* Any post */
.page {}        /* Any page */
.blog {}        /* Blog list page */
.subscribe {}   /* Email subscription page */
.not-found {}   /* 404 error page */
```

**Combined Selectors:**
```css
.page .post {}  /* Both pages and posts */
```

**Element Classes:**
```css
.title h1 {}           /* Blog title heading */
.blog-posts {}         /* Post list <ul> */
nav {}                 /* Navigation header */
.highlight, .code {}   /* Code blocks */
.embed {}              /* Embedded post lists */
```

### Custom Page Classes

Add custom class names to individual posts via the `class_name` header option for page-specific styling.

**Example:**
```
class_name: contact-page
```

---

## Post Configuration

### Page vs Post

Control whether content appears as a page or post:
```
is_page: FALSE  /* Converts page to post */
```

### Post Types

Posts can serve different functions:
- Standard blog post
- Page (no date display)
- Navigation item
- Reusable template

---

## Useful Resources

### CSS Learning & Tools
- [W3Schools CSS Reference](https://www.w3schools.com/Css/)
- [CSSSed - CSS Snippets](https://www.cssbed.com/)
- [Bear Blog Styling Guide](https://docs.bearblog.dev/styling/)

### Markdown & Syntax
- [Markdown Cheatsheet](https://herman.bearblog.dev/markdown-cheatsheet/)

### Tag Filtering
Filter posts by tag using query parameters:
```
https://yourblog.bearblog.dev/blog/?q=TAGNAME
```

---

## Best Practices

### Content Organization

1. **Use consistent tags** for better organization and filtering
2. **Leverage post templates** for recurring content types
3. **Set meta descriptions** for better SEO and preview quality
4. **Use meaningful navigation** to guide readers through your content

### Performance

- Use `{{ posts|limit:X }}` to avoid loading too many posts at once
- Combine filters efficiently to reduce processing
- Cache embedded post lists when possible

### SEO & Discoverability

- Configure robots.txt appropriately for your content goals
- Use descriptive titles and meta descriptions
- Implement tag strategy for content discovery
- Consider RSS feed optimization in settings

### Email & Newsletters

- Set up email subscriptions in settings
- Create a dedicated newsletter section if needed
- Use embedded post lists to showcase recent content

---

## Troubleshooting

### Posts Not Appearing

Check:
- Post is published (not as draft)
- Post is correctly categorized/tagged
- Filter syntax is correct in embedded lists
- Check the official [troubleshooting guide](https://docs.bearblog.dev/not-seeing-your-post/)

### Styling Not Applied

- Verify CSS class names match Bear's available classes
- Check CSS specificity and cascade rules
- Test in incognito/private browsing mode
- Use browser developer tools to inspect elements

### Template Issues

- Ensure attribute syntax is correct: `{{ attribute_name }}`
- Verify custom variables exist before referencing
- Check post template configuration in dashboard

---

## Pro Tips

✨ **Maximize Efficiency**
- Set up post templates with your preferred structure
- Use existing tag list for consistency
- Create reusable navigation snippets

🎨 **Design Enhancements**
- Combine dashboard CSS with page-level selectors for comprehensive styling
- Use custom class names for one-off design experiments
- Reference CSSSed for style inspiration

📊 **Content Strategy**
- Use embedded post lists to create topic-specific hubs
- Leverage mathematical notation for technical content
- Implement Cusdis for reader engagement without spam

---

**Last Updated:** June 2, 2026  
**Platform:** Bear Blog  
**Status:** Active Reference  

For more help, visit [Bear Blog Docs](https://docs.bearblog.dev/) or post feature requests on [Bear's feedback board](https://bear.nolt.io/).
