## 📌 Replacing Bookmarks \& Read-Later
1. **`katydecorah/bookmark-action` + custom `/links` page** — trigger via `workflow_dispatch` with a URL input; the action fetches title, description, and OGP image and appends to `data/links.yaml`; render as a filterable Hugo/Astro page[^4_1]
2. **Pinboard full archive sync** — cron fetch of `https://api.pinboard.in/v1/posts/all?format=json` nightly; diff against previous export, write new entries to `data/bookmarks/YYYY-MM-DD.json` for a dated linkroll[^4_2]
3. **Raindrop.io collection export** — Raindrop's API `GET /raindrops/{collectionId}` with a Bearer token; write tagged, sorted bookmarks to JSON for a `/reading-list` subpage[^4_3]
4. **Hoarder/Karakeep webhook trigger** — self-hosted Hoarder (Pocket replacement) exposes a REST API; a `workflow_dispatch` step can pull all tagged-`publish` bookmarks and write them to your repo[^4_4]
5. **Wayback archiving on save** — when new bookmarks are committed, use `caltechlibrary/waystation` to submit each URL to the Wayback Machine as a preservation step[^4_5]
6. **Read-later to `/now` pipeline** — fetch your Instapaper "archive" list via their API and write recently finished articles to a `data/reading.json` powering a `/now` page "recently read" section[^4_3]
7. **ArchiveBox trigger action** — POST a URL to a self-hosted ArchiveBox instance via its REST API from a GitHub Action when a bookmark is added; keeps local snapshots[^4_6]
## 📡 RSS Reader Replacement \& Feed Curation
8. **Multi-feed aggregator** — fetch 10–20 curated RSS feeds in one Python step with `feedparser`, merge, deduplicate by `id`/`link`, sort by date, write to `data/feeds.json`; render as a `/reading` firehose page[^4_7]
9. **Feed-to-newsletter digest** — parse RSS feeds daily, filter to last 24h, build an HTML digest, send via SendGrid API — all in one scheduled action[^4_8]
10. **Saved-items export from Feedbin/NewsBlur** — both have REST APIs; a nightly action can pull starred/saved items and append them to a `data/saved-articles.json` for a `/clippings` page[^4_9]
11. **Planet-style topic aggregator** — define a `feeds.yaml` with categories, fetch all feeds, bucket by category, write to `data/planet.json`; render as `/links/tech`, `/links/art`, etc.[^4_10]
12. **New-item diff alert → Mastodon** — pair feed monitoring with `nhoizey/github-action-feed-to-mastodon`: only post to Mastodon when genuinely new items appear in your tracked feeds[^4_11]
13. **YouTube channel watchlist** — define a `channels.yaml` list of creators; fetch latest video per channel via YouTube Data API v3, write to `data/watching.json` for a `/following` page[^4_12]
## 🔁 POSSE \& Syndication
14. **`punchagan/share-post-action`** — detects new Hugo/Astro content files on push, extracts frontmatter title + URL, posts an announcement to Mastodon and/or Twitter automatically[^4_13]
15. **Bluesky auto-post on deploy** — after a successful deploy, hit `app.bsky.social/xrpc/com.atproto.repo.createRecord` with a `app.bsky.feed.post` lexicon record; no action needed, pure `curl` in a run step[^4_14]
16. **POSSE to Mastodon via Micropub** — `voxpelli/webpage-micropub-to-github` receives a Micropub POST, commits the note to your repo, triggers a build — full own-your-content loop[^4_15]
17. **Cross-post to LinkedIn** — LinkedIn UGC Posts API `POST /ugcPosts` with OAuth; add as a post-deploy step triggered only on posts with `syndicate: linkedin` in frontmatter[^4_16]
18. **Syndication link backfill** — after POSSE posts are created, fetch the syndicated post URL (e.g., Mastodon status ID) and write it back to the source content file's frontmatter as `syndication_url:`[^4_16]
## 🖼 OG Images \& Metadata
19. **Per-post OG image generation** — `BoyWithSilverWings/generate-og-image` runs on PR, reads frontmatter `title` and `description`, renders a screenshot via headless Chromium, commits the PNG to `static/og/`[^4_17]
20. **Satori-based OG cards** — use `vercel/og` (Satori) in a Node.js script to generate JSX-to-PNG cards per post; run in a matrix job over all new content files[^4_18]
21. **Social card commit action** — `testdouble/real-og` processes your markdown files and writes social card images directly to the repo alongside each post[^4_19]
22. **Auto `<meta>` tag injection** — a post-build Python script reads `data/posts.json` and injects per-page OG tags into the built HTML output before deploy[^4_18]
## 🔍 Search
23. **Pagefind index on deploy** — run `npx pagefind --site public` as a post-build step; the index is committed to the repo and served as a static file alongside your site — zero backend needed[^4_20]
24. **Algolia crawler trigger** — `algolia/algoliasearch-netlify` or the Algolia Crawler GitHub Action re-indexes your site after every deploy[^4_21]
25. **`hugo-algolia` index generation** — run `hugo-algolia -s` in a build step to generate `algolia.json` from your content, then `POST` it to Algolia's index API[^4_22]
26. **Fuse.js index builder** — a Node.js script in a `post-build` step serializes your Hugo/Astro content to a `search-index.json` for client-side Fuse.js fuzzy search[^4_20]
## 🔗 Link Health \& Site Reliability
27. **Broken link crawler** — `ScholliYT/Broken-Links-Crawler-Action` crawls your live site, flags 404s, and opens a GitHub Issue with the broken URL and the page it was found on[^4_23]
28. **`ruzickap/action-my-broken-link-checker`** — uses `muffet` to crawl and check every internal and external link; run weekly on a cron, fail the workflow if any return 4xx/5xx[^4_24]
29. **Broken link fixer** — pair the checker with a Python script that reads the output, cross-references the Wayback Machine availability API, and suggests archive.org replacements for dead links[^4_25]
30. **Wayback submit on deploy** — `caltechlibrary/waystation` submits your GitHub Pages URL to the Wayback Machine on every tagged release for archival insurance[^4_5]
31. **Uptime monitor → status page** — a scheduled `curl` to your own domain; write response time and status code to `data/uptime.json`; render a minimal `/status` page updated every 5 minutes[^4_26]
## 📸 Photo Gallery \& Media
32. **Static photo gallery via `fussel`** — `cbenning/fussel` takes a directory of photos from your repo and generates a full mobile-friendly static gallery; run as a build step[^4_27]
33. **EXIF metadata extractor** — run `exiftool -json ./photos/*.jpg` in a workflow step and write the output to `data/photos.json` (camera, lens, location, date) for a photo metadata page[^4_28]
34. **Cloudinary sync action** — upload new images committed to a `/photos` directory to Cloudinary via their Upload API; write back the CDN URLs + auto-generated tags to a data file[^4_27]
35. **Unsplash cross-post** — use the Unsplash API to upload your own published photos and syndicate URLs back into your site's photo data[^4_27]
## 📝 Content \& Writing Tooling
36. **`release-please` changelog page** — `googleapis/release-please` generates a structured `CHANGELOG.md` from conventional commits; add a build step that converts it to an HTML `/changelog` subpage[^4_29]
37. **Git log to `/colophon`** — a `git log --pretty=format` command in a post-build step generates a `data/commits.json` of recent site changes; power a public `/colophon` showing your site's edit history[^4_30]
38. **Spellcheck on PR** — `rojopolis/spellcheck-github-actions` runs `pyspelling` over all `.md` content files on every PR; comments inline on misspelled words[^4_31]
39. **Reading time injector** — a Python step that reads all content `.md` files, calculates word count / 200, and writes `reading_time:` back into the frontmatter before build[^4_32]
40. **Content freshness checker** — a scheduled action that finds pages with `lastmod:` older than 1 year and opens a GitHub Issue listing them for a review pass[^4_31]
## 🗂 Personal Data \& /Now Pages
41. **`/now` page auto-updater** — a single scheduled workflow aggregates Last.fm weekly artists + Trakt recent watches + Strava latest run + current weather into `data/now.json`; your `/now` page renders from one source of truth[^4_33]
42. **Personal CRM reminders** — store contacts in a `contacts.yaml` (name, last contact date, cadence); a cron action diffs today's date and opens a GitHub Issue when someone is overdue for a message[^4_34]
43. **Journal word count tracker** — a scheduled action counts words in all `content/journal/*.md` files, appends a daily total to `data/wordcount.csv`, and renders a sparkline chart on your `/about` page[^4_32]
44. **Expense tracker from CSV** — commit a monthly CSV export from your bank; a Python step categorizes rows with keyword matching and writes `data/expenses.json` for a private `/finances` page[^4_29]
45. **Habit tracker** — a `workflow_dispatch` with a `habit` input (e.g., "ran", "meditated") appends a timestamped entry to `data/habits.json`; a public `/habits` page shows streaks[^4_26]
## 🌐 Mini Web Apps as Subpages
46. **`/uses` page auto-generator** — store your gear/software in `data/uses.yaml`; a scheduled action fetches current prices/versions from APIs (Wirecutter, Amazon Product Advertising) and refreshes the data[^4_32]
47. **`/colophon` tech stack page** — a build step reads `package.json`, `go.mod`, and `requirements.txt` and writes `data/stack.json` — a living list of every tool your site uses with current versions[^4_30]
48. **Public `roadmap.md` → `/roadmap` page** — a GitHub Projects GraphQL query fetches your project board items and their statuses; render as a public `/roadmap` page updated on every push[^4_31]
49. **`/stats` analytics page** — aggregate Cloudflare Analytics API data (no JS on visitors, privacy-respecting) into `data/stats.json` on a daily cron; render page views, top referrers, top pages[^4_26]
50. **`/reply` webmention feed** — `webmention.io` API `GET /api/mentions.json?domain={your-domain}&token={token}` fetches all received webmentions; write to `data/webmentions.json`, render as a public `/replies` stream[^4_35][^4_36]
[^4_1]: https://katydecorah.com/code/bookmark-action/
[^4_2]: https://gist.github.com/philgruneich/b17732fe8eb828be8328
[^4_3]: https://talk.macpowerusers.com/t/so-with-pocket-shutting-down-what-read-it-later-service-do-you-recommend/40772
[^4_4]: https://github.com/topics/read-it-later
[^4_5]: https://github.com/caltechlibrary/waystation
[^4_6]: https://github.com/archivebox/archivebox
[^4_7]: https://github.com/minhhungit/github-action-rss-crawler
[^4_8]: https://pybit.es/articles/how-to-send-email-notifications-using-sendgrid-and-github-actions/
[^4_9]: https://github.com/marketplace/actions/rss-monitor-action
[^4_10]: https://ricard.dev/how-to-create-a-news-digest-using-rss-and-github-actions/
[^4_11]: https://github.com/marketplace/actions/any-feed-to-mastodon
[^4_12]: https://blog.jakelee.co.uk/fetching-youtube-metadata-in-github-actions-and-persisting/
[^4_13]: https://github.com/punchagan/share-post-action
[^4_14]: https://github.com/59de44955ebd/twitter-to-bsky
[^4_15]: https://github.com/voxpelli/webpage-micropub-to-github
[^4_16]: https://www.kevinrkuhl.com/blog/2025/12/posse-for-hugo-pt1/
[^4_17]: https://github.com/marketplace/actions/generate-og-image
[^4_18]: https://vercel.com/blog/introducing-vercel-og-image-generation-fast-dynamic-social-card-images
[^4_19]: https://github.com/testdouble/real-og
[^4_20]: https://www.thedevopscat.co.uk/2023/01/automating-algolia-search-with-azure-static-web-app/
[^4_21]: https://github.com/marketplace/actions/algolia-crawler-automatic-crawl
[^4_22]: https://github.com/replicatedhq/hugo-algolia
[^4_23]: https://github.com/marketplace/actions/broken-links-crawler
[^4_24]: https://github.com/ruzickap/action-my-broken-link-checker
[^4_25]: https://github.com/marketplace/actions/wayback-machine-query
[^4_26]: https://github.com/gethomepage/homepage/discussions/5206
[^4_27]: https://github.com/cbenning/fussel
[^4_28]: https://discuss.pixls.us/t/static-web-gallery-generator/51302
[^4_29]: https://oneuptime.com/blog/post/2025-12-20-changelog-generation-github-actions/view
[^4_30]: https://github.com/marketplace/actions/generate-release-changelog
[^4_31]: https://dev.to/davorg/updating-github-pages-using-github-actions-395a
[^4_32]: https://dev.to/davorg/github-actions-for-semi-static-web-sites-597g
[^4_33]: https://github.com/LekoArts/annum
[^4_34]: https://github.com/lorey/personal-crm
[^4_35]: https://github.com/RiverVanRain/indieweb
[^4_36]: https://chringel.dev/2022/07/indiewebify-me-and-dont-forget-my-webmentions/
[^4_37]: https://github.com/joshdick/microstat
[^4_38]: https://github.com/indieweb/indieweb-endpoints-ruby
[^4_39]: https://dev.to/rosgluk/building-the-indieweb-a-technical-guide-for-developers-4f79
[^4_40]: https://github.com/indieweb
[^4_41]: https://selfh.st/alternatives/read-later/
[^4_42]: https://github.com/monicahq/monica
[^4_43]: https://noti.st/srushe/7D5URN
[^4_44]: https://www.reddit.com/r/selfhosted/comments/1ktgzpf/pocket_is_shutting_down_here_are_5_open_source/
[^4_45]: https://github.com/jdanielnd/crm-cli
[^4_46]: https://github.com/codersforcauses/og-social-cards
[^4_47]: https://github.com/marketplace/actions/open-graph-social-cards
[^4_48]: https://dev.to/jasmin/create-social-cards-from-github-action-5be8
[^4_49]: https://oneuptime.com/blog/post/2026-01-26-send-notifications-github-actions/view
[^4_50]: https://github.com/sveltejs/kit/discussions/8299
[^4_51]: https://github.com/sangaline/wayback-machine-scraper
[^4_52]: https://www.reddit.com/r/selfhosted/comments/11mtth2/wayback_your_personal_selfhosted_web_archive/
[^4_53]: https://dev.to/jamiu_cloud/how-i-deployed-my-static-website-using-github-actions-52f5
[^4_54]: https://github.com/marketplace/actions/broken-link-checker-action
[^4_55]: https://www.kenmuse.com/blog/building-github-actions-runner-images-with-an-action-archive-cache/
[^4_56]: https://github.com/marketplace/actions/create-release-notes-from-changelog
## 🛠 Developer Utilities
1. **Regex Tester** — live regex match/replace with flags, match groups highlighted, test strings saved to `localStorage`; use `slevithan/regex-colorizer` for syntax highlighting[^5_1]
2. **JSON Viewer / Formatter** — paste or upload JSON, pretty-print, collapse/expand nodes, query with JSONPath; `jsonhero`-style but self-hosted in one HTML file[^5_2]
3. **Markdown Editor + Preview** — split-pane editor using `marked.js` + `EasyMDE`; export to HTML or raw `.md`; everything runs in-browser, zero uploads[^5_3][^5_4]
4. **Mermaid Diagram Renderer** — textarea input → live Mermaid diagram render; export as SVG or PNG via `mermaid.js` CDN[^5_3]
5. **Base64 / URL / HTML Encoder-Decoder** — tabbed interface for encode/decode operations; copy-to-clipboard on output; pure vanilla JS[^5_5]
6. **JWT Decoder** — paste a JWT token, decode header + payload + signature display; validates expiry; never leaves the browser[^5_5]
7. **cURL Command Builder** — form inputs for method, headers, body, auth; generates a formatted `curl` command ready to copy[^5_5]
8. **Cron Expression Explainer** — type a cron string, get a plain-English explanation + next 10 run times using `cronstrue.js` CDN[^5_5]
9. **Color Palette Generator** — input a hex or pick from a wheel; outputs complementary, analogous, triadic, and OKLCH shades with copy buttons; no server needed[^5_6][^5_7]
10. **CSS Gradient Builder** — visual stops editor, generates `linear-gradient` / `radial-gradient` / `conic-gradient` CSS; live preview background[^5_5]
## 📝 Writing \& Text Tools
11. **Readability Scorer** — paste text, get Flesch-Kincaid, Gunning Fog, word count, sentence count, avg words/sentence; pure JS implementation[^5_5]
12. **Diff Viewer** — two textareas, side-by-side or inline diff using `jsdiff` library; highlight added/removed lines[^5_5]
13. **Markdown to HTML Converter** — upload a `.md` file or paste content, download a standalone HTML file with your site's styles embedded[^5_8]
14. **Frontmatter Editor** — paste a Hugo/Astro content file; parse YAML frontmatter into a form, edit fields, copy the updated file back[^5_9]
15. **Lorem Ipsum Generator with Constraints** — specify word count, paragraph count, whether to include code blocks / lists / headers; output Markdown or HTML[^5_5]
16. **Smart Slugifier** — input a post title, output a URL-safe slug; preview how Hugo vs. Astro vs. Jekyll would format it[^5_5]
17. **Typographer** — paste text, auto-replace `"quotes"` → curly quotes, `--` → em dash, `...` → ellipsis; preview and copy corrected output[^5_5]
18. **Changelog Generator** — paste conventional commits (`feat:`, `fix:`, `chore:`), auto-groups them into a formatted `CHANGELOG.md` section[^5_10]
## 🎨 Design \& Visual Tools
19. **Font Pairing Previewer** — two dropdowns of Google/Fontshare fonts, live preview of heading + body at multiple sizes; copy the `@import` snippet[^5_5]
20. **Contrast Checker** — pick two OKLCH/hex colors, display WCAG AA/AAA pass/fail for normal and large text; suggest accessible alternatives[^5_5]
21. **Shadow Builder** — visual sliders for offset, blur, spread, color opacity; live CSS preview + copy; supports layered multiple shadows[^5_5]
22. **Spacing Scale Generator** — input a base unit and ratio, generate a full spacing/type scale with `clamp()` fluid values; output as CSS custom properties[^5_5]
23. **SVG Optimizer Preview** — paste SVG source, minify client-side with `svgo-browser`, show before/after file size diff; copy optimized output[^5_5]
24. **Icon Searcher** — pre-built JSON index of Lucide + Phosphor icon names committed by a scheduled Action; search, preview at multiple sizes, copy `<svg>` code[^5_11]
## 📊 Data \& Personal Dashboards
25. **`/dashboard`** — a single page that fetches your committed JSON data files (`data/now.json`, `data/weather.json`, `data/stats.json`) via `fetch()` and renders live cards; Actions refresh the data, the page is always current[^5_12]
26. **Habit Tracker** — `workflow_dispatch` appends entries to `data/habits.json`; the page renders streaks, percentage by weekday, and a GitHub-style grid[^5_12]
27. **Word Count Tracker** — Actions commit daily word counts from your content dir; page renders a sparkline + all-time total + monthly bar chart using `Chart.js`[^5_13]
28. **Reading Log** — data file populated by Goodreads/OpenLibrary Actions; filterable table by genre, year, rating; cover art from OpenLibrary CDN[^5_14]
29. **Watch Log** — Trakt + Letterboxd data from scheduled Actions; filterable `/watched` page with poster grid, ratings, and total hours watched[^5_15]
30. **Link Graph** — all bookmarks in `data/bookmarks.json` rendered as a visual tag cloud using `d3-cloud`; click a tag to filter to linked URLs[^5_16]
## 🗂 Personal Knowledge \& Notes
31. **Digital Garden Index** — Action scans all `content/garden/*.md` files, extracts wikilinks, builds a `data/graph.json`; page renders a `d3-force` node graph of your notes[^5_17]
32. **Flashcard App** — store decks in YAML files committed to the repo; the page reads them with `fetch()`, implements a spaced-repetition algorithm in JS, saves progress to `localStorage`[^5_18]
33. **Recipe Book** — `content/recipes/*.md` with frontmatter fields (`ingredients`, `time`, `tags`); Action builds a `data/recipes.json`; searchable, filterable `/recipes` page[^5_9]
34. **Quote Collection** — commit quotes to `data/quotes.yaml`; page displays a random quote on load with author + source + copy button[^5_5]
35. **Reference Sheet Builder** — Markdown files per topic (Git commands, regex, Vim); Action builds an index; page renders as a searchable cheatsheet with keyboard shortcut navigation[^5_13]
## 🧮 Calculators \& Converters
36. **Unit Converter** — length, weight, temperature, storage, data rates; grouped by category; typed input with instant result update[^5_5]
37. **Timezone Converter** — select up to 6 timezones; live clock display + a meeting-time slider to find overlap windows[^5_5]
38. **Reading Time Estimator** — paste text or a URL (CORS-friendly via `Readability.js`); returns estimated read time at multiple WPM settings[^5_5]
39. **Aspect Ratio Calculator** — input any two dimensions, get all common aspect ratios + CSS `aspect-ratio` value + px at common resolutions[^5_5]
40. **Budgeting Calculator** — 50/30/20 rule with income input; pie chart via `Chart.js`; all in-browser, no data leaves the page[^5_5]
41. **Pomodoro Timer** — configurable work/break intervals; Web Notifications API for alerts; session history in `localStorage`; installable as a PWA[^5_18]
42. **Pixel ↔ Rem Converter** — base font-size input, bidirectional px/rem/em conversion table for all common sizes; copy CSS snippet[^5_5]
## 🔐 Privacy \& Security Tools
43. **Password Generator** — configurable length, charset, entropy display; uses `crypto.getRandomValues()`; never sends data anywhere[^5_5]
44. **Hash Generator** — SHA-256/SHA-512/MD5 of input text via Web Crypto API; compare two strings' hashes side-by-side[^5_5]
45. **Text Encryptor** — AES-256-GCM encrypt/decrypt in-browser using Web Crypto; share encrypted blobs via URL fragment (key never in URL)[^5_5]
46. **Private Note Sharer** — encrypt a note in the browser, generate a URL with the cipher in the `#hash`; recipient decrypts in their browser; nothing stored server-side[^5_5]
## 🌐 IndieWeb \& Social
47. **Webmention Sender** — form with source/target URL fields; `POST` to your `webmention.io` endpoint; logs sent mentions to a `data/sent-mentions.json` via `workflow_dispatch`[^5_19]
48. **OPML Importer / Feed Manager** — upload an OPML file, parse it client-side, display all feed URLs in a table; export a curated subset back to OPML or as `feeds.yaml` for your Actions[^5_20]
49. **IndieAuth Login Test** — input a domain, discover its `authorization_endpoint` and `token_endpoint` via `rel="me"` link parsing; display the discovery chain[^5_21]
50. **`/now` Editor** — a `workflow_dispatch`-triggered form (via GitHub API `POST /repos/{owner}/{repo}/actions/workflows/{id}/dispatches`) that lets you update your `/now` page from a mobile browser without touching code[^5_22]
[^5_1]: https://github.com/slevithan/regex-colorizer
[^5_2]: https://jsonhero.io
[^5_3]: https://www.reddit.com/r/Markdown/comments/1rvqhve/built_a_small_browserbased_markdown_json/
[^5_4]: https://github.com/ionaru/easy-markdown-editor
[^5_5]: https://github.com/iib0011/omni-tools
[^5_6]: https://github.com/0xtharun/palette-generator
[^5_7]: https://www.reddit.com/r/opensource/comments/1pyekk4/palettd_open_source_color_palette_generator/
[^5_8]: https://github.com/cyd01/markdown-editor
[^5_9]: https://www.jekyllpad.com/blog/github-pages-cms
[^5_10]: https://oneuptime.com/blog/post/2025-12-20-changelog-generation-github-actions/view
[^5_11]: https://github.com/marketplace/actions/open-graph-social-cards
[^5_12]: https://github.com/gethomepage/homepage/discussions/5206
[^5_13]: https://dev.to/davorg/github-actions-for-semi-static-web-sites-597g
[^5_14]: https://wicki.io/posts/2021-04-goodreads-workflow-for-github-actions/
[^5_15]: https://github.com/LekoArts/annum
[^5_16]: https://gist.github.com/philgruneich/b17732fe8eb828be8328
[^5_17]: https://mathisgauthey.github.io/obsidian-publish-alternative-how-to-one-click-upload-your-notes-on-your-own-website/
[^5_18]: https://github.com/jspsych/offline-pwa
[^5_19]: https://chringel.dev/2022/07/indiewebify-me-and-dont-forget-my-webmentions/
[^5_20]: https://github.com/marketplace/actions/rss-monitor-action
[^5_21]: https://dev.to/rosgluk/building-the-indieweb-a-technical-guide-for-developers-4f79
[^5_22]: https://github.com/voxpelli/webpage-micropub-to-github
[^5_23]: https://dev.to/anticoder03/10-free-web-hosting-solutions-for-static-and-dynamic-sites-48g1
[^5_24]: https://www.reddit.com/r/selfhosted/comments/1cjr6u5/github_pages_alternative/
[^5_25]: https://github.com/Open-Source-Chandigarh/Best-Services-For-Free-Application-Deployment
[^5_26]: https://appwrite.io/blog/post/best-free-static-website-hosting
[^5_27]: https://refine.dev/blog/5-top-free-react-hosting-platforms/
[^5_28]: https://free-git-hosting.github.io/top-alternatives-to-github-pages-for-static-site-hosting/
[^5_29]: https://github.com/topics/single-page-app
[^5_30]: https://www.youtube.com/watch?v=KUqRFSMIXck
[^5_31]: https://www.youtube.com/watch?v=e5AwNU3Y2es
[^5_32]: https://github.com/topics/one-page-website
[^5_33]: https://github.com/jyguyomarch/awesome-productivity
[^5_34]: https://github.com/awesome-selfhosted/awesome-selfhosted
[^5_35]: https://github.com/orgs/community/discussions/151800
[^5_36]: https://github.com/mundimark/awesome-markdown-editors
[^5_37]: https://github.com/markedjs/marked
[^5_38]: https://super-productivity.com/integrations/github/
[^5_39]: https://jsontotable.org/markdown-viewer
[^5_40]: https://github.com/super-productivity/super-productivity
[^5_41]: https://github.com/burningtree/awesome-json
[^5_42]: https://github.com/Marvellye/colorpal
## 🛠 Core Utilities (Use in Everything)
These are the reusable primitives you'll compose with everything else.
- **`fjogeleit/http-request-action@v1`** — Make any HTTP request (GET/POST/PUT) directly in a workflow step, with Bearer token and Basic Auth support; use `${{ steps.myRequest.outputs.response }}` to pipe JSON output into downstream steps[^2_1][^2_2]
- **`stefanzweifel/git-auto-commit-action@v5`** — The standard "commit and push generated data files" step; works with `file_pattern` globs so only changed files get committed[^2_3]
- **`actions/cache@v4`** — Cache `pip`/`npm` dependencies and Hugo resources between runs to dramatically speed up scheduled fetches[^2_4]
- **`EndBug/add-and-commit@v9`** — Alternative auto-commit with cleaner control over which files to stage[^2_5]
## 📡 RSS \& Feed Fetching
- **`Promptly-Technologies-LLC/rss-fetch-action@v2`** — Fetches any RSS feed to a JSON file; supports custom `parser_options` (e.g., extract `content:encoded`, disable ISO dates) and `fetch_options` for headers[^2_3]
- **`chrisreddington/rss-parser-action`** — Parses a feed and outputs items as JSON, creates GitHub Issues per item, or creates a file per item; useful for triggering downstream workflows on new posts[^2_6]
- **RSS Monitor Action** — Monitors multiple feeds, diffs against a stored JSON state file, and only outputs *new* items since last run — good for change-detection without duplicate entries[^2_7]
- **Manual `curl` + `python -c`** — For feeds behind auth or with custom headers, a raw `curl` + Python `feedparser` step is often cleaner than any action[^2_8]
**Letterboxd** has a first-class public RSS feed at `https://letterboxd.com/{username}/rss/` — pipe it through any of the above and enrich with TMDB data for poster images.[^2_9]
## 🎵 Music — Beyond Basic Last.fm
The default Last.fm "recent tracks" endpoint only gives you title/artist. Here's how to go deeper:
- **`fjogeleit/http-request-action`** + **Last.fm API** — Fetch `user.getTopTracks`, `user.getTopArtists`, `user.getTopAlbums`, and `user.getWeeklyChartList` (period: `7day`, `1month`, `12month`, `overall`) for richer stats than the basic now-playing widget; combine endpoints in one Python heredoc job[^2_1]
- **MusicBrainz API enrichment** — After fetching Last.fm top artists, cross-reference `musicbrainz.org/ws/2/artist?query={name}` to get genre tags, country, and MBID for structured taxonomy on your site[^2_10]
- **`JeffreyCA/lastfm-recently-played-readme`** — A Vercel-hosted SVG card with header/footer styles showing scrobble count, artist count, track count — embeddable as an `<img>` with a `?user=` param[^2_11]
- **Spotify top tracks via Python** — Use `spotipy` in a workflow with `SPOTIPY_CLIENT_ID`, `SPOTIPY_CLIENT_SECRET`, `SPOTIPY_REFRESH_TOKEN` secrets to fetch `current_user_top_tracks(time_range='short_term')` and write JSON; schedule daily[^2_12]
## 📚 Books \& Reading
- **`zwacky/goodreads-profile-workflow@main`** — Syncs a Goodreads shelf (`currently-reading`, `read`, `to-read`) to a Markdown/README; uses your `goodreads_user_id` from your profile URL[^2_13][^2_14]
- **OpenLibrary API (manual)** — Since Goodreads has locked their API, OpenLibrary's `https://openlibrary.org/search.json?title=` is a good fallback for cover art and metadata enrichment via a Python step[^2_14]
## 🎮 Gaming
- **Steam API via `http-request-action`** — `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?steamid={id}&key={key}` returns games played in the last 2 weeks with playtime; write to `data/steam.json` for your Hugo/Astro data layer[^2_15]
- **`j4ckofalltrades/steam-current-game`** — Vercel-hosted badge that reads your Steam "currently playing" status; embeddable as `<img>` in any page or README[^2_16]
## 🔖 Bookmarks \& Links
- **`katydecorah/bookmark-action`** — Saves a URL + page metadata (title, description, OGP image) to a YAML file on `workflow_dispatch` with an input URL — perfect for an IndieWeb `/bookmarks` page[^2_17]
- **Pinboard API (manual Python)** — `https://api.pinboard.in/v1/posts/all?format=json&auth_token={user}:{token}` returns your full bookmark archive; filter by tag, unread status, or `toread` flag for a curated links page[^2_18]
## 🐘 Fediverse / Mastodon
- **`nhoizey/github-action-feed-to-mastodon@v2`** — POSSE in reverse: takes a JSON/RSS/Atom feed and creates Mastodon toots for new items; uses a cache file to track what's already been posted[^2_19]
- **ActivityPub outbox fetch (manual)** — Fetch `https://{instance}/@{user}/outbox?page=true` with `Accept: application/activity+json` to pull your own posts as structured JSON into your site[^2_20]
## ⚙️ Scheduling Patterns
| Use Case | Cron |
| :-- | :-- |
| Daily music stats (Last.fm/Spotify) | `0 6 * * *` |
| Hourly RSS/feed monitor | `0 * * * *` |
| Weekly roundup (books, games) | `0 8 * * 1` |
| Every 4h crawl (high-churn feeds) | `0 */4 * * *` [^2_21] |
| On push + scheduled (hybrid) | `on: [push, schedule]` |
Always pair scheduled jobs with `workflow_dispatch:` so you can trigger a manual run without waiting for the cron.[^2_13]
<span style="display:none">[^2_22][^2_23][^2_24][^2_25][^2_26][^2_27][^2_28][^2_29][^2_30][^2_31][^2_32][^2_33][^2_34][^2_35][^2_36][^2_37][^2_38][^2_39][^2_40][^2_41][^2_42][^2_43][^2_44]</span>
[^2_1]: https://github.com/marketplace/actions/http-request-action
[^2_2]: https://github.com/fjogeleit/http-request-action
[^2_3]: https://github.com/marketplace/actions/rss-feed-fetch-action
[^2_4]: https://mathisgauthey.github.io/obsidian-publish-alternative-how-to-one-click-upload-your-notes-on-your-own-website/
[^2_5]: https://aaronsaray.com/2021/github-actions-pages-scheduled-data-updates/
[^2_6]: https://github.com/marketplace/actions/rss-parser
[^2_7]: https://github.com/marketplace/actions/rss-monitor-action
[^2_8]: https://ricard.dev/how-to-create-a-news-digest-using-rss-and-github-actions/
[^2_9]: https://valerionarcisi.me/en/blog/how-i-display-my-latest-watched-movies-using-letterboxd-rss-feed/
[^2_10]: https://github.com/peterdconradie/Now-Playing-Dashboard-for-Spotify
[^2_11]: https://github.com/JeffreyCA/lastfm-recently-played-readme
[^2_12]: https://github.com/mehranredrose/spotify-now-playing
[^2_13]: https://github.com/marketplace/actions/goodreads-profile-workflow
[^2_14]: https://wicki.io/posts/2021-04-goodreads-workflow-for-github-actions/
[^2_15]: https://stackoverflow.com/questions/27862725/how-to-get-last-played-on-for-steam-game-using-steam-api
[^2_16]: https://github.com/j4ckofalltrades/steam-current-game
[^2_17]: https://katydecorah.com/code/bookmark-action/
[^2_18]: https://gist.github.com/philgruneich/b17732fe8eb828be8328
[^2_19]: https://github.com/marketplace/actions/any-feed-to-mastodon
[^2_20]: https://jakelazaroff.com/words/integrating-my-blog-with-mastodon/
[^2_21]: https://github.com/minhhungit/github-action-rss-crawler
[^2_22]: https://github.com/marketplace/actions/update-rss-feed
[^2_23]: https://alexwilson.tech/content/717e6a35-1cb5-4a28-9321-592d05ddd9dc/
[^2_24]: https://github.com/marketplace/actions/profile-readme
[^2_25]: https://stackoverflow.com/questions/7353538/setting-up-a-github-commit-rss-feed
[^2_26]: https://dev.to/ashif8984/deploying-a-static-site-using-github-action-on-github-pages-5a9a
[^2_27]: https://dev.to/jeffreyca/display-your-recent-last-fm-and-spotify-listening-activity-on-your-github-profile-readme-8jo
[^2_28]: https://blog.jakelee.co.uk/showing-latest-posts-from-multiple-sources-on-github-profile/
[^2_29]: https://www.reddit.com/r/statichosting/comments/1o1yxas/do_people_actually_use_github_actions_for_static/
[^2_30]: https://github.com/HealthITAU/spotify-now-playing
[^2_31]: https://github.com/AayushBharti/Spotify-Now-Playing
[^2_32]: https://github.com/HealthITAU/spotify-now-playing/actions
[^2_33]: https://github.com/BlakeZajac/spotify-currently-playing
[^2_34]: https://github.com/11ason/Spotify-Now-Playing
[^2_35]: https://github.com/mtimkovich/plex2letterboxd
[^2_36]: https://github.com/DobyTang/LazyLibrarian/issues/948
[^2_37]: https://github.com/bbeesley/trakt-to-letterboxd
[^2_38]: https://github.com/gillibrand/launchbar-pinboard
[^2_39]: https://dev.to/davorg/github-actions-for-semi-static-web-sites-597g
[^2_40]: https://github.com/lionheart/pinboard.py
[^2_41]: https://github.com/TarekJor/bookmark-archiver
[^2_42]: https://github.com/jwangbychance/steam-tracker
[^2_43]: https://dev.to/defenderofbasic/host-your-obsidian-notebook-on-github-pages-for-free-8l1
[^2_44]: https://notes.nicolevanderhoeven.com/How+to+publish+Obsidian+notes+with+Quartz+on+GitHub+Pages
