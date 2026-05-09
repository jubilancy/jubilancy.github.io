---
tags:
  - terminal
---
**Oh My Zsh successfully updated** with several breaking changes and new features that affect your workflow. Save these notes for reference when your aliases break.

## Breaking Changes (Fix These)

**Terraform/OpenTofu**

- `tfaa` → now `tfa!` (extra `!` prevents accidental destructive actions)
    

**Git Aliases Removed**

text

`gup, gupv, gupam, gupav, gupom, gupomv  (completely gone)`

**Git Aliases Deprecated** (will break soon)

text

`ggpull, ggpur, ggpush  (use explicit git commands instead) current_branch → git_current_branch`

**Kubectl**

- `kl` → `klog` (conflicts with external tool)
    

## New Helpful Aliases

text

`uv*    - New UV package manager aliases kustomization directory shortcuts terraform -parallelism=1 variants unar   - RAR extraction fallback`

## Quick Actions

text

`omz changelog  # Full update details git status     # Test deprecated aliases tfa! apply     # New terraform syntax klog           # New kubectl logs`

**Location**: Directory `TO SORT` - add this to your Notion [to-organize](https://www.notion.so/23f5cfb5c1958125887cd9dc4e40c0af) page since it affects your daily dev workflow. Update any scripts using the old git aliases immediately.

Based on your terminal output showing an Astro + Starlight deployment to Cloudflare Workers, here are the **valuable things to save** from your deployment notes:

## Critical Configuration Information

**Deployment URLs**

- Production site: [https://notes.wellabovewonder.workers.dev](https://notes.wellabovewonder.workers.dev/)
    
- Cloudflare dashboard: [https://dash.cloudflare.com/?to=/:account/workers/services/view/notes](https://dash.cloudflare.com/?to=/:account/workers/services/view/notes)
    
- Worker name changed from `flat-smoke-918d` to `notes`
    

**Project Details**

- Project directory: `~/flat-smoke-918d` or `~/Library/Mobile Documents/com~apple~CloudDocs/flat-smoke-918d`
    
- Framework: Astro with Starlight template (docs site)
    
- Adapter: `@astrojs/cloudflare`
    
- Deployment platform: Cloudflare Workers with Assets
    
- Cloudflare account: `eliana`
    

## Important Technical Settings

**Build Configuration**

- Output mode: `server` (not static)
    
- Build directory: `/dist/`
    
- Uses Cloudflare KV with `SESSION` binding for sessions
    
- Search powered by Pagefind (v1.4.0)
    
- Compatibility date: `2025-12-17`
    

**Key Files to Remember**

- `astro.config.mjs` - main configuration file
    
- `wrangler.toml` - Cloudflare deployment settings
    
- `worker-configuration.d.ts` - generated types
    
- Package scripts: `npm run build`, `npm run deploy`
    

## Development Setup You Completed

**npm Global Path Fix** (important for future reference)

- Created `~/.npm-global` directory
    
- Set npm prefix to `~/.npm-global`
    
- Added `export PATH="$HOME/.npm-global/bin:$PATH"` to `~/.zshrc`
    
- This fixed the `EACCES` permission error
    

**Installed Tools**

- Wrangler CLI v4.55.0 (Cloudflare CLI tool)
    
- npm upgraded to v11.7.0 (in global directory)
    

## Deployment Commands

bash

`npm run deploy  # Builds and deploys to Cloudflare npm run build   # Just builds locally npx wrangler login  # Authenticate with Cloudflare`

## Content Structure Created

- Home page at `/index.html` with custom hero section
    
- Example pages: `/guides/example/`, `/reference/example/`, `/test/links-to-sort-2/`
    
- 404 page configured
    
- Sitemap generation enabled (you added site URL in later builds)
    

This is a solid foundation for a documentation/notes site. Save this configuration information in your [Site Settings](https://www.notion.so/1e05cfb5c195812e9ac3cdfbf5eb4cfe) or [Notes](https://www.notion.so/21f5cfb5c195807da314fec0e520ef7b) pages in Notion for future reference.

**Oh My Zsh successfully updated** with several breaking changes and new features that affect your workflow. Save these notes for reference when your aliases break.

## Breaking Changes (Fix These)

**Terraform/OpenTofu**

- `tfaa` → now `tfa!` (extra `!` prevents accidental destructive actions)
    

**Git Aliases Removed**

text

`gup, gupv, gupam, gupav, gupom, gupomv  (completely gone)`

**Git Aliases Deprecated** (will break soon)

text

`ggpull, ggpur, ggpush  (use explicit git commands instead) current_branch → git_current_branch`

**Kubectl**

- `kl` → `klog` (conflicts with external tool)
    

## New Helpful Aliases

text

`uv*    - New UV package manager aliases kustomization directory shortcuts terraform -parallelism=1 variants unar   - RAR extraction fallback`

## Quick Actions

text

`omz changelog  # Full update details git status     # Test deprecated aliases tfa! apply     # New terraform syntax klog           # New kubectl logs`

**Location**: Directory `TO SORT` - add this to your Notion [to-organize](https://www.notion.so/23f5cfb5c1958125887cd9dc4e40c0af) page since it affects your daily dev workflow. Update any scripts using the old git aliases immediately.

**Advanced Astro blog (`my-blog`) development session notes.** Professional setup with automation, but some routing/content issues need fixing.

## Project Stack (1167 packages)

text

`Astro v5.16.4 + pnpm v10.26.2 Key features: MDX, Tailwind, RSS, Sitemap, Swup (smooth transitions) Diagrams: Mermaid v11.12.0, D3 v7.9.0, cytoscape-fcose Math: KaTeX, remark-math Fonts: Inter + JetBrains Mono Images: Sharp v0.34.3 Deployment: Wrangler v4.46.0 (Cloudflare)`

## Dev Workflow Automation

**Pre-dev scripts run automatically:**

text

`setup-dev.mjs          # .astro/.vite dirs sync-images.js         # Content → public/images (posts/pages/projects/docs) process-aliases.js     # Convert aliases → redirect_from generate-deployment-config.js  # Netlify/Cloudflare configs generate-graph-data.js # Post connection graph (5 posts, 16 connections → graph-data.json) dev-with-port.js       # Starts on localhost:5000`

**Generates 16 redirects** for Netlify (`netlify.toml`, `astro.config.mjs`)

## Active Content

text

`5 posts: vault-cms-guide, obsidian-embeds-demo, sample-folder-based-post, etc. Projects: vault-cms, astro-composer Docs: configuration, installing-obsidian, api Pages: about, contact, privacy-policy, thank-you Tags: configuration, obsidian, tutorial, markdown, folder-based`

## Issues to Fix

text

``⚠️ 404s on /pages/, /blog/, /favorite/, /new-page/ → getStaticPaths() mismatch in src/pages/[...slug].astro ⚠️ Missing posts/ directory → [glob-loader] warnings ⚠️ pnpm build script warnings → run `pnpm approve-builds` ⚠️ Node shell deprecation → Fix in dev scripts ⚠️ Shiki (syntax highlighting) → 10 instances, cache highlighter ⚠️ Typo: "pa ge/" → "page/" in content paths``

## Commands Used

bash

`pnpm install      # Fresh install (iCloud synced project) pnpm dev          # Full automation + hot reload on :5000 ^C to stop npm install -g pnpm  # Global pnpm install`

**Location**: `~/Library/Mobile Documents/com~apple~CloudDocs/~sites/my-blog` (iCloud synced). **Status**: Production-ready dev server with graph visualization and smooth page transitions. Fix the 404 routing before deploying.


**Homebrew auto-update during `brew install tesseract`** - tesseract already up-to-date. Here's what you need from this session.

## Status Summary

text

`✅ tesseract v5.5.1_1  (already installed, current) ⚠️  10 outdated formulae + 1 outdated cask 📦  Auto-updated Homebrew + 2 taps (core/cask)`

## Action Required

bash

`brew update && brew upgrade  # Update all 10 formulae + 1 cask # OR brew outdated                # See what's outdated first`

## New Formulae Available (Dec 18, 2025)

**Notable dev tools:**

text

`git-get          # Better git repo management git-pages        # Static site server for git forges gup              # Update go install binaries mapscii          # Console world map mcp-scan         # MCP connection security scanner mistral-vibe     # CLI coding agent mq               # Markdown jq-like processor rad              # Modern CLI scripting ty               # Fast Rust Python type checker wasm-bindgen     # WASM-JS bridge`

## New Casks Available

**AI/Coding/Dev:**

text

`copilot-cli@prerelease  # GitHub Copilot CLI comet                  # AI web browser conar                  # AI database tool opencode-desktop       # AI coding desktop`

## Homebrew Tips from Output

text

`$HOMEBREW_AUTO_UPDATE_SECS  # Control auto-update frequency $HOMEBREW_NO_AUTO_UPDATE=1  # Disable auto-updates $HOMEBREW_NO_ENV_HINTS=1    # Hide hints man brew                    # Full docs`

**Next steps**: Run `brew outdated` to see your 10 pending updates, then `brew upgrade`. Consider `git-get` for repo management and `ty` for fast Python checking based on your Astro/blog workflow.

**Hugo site setup notes from `new-hugo-setup.txt`** (Dec 12, 2025 session). Complete workflow from zero to GitLab deployment with `hugo-book` theme.new-hugo-setup.txt​

## Setup Steps Completed

text

`hugo new site secondhugosite          # Created ~/Desktop/secondhugosite hugo new theme book                   # Custom theme (later switched) git init; git branch -m main          # Git repo setup git push --set-upstream git@gitlab.com:etmrdocs.git main`

## Theme & Modules

text

`git submodule add https://github.com/alex-shpakhugo-book themes/hugo-book # Config in hugo.toml: theme = "hugo-book" # Hugo v0.152.2 (Homebrew extended) Server: localhost:1313`

## Content Migration (13+ notes converted)

text

`content/hello/ → content/note/ files: - links-12.15.2025.md - perplexity-templates.md   - research-topics-and-info.md - to-sort.md - Free Tools for Bulk Image Downloads... - PNG icons pinterest.md - etc. (frontmatter auto-fixed)`

**Custom script**: `.fixfrontmatter.sh` - Fixed YAML delimiters in all files.

## Build Stats

text

`25 pages, 70 static files 4 aliases, 3 paginator pages Fast Render Mode enabled Search: Fuse.js + en.search-data.json Math: KaTeX fonts bundled Diagrams: Mermaid.js`

## Fixed Issues

text

`❌ YAML frontmatter parsing → .fixfrontmatter.sh ❌ Missing shortcode "container" → Removed from perplexity-10.19.md ❌ Git submodule conflict → git rm --cached -f public/resources ✅ Raw HTML warnings → goldmark.renderer.unsafeHTML = true needed`

## GitLab Deployment

text

`https://gitlab.com/etmrdocs  (private project) Pushed: initial commit + hugo-book theme (162KB) Working tree clean after fixes`

**Status**: Fully working Hugo site with book theme, search, and live reload. Ready for production deployment. Add `ignoreLogs = ["warning-goldmark-raw-html"]` to `hugo.toml` to silence HTML warnings.new-hugo-setup.txt​

1. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/114786310/f813af0f-cef3-4303-9525-24cc818e45a6/new-hugo-setup.txt](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/114786310/f813af0f-cef3-4303-9525-24cc818e45a6/new-hugo-setup.txt)

Choosing the "best" terminal app for your Mac depends entirely on whether you want a modern, AI-powered experience or a rock-solid classic with deep customization.

## Top Recommendations for 2026

- [iTerm2](https://iterm2.com/) — The Gold Standard (Free): Most long-time Mac users consider this the essential replacement for the default Terminal. It is highly stable and feature-rich, offering split panes, "hotkey window" (summoning the terminal from anywhere with a shortcut), and paste history.
- [Ghostty](https://ghostty.org/) — Best for Speed and Native Feel (Free): This newer app is highly praised for being lightning-fast and native to macOS. It uses GPU acceleration for performance and has sensible defaults that don't require much initial setup.
- [Warp](https://www.warp.dev/) — The Modern Choice (Free/Paid): Warp treats your terminal like a text editor rather than a standard shell. Its standout features include "blocks" (which group command outputs) and built-in AI that helps you draft commands in natural language.
- [Alacritty](https://alacritty.org/) — For Speed Demons (Free): A minimalist, GPU-accelerated terminal focused purely on performance. It is controlled via a simple configuration file and lacks some graphical features like tabs, which users typically supplement with a tool like [tmux](https://github.com/tmux/tmux).
- [Wave](https://www.waveterm.dev/) — Best for Visual Workflows (Free): An open-source, AI-native terminal that allows you to view images, Markdown, and CSVs directly in the terminal interface. It even includes a [VSCode](https://code.visualstudio.com/)-like editor built directly into the terminal app. [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

## Comparison Summary

|App [2, 13, 14, 15, 16]|Best For|Key Feature|Price|
|---|---|---|---|
|iTerm2|Power Users|Split panes & hotkey windows|Free|
|Ghostty|Minimalists|Native macOS feel & GPU speed|Free|
|Warp|Beginners/Teams|AI command assistance & Blocks|Free/Paid|
|Alacritty|Performance|Ultra-low latency|Free|
|Wave|Visual Devs|Inline image & CSV rendering|Free|

[The BEST MacOS terminal became even BETTER!](https://www.youtube.com/watch?v=CG0zjG31tVQ), YouTube · Christian Lempa · 2023 M07 18

Are you looking for a terminal that is completely open source, or are you open to AI-assisted tools like Warp?

  

[1] [https://www.reddit.com](https://www.reddit.com/r/macapps/comments/1pr84uf/best_terminal_emulator/)

[2] [https://itldc.com](https://itldc.com/en/blog/top-5-modern-mac-terminal-apps-for-sysadmins-and-power-users/)

[3] [https://mac.install.guide](https://mac.install.guide/download/terminal)

[4] [https://www.zdnet.com](https://www.zdnet.com/article/6-macos-terminal-apps-that-are-much-better-than-apples-default-and-theyre-free/)

[5] [https://setapp.com](https://setapp.com/how-to/terminal-alternatives-for-mac)

[6] [https://www.youtube.com](https://www.youtube.com/watch?v=heRfqBEhwr0)

[7] [https://medium.com](https://medium.com/vmacwrites/the-ultimate-terminal-stack-in-2026-a-cross-platform-guide-for-macos-linux-and-windows-c0d1f93cd9cc)

[8] [https://www.reddit.com](https://www.reddit.com/r/macapps/comments/1ll0i25/whats_the_best_terminal_app_for_llm_clis/)

[9] [https://www.producthunt.com](https://www.producthunt.com/products/iterm2/alternatives)

[10] [https://www.youtube.com](https://www.youtube.com/watch?v=CG0zjG31tVQ)

[11] [https://thenewstack.io](https://thenewstack.io/the-best-macos-terminal-emulation-programs-for-developers/)

[12] [https://www.waveterm.dev](https://www.waveterm.dev/)

[13] [https://itldc.com](https://itldc.com/en/blog/top-5-modern-mac-terminal-apps-for-sysadmins-and-power-users/)

[14] [https://medium.com](https://medium.com/otto-group-data-works/developer-hacks-modern-command-line-tools-and-advanced-git-commands-e3724dab00a1#:~:text=Terminal%20Setup%20for%20Mac%20For%20Mac%20users%2C,a%20scratchpad%20terminal%20quickly%20available%20via%20hotkey:)

[15] [https://iterm2.com](https://iterm2.com/#:~:text=Check%20out%20the%20impressive%20features%20and%20screenshots.,can%20find%20the%20source%20code%20on%20GitHub.)

[16] [https://medium.com](https://medium.com/codecodecode/choosing-a-terminal-on-macos-2025-iterm2-vs-ghostty-vs-wezterm-vs-kitty-vs-alacritty-d6a5e42fd8b3#:~:text=You%20want%20a%20modern%2C%20native%2C%20minimal%20setup%20that%20still%20handles%20images:%20Ghostty.)

Since you are looking for built-in export and logging capabilities that Ghostty currently lacks, [iTerm2](https://iterm2.com/) is the most comprehensive choice for handling session data.

## Top Recommendations for Export Features

- iTerm2 — Most Robust Logging & Exporting (Free):
    
    - Manual Export: You can save your entire current scrollback buffer at any time by going to Shell > Save Contents... (or Session > Log > Save Contents in older versions).
    - Automatic Logging: It can automatically save every single session to a text file. You can enable this in Settings > Profiles > Session > "Automatically log session input to files in:".
    - Copy Output: With its Shell Integration installed, you can use `Cmd + Shift + A` to select only the output of the last command, making it easy to copy-paste specific results.
    
- [Termius](https://termius.com/) — Best for Cross-Device History (Free/Paid):
    
    - Session Bookmarks: Termius allows you to "bookmark" specific logs from your terminal sessions, saving them permanently in your vault so they don't disappear when the session ends.
    - Sync: Because it's cloud-enabled, these logs and command histories can be synced and viewed across your Mac, iPhone, or other devices.
    
- [Warp](https://www.warp.dev/) — Structured Block Exporting (Free/Paid):
    
    - Export by Block: Warp treats every command and its output as a discrete "Block". You can right-click any specific block to copy its contents or share a permanent link to that output via "Warp Drive" for teammates to view.
    - History Search: It provides a rich history panel (`Ctrl + R`) that includes exit codes and execution times, though it is more focused on re-running commands than raw text file exports. [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    

## Quick Comparison of Export Methods

|Feature|iTerm2|Termius|Warp|
|---|---|---|---|
|Manual Save to .txt|Yes (via Shell menu)|Yes (via Bookmarks)|Yes (via Block menu)|
|Auto-Log All Sessions|Yes (Settings)|Yes (Pro Feature)|No (Cloud-based)|
|Copy Last Command Output|Yes (`Cmd+Shift+A`)|Partial|Yes (Block-based)|
|Print to PDF|Yes (Shell > Print)|No|No|

If you need to strictly keep a record of every command you've ever typed for auditing or compliance, iTerm2’s automatic logging is the most reliable "set it and forget it" solution. [3, 13]

Do you need to export logs automatically for every session, or are you just looking for a quick way to manually save output when something important happens?

  

[1] [https://stackoverflow.com](https://stackoverflow.com/questions/52810526/iterm2-export-session-to-text-pdf-file)

[2] [https://apple.stackexchange.com](https://apple.stackexchange.com/questions/139195/can-i-copy-the-entire-scrollback-buffer-from-iterm2-to-the-clipboard)

[3] [https://apple.stackexchange.com](https://apple.stackexchange.com/questions/441060/automatic-log-each-session-from-terminal)

[4] [https://iterm2.com](https://iterm2.com/3.4/documentation-preferences-profiles-session.html)

[5] [https://superuser.com](https://superuser.com/questions/1237167/copy-the-output-of-the-last-command-in-iterm2)

[6] [https://iterm2.com](https://iterm2.com/3.0/documentation-shell-integration.html#:~:text=Download%20with%20scp.%20You%20can%20right%2Dclick%20on,view%20downloaded%20files%20and%20track%20their%20progress.)

[7] [https://termius.com](https://termius.com/blog/remember-what-was-done-with-bookmarks-for-session-logs)

[8] [https://termius.com](https://termius.com/blog/boost-your-terminal-experience-with-ai#:~:text=Long%2Dterm%20memory%20for%20Session%20Logs%20Termius%20now,context%20that%20lasts%20beyond%20devices%20and%20shifts.)

[9] [https://docs.termius.com](https://docs.termius.com/)

[10] [https://www.deployhq.com](https://www.deployhq.com/guides/warp)

[11] [https://docs.warp.dev](https://docs.warp.dev/terminal/entry/command-history)

[12] [https://www.warp.dev](https://www.warp.dev/blog/show-rich-history-in-command-search)

[13] [https://jasonmurray.org](https://jasonmurray.org/posts/2020/iterm2logging/#:~:text=Terminal%20logging%20is%20invaluable%20to%20capture%20output%2C,all%20terminal%20output%20to%20a%20text%20file.)


To help you manage and remember the commands, snippets, and codes you use regularly, you can use built-in terminal features, dedicated snippet managers, or system-wide text expanders.

## Built-in Terminal Memory Tools

If you are moving away from Ghostty to a tool with more robust native memory features, consider these options:

- iTerm2 Snippets: You can save "bits of text" as snippets and access them through Edit > Snippets. For a more productive setup, you can enable a "Snippet" component in the iTerm2 status bar, allowing you to click a dropdown to quickly paste and execute saved commands.
- Warp Workflows: Warp includes a searchable catalog of popular commands (Commands.dev) and allows you to create your own "Workflows". These are parameterized commands you can name, describe, and save, making them easy to find later via the Command Palette (`Cmd + P`).
- Persistent History: In iTerm2, you can enable "Save copy/paste history and command history to disk" to preserve up to 200 commands across different sessions. [1, 2, 3, 4, 5, 6]

## Dedicated Snippet Managers for Mac

For a more organized library outside of the terminal itself:

- SnippetsLab: A native Mac app that organizes code snippets by tagging, grouping, and annotating. It supports over 580 languages and includes a menubar assistant for quick access without opening the full app.
- Pet (CLI Snippet Manager): A command-line tool written in Go specifically for managing snippets. It allows you to create new snippets with `pet new`, search them with `pet search`, and even sync them to GitHub Gists.
- CodeMenu: An AI-powered local-first system that stores context, such as visual references and research, alongside your code snippets. [7, 8, 9, 10, 11]

## Shell Customization for "Automatic" Memory

- Aliases: You can create your own shortcuts by adding `alias shortcut='command'` to your `.zshrc` (for Zsh) or `.bash_profile` (for Bash) file. For example, you could set an alias that chains multiple commands together, like starting a server and opening a browser simultaneously.
- Zoxide: A "smarter" version of the `cd` command that remembers your most frequently used directories, allowing you to jump to them with just a keyword rather than a full path.
- Reverse Search: Use `Ctrl + R` in almost any terminal to search through your command history. Just start typing a half-remembered command, and it will cycle through past entries. [12, 13, 14, 15]

## System-Wide Expansion

- Espanso: A free, open-source text expander that works across all applications, not just the terminal. You can define a short "trigger" (like `:espanso`) that automatically expands into a larger piece of text or a complex command. [16, 17]

Are you looking for a way to sync these snippets between different machines, or do you prefer a local-only solution for privacy?

  

[1] [https://www.warp.dev](https://www.warp.dev/blog/using-workflows-and-commands-dev-to-remember-commands-we-often-forget)

[2] [https://iterm2.com](https://iterm2.com/documentation-menu-items.html)

[3] [https://medium.com](https://medium.com/reflex-media/how-i-use-snippets-in-iterm2-to-boost-my-productivity-as-a-software-engineer-ce18e3b498f9)

[4] [https://www.warp.dev](https://www.warp.dev/blog/using-workflows-and-commands-dev-to-remember-commands-we-often-forget)

[5] [https://docs.warp.dev](https://docs.warp.dev/knowledge-and-collaboration/warp-drive/workflows)

[6] [https://iterm2.com](https://iterm2.com/3.0/documentation-shell-integration.html#:~:text=Commands%20in%20command%20history%20are%20also%20added,iTerm2%20%28up%20to%20200%20commands%20per%20user/hostname%29.)

[7] [https://copperlight.github.io](https://copperlight.github.io/shell/pet-cli-snippet-manager/)

[8] [https://apps.apple.com](https://apps.apple.com/us/mac/story/id1454050559)

[9] [https://extiri.com](https://extiri.com/blog/posts/the-best-snippet-manager.html)

[10] [https://ostechnix.com](https://ostechnix.com/pet-simple-command-line-snippet-manager/)

[11] [https://github.com](https://github.com/knqyf263/pet/blob/master/README.md)

[12] [https://www.reddit.com](https://www.reddit.com/r/sysadmin/comments/u64ls1/how_to_remember_console_commands/)

[13] [https://mtm.dev](https://mtm.dev/alias)

[14] [https://www.youtube.com](https://www.youtube.com/watch?v=hFCb-hFjHf0&t=100)

[15] [https://medium.com](https://medium.com/@EduardoRodriguesF/great-command-line-tools-on-my-daily-workflow-9993c4cfe8cf)

[16] [https://espanso.org](https://espanso.org/docs/get-started/)

[17] [https://www.youtube.com](https://www.youtube.com/watch?v=lcMdyT7dJK0&t=8)


Since you only use one computer and prefer a local-only setup for privacy and performance, several professional-grade tools are available for macOS that store your data directly on your machine without requiring cloud sync.

## Local-Only Terminal & Snippet Managers

- SnippetsLab — The Professional Personal Library: A highly recommended full-featured code snippet manager for Mac that stores all data locally. It allows you to build a private coding knowledge base with support for over 440 languages and organizes everything using multi-level folders and tags. It costs a one-time payment of $9.99.
- iTerm2 — Native Terminal Snippets: While you currently use Ghostty, switching to iTerm2 would give you built-in, local-only snippet support. You can add snippets through Edit > Snippets and even enable them in the status bar for quick click-to-execute access. All your paste history and command history can be set to save directly to your local disk.
- massCode — Free and Open-Source: A free, open-source snippet manager that focuses on local organization. It supports multi-level folders, tagging, and real-time rendering for HTML and CSS.
- Dash — Offline Documentation & Snippets: Primarily known for providing offline access to API documentation, Dash also includes a built-in snippet manager that stores everything on your local drive. You can organize snippets with variable placeholders and tags for easy reuse.
- Codespace — Secure Local Storage: A snippet manager designed to work entirely offline. It stores all data locally, meaning you can access your saved codes even if you are offline. [1, 2, 3, 4, 5]

## Interactive Command-Line Tools

If you prefer staying strictly within the terminal for managing regular commands:

- navi — Interactive Cheatsheet: A command-line tool that allows you to browse and execute snippets interactively. You can create your own cheatsheets locally to remember complex commands.
- pet — Simple CLI Manager: An 8-year-old tool written in Go that lets you save, tag, and search command-line snippets. While it supports sync, it functions perfectly as a local-only tool where you can grab the binary and manage snippets directly in your terminal.
- Shell Aliases: For your most frequent commands, you can manually add them to your local `~/.zshrc` file as aliases. This is a completely offline, zero-software way to create shortcuts for regular tasks. [6, 7, 8, 9]

## Summary of Local-Only Benefits

- Privacy: Data remains on your local disk rather than being sent to external servers.
- Reliability: You can access your entire library without an internet connection.
- Performance: Local apps often have lower latency than cloud-synced alternatives. [2, 10]

Are you interested in setting up some Zsh aliases for your most common commands, or would you prefer a GUI app like SnippetsLab to organize larger blocks of code?

  

[1] [https://medium.com](https://medium.com/reflex-media/how-i-use-snippets-in-iterm2-to-boost-my-productivity-as-a-software-engineer-ce18e3b498f9)

[2] [https://sourceforge.net](https://sourceforge.net/software/code-snippet-managers/mac/)

[3] [https://apps.apple.com](https://apps.apple.com/us/app/snippetslab/id1006087419?mt=12)

[4] [https://iterm2.com](https://iterm2.com/documentation-menu-items.html)

[5] [https://www.awesomescreenshot.com](https://www.awesomescreenshot.com/blog/screenshot/snipping-tool-for-mac)

[6] [https://unix.stackexchange.com](https://unix.stackexchange.com/questions/26245/how-to-quickly-store-and-access-often-used-commands#:~:text=Use%20%27alias%27%20alias%20is%20a%20great%20tool,can%20add%20it%20to%20your%20shell%20config.)

[7] [https://github.com](https://github.com/phmullins/awesome-macos-commandline)

[8] [https://github.com](https://github.com/knqyf263/pet#:~:text=pet%20is%20a%20simple%20tool%20that%20allows,use%20variables%20%28%20or%20%29%20in%20snippets.)

[9] [https://www.reddit.com](https://www.reddit.com/r/programming/comments/7je9r/askprogramming_whats_the_best_free_program_to/)

[10] [https://dev.to](https://dev.to/tomlangdon/5-code-snippet-managers-that-will-change-the-way-you-write-code-10ml)


For a free Mac tool that specifically offers both persistent copy/paste history and direct export functionality, ==CopyQ== is the most powerful option that meets your local-only preference.

## Recommended Free Tools with Export

- [CopyQ](https://hluk.github.io/CopyQ/) (Best for Exporting): This is a professional-grade, open-source clipboard manager that works entirely offline.
    
    - Export Functionality: It features an explicit command to export items to a file, allowing you to save your entire history or specific tabs of snippets for backup or sharing.
    - Organization: You can create custom tabs to automatically categorize different types of content, such as images, URLs, or specific code paths.
    - Advanced Control: It includes a command-line interface and scripting capabilities for users who want to automate how their clipboard data is handled.
    
- [ClipCopy](https://apps.apple.com/us/app/clipcopy-clipboard-history/id6744664931?mt=12) (Best for Privacy): A lightweight menu bar app released in late 2025 that focuses on being "privacy-first" and works entirely offline.
    
    - Features: It automatically saves everything you copy and includes a powerful built-in search.
    - Security: It is designed to automatically detect and mask sensitive information like passwords or API keys in your history, only revealing them when you specifically choose to.
    
- [Maccy](https://github.com/p0deje/Maccy/releases) (Best for Simplicity): A fast, open-source, and "no-fluff" clipboard manager. While it is $10 on the App Store, it is free to download via [GitHub](https://github.com/).
    
    - Features: It resides in your menu bar and allows you to quickly search through history or pin frequently used items for easy access.
    - Local Focus: It is built to feel like a native part of macOS and can be configured to ignore specific sensitive applications. [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    

## Feature Comparison

|Tool [2, 3, 4, 7, 8, 11]|Export Capability|Privacy Focus|Main Interface|
|---|---|---|---|
|CopyQ|Direct file export/import|Local storage|Main Window / Tray|
|ClipCopy|Manual search & copy|Offline & Password masking|Menu Bar|
|Maccy|Manual search & copy|Ignore sensitive apps|Menu Bar / Hotkey|

Since you only use this one computer, CopyQ would be the most robust choice if you frequently need to move your history into a separate document or backup file. Would you like a quick guide on how to set up the automatic export feature in CopyQ?

  

[1] [https://hluk.github.io](https://hluk.github.io/CopyQ/)

[2] [https://quaily.com](https://quaily.com/jdevtw-en/p/advanced-clipboard-management-using-copyq-control-multiple-clipboard-contents)

[3] [https://man.archlinux.org](https://man.archlinux.org/man/extra/copyq/copyq.1.en)

[4] [https://apps.apple.com](https://apps.apple.com/us/app/clipcopy-clipboard-history/id6744664931?mt=12)

[5] [https://apps.apple.com](https://apps.apple.com/us/app/maccy/id1527619437?mt=12)

[6] [https://currently.att.yahoo.com](https://currently.att.yahoo.com/att/best-clipboard-managers-mac-170000652.html)

[7] [https://lifehacker.com](https://lifehacker.com/tech/best-mac-clipboard-managers)

[8] [https://mausereviews.wordpress.com](https://mausereviews.wordpress.com/2024/04/08/maccy-easy-to-use-but-efficient-clipboard-manager/)

[9] [https://osxdaily.com](https://osxdaily.com/2023/10/24/best-free-clipboard-manager-mac-maccy/)

[10] [https://osxdaily.com](https://osxdaily.com/2023/10/24/best-free-clipboard-manager-mac-maccy/)

[11] [https://softwarehistory.neocities.org](https://softwarehistory.neocities.org/copyq/)


