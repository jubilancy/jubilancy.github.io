---
tags:
  - guides
  - javascript
---
Since you're building out **tools.eliana.lol**, you likely want "utility" libraries that solve a specific problem entirely in the browser. These allow you to create powerful tools that don't need a server to process data, keeping your static site fast and private.
Here are some awesome libraries that fit your "digital garden" and "tool-making" vibe:
### 1. Data & Text Processing
- **[Papa Parse](https://www.papaparse.com/):** The best in-browser CSV parser. You can build a tool to convert CSV to JSON, or a viewer that lets people "upload" (client-side only) a file to see a pretty table.
- **[Lunr.js](https://lunrjs.com/):** A bit like Solr or Elasticsearch but for the browser. It allows you to add full-text search to your digital garden without a database.
- **[Diff2Html](https://diff2html.xyz/):** Takes a text diff and turns it into a beautiful, side-by-side or line-by-line comparison view. Perfect for a "Diff Checker" tool.
### 2. Visualization & Diagrams
- **[Mermaid.js](https://mermaid.js.org/):** Renders Markdown-like text into diagrams (flowcharts, sequence diagrams, Gantt charts). You could make a live editor where you type text on the left and see a diagram on the right.
- **[Rough.js](https://roughjs.com/):** Allows you to draw shapes that look like they were sketched by hand. It’s great for creating that "lo-fi/hand-drawn" aesthetic for charts or UI elements.
- **[Chart.js](https://www.chartjs.org/):** Extremely simple and lightweight for making responsive charts.
### 3. File & Media Manipulation
- **[JSZip](https://stuk.github.io/jszip/):** Create, read, and edit `.zip` files directly in the browser. You could make a tool that bundles a bunch of SVG icons from your "shoebox" into a single download.
- **[QRCode.js](https://davidshimjs.github.io/qrcodejs/):** A tiny library to generate QR codes on the fly.
- **[Tesseract.js](https://tesseract.projectnaptha.com/):** Pure JavaScript OCR (Optical Character Recognition). It’s heavy, but it allows your website to "read" text from images without sending the image to a server.
### 4. Interactive UI & Utility
- **[Alpine.js](https://alpinejs.dev/):** If you find Vanilla JS too verbose for your tool interfaces but don't want a full Astro/React setup, Alpine is perfect. It’s like "Tailwind for JavaScript"—you write the logic directly in your HTML attributes.
- **[SortableJS](https://sortablejs.github.io/Sortable/):** Makes any list draggable and reorderable. Great for "To-Do" or "Priority" list tools.
- **[Canvas-confetti](https://www.npmjs.com/package/canvas-confetti):** A tiny, high-performance confetti blast. Sometimes you just need a "Success" button that feels good!
### 5. Math & Logic
- **[Math.js](https://mathjs.org/):** An extensive math library that handles complex numbers, units, and matrices.
- **[Day.js](https://day.js.org/):** A 2KB alternative to Moment.js. Essential if you’re building any tool involving date calculations or countdowns.
---
**Pro-Tip for your Static Tools:**
For almost all of these, you can find a **UMD** build on [Unpkg](https://unpkg.com/) or [jsDelivr](https://www.jsdelivr.com/). This means you can stick to your "Self-contained HTML" workflow by just adding one `<script>` tag at the top of your file.
Which of these sounds most useful for the next tool you're planning?
