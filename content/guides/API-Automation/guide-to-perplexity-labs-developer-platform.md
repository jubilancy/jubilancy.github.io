---
tags:
  - docs-eliana-lol-content
---
# Guide to Perplexity Labs Developer Platform

```html
<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>
```

# Guide to Perplexity Labs Developer Platform

**Perplexity Labs** is a project studio for creating multi-step workflows, collaborating, and generating assets (reports, spreadsheets, dashboards, mini web apps) with deep web browsing and code execution. It's available to Pro subscribers, accessible from the main Perplexity AI interface.

### Getting Started

* **Access Labs**: From perplexity.ai, select the “Labs” mode.
* **Pro required**: Labs is available for Perplexity Pro users.
* **Templates**: Jumpstart projects using ready-made templates for research, overviews, and analytics; you can customize and reuse these.
* **Assets Tab**: Download or reuse generated files (images, spreadsheets, code) directly.

### What You Can Build

* Automated research reports
* Interactive dashboards or web apps
* Code that scrapes, processes, and visualizes data
* Content exports in HTML, Markdown, CSV, etc.

Let me know your project area (e.g., automation, dashboard, report) and I’ll tailor the guide further.

# Building a Web Content Extraction Tool with Perplexity's API

You can use **Perplexity's API** to automate extraction of web page content and export it as Markdown, HTML, or other formats:

### Steps

1. **Sign Up & Get API Key**:
   * Register at perplexity.ai
   * Go to API dashboard and generate a key.
2. **Choose a Language**: Python is widely supported via OpenAI-compatible clients.
3. **API Call Setup**:
   * Endpoint: `https://api.perplexity.ai/chat/completions`
   * Use a prompt like: "Extract the main web content and output as Markdown."
   * Parse the response for content extraction.
4. **Conversion**:
   * For deep extraction, prompt for "Output in HTML and Markdown formats."
   * Optionally use third-party libraries like BeautifulSoup (Python) for HTML or Turndown (JS) for Markdown post-processing.

#### Example (Python)

```python
from openai import OpenAI
client = OpenAI(api_key="YOUR_API_KEY", base_url="https://api.perplexity.ai")
response = client.chat.completions.create(
  model="sonar-pro",
  messages=[
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Extract the content from https://example.com and format as Markdown and HTML."}
  ]
)
print(response.choices.message.content)
```

**Tips**:

* For large or multi-page sites, use crawl/extract APIs (like Firecrawl or API League).
* For complex page structures, post-process Perplexity's API response with custom Markdown/HTML scripts.

Would you like walkthroughs for more advanced extraction logic?

# Possibilities and Ideas with Perplexity Labs API

You can build a variety of custom tools:

* **Research Automator**: Script an agent to perform market/competitive research and output summaries.
* **Markdown/HTML Exporter**: Automatic conversion of web content into Markdown and/or HTML files.
* **Dashboard Builder**: Generate and visualize key data (tables, charts, KPIs) from various sources.
* **Text Summarizer**: Extract main ideas from long articles and provide concise summaries.
* **Bulk Content Scraper**: Crawl domains and export all articles/pages to a standardized format.
* **AI-Powered Search Agent**: Aggregate search results and organize citations/assets.
* **Workflow Integrator**: Connect Labs outputs to other APIs or storage (Google Drive, Notion, etc.).
* **Mini-App Generator**: Build and deploy simple interactive web apps (e.g., calculators, checklists) from queries.

Need a deep dive into any of these ideas?

# Guide: Injecting Header and Footer into HTML Files via JavaScript (for Nekoweb)

Since Nekoweb doesn't support server-side PHP includes, you can use JavaScript to dynamically inject headers and footers into your HTML pages.

### Step-by-Step

1. **Create header and footer files**:
   * `header.html` – contains your site’s header code.
   * `footer.html` – contains your site’s footer code.
2. **Add placeholder&#x20;****`<div>`****s to your main HTML files:**

```html
<div id="header"></div>
<!-- main content -->
<div id="footer"></div>
```

1. **Inject using JavaScript:**

```html
<script>
function loadInclude(id, url) {
  fetch(url)
    .then(resp => resp.text())
    .then(html => document.getElementById(id).innerHTML = html);
}
loadInclude("header", "header.html");
loadInclude("footer", "footer.html");
</script>
```

**Place this script near the end of&#x20;****`<body>`**. You can reuse the same header/footer on all your html pages. For best results, keep the header/footer code as isolated HTML snippets.

If you'd like a more modular, robust pattern, let me know your site’s setup!

# Cheatsheet: Perplexity API Quickstart for Web Content Extraction & Export

1. **Register & Get API Key**
   * Create account at \[perplexity.ai]
   * Go to API settings → Generate and store your key.
2. **Set Up Client**
   * Python (OpenAI-compatible):

```python
from openai import OpenAI
client = OpenAI(api_key="YOUR_API_KEY", base_url="https://api.perplexity.ai")
```

```
- Or use cURL directly (see later steps).
```

