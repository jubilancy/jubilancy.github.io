Last login: Sun Mar 29 16:26:18 on ttys001
(.venv-global) ➜  ~ brew install --cask qlmarkdown
✔︎ JSON API cask.jws.json                             Downloaded   15.4MB/ 15.4MB
✔︎ JSON API formula.jws.json                          Downloaded   32.0MB/ 32.0MB
Warning: Not upgrading qlmarkdown, the latest version is already installed
(.venv-global) ➜  ~ touch /tmp/qlmarkdown.md && mdls -name kMDItemContentType /tmp/qlmarkdown.md && rm /tmp/qlmarkdown.md
kMDItemContentType = "net.daringfireball.markdown"
(.venv-global) ➜  ~ xattr -r -d com.apple.quarantine /Applications/QLMarkdown.app # Default path; change if necessary
(.venv-global) ➜  ~ ln -s /Applications/QLMarkdown.app/Contents/Resources/qlmarkdown_cli /usr/local/bin/qlmarkdown_cli
ln: /usr/local/bin/qlmarkdown_cli: Permission denied
(.venv-global) ➜  ~ sudo ln -s /Applications/QLMarkdown.app/Contents/Resources/qlmarkdown_cli /usr/local/bin/qlmarkdown_cli
Password:
(.venv-global) ➜  ~ ls -l /usr/local/bin/qlmarkdown_cli
lrwxr-xr-x  1 root  wheel  62 Mar 29 16:33 /usr/local/bin/qlmarkdown_cli -> /Applications/QLMarkdown.app/Contents/Resources/qlmarkdown_cli
(.venv-global) ➜  ~ qlmarkdown_cli --help
qlmarkdown_cli
Usage: qlmarkdown_cli [-o <file|dir>] [-v] <file> [..]

Arguments:
 -h	Show this help and exit.
 -o	<file|dir> Destination output. If you pass a directory, a new file is created with the name of the processed source with html extension. 
   	The destination file is always overwritten. If this argument is not provided, the output will be printed to the stdout.
 -v	Verbose mode. Valid only with the -o option.

Options:
 --footnotes on|off        Parse the footnotes.
 --hard-break on|off       Render softbreak elements as hard line breaks.
 --no-soft-break on|off    Render softbreak elements as spaces.
 --raw-html on|off         Render raw HTML and unsafe links.
 --smart-quotes on|off     Convert straight quotes to curly.
 --validate-utf8 on|off    Validate UTF-8 in the input before parsing.
 --code on|off             Show the plain text file (raw version) instead of the formatted output.
 --appearance light|dark   
 --about on|off            Show/Hide a footer with info about QLMarkdown.
 --debug on|off            Insert in the output some debug information.

Extensions:
 --autolink on|off         Automatically translate URL/email to link.
 --emoji image|font|off    Translate the emoji shortcodes.
 --github-mentions on|off  Translate mentions to link to the GitHub account.
 --heads-anchor on|off     Create anchors for the heads.
 --highlight on|off        Highlight text marked with `==`.
 --inline-images on|off    Embed the image files inside the formatted output.
 --math on|off             Format the mathematical expressions.
 --table on|off            Enable table format.
 --tag-filter on|off       Strip potentially dangerous HTML tags.
 --tasklist on|off         Parse task list.
 --strikethrough single|double|off Recognize single/double `~` for the strikethrough style.
 --syntax-highlight on|off Highlight the code inside fenced block
 --sub on|off              Format subscript characters inside `~` markers.
 --sup on|off              Format superscript characters inside `^` markers.
 --yaml rmd|qmd|all|off    Render the yaml header

Unspecified rendering options will use the settings defined in the main application.

To handle multiple files at time you need to pass the -o argument with a destination folder.
(.venv-global) ➜  ~ 
