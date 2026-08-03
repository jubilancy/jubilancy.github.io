## **TL;DR**

Several [GitHub](https://github.com/) repositories offer [CLI](https://en.wikipedia.org/wiki/Command-line_interface) tools for [Obsidian](https://obsidian.md/) to automate note creation, searching, and metadata management directly from the terminal.

---

## **[[Top Obsidian CLI Repositories]]**

- **[obsidian-cli](https://github.com/YukiGasai/obsidian-cli)**: A comprehensive [Rust](https://www.rust-lang.org/)-based tool that allows you to create notes, move files, and append content to specific sections from your shell.
    
- **[obsidian-remote-cli](https://github.com/m-v-p/obsidian-remote-cli)**: This tool interfaces with the [Local REST API](https://github.com/coddingtonbear/obsidian-local-rest-api) plugin, enabling you to trigger [Obsidian](https://obsidian.md/) commands and retrieve note content remotely.
    
- **[obsidian-export](https://github.com/p_m_j/obsidian-export)**: A specialized [Rust](https://www.rust-lang.org/) tool designed to export [Obsidian](https://obsidian.md/) vaults into standard [Markdown](https://en.wikipedia.org/wiki/Markdown) (converting [Wikilinks](https://help.obsidian.md/Linking+notes+and+files/Internal+links) to standard links), which is ideal for [GitHub Actions](https://github.com/features/actions) or static site generators like [Quartz](https://quartz.jzhao.xyz/).
    
- **[obsidian-tools](https://github.com/kevinslin/obsidian-tools)**: A [Python](https://www.python.org/) library and [CLI](https://en.wikipedia.org/wiki/Command-line_interface) for programmatically interacting with your vault, focusing on metadata extraction and vault statistics.
    

---

## **Scripts & Automation Tools**

- **[obsidian-utilities](https://github.com/mfm-dev/obsidian-utilities)**: A collection of [Bash](https://www.gnu.org/software/bash/) scripts for bulk processing notes and managing [YAML frontmatter](https://help.obsidian.md/Editing+and+formatting/Properties).
    
- **[obsidian-scripts](https://github.com/S-S-S-S-S/obsidian-scripts)**: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) snippets designed for the [Templater](https://github.com/SilentVoid13/Templater) or [QuickAdd](https://github.com/chhoumann/quickadd) plugins that can also be adapted for [Node.js](https://nodejs.org/) environments.
    
- **[obsidian-git](https://github.com/denolehov/obsidian-git)**: While primarily a plugin, the underlying logic is often used in custom scripts to automate "Vault-to-GitHub" synchronization on a schedule.
    

---

## **Key CLI Use Cases**

- **Note Creation**: Quickly pipe terminal output into a new daily note or log file.
    
- **Vault Maintenance**: Use `grep` or `sed` via [CLI](https://en.wikipedia.org/wiki/Command-line_interface) tools to find and replace text across thousands of files faster than the built-in search.
    
- **CI/CD Integration**: Automatically update your [Quartz](https://quartz.jzhao.xyz/) or [Hugo](https://gohugo.io/) sites by running export scripts whenever you push to [GitHub](https://github.com/).