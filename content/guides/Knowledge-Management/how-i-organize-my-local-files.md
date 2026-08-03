---
tags:
  - guides
---
Organizing a local development environment is a bit of an art form. Most developers gravitate toward a structure that separates **active projects** from **system-wide tools** and **persistent configurations**.

Here is a common "industry standard" tree for a Mac/Linux user (like yourself) who balances web development (Astro), custom scripting, and containerized workflows.

### The "Pro" Local Directory Tree

Plaintext

```
/Users/eliana/
├── .config/                 # Hidden: Global config files (zsh, git, etc.)
├── .ssh/                    # Hidden: Your GitHub/Server keys
├── bin/                     # YOUR CUSTOM EXECUTABLES
│   ├── scrub-html.sh        # A standalone script you wrote
│   └── setup-project.py     # Automation scripts
├── dev/                     # THE KITCHEN (Where the work happens)
│   ├── archive/             # Old projects you aren't touching
│   ├── docker/              # Docker-specific setups
│   │   ├── databases/       # Persistent local DB containers
│   │   └── sandbox/         # Testing containerized apps
│   ├── personal/            # Side projects
│   │   └── dictionary/      # Your personal dictionary project
│   └── repos/               # CLONED REPOSITORIES (The "Source of Truth")
│       ├── tools/           # Your tools.eliana.lol repo (Astro/Static)
│       ├── vore/            # Other cloned tools
│       └── web-garden/      # Your main digital garden
├── downloads/               # THE LANDING STRIP (Keep this empty!)
├── library/                 # System/App support (Mac specific)
└── opt/                     # THIRD PARTY SOFTWARE
    └── homebrew/            # Where 'brew' installs your packages
```

---

### Breakdown of Key Folders

#### 1. `~/bin/` (The Power User move)

This is where you put your "one-off" scripts. If you add this folder to your `$PATH` in your `.zshrc` file, you can run your custom scripts from _anywhere_ in the terminal just by typing their name.

- **Best for:** The Python scrapers or OCR shortcuts you've built.
    

#### 2. `~/dev/repos/`

Keep all your GitHub-synced projects here.

- **Why:** It separates things you are "version controlling" (Git) from random folders of junk.
    
- **Organization Tip:** Many people sub-divide this by platform (e.g., `~/dev/repos/github.com/jubilancy/tools`).
    

#### 3. `~/dev/docker/`

Docker files can get messy with `docker-compose.yml` files and volume data.

- **Best for:** Keeping your Docker images and configuration files in one spot so they don't clutter up your actual website source code.
    

#### 4. `~/.config/`

As you get deeper into coding, you'll start having "Dotfiles" (files that start with a period).

- **Best for:** Storing your `zsh` aliases, your VS Code settings, and your Git global config.
    

---

### How to transition your current setup

Since you just pushed your `tools` site to Cloudflare and GitHub, your local folder is currently your **Local Repo**.

**The Move:** 1. Create a folder called `repos` inside your home directory.

2. Move your `tools` folder into `~/repos/tools`.

3. Inside `~/repos/tools`, create a folder called `_old` or `archive`.

4. Move `MainLayout.html`, `layout.js`, and `header.html` into that `archive` folder.

5. Add `archive/` to your `.gitignore` file so they don't get pushed back up to the web.

This keeps your "Work Area" clean while keeping your "History" safe.
