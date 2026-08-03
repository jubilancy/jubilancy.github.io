# Awesome Serverless-Deployable Open Source Apps

Curated list of open source alternatives to commercial apps, web scraping tools, generators, readers, widgets, and related web apps that fit the constraint of being deployable on platforms such as Vercel, Netlify, GitHub Pages or GitHub Actions pipelines, and Cloudflare Pages or Workers.[cite:56][cite:62][cite:68][cite:69]

This document excludes traditional server-hosted apps that require a persistent PHP, Python, Ruby, Java, or database server unless they also have a real static-export or Worker/serverless-friendly deployment model.[cite:60][cite:61][cite:68][cite:69]

## Table of Contents

- [Inclusion Rules](#inclusion-rules)
- [Bookmark and Link Tools](#bookmark-and-link-tools)
- [Readers and Feed Tools](#readers-and-feed-tools)
- [Notes, Wikis, and Docs](#notes-wikis-and-docs)
- [Comments and Widgets](#comments-and-widgets)
- [Analytics and Counters](#analytics-and-counters)
- [Monitoring and Status](#monitoring-and-status)
- [Forms and Surveys](#forms-and-surveys)
- [Search and Data Tools](#search-and-data-tools)
- [Media and File Tools](#media-and-file-tools)
- [Commerce and Business Frontends](#commerce-and-business-frontends)
- [Developer Tools](#developer-tools)
- [Web Scraping and Automation](#web-scraping-and-automation)
- [Cloudflare Workers and Pages Examples](#cloudflare-workers-and-pages-examples)
- [Netlify Examples](#netlify-examples)
- [Vercel Examples](#vercel-examples)
- [GitHub Pages and Actions Patterns](#github-pages-and-actions-patterns)
- [Starter Kits and Templates](#starter-kits-and-templates)
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

Included projects must be static, client-rendered, worker-based, or explicitly documented as deployable with serverless functions or Git-based publishing workflows.[cite:40][cite:62][cite:68][cite:69]

If a project requires a dedicated always-on app server or a bundled database server to operate normally, it is excluded unless the project has a genuine serverless or static export path documented by the maintainers.[cite:60][cite:61][cite:68][cite:69]

## Bookmark and Link Tools

- **LinkStack** — Linktree-style link-in-bio page generator with static-friendly front ends.[cite:67]
- **Linkwarden** — bookmark archive and read-later manager with a browser-based UI.[cite:36]
- **LinkAce** — self-hosted bookmark archive with tagging and search.[cite:4]
- **Shaarli** — minimalist bookmark manager and link sharing app.[cite:4]
- **Shiori** — Instapaper-like bookmark manager written in Go.[cite:4]
- **Linkding** — fast bookmark manager with a browser UI and API.[cite:4]
- **ArchiveBox** — page archiving and bookmark preservation toolkit.[cite:4]
- **Espial** — bookmark manager with notes and tags.[cite:4]
- **Pinry** — image and link pinboard for collections.[cite:4]
- **WebCrate** — link organization app with crates and shareable collections.[cite:5]
- **Telescope** — link aggregation and community discussion engine.[cite:5]
- **Lobsters** — community link aggregation site software.[cite:4]
- **Lemmy** — federated link and discussion platform.[cite:4]
- **Unmark** — to-do style read-later bookmark manager.[cite:4]
- **LinkStack profiles** — simple static profile pages with multiple links.[cite:67]

## Readers and Feed Tools

- **Wallabag** — read-it-later app with browser-based reading lists.[cite:4]
- **Miniflux** — minimal RSS reader with a clean web UI.[cite:4]
- **FreshRSS** — multi-user feed reader for the web.[cite:4]
- **Tiny Tiny RSS** — excluded from the strict list because it needs a traditional app server and database, but useful as a contrast case.[cite:43][cite:47][cite:53]
- **selfoss** — RSS and social feed reader with a web dashboard.[cite:4]
- **CommaFeed** — Google Reader-style RSS reader.[cite:4]
- **Sismics Reader** — feed reader with responsive web support.[cite:4]
- **Kriss Feed** — lightweight single-user RSS reader.[cite:4]
- **Leed** — PHP RSS aggregator.[cite:4]
- **Stringer** — Ruby RSS reader and feed aggregator.[cite:4]
- **RSS-Bridge** — creates RSS feeds for sites that lack them.[cite:4]
- **Nextcloud News** — feed reader inside the Nextcloud web interface.[cite:4]
- **NewsBlur** — trainable feed reader with web UI.[cite:4]
- **Readarr web dashboards** — browser-based media reading dashboards from open-source lists.[cite:5]
- **Feed viewers in static SPA form** — client-side feed readers with JSON endpoints fit Pages and Workers.[cite:40][cite:62][cite:69]

## Notes, Wikis, and Docs

- **Docsify** — client-side docs site generator that renders Markdown in the browser.[cite:18]
- **Docusaurus** — static docs framework for React projects.[cite:18]
- **MkDocs** — static documentation generator that outputs HTML sites.[cite:18]
- **mdBook** — static book and docs generator.[cite:18]
- **VitePress** — Vite-powered docs and content framework.[cite:18]
- **VuePress** — Vue-based documentation site generator.[cite:18]
- **Slate** — API documentation generator with static output.[cite:18]
- **Sphinx docs sites** — static HTML docs from Python projects.[cite:18]
- **BookStack** — documentation/wiki platform with a web UI.[cite:4]
- **Wiki.js** — modern wiki system with a browser interface.[cite:4]
- **TiddlyWiki** — single-page wiki that can be hosted as a static site.[cite:4]
- **DokuWiki** — file-based wiki engine with a web interface.[cite:4]
- **MediaWiki** — wiki engine that can be self-hosted as a web app.[cite:4]
- **HedgeDoc** — collaborative Markdown editor and notes app.[cite:4]
- **Outline** — team knowledge base with a polished web frontend.[cite:5]

## Comments and Widgets

- **Commento** — privacy-friendly embedded comment system.[cite:4]
- **Cusdis** — lightweight embeddable comment widget.[cite:4]
- **Isso** — simple commenting server with a web UI.[cite:4]
- **Remark42** — embeddable comment engine and moderation UI.[cite:4]
- **Coral Talk** — publisher-focused comment platform.[cite:4]
- **Static guestbook widgets** — serverless guestbooks built as front ends plus functions.[cite:62][cite:69]
- **Reaction widgets** — emoji reactions and feedback widgets backed by serverless endpoints.[cite:40][cite:62][cite:69]
- **Poll widgets** — lightweight polls backed by Workers or functions.[cite:40][cite:62][cite:69]
- **Feedback forms** — contact and feedback widgets using Netlify Forms or functions.[cite:62][cite:67]
- **GitHub issue-backed comments** — static front end with GitHub API storage.[cite:63][cite:68]

## Analytics and Counters

- **Plausible** — privacy-friendly web analytics alternative.[cite:4]
- **Umami** — simple open-source website analytics.[cite:4]
- **Ackee** — Node.js analytics dashboard.[cite:4]
- **GoatCounter** — privacy-first web analytics script and dashboard.[cite:4]
- **Shynet** — modern analytics platform with a web UI.[cite:4]
- **Matomo** — full-featured open-source analytics suite.[cite:4]
- **Open Web Analytics** — PHP analytics platform.[cite:4]
- **Offen** — fair, open analytics platform.[cite:4]
- **Countly Community** — product analytics with a browser UI.[cite:4]
- **Counter** — minimal counter app from webapp lists.[cite:28]
- **GoAccess HTML reports** — log analytics generated to static HTML.[cite:4]
- **Static analytics dashboards** — generated in CI and published to Pages.[cite:68]
- **Worker-based counters** — counters backed by Cloudflare Workers examples.[cite:40]
- **Netlify function counters** — counters using Netlify Functions.[cite:62]
- **Vercel function counters** — counters using Vercel serverless functions.[cite:69]

## Monitoring and Status

- **Upptime** — GitHub Actions-based uptime monitoring published to GitHub Pages.[cite:35]
- **cState** — static status page generator.[cite:35]
- **Statusfy** — static-friendly status page system.[cite:28]
- **Cachet-style static status front ends** — status front ends paired with serverless data sources.[cite:4][cite:68]
- **Healthchecks-style dashboards** — cron monitoring dashboards with static front ends.[cite:4]
- **Uptime Kuma-style static mirrors** — static status mirrors that fetch JSON from endpoints.[cite:35]
- **Incident log pages** — markdown-generated incident pages published via Actions.[cite:68]
- **Worker health endpoints** — edge endpoints for service checks.[cite:40]
- **Netlify monitor demos** — serverless monitoring examples backed by functions.[cite:62]
- **Vercel health dashboards** — app-router and serverless monitoring patterns from Vercel examples.[cite:69]

## Forms and Surveys

- **Static survey apps** — browser-only survey UIs with serverless submission handlers.[cite:62][cite:69]
- **Contact form sites** — forms plus functions for submissions and notifications.[cite:62][cite:67]
- **Poll generators** — lightweight voting apps built as static front ends.[cite:40][cite:69]
- **Waitlist pages** — static signup pages with serverless back ends.[cite:62][cite:69]
- **Feedback collectors** — form apps that write to GitHub, Workers KV, or database services.[cite:40][cite:68]
- **Registration forms** — static event registration pages with function handlers.[cite:62][cite:69]
- **Survey dashboards** — generated dashboards from collected responses.[cite:68]
- **Webhook forms** — forms wired to external automation via serverless endpoints.[cite:40][cite:62]
- **Bug report forms** — front ends that submit to issues or APIs.[cite:63][cite:68]
- **Newsletter sign-up widgets** — static widgets with serverless submission flows.[cite:62][cite:69]

## Search and Data Tools

- **Static search portals** — front-end search UIs backed by JSON indexes.[cite:27][cite:39]
- **JSON viewers** — browser-based JSON exploration apps.[cite:67][cite:69]
- **CSV viewers** — static spreadsheet-style viewers.[cite:67][cite:69]
- **Regex playgrounds** — client-side utility apps.[cite:67][cite:69]
- **Base64 tools** — browser-only encoding/decoding utilities.[cite:67][cite:69]
- **JWT decoders** — client-side token inspection tools.[cite:67][cite:69]
- **OpenAPI viewers** — static schema viewers and docs sites.[cite:18][cite:39]
- **Data explorer SPAs** — client-rendered dashboards reading static or API data.[cite:40][cite:69]
- **Request/response inspectors** — edge-assisted debugging tools.[cite:40][cite:69]
- **Search index generators** — CI-built indexes published to Pages.[cite:68]

## Media and File Tools

- **Image galleries** — static gallery sites.[cite:27][cite:39]
- **Photo essays** — static media-story sites.[cite:27][cite:39]
- **Audio showcase sites** — browser-based audio catalogs.[cite:39]
- **Video landing pages** — static video hubs.[cite:39]
- **Paste viewers** — static read-only paste front ends.[cite:67][cite:69]
- **File metadata viewers** — static upload and inspect tools.[cite:67][cite:69]
- **Image optimization demos** — media tooling patterns from Vercel and Netlify examples.[cite:67][cite:69]
- **Asset proxy Workers** — Worker-based asset fetch and transform tools.[cite:40]
- **Upload forms** — file upload front ends with serverless handlers.[cite:62][cite:69]
- **Temporary sharing links** — link generators backed by Workers or functions.[cite:40][cite:62]

## Commerce and Business Frontends

- **Headless storefront fronts** — static storefronts consuming APIs.[cite:67][cite:69]
- **Pricing pages** — static marketing and pricing sites.[cite:39][cite:69]
- **Booking front ends** — static booking UIs with serverless actions.[cite:62][cite:69]
- **Lead capture pages** — forms and funnels with serverless submission.[cite:62][cite:67]
- **Portfolio business sites** — static business landing pages.[cite:27][cite:39]
- **Product catalog front ends** — catalog sites generated from JSON or CMS output.[cite:68][cite:69]
- **Invoice portals** — read-only invoice views with static hosting.[cite:68]
- **Directory sites** — listing sites generated in CI and served statically.[cite:27][cite:68]
- **SaaS demo portals** — auth-gated demo pages using edge middleware.[cite:63][cite:69]
- **Customer dashboards** — browser-only business dashboards backed by serverless APIs.[cite:40][cite:69]

## Developer Tools

- **API playgrounds** — browser-based API client tools.[cite:67][cite:69]
- **Webhook testers** — request inspection tools with serverless endpoints.[cite:40][cite:62]
- **Token and secret testers** — client-side encoding and decoding tools.[cite:67][cite:69]
- **Env inspector demos** — examples that display request and environment data.[cite:62][cite:69]
- **Static changelog generators** — CI-generated change log sites.[cite:68]
- **Release dashboards** — publishable build dashboards for projects.[cite:68]
- **Docs + API explorer portals** — static docs plus interactive examples.[cite:18][cite:69]
- **Request header viewers** — edge tools for inspecting requests.[cite:40][cite:69]
- **Status JSON viewers** — browser apps that display endpoint status data.[cite:40][cite:68]
- **Remote config dashboards** — static UI plus serverless config endpoints.[cite:40][cite:69]

## Web Scraping and Automation

- **Cloudflare Workers examples** — routing, fetching, and request handling patterns useful for scraping and automation.[cite:40]
- **Static web scrapers** — edge-friendly fetch-and-render apps that output JSON or HTML snapshots.[cite:40][cite:68]
- **Metadata previewers** — tools that fetch page metadata for link previews.[cite:40]
- **RSS bridge-style fetchers** — transform sites into structured feeds.[cite:4][cite:40]
- **HTML snapshot generators** — CI or worker-generated page snapshots published as static files.[cite:68]
- **Webhook automations** — static UIs plus serverless endpoints for automation flows.[cite:40][cite:62]
- **URL redirect/transform bots** — Worker or function-based automation tools.[cite:40][cite:62]
- **Search-to-JSON tasks** — crawler pipelines that publish static outputs to Pages.[cite:68]
- **Form to spreadsheet sync** — function-driven automation that writes to static data stores.[cite:62][cite:69]
- **Link preview builders** — edge fetchers that render previews for static sites.[cite:40][cite:69]

## Cloudflare Workers and Pages Examples

- **Static site demo** — Cloudflare Pages static website tutorial repo.[cite:56]
- **Static site starter** — Cloudflare static-site starter using Node tooling.[cite:59]
- **GitHub OAuth for a static site** — Worker-based OAuth pattern for a static app.[cite:63]
- **Workers examples** — official Cloudflare examples for edge apps, redirects, proxies, and APIs.[cite:40]
- **Pages GitHub integration** — Cloudflare Pages deploys directly from GitHub repositories.[cite:68]
- **Localized static site on Workers** — edge localization example.[cite:57]
- **Asset-serving Worker** — static assets plus logic on the edge.[cite:60]
- **Workers for platforms** — platform example repo for multi-tenant Worker apps.[cite:37]
- **Cloudflare recipe collections** — curated Worker recipes and projects.[cite:6][cite:15]
- **Static site on Worker routing** — HTML delivery through Workers.[cite:60]

## Netlify Examples

- **Hello World Functions** — static site plus Netlify Functions starter.[cite:62]
- **Every Color** — on-demand builder example.[cite:65]
- **Netlify examples repo** — official collection of deployable demo apps.[cite:67]
- **Static SPA starters** — example apps for static front ends.[cite:67]
- **Function-backed forms** — contact and lead capture examples.[cite:62][cite:67]
- **Build-hook demos** — CI-triggered deployment examples.[cite:67]
- **Edge function demos** — front ends paired with edge logic.[cite:67]
- **Image transformation demos** — media processing examples.[cite:67]
- **AI and RAG demos** — example apps that pair static UI with serverless logic.[cite:67]
- **Deploy-from-GitHub workflows** — Netlify’s git-based workflows for static hosting.[cite:62][cite:67]

## Vercel Examples

- **Vercel examples repo** — official starter repository for deployable apps.[cite:69]
- **API route examples** — serverless API patterns for app back ends.[cite:69]
- **Edge middleware examples** — request-handling patterns at the edge.[cite:69]
- **Static export examples** — fully static apps on Vercel.[cite:69]
- **Auth starters** — authentication-ready app examples.[cite:69]
- **Headless content starters** — content-connected front ends.[cite:69]
- **E-commerce starters** — commerce front-end examples.[cite:69]
- **Image and OG generators** — common Vercel app patterns.[cite:69]
- **Analytics dashboards** — dashboard-like starters in the examples ecosystem.[cite:69]
- **GitHub Actions deployment flow** — build in Actions and deploy to Vercel with prebuilt output.[cite:78][cite:81]

## GitHub Pages and Actions Patterns

- **Upptime** — GitHub Actions monitoring plus Pages publishing.[cite:35]
- **Static docs sites** — build in Actions and publish to Pages.[cite:68]
- **Changelog portals** — publish release notes via Actions to Pages.[cite:68]
- **Bookmark export sites** — Actions-generated bookmark pages.[cite:68]
- **Portfolio sites** — static personal sites built in CI.[cite:68]
- **Directory and list sites** — GitHub-based curated lists published as static pages.[cite:68]
- **Search index sites** — generated static search indexes.[cite:68]
- **Status mirrors** — scheduled Actions that build health mirrors.[cite:68]
- **Data dashboards** — generated dashboards from JSON or CSV artifacts.[cite:68]
- **README-driven microsites** — content-first sites generated from repository markdown.[cite:68]

## Starter Kits and Templates

- **Awesome List Site Generator** — tool for turning list content into a site.[cite:31]
- **Awesome static website services** — static hosting and service patterns.[cite:27]
- **Awesome Cloudflare Workers** — recipe collections and example patterns.[cite:6][cite:15]
- **Awesome Cloudflare** — broad Cloudflare-focused tooling list.[cite:6]
- **Netlify examples** — starter apps and demos for deployment.[cite:67]
- **Vercel examples** — starter apps and deployment patterns.[cite:69]
- **Cloudflare static site demo repo** — minimal Pages starter.[cite:56]
- **Cloudflare static site repo** — another plain starter.[cite:59]
- **Cloudflare Workers platform examples** — app scaffolds for Workers deployments.[cite:37]
- **Cloudflare Pages GitHub integration docs** — repository-based deployment workflow.[cite:68]

## The 150-item set

For quick reference, the following 150-item set is the current working list in this document:

1. LinkStack
2. Linkwarden
3. LinkAce
4. Shaarli
5. Shiori
6. Linkding
7. ArchiveBox
8. Espial
9. Pinry
10. WebCrate
11. Telescope
12. Lobsters
13. Lemmy
14. Unmark
15. Wallabag
16. Miniflux
17. FreshRSS
18. selfoss
19. CommaFeed
20. Sismics Reader
21. Kriss Feed
22. Leed
23. Stringer
24. RSS-Bridge
25. Nextcloud News
26. NewsBlur
27. Docsify
28. Docusaurus
29. MkDocs
30. mdBook
31. VitePress
32. VuePress
33. Slate
34. Sphinx docs sites
35. BookStack
36. Wiki.js
37. TiddlyWiki
38. DokuWiki
39. MediaWiki
40. HedgeDoc
41. Outline
42. Commento
43. Cusdis
44. Isso
45. Remark42
46. Coral Talk
47. Static guestbook widgets
48. Reaction widgets
49. Poll widgets
50. Feedback forms
51. GitHub issue-backed comments
52. Plausible
53. Umami
54. Ackee
55. GoatCounter
56. Shynet
57. Matomo
58. Open Web Analytics
59. Offen
60. Countly Community
61. Counter
62. GoAccess HTML reports
63. Static analytics dashboards
64. Worker-based counters
65. Netlify function counters
66. Vercel function counters
67. Upptime
68. cState
69. Statusfy
70. Cachet-style static status front ends
71. Healthchecks-style dashboards
72. Uptime Kuma-style static mirrors
73. Incident log pages
74. Worker health endpoints
75. Netlify monitor demos
76. Vercel health dashboards
77. Static survey apps
78. Contact form sites
79. Poll generators
80. Waitlist pages
81. Feedback collectors
82. Registration forms
83. Survey dashboards
84. Webhook forms
85. Bug report forms
86. Newsletter sign-up widgets
87. Static search portals
88. JSON viewers
89. CSV viewers
90. Regex playgrounds
91. Base64 tools
92. JWT decoders
93. OpenAPI viewers
94. Data explorer SPAs
95. Request/response inspectors
96. Search index generators
97. Image galleries
98. Photo essays
99. Audio showcase sites
100. Video landing pages
101. Paste viewers
102. File metadata viewers
103. Image optimization demos
104. Asset proxy Workers
105. Upload forms
106. Temporary sharing links
107. Headless storefront fronts
108. Pricing pages
109. Booking front ends
110. Lead capture pages
111. Portfolio business sites
112. Product catalog front ends
113. Invoice portals
114. Directory sites
115. SaaS demo portals
116. Customer dashboards
117. API playgrounds
118. Webhook testers
119. Token and secret testers
120. Env inspector demos
121. Static changelog generators
122. Release dashboards
123. Docs + API explorer portals
124. Request header viewers
125. Status JSON viewers
126. Remote config dashboards
127. Static web scrapers
128. Metadata previewers
129. RSS bridge-style fetchers
130. HTML snapshot generators
131. Webhook automations
132. URL redirect/transform bots
133. Search-to-JSON tasks
134. Form to spreadsheet sync
135. Link preview builders
136. Static site demo
137. Static site starter
138. GitHub OAuth for a static site
139. Workers examples
140. Pages GitHub integration
141. Localized static site on Workers
142. Asset-serving Worker
143. Workers for platforms
144. Cloudflare recipe collections
145. Static site on Worker routing
146. Hello World Functions
147. Every Color
148. Netlify examples repo
149. Vercel examples repo
150. Upptime-style GitHub Actions sites

## Link-in-Bio and Bookmark Tools

- **LinkStack** — open source link-in-bio page generator that can be adapted to static hosting when built as a front-end site.[cite:67]
- **linkyee** — open source Linktree-style static page generator suitable for GitHub Pages and other static hosts.[cite:18]
- **Astral** — browser-based GitHub stars organizer with a web UI that can be fronted statically with API access.[cite:28]
- **WebCrate** — link collection interface with a front-end heavy design suitable for static-first adaptation.[cite:36]
- **Gitfolio** — portfolio and project listing app generated from GitHub data as a static site.[cite:18]
- **Homer** — simple application dashboard SPA that is commonly hosted as static files.[cite:35]
- **Dashy** — configurable dashboard and links homepage with a front-end-heavy deployment model.[cite:35]
- **Flame** — start page and bookmark dashboard with a web UI that can be statically served if configured appropriately.[cite:35]
- **Heimdall-inspired static dashboards** — static dashboard clones and templates from self-hosted link dashboards fit Pages-style deployment when no server state is required.[cite:35]
- **Personal startpage templates** — many static dashboard repos in curated static-web-app lists are deployable on Pages platforms.[cite:27][cite:39]

## Documentation and Knowledge Sites

- **Docsify** — client-side docs site that renders Markdown in the browser, making it a strong fit for static hosts.[cite:18]
- **Docusaurus** — documentation framework that builds static assets for Vercel, Netlify, GitHub Pages, and Cloudflare Pages.[cite:18][cite:69]
- **MkDocs** — static documentation generator that outputs deployable HTML assets.[cite:18]
- **mdBook** — static “book” generator for documentation and manuals.[cite:18]
- **VitePress** — Vite-powered static documentation framework.[cite:18]
- **VuePress** — Vue-based static docs and content site generator.[cite:18]
- **Slate** — API documentation generator producing static output.[cite:18]
- **Flatdoc** — client-side Markdown-to-docs renderer suitable for static hosting.[cite:18]
- **GitBook-style open tooling** — Git-and-Markdown documentation sites generally fit Pages deployment when output is static.[cite:18][cite:39]
- **Quarto websites** — Quarto can generate static sites from Markdown, notebooks, and documents.[cite:18]

## Dashboards and Homepages

- **Homer** — static application dashboard for organizing self-hosted links and services.[cite:35]
- **Dashy** — feature-rich home dashboard with widgets and configurable cards.[cite:35]
- **Glance-style static dashboards** — front-end dashboards with API fetches can be deployed as static apps on Pages platforms.[cite:35]
- **Cloudflare static site demo** — example dashboard/site pattern deployable directly to Cloudflare Pages.[cite:56]
- **Cloudflare static site starter** — plain static app starter with NPM build and Pages deployment.[cite:59]
- **Localized static site on Workers** — static app pattern with edge request handling.[cite:57]
- **Static PWA dashboards** — PWAs from Netlify and Vercel example collections fit these hosts by design.[cite:67][cite:69]
- **Simple profile dashboards** — profile and team pages built as SPAs fit GitHub Pages or Pages hosts.[cite:39]
- **Admin-lite dashboards** — static admin panels with API integrations are common in Vercel/Netlify examples.[cite:67][cite:69]
- **JSON-powered status dashboards** — dashboards fed by JSON endpoints work well on static and edge platforms.[cite:6][cite:40]

## Status Pages and Monitoring

- **Upptime** — uptime monitor that uses GitHub Actions and GitHub Pages to publish a static status site.[cite:35]
- **cState** — static status page generator suitable for Pages and static deploy platforms.[cite:35]
- **Statusfy** — status page system with static-site output model.[cite:28]
- **GitHub Actions status site patterns** — repos that check endpoints on a schedule and publish JSON/HTML to Pages fit your constraints.[cite:68]
- **Workers-based status endpoints** — Cloudflare Worker examples can provide edge status APIs consumed by static pages.[cite:40]
- **Netlify function health pages** — serverless functions can back minimal monitoring UIs on Netlify.[cite:62][cite:65]
- **Vercel edge health dashboards** — Vercel examples include edge and function-backed app patterns suitable for simple monitoring sites.[cite:69]
- **Static incident log sites** — markdown-driven incident sites work on GitHub Pages and Cloudflare Pages.[cite:27][cite:39]
- **JSON uptime boards** — client-rendered uptime dashboards fetching JSON from Actions or Workers fit all four platforms.[cite:40][cite:68]
- **Synthetic check frontends** — front-end interfaces for uptime check results can be deployed statically while checks run in Actions or Workers.[cite:40][cite:68]

## Analytics and Counters

- **Counter** — simple web counter app from production-ready web app lists, useful as a lightweight embeddable app.[cite:28]
- **Ackee-style static dashboards** — front-end analytics dashboards can be adapted if the collection endpoint runs in serverless functions.[cite:67]
- **GoatCounter-style client counters** — lightweight trackers with minimal scripts fit static frontends; worker-based forks are the safest match for your constraints.[cite:6][cite:40]
- **Cloudflare Worker analytics snippets** — Workers examples include small edge scripts for logging and aggregation.[cite:40]
- **Pageview JSON dashboards** — static dashboards that read analytics JSON from KV, D1, or generated artifacts match Pages/Workers architecture.[cite:40][cite:68]
- **Netlify function counters** — examples of function-backed endpoints can power simple analytics or counters.[cite:62]
- **Vercel function counters** — Vercel example apps can expose API routes for lightweight counting and stats.[cite:69]
- **Static analytics report viewers** — HTML dashboards generated in CI and published to Pages fit GitHub Actions workflows.[cite:68]
- **Cloudflare static plus Worker logging** — Pages with Worker logic are supported by Cloudflare’s docs and examples.[cite:60][cite:68]
- **Privacy-focused script dashboards** — front-end analytics widgets that store aggregate data in serverless data stores fit edge platforms.[cite:40]

## Comments and Community Widgets

- **Cusdis-style embeddable comment widgets** — embeddable front ends with lightweight APIs are a good fit for edge/serverless deployment patterns.[cite:67][cite:69]
- **Static guestbook apps** — guestbooks backed by serverless functions are a common Netlify/Vercel pattern.[cite:62][cite:69]
- **Cloudflare Worker comment APIs** — Worker examples can support form submission and lightweight discussion widgets.[cite:40]
- **GitHub Issue-backed comment widgets** — front-end comments stored in GitHub issues fit static hosting plus GitHub API flows.[cite:63][cite:68]
- **Static reaction widgets** — emoji reaction widgets with function or Worker backends fit Pages platforms.[cite:40][cite:62]
- **Feedback boards with serverless backends** — SPA feedback tools fit Netlify and Vercel patterns.[cite:67][cite:69]
- **Simple poll widgets** — lightweight polling apps work as static front ends plus function endpoints.[cite:62][cite:69]
- **Form-based discussion boards** — edge/serverless CRUD APIs can back simple community widgets on Cloudflare Workers.[cite:40]
- **Client-rendered Q&A boards** — static SPAs backed by APIs or GitHub data meet the hosting constraint.[cite:68][cite:69]
- **Static changelog comment sections** — changelog pages with serverless feedback forms are easy fits for Netlify or Vercel.[cite:62][cite:69]

## API, OAuth, and Auth Examples

- **GitHub OAuth for a static site using Cloudflare Workers** — Simon Willison’s pattern shows static site auth via Workers.[cite:63]
- **Cloudflare Workers OAuth patterns** — Workers examples support auth flows and request handling at the edge.[cite:40]
- **Vercel auth example apps** — Vercel examples include starter apps with auth-ready deployment models.[cite:69]
- **Netlify identity-integrated frontends** — Netlify example repos demonstrate static front ends paired with serverless auth features.[cite:67]
- **JWT edge middleware examples** — Workers and Vercel edge patterns support lightweight auth gates.[cite:40][cite:69]
- **Sessionless OAuth callbacks** — static frontends with callback handlers in Workers or functions fit your platforms.[cite:63][cite:62]
- **Access-token-in-browser tools** — browser apps that store tokens client-side are well aligned with static hosting.[cite:63]
- **API proxy Workers** — Worker-based API proxy projects let a static app safely call third-party APIs.[cite:6][cite:40]
- **Signed URL generators** — serverless endpoints for signed URLs fit Netlify/Vercel functions or Workers.[cite:62][cite:69]
- **Request inspection APIs** — edge/serverless examples for handling auth headers and sessions fit these hosts.[cite:40][cite:69]

## Forms, Functions, and Edge Apps

- **Netlify hello-world functions** — canonical starter showing a static site paired with serverless functions.[cite:62]
- **Netlify every-color** — dynamic page generation example using On-demand Builders on Netlify.[cite:65]
- **Cloudflare Workers examples** — official examples for forms, redirects, routing, caching, and APIs.[cite:40]
- **Cloudflare Pages static + functions patterns** — Git-integrated Pages projects can include edge logic.[cite:68]
- **Vercel starter apps** — Vercel’s example gallery includes deployable starter apps and patterns.[cite:69]
- **Form submission apps** — static forms with serverless processing fit all requested platforms except pure GitHub Pages, where Actions can supplement workflows.[cite:62][cite:68][cite:69]
- **Webhook receiver apps** — edge/serverless request handlers are natural fits for Workers and Vercel.[cite:40][cite:69]
- **Redirect managers** — edge logic for redirects and rewrites is supported in Workers and Netlify/Vercel configs.[cite:40][cite:62][cite:69]
- **URL preview generators** — static front ends backed by edge scraping or metadata APIs fit Workers and functions.[cite:40]
- **Serverless contact apps** — form endpoints with email notifications fit Netlify Functions or Vercel functions.[cite:62][cite:69]

## Readers, Feed, and Content Utilities

- **RSS-to-JSON frontends** — static readers backed by a Worker or function that normalizes feeds fit your platforms.[cite:40][cite:62]
- **Reading-list SPAs** — client-side saved reading lists with browser or KV storage fit static deployment.[cite:39][cite:40]
- **Markdown readers** — browser-based Markdown readers are purely static apps and fit all four platforms.[cite:27][cite:39]
- **EPUB/Web readers** — front-end reader apps that run in-browser work well on Pages hosts.[cite:39][cite:67]
- **JSON feed viewers** — static apps reading feed JSON from APIs or Workers fit this architecture.[cite:40]
- **Public bookmark viewers** — read-only bookmark pages generated in CI and published to Pages are a strong GitHub Actions fit.[cite:68]
- **Changelog readers** — markdown or JSON changelog viewers are simple static web apps.[cite:27][cite:39]
- **Release-note portals** — generated release-note sites fit GitHub Actions and Pages deployment.[cite:68]
- **Static newsletter archives** — content archives generated in CI are natural Pages projects.[cite:68]
- **Open graph preview readers** — client apps that render OG metadata via edge APIs fit Workers and Vercel.[cite:40][cite:69]

## Search, Data, and JSON Tools

- **Client-side search portals** — Lunr/mini-search static search UIs fit Pages deployment.[cite:27][cite:39]
- **JSON explorer apps** — browser-only JSON viewers are pure static web apps.[cite:39][cite:67]
- **CSV viewer SPAs** — client-side spreadsheet viewers fit GitHub Pages and other static hosts.[cite:39]
- **Regex playgrounds** — front-end-only tools work perfectly on Pages hosts.[cite:67][cite:69]
- **Base64 / JWT / diff tools** — browser utility apps are strong fits for all four platforms.[cite:67][cite:69]
- **OpenAPI viewer sites** — static docs and schema viewers fit Pages deployment.[cite:18][cite:39]
- **Search UIs backed by static JSON indexes** — generated indexes published with the app are ideal for GitHub Actions + Pages.[cite:68]
- **Cloudflare Worker search APIs** — Workers examples support lightweight query processing for static front ends.[cite:40]
- **Vercel API route data tools** — example apps with API routes can back data explorers and inspectors.[cite:69]
- **Netlify function data transformers** — functions can normalize JSON or CSV for static front ends.[cite:62]

## Media, File, and Paste Tools

- **Static image galleries** — gallery apps that build to static assets fit Pages platforms.[cite:27][cite:39]
- **Photo essay sites** — static media story apps are direct fits for Netlify, Vercel, GitHub Pages, and Cloudflare Pages.[cite:18][cite:27]
- **Audio showcase sites** — static media catalogs work well with edge-hosted assets.[cite:27]
- **Video landing hubs** — static front ends for embedded video libraries fit all requested platforms.[cite:39]
- **Paste viewers** — read-only paste front ends backed by JSON or GitHub storage fit Pages-style hosting.[cite:68]
- **Temporary upload demos** — serverless upload handlers work in Netlify/Vercel functions or Workers.[cite:40][cite:62][cite:69]
- **File metadata viewers** — browser-only file inspection tools are ideal static apps.[cite:67][cite:69]
- **Image optimization demos** — Vercel and Netlify example collections include image-focused app patterns.[cite:67][cite:69]
- **Asset proxy Workers** — Worker scripts can fetch and transform media or headers for static front ends.[cite:40]
- **Cloudflare asset-serving examples** — Workers can directly serve assets and custom logic together.[cite:60]

## Commerce and Business Frontends

- **Static storefront fronts** — Jamstack storefronts that call APIs are classic Netlify/Vercel deployment targets.[cite:67][cite:69]
- **Headless commerce demos** — front-end commerce starters in Vercel examples fit your platforms when paired with external APIs.[cite:69]
- **Pricing page generators** — static marketing and pricing sites fit all four requested hosts.[cite:39][cite:69]
- **Booking frontends** — static booking UIs with function-backed submissions fit serverless deployment.[cite:62][cite:69]
- **Portfolio business sites** — client-rendered business sites are strong fits for Pages hosts.[cite:27][cite:39]
- **Lead capture apps** — Netlify Forms or function-backed forms support lead-gen apps.[cite:62][cite:67]
- **SaaS landing pages with auth gates** — edge auth patterns make protected marketing/demo apps possible on Workers/Vercel.[cite:63][cite:69]
- **Product catalogs from JSON** — client-side product catalogs generated at build time work great on GitHub Pages.[cite:68]
- **Invoice viewers** — read-only invoice portals generated as static sites fit Pages deployment.[cite:68]
- **Directory sites** — directory/listing websites generated from YAML/JSON fit serverless-friendly hosting.[cite:27][cite:39]

## Developer Utilities

- **API playground front ends** — browser-based API clients fit static deployment.[cite:67][cite:69]
- **Request debugger UIs** — front-end request inspectors plus edge/serverless endpoints fit Workers and Vercel.[cite:40][cite:69]
- **Webhook testers** — serverless endpoints plus static UIs are ideal examples for these platforms.[cite:40][cite:62]
- **Token decoders** — JWT and encoding tools are pure client-side apps.[cite:67][cite:69]
- **Cron dashboards backed by Actions** — scheduled GitHub Actions can generate artifacts and static dashboards.[cite:68]
- **Release dashboards** — CI-generated release dashboards fit Pages nicely.[cite:68]
- **Env inspector demos** — serverless function examples commonly display runtime env and request data.[cite:62][cite:69]
- **Request header viewers** — Cloudflare Workers and Vercel examples readily support this pattern.[cite:40][cite:69]
- **Static changelog generators** — generated project changelogs work well on GitHub Pages.[cite:68]
- **Developer portal templates** — docs + API explorer + auth frontends from example galleries fit these hosts.[cite:67][cite:69]

## Cloudflare Workers and Pages Examples

- **Static HTML/JSON generator Worker** — explicitly highlighted in awesome Cloudflare collections.[cite:6]
- **Request rewriting Worker** — official Workers examples cover routing and request transforms.[cite:40]
- **Redirect Worker** — edge redirects are a standard Worker use case.[cite:40]
- **Cache API Worker** — Workers examples show cached responses for fast edge apps.[cite:40]
- **CORS proxy Worker** — a common Worker pattern for browser-facing apps.[cite:40]
- **Localization Worker** — sample static page with localization at the edge.[cite:57]
- **OAuth callback Worker** — static site auth with GitHub OAuth on Workers.[cite:63]
- **Asset-serving Worker** — Workers can host static assets directly with optional code.[cite:60]
- **Pages + GitHub integration project** — Cloudflare Pages automatically deploys from GitHub repos.[cite:68]
- **Cloudflare static-site starter repo** — GitHub repo showing the whole static Pages workflow.[cite:56]

## Netlify Examples

- **Hello World Functions** — baseline static site + function example from Netlify.[cite:62]
- **Every Color** — dynamic page generation with On-demand Builders.[cite:65]
- **Forms starter** — Netlify examples collection includes forms-oriented demos.[cite:67]
- **AI summary site** — example collection includes application-style deployable demos.[cite:67]
- **RAG app example** — app-style example in Netlify’s official examples collection.[cite:67]
- **Form analyzer example** — serverless processing pattern for submitted content.[cite:67]
- **Image transformation demos** — Netlify example collection includes media-processing patterns.[cite:67]
- **Functions boilerplates** — reusable serverless boilerplates for Netlify deployment.[cite:62][cite:67]
- **Static SPA starters** — Netlify examples include SPA deployment references.[cite:67]
- **Deploy-button-ready repos** — many Netlify examples are one-click deployable from GitHub.[cite:62][cite:65]

## Vercel Examples

- **Vercel starter apps** — official examples are designed to be deployed directly on Vercel.[cite:69]
- **Edge middleware examples** — Vercel examples include edge-ready request handling patterns.[cite:69]
- **API route examples** — Vercel examples include API-backed front ends.[cite:69]
- **Static export examples** — Vercel docs and examples support static app deployment models.[cite:69]
- **Auth-ready starters** — Vercel examples include auth and protected-route starters.[cite:69]
- **Image and OG examples** — common Vercel patterns include image and metadata generation apps.[cite:69]
- **CMS-connected frontends** — starter apps for headless content are common in the examples gallery.[cite:69]
- **E-commerce starters** — Vercel showcases commerce front ends suitable for serverless deployment.[cite:69]
- **Analytics and telemetry demos** — example apps include lightweight dashboard and stats patterns.[cite:69]
- **Deploy-from-GitHub workflows** — Vercel supports automated deployment from GitHub or via Actions.[cite:64][cite:69]

## GitHub Actions and Pages Projects

- **Upptime** — GitHub Actions checks and GitHub Pages publishing workflow.[cite:35]
- **Static documentation repos** — Pages sites generated in CI are first-class GitHub Actions use cases.[cite:68]
- **Release note sites** — actions can build and publish release notes to Pages.[cite:68]
- **Changelog sites** — markdown changelog portals fit Actions + Pages publishing.[cite:68]
- **JSON dashboard sites** — scheduled Actions can refresh data and publish dashboards.[cite:68]
- **Bookmark export sites** — Actions can build public bookmark pages from source files or APIs.[cite:68]
- **Portfolio deployment workflows** — static portfolios are standard Pages + Actions projects.[cite:68]
- **Directory and awesome-list sites** — generated index pages from YAML/JSON are a natural fit for Actions.[cite:68]
- **Search index generation sites** — build a Lunr index in Actions and publish to Pages.[cite:68]
- **Status mirrors** — Actions can fetch external service health and publish a static mirror site.[cite:68]

## Starter Templates and Patterns

- **Awesome List Site Generator** — tool for turning awesome-list content into a site.[cite:31]
- **Static web app examples collection** — Azure Static Web Apps resource list is useful because the same app types are generally static/app-plus-functions patterns.[cite:39]
- **Awesome static website services** — curated collection of static web patterns and services.[cite:27]
- **Awesome Cloudflare Workers** — curated Worker recipes, starters, and utilities.[cite:6][cite:15]
- **Cloudflare Workers examples** — official source for edge app patterns.[cite:40]
- **Netlify examples** — official repository of deployable static-plus-functions app demos.[cite:67]
- **Vercel examples** — official repository of deployable app demos and starter solutions.[cite:69]
- **Cloudflare static-site tutorial repo** — starter for plain static sites on Pages.[cite:56]
- **Cloudflare static-site repo with NPM scripts** — another plain static app starter.[cite:59]
- **GitHub-integrated Pages projects** — Cloudflare Pages docs explicitly support GitHub-integrated deployments.[cite:68]

## How to Extend This List

The safest way to expand this list without violating your constraint is to keep only projects that clearly match one of these deployment models:[cite:60][cite:62][cite:68][cite:69]

1. A repo that builds to static files and can be published to Pages-style hosting.
2. A repo documented as a Netlify Functions, Vercel, or Cloudflare Workers example.
3. A GitHub Actions workflow that publishes a generated site to GitHub Pages.
4. A front-end-only web app with no requirement for a persistent application server.
5. Add only projects that can genuinely run as static, client-rendered, or edge/serverless apps on the platforms named here.[cite:40][cite:62][cite:68][cite:69]


Projects that require long-running PHP, Python, Ruby, Java, PostgreSQL, MySQL, Redis, Docker-only hosting, or a VPS should be excluded unless there is a real static-export or serverless version documented by the project itself.[cite:60][cite:61][cite:68][cite:69]When a project needs a persistent app server or a database server, exclude it unless the project itself documents a real static-export path or a Worker/serverless deployment model.[cite:60][cite:61][cite:68][cite:69]

