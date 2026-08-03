# Awesome Serverless-Self-Hostable Web Apps

Curated list of open source web apps, tools, examples, and starter projects that fit the constraint of being deployable on platforms such as Vercel, Netlify, GitHub Pages or GitHub Actions pipelines, and Cloudflare Pages or Workers.[^6_1][^6_2][^6_3][^6_4]

This document intentionally excludes traditional server-hosted apps that require a persistent PHP, Python, Ruby, Java, or database server unless they also have a real static-export or Worker/serverless-friendly deployment model.[^6_2][^6_3][^6_5][^6_6]

## Table of Contents

- [Inclusion Rules](#inclusion-rules)
- [Link-in-Bio and Bookmark Tools](#link-in-bio-and-bookmark-tools)
- [Documentation and Knowledge Sites](#documentation-and-knowledge-sites)
- [Dashboards and Homepages](#dashboards-and-homepages)
- [Status Pages and Monitoring](#status-pages-and-monitoring)
- [Analytics and Counters](#analytics-and-counters)
- [Comments and Community Widgets](#comments-and-community-widgets)
- [API, OAuth, and Auth Examples](#api-oauth-and-auth-examples)
- [Forms, Functions, and Edge Apps](#forms-functions-and-edge-apps)
- [Readers, Feed, and Content Utilities](#readers-feed-and-content-utilities)
- [Search, Data, and JSON Tools](#search-data-and-json-tools)
- [Media, File, and Paste Tools](#media-file-and-paste-tools)
- [Commerce and Business Frontends](#commerce-and-business-frontends)
- [Developer Utilities](#developer-utilities)
- [Cloudflare Workers and Pages Examples](#cloudflare-workers-and-pages-examples)
- [Netlify Examples](#netlify-examples)
- [Vercel Examples](#vercel-examples)
- [GitHub Actions and Pages Projects](#github-actions-and-pages-projects)
- [Starter Templates and Patterns](#starter-templates-and-patterns)
- [How to Extend This List](#how-to-extend-this-list)


## Inclusion Rules

Projects in this list are included because they are static sites, client-rendered apps, edge apps, serverless examples, or Git-based publishing patterns that are documented for deployment on Pages/Workers-style platforms.[^6_3][^6_4][^6_5][^6_1][^6_2]

Good fits usually have one of these properties:[^6_4][^6_5][^6_2][^6_3]

- Static HTML/CSS/JS output.
- Client-side app with optional serverless functions.
- Cloudflare Worker or Pages Functions runtime.
- Netlify Functions or On-demand Builders usage.
- Vercel example app or starter deployable through Vercel.
- GitHub Pages site, often built and published with GitHub Actions.


## Link-in-Bio and Bookmark Tools

- **LinkStack** — open source link-in-bio page generator that can be adapted to static hosting when built as a front-end site.[^6_7]
- **linkyee** — open source Linktree-style static page generator suitable for GitHub Pages and other static hosts.[^6_8]
- **Astral** — browser-based GitHub stars organizer with a web UI that can be fronted statically with API access.[^6_9]
- **WebCrate** — link collection interface with a front-end heavy design suitable for static-first adaptation.[^6_10]
- **Gitfolio** — portfolio and project listing app generated from GitHub data as a static site.[^6_8]
- **Homer** — simple application dashboard SPA that is commonly hosted as static files.[^6_11]
- **Dashy** — configurable dashboard and links homepage with a front-end-heavy deployment model.[^6_11]
- **Flame** — start page and bookmark dashboard with a web UI that can be statically served if configured appropriately.[^6_11]
- **Heimdall-inspired static dashboards** — static dashboard clones and templates from self-hosted link dashboards fit Pages-style deployment when no server state is required.[^6_11]
- **Personal startpage templates** — many static dashboard repos in curated static-web-app lists are deployable on Pages platforms.[^6_12][^6_13]


## Documentation and Knowledge Sites

- **Docsify** — client-side docs site that renders Markdown in the browser, making it a strong fit for static hosts.[^6_8]
- **Docusaurus** — documentation framework that builds static assets for Vercel, Netlify, GitHub Pages, and Cloudflare Pages.[^6_4][^6_8]
- **MkDocs** — static documentation generator that outputs deployable HTML assets.[^6_8]
- **mdBook** — static “book” generator for documentation and manuals.[^6_8]
- **VitePress** — Vite-powered static documentation framework.[^6_8]
- **VuePress** — Vue-based static docs and content site generator.[^6_8]
- **Slate** — API documentation generator producing static output.[^6_8]
- **Flatdoc** — client-side Markdown-to-docs renderer suitable for static hosting.[^6_8]
- **GitBook-style open tooling** — Git-and-Markdown documentation sites generally fit Pages deployment when output is static.[^6_13][^6_8]
- **Quarto websites** — Quarto can generate static sites from Markdown, notebooks, and documents.[^6_8]


## Dashboards and Homepages

- **Homer** — static application dashboard for organizing self-hosted links and services.[^6_11]
- **Dashy** — feature-rich home dashboard with widgets and configurable cards.[^6_11]
- **Glance-style static dashboards** — front-end dashboards with API fetches can be deployed as static apps on Pages platforms.[^6_11]
- **Cloudflare static site demo** — example dashboard/site pattern deployable directly to Cloudflare Pages.[^6_1]
- **Cloudflare static site starter** — plain static app starter with NPM build and Pages deployment.[^6_14]
- **Localized static site on Workers** — static app pattern with edge request handling.[^6_15]
- **Static PWA dashboards** — PWAs from Netlify and Vercel example collections fit these hosts by design.[^6_7][^6_4]
- **Simple profile dashboards** — profile and team pages built as SPAs fit GitHub Pages or Pages hosts.[^6_13]
- **Admin-lite dashboards** — static admin panels with API integrations are common in Vercel/Netlify examples.[^6_4][^6_7]
- **JSON-powered status dashboards** — dashboards fed by JSON endpoints work well on static and edge platforms.[^6_16][^6_17]


## Status Pages and Monitoring

- **Upptime** — uptime monitor that uses GitHub Actions and GitHub Pages to publish a static status site.[^6_11]
- **cState** — static status page generator suitable for Pages and static deploy platforms.[^6_11]
- **Statusfy** — status page system with static-site output model.[^6_9]
- **GitHub Actions status site patterns** — repos that check endpoints on a schedule and publish JSON/HTML to Pages fit your constraints.[^6_3]
- **Workers-based status endpoints** — Cloudflare Worker examples can provide edge status APIs consumed by static pages.[^6_17]
- **Netlify function health pages** — serverless functions can back minimal monitoring UIs on Netlify.[^6_18][^6_2]
- **Vercel edge health dashboards** — Vercel examples include edge and function-backed app patterns suitable for simple monitoring sites.[^6_4]
- **Static incident log sites** — markdown-driven incident sites work on GitHub Pages and Cloudflare Pages.[^6_12][^6_13]
- **JSON uptime boards** — client-rendered uptime dashboards fetching JSON from Actions or Workers fit all four platforms.[^6_17][^6_3]
- **Synthetic check frontends** — front-end interfaces for uptime check results can be deployed statically while checks run in Actions or Workers.[^6_3][^6_17]


## Analytics and Counters

- **Counter** — simple web counter app from production-ready web app lists, useful as a lightweight embeddable app.[^6_9]
- **Ackee-style static dashboards** — front-end analytics dashboards can be adapted if the collection endpoint runs in serverless functions.[^6_7]
- **GoatCounter-style client counters** — lightweight trackers with minimal scripts fit static frontends; worker-based forks are the safest match for your constraints.[^6_16][^6_17]
- **Cloudflare Worker analytics snippets** — Workers examples include small edge scripts for logging and aggregation.[^6_17]
- **Pageview JSON dashboards** — static dashboards that read analytics JSON from KV, D1, or generated artifacts match Pages/Workers architecture.[^6_3][^6_17]
- **Netlify function counters** — examples of function-backed endpoints can power simple analytics or counters.[^6_2]
- **Vercel function counters** — Vercel example apps can expose API routes for lightweight counting and stats.[^6_4]
- **Static analytics report viewers** — HTML dashboards generated in CI and published to Pages fit GitHub Actions workflows.[^6_3]
- **Cloudflare static plus Worker logging** — Pages with Worker logic are supported by Cloudflare’s docs and examples.[^6_5][^6_3]
- **Privacy-focused script dashboards** — front-end analytics widgets that store aggregate data in serverless data stores fit edge platforms.[^6_17]


## Comments and Community Widgets

- **Cusdis-style embeddable comment widgets** — embeddable front ends with lightweight APIs are a good fit for edge/serverless deployment patterns.[^6_7][^6_4]
- **Static guestbook apps** — guestbooks backed by serverless functions are a common Netlify/Vercel pattern.[^6_2][^6_4]
- **Cloudflare Worker comment APIs** — Worker examples can support form submission and lightweight discussion widgets.[^6_17]
- **GitHub Issue-backed comment widgets** — front-end comments stored in GitHub issues fit static hosting plus GitHub API flows.[^6_19][^6_3]
- **Static reaction widgets** — emoji reaction widgets with function or Worker backends fit Pages platforms.[^6_2][^6_17]
- **Feedback boards with serverless backends** — SPA feedback tools fit Netlify and Vercel patterns.[^6_7][^6_4]
- **Simple poll widgets** — lightweight polling apps work as static front ends plus function endpoints.[^6_2][^6_4]
- **Form-based discussion boards** — edge/serverless CRUD APIs can back simple community widgets on Cloudflare Workers.[^6_17]
- **Client-rendered Q\&A boards** — static SPAs backed by APIs or GitHub data meet the hosting constraint.[^6_3][^6_4]
- **Static changelog comment sections** — changelog pages with serverless feedback forms are easy fits for Netlify or Vercel.[^6_2][^6_4]


## API, OAuth, and Auth Examples

- **GitHub OAuth for a static site using Cloudflare Workers** — Simon Willison’s pattern shows static site auth via Workers.[^6_19]
- **Cloudflare Workers OAuth patterns** — Workers examples support auth flows and request handling at the edge.[^6_17]
- **Vercel auth example apps** — Vercel examples include starter apps with auth-ready deployment models.[^6_4]
- **Netlify identity-integrated frontends** — Netlify example repos demonstrate static front ends paired with serverless auth features.[^6_7]
- **JWT edge middleware examples** — Workers and Vercel edge patterns support lightweight auth gates.[^6_4][^6_17]
- **Sessionless OAuth callbacks** — static frontends with callback handlers in Workers or functions fit your platforms.[^6_19][^6_2]
- **Access-token-in-browser tools** — browser apps that store tokens client-side are well aligned with static hosting.[^6_19]
- **API proxy Workers** — Worker-based API proxy projects let a static app safely call third-party APIs.[^6_16][^6_17]
- **Signed URL generators** — serverless endpoints for signed URLs fit Netlify/Vercel functions or Workers.[^6_2][^6_4]
- **Request inspection APIs** — edge/serverless examples for handling auth headers and sessions fit these hosts.[^6_4][^6_17]


## Forms, Functions, and Edge Apps

- **Netlify hello-world functions** — canonical starter showing a static site paired with serverless functions.[^6_2]
- **Netlify every-color** — dynamic page generation example using On-demand Builders on Netlify.[^6_18]
- **Cloudflare Workers examples** — official examples for forms, redirects, routing, caching, and APIs.[^6_17]
- **Cloudflare Pages static + functions patterns** — Git-integrated Pages projects can include edge logic.[^6_3]
- **Vercel starter apps** — Vercel’s example gallery includes deployable starter apps and patterns.[^6_4]
- **Form submission apps** — static forms with serverless processing fit all requested platforms except pure GitHub Pages, where Actions can supplement workflows.[^6_3][^6_2][^6_4]
- **Webhook receiver apps** — edge/serverless request handlers are natural fits for Workers and Vercel.[^6_17][^6_4]
- **Redirect managers** — edge logic for redirects and rewrites is supported in Workers and Netlify/Vercel configs.[^6_2][^6_4][^6_17]
- **URL preview generators** — static front ends backed by edge scraping or metadata APIs fit Workers and functions.[^6_17]
- **Serverless contact apps** — form endpoints with email notifications fit Netlify Functions or Vercel functions.[^6_2][^6_4]


## Readers, Feed, and Content Utilities

- **RSS-to-JSON frontends** — static readers backed by a Worker or function that normalizes feeds fit your platforms.[^6_2][^6_17]
- **Reading-list SPAs** — client-side saved reading lists with browser or KV storage fit static deployment.[^6_13][^6_17]
- **Markdown readers** — browser-based Markdown readers are purely static apps and fit all four platforms.[^6_12][^6_13]
- **EPUB/Web readers** — front-end reader apps that run in-browser work well on Pages hosts.[^6_13][^6_7]
- **JSON feed viewers** — static apps reading feed JSON from APIs or Workers fit this architecture.[^6_17]
- **Public bookmark viewers** — read-only bookmark pages generated in CI and published to Pages are a strong GitHub Actions fit.[^6_3]
- **Changelog readers** — markdown or JSON changelog viewers are simple static web apps.[^6_12][^6_13]
- **Release-note portals** — generated release-note sites fit GitHub Actions and Pages deployment.[^6_3]
- **Static newsletter archives** — content archives generated in CI are natural Pages projects.[^6_3]
- **Open graph preview readers** — client apps that render OG metadata via edge APIs fit Workers and Vercel.[^6_4][^6_17]


## Search, Data, and JSON Tools

- **Client-side search portals** — Lunr/mini-search static search UIs fit Pages deployment.[^6_12][^6_13]
- **JSON explorer apps** — browser-only JSON viewers are pure static web apps.[^6_13][^6_7]
- **CSV viewer SPAs** — client-side spreadsheet viewers fit GitHub Pages and other static hosts.[^6_13]
- **Regex playgrounds** — front-end-only tools work perfectly on Pages hosts.[^6_7][^6_4]
- **Base64 / JWT / diff tools** — browser utility apps are strong fits for all four platforms.[^6_7][^6_4]
- **OpenAPI viewer sites** — static docs and schema viewers fit Pages deployment.[^6_13][^6_8]
- **Search UIs backed by static JSON indexes** — generated indexes published with the app are ideal for GitHub Actions + Pages.[^6_3]
- **Cloudflare Worker search APIs** — Workers examples support lightweight query processing for static front ends.[^6_17]
- **Vercel API route data tools** — example apps with API routes can back data explorers and inspectors.[^6_4]
- **Netlify function data transformers** — functions can normalize JSON or CSV for static front ends.[^6_2]


## Media, File, and Paste Tools

- **Static image galleries** — gallery apps that build to static assets fit Pages platforms.[^6_12][^6_13]
- **Photo essay sites** — static media story apps are direct fits for Netlify, Vercel, GitHub Pages, and Cloudflare Pages.[^6_12][^6_8]
- **Audio showcase sites** — static media catalogs work well with edge-hosted assets.[^6_12]
- **Video landing hubs** — static front ends for embedded video libraries fit all requested platforms.[^6_13]
- **Paste viewers** — read-only paste front ends backed by JSON or GitHub storage fit Pages-style hosting.[^6_3]
- **Temporary upload demos** — serverless upload handlers work in Netlify/Vercel functions or Workers.[^6_4][^6_2][^6_17]
- **File metadata viewers** — browser-only file inspection tools are ideal static apps.[^6_7][^6_4]
- **Image optimization demos** — Vercel and Netlify example collections include image-focused app patterns.[^6_7][^6_4]
- **Asset proxy Workers** — Worker scripts can fetch and transform media or headers for static front ends.[^6_17]
- **Cloudflare asset-serving examples** — Workers can directly serve assets and custom logic together.[^6_5]


## Commerce and Business Frontends

- **Static storefront fronts** — Jamstack storefronts that call APIs are classic Netlify/Vercel deployment targets.[^6_7][^6_4]
- **Headless commerce demos** — front-end commerce starters in Vercel examples fit your platforms when paired with external APIs.[^6_4]
- **Pricing page generators** — static marketing and pricing sites fit all four requested hosts.[^6_13][^6_4]
- **Booking frontends** — static booking UIs with function-backed submissions fit serverless deployment.[^6_2][^6_4]
- **Portfolio business sites** — client-rendered business sites are strong fits for Pages hosts.[^6_12][^6_13]
- **Lead capture apps** — Netlify Forms or function-backed forms support lead-gen apps.[^6_7][^6_2]
- **SaaS landing pages with auth gates** — edge auth patterns make protected marketing/demo apps possible on Workers/Vercel.[^6_19][^6_4]
- **Product catalogs from JSON** — client-side product catalogs generated at build time work great on GitHub Pages.[^6_3]
- **Invoice viewers** — read-only invoice portals generated as static sites fit Pages deployment.[^6_3]
- **Directory sites** — directory/listing websites generated from YAML/JSON fit serverless-friendly hosting.[^6_12][^6_13]


## Developer Utilities

- **API playground front ends** — browser-based API clients fit static deployment.[^6_7][^6_4]
- **Request debugger UIs** — front-end request inspectors plus edge/serverless endpoints fit Workers and Vercel.[^6_4][^6_17]
- **Webhook testers** — serverless endpoints plus static UIs are ideal examples for these platforms.[^6_2][^6_17]
- **Token decoders** — JWT and encoding tools are pure client-side apps.[^6_7][^6_4]
- **Cron dashboards backed by Actions** — scheduled GitHub Actions can generate artifacts and static dashboards.[^6_3]
- **Release dashboards** — CI-generated release dashboards fit Pages nicely.[^6_3]
- **Env inspector demos** — serverless function examples commonly display runtime env and request data.[^6_2][^6_4]
- **Request header viewers** — Cloudflare Workers and Vercel examples readily support this pattern.[^6_17][^6_4]
- **Static changelog generators** — generated project changelogs work well on GitHub Pages.[^6_3]
- **Developer portal templates** — docs + API explorer + auth frontends from example galleries fit these hosts.[^6_4][^6_7]


## Cloudflare Workers and Pages Examples

- **Static HTML/JSON generator Worker** — explicitly highlighted in awesome Cloudflare collections.[^6_16]
- **Request rewriting Worker** — official Workers examples cover routing and request transforms.[^6_17]
- **Redirect Worker** — edge redirects are a standard Worker use case.[^6_17]
- **Cache API Worker** — Workers examples show cached responses for fast edge apps.[^6_17]
- **CORS proxy Worker** — a common Worker pattern for browser-facing apps.[^6_17]
- **Localization Worker** — sample static page with localization at the edge.[^6_15]
- **OAuth callback Worker** — static site auth with GitHub OAuth on Workers.[^6_19]
- **Asset-serving Worker** — Workers can host static assets directly with optional code.[^6_5]
- **Pages + GitHub integration project** — Cloudflare Pages automatically deploys from GitHub repos.[^6_3]
- **Cloudflare static-site starter repo** — GitHub repo showing the whole static Pages workflow.[^6_1]


## Netlify Examples

- **Hello World Functions** — baseline static site + function example from Netlify.[^6_2]
- **Every Color** — dynamic page generation with On-demand Builders.[^6_18]
- **Forms starter** — Netlify examples collection includes forms-oriented demos.[^6_7]
- **AI summary site** — example collection includes application-style deployable demos.[^6_7]
- **RAG app example** — app-style example in Netlify’s official examples collection.[^6_7]
- **Form analyzer example** — serverless processing pattern for submitted content.[^6_7]
- **Image transformation demos** — Netlify example collection includes media-processing patterns.[^6_7]
- **Functions boilerplates** — reusable serverless boilerplates for Netlify deployment.[^6_2][^6_7]
- **Static SPA starters** — Netlify examples include SPA deployment references.[^6_7]
- **Deploy-button-ready repos** — many Netlify examples are one-click deployable from GitHub.[^6_18][^6_2]


## Vercel Examples

- **Vercel starter apps** — official examples are designed to be deployed directly on Vercel.[^6_4]
- **Edge middleware examples** — Vercel examples include edge-ready request handling patterns.[^6_4]
- **API route examples** — Vercel examples include API-backed front ends.[^6_4]
- **Static export examples** — Vercel docs and examples support static app deployment models.[^6_4]
- **Auth-ready starters** — Vercel examples include auth and protected-route starters.[^6_4]
- **Image and OG examples** — common Vercel patterns include image and metadata generation apps.[^6_4]
- **CMS-connected frontends** — starter apps for headless content are common in the examples gallery.[^6_4]
- **E-commerce starters** — Vercel showcases commerce front ends suitable for serverless deployment.[^6_4]
- **Analytics and telemetry demos** — example apps include lightweight dashboard and stats patterns.[^6_4]
- **Deploy-from-GitHub workflows** — Vercel supports automated deployment from GitHub or via Actions.[^6_20][^6_4]


## GitHub Actions and Pages Projects

- **Upptime** — GitHub Actions checks and GitHub Pages publishing workflow.[^6_11]
- **Static documentation repos** — Pages sites generated in CI are first-class GitHub Actions use cases.[^6_3]
- **Release note sites** — actions can build and publish release notes to Pages.[^6_3]
- **Changelog sites** — markdown changelog portals fit Actions + Pages publishing.[^6_3]
- **JSON dashboard sites** — scheduled Actions can refresh data and publish dashboards.[^6_3]
- **Bookmark export sites** — Actions can build public bookmark pages from source files or APIs.[^6_3]
- **Portfolio deployment workflows** — static portfolios are standard Pages + Actions projects.[^6_3]
- **Directory and awesome-list sites** — generated index pages from YAML/JSON are a natural fit for Actions.[^6_3]
- **Search index generation sites** — build a Lunr index in Actions and publish to Pages.[^6_3]
- **Status mirrors** — Actions can fetch external service health and publish a static mirror site.[^6_3]


## Starter Templates and Patterns

- **Awesome List Site Generator** — tool for turning awesome-list content into a site.[^6_21]
- **Static web app examples collection** — Azure Static Web Apps resource list is useful because the same app types are generally static/app-plus-functions patterns.[^6_13]
- **Awesome static website services** — curated collection of static web patterns and services.[^6_12]
- **Awesome Cloudflare Workers** — curated Worker recipes, starters, and utilities.[^6_22][^6_16]
- **Cloudflare Workers examples** — official source for edge app patterns.[^6_17]
- **Netlify examples** — official repository of deployable static-plus-functions app demos.[^6_7]
- **Vercel examples** — official repository of deployable app demos and starter solutions.[^6_4]
- **Cloudflare static-site tutorial repo** — starter for plain static sites on Pages.[^6_1]
- **Cloudflare static-site repo with NPM scripts** — another plain static app starter.[^6_14]
- **GitHub-integrated Pages projects** — Cloudflare Pages docs explicitly support GitHub-integrated deployments.[^6_3]


## How to Extend This List

The safest way to expand this list without violating your constraint is to keep only projects that clearly match one of these deployment models:[^6_5][^6_2][^6_4][^6_3]

1. A repo that builds to static files and can be published to Pages-style hosting.
2. A repo documented as a Netlify Functions, Vercel, or Cloudflare Workers example.
3. A GitHub Actions workflow that publishes a generated site to GitHub Pages.
4. A front-end-only web app with no requirement for a persistent application server.

Projects that require long-running PHP, Python, Ruby, Java, PostgreSQL, MySQL, Redis, Docker-only hosting, or a VPS should be excluded unless there is a real static-export or serverless version documented by the project itself.[^6_6][^6_5][^6_4][^6_3]
<span style="display:none">[^6_23][^6_24]</span>

<div align="center">⁂</div>

[^6_1]: https://github.com/dilatchi/cloudflare-static-site-demo

[^6_2]: https://github.com/netlify/example-hello-world-functions

[^6_3]: https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/

[^6_4]: https://github.com/vercel/examples

[^6_5]: https://university.tenten.co/t/hosting-a-static-website-with-cloudflare-worker/1740

[^6_6]: https://github.com/juicyfx/vercel-examples

[^6_7]: https://github.com/netlify/examples/

[^6_8]: https://github.com/myles/awesome-static-generators

[^6_9]: https://github.com/sdil/open-production-web-projects

[^6_10]: https://github.com/makinwab/awesome-opensource-webapps

[^6_11]: https://github.com/awesome-selfhosted/awesome-selfhosted

[^6_12]: https://github.com/agarrharr/awesome-static-website-services

[^6_13]: https://github.com/staticwebdev/awesome-azure-static-web-apps

[^6_14]: https://github.com/ntheanh201/cloudflare-static-site

[^6_15]: https://github.com/simplelocalize/simplelocalize-cloudflare-workers

[^6_16]: https://github.com/irazasyed/awesome-cloudflare

[^6_17]: https://developers.cloudflare.com/workers/examples/

[^6_18]: https://github.com/netlify/example-every-color

[^6_19]: https://til.simonwillison.net/cloudflare/workers-github-oauth

[^6_20]: https://www.reddit.com/r/vercel/comments/1rf5w28/how_to_automate_the_deployment_of_a_static/

[^6_21]: https://github.com/krzemienski/awesome-list-site-generator

[^6_22]: https://github.com/lukeed/awesome-cloudflare-workers

[^6_23]: https://www.reddit.com/r/Hosting/comments/1opu5jq/learn_how_to_create_and_deploy_a_static_website/

[^6_24]: https://github.com/vercel/vercel


## Personal dashboards \& productivity (15)

- Personal “life dashboard” that pulls tasks, calendar events, and weather into a single static page backed by serverless API proxies.
- Minimal habit tracker storing events in a serverless data store (KV/D1/Dynamo/Firestore) with a static SPA front‑end.
- Serverless time‑tracking widget that logs work sessions via edge functions and renders charts client‑side.
- Bookmark‑plus‑notes dashboard where front‑end calls Workers/Functions to enrich URLs with metadata.
- “Today” dashboard combining news headlines, RSS feeds, and reminders via serverless fetchers.
- Serverless Pomodoro timer that syncs sessions across devices using KV or similar key‑value storage.
- Static goal‑planning app that periodically generates PDF/Markdown reports via a GitHub Action.
- Edge‑powered “focus mode” site blocker that serves a calming landing page for distracting domains.
- Personal CRM mini‑app (people + last‑contact dates) storing data in serverless DB tables.
- Browser‑only kanban board that persists state via a serverless API with JWT auth.
- Lightweight journaling app that encrypts entries in the browser and stores blobs via Workers.
- Static “scoreboard” app for tracking points (fitness, study, etc.) with serverless increment endpoints.
- Multi‑timezone scheduling helper that uses edge functions to normalize timezones for participants.
- Static meal‑planning app that calls a recipe API via a Netlify/Vercel function proxy.
- “Daily brief” generator that runs in a scheduled GitHub Action and publishes a static digest page.

***

## Scraping \& content extraction (15)

- Serverless HTML→JSON scraper API for product pages, used by a static UI.[^9_7][^9_8]
- Workers‑powered micro‑scraper that extracts Open Graph metadata for any URL.
- RSS‑from‑any‑page endpoint that turns arbitrary sites into feeds consumed by a static reader.
- Screenshot‑as‑a‑service Worker that returns PNG/JPEG previews for static embed UIs.
- Serverless job‑listing aggregator that scrapes multiple job boards and publishes static JSON.
- Edge function that periodically scrapes exchange rates and writes a static JSON file for a currency widget.
- Serverless “article cleaner” that fetches a URL, extracts readable content, and returns Markdown.
- Static site checker that crawls your own site via a Worker and reports broken links to a dashboard.
- Serverless search indexer that crawls docs and outputs a Lunr/mini‑search index consumed by a static UI.
- Edge‑based change‑detection service that snapshots a page and highlights diffs for a static reports page.
- Scheduled GitHub Action that scrapes public APIs and writes static data into the repo for dashboards.
- Worker that normalizes multiple RSS/Atom feeds into a single JSON feed displayed by a static front‑end.
- Serverless SEO auditor that fetches pages, checks headings/meta, and outputs a downloadable report.
- Static “compliance monitor” that regularly snapshots privacy/terms pages via a scraping function.
- Serverless “who mentions my domain” scraper that polls search APIs and updates a static mentions page.

***

## Dynamic embeds \& widgets (15)

- “Now playing” music widget reading from Spotify/Last.fm via a serverless function proxy.
- Live polls/emoji‑reaction widget where votes are sent to a Worker and aggregated for a static embed.
- Real‑time visitor counter backed by a serverless KV store and displayed via a JS snippet.
- “Top posts” embed for any RSS/JSON feed computed by a function and rendered by a static widget.
- Edge‑rendered social proof widget that rotates recent testimonials from a JSON store.
- Serverless “carbon footprint” badge for websites calculating emissions based on page size.
- Uptime badge widget that reads Upptime‑style JSON and renders SVG shields.
- Donation progress bar widget that reads totals from a serverless payment webhook store.
- “Currently open/closed” business hours widget using edge time logic.
- Multilingual content switcher widget whose translations are loaded via serverless APIs.
- “Who’s online” indicator using a Worker that tracks active sessions in KV.
- Consent‑status widget that stores user choices via encrypted serverless endpoints.
- “Branch build status” badge reading GitHub Actions status and rendering a static SVG.
- Personalized greeting widget using edge‑geo detection to display local time and city.
- Serverless A/B test banner rotator that chooses variants at the edge and logs events.

***

## Aggregators \& readers (15)

- Static multi‑source newsreader that pulls curated feeds via serverless fetchers.
- Serverless “paper‑of‑the‑day” that fetches an arXiv/API paper, summarizes it, and updates a static page.
- GitHub release watcher that aggregates releases for selected repos into a static feed.
- Edge‑computed “trending blog posts” reader based on RSS and share counts.
- Static changelog aggregator showing recent updates across multiple services via JSON.
- “Public roadmap” reader merging GitHub projects and issue labels into a single static board.
- Podcast playlist reader that merges multiple podcast feeds into one listening queue.
- Serverless “curated Twitter/X list” reader that proxies and normalizes list timelines.
- Newsletter archive viewer that transforms emails (via webhook) into static HTML pages.
- Static “knowledge stream” that ingest bookmarks from a serverless endpoint and renders grouped by topic.
- RSS‑to‑email hybrid where a function digests feeds and emits markdown files rendered on Pages.
- Edge‑based “book highlights” feed that formats highlights stored in a serverless DB.
- Multi‑platform watch list (YouTube, Twitch, etc.) aggregator with serverless API proxies.
- Static “company update” reader that fetches posts from multiple official channels via Workers.
- Serverless “changelog diff” viewer that takes two versions of a changelog and highlights changes.

***

## Automation \& integrations (15)

- Webhook router Worker that receives webhooks from many services and routes them to specific endpoints.[^9_2][^9_1]
- “Forms to Airtable/Notion” integration implemented entirely via Netlify/Vercel functions.[^9_7][^9_1]
- Serverless Zapier‑like mini‑platform: “if X webhook then call Y API,” configured via a static UI.
- Calendar scheduling integration that writes confirmed slots to Google Calendar via edge functions.
- Trello/GitHub issues sync micro‑service fronted by a static status dashboard.
- “Starboard” tool that listens to GitHub repo events (via Actions) and updates a static highlights page.
- Email‑to‑webhook gateway using a function hooked to a mail provider’s webhook API.
- RSS‑to‑Slack/Discord automation driven by scheduled Workers.
- “Tweet from form” app that posts via API triggered by a static page + serverless action.
- Serverless cron dashboard where users define simple schedules stored in KV and triggers are fired by Workers.
- Static “integration catalog” site where each integration is backed by a serverless function.
- CRM enrichment micro‑app that takes an email domain and enriches company info via external APIs.
- Serverless spreadsheet‑sync tool that reads/writes Google Sheets via Functions.
- Edge‑based “feature flag as a service” toy that returns flags based on headers and query params.
- Webhook inspector front‑end with a Worker capturing and displaying recent requests.

***

## Media \& file utilities (15)

- Serverless image thumbnailer that generates on‑the‑fly thumbnails via Workers/Functions.
- Social card (OG image) generator that renders dynamic images at the edge.
- PDF merger/splitter front‑end with serverless processing and storage in object storage.
- Static audio trimmer UI backed by a serverless processing function.
- “Upload once, get multi‑size images” app using Functions to generate variants.
- Media metadata inspector that extracts EXIF/ID3 via a serverless API.
- Static screenshot gallery that pulls image files from object storage and lists them via signed URLs.
- Serverless document text extractor using external OCR APIs.
- Static “file drop” widget where uploads go to a signed storage bucket via edge functions.
- Video subtitle syncing helper that lets users upload subtitle files and preview with a video URL.
- Image optimization proxy Worker (WebP/AVIF, resize, quality) for static sites.
- Audio waveform generator API that returns JSON or SVG for a static visualizer.
- Short‑link + QR code generator using serverless functions and a static front‑end.
- Static icon gallery that reads available icons from a JSON index built in CI.
- Serverless watermarking tool for images using edge compute.

***

## Commerce \& finance mini‑apps (15)

- Stripe‑powered donation widget built as a static form plus serverless checkout endpoint.[^9_1][^9_7]
- Minimal “Pay what you want” checkout with serverless price calculation and payment intent creation.
- Subscription billing dashboard that reads billing data from a payments API and renders a static UI.
- Expense‑sharing calculator that stores shared bills via serverless API calls.
- Static “SaaS pricing simulator” that calls a serverless function to simulate usage‑based bills.
- “Tip jar” button widget using serverless payment links.
- Currency converter widget using a serverless FX‑rate fetcher.
- Static portfolio tracker that periodically ingests prices via a GitHub Action and renders charts.
- Revenue leaderboard for open‑source sponsors fed by serverless API calls to sponsor APIs.
- Invoice PDF generator that turns JSON data from a function into downloadable documents.
- VAT/tax calculator widget with rules computed in a serverless function.
- Donation matching tracker that calculates remaining matching pool in a KV store.
- Simple affiliate‑link click tracker backed by a Worker counter.
- “Paywall‑preview” gateway that uses a function to check subscription status and return partial/full content.
- Static “pricing experiments” dashboard showing variant performance via serverless logging.

***

## Devtools \& observability apps (15)

- Request inspector web UI that shows headers/body of recent calls to a Worker endpoint.[^9_8][^9_2]
- Static dashboard for build status across multiple CI providers fetched via serverless APIs.
- Edge latency visualizer that measures latency from different regions using Workers and renders a map.
- HTTP header playground where a function echoes and manipulates request/response headers.
- DNS lookup mini‑tool that queries DNS over HTTPS from a function and shows results.
- Static log viewer that reads sanitized logs from object storage or KV via Functions.
- Configuration preview tool that fetches config JSON from branches and renders diffs.
- “Feature flag explorer” UI that reads flags from a serverless config endpoint.
- API schema diff viewer that compares two OpenAPI specs stored in the repo.
- JWT debugging mini‑app that decodes tokens client‑side and optionally validates via a function.
- Webhook replay tool that re‑sends captured requests from a static UI via Workers.
- Rate‑limit simulator that calls a serverless endpoint to demonstrate throttling.
- CDN cache inspection tool fronted by Workers returning cache status headers.
- Static “incident timeline” generator using GitHub issues and Actions logs as sources.
- Progressive rollout dashboard wired to edge‑middleware toggles.

***

## Collaboration \& social mini‑apps (15)

- Anonymous feedback wall powered by serverless storage and a static UI.
- Lightweight public Q\&A board where questions/answers are stored via a function.
- Static “shoutbox” widget for small communities using serverless event log.
- Team retrospectives tool that writes notes to a serverless DB and displays grouped cards.
- Async standup bot with a static dashboard and serverless cron digest posting to chat.
- Small “idea voting” app where votes are counted via Workers, results displayed in real‑time.
- Static “community wall of fame” reading supporter data from a JSON file in the repo.
- Serverless RSVP app for events that stores responses in KV or external DB.
- “Lunch roulette” matcher that uses a function to randomly pair participants weekly.
- Simple suggestion box widget that posts encrypted feedback to a function.
- Team kudos board where messages are stored and displayed in a static SPA.
- Public “book club picks” site where reading suggestions are submitted via serverless forms.
- “Today we ship” leaderboard that reads commits/issues closed from APIs.
- Static “team directory” front‑end with serverless admin endpoints to add/update people.
- Micro‑blog wall for internal announcements, backed by a simple serverless CRUD API.

***

## Misc utilities \& generators (15)

- Serverless “random name/slug generator” widget exposed as an API and static UI.
- Password/passphrase generator built fully client‑side with optional entropy logging via a function.
- “Lorem ipsum for X domain” content generator that returns themed filler text.
- Static color‑palette generator with serverless saving/sharing endpoints.
- Edge‑based geo‑IP lookup widget that shows location info for the viewer.
- Simple URL shortener built as a Worker using KV to map codes to URLs.
- Static “regex cheat sheet” with a serverless playground to test patterns against sample text.
- JSON→YAML/CSV converter UI with serverless validation logic.
- Serverless cron expression explainer that parses and explains cron strings.
- License picker that recommends OSS licenses and stores chosen templates via serverless endpoints.
- Privacy policy/terms generator that outputs markdown based on a short questionnaire.
- Edge‑based “dark mode at night” script that sets theme by viewer’s local time.
- Static “markdown to presentation” converter that calls a function to render slides.
- Serverless “domain availability checker” using WHOIS/registrar APIs.
- Static “app idea randomizer” that combines random verticals, business models, and tech stacks.

***

All of these are intentionally framed so they can be implemented as:

- Static or SPA front‑ends,
- plus serverless functions (Vercel/Netlify) or Cloudflare Workers/Pages Functions,
- or GitHub Actions that generate static artifacts into a repo — which matches the capabilities and deployment models of the platforms you specified.[^9_3][^9_4][^9_5][^9_6][^9_8][^9_2][^9_7][^9_1]
<span style="display:none">[^9_10][^9_11][^9_12][^9_13][^9_14][^9_15][^9_16][^9_17][^9_18][^9_19][^9_20][^9_9]</span>

<div align="center">⁂</div>

[^9_1]: https://www.netlify.com/platform/core/functions/

[^9_2]: https://developers.cloudflare.com/workers/examples/

[^9_3]: https://danubedata.ro/blog/cloudflare-pages-vs-netlify-vs-vercel-static-hosting-2026

[^9_4]: https://bejamas.com/compare/cloudflare-pages-vs-netlify-vs-vercel

[^9_5]: https://vercel.com/docs/git/vercel-for-github

[^9_6]: https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/

[^9_7]: https://main--functions.netlify.com/examples/

[^9_8]: https://github.com/DavidWells/netlify-functions-workshop

[^9_9]: https://github.com/anaibol/awesome-serverless

[^9_10]: https://github.com/juicyfx/vercel-examples

[^9_11]: https://www.eweek.com/cloud/7-open-source-serverless-frameworks-providing-functions-as-a-service/

[^9_12]: https://github.com/vercel/examples

[^9_13]: https://dev.to/nickgabe/how-to-use-serverless-functions-on-netlify-jsts-olj

[^9_14]: https://www.cncf.io/blog/2020/04/13/serverless-open-source-frameworks-openfaas-knative-more/

[^9_15]: https://vercel.com/docs/git

[^9_16]: https://www.redhat.com/en/blog/get-started-serverless-computing

[^9_17]: https://github.com/vercel/workflow-examples

[^9_18]: https://www.netlify.com/blog/2021/12/11/serverless-functions-made-simple-just-add-files/

[^9_19]: https://www.linkedin.com/pulse/15-open-source-projects-get-started-serverless-applications-l7soc

[^9_20]: https://github.com/vercel/examples/discussions


## Education, learning, and knowledge (10)

- Interactive quiz platform where questions are static JSON and scoring/leaderboards are handled by serverless functions.
- Spaced‑repetition flashcard app storing cards in Git, with progress stats written via an edge function.
- Coding challenge playground that runs solutions in a sandboxed API/Lambda and shows results in a static UI.
- “Daily concept” microsite (math, CS, languages) populated by a scheduled GitHub Action that updates one card per day.
- Citation generator widget (APA/MLA/Chicago) that uses serverless logic to normalize inputs and render download‑ready citations.
- Curriculum planner where lesson templates live in markdown, compiled by Actions into a static teacher dashboard.
- Serverless “ask a dataset” interface that proxies questions to a managed search/AI API from a static front‑end.
- Glossary builder that takes a YAML file of terms and uses an Action to generate a searchable static glossary site.
- “Explain this code” snippet helper that calls a code‑analysis API via a function and shows formatted output.
- Course progress tracker using Workers KV / serverless DB to store which modules a user has completed.

***

## Health, habits, and self‑improvement (10)

- Mood tracker that logs daily entries via Functions/Workers and renders charts client‑side.
- Hydration/step counter widget that uses local storage plus a KV‑backed backup/restore endpoint.
- Sleep log visualizer where a static UI pulls nightly summaries from a JSON file updated by Actions.
- Habit streaks badge for blogs that reads data from a KV store and returns an SVG.
- “Challenge a friend” fitness challenge board running as a static site with serverless join/score endpoints.
- Gratitude journal where entries are encrypted in the browser, with optional backup via a serverless storage API.
- Mindfulness reminder banner on personal sites, driven by edge logic (time‑of‑day) and a small config JSON.
- Simple calories/macros calculator that stores personalized presets in a lightweight serverless store.
- Accountability partner matcher that periodically pairs participants via a scheduled function and sends notifications via webhooks.
- Static “scoreboard of personal experiments” (sleep, diet, etc.) updated by a weekly GitHub Action from a CSV.

***

## Events, travel, and local (10)

- RSVP/guest‑list app for small events: static landing page + function to log responses.
- Carpool matcher widget for events using a function to group people by location and schedule.
- Venue map explorer that uses a static map plus a function to fetch live capacity or status data.
- Travel wish‑list board that writes selected destinations to serverless storage, with a static “map of dreams” visualization.
- City events aggregator that scrapes/consumes public APIs nightly via Actions and publishes static JSON events.
- Meet‑up finder for niche interests, where minimal profile data is stored in a serverless DB and displayed on a static map.
- Shared packing list app for group trips with serverless endpoints for adding/checking items.
- “Weather‑plus‑what‑to‑wear” widget that calls a weather API from a Worker and returns a simple recommendation.
- Travel expense splitter that processes receipts uploaded to object storage and uses a function to calculate shares.
- Static “trip replay” site that reads GPS logs from a file and draws an animated polyline route.

***

## Content, publishing, and creativity (10)

- Newsletter “preflight checker” that analyzes pasted content via Functions for length, links, and spammy phrases.
- Static “link digest” generator that takes saved URLs from a JSON file and builds a weekly digest page via Actions.
- Caption generator for images that calls an AI API from a serverless endpoint and displays candidate captions.
- Headline A/B tester that rotates two options via edge middleware and logs clicks in KV.
- Static meme generator front‑end with a serverless image composition endpoint.
- “Clip and annotate” browser bookmarklet that saves highlighted text snippets to a serverless backend for later reading.
- Audio clip trimmer where uploaded clips are processed by a function and exposed via signed URLs.
- Collaborative quote wall where submissions are stored in serverless storage and displayed in rotating widgets.
- Static site “soundtrack picker” that uses edge logic (time, locale) to suggest playlists.
- Multi‑author link blog where content lives in markdown in the repo and a GitHub Action rebuilds the site on PR merge.

***

## Security, privacy, and safety (10)

- Have‑I‑Been‑Pwned checker proxy: static UI calls a serverless function that safely queries breach APIs without exposing keys.
- Password strength \& entropy analyzer with all computation in the browser, plus optional logging to a function for aggregate stats.
- Two‑factor “backup codes” manager that generates codes locally and optionally syncs a hashed version to KV for recovery validation.
- Data retention dashboard that shows when data will be deleted, driven by a serverless “expiry calculation” endpoint.
- Consent log viewer where frontend reads anonymized consent events from a static JSON log written by Actions.
- Simple “security headers scanner” that calls a serverless function, fetches headers for a given URL, and rates them.[^10_7][^10_8]
- Privacy policy tracker that snapshots hosted policies via a scraping function and highlights changes in a static diff UI.
- Static “your data footprint” calculator that estimates risk based on user inputs, with serverless scoring logic.
- Front‑end for generating and verifying signed URLs using a serverless signing endpoint.
- IP reputation checker that proxies to a risk API via Workers and presents a simple “safe/unknown/risky” result.

***

## IoT, devices, and real‑world data (10)

- Home sensor dashboard where microcontrollers POST readings to a Worker and a static UI draws graphs.
- “Mailbox notifier” app: device triggers a webhook, serverless function stores timestamps, static page shows last opened time.
- Plant moisture monitor dashboard using a KV store for latest readings and a static chart.
- Bike/vehicle tracker viewer: GPS devices publish location via a function; static map draws recent routes.
- Serverless “energy cost estimator” that reads smart meter exports via upload and visualizes usage.
- Air‑quality index widget that fetches public AQI data at the edge according to viewer location.
- Static “home inventory” UI with a function that accepts item scans (e.g., via QR) for quick updates.
- Office occupancy heatmap where check‑ins are backed by Workers KV and displayed as a static floorplan overlay.
- Simple serverless “doorbell camera event” notifier that consumes webhook events and updates a timeline.
- Weather station comparison board using multiple public APIs, called via a serverless proxy to avoid CORS/API key leakage.[^10_2][^10_3]

***

## Games, fun, and social (10)

- Async “daily puzzle” site where the puzzle is generated by a schedule (Action/Function) and stored as JSON.
- Online scavenger hunt: static pages hide clues, serverless endpoints validate codes and unlock next steps.
- Turn‑based micro‑game (e.g., tic‑tac‑toe) where moves are written via a Worker to KV and replayable by a static client.[^10_9][^10_4]
- Trivia leaderboard that uses serverless endpoints to validate answers and score users.
- “Secret Santa” matcher: form collects emails; serverless function computes pairings and sends anonymized results.
- Collaborative story‑writing app where each user adds one sentence, logged via Functions, and static pages show in “chapters.”
- Emoji‑only chat wall where messages are stored in KV and displayed with no login, just rate‑limiting via edge logic.
- Geo‑guessing mini‑game using static Street View images and serverless scoring logic.
- “Would you rather” generator that picks random community‑submitted questions from KV.
- Multiplayer scoreboard for in‑person board games, with static UI and serverless score updates.

***

## Data, AI, and ML glue (10)

- Prompt library browser for LLM prompts stored in markdown, indexed by an Action, and searchable via a static UI.
- Serverless “feature extractor” that accepts text or JSON and returns extracted entities/keywords for downstream dashboards.
- Static UI for trying multiple LLM providers, with a function routing requests to different APIs based on config.
- Embedding playground that calls embedding APIs via Functions and shows similarity search on the client.
- “Summarize this URL” tool where a function fetches the page, runs it through an AI API, and the static UI shows summaries.
- Static “bias/quality checker” that submits text to a serverless endpoint for analysis and returns colored highlights.
- Spreadsheet‑to‑API generator: upload CSV; a function decorates it with types and returns a JSON schema.
- Data cleaning assistant: static UI defines transformations; function applies them and returns cleaned CSV.
- “Select features for model” wizard that takes dataset metadata, runs heuristics in a function, and suggests features.
- LLM‑backed FAQ widget that uses embeddings stored in KV or external vector DB; front‑end is static, queries go through a function.

***

## Meta‑hosting \& CI/CD helpers (10)

- “Deploy from anywhere” button generator that emits Vercel/Netlify/GitHub Pages deploy buttons for a given repo.[^10_10][^10_5][^10_11]
- Static CI dashboard that lists last builds for multiple repos by querying GitHub/GitLab via serverless functions.
- “Branch preview catalog” site that lists ephemeral preview URLs from your platform APIs.
- Log‑based changelog generator: GitHub Action reads commit messages and writes a static changelog site.
- Serverless “config diff” app that compares environment variables between deployments via APIs.
- Static “infrastructure cost estimate” calculator that calls a serverless function with usage assumptions.
- Domain propagation checker that periodically resolves DNS records via a function and visualizes status.
- Uptime/latency experiment harness that pings multiple hosts from Workers and writes results to a static chart.
- Shortcut‑triggered deployer: static page with a button that calls a function hitting deploy hooks (or Siri/shortcut variant).
- Static “serverless pattern catalog” that indexes your internal Workers/Functions examples with tags and code links.[^10_12][^10_7]

***

All of these ideas map to patterns the platforms explicitly support: static/Jamstack front‑ends paired with serverless functions (Netlify Functions, Vercel Functions, GitHub Actions, Cloudflare Workers/Pages Functions) for dynamic behavior, scraping, scheduling, or integrations—without needing a long‑running app server.[^10_3][^10_4][^10_5][^10_6][^10_1][^10_2][^10_9]
<span style="display:none">[^10_13][^10_14][^10_15][^10_16][^10_17][^10_18]</span>

<div align="center">⁂</div>

[^10_1]: https://www.netlify.com/platform/core/functions/

[^10_2]: https://developers.cloudflare.com/workers/examples/

[^10_3]: https://docs.netlify.com/build/functions/overview/

[^10_4]: https://developers.cloudflare.com/workers/tutorials/build-a-jamstack-app/

[^10_5]: https://vercel.com/docs/git/vercel-for-github

[^10_6]: https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/

[^10_7]: https://github.com/serverless/examples

[^10_8]: https://www.webapper.com/serverless-use-cases/

[^10_9]: https://developers.cloudflare.com/workers/demos/

[^10_10]: https://www.netlify.com/blog/2020/05/12/see-13-netlify-features-for-the-best-control-of-development-workflow/

[^10_11]: https://vercel.com/docs/git

[^10_12]: https://www.serverless.com/examples

[^10_13]: https://technologychecker.io/technology/cloudflare-workers

[^10_14]: https://www.cockroachlabs.com/blog/serverless-application-examples/

[^10_15]: https://www.netlify.com/blog/introducing-netlify-functions-2-0/

[^10_16]: https://github.com/irazasyed/awesome-cloudflare

[^10_17]: https://www.reddit.com/r/serverless/comments/rd79zz/can_you_tell_a_few_examples_where_serverless/

[^10_18]: https://answers.netlify.com/t/whats-your-weirdest-use-case-for-a-netlify-feature/83973


## Bookmark \& link managers (15)

- **LinkAce** – Self‑hosted bookmark archive with tagging and APIs.[^4_1]
- **Shaarli** – Minimal bookmark manager with shareable links and tag clouds.[^4_1]
- **Shiori** – Go‑based, Instapaper‑like bookmark manager with web UI.[^4_1]
- **Linkding** – Simple, fast bookmark service with REST API.[^4_1]
- **Linkwarden** – Bookmarking and archiving tool with collections and full‑text search.[^4_5]
- **ArchiveBox** – Saves pages for offline, self‑hosted archiving with web interface.[^4_1]
- **Espial** – Web‑based bookmarking application with tags and notes.[^4_1]
- **Pinry** – Pinterest‑style image and link sharing board.[^4_1]
- **WebCrate** – Organize and share links in “crates” with a lightweight SPA UI.[^4_2]
- **nunux‑keeper** – Personal content curation and bookmarking tool.[^4_1]
- **Unmark** – To‑read and bookmark manager focused on reading lists.[^4_1]
- **Lobsters** – Link aggregation community software (Hacker‑News‑style).[^4_1]
- **Lemmy** – Reddit‑like, federated link discussion platform.[^4_1]
- **Telescope** – Hacker‑News‑style link aggregator engine.[^4_2]
- **LinkStack** – Self‑hosted Linktree‑like “link in bio” page generator.[^4_5]

***

## Read‑it‑later \& RSS / feed tools (15)

- **Wallabag** – Save and read web articles later in a self‑hosted web UI.[^4_1]
- **Miniflux** – Minimal, fast RSS reader with a clean web interface.[^4_1]
- **FreshRSS** – Multi‑user RSS reader for the web.[^4_1]
- **Tiny Tiny RSS** – Classic web‑based feed reader with plugins.[^4_1]
- **selfoss** – Web‑based RSS reader and multi‑source news app.[^4_1]
- **CommaFeed** – Google Reader‑like RSS reader in Java.[^4_1]
- **Sismics Reader** – Web feed reader with responsive UI and mobile support.[^4_1]
- **Leed** – Lightweight RSS aggregator built in PHP.[^4_1]
- **Kriss Feed** – Simple, single‑user RSS/Atom feed reader.[^4_1]
- **Stringer** – Ruby‑based, self‑hosted RSS reader.[^4_1]
- **NewsBlur (self‑hosted)** – Trainable news reader with web UI and open server code.[^4_1]
- **Nextcloud News** – RSS reader app for the Nextcloud web interface.[^4_1]
- **Feedbin Docker image** – Open source portions of the Feedbin reader for self‑hosted use.[^4_1]
- **RSS‑Bridge** – Generate feeds for sites that do not provide RSS, via a simple web UI.[^4_1]
- **Quiterss‑web forks** – Web frontends around existing feed engines for browser‑based reading.[^4_2]

***

## Notes, wikis \& collaborative docs (15)

- **Joplin Server** – Sync and share Joplin notes via a web dashboard and API.[^4_1]
- **Trilium Notes** – Hierarchical note‑taking app with rich web interface.[^4_1]
- **BookStack** – Wiki‑like documentation platform with books/chapters/pages.[^4_1]
- **Wiki.js** – Modern wiki system powered by Node.js and a SPA frontend.[^4_1]
- **DokuWiki** – File‑based wiki engine with a classic web UI.[^4_1]
- **TiddlyWiki (self‑hosted)** – Single‑page wiki that can be hosted as a web app.[^4_1]
- **Gitit** – Haskell‑based wiki that stores content in Git, with web editing.[^4_1]
- **Outline** – Team knowledge base with a polished React frontend.[^4_2]
- **HedgeDoc** – Collaborative Markdown editor with live preview.[^4_1]
- **Etherpad** – Real‑time collaborative text editor in the browser.[^4_1]
- **CryptPad** – End‑to‑end‑encrypted collaborative documents and notes.[^4_1]
- **MediaWiki** – Wiki engine behind Wikipedia, deployable as a stand‑alone web app.[^4_1]
- **Turtl** – Encrypted note‑taking with a sync server and web client.[^4_1]
- **Draw.io / diagrams.net (server)** – Diagram editor with self‑hostable web front‑end.[^4_2]
- **XWiki** – Advanced enterprise wiki platform with a browser UI.[^4_1]

***

## Analytics \& metrics (15)

- **Plausible Analytics** – Lightweight website analytics alternative to Google Analytics.[^4_1]
- **Umami** – Web analytics focused on simplicity and privacy.[^4_1]
- **Ackee** – Node‑based JavaScript analytics tool with web dashboard.[^4_1]
- **GoatCounter** – Minimal web analytics with a simple script and UI.[^4_1]
- **Shynet** – Modern, privacy‑friendly web analytics platform.[^4_1]
- **Matomo** – Full‑featured web analytics suite, open source.[^4_1]
- **Open Web Analytics** – PHP‑based web analytics similar to Google Analytics.[^4_1]
- **Offen** – Fair, open web analytics with user data access.[^4_1]
- **Countly Community** – Product analytics and user behavior tracking with a web UI.[^4_1]
- **Pirsch** – Server‑side focused web analytics with lightweight script.[^4_1]
- **Fathom‑like clones** – Community Fathom‑style analytics implementations listed in self‑hosted catalogs.[^4_1]
- **Piwik PRO open edition forks** – Self‑hosted, Matomo‑derived analytics deployments.[^4_1]
- **Ackee Cloudflare Worker variants** – Worker‑compatible forks that store analytics in KV/D1.[^4_6][^4_7]
- **GoAccess HTML reports** – Real‑time log analyzer with static HTML dashboards you can host.[^4_1]
- **GoSquared‑style OSS dashboards** – Open source SaaS‑style analytics dashboards from curated webapp lists.[^4_2]

***

## Status, uptime \& monitoring (15)

- **Uptime Kuma** – Fancy self‑hosted monitoring tool with web UI.[^4_1]
- **Statping** – Status page and monitoring with charts.[^4_1]
- **Cachet** – Status page system for displaying incidents and uptime.[^4_1]
- **cState** – Static front‑end status page system, great for Pages hosts.[^4_1]
- **Statusfy** – Vue‑based status page app that can generate static builds.[^4_1]
- **Upptime** – GitHub Actions‑powered uptime monitor that publishes static status pages.[^4_4]
- **Healthchecks.io (self‑hosted)** – Cron job monitoring with web dashboard.[^4_1]
- **Netdata** – Real‑time system monitoring with rich web UI.[^4_1]
- **Prometheus + Prometheus‑UI dashboards** – Metrics storage and UI for monitoring apps.[^4_1]
- **Zabbix (web UI)** – Enterprise‑grade monitoring server with web frontend.[^4_1]
- **LibreNMS** – Network monitoring with a web dashboard.[^4_1]
- **Smokeping** – Latency monitoring with web graphs.[^4_1]
- **Grafana** – Analytics and monitoring dashboards, fronted entirely via web.[^4_1]
- **Monica uptime forks** – Lightweight uptime dashboards adapted for Jamstack deployment.[^4_2]
- **Squzy** – Monitoring platform with incident management dashboard.[^4_8]

***

## Comments, forums \& community tools (15)

- **Commento** – Privacy‑friendly embeddable comment system.[^4_1]
- **Isso** – Lightweight commenting server similar to Disqus.[^4_1]
- **Remark42** – Self‑hosted, JS‑embeddable comment engine.[^4_1]
- **Coral Talk** – Comment platform used by publishers.[^4_1]
- **Cusdis** – Lightweight comment box with web admin.[^4_1]
- **Discourse** – Modern, JavaScript‑heavy forum software.[^4_1]
- **Flarum** – Next‑gen forum platform with SPA frontend.[^4_1]
- **NodeBB** – Node.js‑based forum platform.[^4_1]
- **Vanilla OSS** – Open source edition of Vanilla Forums.[^4_1]
- **MyBB** – Classic PHP forum with browser interface.[^4_1]
- **Lemmy (again for community)** – Reddit‑style federated community engine.[^4_1]
- **BookWyrm** – Federated social reading and review platform.[^4_2]
- **WriteFreely** – Minimalist, federated blogging platform with web editor.[^4_1]
- **Plume** – Federated blogging engine built on ActivityPub.[^4_1]
- **PeerTube** – Federated video platform with YouTube‑like UI.[^4_1]

***

## Chat, messaging \& collaboration (15)

- **Rocket.Chat** – Slack‑like team chat platform.[^4_1]
- **Mattermost** – Open source alternative to Slack with web and mobile clients.[^4_1]
- **Zulip** – Threaded chat with powerful web UI.[^4_1]
- **Element Web** – Matrix web client for real‑time chat.[^4_1]
- **Synapse (Matrix homeserver)** – Matrix server with web‑based management tools.[^4_1]
- **Matrix EMS forks** – Community editions of Matrix servers deployable on generic infrastructure.[^4_1]
- **Papercups** – Customer chat widget and support inbox in Elixir with React UI.[^4_8]
- **LiveHelperChat** – Live support chat system for websites.[^4_1]
- **Lets‑Chat** – Node.js chat application with rooms and notifications.[^4_1]
- **Chaskiq** – Omnichannel live chat and marketing automation platform.[^4_1]
- **Owncast** – Self‑hosted live video and chat streaming platform.[^4_1]
- **Jitsi Meet** – WebRTC video conferencing with web UI.[^4_1]
- **BigBlueButton** – Web conferencing system for online learning.[^4_1]
- **Mumble Web UI wrappers** – Web frontends for Mumble voice chat as listed in self‑hosted catalogs.[^4_1]
- **Rallly** – Schedule poller / Doodle alternative with web interface.[^4_2]

***

## Project management, kanban \& productivity (15)

- **Vikunja** – Self‑hosted task management with lists and kanban.[^4_1]
- **Focalboard** – Project management and kanban boards (Mattermost’s tool).[^4_1]
- **Kanboard** – Simple, self‑hosted kanban board.[^4_1]
- **Wekan** – Trello‑like kanban system.[^4_1]
- **Taiga** – Agile project management platform with Scrum/Kanban.[^4_8][^4_1]
- **OpenProject** – Project management suite with Gantt, work packages, etc.[^4_1]
- **Redmine** – Flexible project tracking and issue management.[^4_1]
- **Restyaboard** – Trello‑like board and task manager.[^4_1]
- **Plane** – Modern project management tool with issues, cycles, roadmaps.[^4_2]
- **Outline (tasks integrations)** – Knowledge base that integrates with tasks and workflows.[^4_2]
- **Officelife** – Employee and HR intranet with multiple productivity tools.[^4_2]
- **ERPNext** – ERP with project and task modules.[^4_1]
- **Dolibarr** – ERP/CRM with project and invoicing modules.[^4_8][^4_1]
- **Odoo Community** – Modular ERP with project, CRM, and more.[^4_1]
- **HospitalRun** – Hospital information system with task management for clinics.[^4_8]

***

## Pastebins, URL shorteners \& file tools (15)

- **PrivateBin** – Encrypted, zero‑knowledge pastebin.[^4_1]
- **Hastebin** – Node‑based pastebin with simple UI.[^4_1]
- **0bin** – Encrypted pastebin that can run in the browser and on a server.[^4_1]
- **Pasty** – Lightweight pastebin with REST API.[^4_2]
- **GistPad forks** – Self‑hosted gist‑style paste services collected in webapp lists.[^4_2]
- **Polr** – Modern URL shortener with statistics.[^4_1]
- **Kutt** – Self‑hosted link shortener with REST API and web UI.[^4_1]
- **YOURLS** – PHP‑based URL shortener platform.[^4_1]
- **Shlink** – URL shortener server in PHP with a SPA dashboard.[^4_1]
- **Lufi** – Temporary file hosting with web uploads and expiring links.[^4_1]
- **Jirafeau** – One‑click file sharing with simple web UI.[^4_1]
- **PicoShare** – Minimalist file sharing with expiring links.[^4_2]
- **Lobsters‑file forks** – Self‑hosted gist/file sharing tools from curated app lists.[^4_2]
- **Magic Wormhole Web UIs** – Browser frontends for wormhole‑style file transfer tools.[^4_2]
- **MailHog** – Email testing tool with a web inbox for captured mail.[^4_8][^4_1]

***

## Misc developer tools, dashboards \& “serverless‑style” apps (15)

- **Gitea** – Lightweight self‑hosted Git service with web UI.[^4_1]
- **Forgejo** – Community‑driven Gitea fork with similar UI.[^4_1]
- **GitLab CE** – Git hosting and DevOps platform with web interface.[^4_1]
- **Sourcegraph** – Code search and intelligence with powerful web UI.[^4_8]
- **Sentry (on‑prem)** – Error tracking with dashboard and alerts.[^4_1]
- **Metabase** – Business intelligence and charts via a web interface.[^4_1]
- **Redash** – Query data sources and build dashboards.[^4_1]
- **Appsmith** – Drag‑and‑drop internal tools builder with web editor.[^4_2]
- **Budibase** – Low‑code platform for building internal tools, deployed as a web app.[^4_2]
- **ToolJet** – Open‑source low‑code platform for internal dashboards.[^4_2]
- **Hoppscotch** – API testing tool with a progressive web app UI.[^4_2]
- **HTTP Toolkit (web)** – Interception/debugging front‑end for HTTP traffic listed in app catalogs.[^4_2]
- **Dashy** – Highly configurable home‑lab / links dashboard.[^4_1]
- **Homer** – Simple static‑style home server dashboard SPA.[^4_1]
- **Heimdall** – Web application dashboard to organize links and services.[^4_1]

***

All of these are:

- Open source web applications or services documented in major self‑hosting and open‑source‑webapp lists.[^4_5][^4_2][^4_1]
- Built as HTTP web apps, SPAs, or embeddable widgets that can be fronted by static/edge hosting and wired to serverless or Workers runtime backends and managed databases, which matches how serverless platforms like Vercel/Netlify/GitHub Pages/Cloudflare Pages are typically used.[^4_3][^4_9]

<div align="center">⁂</div>

[^4_1]: https://www.youtube.com/watch?v=0cERQxFjTW4

[^4_2]: https://github.com/netlify/staticgen

[^4_3]: https://www.weweb.io/blog/self-hosted-web-app-guide

[^4_4]: https://github.com/irazasyed/awesome-cloudflare

[^4_5]: https://www.opensourceprojects.dev/post/1952985220002799643

[^4_6]: https://blog.cloudflare.com/workerd-open-source-workers-runtime/

[^4_7]: https://johnnyreilly.com/migrating-from-github-pages-to-azure-static-web-apps

[^4_8]: https://www.youtube.com/watch?v=pjrEaRSSQck

[^4_9]: https://developers.cloudflare.com/use-cases/web-apps/



