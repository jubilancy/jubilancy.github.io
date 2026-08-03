---
tags:
  - guides
  - terminal
---
# .zshrc Configuration Reference Guide

## Overview

The `.zshrc` file is a shell initialization script that runs every time a new interactive **Zsh** session starts. It lives at `~/.zshrc` and controls your shell environment: PATH directories, themes, plugins, tool integrations, and custom functions. This guide documents the specific configuration found in this setup.

---

## File Location & Editing

```zsh
# View the file with line numbers
cat -n ~/.zshrc

# Edit it
nano ~/.zshrc
# or
code ~/.zshrc

# Reload after changes (no restart needed)
source ~/.zshrc
```

---

## Configuration Breakdown

### PATH Configuration (Lines 1–3)

```zsh
export PATH=$HOME/bin:$HOME/.local/bin:/usr/local/bin:$PATH
export PATH="/opt/homebrew/bin:$PATH"
```

The PATH variable tells Zsh where to look for executables. This config adds:

| Path | Purpose |
|------|---------|
| `$HOME/bin` | Personal scripts/binaries |
| `$HOME/.local/bin` | User-local installs (e.g., pipx) |
| `/usr/local/bin` | Traditional Homebrew location (Intel Macs) |
| `/opt/homebrew/bin` | Homebrew on Apple Silicon Macs |

> **Note:** Homebrew path is added **twice** in this file (lines 3 and 20). The second declaration is redundant but harmless.

---

### Oh My Zsh (Lines 4–8)

```zsh
export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="robbyrussell"
source $ZSH/oh-my-zsh.sh
```

**Oh My Zsh** is a framework for managing Zsh configuration. It provides themes, plugins, and helpers. The `robbyrussell` theme is the default — it shows the current directory and git branch in the prompt.

**To change themes**, replace `"robbyrussell"` with any name from `~/.oh-my-zsh/themes/` or use `ZSH_THEME="random"` to rotate themes on each session.

---

### Plugins (Line 14)

```zsh
plugins=(git zsh-syntax-highlighting zsh-autosuggestions)
```

| Plugin | What it does |
|--------|-------------|
| `git` | Adds dozens of git aliases (`gst`, `gco`, `gl`, etc.) |
| `zsh-syntax-highlighting` | Colors valid commands green, invalid ones red as you type |
| `zsh-autosuggestions` | Shows ghost-text suggestions based on command history |

> **Important:** `zsh-syntax-highlighting` **must be last** in the plugins list, as noted in the config comment.

---

### npm Global Binaries (Line 19)

```zsh
export PATH="$PATH:$(npm bin -g)"
```

Adds globally installed npm packages (e.g., `prettier`, `eslint`, `typescript`) to the PATH. Note: `npm bin -g` is deprecated in newer npm versions — consider using `$(npm root -g)/../bin` or managing this via `nvm`.

---

### Bun (Lines 22–27)

```zsh
[ -s "/Users/eliana/.bun/_bun" ] && source "/Users/eliana/.bun/_bun"
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
```

**Bun** is a fast JavaScript runtime and package manager (alternative to Node.js/npm). This block:
- Loads Bun shell completions
- Sets `BUN_INSTALL` to the Bun home directory
- Adds the Bun binary to PATH

---

### NVM — Node Version Manager (Lines 29–31)

```zsh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

**NVM** lets you install and switch between multiple Node.js versions. The `[ -s ... ] && source` pattern only loads the script if the file exists, preventing errors on fresh installs.

**Useful NVM commands:**

```zsh
nvm install 20        # Install Node 20
nvm use 20            # Switch to Node 20
nvm ls                # List installed versions
nvm alias default 20  # Set default version
```

---

### Custom `merge` Function (Lines 33–35)

```zsh
merge() {
  cat *.html *.md > combined.html 2>/dev/null || echo "No HTML/MD files found."
}
```

A custom shell function that concatenates all `.html` and `.md` files in the current directory into a single `combined.html` file. The `2>/dev/null` suppresses errors if no matching files exist, and `|| echo` provides a friendly message instead.

**Usage:**

```zsh
cd ~/my-project
merge   # Creates combined.html from all .html and .md files
```

---

## Quick Reference

| Section | Key Variable/Command | Effect |
|---------|---------------------|--------|
| PATH | `export PATH=...` | Controls where shell finds executables |
| Oh My Zsh | `ZSH_THEME` | Sets the prompt theme |
| Plugins | `plugins=(...)` | Enables Zsh enhancements |
| NVM | `nvm use <version>` | Switches Node.js version |
| Bun | `bun run` / `bunx` | Fast JS runtime commands |
| Custom | `merge` | Combines HTML/MD files |

---

## Tips for Managing .zshrc

- Always run `source ~/.zshrc` after editing to apply changes without restarting the terminal.
- Keep tool-specific configs (nvm, bun, conda) at the **bottom** so they can override earlier PATH entries.
- Use comments (`# like this`) to annotate each section — your future self will thank you.
- Back up your `.zshrc` to a dotfiles repo on GitHub for easy machine migration.
