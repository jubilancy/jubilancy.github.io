## TL;DR

- **Tools:** Upgrade your default commands with modern replacements like [fzf](https://github.com/junegunn/fzf), [bat](https://github.com/sharkdp/bat), and [zoxide](https://github.com/ajeetdsouza/zoxide).
    
- **Concepts:** Master job control, brace expansion, and recursive globbing.
    
- **Scripts:** Automate daily tasks with custom extraction and backup functions.
    
- **Configs:** Supercharge your `.zshrc` with massive history retention and quality-of-life aliases.
    

---

### Essential Terminal Tools

- **[Homebrew](https://brew.sh/):** Use this package manager to install all the tools below on macOS.
    
- **[fzf](https://github.com/junegunn/fzf):** A command-line fuzzy finder for instantly searching files, directories, and command history.
    
- **[bat](https://github.com/sharkdp/bat):** A drop-in replacement for the `cat` command featuring syntax highlighting and Git integration.
    
- **[ripgrep](https://github.com/BurntSushi/ripgrep) (`rg`):** An incredibly fast search tool that respects your `.gitignore` files.
    
- **[zoxide](https://github.com/ajeetdsouza/zoxide) (`z`):** A smarter `cd` command that learns your habits and remembers your most visited directories.
    
- **[eza](https://github.com/eza-community/eza):** A modern replacement for `ls` with colors, file icons, and git status.
    

---

### Powerful Terminal Concepts

- **Job Control:** Suspend a running foreground task with `Ctrl+Z`, resume it in the background with `bg`, and bring it back to the foreground with `fg`.
    
- **Command Substitution:** Use `$(command)` to pass the output of one command as an argument to another (e.g., `kill -9 $(pgrep python)`).
    
- **Recursive Globbing:** Use `**` to search deeply through directories without the `find` command (e.g., `ls **/*.jpg` lists all JPEGs in all nested subfolders).
    
- **Brace Expansion:** Generate arbitrary strings or folder structures quickly (e.g., `mkdir -p project/{src,test,build,logs}` creates four folders at once).
    

---

### Super Helpful Scripts (Add to `.zshrc`)

#### Smart Archive Extractor

- Detects the file extension and automatically uses the correct decompression tool.
    

Bash

```bash
extract() {
  if [ -f "$1" ] ; then
    case "$1" in
      *.tar.bz2)   tar xjf "$1"     ;;
      *.tar.gz)    tar xzf "$1"     ;;
      *.bz2)       bunzip2 "$1"     ;;
      *.rar)       unrar e "$1"     ;;
      *.gz)        gunzip "$1"      ;;
      *.tar)       tar xf "$1"      ;;
      *.tbz2)      tar xjf "$1"     ;;
      *.tgz)       tar xzf "$1"     ;;
      *.zip)       unzip "$1"       ;;
      *.Z)         uncompress "$1"  ;;
      *.7z)        7z x "$1"        ;;
      *)           echo "'$1' cannot be extracted via extract()" ;;
    esac
  else
    echo "'$1' is not a valid file"
  fi
}
```

#### Quick File Backup

- Instantly creates a `.bak` copy of a file without typing the name twice.
    

Bash

```bash
mkbkp() {
  cp "$1" "$1.bak"
  echo "Created backup: $1.bak"
}
```

#### Quick Server

- Starts a local HTTP server in your current directory on port 8000 for quick file sharing or testing.
    

Bash

```bash
serve() {
  python3 -m http.server 8000
}
```

---

### Awesome [Zsh](https://zsh.sourceforge.io/) Configs (`.zshrc`)

#### Massive & Shared History

- Never lose a command again and sync history across all open terminal tabs immediately.
    



```bash
HISTFILE=~/.zsh_history
HISTSIZE=100000
SAVEHIST=100000
setopt INC_APPEND_HISTORY
setopt SHARE_HISTORY
setopt HIST_IGNORE_ALL_DUPS
setopt HIST_REDUCE_BLANKS
```

#### Directory Navigation

- Type a folder name directly to enter it without using the `cd` command.
    



```bash
setopt AUTO_CD
```

#### Quality of Life Aliases

- Shortcuts for faster navigation and modern tool integration.
    



```bash
alias ..="cd .."
alias ...="cd ../.."
alias ....="cd ../../.."
alias ls="eza --icons" # Requires eza installed
alias cat="bat"        # Requires bat installed
alias reload="source ~/.zshrc && echo 'Zsh config reloaded!'"
alias path="echo -e \${PATH//:/\\\\n}" # Prints PATH cleanly on separate lines
```