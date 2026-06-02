---
tags:
  - guides
---

# you asked

wait can i use stackblitz to run scripts ?

---

# gemini response

### **TL;DR**
**Yes**, you can use **[StackBlitz](https://stackblitz.com/)** to run scripts because it uses a technology called **WebContainers** that runs a full **Node.js** environment inside your browser. This means you can run the same automation scripts you used to run in the terminal without actually needing a local terminal setup.

---

### **How to Use StackBlitz for Scripts**

#### **1. Connecting Your Repo**
Instead of starting from scratch, you can open your repository directly in StackBlitz:
* Go to: `https://stackblitz.com/github/jubilancy/jubilancy.github.io`
* It will automatically install your dependencies (like **BeautifulSoup** or **requests** if you have them in a `package.json`).

#### **2. Running Commands**
Once the project loads, you will see a **Terminal** panel at the bottom. You can type commands there just like on your MacBook:
* [cite_start]`npx quartz build` (to test your site locally before pushing)[cite: 14].
* `python your_script.py` (if you have Python scripts in your repo).

---

### **Why StackBlitz Fits Your Workflow**

* **No Terminal Hatred:** You aren't "in a terminal" on your computer; you're just in a web tab. It feels more like a tool and less like a "system settings" chore.
* **Web Scrapers:** Since you've built scrapers for **Unicode symbols** and **book data**, you can run those scripts directly in the StackBlitz terminal to update your CSV/text files and then commit those changes back to GitHub without ever leaving the browser.
* **Automation Testing:** If you want to try a new **GitHub Action** logic but aren't sure it will work, you can test the script part in StackBlitz first to see if it generates the right files.

---

### **A Better Alternative for Simple Scripts**

If the goal is just to run a script (like your 1,923-item symbol scraper) and you don't need a full web editor, you can also look into:
* **[GitHub Codespaces](https://github.com/features/codespaces):** This is GitHub's own version of StackBlitz. It is more powerful and integrates perfectly with your **v4** branch.
* **[Google Colab](https://colab.research.google.com/):** Specifically great for your **Python** automation tasks. You can run a script, generate a file, and then have the script push that file to your repository via an API.

**Would you like me to help you set up a "Run Scraper" button in StackBlitz so you don't even have to type the command?**

---

# you asked

give me ideas for me to do for my love of widgets and dynamic embeds/add-ons as web hobbyist that i can make with github actions

---

# gemini response

### **TL;DR**
Since you love **widgets** and **dynamic embeds**, [GitHub Actions](https://github.com/features/actions) can act as your "backend" to fetch fresh data and inject it into your [Quartz](https://quartz.jzhao.xyz/) site at **[jubilancy.github.io](https://jubilancy.github.io)**. You can automate everything from "Now Playing" widgets to dynamic symbol libraries without ever touching a terminal.

---

### **Widget & Embed Ideas**

* **Dynamic Symbol/Artifact Gallery**
    * **The Idea:** Use your interest in [Unicode symbols and ASCII art](https://eliana.lol) to create an "Artifact of the Day" widget.
    * **The Action:** Set a [scheduled trigger](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule) to run a script daily that picks a random item from your `symbols.txt` file.
    * **The Result:** The Action updates your `index.md` with the new symbol, keeping your homepage feeling like a "living" [Old World Archive](https://eliana.lol).

* **Readwise "Spark" Embed**
    * **The Idea:** Showcase a random highlight from your [Readwise library](https://readwise.io/) as a dynamic pull-quote.
    * **The Action:** An Action fetches your latest highlights via the [Readwise API](https://readwise.io/api_deets) and saves them as a [JSON](https://www.json.org/) or [Markdown](https://www.markdownguide.org/) file.
    * **The Result:** Your [Quartz](https://quartz.jzhao.xyz/) site displays a fresh quote on every build, perfect for your [digital garden](https://eliana.lol).

* **Automated "Now Playing" or "Mood" Widget**
    * [cite_start]**The Action:** Use an Action to fetch your [Spotify](https://www.spotify.com/) "Recently Played" tracks or current mood status every hour. [cite: 13, 23]
    * [cite_start]**The Result:** Update a dedicated `status.md` file that is [embedded](https://quartz.jzhao.xyz/features/wikilinks#embeds) into your site's [footer](https://quartz.jzhao.xyz/layout#footer) or sidebar. [cite: 11, 13]

* **Scrapbooking Metadata Dashboard**
    * **The Idea:** Since you buy many [journaling and scrapbooking supplies](https://michaels.com), create a widget that tracks your latest "acquisitions."
    * **The Action:** A script [scrapes](https://beautiful-soup-4.readthedocs.io/en/latest/) your latest order history or a dedicated spreadsheet.
    * **The Result:** A dynamic [table or list](https://quartz.jzhao.xyz/features/folder-and-tag-listings) on your site showing your most recently used [sticker packs or journals](https://joann.com).

* **Automated "Digital Garden" Health Stats**
    * [cite_start]**The Action:** A script runs during the [deployment](https://github.com/features/actions) to count your total notes, [backlinks](https://quartz.jzhao.xyz/features/backlinks), and files. [cite: 2, 22]
    * **The Result:** Inject a "Garden Stats" widget into your [sidebar](https://quartz.jzhao.xyz/layout#sidebar) (e.g., "1,923 symbols cataloged, 50 notes planted").

---

### **How to Implement Without a Terminal**

* **Step 1:** Create your [Python](https://www.python.org/) or [Node.js](https://nodejs.org/) script directly in the **[github.dev](https://github.dev)** editor (press `.` in your repo).
* [cite_start]**Step 2:** Add a new `.yml` file to your **`.github/workflows/`** folder. [cite: 1]
* **Step 3:** Use a "Cron" schedule so it runs automatically:
    ```yaml
    on:
      schedule:
        - cron: '0 0 * * *' # Runs every day at midnight
    ```
* [cite_start]**Step 4:** Have the Action [commit](https://github.com/stefanzweifel/git-auto-commit-action) the updated data back to your repo, which triggers your [Quartz deploy](https://quartz.jzhao.xyz/hosting#github-pages). [cite: 1]

**Which of these "living data" widgets would you want to see on your homepage first?**

---

# you asked

is there a way i can use a obsidian plugin and turn it into a plugin on quartz or something

---

# gemini response

### **TL;DR**
[cite_start]You can’t directly "copy-paste" an [Obsidian](https://obsidian.md/) plugin file into [Quartz](https://quartz.jzhao.xyz/), but because Quartz is designed for **Obsidian compatibility**, you can achieve the same results using **Transformers** or **Filters**. [cite: 2, 6, 19] Since you already use the [Obsidian Git](https://github.com/denolehov/obsidian-git) and [Shell Commands](https://github.com/Taitava/obsidian-shell-commands) plugins, you can bridge the two environments easily.

---

### **How to "Convert" Your Favorites**

| Obsidian Plugin Type | Quartz Equivalent | Implementation |
| :--- | :--- | :--- |
| **UI Widgets** (e.g., Calendar, Recent Files) | **Components** | [cite_start]Edit files in `quartz/components/`. [cite: 13] |
| **Text Processing** (e.g., Admonitions, Dataview) | **Transformers** | [cite_start]Add logic to `quartz/plugins/transformers/`. [cite: 20] |
| **Private/Draft Notes** | **Filters** | [cite_start]Use `quartz/plugins/filters/`. [cite: 18, 19] |

---

### **Specific Conversion Strategies**

* **The Dataview Alternative**
    * **Obsidian:** Uses `dataview` queries to list files.
    * [cite_start]**Quartz:** Use the [Explorer](https://quartz.jzhao.xyz/features/explorer) or [Recent Notes](https://quartz.jzhao.xyz/features/recent-notes) components. [cite: 2, 3, 13] [cite_start]You can customize these in `quartz.layout.ts` to filter by specific [tags](https://quartz.jzhao.xyz/features/folder-and-tag-listings). [cite: 2]

* **Templater / Shell Commands**
    * **The Workflow:** Since you use [Shell Commands](https://github.com/Taitava/obsidian-shell-commands) in Obsidian, you can have your Obsidian plugin run a script that formats your metadata *before* it reaches GitHub.
    * [cite_start]**The Quartz Side:** Use the [Frontmatter](https://quartz.jzhao.xyz/plugins/Frontmatter) transformer to read the custom data your Obsidian scripts generate. [cite: 6, 20]

* **Callouts & Syntax**
    * [cite_start]**Built-in Support:** Quartz already has native [Obsidian-flavored Markdown](https://quartz.jzhao.xyz/plugins/ObsidianFlavoredMarkdown) support. [cite: 6, 20]
    * [cite_start]**Customization:** If you have an Obsidian plugin that adds a specific "look" to [callouts](https://quartz.jzhao.xyz/features/callouts), you don't need a new plugin—just edit `quartz/styles/callouts.scss`. [cite: 21]

---

### **Creating a Custom Quartz Plugin**
If you have a unique Obsidian plugin idea (like a specific [Latinate vibe](https://eliana.lol) for your text), you can build it in the **`quartz/plugins/`** directory:

1.  **Transformers:** Use these to change Markdown into HTML (e.g., auto-linking [Unicode symbols](https://eliana.lol)).
2.  [cite_start]**Emitters:** Use these to create entirely new pages (e.g., an automated [RSS Feed](https://quartz.jzhao.xyz/features/RSS-Feed)). [cite: 3, 17]

**Is there a specific Obsidian plugin you can't live without that we should try to replicate in Quartz?**