3\. **Make API Request**
\- Endpoint: `https://api.perplexity.ai/chat/completions`
\- Example prompt: "Extract the main content from \[URL] and format as Markdown."

```shellscript
curl -X POST https://api.perplexity.ai/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sonar-medium-online",
    "messages": [{"role":"system","content":"Be precise and concise."},
                 {"role":"user","content":"Extract and convert https://example.com to markdown."}],
    "max_tokens": 500,
    "temperature": 0.7
  }'
```

1. **Parse and Save Output**
   * Save the response to `.md` or `.html` file as needed.

**Best Practices**:

* Never expose API keys client-side (use secure server storage).
* Optimize prompts for clarity (specify "main content only" or "full HTML/Markdown").
* Store results systematically (e.g., organize by URL or timestamp).

Pin this for reference, and let me know which part you'd like to go deeper on.
\<span style="display:none">\</span>

```html
<div align="center">⁂</div>
```

###### Sources

https://www.datacamp.com/tutorial/perplexity-labs

https://www.perplexity.ai/help-center/en/articles/11144811-perplexity-labs

https://sidsaladi.substack.com/p/perplexity-101-ultimate-guide-to

https://www.perplexity.ai/hub/blog/introducing-perplexity-labs

https://departmentofproduct.substack.com/p/hands-on-with-perplexity-labs-how

https://zuplo.com/learning-center/perplexity-api

https://apidog.com/blog/perplexity-ai-api/

https://docs.perplexity.ai/getting-started/quickstart

https://apileague.com/apis/extract-web-content-api/

https://github.com/firecrawl/firecrawl

https://stackoverflow.com/questions/18712338/make-header-and-footer-files-to-be-included-in-multiple-html-pages

https://docs.perplexity.ai/getting-started/overview

https://www.tomarkdown.org/url-to-markdown

https://bycrawford.com/blog/how-to-inject-code-into-your-squarespace-website-header-and-footer

https://kinsta.com/blog/add-code-wordpress-header-footer/

https://www.gamsgo.com/blog/perplexity-labs-guide-for-fast-project-creation

https://chromewebstore.google.com/detail/webpage-to-markdown/ajeinonckioeekcfanjndliandidilid?hl=en

https://www.reddit.com/r/perplexity\_ai/comments/1kythej/perplexity\_labs\_use\_cases/

https://stackoverflow.com/questions/4221870/how-to-put-my-javascript-in-the-footer

https://www.youtube.com/watch?v=J9NAAj-qODI


<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Guide to Perplexity Labs Developer Platform

**Perplexity Labs** is a project studio for creating multi-step workflows, collaborating, and generating assets (reports, spreadsheets, dashboards, mini web apps) with deep web browsing and code execution. It's available to Pro subscribers, accessible from the main Perplexity AI interface.[^1][^2][^3][^4]

### Getting Started

- **Access Labs**: From perplexity.ai, select the “Labs” mode.[^4]
- **Pro required**: Labs is available for Perplexity Pro users.[^2][^4]
- **Templates**: Jumpstart projects using ready-made templates for research, overviews, and analytics; you can customize and reuse these.[^3]
- **Assets Tab**: Download or reuse generated files (images, spreadsheets, code) directly.[^5][^4]


### What You Can Build

- Automated research reports
- Interactive dashboards or web apps
- Code that scrapes, processes, and visualizes data
- Content exports in HTML, Markdown, CSV, etc.

Let me know your project area (e.g., automation, dashboard, report) and I’ll tailor the guide further.

# Building a Web Content Extraction Tool with Perplexity's API

You can use **Perplexity's API** to automate extraction of web page content and export it as Markdown, HTML, or other formats:

### Steps

1. **Sign Up \& Get API Key**:
    - Register at perplexity.ai
    - Go to API dashboard and generate a key.[^6][^7][^8]
2. **Choose a Language**: Python is widely supported via OpenAI-compatible clients.[^7][^8][^6]
3. **API Call Setup**:
    - Endpoint: `https://api.perplexity.ai/chat/completions`
    - Use a prompt like: "Extract the main web content and output as Markdown."
    - Parse the response for content extraction.
4. **Conversion**:
    - For deep extraction, prompt for "Output in HTML and Markdown formats."
    - Optionally use third-party libraries like BeautifulSoup (Python) for HTML or Turndown (JS) for Markdown post-processing.

#### Example (Python)

```python
from openai import OpenAI
client = OpenAI(api_key="YOUR_API_KEY", base_url="https://api.perplexity.ai")
response = client.chat.completions.create(
  model="sonar-pro",
  messages=[
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Extract the content from https://example.com and format as Markdown and HTML."}
  ]
)
print(response.choices.message.content)
```

**Tips**:

- For large or multi-page sites, use crawl/extract APIs (like Firecrawl or API League).[^9][^10]
- For complex page structures, post-process Perplexity's API response with custom Markdown/HTML scripts.

Would you like walkthroughs for more advanced extraction logic?

# Possibilities and Ideas with Perplexity Labs API

You can build a variety of custom tools:

