---
tags:
  - terminal
---

### Custom Plugins And Themes

[](https://github.com/ohmyzsh/ohmyzsh#custom-plugins-and-themes)

If you want to override any of the default behaviors, just add a new file (ending in `.zsh`) in the `custom/` directory.

If you have many functions that go well together, you can put them as a `XYZ.plugin.zsh` file in the`custom/plugins/` directory and then enable this plugin.

If you would like to override the functionality of a plugin distributed with Oh My Zsh, create a plugin of the same name in the `custom/plugins/` directory and it will be loaded instead of the one in `plugins/`.

### Enable GNU ls In macOS And freeBSD Systems

[](https://github.com/ohmyzsh/ohmyzsh#enable-gnu-ls-in-macos-and-freebsd-systems)

The default behaviour in Oh My Zsh is to use BSD `ls` in macOS and FreeBSD systems. If GNU `ls` is installed (as `gls` command), you can choose to use it instead. To do it, you can use zstyle-based config before sourcing `oh-my-zsh.sh`:

```shell
zstyle ':omz:lib:theme-and-appearance' gnu-ls yes
```

_Note: this is not compatible with `DISABLE_LS_COLORS=true`_


## Getting Updates

[](https://github.com/ohmyzsh/ohmyzsh#getting-updates)

By default, you will be prompted to check for updates every 2 weeks. You can choose other update modes by adding a line to your `~/.zshrc` file, **before Oh My Zsh is loaded**:

1. Automatic update without confirmation prompt:
    
    ```shell
    zstyle ':omz:update' mode auto
    ```
    
2. Just offer a reminder every few days, if there are updates available:
    
    ```shell
    zstyle ':omz:update' mode reminder
    ```
    
3. To disable automatic updates entirely:
    
    ```shell
    zstyle ':omz:update' mode disabled
    ```
    

NOTE: you can control how often Oh My Zsh checks for updates with the following setting:

```shell
# This will check for updates every 7 days
zstyle ':omz:update' frequency 7
# This will check for updates every time you open the terminal (not recommended)
zstyle ':omz:update' frequency 0
```

### Updates Verbosity

[](https://github.com/ohmyzsh/ohmyzsh#updates-verbosity)

You can also limit the update verbosity with the following settings:

```shell
zstyle ':omz:update' verbose default # default update prompt

zstyle ':omz:update' verbose minimal # only few lines

zstyle ':omz:update' verbose silent # only errors
```

### Manual Updates

[](https://github.com/ohmyzsh/ohmyzsh#manual-updates)

If you'd like to update at any point in time (maybe someone just released a new plugin and you don't want to wait a week?) you just need to run:

```shell
omz update
```

Note

If you want to automate this process in a script, you should call directly the `upgrade` script, like this:

```shell
$ZSH/tools/upgrade.sh
```

See more options in the [FAQ: How do I update Oh My Zsh?](https://github.com/ohmyzsh/ohmyzsh/wiki/FAQ#how-do-i-update-oh-my-zsh).

**USE OF `omz update --unattended` HAS BEEN REMOVED, AS IT HAS SIDE EFFECTS**.

Magic! 🎉

- [gh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gh): this plugin adds completion for the [GitHub CLI](https://cli.github.com/).
- [git](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git): the git plugin provides many [aliases](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git#aliases) and a few useful [functions](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git#functions).
- [git-auto-fetch](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-auto-fetch): automatically fetches all changes from all remotes while you are working in a git-initialized directory.
- [git-commit](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-commit): the git-commit plugin adds several [git aliases](https://www.git-scm.com/docs/git-config#Documentation/git-config.txt-alias) for [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/#summary) messages.
- [git-escape-magic](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-escape-magic): this plugin is copied from the original at [https://github.com/knu/zsh-git-escape-magic](https://github.com/knu/zsh-git-escape-magic). All credit for the functionality enabled by this plugin should go to @knu.
- [git-extras](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-extras): this plugin provides completion definitions for some of the commands defined by [git-extras](https://github.com/tj/git-extras), which must already be installed.
- [gitfast](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gitfast): this plugin adds completion for Git, using the zsh completion from git.git folks, which is much faster than the official one from zsh. A lot of zsh-specific features are not supported, like descriptions for every argument, but everything the bash completion has, this one does too (as it is using it behind the scenes). Not only is it faster, it should be more robust, and updated regularly to the latest git upstream version.
- [git-flow](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-flow): this plugin adds completion and aliases for the [`git-flow` command](https://github.com/nvie/gitflow).
- [git-flow-avh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-flow-avh): this plugin adds completion for the [git-flow (AVH Edition)](https://github.com/petervanderdoes/gitflow-avh). The AVH Edition of the git extensions that provides high-level repository operations for [Vincent Driessen's branching model](https://nvie.com/posts/a-successful-git-branching-model/).
- [github](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/github): this plugin supports working with GitHub from the command line. It provides a few things:
- [git-hubflow](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-hubflow): this plugin adds completion for [HubFlow](https://datasift.github.io/gitflow/) (GitFlow for GitHub), as well as some aliases for common commands. HubFlow is a git extension to make it easy to use GitFlow with GitHub. Based on the original gitflow extension for git.
- [gitignore](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gitignore): this plugin enables you the use of [gitignore.io](https://www.toptal.com/developers/gitignore) from the command line. You need an active internet connection.
- [git-lfs](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-lfs): the git lfs plugin provides [aliases](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-lfs#aliases) and [functions](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-lfs#functions) for [git-lfs](https://github.com/git-lfs/git-lfs).
- [git-prompt](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-prompt): A `zsh` prompt that displays information about the current git repository. In particular: the branch name, difference with remote branch, number of files staged or changed, etc.
- [glassfish](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/glassfish): the glassfish plugin adds completion for the `asadmin` utility, a command to manage [Oracle GlassFish](https://docs.oracle.com/cd/E18930_01/html/821-2416/giobi.html)servers.
- [globalias](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/globalias): expands all glob expressions, subcommands and aliases (including global).
- [gnu-utils](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gnu-utils): this plugin binds GNU coreutils to their default names, so that you don't have to call them using their prefixed name, which starts with `g`. This is useful in systems which don't have GNU coreutils installed by default, mainly macOS or FreeBSD, which use BSD coreutils.
- [golang](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/golang): this plugin adds completion for the [Go Programming Language](https://golang.org/), as well as some aliases for common Golang commands.

# api
- using api to fetch and display data for your website
- what can you do with api
- using an api to display stuff on your website
- 

Last login: Fri Jan 23 10:55:41 on console
[oh-my-zsh] Would you like to update? [Y/n] y
Updating Oh My Zsh
master

Features:

 - 47e990c [brew]              Add aliases for reinstall and HEAD install (#13446)
 - 233e81d [command-not-found] Support void linux (#13531)
 - e076690 [gitignore]         Use cdn as endpoint (#13497)
 - 834fbf3 [hcloud]            Add plugin for Hetzner Cloud CLI (#13473)

You can see the changelog with `omz changelog`
         __                                     __   
  ____  / /_     ____ ___  __  __   ____  _____/ /_  
 / __ \/ __ \   / __ `__ \/ / / /  /_  / / ___/ __ \ 
/ /_/ / / / /  / / / / / / /_/ /    / /_(__  ) / / / 
\____/_/ /_/  /_/ /_/ /_/\__, /    /___/____/_/ /_/  
                        /____/                       

Hooray! Oh My Zsh has been updated!

To keep up with the latest news and updates, follow us on X: https://x.com/ohmyzsh
Want to get involved in the community? Join our Discord: https://discord.gg/ohmyzsh
Get your Oh My Zsh swag at: https://commitgoods.com/collections/oh-my-zsh

# yt dlp commands

```shell
yt-dlp {tiktok collection url)

I have 22 collections 
Make 22 folders
Include in command file of errors and successes 

Do the same with ig
```
