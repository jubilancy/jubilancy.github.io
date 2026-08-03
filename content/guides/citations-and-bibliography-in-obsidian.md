
how to insert citations and bibliography into obsidian markdown documents

---

# gemini response

### TL;DR: Citations and Bibliography in Obsidian

* **Primary Tool:** Use the [**Obsidian Citations**](https://github.com/hans/obsidian-citation-plugin) plugin (available in the Community Plugins browser).
* **Workflow:**
    * **BibTeX Database:** Maintain a `.bib` file (generated from [Zotero](https://www.zotero.org/) or [Better BibTeX](https://retorque.re/zotero-better-bibtex/)) containing your references.
    * **Configuration:** Point the Citations plugin to your `.bib` file in Obsidian settings.
    * **Insert Citation:** Use the hotkey (default `Ctrl/Cmd + Shift + E`) to search your database and insert a citation marker (e.g., `[@citekey]`) into your note.
    * **Bibliography Generation:** Add a `bibliography` section to the bottom of your note; it will automatically populate based on the markers in the document.

---

### Step-by-Step Implementation

* **1. Setup Zotero:** Export your library as a `.bib` file. Using the [Better BibTeX](https://retorque.re/zotero-better-bibtex/) plugin is highly recommended to keep your citation keys stable and standardized.
* **2. Configure Plugin:** Open **Obsidian Settings > Citations**, select your library file, and define your citation template.
* **3. Linking:** When you trigger the citation command, it pulls directly from your Zotero data, allowing you to link directly to notes associated with specific papers.
* **4. Dynamic Bibliography:** For automated bibliography formatting that supports academic styles (APA, MLA, Chicago), integrate with the [**Pandoc**](https://pandoc.org/) plugin.



---

### Alternative: Manual Approach
* If you prefer not to use a plugin, you can manually format citations in Markdown using standard [Pandoc-style citation syntax](https://pandoc.org/MANUAL.html#citations).
* Structure your bibliography manually at the end of the note under a `### Bibliography` heading using standard formatting guides.

---

Would you like the configuration steps for integrating the **Pandoc** plugin for automated academic formatting?

---