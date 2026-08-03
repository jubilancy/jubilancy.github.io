---
tags:
  - obsidian
  - guide
  - guides
---
## **TL;DR**

**Linked Notes Resolution** scans your note for [Internal Links](https://help.obsidian.md/Linking+notes+and+files/Internal+links) (like `![[My Note]]`) and embeds the actual text of those notes into the file before it gets uploaded. **Max Resolution Depth** determines how many "levels" of these links the plugin will follow—level 1 only includes notes you linked directly, while level 2 would also include notes linked inside _those_ notes.

---

## **Setting Definitions**

### **Linked Notes Resolution**

- **What it does:** It treats your [[Linked Notes]] like "transclusions" or embeds.
    
- **Example:** If you have a note called `Main` that contains `![[SubNote]]`, the plugin won't just upload the text "![[SubNote]]"; it will grab the text inside `SubNote` and paste it into the `Main` file during the upload process.
    
- **Why use it:** This ensures your published website displays your full content even if you've split your writing across multiple smaller notes.
    

### **Max Resolution Depth**

- **The "Inception" Setting:** This controls how deep the plugin digs into nested links.
    
    - **Depth 1 (Default):** It includes the content of notes linked in your main file.
        
    - **Depth 2:** If Note A links to Note B, and Note B links to Note C, the plugin will include the content of **both** B and C.
        
- **Note:** Increasing this too high can cause infinite loops or massive file sizes if your notes are heavily cross-linked.
    

---

## **Bulk Updating Frontmatter**

Yes, there are a few highly-rated [Obsidian](https://obsidian.md/) plugins that can handle batch updates for entire folders:

|**Plugin**|**Best For...**|
|---|---|
|**[Multi Properties](https://obsidian.md/plugins?id=multi-properties)**|**The easiest option.** You can select multiple files in the File Explorer (Cmd/Ctrl + Click), right-click, and add/remove properties to all of them at once.|
|**[Linter](https://obsidian.md/plugins?id=obsidian-linter)**|**Automation.** You can set rules (like "always add a 'status' tag") and run it on a specific folder or your entire vault to force consistency.|
|**[Metadata Menu](https://obsidian.md/plugins?id=metadata-menu)**|**Power users.** It allows you to create "fileClasses" (schemas) and bulk-update fields using a table-view similar to [Notion](https://www.notion.so/).|
|**[YAML Toolkit](https://obsidian.md/plugins?id=yaml-toolkit)**|**Conditional updates.** Useful if you want to say "If a note has Tag X, add Property Y."|

> [!TIP]
> 
> **Recommendation:** Start with **[Multi Properties](https://obsidian.md/plugins?id=multi-properties)** if you just want to quickly add a single key/value to a bunch of files. If you need to clean up and standardize your entire vault, use **[Linter](https://obsidian.md/plugins?id=obsidian-linter)**.


```json
{
  "font-overrides@@default-font": "atkinson hyperlegible next light",
  "obsidian-velocity@@color-highlight-rgb": "var(--highlight-green-rgb)",
  "obsidian-velocity@@enable-special-text": true,
  "obsidian-velocity@@enable-special-code": true,
  "obsidian-dynamic-outline@@hide-button-from-toolbar": false,
  "obsidian-velocity@@override-default-font": true,
  "obsidian-velocity@@line-height-normal": "1.6",
  "obsidian-velocity@@vl-layout-padding": "8px",
  "obsidian-velocity@@file-line-width": 42.5,
  "obsidian-velocity@@switch-edit-icons": false,
  "obsidian-velocity-config@@active-line-highlight": true,
  "obsidian-velocity-config@@enable-dim-img": true,
  "obsidian-velocity-config@@improve-pinned-tabs": true,
  "obsidian-velocity-config@@disable-corner-smoothing": true,
  "font-overrides@@text-normal": "#50675B",
  "font-overrides@@text-accent": "#AFA2F0",
  "obsidian-velocity@@theme-paint-light": "jetblue"
}

{
  "font-overrides@@default-font": "atkinson hyperlegible next light",
  "obsidian-velocity@@color-highlight-rgb": "var(--highlight-green-rgb)",
  "obsidian-velocity@@enable-special-text": true,
  "obsidian-velocity@@enable-special-code": true,
  "obsidian-dynamic-outline@@hide-button-from-toolbar": false,
  "obsidian-velocity@@override-default-font": true,
  "obsidian-velocity@@line-height-normal": "1.6",
  "obsidian-velocity@@vl-layout-padding": "8px",
  "obsidian-velocity@@file-line-width": 42.5,
  "obsidian-velocity@@switch-edit-icons": false,
  "obsidian-velocity-config@@active-line-highlight": true,
  "obsidian-velocity-config@@enable-dim-img": true,
  "obsidian-velocity-config@@improve-pinned-tabs": true,
  "obsidian-velocity-config@@disable-corner-smoothing": true,
  "font-overrides@@text-normal": "#50675B",
  "font-overrides@@text-accent": "#AFA2F0",
  "obsidian-velocity@@theme-paint-light": "jetblue",
  "baseline-style@@accented-interface": true,
  "baseline-style@@background-contrast-light": "contrast-light",
  "baseline-style@@color-scheme-light": "flexoki-light",
  "baseline-style@@color-scheme-accent": true,
  "baseline-style@@background-primary@@light": "#FAF3DD",
  "baseline-style@@background-primary-alt@@light": "#AAC0AA",
  "baseline-style@@background-secondary@@light": "#CCD5AE",
  "baseline-style@@interactive-normal@@light": "#FAF3DD",
  "baseline-style@@background-modifier-border@@light": "#FF00F2",
  "baseline-style@@background-modifier-border-hover@@light": "#FFC300"
}
```