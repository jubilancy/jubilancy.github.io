---
title: bookmark js
created_at: 22-10-2025 06:09 PM
updated_at: 22-10-2025 06:09 PM
tags:
  - notes
  - links
  - tools
  - lists
  - books
  - dev-tools
---
### Other sites with original bookmarklets

- [Bookmarklets.com (Steve Kangas)](http://bookmarklets.com/) - Mostly out of date, but don't miss the [What's New](http://www.bookmarklets.com/tools/new.html) section.
- [Bookmarklets for Opera](http://www.philburns.com/bookmarklets.html)
- [Tim Powell](http://www.worldtimzone.com/bookmarklets/) - Netscape 4 and Mozilla.
- [Johan Sundström](http://web.archive.org/web/http://a205.ryd.student.liu.se/bookmarklets.html) - Dealing with annoying pages, working with cookies and forms.
- [Francois Jordaan](http://www.fjordaan.uklinux.net/moveabletype/fblog/archives/000059.html) - Bookmarklets and other useful things for IE's Links bar.
- [Tantek Favelets](http://tantek.com/favelets/) - Web development bookmarklets for IE Mac.
- [trylookinghere](http://www.trylookinghere.com/bookmarklets/bookmarkletintro.shtml) - IE Win and IE Mac. Some bookmarklets are taken from other sites and lack attribution.
- [Smoking Gun](http://www.smokinggun.com/code/bookmarklets.php) - Dealing with annoying pages. IE and Mozilla.
- [subSimple (Troels Jakobsen)](http://subsimple.com/bookmarklets/) - General and web development bookmarklets, slightly favoring Internet Explorer.
- [Samrod](http://samrod.com/) - Search, web development.
- [Wolfgang Schwartz](http://web.archive.org/web/http://userpage.fu-berlin.de/~wschwarz/scripts/english.htm) - Web development.
- [Sam Foster](http://sam-i-am.com/work/bookmarklets/dev_debugging.html) - Web development.
- [Ian Lloyd](http://www23.brinkster.com/favelets/favelets.htm) - Web development.
- [Liorean](http://liorean.web-graphics.com/) - style sheet viewer, script viewer. Powerful but confusing.
- Josh Santangelo - [Show Comments](http://endquote.com/content/446/) for IE.
- Mark Pilgrim - Subscribe to blogs using [Amphetadesk auto-subscribe](http://diveintomark.org/projects/autorss/amphetadesk.html) or [Radio auto-subscribe](http://diveintomark.org/projects/autorss/radio.html).
- [Milo Vermeulen](http://milov.nl/?cat=bookmarklets) - Fun bookmarklets for Internet Explorer. Weblog format with discussions.
- Grayrest - [Custom keywords bookmarklets](http://grayrest.com/moz/resources/bookmarks.shtml).
- [pixy](http://www.pixy.cz/blogg/favelets/) - track computed style property, simple dom inspector.
- Stuart Langridge - [show matching style rules](http://www.kryogenix.org/days/473.html).

# bookmark js

Don't even get me started with bookmarklets! It's the most incredible piece of [boring](<https://m15o.ichi.city/site/boring.html>)technology I can think of!  
Some bookmarklets I use: Extract the feed of a page

```
javascript:void(alert([...document.querySelectorAll('link[rel=alternate]')].filter(e => e.type === "application/atom+xml" || e.type === "application/rss+xml").map(e => e.href)))
```



---



