---
title: Coding Research & Web Tools Guide
description: Reference guide for web inspection, image extraction, coding helpers, and browser extensions
tags: [coding, web-tools, developer-tools, reference, guides]
created: 2025-10-06
updated: 2026-06-02
---

# 💻 Coding Research & Web Tools Guide

A comprehensive reference guide for web development, browser tools, image extraction, and coding resources.

---

## Table of Contents

1. [Browser Developer Tools](#browser-developer-tools)
2. [Image Extraction](#image-extraction)
3. [HTML & CSS Spacing](#html--css-spacing)
4. [Safari Extensions](#safari-extensions)
5. [Coding Cheat Sheet](#coding-cheat-sheet)
6. [Practical Notes](#practical-notes)

---

## Browser Developer Tools

### Inspect Element Guide

Extract image links and HTML from any website using browser developer tools.

**Step-by-Step:**

1. Open the website in your browser (Chrome, Firefox, Edge, Safari)
2. Right-click on the image → Select **Inspect** or **Inspect Element**
3. The Developer Tools panel opens, showing the HTML for that image
4. Look for the `<img>` tag in the HTML:

```html
<img src="https://example.com/images/image1.jpg" alt="description" />
```

5. Copy the URL from the `src` attribute
6. Right-click the URL → **Copy link address** or **Copy**

**Alternative: Find All Images on Page**

Press `Ctrl + F` (or `Cmd + F` on Mac) in DevTools and type `<img` to find all image tags.

### Finding Background Images

Some images are set as CSS background images instead of `<img>` tags:

```css
.element { 
    background-image: url('https://example.com/images/bg.jpg'); 
}
```

**To find these:**
1. Open Developer Tools
2. Go to the **Styles** panel
3. Search for `background-image` properties
4. Copy the URL from within `url('...')`

### Search with Regular Expressions

Find and remove specific patterns in DevTools:

1. Click the **.*** icon (or press `Alt + R`) to enable Regular Expression mode
2. Enter the search pattern for lines with only numbers:

```regex
^\d+\n
```

**Pattern Explanation:**
- `^` = Start of line
- `\d+` = One or more digits
- `\n` = Newline character

3. Leave the Replace box **empty** (to delete)
4. Click **Replace All** (or press `Alt + Enter`)

This removes all lines containing only numbers.

---

## Image Extraction

### JavaScript Console Methods

Extract all image URLs from a webpage programmatically.

#### Simple Image Tag Extraction

```javascript
// Extract all <img> src URLs
const imgTags = Array.from(document.querySelectorAll('img')).map(img => img.src);
console.log(imgTags);
```

#### All Images (Including Background Images)

```javascript
// Extract <img> src URLs
const imgTags = Array.from(document.querySelectorAll('img')).map(img => img.src);

// Extract background-image URLs
const bgImages = Array.from(document.querySelectorAll('*')).map(el => {
    const bg = window.getComputedStyle(el).backgroundImage;
    if (bg && bg !== 'none') {
        // Remove the url("...") wrapper
        return bg.slice(4, -1).replace(/"/g, '');
    }
}).filter(Boolean);

// Combine and remove duplicates
const allImages = [...new Set([...imgTags, ...bgImages])];
console.log(allImages);
```

#### Using document.images

```javascript
// Quick method to get all img src URLs
var imageUrls = Array.from(document.images).map(img => img.src);
console.log(imageUrls);
```

**How to Use:**
1. Open the webpage
2. Press `F12` or Right-click → **Inspect** → Go to **Console** tab
3. Paste one of the scripts above
4. Press Enter
5. Right-click the output → **Copy object** or select and copy manually

### Image Hosting

#### Freeimage.host Embed Script

Add image upload functionality to your site:

```html
<script async src="//freeimage.host/sdk/pup.js" data-url="https://freeimage.host/upload"></script>
```

#### Tumblr Image Hosting Limits

- **Maximum posts per day:** 150
- **Maximum images per post:** 30
- **Total daily capacity:** 150 × 30 = 4,500 images

---

## HTML & CSS Spacing

### Understanding data-spacing Attributes

The `data-spacing` attribute is a custom HTML marker and doesn't automatically control spacing.

```html
<p data-spacing="single">about</p>
```

**Important:** This attribute is just a marker. It requires CSS to actually affect spacing.

### CSS Line-Height Control

To control spacing, target the attribute with CSS and set `line-height`:

```css
p[data-spacing="single"] {
    line-height: 2; /* double spacing */
}
```

**Line-Height Values:**
- `1` = Single spacing (normal)
- `1.5` = 1.5x spacing
- `2` = Double spacing
- `2.5` = 2.5x spacing

### How It Works

| Component | Purpose | Example |
|-----------|---------|---------|
| HTML | Semantic marker | `<p data-spacing="single">` |
| CSS | Controls spacing | `p[data-spacing="single"] { line-height: 2; }` |
| Browser | Renders spacing | Displays with 2x line height |

---

## Safari Extensions

### Screenshot & Page Capture Tools

#### CleanShot X
- **Features:** Full-page screenshots, scrolling capture, annotation
- **Platform:** Mac (Safari support via app)
- **Best for:** Advanced screenshot editing and recording

#### Awesome Screenshot & Screen Recorder
- **Features:** Full webpage or area capture, annotate, save as PNG/PDF
- **Platform:** Safari Extension
- **Best for:** Quick web captures with annotations

#### Snagit (by TechSmith)
- **Features:** Scrolling captures, advanced annotations, video recording
- **Platform:** Mac (Safari support)
- **Best for:** Professional-grade screen captures

#### Pixar (formerly Web Clipper)
- **Features:** Save entire pages for reading, annotate, organize
- **Platform:** Safari Extension
- **Best for:** Web clipping and offline reading

#### SingleFile
- **Features:** Save complete pages as single HTML file
- **Platform:** Safari Extension
- **Best for:** Offline reading and archiving

**Installation:**
- Available through **Safari Extensions Gallery** or **Mac App Store**
- Some tools (Snagit, CleanShot X) require companion apps
- Check each tool's website for specific installation instructions

---

## Coding Cheat Sheet

### Code Writing

- Generate code from scratch (Python, JavaScript, C++, Java, etc.)
- Write functions/classes based on requirements
- Implement algorithms (sorting, pathfinding, ML, etc.)
- Create automation scripts (web scraping, data processing)

### Debugging & Fixes

- **Explain errors** — Paste error messages for breakdown
- **Fix broken code** — Share snippets for corrections
- **Optimize code** — Improve efficiency (time/space complexity)

### Code Explanation

- Break down complex code line-by-line
- Teach concepts (OOP, recursion, async/await, pointers, etc.)
- Compare different approaches to problems

### Documentation & Comments

- Add comments to existing code
- Generate docstrings (Python, JSDoc, etc.)
- Create README summaries

### API & Web Development

- **REST APIs:** Flask, FastAPI, Express, Django
- **Frontend:** HTML/CSS/JS, React, Vue, Svelte
- **Backend:** Node.js, Python, SQL/NoSQL databases

### Data Science & AI

- **Pandas/Numpy** — Data cleaning, manipulation, analysis
- **Machine Learning** — Scikit-learn, TensorFlow, PyTorch
- **Visualization** — Matplotlib, Seaborn, Plotly

### System & DevOps

- **Linux/Bash** — Task automation and scripting
- **Cloud:** AWS, GCP, Azure CLI commands
- **Docker & Kubernetes** — Config file generation and debugging

### Competitive Programming & DSA

- Solve LeetCode/HackerRank problems
- Data structures (arrays, trees, graphs, hash tables)
- Algorithms (DFS/BFS, DP, greedy, binary search)

### Version Control (Git)

- Git commands and merge conflict resolution
- GitHub workflows, CI/CD, .gitignore setup
- Rebasing, stashing, branch management

### Code Conversion

- Translate between languages (Python ↔ JavaScript, etc.)
- Upgrade/downgrade syntax (Python 2 → Python 3)

### Pro Tips

1. **Be specific** — Include language, error logs, expected output
2. **Share code snippets** — Provide context for analysis
3. **Ask for optimizations** — Request faster/cleaner approaches
4. **Request examples** — "Show me how to use X"

### Quick Prompts

Use these phrases with AI coding assistants:

- "Help me debug this Python loop"
- "Write a React component for a dropdown menu"
- "Explain how Kafka works"
- "Optimize this function for speed"
- "Convert this Python code to JavaScript"
- "Fix the merge conflict in this branch"

---

## Practical Notes

### Content Extraction Strategy

When extracting images from a website:

1. **Inspect individual images** for specific file URLs
2. **Use JavaScript console** for bulk extraction
3. **Check background images** separately from img tags
4. **Remove duplicates** when combining multiple sources
5. **Test hosting limits** before uploading (e.g., 4,500/day for Tumblr)

### Neocities Development

When working with Neocities projects:

- Plan page structure for scroll-to-footer extraction
- Use relative paths for internal images
- Test image loading across different page contexts
- Consider performance impact of large image counts

### Custom Attributes in HTML

When using custom attributes like `data-spacing`:

1. **HTML attribute** = Semantic marker only
2. **CSS** = Where actual styling happens
3. **Always pair attributes with CSS rules** for functionality
4. **Don't rely on attribute names** to automatically apply styles

---

## Resources

### Developer Tools Documentation
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools)
- [Safari Developer Tools](https://developer.apple.com/safari/tools/)

### Learning Platforms
- **LeetCode** — Competitive programming problems
- **HackerRank** — Coding challenges
- **Codewars** — Community coding challenges

### Image Resources
- **Freeimage.host** — Free image hosting
- **Tumblr** — Social image sharing (4,500 daily limit)
- **Neocities** — Web hosting with image support

---

**Last Updated:** June 2, 2026  
**Status:** Active Reference  
**Categories:** Web Tools, Developer Tools, Coding Resources

Save this guide! Reference it whenever you need quick solutions for:
- Extracting data from websites
- Debugging code issues
- Finding browser extensions
- HTML/CSS reference
- Coding task assistance
