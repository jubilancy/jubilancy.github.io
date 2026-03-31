Last login: Sun Mar 29 16:40:40 on ttys001
(.venv-global) ➜  ~ {
  echo "=== SYSTEM & SHELL ==="
  echo "OS: $(sw_vers -productVersion)"
  echo "Shell: $SHELL"
  
  echo -e "\n=== HOMEBREW PACKAGES (Installed via Brew) ==="
  brew list
  
  echo -e "\n=== HOMEBREW CASKS (GUI Apps like QLMarkdown) ==="
  brew list --cask
  
  echo -e "\n=== PYTHON PACKAGES (In your current .venv) ==="
  pip list
  
  echo -e "\n=== OH MY ZSH PLUGINS ==="
  grep "^plugins=" ~/.zshrc
  
  echo -e "\n=== CUSTOM SCRIPTS (~/bin) ==="
  ls ~/bin
} > my_terminal_setup.txt
(.venv-global) ➜  ~ cp ~/.zshrc zshrc_backup.txt
(.venv-global) ➜  ~ brew bundle dump --describe --force
✔︎ JSON API cask.jws.json                             Downloaded   15.4MB/ 15.4MB
✔︎ JSON API formula.jws.json                          Downloaded   32.0MB/ 32.0MB
(.venv-global) ➜  ~ 
