---
tags:
  - nekoweb
  - guides
---

# nekoweb tools

> Published on Nov 5, 2025

# nekoweb specific/stuff made specifically for nekoweb

1.  fullscreen editor:  [https://userstyles.world/style/14951/nekoweb-full-screen-code-editor](https://userstyles.world/style/14951/nekoweb-full-screen-code-editor)
2.  sitebox preview:  [https://github.com/fl0werpowers/nekoweb-sitebox-preview](https://github.com/fl0werpowers/nekoweb-sitebox-preview)
3.  nekoweb deploy from github:  [https://github.com/mp-pinheiro/nekoweb-deploy](https://github.com/mp-pinheiro/nekoweb-deploy)
4.  cool search engine for nekoweb:  [https://search.nekoweb.org/](https://search.nekoweb.org/)
5.  [https://ourheroisasandwich.nekoweb.org/contents/box-generator](https://ourheroisasandwich.nekoweb.org/contents/box-generator)  (Now style the site-box + the RSS feed post box with this)

## **Social:**

-   [NekoCafe](https://social.nekoweb.org/)  - a  [status.cafe](http://status.cafe/)  clone for Nekowebbers.  [Here's the widget!](https://social.nekoweb.org/status-widget/)
-   [NekoForum](https://nekoforum.org/)  - a forum like the good 'ol days.
-   [Districts](https://districts.nekoweb.org/)  - place that sorts Nekoweb sites into various categories. If you'd like your site to be listed,  [follow these instructions](https://districts.nekoweb.org/request.html).
-   [Nekolink](https://rubybulbs.net/nekolink.html)  - an ad system similar to Navlink, exclusively for nekowebbers. Follow the instructions on the homepage to join!
-   [Nekowebring](https://webring.nekoweb.org/)  - a webring exclusively for nekowebbers. If you'd like to join,  [follow these instructions](https://webring.nekoweb.org/joining/).

## **Just For Fun**

-   [Custom Themes for Nekoweb](https://userstyles.world/search?q=nekoweb&category=&sort=newest)  - using the Stylus extension, you can customize how Nekoweb's main page and dashboard look for you.
    
    -   [https://userstyles.world/style/23293/nekoweb-editor-custom-theme](https://userstyles.world/style/23293/nekoweb-editor-custom-theme)

# Nekoweb now has SSI (Server-Side Includes) support!
You can use SSI to include html within other html files, create reusable layouts, render markdown files, create dynamic blogs, galleries and more without having to use static site generators!

For example include this in your HTML file to import other HTML file:
```html
<!--# include file="./header.html" -->
```

Or create a `/layout.html`:
```html
<html>
<head>
    <title>My Site</title>
</head>
<body>
    <h1>My Website</h1>
    <!--# block name="content" --><!--# endblock -->
    <footer>Copyright 2024</footer>
</body>
</html>
```
And then use that layout in other html files:
```html
<!--# layout file="/layout.html" -->
<!--# block name="content" -->
    <h2>About Me</h2>
    <p>This is my about page.</p>
<!--# endblock -->
```

There's also directives to render Markdown, listing files, and more. You can now dynamically create blog listings, blog pages, gallery pages, and more. We also added a special file called `_catchall.html`  that allows to catch all requests in folder that didn't match any file. This is so you can dynamically create pages like `https://example.nekoweb.org/blog/my-cool-post` that would render `my-cool-post.md` using `render` directive.

`include`, `layout` and `block` directives are available to everyone for free! Only `render`, `list` and `error` ones require Neko tier.

Learn more here: https://nekoweb.org/ssi
