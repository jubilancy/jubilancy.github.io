---
tags:
  - clippings
  - guide
---
Learn how to modify aspects of the Obsidian application's appearance without needing to [build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

If you're looking for guidance on handling CSS for [Obsidian Publish](https://help.obsidian.md/publish), be sure to review [Customize your site](https://help.obsidian.md/publish/customize).

CSS is a language that controls how HTML looks. By adding CSS snippets, you can change parts of the Obsidian user interface, like the size and color of headings. Obsidian has [CSS variables](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) that help you customize the interface easily.

Obsidian looks for CSS snippets inside the vault's [configuration folder](https://help.obsidian.md/configuration-folder).

## Adding a snippet

To add a CSS snippet on **Desktop**, follow these steps:

1. Open **[Settings](https://help.obsidian.md/settings)** ( ).
2. Under **Appearance → CSS snippets**, select **Open snippets folder** ( ).
3. In the snippets folder, create a CSS file that contains your snippet.
4. In Obsidian, under **Appearance → CSS snippets**, select **Reload snippets** ( ) to see the snippet in the list.
5. Enable snippet by clicking the toggle.

To add a CSS snippet on **Mobile/Tablet**, you can follow these steps:

1. Open a file manager and find your vault. You can check the vault’s location in *Manage vaults…* by tapping your vault and looking at the path.
2. Open the [Configuration folder](https://help.obsidian.md/configuration-folder) and create a folder called `snippets` if it doesn’t exist.
3. Add your CSS snippet to this folder.
4. Open Obsidian's **[Settings](https://help.obsidian.md/settings)** ( ).
5. Select **Appearance** on the left.
6. Scroll down to the **CSS snippets** section.
7. Tap **Reload snippets** () to refresh the list.
8. Tap the toggle to enable the snippet.

Alternately, you can

- [Sync](https://help.obsidian.md/sync-notes) any changes with your syncing service.
- Use a community plugin to create a snippet from within Obsidian.

Once enabled, Obsidian will automatically detect changes to CSS snippets and apply them when you save the file.

You don’t need to restart Obsidian for changes to take effect. However, you might need to use the [Command palette](https://help.obsidian.md/plugins/command-palette) command to Reload Obsidian without saving to see changes in the current theme or note.

## Writing CSS for Obsidian

Obsidian offers several methods that make writing CSS easier and more powerful.

It has a host of [CSS variables](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) to easily modify parts of Obsidian and a built-in [property type](https://help.obsidian.md/properties#Property%20types) to change the appearance of one or several notes.

Variables

Create a file called `headers.css` with the following content to change the colors of the six [heading levels](https://help.obsidian.md/syntax#Headings) to a rainbow:

```
body {
  --h1-color: red;
  --h2-color: orange;
  --h3-color: yellow;
  --h4-color: green;
  --h5-color: blue;
  --h6-color: pink;
}
```

CSS classes

Assign the name of a custom CSS class (or a list of CSS classes) to a predefined [property](https://help.obsidian.md/properties) `cssclasses` to make one or more notes look different from others.

**CSS**:

```
.red-border img {
   border-color: #ff0000;
}
```

**YAML/Properties**:

```yaml
cssclasses:
 - red-border
```

In every note that contains the value `red-border` in the `cssclasses` property, images are displayed with a red border.

To ensure that the CSS file is valid and formatted correctly, we advise validating it with a tool like [CSS Validation Service](https://jigsaw.w3.org/css-validator/), as invalid CSS will not work.

## Learn more

- If you're new to CSS, check out [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) by Mozilla.
- For more information about styling Obsidian, see:
	- [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
	- [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
	- [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
	- [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)