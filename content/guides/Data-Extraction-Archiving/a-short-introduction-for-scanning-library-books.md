---
title: "a short introduction for scanning library books"
---

# A Short Introduction for Scanning Library Books

[](https://www.reddit.com/r/Piracy/?f=flair_name%3A%22Guide%22)

Guide

As an academic I quite frequently have the problem, that many articles and older books are only available as paper books, not as scanned documents. This is frustrating as many books can only be accessed in the library and considering the current political climate may as well be subject to disposal. I would like to share the routine I use to digitize these books and articles. I am on linux, but the tools I use are open source and available for most platforms. Many university libraries are accessible to non university members through outsiders programs, either for a small fee or (as in my case) for free.

# 1. Scanning The Books

If you are a member of a library, there is a high chance your library has a document scanner similar to this:

[![r/Piracy - Book2Net Spirit Scanner](https://preview.redd.it/a-short-introduction-for-scanning-library-books-v0-4jlvo01iqv8f1.png?width=202&format=png&auto=webp&s=a09f5f4ab8d7a291490fd6a526d29602fbf28c66)](https://preview.redd.it/a-short-introduction-for-scanning-library-books-v0-4jlvo01iqv8f1.png?width=202&format=png&auto=webp&s=a09f5f4ab8d7a291490fd6a526d29602fbf28c66 "Image from r/Piracy - Book2Net Spirit Scanner")

Book2Net Spirit Scanner

To scan a book you will typically need a usb stick and the book in question. If you need help with your scanner ask your librarian! Many scanners try to remove fingers from the prints, but these are rarely perfect. Do not worry too much about fingers in the margins, we are going to cut the pdf anyway. It is more important that the text is straight on the page than the margins being completely blank, but leave yourself as much room as possible. Also consider using smaller books as buffers to keep the pages level for thicker books near the start and the end.

Also be aware that this takes time. I usually need 5 to 10 seconds per two pages. If the book has 100 pages I therefore plan 15 to 20 minutes.

# 2. Optical Character Recognition

OCR is the process of turning the photograph of the page into a searchable document. This feature is provided by Adobe Acrobat if you have a version an hand, I use  [OCRmyPDF](https://github.com/ocrmypdf/OCRmyPDF), installed via yay (This depends which platform you're on). OCRmyPDF is a python command line tool wrapping tesseract. On installation make sure to install the correct language package of tesseract. Run your scanned pdf through it to get a searchable pdf:

# Add an OCR layer and convert to PDF/A
ocrmypdf input.pdf output.pdf

# 3. Crop Pages to Content

This feature is also available in Acrobat. I use the Java based  [Briss](https://sourceforge.net/projects/briss/). You may also want to check out  [Briss 2.0](https://github.com/mbaeuerle/Briss-2.0). Briss automatically groups the Pages and lets you crop them. To make sure all pages have the same size go to Rectangle > Maximize to Size (or press M). Be generous with margins, crop out only what is necessary.

[![r/Piracy - Briss Screenshot](https://preview.redd.it/a-short-introduction-for-scanning-library-books-v0-z0vae2jxtv8f1.png?width=1855&format=png&auto=webp&s=9db81dcf2b765c9241f9f3a6b1f9716a250ff340)](https://preview.redd.it/a-short-introduction-for-scanning-library-books-v0-z0vae2jxtv8f1.png?width=1855&format=png&auto=webp&s=9db81dcf2b765c9241f9f3a6b1f9716a250ff340 "Image from r/Piracy - Briss Screenshot")

Briss Screenshot

Under "Action" you can find the Preview (P) and the Export (C) functionality. I recommend previewing your pdf and checking whether it feels right before exporting.

Conratulations! You now have a digital copy of your physical book or article!

# 4. Sharing is Caring

You can find many sites for sharing books in the  [megathread](https://old.reddit.com/r/Piracy/wiki/megathread). Annas Archive, the currently most comprehensive selection for academic books, mirrors  [Library Genesis](https://libgen.st/)  for books and  [Library Genesis+](https://libgen.li/)  for scientific articles. Follow the proper security considerations posted by other contributors who know more about that than me.