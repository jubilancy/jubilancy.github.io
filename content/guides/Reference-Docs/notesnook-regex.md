---
title: Regex Patterns in Notesnook
aliases:
  - Notesnook Find and Replace
  - JavaScript Regex Guide
tags:
  - notesnook
  - regex
  - tools
  - search-replace
created: 2025-06-04
updated: 2025-06-04
---

# Regex Patterns in Notesnook

A complete guide to using regular expressions in Notesnook's Find and Replace feature.

## Regex Flavor

Notesnook's regex engine is based on **JavaScript (ECMAScript) flavor**. Since Notesnook is a cross-platform app built using modern web technologies (React Native), it is consistent with how JavaScript handles regular expressions.

## Key Features of JavaScript Regex

### Case-Sensitivity

By default, regex patterns are case-sensitive. However, this can be toggled in the Find and Replace dialog—look for a case-sensitivity option or use the `i` flag to make patterns case-insensitive.

### Multiline Mode (`m` flag)

In JavaScript regex, the `m` flag makes the `^` and `$` anchors match the start and end of *each line* rather than the start and end of the entire string.

**Example:**
- Without `m` flag: `^test` matches only at the beginning of the entire text
- With `m` flag: `^test` matches "test" at the beginning of each line

### Line Breaks

The `\n` escape sequence is used for a new line, but its interpretation can depend on the operating system. **Using an actual line break character in the "Replace" field is a robust workaround if `\n` doesn't work as expected.**

**Why `\n` might not work in the "Replace" field:**
- Some text editor replacement fields do not process escape characters like `\n` directly
- The editor may treat it as the two literal characters `\` and `n`, not as a command for a new line
- The workaround of copying a literal new line character and pasting it into the "Replace" field directly inserts the character the engine expects, bypassing any need for escape character interpretation in that context

### Capture Groups

Standard parentheses `()` create a capture group, and these can be referenced in the replacement string using `$1`, `$2`, etc.

**Example:**
- Pattern: `(\w+)\s(\w+)`
- Text: "John Doe"
- Replace with: `$2, $1`
- Result: "Doe, John"

### Lookaheads

JavaScript regex supports both positive and negative lookaheads:

**Positive Lookahead `(?=...)`**
Matches if the pattern ahead is found, without including it in the match.

**Example:**
- Pattern: `\d+(?=px)`
- Text: "width: 500px; height: 200px"
- Matches: "500" and "200" (only the numbers before "px")

**Negative Lookahead `(?!...)`**
Matches if the pattern ahead is NOT found.

**Example:**
- Pattern: `\d+(?!px)`
- Text: "width: 500px; count: 200"
- Matches: "200" (the number not followed by "px")

### Lookbehinds

**Note:** Lookbehinds `(?<=...)` and `(?<!...)` were not available in older versions of ECMAScript but are supported in newer standards. If they don't work in your version of Notesnook, update to the latest version.

**Positive Lookbehind `(?<=...)`**
Matches if the pattern behind is found, without including it in the match.

**Example:**
- Pattern: `(?<=\$)\d+`
- Text: "Price: $50, EUR 75"
- Matches: "50" (only the number after "$")

**Negative Lookbehind `(?<!...)`**
Matches if the pattern behind is NOT found.

## Common Regex Patterns for Notesnook

### Remove Line Breaks
**Pattern:** `\n`
**Replace with:** (leave blank to remove) OR use a literal line break
**Use:** Clean up extra spacing between lines

### Convert Line Breaks to Spaces
**Pattern:** `\n`
**Replace with:** ` ` (single space)
**Use:** Combine multiple lines into one

### Extract URLs
**Pattern:** `https?://[^\s]+`
**Use:** Find all URLs in your notes

### Find Repeated Words
**Pattern:** `\b(\w+)\b\s+(?=\1\b)`
**Use:** Identify accidentally duplicated words

### Swap First and Last Names
**Pattern:** `(\w+)\s(\w+)`
**Replace with:** `$2, $1`
**Use:** Change "John Doe" to "Doe, John"

### Remove Extra Spaces
**Pattern:** `\s+`
**Replace with:** ` ` (single space)
**Use:** Clean up multiple spaces

### Find Email Addresses
**Pattern:** `[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}`
**Use:** Locate all email addresses in notes

### Find Time Stamps (HH:MM Format)
**Pattern:** `\d{1,2}:\d{2}`
**Use:** Find time references in your notes

### Remove Markdown Headers
**Pattern:** `^#+\s+`
**Replace with:** (leave blank)
**Use:** Strip markdown heading syntax
**Note:** Use with `m` flag for multiline

### Wrap Content in Tags
**Pattern:** `(\w+)`
**Replace with:** `<tag>$1</tag>`
**Use:** Rapidly add HTML tags to words

## Tips for Using Find and Replace in Notesnook

1. **Test your pattern first** - Use the Find feature to verify your pattern matches what you intend before replacing
2. **Use anchors carefully** - `^` and `$` behave differently with the `m` flag
3. **For line breaks** - If `\n` doesn't work in the replacement field, copy an actual line break from your text and paste it
4. **Escape special characters** - If you want to match literal special characters (`.`, `*`, `+`, etc.), escape them with a backslash: `\.`, `\*`, `\+`
5. **Test on a copy** - Before doing a find-and-replace on important notes, test on a copy first
6. **Reference capture groups** - Use `$1`, `$2`, etc. to reference groups captured in your pattern

## JavaScript Regex Resources

For more detailed information about JavaScript regex syntax and patterns, consult:
- [MDN Web Docs: Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [ECMAScript Standard Documentation](https://tc39.es/ecma262/#sec-regexp-objects)
- [Regex101.com](https://regex101.com/) - Online regex tester (set to ECMAScript flavor)

## Limitations to Be Aware Of

- **Very large notes** - Regex operations on very large notes may take a moment to process
- **Complex patterns** - Overly complex regex patterns may be slow; optimize if needed
- **Escape characters** - The interpretation of escape sequences in replacement fields may vary; use literal characters when possible
