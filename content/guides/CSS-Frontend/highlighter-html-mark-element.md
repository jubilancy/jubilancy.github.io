

```html
mark {
  background: linear-gradient(to bottom, transparent 50%, #fde047 50%);
  border-radius: 4px;
  padding: 0 4px;
}
<p>You can use the <mark>mark tag</mark> to highlight text.</p>

<small><i><red>”text”</red></i></small>
<mark>hi</mark>

<mark style="background: #FACFBBA6;">hi</mark>

```

```md

# ==test
## ==test
### ==test
#### ==test
##### ==test
###### ==test
```



### TL;DR Summary

* The `<mark>` element represents text which is marked or highlighted for reference or notation purposes.
* Below are snippets covering standard usage, semantic styling, and dynamic CSS implementation.

---

### HTML Snippets

* **Standard Usage (Default Browser Styling):**
```html
<p>This is a standard <mark>highlighted</mark> piece of text.</p>

```


* **Custom Color (CSS-Injected):**
```html
<style>
  .custom-mark {
    background-color: #ffeb3b; /* Custom yellow */
    color: #000;
    padding: 0 4px;
  }
</style>
<p>Using a <mark class="custom-mark">styled highlight</mark> for better visibility.</p>

```


* **Rounded/Border Radius Highlight:**
```html
<style>
  .rounded-mark {
    background-color: rgba(255, 152, 0, 0.3);
    border-radius: 5px;
    padding: 2px 5px;
  }
</style>
<p>Highlighting with <mark class="rounded-mark">rounded corners</mark> for a modern look.</p>

```


* **Gradient Highlight:**
```html
<style>
  .gradient-mark {
    background: linear-gradient(to right, #ff9a9e, #fad0c4);
    padding: 0 4px;
  }
</style>
<p>Adding a <mark class="gradient-mark">gradient effect</mark> to your text.</p>

```


* **Highlight with Underline/Emphasis:**
```html
<style>
  .underline-mark {
    background-color: #c8e6c9;
    text-decoration: underline wavy #4caf50;
    padding: 0 2px;
  }
</style>
<p>A <mark class="underline-mark">styled underline highlight</mark> for emphasis.</p>

```



---

### Implementation Notes

* **Accessibility:** Screen readers often announce the content of a `<mark>` element as "highlighted." Use it only for highlighting relevant content, not for stylistic emphasis (use `<em>` or `<strong>` for that).
* **CSS Selectors:** You can target all marks on a site globally using the `mark` selector in your CSS file:
```css
mark {
  background-color: #f7f7f7;
  color: #333;
}

```