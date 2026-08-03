---
tags:
  - guides
  - markdown
---

Since you're building a "Best-in-Class" converter for your digital garden, you'll want a stack that handles **cleaning**, **sanitizing**, and **converting**.

Here are the top CDNs for every step of that process:

---

### 1. The "Cleaners" (Extraction)

Before converting to Markdown, you need to strip out the junk (ads, navbars, sidebars).

- **Mozilla Readability:** The gold standard. It's the engine behind Firefox’s "Reader View."
    
    - **CDN:** `https://cdnjs.cloudflare.com/ajax/libs/readability/0.6.0/Readability.min.js`
        
- **DOMPurify:** Essential if you are pasting raw HTML from the web. It prevents XSS attacks and cleans up messy tags.
    
    - **CDN:** `https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.2.7/purify.min.js`
        

### 2. The "Converters" (HTML → Markdown)

These take your cleaned HTML and turn it into the `.md` format you use in Obsidian or Astro.

- **Turndown:** The most popular and flexible converter. It's what we used in your current tool.
    
    - **CDN:** `https://cdnjs.cloudflare.com/ajax/libs/turndown/7.2.0/turndown.min.js`
        
- **Turndown GFM Plugin:** Needed if you want support for **GitHub Flavored Markdown** (like tables and task lists).
    
    - **CDN:** `https://unpkg.com/turndown-plugin-gfm/dist/turndown-plugin-gfm.js`
        

### 3. The "Parsers" (Markdown → HTML)

If you ever need to go the other direction (e.g., displaying your Markdown notes as beautiful web pages), use these:

- **Marked:** Built for speed. It’s tiny and very stable.
    
    - **CDN:** `https://cdnjs.cloudflare.com/ajax/libs/marked/16.3.0/lib/marked.umd.min.js`
        
- **Showdown:** Extremely easy to configure with lots of extensions for things like emojis or checkboxes.
    
    - **CDN:** `https://cdn.jsdelivr.net/npm/showdown@2.1.0/dist/showdown.min.js`
        

---

### Comparison of the Top Two Converters

|**Library**|**Best For**|**Core Strength**|
|---|---|---|
|**Turndown**|HTML to Markdown|**Extensibility.** You can add custom rules for things like Apple Dev Docs or AbeBooks.|
|**Marked**|Markdown to HTML|**Performance.** It's the fastest parser if you're loading huge files into your site.|

### How to use them together

For a "Copy-Paste to Obsidian" tool, the ideal flow is:

`Pasted HTML` → **DOMPurify** (Clean) → **Readability** (Extract) → **Turndown** (Convert) → `Final Markdown`.

Since your tool is already live, would you like me to show you how to add **DOMPurify** to it so it handles messy "right-click copy" code even better?