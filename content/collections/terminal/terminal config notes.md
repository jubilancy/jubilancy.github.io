---
tags:
  - terminal
---





The errors are from two small problems in `.zprofile` plus one in `.zshrc`. Here is exactly what to fix.
export PROMPT='%n@%m %~ %# '
```bash
# Test 1: No syntax errors
zsh -n ~/.zprofile ~/.zshrc

# Test 2: Homebrew works
which brew
brew --version

# Test 3: Tesseract works  
tesseract --version
# Optional: Update everything
brew update && brew upgrade

# Optional: Add more Tesseract languages (if needed)
brew install tesseract-lang

# Test Tesseract with a sample image
tesseract image.png output -l eng
```

**Zsh is generally better than Bash for modern macOS use.** macOS has used Zsh as the default shell since Catalina (2019), and it offers superior features while maintaining Bash compatibility.[zsh.sourceforge](https://zsh.sourceforge.io/Intro/intro.html)​

## Key Advantages of Zsh

- **Better autocompletion**: Tab completion predicts commands, paths, and options intelligently[zsh.sourceforge](https://zsh.sourceforge.io/Intro/intro.html)​
    
- **Globbing/wildcards**: `**/*.txt` finds files recursively; `file*(.N)` lists only regular files[zsh.sourceforge](https://zsh.sourceforge.io/Intro/intro.html)​
    
- **Prompt customization**: Easy themes via Oh My Zsh (Powerlevel10k is popular)[jade](https://docs.jade.fyi/zsh/)​
    
- **History search**: Up arrow + type to search previous commands[zsh.sourceforge](https://zsh.sourceforge.io/Intro/intro.html)​
    
- **Syntax highlighting**: Colors commands as you type (with plugins)[jade](https://docs.jade.fyi/zsh/)​
    

## Bash vs Zsh Comparison

|Feature|Bash|Zsh|
|---|---|---|
|Default on macOS|No (pre-2019)|Yes (Catalina+)|
|Autocompletion|Basic|Advanced, shared history|
|Plugin ecosystem|Limited|Oh My Zsh (1000+ plugins)|
|Speed|Faster for simple scripts|Slightly slower but feature-rich|
|Learning curve|Familiar|Easy transition|

## Recommendation

**Stick with Zsh** since:

- You're already using it successfully
    
- All your config (`.zshrc`, `.zprofile`) is Zsh-optimized
    
- Homebrew/Tesseract work perfectly
    
- Future-proof for macOS updates
    

**Optional enhancement**: Install Oh My Zsh for themes/plugins:

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```





Bash is fine for simple scripts, but Zsh wins for interactive daily use.[jade+1](https://docs.jade.fyi/zsh/)​

1. [https://zsh.sourceforge.io/Intro/intro.html](https://zsh.sourceforge.io/Intro/intro.html)
2. [https://docs.jade.fyi/zsh/](https://docs.jade.fyi/zsh/)



You can customize the Mac Terminal by 

==changing its appearance using **profiles**(which control fonts, colors, and backgrounds) and by customizing the **shell prompt**by editing configuration files like== `.zshrc`. For more advanced customization, consider installing a third-party tool like iTerm2. 

Customize Terminal appearance with profiles 

This video shows how to customize terminal appearance with profiles:

![Related video thumbnail](data:image/jpeg;base64,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)

59s

[

![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc1ODcrNzc3Nzc3NS83Nzc3Mi43Ljc3Nzc1Ny43Nzc3MTU1NTM1Nzc3Nzc1Nf/AABEIACAAIAMBEQACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAEBQYDBwD/xAA0EAACAQMBBQMJCQAAAAAAAAABAgMEBREABhIhMUEiUbETYXGRssHR4fAVIyQyUmJygqH/xAAaAQACAwEBAAAAAAAAAAAAAAAEBQIDBgEA/8QAJxEAAgICAAQFBQAAAAAAAAAAAQIAAwQREhMxYQUhI0FRIiRxsfD/2gAMAwEAAhEDEQA/AOXhO2f4+/WhVPuGHaLmPpj8wuxUH2ncvIGaOGIfmeQgDSrLyHS1lQ/2ofi462KC01vdsjt1YIYqmOeNgGRkGMj68dW+H3vaeW48xIZ1C1HiQ+UWtHxPo01uq+kwFW6TdFJlIAyd0eOral3lWdgJFj6axxss4acxwRQtKtQpJkXJC4IbA5n19dZjOZXvZl6GPcEarCnrHW0dumrYN2go1nelfMrwAEopBOMDnyGcDp59E+DcAuZnbXsJX4mdoFUSNdeutTbXtTEQMrdirDT3CeeruClqaMBFUEjLc88O7h69KMvJem6wJ1Ov1CqqwyjftD7rsTv3NGppjGCx7YTJbhnBHU+fn6dJnQNDUfhlfs/b0tlIYQu7hjvkrje4Ag/6dRrr4B3k7reYRoaAi6/bO2y600vkIIoKviVkjUL2u445jTPGzbamAY7X4gb1Kwmmy1rhpLUkYk3xIiu+DwDEccd3Qf11Vl2cy9mHzJVrwoBDYvxVFE1PIC+6QjD9QyB7WhpZPU9ajhi7feMCjIeYIHz13U9AY6iOO6tE7YZ1ZgM/uPx12cn/2Q==)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcElEQVR4AWP4//8/RZh6BgCZAkDsAMUNWDFCXgDFACCV8J/B+D8pGKwHRAKRAUyQDEMMQAYEUGBAAsiABpwKHjz4/9/BAZ8BDXgNgIMNGyg04MABkg1AeCEgAK8XKA5EiqORooSELykXEJuUBz43AgAIA1ZhBoG9vwAAAABJRU5ErkJggg==)

Josean Martinez

YouTube • Oct 3, 2022





](https://www.youtube.com/watch?v=CF1tMjvHDRA&t=360)

1. Open the Terminal app and go to **Terminal > Settings**.
2. Click on **Profiles** in the top bar.
3. Select a profile you want to modify or click the `+` button to create a new one.
4. Use the **Text** tab to change fonts, text colors, and background colors or images.
- Use the **Window** tab to adjust settings like window title and size. 

Customize the shell prompt 1. Open or create the shell configuration file for your shell. For zsh (the default on modern macOS), this is `~/.zshrc`. For bash, it's `~/.bash_profile`.
2. To edit the file, you can use a command-line editor like `nano` (e.g., `nano ~/.zshrc`).
3. Add or modify the `export PS1="..."` line to customize your prompt. For example, `export PS1="[%n]%~>"` adds the username `[%n]` and the current directory `[%~]`before the prompt symbol `>`.
4. Save the file and restart the Terminal, or run the command `source ~/.zshrc` to apply the changes immediately. Use third-party tools for more customization 

This video introduces Oh My Zsh and how to install it:

![Related video thumbnail](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTolnZ_7oJwFs3CtKJpfG3VzMFmvd85apsYgReXJxsrbJJDynI2)

1m

[

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAXVBMVEUAAAAYGBjKyca+vrs0NDNhYWD////+/fn///zs6+dubmyfn53///r6+fUtLS3///7W1dKnpqSnp6SRkY5SUlJEREOXl5X08/A/Pz5UVFPb2tfh4N3Y19QhICAyMjHWdZoKAAAAh0lEQVR4Ae3PxQHDQAwEwI1JR4qZof8uA2auwPMUC49TL2tgOzjnetQTct+petCGB/TGmkO+EMJnBHReEIo+aMHweUHUJ0yc+HwxoS/w08zcFhACuiugADnfFRhdeLcFfhmb2wKGZWiS4/AmVajqSZNgQwtm0rjWSs/3ici3cSX5Kcuyw+PUF2/pDK5VZa3CAAAAAElFTkSuQmCC)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcElEQVR4AWP4//8/RZh6BgCZAkDsAMUNWDFCXgDFACCV8J/B+D8pGKwHRAKRAUyQDEMMQAYEUGBAAsiABpwKHjz4/9/BAZ8BDXgNgIMNGyg04MABkg1AeCEgAK8XKA5EiqORooSELykXEJuUBz43AgAIA1ZhBoG9vwAAAABJRU5ErkJggg==)

Warp

YouTube • Jul 7, 2023





](https://www.youtube.com/watch?v=d4bTkiftBOk&t=39)

- **[iTerm2](https://www.google.com/search?client=safari&rls=en&q=iTerm2&ie=UTF-8&oe=UTF-8&ved=2ahUKEwiS7cPjjayRAxV7L1kFHWKdGgAQgK4QegYIAQgAECQ):** A popular alternative Terminal with more features. You can find and install third-party color schemes, set up hotkeys, and enable unlimited scrollback.
- **[Oh My Zsh](https://www.google.com/search?client=safari&rls=en&q=Oh+My+Zsh&ie=UTF-8&oe=UTF-8&ved=2ahUKEwiS7cPjjayRAxV7L1kFHWKdGgAQgK4QegYIAQgAECY)**: A framework for managing zsh configuration. You can use it to easily install themes and plugins to customize your shell prompt and add functionality. 

[](https://support.apple.com/en-uz/guide/terminal/trml107/mac)

Use profiles to change the look of Terminal windows on Mac - Apple Support (UZ)

You can modify a Terminal window profile on a Mac by following these steps: 1. Open the Terminal app 2. Select **Terminal > Settin...

![](https://encrypted-tbn2.gstatic.com/faviconV2?url=https://support.apple.com&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)

Apple Support

[](https://support.apple.com/en-ca/guide/terminal/trml107/mac)

Use profiles to change the look of Terminal windows on Mac

Create a new profile or modify an existing profile * Go to the Terminal app on your Mac. * Choose Terminal > Settings, then click ...

![](https://encrypted-tbn2.gstatic.com/faviconV2?url=https://support.apple.com&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)

Apple Support

[](https://support.apple.com/guide/terminal/change-profiles-text-settings-trmltxt/mac)

Change Profiles Text settings in Terminal on Mac - Apple Support

Use Text settings in Terminal to change the font, text, color, and cursor options for a Terminal window profile. To change these s...

![](https://encrypted-tbn2.gstatic.com/faviconV2?url=https://support.apple.com&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)

Apple Support



folders

Filters

Tags (1)

[Get the most out of Raindrop.ioUpgrade to PRO](https://raindrop.io/pro/buy)

All bookmarks

My Ultimate Terminal Customizations for macOS

[12/7/2025](https://app.raindrop.io/my/0/%2312%2F7%2F2025)

[My Ultimate Terminal Customizations for macOS](https://www.cesarsotovalero.net/blog/my-ultimate-terminal-customizations-for-macos.html)

Mac Terminal Customization with Oh-My-ZSH and powerlevel10k | 1 + 1 = 10

[12/7/2025](https://app.raindrop.io/my/0/%2312%2F7%2F2025)

[Mac Terminal Customization with Oh-My-ZSH and powerlevel10k | 1 + 1 = 10](https://www.haccks.com/posts/mac-terminal-customization/)

How I customise my Terminal with Oh My Zsh (macOS) - DEV Community

[12/7/2025](https://app.raindrop.io/my/0/%2312%2F7%2F2025)

[How I customise my Terminal with Oh My Zsh (macOS) - DEV Community](https://dev.to/hannahgooding/how-i-customise-my-terminal-with-oh-my-zsh-macos-427i)

How to customize the Terminal? : r/mac

[12/7/2025](https://app.raindrop.io/my/0/%2312%2F7%2F2025)

[How to customize the Terminal? : r/mac](https://www.reddit.com/r/mac/comments/n54vux/how_to_customize_the_terminal/?rdt=55451)

How to make your boring macOS terminal look so much better | by Mohammed Omer | Medium

[12/7/2025](https://app.raindrop.io/my/0/%2312%2F7%2F2025)

[How to make your boring macOS terminal look so much better | by Mohammed Omer | Medium](https://medium.com/@mdomer19967/how-to-make-your-boring-macos-terminal-look-so-much-better-dd7f80ffeedc)

Raindrop.io

[12/7/2025](https://app.raindrop.io/my/0/%2312%2F7%2F2025)

[Raindrop.io](https://app.raindrop.io/account/extension)

sharing - How to change computer name so terminal displays it in Mac OS X Mountain Lion? - Ask Different

[12/7/2025](https://app.raindrop.io/my/0/%2312%2F7%2F2025)

[sharing - How to change computer name so terminal displays it in Mac OS X Mountain Lion? - Ask Different](https://apple.stackexchange.com/questions/66611/how-to-change-computer-name-so-terminal-displays-it-in-mac-os-x-mountain-lion)

Customizing your Mac’s Terminal. How to improve your macOS Terminal… | by Jarosz 🇵🇱 | Medium

[12/7/2025](https://app.raindrop.io/my/0/%2312%2F7%2F2025)

[Customizing your Mac’s Terminal. How to improve your macOS Terminal… | by Jarosz 🇵🇱 | Medium](https://jarosz.medium.com/customizing-your-macs-terminal-f9e6954182f5)

Change settings in Terminal on Mac - Apple Support

[12/7/2025](https://app.raindrop.io/my/0/%2312%2F7%2F2025)

[Change settings in Terminal on Mac - Apple Support](https://support.apple.com/guide/terminal/change-settings-trml789a1819/mac)

How to Make Your Mac Terminal Better and Make It More Colorful | by Roman Melnik | JavaScript in Plain English

[12/7/2025](https://app.raindrop.io/my/0/%2312%2F7%2F2025)

[How to Make Your Mac Terminal Better and Make It More Colorful | by Roman Melnik | JavaScript in Plain English](https://javascript.plainenglish.io/how-to-make-your-mac-terminal-better-and-make-it-more-colorful-a966e92a51b5?gi=aae8a3e45633)

Customize your mac and VS code terminal-EASY! - DEV Community

[12/7/2025](https://app.raindrop.io/my/0/%2312%2F7%2F2025)

[Customize your mac and VS code terminal-EASY! - DEV Community](https://dev.to/devpato/customize-your-mac-terminal-vs-code-too-easy-2315)

Raindrop.io

[Raindrop.io](https://app.raindrop.io/account/extension)

AQNaTsKXlwSizejW OBGqoBGSXVahCVikhwFweJRRhDuuNttcGODvpBxwOJWEaNTREiostCfRsM

[AQNaTsKXlwSizejW OBGqoBGSXVahCVikhwFweJRRhDuuNttcGODvpBxwOJWEaNTREiostCfRsM](https://scontent.cdninstagram.com/o1/v/t16/f2/m69/AQNaTsKXlwSizej3W-OBGqoBGSXV6a3hC38Vikh5wFweJ4RRhDuuNttcGODv7pBxwOJWEaNT9REiostCf6Rs65M7.mp4?strext=1&_nc_cat=102&_nc_oc=Adms3sV3P0CtY_Dc-Nfb3qubCTGhhJGXNJrH8fELOT0F4G3R956cdu009k0s73WlrceKbuzv3Dmr6V5EvuLVkZ0V&_nc_sid=5e9851&_nc_ht=instagram.fyyc2-1.fna.fbcdn.net&_nc_ohc=mS-k7fWf2lYQ7kNvwGat-S4&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6ODU5OTM5MzM2NDI4NjA3LCJhc3NldF9hZ2VfZGF5cyI6MiwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjgsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=2ed457cf01346216&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQ1I3TlNNeVk0eWZkZFVHQUVoWl9ZYUcyZ3hrYnNwVEFRQUYVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQzhMVWlNUk5SU2M0Y01FQUdMaEVvNGRCbjRSYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm_vDoqoeHhwMVAigCQzMsF0Agqn752yLRGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=skT_7J2qiMYtRqs6gNkRcw&_nc_zt=28&oh=00_AfkL1LW96FpsqPCgA02rib-POaiZCoSgBZGhATM16wFsAA&oe=6935857A)

13 bookmarks


_username_@_hostname_ in _terminal_


chsh -s $(which zsh)

#### Manual Installation

[](https://github.com/ohmyzsh/ohmyzsh#manual-installation)

##### 1. Clone The Repository 

[](https://github.com/ohmyzsh/ohmyzsh#1-clone-the-repository-)

```shell
git clone https://github.com/ohmyzsh/ohmyzsh.git ~/.oh-my-zsh
```

##### 2. _Optionally_, Backup Your Existing `~/.zshrc` File 

[](https://github.com/ohmyzsh/ohmyzsh#2-optionally-backup-your-existing-zshrc-file-)

```shell
cp ~/.zshrc ~/.zshrc.orig
```

##### 3. Create A New Zsh Configuration File 

[](https://github.com/ohmyzsh/ohmyzsh#3-create-a-new-zsh-configuration-file-)

You can create a new zsh config file by copying the template that we have included for you.

```shell
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```

##### 4. Change Your Default Shell 

[](https://github.com/ohmyzsh/ohmyzsh#4-change-your-default-shell-)

```shell
chsh -s $(which zsh)
```

You must log out from your user session and log back in to see this change.

##### 5. Initialize Your New Zsh Configuration 

[](https://github.com/ohmyzsh/ohmyzsh#5-initialize-your-new-zsh-configuration-)

Once you open up a new terminal window, it should load zsh with Oh My Zsh's configuration.


https://www.inaturalist.org/people/10006428



  