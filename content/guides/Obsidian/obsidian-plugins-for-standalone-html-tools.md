---
title: "Obsidian Plugins For Standalone Html Tools"
date: 2026-04-25
tags:
  - obsidian
---

# TL;DR

* **[Obsidget](https://www.google.com/search?q=https://github.com/TaitBerlette/obsidget)**: Best for creating interactive widgets (HTML/JS) that save data directly into your notes.
* **[Commander](https://github.com/phibr0/obsidian-commander)**: Essential for adding custom buttons to your UI to launch your tools.
* **[Custom JS](https://www.google.com/search?q=https://github.com/samrock552/obsidian-custom-js)**: Perfect for centralizing API keys and scripts used across multiple tools.
* **[Obsidian CLI](https://obsidian.md/roadmap/)**: A 2026 core addition for controlling your vault via the terminal.
* **[Digital Garden](https://github.com/oleeskild/obsidian-digital-garden)**: Complements your **[Astro/Quartz](https://quartz.jzhao.xyz/)** workflow for publishing notes.
* **[Terminal](https://www.google.com/search?q=https://github.com/SvenWesterlaken/obsidian-terminal)**: Run your **[publish.sh](https://eliana.lol/)** script directly inside an Obsidian tab.
* **[Iconize](https://github.com/FlorianWoelki/obsidian-iconize)**: Add custom icons to your `tools` folder and HTML files for a cleaner UI.
* **[Dataview](https://github.com/blacksmithgu/obsidian-dataview)**: Create a "Tool Dashboard" to track all your local HTML utilities.
* **[Style Settings](https://www.google.com/search?q=https://github.com/mgmeyers/obsidian-style-settings)**: Deeply customize your theme (like **[AnuPpuccin](https://www.google.com/search?q=https://github.com/AnuPpuccin/AnuPpuccin)**) without touching CSS.

---

### 1. [Obsidget](https://www.google.com/search?q=https://github.com/TaitBerlette/obsidget) (Interactive Widgets)

Since you’re building your own tools, this is a game-changer. It allows you to write HTML/JS inside a code block, and—unlike a standard iframe—it **persists state**.

* **Use Case:** If your "link-splitter" has a "History" list, Obsidget can save that history directly into the Markdown file so it's there when you reload.
* **Isolation:** It uses Shadow DOM, so your tool's CSS won't mess up your Obsidian theme.

### 2. [Commander](https://github.com/phibr0/obsidian-commander) (UI Customization)

Now that you have your tools working via the Command Palette, you’ll want them accessible.

* **What it does:** Allows you to put a button for your "Link Splitter" anywhere—the tab bar, the status bar, or even a floating menu.
* **Pro-tip:** Use it to create a "Tools Dashboard" in your sidebar.

### 3. [Custom JS](https://www.google.com/search?q=https://github.com/samrock552/obsidian-custom-js) (Script Management)

Since you mentioned API keys, this plugin is the "developer way" to handle them.

* **How it works:** You create a `scripts.js` file in your vault. Define a class with your API keys.
* **Integration:** Any other plugin (like Dataview or Templater) can call `customJS.MySecrets.getApiKey()` instead of you hardcoding it in five different HTML files.

### 4. [Obsidian Web Clipper](https://www.google.com/search?q=https://obsidian.md/browser-extension) (Official 2026 Release)

If your "link-splitter" is part of a research workflow, the official 2026 Web Clipper is the best way to get data into the vault for your tools to process.

* **Feature:** It supports logic-based templates (loops/conditionals), so you could pre-format links before they even reach your splitter tool.

### 5. [Shell Commands](https://www.google.com/search?q=https://github.com/TaitBerlette/obsidian-shell-commands)

Since you use terminal workflows (like your `publish.sh`), this plugin lets you trigger those scripts from inside Obsidian.

* **Why it matters:** You can create a button that runs your deployment script or triggers a Python scraping script and then refreshes your HTML tool automatically.

### 6. [Terminal](https://www.google.com/search?q=https://github.com/SvenWesterlaken/obsidian-terminal)

Since you're already using terminal-based workflows on your MacBook Air, this is a must.

* **The Benefit:** It embeds a Zsh/Bash terminal inside an Obsidian pane.
* **Your Use Case:** You can run your `publish.sh` script or check your Git status for your digital garden without ever switching apps.

### 7. [Digital Garden Plugin](https://github.com/oleeskild/obsidian-digital-garden)

Even though you use Quartz/Astro, this plugin is great for rapid-fire publishing.

* **The Benefit:** It allows you to toggle a "publish" status on a note and sync it to a web-accessible garden instantly via GitHub.
* **Compatibility:** It plays nicely with the "indie web" and "digital gardening" principles you've been exploring.

### 8. [Dataview](https://github.com/blacksmithgu/obsidian-dataview)

This is the "database" layer of Obsidian.

* **The Benefit:** It lets you treat your vault like a database.
* **Your Use Case:** You can create a central "Tools Hub" note that automatically lists every file in your `tools` folder along with a description or the date you last updated the JS code.

### 9. [Iconize](https://github.com/FlorianWoelki/obsidian-iconize) (formerly Obsidian Icons)

Perfect for making your vault look like a professional IDE or personal hub.

* **The Benefit:** You can assign specific icons to folders or individual files in the sidebar.
* **Your Use Case:** Give your `link-splitter.html` a custom "link" or "code" icon so it stands out from your standard markdown notes.

### 10. [Note Refactor](https://github.com/lynchjames/note-refactor-obsidian)

Excellent for managing long-form notes or scraping data.

* **The Benefit:** It helps you split large notes into smaller ones based on headers.
* **Your Use Case:** If you scrape a large library of symbols or book titles, you can use this to instantly turn a giant list into 100 individual, atomic notes.

### 11. [Advanced URI](https://github.com/Vinzent03/obsidian-advanced-uri)

* **The Benefit:** It gives you a way to control Obsidian from *outside* the app using URIs.
* **Your Use Case:** You could potentially write a Python script that, after scraping data, sends a command to Obsidian to open a specific tool or note automatically.

---

### Quick Comparison for Tool Builders

| Plugin | Best For... |
| --- | --- |
| **Obsidget** | Small tools that need to *save* data. |
| **Custom Frames** | Full-screen "apps" like your Link Splitter. |
| **Commander** | Making your tools feel like native features. |
| **Custom JS** | Storing logic/keys once and using them everywhere. |

### Recommended "Vibe" Setup

* **Theme:** **[AnuPpuccin](https://www.google.com/search?q=https://github.com/AnuPpuccin/AnuPpuccin)** or **[Minimal](https://github.com/kepano/obsidian-minimal)**.
* **Font:** Use **[Fontsource](https://fontsource.org/)** or the **[Custom Font Loader](https://www.google.com/search?q=https://github.com/ebullient/obsidian-custom-font-loader)** plugin to bring in the specific typography you've been researching.

---