- **Research Automator**: Script an agent to perform market/competitive research and output summaries.
- **Markdown/HTML Exporter**: Automatic conversion of web content into Markdown and/or HTML files.
- **Dashboard Builder**: Generate and visualize key data (tables, charts, KPIs) from various sources.
- **Text Summarizer**: Extract main ideas from long articles and provide concise summaries.
- **Bulk Content Scraper**: Crawl domains and export all articles/pages to a standardized format.
- **AI-Powered Search Agent**: Aggregate search results and organize citations/assets.
- **Workflow Integrator**: Connect Labs outputs to other APIs or storage (Google Drive, Notion, etc.).
- **Mini-App Generator**: Build and deploy simple interactive web apps (e.g., calculators, checklists) from queries.

Need a deep dive into any of these ideas?

# Guide: Injecting Header and Footer into HTML Files via JavaScript (for Nekoweb)

Since Nekoweb doesn't support server-side PHP includes, you can use JavaScript to dynamically inject headers and footers into your HTML pages.[^11]

### Step-by-Step

1. **Create header and footer files**:
    - `header.html` – contains your site’s header code.
    - `footer.html` – contains your site’s footer code.
2. **Add placeholder `<div>`s to your main HTML files:**

```html
<div id="header"></div>
<!-- main content -->
<div id="footer"></div>
```

3. **Inject using JavaScript:**

```html
<script>
function loadInclude(id, url) {
  fetch(url)
    .then(resp => resp.text())
    .then(html => document.getElementById(id).innerHTML = html);
}
loadInclude("header", "header.html");
loadInclude("footer", "footer.html");
</script>
```


**Place this script near the end of `<body>`**. You can reuse the same header/footer on all your html pages. For best results, keep the header/footer code as isolated HTML snippets.

If you'd like a more modular, robust pattern, let me know your site’s setup!

# Cheatsheet: Perplexity API Quickstart for Web Content Extraction \& Export

1. **Register \& Get API Key**
    - Create account at [perplexity.ai]
    - Go to API settings → Generate and store your key.[^6][^7][^8]
2. **Set Up Client**
    - Python (OpenAI-compatible):

```python
from openai import OpenAI
client = OpenAI(api_key="YOUR_API_KEY", base_url="https://api.perplexity.ai")
```

    - Or use cURL directly (see later steps).
3. **Make API Request**
    - Endpoint: `https://api.perplexity.ai/chat/completions`
    - Example prompt: "Extract the main content from [URL] and format as Markdown."

```bash
curl -X POST https://api.perplexity.ai/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sonar-medium-online",
    "messages": [{"role":"system","content":"Be precise and concise."},
                 {"role":"user","content":"Extract and convert https://example.com to markdown."}],
    "max_tokens": 500,
    "temperature": 0.7
  }'
```

4. **Parse and Save Output**
    - Save the response to `.md` or `.html` file as needed.

**Best Practices**:

- Never expose API keys client-side (use secure server storage).
- Optimize prompts for clarity (specify "main content only" or "full HTML/Markdown").
- Store results systematically (e.g., organize by URL or timestamp).

Pin this for reference, and let me know which part you'd like to go deeper on.
<span style="display:none">[^12][^13][^14][^15][^16][^17][^18][^19][^20]</span>

<div align="center">⁂</div>

[^1]: https://www.datacamp.com/tutorial/perplexity-labs

[^2]: https://www.perplexity.ai/help-center/en/articles/11144811-perplexity-labs

[^3]: https://sidsaladi.substack.com/p/perplexity-101-ultimate-guide-to

[^4]: https://www.perplexity.ai/hub/blog/introducing-perplexity-labs

[^5]: https://departmentofproduct.substack.com/p/hands-on-with-perplexity-labs-how

[^6]: https://zuplo.com/learning-center/perplexity-api

[^7]: https://apidog.com/blog/perplexity-ai-api/

[^8]: https://docs.perplexity.ai/getting-started/quickstart

[^9]: https://apileague.com/apis/extract-web-content-api/

[^10]: https://github.com/firecrawl/firecrawl

[^11]: https://stackoverflow.com/questions/18712338/make-header-and-footer-files-to-be-included-in-multiple-html-pages

[^12]: https://docs.perplexity.ai/getting-started/overview

[^13]: https://www.tomarkdown.org/url-to-markdown

[^14]: https://bycrawford.com/blog/how-to-inject-code-into-your-squarespace-website-header-and-footer

[^15]: https://kinsta.com/blog/add-code-wordpress-header-footer/

[^16]: https://www.gamsgo.com/blog/perplexity-labs-guide-for-fast-project-creation

[^17]: https://chromewebstore.google.com/detail/webpage-to-markdown/ajeinonckioeekcfanjndliandidilid?hl=en

[^18]: https://www.reddit.com/r/perplexity_ai/comments/1kythej/perplexity_labs_use_cases/

[^19]: https://stackoverflow.com/questions/4221870/how-to-put-my-javascript-in-the-footer

[^20]: https://www.youtube.com/watch?v=J9NAAj-qODI
