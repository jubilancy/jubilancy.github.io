# tips: regex on Notesnook

> Published on Oct 6, 2025

Notesnook's regex engine is based on  **JavaScript (ECMAScript) flavor**. Since Notesnook is a cross-platform app built using modern web technologies (React Native), it is consistent with how JavaScript handles regular expressions.  
**Key features of the JavaScript regex flavor**

-   **Case-sensitivity:**  By default, it is case-sensitive, though this can be toggled in the Find and Replace dialog.
-   **Multiline mode (`m`  flag):**  In JavaScript regex, the  `m`  flag makes the  `^`  and  `$`anchors match the start and end of  _each line_  rather than the start and end of the entire string.
-   **Line breaks:**  The  `\n`  escape sequence is used for a new line, but its interpretation can depend on the operating system. Using the actual line break character in the "Replace" field is a robust workaround if  `\n`  doesn't work as expected.
-   **Capture groups:**  Standard parentheses  `()`  create a capture group, and these can be referenced in the replacement string using  `$1`,  `$2`, etc..
-   **Lookaheads and lookbehinds:**  JavaScript regex supports both positive lookaheads  `(?=...)`  and negative lookaheads  `(?!...)`. While lookbehinds  `(?<=...)`  were not available in older versions, they are supported in newer ECMAScript standards.

**Why  `\n`  might not work in the "Replace" field**  
The primary reason for the  `\n`  issue is that some text editor replacement fields do not process escape characters like  `\n`directly. Instead, they require a literal new line.

-   When you type  `\n`  in a replacement box, the editor may treat it as the two literal characters  `\`  and  `n`, not as a command for a new line.
-   The workaround of copying a literal new line character and pasting it into the "Replace" field directly inserts the character the engine expects, bypassing any need for escape character interpretation in that context.

"

regex code

1.  to replace an entire line that includes a keyword (ex. google)
    
    1.  ^.*google.*$
    
2.  **Copy all URLs to the clipboard**
    
    1.  copy([...document.querySelectorAll('a')].map(a => a.href));

"