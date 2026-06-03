---
title: ASCII Gallery
description: A responsive grid gallery for displaying ASCII art of varying sizes
---

<style>
  .ascii-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    padding: 2rem 0;
    margin: 2rem 0;
  }

  .ascii-item {
    background: var(--theme-surface-alt, #f9f9f9);
    border: 1px solid var(--theme-border, #e0e0e0);
    border-radius: 8px;
    padding: 1.5rem;
    overflow-x: auto;
    transition: all 0.3s ease;
    position: relative;
  }

  .ascii-item:hover {
    border-color: var(--theme-accent, #0084ff);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .ascii-item pre {
    margin: 0;
    font-family: 'Courier New', monospace;
    font-size: 0.85rem;
    line-height: 1.2;
    color: var(--theme-text, #333);
    white-space: pre;
    overflow-x: auto;
  }

  /* Size variations */
  .ascii-item.small {
    grid-column: span 1;
  }

  .ascii-item.medium {
    grid-column: span 1;
  }

  .ascii-item.large {
    grid-column: span 2;
  }

  .ascii-item.xlarge {
    grid-column: span 2;
  }

  /* Responsive breakpoints */
  @media (max-width: 768px) {
    .ascii-gallery {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }

    .ascii-item.large,
    .ascii-item.xlarge {
      grid-column: span 1;
    }

    .ascii-item pre {
      font-size: 0.75rem;
    }
  }

  .ascii-title {
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0 0 0.75rem 0;
    color: var(--theme-text-secondary, #666);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .ascii-description {
    font-size: 0.8rem;
    color: var(--theme-text-tertiary, #999);
    margin: 0.75rem 0 0 0;
  }
</style>

# ASCII Art Gallery

A responsive gallery for showcasing ASCII art and text-based designs. Mix and match sizes to create interesting compositions.

<div class="ascii-gallery">

  <div class="ascii-item small">
    <div class="ascii-title">Tiny Smile</div>
    <pre>^_^</pre>
  </div>

  <div class="ascii-item small">
    <div class="ascii-title">Shocked</div>
    <pre>o_o</pre>
  </div>

  <div class="ascii-item medium">
    <div class="ascii-title">Small Triangle</div>
    <pre>  /\
 /  \
/____\</pre>
  </div>

  <div class="ascii-item large">
    <div class="ascii-title">Large Wave</div>
    <pre>     ~  ~  ~
  /  \/  \/
 /         \
</__________\ </pre>
    <div class="ascii-description">Ocean vibes</div>
  </div>

  <div class="ascii-item medium">
    <div class="ascii-title">Simple House</div>
    <pre>    /\
   /  \
  /____\
  |    |
  |    |
  |____|</pre>
  </div>

  <div class="ascii-item small">
    <div class="ascii-title">Star</div>
    <pre>   *
  * *
 * * *</pre>
  </div>

  <div class="ascii-item xlarge">
    <div class="ascii-title">Large Tree</div>
    <pre>       *
      ***
     *****
    *******
   *********
  ***********
      |||
      |||
      |||</pre>
    <div class="ascii-description">A majestic tree</div>
  </div>

  <div class="ascii-item small">
    <div class="ascii-title">Heart</div>
    <pre> <3</pre>
  </div>

  <div class="ascii-item medium">
    <div class="ascii-title">Mountain</div>
    <pre>    /\
   /  \
  /    \
 /______\</pre>
  </div>

</div>

---

## How to Use This Template

### Add Your ASCII Art

Replace the placeholder ASCII art with your own. Just add new `ascii-item` divs:

```html
<div class="ascii-item [size]">
  <div class="ascii-title">Your Title</div>
  <pre>
    [Your ASCII art here]
  </pre>
  <div class="ascii-description">Optional description</div>
</div>
```

### Size Classes

- `small` - Single column width
- `medium` - Single column width (default)
- `large` - Double column width (spans 2 columns on desktop)
- `xlarge` - Double column width (spans 2 columns on desktop)

### Tips

1. **Keep monospace in mind**: ASCII art looks best in monospace fonts. The template uses `Courier New`.
2. **Whitespace matters**: Use `<pre>` tags to preserve formatting exactly as intended.
3. **Responsive design**: On mobile, large and xlarge items automatically revert to single column to save space.
4. **Dark mode**: The gallery respects your Quartz theme colors via CSS variables.

### Example: Your Own ASCII

```html
<div class="ascii-item large">
  <div class="ascii-title">My Masterpiece</div>
  <pre>
    ___________
   /   hello!  \
   |  there    |
   \_________/
  </pre>
</div>
```

---

## Customization

If you want to tweak the styling, edit the CSS variables at the top or modify these properties:

- `grid-template-columns`: Change the grid layout (currently 300px minimum per item)
- `gap`: Adjust spacing between items
- `font-family` in `pre`: Use a different monospace font
- `--theme-*` variables: Controlled by your Quartz theme

Enjoy your gallery! 🎨
