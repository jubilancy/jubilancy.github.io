---
title: Awesome RSS

---

# Awesome RSS [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of awesome RSS readers, generators, bridges, libraries, and resources.

[RSS (Really Simple Syndication)](https://en.wikipedia.org/wiki/RSS) is a web feed that allows users and applications to access updates to websites in a standardized, computer-readable format.
> A curated list of readers, generators, bots, scripts, and tooling for RSS/Atom/JSON Feed enthusiasts.

Inspired by the broader ecosystem mapping in **ALL‑about‑RSS** and other community lists, but focused on concrete tools and scripts you can actually use or self‑host.[^2][^1][^3]

***

## Table of Contents

- [Awesome RSS](#awesome-rss)
    - [Table of Contents](#table-of-contents)
    - [Readers](#readers)
        - [Desktop \& Mobile Readers](#desktop--mobile-readers)
        - [Hosted / SaaS Readers](#hosted--saas-readers)
        - [Self‑Hosted Readers](#self-hosted-readers)
        - [CLI / TUI / Editor Readers](#cli--tui--editor-readers)
    - [Browser Extensions \& Feed Discovery](#browser-extensions--feed-discovery)
    - [Feed Generators \& Scrapers](#feed-generators--scrapers)
    - [Full‑Text, Filtering \& Enhancement](#full-text-filtering--enhancement)
    - [Automation, Workflows \& Pipes](#automation-workflows--pipes)
    - [Bots, Notifications \& Chat Integrations](#bots-notifications--chat-integrations)
    - [Email, Newsletters \& e‑Ink / Kindle](#email-newsletters--e-ink--kindle)
    - [APIs, Parsing Libraries \& Dev Tools](#apis-parsing-libraries--dev-tools)
    - [OPML, Subscriptions \& Collections](#opml-subscriptions--collections)
    - [Blog/CMS Generators with RSS](#blogcms-generators-with-rss)
    - [Misc Utilities \& Scripts](#misc-utilities--scripts)
    - [Meta: Other RSS Lists](#meta-other-rss-lists)
- [Web-Based Readers](#web-based-readers)
- [Self-Hosted Readers](#self-hosted-readers)
- [Desktop Clients](#desktop-clients)
- [Mobile Clients](#mobile-clients)
- [Terminal-Based Clients](#terminal-based-clients)
- [Bridges (Social Media to RSS)](#bridges)
- [Feed Generators & Scrapers](#feed-generators--scrapers)
- [Email & Newsletter Bridges](#email--newsletter-bridges)
- [Developer Libraries](#developer-libraries)
- [Automation & Integration](#automation--integration)
- [Filtering & Manipulation Tools](#filtering--manipulation-tools)
- [Static Site Integration](#static-site-integration)
- [Public Feeds & Directories](#public-feeds--directories)

***

## Readers

### Desktop \& Mobile Readers

- **[Reeder](https://reederapp.com/)** – Long‑standing macOS/iOS reader with multiple sync backends (Feedbin, Feedly, Inoreader, etc.).[^1]
- **[NetNewsWire](https://netnewswire.com/)** – Open‑source macOS/iOS reader with iCloud, Feedbin, Feedly, Inoreader, BazQux, and self‑hosted backends.[^1]
- **[Vienna](https://www.vienna-rss.com/)** – Open‑source RSS/Atom reader for macOS with smart folders and search.[^1]
- **[RSSOwlnix](https://github.com/ravarage/rssowlnix)** – Cross‑platform desktop reader (fork of RSSOwl) with powerful filtering and search.[^2][^1]
- **[Fluent Reader](https://hyliu.me/fluent-reader/)** – Modern cross‑platform desktop reader (Electron) with local and sync modes.[^2][^1]
- **[RSS Guard](https://github.com/martinrotter/rssguard)** – Qt‑based multiplatform reader with support for many online services.[^2][^1]
- **[QuiteRSS](https://quiterss.org/)** – Lightweight cross‑platform desktop reader with filters and automatic feed cleanup.[^4][^1]
- **[Liferea](https://lzone.de/liferea/)** – Long‑lived GTK feed reader for Linux with support for multiple feed types.[^1]
- **[Akregator](https://apps.kde.org/akregator/)** – KDE feed reader that integrates with the Plasma desktop.[^4][^1]
- **[NewsFlash](https://newsflash.dev/)** – GTK feed reader for Linux with support for local and remote backends (Feedbin, Miniflux, etc.).[^4][^1]
- **[Raven Reader](https://ravenreader.app/)** – Electron‑based offline‑first reader for Windows/macOS/Linux.[^4][^1]
- **[RSS Menu](https://www.rssmenu.com/)** – macOS menu‑bar RSS reader.[^1]
- **[News Explorer](https://betamagic.nl/products/newsexplorer.html)** – Apple‑ecosystem reader (macOS/iOS/tvOS) with iCloud sync.[^1]
- **[Leaf](https://rockysandstudio.com/leaf/)** – Minimal Mac RSS reader with notifications.[^1]
- **[ReadKit](https://readkit.app/)** – macOS/iOS reader that also integrates read‑it‑later and bookmarking services.[^1]
- **[Fiery Feeds](https://fieryfeeds.com/)** – Power‑user RSS client for iOS with extensive filtering and service integrations.[^1]
- **[Unread](https://www.goldenhillsoftware.com/unread/)** – Gesture‑driven iOS reader focused on typography and reading experience.[^1]
- **[Inoreader mobile apps](https://www.inoreader.com/apps)** – Official Android/iOS apps for the Inoreader service.[^1]
- **[Feedly mobile apps](https://feedly.com/)** – Official Android/iOS apps for the Feedly cloud reader.[^1]
- **[FeedMe](https://play.google.com/store/apps/details?id=com.seazon.feedme)** – Android client that uses Feedly/Inoreader/etc. as backend.[^1]
- **[gReader](https://play.google.com/store/apps/details?id=com.noinnion.android.greader.reader)** – Android reader supporting multiple backends.[^1]
- **[Read You](https://github.com/Ashinch/ReadYou)** – Open‑source Android reader with local storage and OPML import.[^1]
- **[Elytra](https://elytra.app/)** – iOS/macOS reader with push notifications and discovery features.[^1]
- **[Fraidycat](https://fraidyc.at/)** – Follows RSS, YouTube, Twitter, etc. and sorts by “attention” instead of unread counts.[^1]
- **[Readwise Reader](https://readwise.io/read)** – Unified reader that ingests RSS, newsletters, PDFs, and web highlights.[^1]


### Hosted / SaaS Readers

- **[Feedbin](https://feedbin.com/)** – Paid hosted reader with API, email‑to‑RSS, and JSON Feed support.[^1]
- **[Feedly](https://feedly.com/)** – Cloud RSS reader with AI “Leo” assistant, teams, and lots of integrations.[^1]
- **[Inoreader](https://www.inoreader.com/)** – Feature‑rich hosted reader with rules, broadcast, and OPML tools.[^1]
- **[The Old Reader](https://theoldreader.com/)** – Google Reader‑style hosted reader with social sharing.[^1]
- **[Miniflux (managed hosting)](https://miniflux.app/)** – Minimal reader you can self‑host or use as a hosted service.[^2][^1]
- **[RSSANT 蚁阅](https://rss.anyant.com/)** – Chinese‑language hosted reader focused on clean reading.[^1]
- **[Netvibes](https://www.netvibes.com/)** – Dashboard‑style start page with RSS widgets.[^1]
- **[Bloglovin’](https://www.bloglovin.com/)** – Hosted reader oriented toward lifestyle/blog content.[^1]
- **[Flipboard](https://flipboard.com/)** – Magazine‑style reader app and web service supporting RSS feeds.[^1]
- **[Feeds Pub](https://feeds.pub/)** – Hosted reader with social/discovery aspects.[^1]
- **[Feedspot](https://www.feedspot.com/)** – Online reader plus large directory of categorized feeds.[^1]
- **[Yakread](https://yakread.com/)** – Personalized reading queue that can ingest RSS and newsletters.[^1]
- **[RSS·Cafe](https://rss.cafe/)** – Hosted reader focused on simplicity and OPML import.[^1]
- **[RSS is Awesome](https://rss.is/)** – Hosted reader with customizable dashboards and filters.[^1]
- **[Feeds Fun](https://feeds.fun/)** – Web reader focused on a modern, fun UI.[^1]
- **[1feed](https://1feed.app/)** – “Minimalist inbox for your feeds” that bundles updates by time.[^1]
- **[Airss Reader](https://airss.io/)** – Web reader emphasizing AI‑assisted summaries.[^1]
- **[Fiper](https://fiper.app/)** – Web reader with emphasis on speed and keyboard shortcuts.[^1]


### Self‑Hosted Readers

- **[Tiny Tiny RSS](https://tt-rss.org/)** – Classic PHP‑based web reader with plugin ecosystem and mobile clients.[^2][^1]
- **[FreshRSS](https://freshrss.org/)** – PHP/MySQL or SQLite‑based multi‑user reader; very popular in self‑hosting circles.[^2][^1]
- **[Miniflux](https://miniflux.app/)** – Minimal Go‑based reader with strong API and PostgreSQL backend.[^2][^1]
- **[selfoss](https://selfoss.aditu.de/)** – Web‑based multipurpose RSS/stream reader with plugin architecture.[^2][^1]
- **[Stringer](https://github.com/swanson/stringer)** – Ruby‑based reader designed to be deployed on Heroku.[^2][^1]
- **[RSSMonster](https://github.com/pietheinstrengholt/rssmonster)** – Vue.js + Node.js Google Reader‑like application.[^2][^1]
- **[Newspipe](https://github.com/rollacaster/Newspipe)** – Self‑hosted reader in Python with multi‑user support.[^1]
- **[reader](https://github.com/lemon24/reader)** – Python library *and* minimal web app for reading and manipulating feeds.[^2][^1]
- **[Kriss Feed](https://github.com/tontof/kriss_feed)** – Minimal PHP feed reader that stores data in flat files.[^1]
- **[Leed](https://github.com/LeedRSS/Leed)** – Lightweight PHP feed aggregator.[^1]
- **[Temboz](https://github.com/fazalmajid/temboz)** – Python feed reader optimized for managing large numbers of feeds.[^1]
- **[Grapevine](https://github.com/ymichael/grapevine)** – Simple RSS/Atom reader written in Python.[^1]
- **[C‑LX RSS](https://github.com/chenyanming/c-lx-rss)** – Lightweight web reader implementation.[^1]
- **[Bubo Reader](https://github.com/georgp24/bubo-rss)** – Self‑hosted minimal reader that can also deploy on static hosts.[^1]
- **[Orpinton News](https://github.com/cjennison/orpington-news)** – Self‑hosted reader with a newsletter‑like layout.[^1]
- **[Huntly](https://github.com/lindb/huntly)** – Self‑hosted information management tool with RSS reading and bookmarking.[^1]
- **[Kodoku](https://github.com/maepon/kodoku)** – Minimal self‑hosted reader for personal use.[^1]
- **[Coldsweat](https://github.com/passiomatic/coldsweat)** – Lightweight open‑source feed reader inspired by Fever.[^1]
- **[Refeed](https://github.com/fredley/refeed)** – Self‑hosted reader with modern UI.[^1]
- **[Fusion](https://github.com/0x2E/fusion)** – Lightweight self‑hosted reader written in Go.[^2][^1]
- **[srcrs/rss-reader](https://github.com/srcrs/rss-reader)** – Docker‑deployable reader with multi‑user support.[^1]


### CLI / TUI / Editor Readers

- **[Newsboat](https://newsboat.org/)** – Popular terminal RSS reader, successor to Newsbeuter.[^4][^1]
- **[newsbeuter](https://github.com/akrennmair/newsbeuter)** – Classic Unix‑style feed reader (superseded by Newsboat but still referenced).[^1]
- **[cast-text](https://github.com/schollz/cast-text)** – Zero‑latency terminal RSS reader focused on text‑only reading.[^1]
- **[feed2exec](https://github.com/rss2email/feed2exec)** – “Feeds to commands” tool that runs commands when feeds update.[^1]
- **[neix](https://github.com/tomschwarz/neix)** – Lightweight TUI feed reader.[^1]
- **[Journalist](https://github.com/jcerise/Journalist)** – Terminal reader with tagging and offline support.[^1]
- **[Elfeed](https://github.com/skeeto/elfeed)** – Emacs web feed reader with search and bookmarking integration.[^1]
- **[Gnus](https://www.gnu.org/software/emacs/manual/html_node/gnus/)** – Emacs mail/news client that can also consume RSS via backends.[^1]
- **[EAF RSS](https://github.com/manateelazycat/eaf-rss-reader)** – Emacs Application Framework feed reader.[^1]
- **[feed.nvim](https://github.com/aspeddro/feed.nvim)** – Neovim plugin that turns your editor into a feed reader.[^1]

***

## Browser Extensions \& Feed Discovery

- **[RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar)** – Browser extension that detects feeds and RSSHub routes on pages.[^5][^1]
- **[RSSBud](https://github.com/Cay-Zhang/RSSBud)** – iOS RSSHub Radar client that discovers feeds and RSSHub routes in Safari.[^5][^1]
- **[RSSAid](https://github.com/LeetaoGoooo/RSSAid)** – Android version of RSSHub Radar for discovering RSSHub routes.[^5][^1]
- **[Feedbro](https://addons.mozilla.org/firefox/addon/feedbroreader/)** – Full‑featured feed reader as a Firefox/Chrome extension.[^1]
- **[Awesome RSS](https://addons.mozilla.org/firefox/addon/awesome-rss/)** – Restores a subscribe button and feed preview in Firefox.[^6][^1]
- **[RSS Subscription Extension](https://chrome.google.com/webstore/detail/rss-subscription-extensio/kfmdhdbmnhfldidhhlkcfhcfmfnkdbno)** – Adds “subscribe” button and preview for feeds in Chrome‑based browsers.[^1]
- **[RSSPreview](https://addons.mozilla.org/firefox/addon/rsspreview/)** – Provides clean feed previews in the browser.[^1]
- **[RSS Finder](https://chrome.google.com/webstore/detail/rss-finder/)** – Tries to detect hidden feed URLs on a page.[^1]
- **[Want My RSS](https://github.com/ReverentEngineer/want-my-rss)** – Simple site‑side widget to advertise and subscribe to feeds.[^1]
- **[FeedReader App discovery helpers](https://github.com/)** – Various small extensions and bookmarklets that send the current page to your reader of choice.[^1]

***

## Feed Generators \& Scrapers

Tools that turn arbitrary sites or platforms into RSS/Atom/JSON feeds.[^1]

- **[RSSHub](https://github.com/DIYgod/RSSHub)** – “Everything is RSSible” rule‑based scraper that generates feeds for many sites.[^5][^1]
- **[RSS‑Bridge](https://github.com/RSS-Bridge/rss-bridge)** – PHP project that generates feeds for many websites without native RSS.[^1]
- **[RSS.app](https://rss.app/)** – SaaS service that can generate feeds from web pages and social media.[^1]
- **[RSS Box](https://rssbox.herokuapp.com/)** – Generate RSS/Atom from a variety of inputs.[^1]
- **[RSS‑proxy](https://github.com/damoeb/rss-proxy)** – Scrapes web pages and turns them into feeds using CSS selectors.[^1]
- **[RSSerpent](https://github.com/sergiors/rss-erpent)** – Extensible web scraper that outputs RSS.[^1]
- **[OpenRSS](https://github.com/)** – Open feed generator that converts various sites to RSS.[^1]
- **[Versionfeeds](https://github.com/lukaspanni/versionfeeds)** – RSS feeds for new software releases and version changes.[^1]
- **[RSS Worker](https://github.com/)** – Cloudflare Worker‑based feed generator.[^1]
- **[WebRSS](https://webrss.com/)** – Generates feeds from static or dynamic web pages.[^1]
- **[Feedity](https://feedity.com/)** – Visual scraper that builds feeds from parts of a page.[^1]
- **[FetchRSS](https://fetchrss.com/)** – Browser‑based tool to highlight content and emit RSS.[^1]
- **[PolitePol](https://politepol.com/)** – Self‑hostable or hosted page‑to‑RSS service with Telegram community.[^1]
- **[Feed Creator 2.0](https://feedcreator.net/)** – Scraper that generates custom feeds from HTML.[^1]
- **[HTML2RSS](https://github.com/)** – Simple HTML‑to‑RSS converter.[^1]
- **[ChangeDetection.io](https://changedetection.io/)** – Change‑monitoring tool that can output RSS.[^1]
- **[RSSEverything](https://github.com/)** – Utility service for generating feeds from many content sources.[^1]
- **[RSS Anything](https://github.com/)** – Turn arbitrary web content into RSS feeds.[^1]
- **[RSSWebAll](https://github.com/)** – General‑purpose “page to feed” generator.[^1]

Platform‑specific feed generators (examples from a much larger ecosystem):[^1]

- **GitHub**: `gh-feed`, `opml-gen`, “GitHub Trending RSS”.[^1]
- **Twitter/X**: `nitter`, `TwitRSS`, `TweetFeed`, `TwiSSR`.[^1]
- **Hacker News**: `hnrss.org`, “Realtime RSS for Hacker News”, “Hacker News Digest”.[^4][^1]
- **YouTube**: “YouTube RSS Finder”, “YouTube RSS Extractor”, OPML export scripts.[^1]
- **WeChat, Weibo, Zhihu**: `RSSHub` routes plus specialized generators like `WeRSS`, `feeddd`, `Liuli`.[^1]

***

## Full‑Text, Filtering \& Enhancement

### Full‑Text Extractors

- **[Full‑Text RSS](https://www.fivefilters.org/full-text-rss/)** – Self‑hostable or hosted “extract full article content” service.[^1]
- **Full Content RSS / FeedEx / FeedX** – A family of full‑content extractors and APIs.[^1]
- **[morss.it](https://morss.it/)** – Web service that converts partial feeds into full‑text feeds.[^1]
- **[fulltextrssplz](https://github.com/)** – Script to fetch full article content into feeds.[^1]
- **[RSS屋 Full Text](https://rss.wiki/)** – Chinese full‑text extraction service with Telegram integration.[^1]


### Feed Filtering, Mixing \& Analytics

- **[siftrss](https://siftrss.com/)** – Filter feeds based on keywords and other rules.[^1]
- **[RSSFilter](https://github.com/)** – Simple filter that lets you include/exclude items.[^1]
- **[grepfeed](https://github.com/)** – Unix‑style feed filtering using regular expressions.[^1]
- **[Feed Control](https://feedcontrol.net/)** – Hosted filtering and republishing service.[^1]
- **[RSS Mix](https://www.rssmix.com/)** – Merge multiple feeds into one combined feed.[^1]
- **[RSS Mixer](https://github.com/)** – Another feed combiner with some transformation options.[^1]
- **[Feedspot RSSCombiner](https://www.feedspot.com/)** – Hosted feed combiner alongside their directory.[^1]
- **[RSSUnify](https://github.com/)** – Self‑hostable multi‑feed merger.[^1]
- **[Feed Filter Maker](https://github.com/)** – Web app to build filter and merge pipelines for RSS.[^1]
- **[Feedburner](https://feedburner.google.com/)** – Legacy Google service offering tracking, redirects, and basic analytics.[^1]
- **[FeedPress](https://feed.press/)** – Feed analytics and URL‑shortening replacement for Feedburner.[^1]


### Cosmetic \& Misc Enhancements

- **[pretty-feed-v3](https://github.com/)** – Opinionated XSL stylesheet to make default feed XML human‑readable.[^1]
- **[RSS style with XSL](https://github.com/)** – Example XSL templates for pretty feed presentation.[^1]
- **[StreamBurner](https://github.com/)** – Styling tool for RSS/Atom output.[^1]
- **[RSS Gizmos](https://github.com/)** – Collection of small utilities to tweak feeds.[^1]
- **[feedless](https://github.com/)** – Tools for cleaning and enhancing feeds, including extracting cleaner content.[^1]
- **[RSSBrew](https://github.com/)** – Swiss‑army knife for transforming, filtering, and generating feeds.[^1]

***

## Automation, Workflows \& Pipes

- **[Huginn](https://github.com/huginn/huginn)** – “IFTTT on your own server”; can consume and emit RSS for complex flows.[^1]
- **[n8n.io](https://n8n.io/)** – Node‑based workflow automation; has RSS triggers and actions.[^1]
- **[IFTTT](https://ifttt.com/)** – “New item in feed” triggers that can fan out to many services.[^1]
- **[Zapier](https://zapier.com/)** – Automation platform with RSS triggers and filters.[^1]
- **[Power Automate](https://powerautomate.microsoft.com/)** – Microsoft automation platform that can poll RSS feeds.[^1]
- **[RSS for Hackers (Pipedream)](https://pipedream.com/apps/rss)** – RSS sources and components for building programmable workflows.[^1]
- **[Integromat / Make](https://www.make.com/)** – Scenario‑based automation with RSS modules.[^1]
- **[OneUp](https://www.oneupapp.io/)** – Social autoposting tool that supports RSS as input.[^1]
- **[feedpushr](https://github.com/ncarlier/feedpushr)** – Self‑hosted daemon that pulls feeds and pushes updates to webhooks and other destinations.[^2][^1]
- **[Actionsflow](https://github.com/actionsflow/actionsflow)** – GitHub Actions‑based IFTTT alternative with RSS triggers.[^1]
- **[Platypush](https://platypush.readthedocs.io/)** – Automation toolkit that includes RSS integrations (e.g., RSS2Kindle).[^1]

***

## Bots, Notifications \& Chat Integrations

### Telegram \& IM Bots

- **[NodeRSSbot](https://github.com/fengkx/NodeRSSBot)** – Node‑based Telegram bot that pushes feed updates to chats.[^1]
- **[RustRssBot](https://github.com/)** – Rust‑powered Telegram RSS bot.[^1]
- **[Feed2Telegram](https://github.com/)** – Bot/service that republishes feeds into Telegram channels.[^1]
- **[RSS to Telegram Bot](https://t.me/RSS2TG_bot)** – Hosted bot connecting feeds to Telegram.[^1]
- **[el_monitorro_bot](https://github.com/)** – Telegram bot built on El Monitorro for RSS.[^1]
- **[TheFeedReaderBot](https://t.me/thefeedreaderbot)** – Popular Telegram bot for reading feeds in chat.[^1]
- **[RobotRSS](https://github.com/)** – Telegram bot for feed notifications.[^1]
- **[Fidder](https://github.com/)** – Telegram bot for subscriptions and filtering.[^1]


### Discord, ActivityPub, Mastodon, etc.

- **[MonitoRSS](https://github.com/synzen/MonitoRSS)** – Self‑hosted Discord bot that posts RSS feed updates to channels.[^1]
- **[Readybot](https://github.com/)** – Discord bot with RSS support.[^1]
- **[Mirror.bot](https://github.com/)** – RSS‑to‑Discord bridge.[^1]
- **[EchoFeed](https://github.com/echofeed/echofeed)** – Service that turns RSS into GitHub/Bluesky/Discord/Mastodon updates.[^1]
- **[Mastofeed](https://github.com/)** – RSS‑to‑Mastodon timeline service.[^1]
- **[feedsin.space](https://feedsin.space/)** – Multi‑tenant RSS‑to‑Mastodon service.[^1]
- **[RSS Parrot](https://rss-parrot.net/)** – Another RSS‑to‑Mastodon bridge.[^1]
- **[RSS to ActivityPub Converter](https://github.com/)** – Tool to convert RSS feeds into ActivityPub actors.[^1]


### Push Notifications \& Web Monitoring

- **[Truepush](https://truepush.com/)** – Web push service that can be fed from RSS.[^1]
- **[PushEngage / PushAlert / pushMonkey](https://www.pushengage.com/)** – Push notification services that can subscribe to feeds.[^1]
- **[BalloonRSS](https://github.com/)** – Desktop notification tool for feeds.[^1]
- **[INK RSS](https://github.com/)** – Notification‑focused RSS tool.[^1]
- **[RSS Alerts](https://github.com/)** – Email/alerting tool triggered by feed changes.[^1]

***

## Email, Newsletters \& e‑Ink / Kindle

### RSS → Email / Newsletter

- **[rss2mail](https://github.com/adulau/rss-tools)** – Script for sending feed items via email.[^7][^1]
- **[FeedMail](https://feedmail.org/)** – SaaS that emails you when feeds update.[^1]
- **[Feedrabbit](https://feedrabbit.com/)** – RSS‑to‑email service.[^1]
- **[Feedblitz](https://www.feedblitz.com/)** – RSS‑powered email campaigns (Feedburner alternative).[^1]
- **[Blogtrottr](https://blogtrottr.com/)** – Converts RSS into emailed digests.[^1]
- **[Mailbrew](https://mailbrew.com/)** – Newsletter builder that can ingest RSS and other sources.[^1]
- **[Briefcake](https://briefcake.com/)** – Automated newsletter generation from feeds.[^1]
- **[Buttondown](https://buttondown.email/)** – Personal newsletter platform with RSS2Newsletter support.[^1]
- **[TidyRead Digest](https://github.com/)** – Digest builder that can lean on RSS as an input.[^1]


### RSS → Kindle / e‑Ink

- **[Kindle Ear](https://github.com/cdhigh/KindleEar)** – Self‑hosted app that pushes RSS content to your Kindle.[^1]
- **[Ktool](https://ktool.io/)** – SaaS that turns articles and feeds into Kindle/epub pushes.[^1]
- **[Calibre](https://calibre-ebook.com/)** – Ebook management tool with “Fetch news” feature based on RSS.[^1]
- **[SyncReads](https://github.com/)** – RSS → Kindle/reMarkable sync service.[^1]
- **[KOReader](https://koreader.rocks/)** – E‑ink reader app that can consume feeds via plugins.[^1]
- **[Reabble](https://reabble.com/)** – Hosted reader optimized for Kindle and e‑ink browsers.[^1]

***

## APIs, Parsing Libraries \& Dev Tools

- **[RSS API](https://rssapi.net/)** – Hosted API to convert and subscribe to RSS/Atom/JSON feeds.[^1]
- **[Feedsearch](https://github.com/DBeath/feedsearch)** – Python library and API for discovering feeds on websites.[^1]
- **[Substats](https://github.com/zizifn/substats)** – Serverless function and API for counting subscribers across many services (including RSS).[^1]
- **[SearQ](https://github.com/)** – RSS search engine with REST API.[^1]
- **[FetchRSS API](https://fetchrss.com/api)** – API counterpart to the visual feed generator.[^1]
- **[Fever API](https://github.com/)** – De‑facto API spec implemented by several self‑hosted readers.[^1]
- **[SimplePie](https://simplepie.org/)** – PHP library for parsing RSS and Atom feeds.[^1]
- **[SyndiKit](https://github.com/)** – Swift package for decoding RSS feeds.[^1]
- **[RSS Gen](https://github.com/)** – Rust library for generating/parsing RSS feeds across versions.[^1]
- **[Crawler‑Buddy](https://github.com/)** – Server that parses feeds and exposes standardized JSON.[^1]
- **[adulau/rss-tools](https://github.com/adulau/rss-tools)** – “Crappy Python scripts” for merging, clustering, finding, and mailing feeds.[^7]

***

## OPML, Subscriptions \& Collections

- **[FeedLand](https://feedland.org/)** – Web app by Dave Winer for curating and sharing OPML feed lists.[^1]
- **[OPML Checklist](https://github.com/)** – Helper for validating and managing OPML outlines.[^1]
- **[OPML generator](https://github.com/)** – Tools for building OPML from your subscriptions or GitHub stars.[^1]
- **[Little Outliner / OPML Editor](https://github.com/scripting/opml-editor)** – Classic outline editors that work well with OPML for feeds.[^1]
- **[RSS‑OPML‑to‑Markdown](https://github.com/)** – Scripts to convert OPML subscription lists into Markdown (perfect for awesome lists).[^1]
- **[OPML‑compatible apps list](https://github.com/)** – Community‑maintained catalog of apps that import/export OPML.[^1]

Collections of feed URLs (for seeding your reader):[^8][^1]

- **[Awesome RSS Feeds](https://github.com/RSS-Renaissance/awesome-AI-feeds)** – AI/ML‑focused feeds list with OPML export.[^9][^1]
- **[plenaryapp/awesome-rss-feeds](https://github.com/plenaryapp/awesome-rss-feeds)** – OPML lists used by the Plenary Android app.[^8]
- **Chinese‑language blog/indie‑web lists** – Multiple OPML collections for independent blogs (中文独立博客列表, RSSBlog, etc.).[^1]

***

## Blog/CMS Generators with RSS

Static and dynamic blog engines that emit RSS/Atom/JSON feeds out of the box.[^1]

- **[Ghost](https://ghost.org/)** – Modern CMS/blog with built‑in RSS.[^1]
- **[Gatsby](https://www.gatsbyjs.com/)** – React‑based SSG with official RSS plugins.[^1]
- **[Halo](https://halo.run/)** – Java‑based blog/CMS supporting RSS feeds.[^1]
- **[Gridea](https://gridea.dev/)** – Static blog client that generates RSS.[^1]
- **[Nobelium](https://github.com/craigary/nobelium)** – Notion‑backed static blog template with RSS feeds.[^1]
- **[Solo / Pipe at B3log](https://github.com/b3log/solo)** – Blogging engine with RSS.[^1]
- **[xLog](https://xlog.app/)** – Web3‑ish blog platform emitting feeds.[^1]
- **[microfeed](https://github.com/microfeed/microfeed)** – Self‑hosted micro‑blog with JSON Feed and RSS.[^1]
- **[lists.sh](https://lists.sh/)** – List‑style blogging platform with RSS.[^1]
- **[Hey World](https://world.hey.com/)** – Minimal blogging built into HEY email, with RSS feeds.[^1]

***

## Misc Utilities \& Scripts

Small tools and scripts that don’t cleanly fit elsewhere but are useful in RSS workflows.[^10][^7][^1]

- **[rssmerge.py (adulau/rss-tools)](https://github.com/adulau/rss-tools)** – Merge one or more feeds and output in various formats (Markdown, HTML, text).[^7]
- **[rsscluster](https://github.com/adulau/rss-tools)** – Group similar items across feeds into clusters.[^7]
- **[rssfind](https://github.com/adulau/rss-tools)** – Discover RSS/Atom feeds on a site by parsing HTML or brute‑forcing paths.[^7]
- **[A simple HTML RSS reader \& aggregator](https://cybrkyd.com/post/a-simple-html-rss-feed-reader-and-aggregator-with-javascript/)** – Tutorial + scripts for wget + JavaScript static‑site reader.[^10]
- **[waifu!d for aria2](https://github.com/)** – Downloader bot using RSS to auto‑fetch media via aria2.[^1]
- **[FLEXGET](https://flexget.com/)** – Automation tool for RSS‑based media downloads (torrents, etc.).[^1]
- **[qBittorrent RSS](https://www.qbittorrent.org/)** – Built‑in RSS downloader for torrents.[^1]
- **[EndofYear](https://github.com/)** – Generates “year in review” stats based on your blog’s RSS.[^1]
- **[Backfeed](https://github.com/)** – Retrieve old items from a feed beyond default retention.[^1]
- **[rerss](https://github.com/)** – Archive and expose older feed entries as new feeds.[^1]
- **[ReFeed.to](https://refeed.to/)** – Tool for re‑emitting old articles via RSS.[^1]
- **[Semantic search across RSS (Diva)](https://github.com/)** – Semantic search over feed content using vector indexes.[^1]

***

## Meta: Other RSS Lists

These are not tools themselves but are amazing rabbit holes if you want to go beyond this list.[^3][^2][^1]

- **[AboutRSS / ALL‑about‑RSS](https://github.com/AboutRSS/ALL-about-RSS)** – Massive, hand‑maintained catalog of RSS‑related apps, services, scripts and articles.[^1]
- **[Awesome RSS (voidfiles)](https://voidfiles.github.io/awesome-rss/)** – Another curated RSS links list, more “awesome‑style”.[^3]
- **[LibHunt rss‑aggregator projects](https://www.libhunt.com/topic/rss-aggregator)** – Ranked list of open‑source RSS aggregators by activity.[^2]
- **[Feed Readers @ Awesome‑Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted#feed-readers)** – Self‑hostable readers and aggregators.[^2]

***

You can paste this directly into `README.md` of your “awesome‑rss” repo and iterate: add your personal favorites, mark what you actually use, and prune anything you don’t want to endorse.[^2][^1]
<span style="display:none">[^11][^12][^13][^14][^15]</span>

<div align="center">⁂</div>

[^1]: https://rss.feedspot.com/git_rss_feeds/

[^2]: https://www.libhunt.com/topic/rss-aggregator

[^3]: https://voidfiles.github.io/awesome-rss/

[^4]: https://gist.github.com/thefranke/63853a6f8c499dc97bc17838f6cedcc2

[^5]: https://github.com/diygod/rsshub

[^6]: https://github.com/shgysk8zer0/awesome-rss

[^7]: https://github.com/adulau/rss-tools

[^8]: https://github.com/plenaryapp/awesome-rss-feeds

[^9]: https://github.com/RSS-Renaissance/awesome-AI-feeds

[^10]: https://cybrkyd.com/post/a-simple-html-rss-feed-reader-and-aggregator-with-javascript/

[^11]: https://github.com/AboutRSS/ALL-about-RSS

[^12]: https://www.cnblogs.com/csuftzzk/archive/2013/04/30/3052384.html

[^13]: https://github.com/mcnaveen/awesome-rss

[^14]: https://lwn.net/Articles/138227/

[^15]: https://wpvivid.com/best-rss-reader-and-aggregator.html

## Web-Based Readers

- [Inoreader](https://www.inoreader.com/) - Feature-rich reader with powerful automation and filtering.
- [Feedly](https://feedly.com/) - Popular cloud-based aggregator with AI research assistants.
- [The Old Reader](https://theoldreader.com/) - A social-focused reader inspired by the classic Google Reader.
- [NewsBlur](https://newsblur.com/) - Personal news reader with "intelligence" training to hide/show stories.
- [BazQux Reader](https://bazqux.com/) - Fast and clean reader that focuses on reading.
- [Feedbin](https://feedbin.com/) - Simple, fast, and beautiful web-based reader.
- [Greader](https://github.com/noah-huppert/greader) - An open-source web-based RSS reader.
- [FlowReader](https://flowreader.com/) - Combine RSS feeds and social media in one stream.
- [CommaFeed](https://www.commafeed.com/) - Open-source self-hostable or web-hosted reader.

## Self-Hosted Readers

- [FreshRSS](https://freshrss.org/) - Lightweight, responsive, and powerful aggregator.
- [Tiny Tiny RSS](https://tt-rss.org/) - The "grandfather" of self-hosted readers; highly extensible.
- [Miniflux](https://miniflux.app/) - Minimalist, opinionated, and incredibly fast.
- [Nextcloud News](https://github.com/nextcloud/news) - RSS app integrated into the Nextcloud ecosystem.
- [Selfoss](https://selfoss.aditu.de/) - Purpose-built multipurpose personal feed aggregator.
- [Stringer](https://github.com/stringer-rss/stringer) - A simple, anti-social RSS reader.
- [Leselys](https://github.com/leselys/leselys) - A web-based feed reader for your own server.
- [Winds](https://getstream.io/winds/) - Beautiful open-source RSS and Podcast app using Stream.
- [Feedpushr](https://github.com/ncw/feedpushr) - A feed aggregator and processor.
- [Go-Read](https://github.com/mjibson/goread) - Google Reader clone for Google App Engine.

## Desktop Clients

- [NetNewsWire](https://netnewswire.com/) - The premier open-source client for macOS and iOS.
- [Reeder 5](https://reederapp.com/) - Elegant client with iCloud sync and extensive service support (macOS).
- [Fluent Reader](https://hyliu.me/fluent-reader/) - Modern, cross-platform (Windows/macOS/Linux) reader built with Electron.
- [Raven Reader](https://ravenreader.app/) - Clean, distraction-free desktop reader.
- [Akregator](https://apps.kde.org/akregator/) - Standard feed reader for the KDE desktop environment.
- [Liferea](https://lzone.de/liferea/) - Classic, feature-rich Linux feed reader.
- [Vienna](https://www.vienna-rss.com/) - Long-standing open-source RSS/Atom reader for macOS.
- [Feedbro](https://nodetics.com/feedbro/) - Advanced reader as a browser extension (Chrome/Firefox/Edge).
- [Newsreadeck](https://newsreadeck.com/) - A different way to read news on macOS/iOS.
- [QuiteRSS](https://quiterss.org/) - Cross-platform Qt-based RSS client.

## Mobile Clients

- [NetNewsWire](https://apps.apple.com/us/app/netnewswire-rss-reader/id1480640210) - (iOS) Fast, free, and open-source.
- [Fiery Feeds](https://apps.apple.com/us/app/fiery-feeds-rss-reader/id1154001123) - (iOS) Highly customizable power-user reader.
- [FeedMe](https://github.com/seazon/FeedMe) - (Android) Offline RSS reader with support for many services.
- [Flym](https://github.com/FredJul/Flym) - (Android) Modern, clean, open-source reader.
- [Readler](https://readler.app/) - (Android) Simple and material-design focused.
- [FocusReader](https://play.google.com/store/apps/details?id=com.allenyu.FocusReader) - (Android) Modern reader with great typography.
- [Unread](https://www.goldenhillsoftware.com/unread/) - (iOS) Known for its beautiful typography and gesture-based UI.
- [Cappuccino](https://cappuccinoapp.com/) - (iOS/macOS) Shared news feeds between friends.

## Terminal-Based Clients

- [Newsboat](https://newsboat.org/) - The "mutt" of RSS readers; highly configurable for CLI lovers.
- [Tuir](https://github.com/tuir-org/tuir) - (Fork of TTRV) Browse Reddit and RSS in the terminal.
- [Newsraft](https://codeberg.org/newsraft/newsraft) - Lightweight ncurses feed reader.
- [Canto](http://codezen.org/canto/) - Atom/RSS feed reader for the console.
- [Snownews](https://github.com/snownews/snownews) - Fast and resource-efficient terminal reader.
- [Tickr](http://www.news-ticker.net/) - GTK-based RSS ticker for your desktop.

## Bridges

- [RSSHub](https://docs.rsshub.app/) - An extensible generator that turns everything (Twitter, Instagram, YouTube, etc.) into RSS.
- [RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge) - PHP-based bridge for websites without native feeds.
- [Kill the Newsletter](https://kill-the-newsletter.com/) - Converts email newsletters into RSS feeds.
- [TwitRSS.me](https://twitrss.me/) - Generate RSS feeds for Twitter searches or users.
- [Instaloader](https://instaloader.github.io/) - Tool to download Instagram photos/metadata, can be used to script RSS.
- [YouTube RSS](https://www.youtube.com/feeds/videos.xml?channel_id=ID) - Native but hidden YouTube feature.
- [Substack RSS](https://[publication].substack.com/feed) - Native Substack RSS endpoint.

## Feed Generators & Scrapers

- [Feed43](https://feed43.com/) - Create RSS feeds from any HTML page using patterns.
- [PolitePol](https://politepol.com/) - Simple visual RSS generator for any website.
- [FetchRSS](https://fetchrss.com/) - Professional RSS generator for social media.
- [Full-Text RSS](https://www.fivefilters.org/full-text-rss/) - Transform partial feeds into full-content feeds.
- [Morfetize](https://github.com/morfetize/morfetize) - Generate RSS feeds from static sites.
- [OpenGraph RSS](https://github.com/fguillot/opengraph-rss) - Extract OpenGraph data to build feeds.
- [Writereader](https://writereader.com/) - Turn websites into readable RSS.
- [DeltaFeed](https://github.com/deltafeed/deltafeed) - Feed generator for sites with dynamic content.

## Email & Newsletter Bridges

- [Rss2Email](https://github.com/rss2email/rss2email) - A tool to receive RSS updates as emails.
- [Feedbin Email](https://feedbin.com/blog/2018/06/13/feedbin-now-supports-email-newsletters/) - Native support for receiving newsletters as RSS.
- [Mailbrew](https://mailbrew.com/) - Automated daily digests from RSS and social media.
- [Stoic Reader](https://stoicreader.com/) - Newsletter to RSS converter.
- [Feedrabbit](https://feedrabbit.com/) - Delivery service for RSS via email.

## Developer Libraries

- [feedparser](https://github.com/kurtmckee/feedparser) - (Python) The gold standard for parsing RSS/Atom.
- [Gofeed](https://github.com/mmcdole/gofeed) - (Go) Robust RSS and Atom parser.
- [RSS](https://github.com/gorilla/feeds) - (Go) A library for generating feeds.
- [Feedjira](https://github.com/feedjira/feedjira) - (Ruby) Fast and flexible feed fetching and parsing.
- [FeedKit](https://github.com/nmdias/FeedKit) - (Swift) RSS, Atom and JSON Feed parser for Apple platforms.
- [Rome](https://github.com/rometools/rome) - (Java) Framework for RSS and Atom feeds.
- [Laminas-feed](https://github.com/laminas/laminas-feed) - (PHP) Handle RSS and Atom feeds.
- [Podcast](https://github.com/eduncan911/podcast) - (Go) Library to generate iTunes-compliant Podcasts.

## Automation & Integration

- [Huginn](https://github.com/huginn/huginn) - Build "agents" that perform automated tasks with RSS.
- [n8n](https://n8n.io/) - Workflow automation with native RSS triggers.
- [IFTTT RSS](https://ifttt.com/rss) - Basic automation for feed triggers.
- [Zapier RSS](https://zapier.com/apps/rss/integrations) - Connect RSS to 5000+ apps.
- [RSS to Telegram Bot](https://github.com/RSS-Next/RSS-to-Telegram-Bot) - Send feed updates to Telegram groups.
- [Discord RSS Bot](https://github.com/monstercat/discord-rss-bot) - Push updates to Discord channels.
- [Slack RSS](https://slack.com/help/articles/218688467-Add-RSS-feeds-to-Slack) - Native Slack integration for feeds.

## Filtering & Manipulation Tools

- [RSS-Proxy](https://github.com/p-p_g/rss-proxy) - Filter, sort, and modify RSS feeds.
- [Siftrss](https://siftrss.com/) - Apply regex or keyword filters to any feed.
- [Feed Rinse](http://www.feedrinse.com/) - Wash your RSS feeds to filter out the noise.
- [Yahoo Pipes (Historical)](https://en.wikipedia.org/wiki/Yahoo!_Pipes) - The inspiration for all modern feed manipulation.
- [Pipes](https://pipes.digital/) - A modern, hosted alternative to Yahoo Pipes.

## Static Site Integration

- [Jekyll RSS](https://github.com/jekyll/jekyll-feed) - Official plugin to generate feeds for Jekyll sites.
- [Hugo RSS](https://gohugo.io/templates/rss/) - Built-in RSS templates for Hugo.
- [Astro RSS](https://docs.astro.build/en/guides/rss/) - Official RSS generation for Astro sites.
- [Gatsby Plugin Feed](https://www.gatsbyjs.com/plugins/gatsby-plugin-feed/) - Generate feeds for Gatsby.

## Public Feeds & Directories

- [RSS Advisory Board](https://www.rssboard.org/) - History and technical specifications.
- [Reddit RSS](https://www.reddit.com/r/popular.rss) - Append `.rss` to any Reddit URL.
- [GitHub Releases RSS](https://github.com/owner/repo/releases.atom) - Native Atom feeds for project releases.
- [Open-source Feed Lists](https://github.com/plenaryapp/awesome-rss-feeds) - A collection of high-quality public feeds.


### RSS services powered by utilizing GitHub[](https://rss.tips/#rss-services-powered-by-utilizing-github)

> Note that  [GitHub might disable action trigger if no activity in the repo for 60 days](https://docs.github.com/cn/actions/managing-workflow-runs/disabling-and-enabling-a-workflow).  [1016](https://t.me/aboutrss/1016?comment=7171)

-   [rssTea](https://github.com/avadhesh18/rssTea): a RSS reader and Podcast player Progressive Web App running on GitHub Actions  [1375](https://t.me/s/aboutrss/1375)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/avadhesh18/rssTea)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [GARSS](https://github.com/zhaoolee/garss)  [973](https://t.me/s/aboutrss/973)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/zhaoolee/garss)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [osmos::feed](https://github.com/osmoscraft/osmosfeed)  [1012](https://t.me/s/aboutrss/1012): a web-based RSS reader running entirely on GitHub  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/osmoscraft/osmosfeed)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [RSSeveryday](https://github.com/GuangzheJiang/rss_everyday)  [1016](https://t.me/s/aboutrss/1016)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/GuangzheJiang/rss_everyday)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Bubo reader](https://github.com/georgemandis/bubo-rss): a hyper-minimalist RSS and JSON feed reader you can deploy on Netlify or Glitch  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/georgemandis/bubo-rss)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)([Deploy on Github](https://github.com/kevinfiol/reader)-personal fork)

### RSS Reader in Email System[](https://rss.tips/#rss-reader-in-email-system)

-   [Outlook](https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook)  [540](https://t.me/s/aboutrss/540),  [988](https://t.me/s/aboutrss/988)  [![Windows](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-windows-10-16.png)](https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Mozilla Thunderbird](https://www.thunderbird.net/)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://hg.mozilla.org/comm-central/)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Vivaldi Feed Reader](https://vivaldi.com/blog/vivaldi-mail-technical-preview/)  [886](https://t.me/s/aboutrss/886),  [1049](https://t.me/s/aboutrss/1049)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Postbox](https://www.postbox-inc.com/)  [1145](https://t.me/s/aboutrss/1145)
-   [Cypht](https://cypht.org/)  [1226](https://t.me/s/aboutrss/1226)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/jasonmunro/cypht)

## ☁ Free Servers[](https://rss.tips/#-free-servers)

> Utilize these public hosts reasonably, please.

### RSSHub[](https://rss.tips/#rsshub)

-   [Public instances on official page](https://docs.rsshub.app/guide/instances)
-   [Third-party instances within the Follow app](https://app.follow.is/rsshub)

> Collected by this repo:

-   https://rsshub.feeded.xyz/  by  [胜之不易](https://feeded.xyz/rsshub%e6%9c%8d%e5%8a%a1%e5%99%a8/)  [70](https://t.me/s/aboutrss/70),  [1284](https://t.me/s/aboutrss/1284)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frsshub.feeded.xyz)
-   http://rsshub.rssforever.com by  [思有云 - IOIOX](https://www.ioiox.com/)  [497](https://t.me/s/aboutrss/497),  [922](https://t.me/s/aboutrss/922)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frsshub.rssforever.com%2F)
-   https://rss.shab.fun/ by  [MYELF](https://myelf.club/)  [550](https://t.me/s/aboutrss/550)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frss.shab.fun%2F)
-   http://rss.probe.earth:1200 by  [Probe](https://probe.earth/)  [586](https://t.me/s/aboutrss/586)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=http%3A%2F%2Frss.probe.earth:1200)
-   https://rsshub.aboutrss.now.sh/  by  [AboutRSS](https://github.com/aboutrss)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frsshub.aboutrss.now.sh%2F)
-   https://rsshub-now.now.sh/ by  [fengkx](https://github.com/fengkx)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frsshub-now.now.sh%2F)
-   https://rsshub.now.sh/ by  [YJK](https://www.yjk.im/posts/rsshub-in-now-sh/)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frsshub.now.sh%2F)
-   https://rssh-ub.homeofnever.now.sh/ by  [NeverBehave](https://github.com/NeverBehave)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frssh-ub.homeofnever.now.sh%2F)
-   https://rssh-ub-neverbehave.homeofnever.now.sh/ by  [NeverBehave](https://github.com/NeverBehave)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frssh-ub-neverbehave.homeofnever.now.sh%2F)
-   https://rsshub-git-master.diy.now.sh/ by  [DIYGod](https://github.com/DIYgod)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frsshub-git-master.diy.now.sh%2F)
-   http://rsshub-diygod.now.sh by  [DIYGod](https://github.com/DIYgod)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frsshub-diygod.now.sh%2F)
-   http://rss.alapi.cn/ by  [Alone88](http://alone88.cn/)  [668](https://t.me/s/aboutrss/668)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=http%3A%2F%2Frss.alapi.cn)
-   https://hub.slarker.me/ by  [canner@V2EX](https://www.v2ex.com/t/690755#reply19)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=http%3A%2F%2Fhub.slarker.me)
-   https://datatube.dev/ by  [@BaiduInc](https://twitter.com/BaiduInc/status/1322233602894143488)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=http%3A%2F%2Fdatatube.dev)  [867](https://t.me/s/aboutrss/867)
-   https://rsshub.qufy.me/ by  [@queensferryme](https://github.com/queensferryme)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frsshub.qufy.me%2F)
-   https://rsshub.wkfg.me/  by  [@三丰](https://t.me/junbaor)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frsshub.wkfg.me%2F)
-   https://rss.hee.ink/  by  [蒟蒻](https://hee.ink/)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frss.hee.ink%2F)
-   https://rsshub.cry33.com by  [逍遥隐士](https://cry33.com/archives/651.html)  [1077](https://t.me/s/aboutrss/1077)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frsshub.cry33.com)
-   https://rss.fatpandac.com by  [@Fatpandac](https://t.me/Fatpandac)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frss.fatpandac.com)
-   http://rss.7nftday.xyz:1200/ by  [@skyone39888636](https://twitter.com/skyone39888636/status/1544129847873613824)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frss.7nftday.xyz%3A1200%2F)
-   https://rsshub.ktachibana.party by  [@KTachibanaM](https://github.com/KTachibanaM)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frsshub.ktachibana.party)
-   https://rsshub.top/ by  [書书](https://shuzizhinan.com/)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frsshub.top)
-   https://rsshub.aierliz.xyz by  [易燃又美味的凝胶](https://t.me/rsshub/272484)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frsshub.aierliz.xyz)
-   https://rsshub.services.woodland.cafe by  [untitaker](https://github.com/untitaker)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frsshub.services.woodland.cafe)
-   https://rss.feiyuyu.net/ by  [肥鱼](https://www.feiyuyu.net/)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frss.feiyuyu.net)
-   https://rsshub.ddns.net/ by  [Web9upper](https://github.com/web9upper)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frsshub.ddns.net)

### TTRSS[](https://rss.tips/#ttrss)

-   https://rss.rssforever.com/  by  [思有云 - IOIOX](https://www.ioiox.com/)  [497](https://t.me/s/aboutrss/497),  [922](https://t.me/s/aboutrss/922)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frss.rssforever.com%2F)
-   http://rss.probe.earth:8280/tt-rss/ by  [Probe](https://probe.earth/)  [586](https://t.me/s/aboutrss/586)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=http%3A%2F%2Frss.probe.earth:8280%2Ftt-rss%2F)  (Registration Closed)
-   https://tt-rss.snopyta.org/ by  [Snopyta.org](https://snopyta.org/)  [680](https://t.me/s/aboutrss/680)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Ftt-rss.snopyta.org%2F)  (Registration Closed)
-   https://ttr.uneasy.win/ by  [胜之不易](https://uneasy.win/tiny-tiny-rss%E6%9C%8D%E5%8A%A1%E5%99%A8/)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Fttr.uneasy.win)  [867](https://t.me/s/aboutrss/867)  ([Registration form](https://shimo.im/forms/GgyrgjhqjrYwCDjv/fill))
-   https://read.cry33.com/ by  [逍遥隐士](https://cry33.com/archives/651.html)  [1077](https://t.me/s/aboutrss/1077)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Fread.cry33.com)
-   https://ttrss.slarker.me by  [Slark](https://slarker.me/rss-service/)  [1268](https://t.me/s/aboutrss/1268)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Fttrss.slarker.me)

### FreshRSS[](https://rss.tips/#freshrss)

-   https://feeds.flossboxin.org.in by  [vdbhb59](https://github.com/vdbhb59)  ![Website](https://img.shields.io/website?down_color=Red&down_message=Down&style=plastic&up_color=Green&up_message=Up&url=https%3A%2F%2Ffeeds.flossboxin.org.in)  (user:demo2023 passwd:demodemo)
-   https://rss.alex0.dev by  [Alex Kuang](https://alex0.dev/blog/web/self-hosted-freshrss-open-registration/)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frss.alex0.dev%2F)  (user:demo passwd:freshdemo)
-   http://freshrss.fanfpy.top/ by  [fanfpy](https://fanfpy.top/)  [1074](https://t.me/s/aboutrss/1074)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=http%3A%2F%2Ffreshrss.fanfpy.top%2F)
-   https://rss.cry33.com by  [逍遥隐士](https://cry33.com/archives/651.html)  [1077](https://t.me/s/aboutrss/1077)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frss.cry33.com)
-   https://rss.rssforever.com/ by  [思有云 - IOIOX](https://www.ioiox.com/)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frss.rssforever.com%2F)
-   https://freshrss.feeded.xyz/ by  [胜之不易](https://feeded.xyz/freshrss%e6%9c%8d%e5%8a%a1%e5%99%a8/)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Ffreshrss.feeded.xyz%2F)  [1207](https://t.me/s/aboutrss/1207)
-   https://rss.husay.cc by  [胡鹤仙](https://twitter.com/huhexian/status/1554282344668098561)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frss.husay.cc%2F)  (Registration disabled)
-   https://feed.slarker.me by  [Slark](https://slarker.me/rss-service/)  [1268](https://t.me/s/aboutrss/1268)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Ffeed.slarker.me)
-   https://titrvar.com/p by  [Titrvar تیتروار](https://titrvar.com/)

### RSS-Bridge[](https://rss.tips/#rss-bridge)

-   https://rss-bridge.org/bridge01/ (Official instance)
-   [Public Hosts](https://rss-bridge.github.io/rss-bridge/General/Public_Hosts.html)  [576](https://t.me/s/aboutrss/576)

### Miniflux[](https://rss.tips/#miniflux)

-   https://miniflux.wkfg.me (user/password: demo/123456) by  [@junbaor](https://t.me/junbaor)  [600](https://t.me/s/aboutrss/600)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Fminiflux.wkfg.me%2F)
-   https://veranda.toay.org/ by  [@NickMorle](https://twitter.com/NickMorle/status/1261674945811148800)  [599](https://t.me/s/aboutrss/599)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Fveranda.toay.org%2F)
-   https://rss.slarker.me by  [Slark](https://slarker.me/rss-service/)  [1268](https://t.me/s/aboutrss/1268)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Frss.slarker.me)

### Full-Text RSS[](https://rss.tips/#full-text-rss)

-   https://fullrss.cry33.com/ by  [逍遥隐士](https://cry33.com/archives/651.html)  [1077](https://t.me/s/aboutrss/1077)  ![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Ffullrss.cry33.com)

#### Twitter[](https://rss.tips/#twitter)

-   [Queryfeed](https://queryfeed.net/)  [225](https://t.me/s/aboutrss/225)
-   [TwitRSS](http://twitrss.me/)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/ciderpunx/twitrssme)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [rss.yuji.ne.jp](https://rss.yuji.ne.jp/)  [639](https://t.me/s/aboutrss/639)[![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/yujixr/twitfeed)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [nitter](https://nitter.net/)  [645](https://t.me/s/aboutrss/645)[![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/zedeus/nitter)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
    -   [nitter.snopyta.org](https://nitter.snopyta.org/)  [680](https://t.me/s/aboutrss/680)
    -   [Twiiit](https://twiiit.com/)  [1084](https://t.me/s/aboutrss/1084)
-   [TwiSSR](http://www.twissr.com/)  [875](https://t.me/s/aboutrss/875)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Typefully Profiles](https://typefully.com/profile): Generate RSS Feed for your Twitter Threads  [1177](https://t.me/s/aboutrss/1177)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [TweetFeed](http://tweetfeed.org/)  [1242](https://t.me/s/aboutrss/1242)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

#### GitHub[](https://rss.tips/#github)

-   [gh-feed](http://gh-feed.imsun.net/)  [507](https://t.me/s/aboutrss/507)  : Generate RSS feed from GitHub Issues  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/imsun/gh-feed)
-   [opml-gen](https://opml.bb8.fun/)  [579](https://t.me/s/aboutrss/579)  : Generate an OPML file for your starred repositories on GitHub  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://git.captnemo.in/nemo/opml-gen)
-   [Feed the Star](https://feed-the-star.herokuapp.com/)  [626](https://t.me/s/aboutrss/626)  : Feed you with someone’s GitHub star  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/geekdada/feed-the-star)
-   [Banditore](https://bandito.re/)  [629](https://t.me/s/aboutrss/629)  : Gather new releases from your starred GitHub repositories and generate an Atom feed with them.  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/j0k3r/banditore)
-   [GitHub Trending RSS](https://mshibanami.github.io/GitHubTrendingRSS/)  [699](https://t.me/s/aboutrss/699)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/mshibanami/GitHubTrendingRSS)
-   [TrackAwesomeList](https://www.trackawesomelist.com/)  [1075](https://t.me/s/aboutrss/1075)

#### ProductHunt[](https://rss.tips/#producthunt)

-   [ProductHunt daily RSS feed](https://github.com/headllines/producthunt-daily-rss)  [918](https://t.me/s/aboutrss/918)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/headllines/producthunt-daily-rss)

#### Matters[](https://rss.tips/#matters)

-   [FetchRSS](http://fetchrss.com/)  [427](https://t.me/s/aboutrss/427)
-   [RSSHub Radar](https://diygod.me/rsshub-radar/) [455](https://t.me/s/aboutrss/455)  [![Chrome](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Google_Chrome.png)](https://chrome.google.com/webstore/detail/kefjpfngnndepjbopdmoebkipbgkggaa)[![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/DIYgod/RSSHub-Radar)

#### Telegram[](https://rss.tips/#telegram-1)

-   [Channel2RSSBot](https://t.me/Channel2RSSBot)  [420](https://t.me/s/aboutrss/420)
-   [Notifier](https://notifier.in/)  [545](https://t.me/s/aboutrss/545)
-   [TelegramRSS](https://tg.i-c-a.su/)  [569](https://t.me/s/aboutrss/569)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/xtrime-ru/TelegramRSS)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Metogram](https://metogram.com/)  [696](https://t.me/s/aboutrss/696)
-   [tg-archive](https://github.com/knadh/tg-archive)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/knadh/tg-archive)

#### Itunes[](https://rss.tips/#itunes)

-   [Itunes to RSS by PodShows](https://podshows.fr/itunesrss)  [314](https://t.me/s/aboutrss/314)
-   [GetRSSfeed](http://getrssfeed.com/)  [656](https://t.me/s/aboutrss/656)
-   [itunesrss](http://gromnitsky.users.sourceforge.net/js/itunesrss/)  [715](https://t.me/s/aboutrss/715)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/gromnitsky/itunesrss)

#### SoundCloud[](https://rss.tips/#soundcloud)

-   [GetRSSfeed](http://getrssfeed.com/)  [656](https://t.me/s/aboutrss/656)

#### Spotify[](https://rss.tips/#spotify)

-   [Spotifeed](https://spotifeed.timdorr.com/)  [898](https://t.me/s/aboutrss/898)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/timdorr/spotifeed)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [TuneFeed](https://tunefeed.app/)  [1468](https://t.me/s/aboutrss/1468)

#### Links on social streams[](https://rss.tips/#links-on-social-streams)

-   [Filter RSS](https://filterrss.com/)  [377](https://t.me/s/aboutrss/377)  : Create an RSS feed from all the links shared on your social streams.
-   [Twitter Followings OPML Export](https://opml.glitch.me/)  [504](https://t.me/s/aboutrss/504)  :Get websites and RSS Feeds of the people you follow on Twitter.
-   [Siftlink](http://siftlinks.com/)  [628](https://t.me/s/aboutrss/628)  : monitors your friend stream on Twitter, pulls out the links and creates an RSS feed for you
-   [TOFEED](https://tofeed.net/)  [1080](https://t.me/s/aboutrss/1080)
-   [Feeds Mage](https://www.feedsmage.com/)  [1110](https://t.me/s/aboutrss/1110)
-   [RsS iS dEaD LOL](https://rss-is-dead.lol/): discover RSS Feeds of your follows on Mastodon  [1444](https://t.me/s/aboutrss/1444)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

#### Annotation / Bookmarking[](https://rss.tips/#annotation--bookmarking)

-   [Hypothesis](https://hypothes.is/)  [727](https://t.me/s/aboutrss/727)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/hypothesis/h)
-   [Notado](https://notado.app/)  [735](https://t.me/s/aboutrss/735)
-   [Pinboard](http://pinboard.in/)  [737](https://t.me/s/aboutrss/737)
-   [Delicious](http://del.icio.us/)  [737](https://t.me/s/aboutrss/737)
-   [Raindrop](https://raindrop.io/)
-   [wallabag](https://wallabag.org/en)  [1057](https://t.me/s/aboutrss/1057)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/wallabag/wallabag)
-   [LinkyRSS](https://linkyrssdemo.inmytree.co.za/)  [1341](https://t.me/s/aboutrss/1341)  ![AI](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-ai-16.png)
-   [Omnivore](https://omnivore.app/)  [1368](https://t.me/s/aboutrss/1368)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/omnivore-app/omnivore)
-   [LinkAce](https://www.linkace.org/)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/Kovah/LinkAce/)

#### WebArchive[](https://rss.tips/#webarchive)

-   [HamsterBase](https://hamsterbase.com/)  [1270](https://t.me/s/aboutrss/1270)

#### Last.fm[](https://rss.tips/#lastfm)

-   [Last.fm RSS Feeds](https://lfm.xiffy.nl/)  [807](https://t.me/s/aboutrss/807)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/xiffy/lfm)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

#### Book authors[](https://rss.tips/#book-authors)

-   [Bookfeed.io](https://bookfeed.io/)  [967](https://t.me/s/aboutrss/967)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

#### Google Sheet[](https://rss.tips/#google-sheet)

-   [Crssnt](https://crssnt.com/)  [1050](https://t.me/s/aboutrss/1050)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Sheet-posting](https://www.sheet-posting.me/)  [1121](https://t.me/s/aboutrss/1121)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://glitch.com/~sheet-posting)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

#### Twitch[](https://rss.tips/#twitch)

-   [Twitch stream RSS generator](https://twitchrss.appspot.com/)  [1150](https://t.me/s/aboutrss/1150)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/lzeke0/TwitchRSS)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

#### TikTok[](https://rss.tips/#tiktok)

-   [TikTok stream RSS generator](https://ttrss.mybluemix.net/)  [1150](https://t.me/s/aboutrss/1150)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [ProxiTok](https://proxitok.herokuapp.com/)  [1218](https://t.me/s/aboutrss/1218)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/pablouser1/ProxiTok)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

#### Mirror[](https://rss.tips/#mirror)

-   [Submirror](http://submirror.xyz/)  [1157](https://t.me/s/aboutrss/1157)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

#### The expiry of TLS certificates[](https://rss.tips/#the-expiry-of-tls-certificates)

-   [Free Monitor Certificate expiry via RSS](https://raphting.dev/posts/monitor-rss/)  [1427](https://t.me/s/aboutrss/1427)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

#### Mastodon[](https://rss.tips/#mastodon-1)

-   [Mastodon Bookmark RSS](https://bookmark-rss.woodland.cafe/)  [1439](https://t.me/s/aboutrss/1439)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/untitaker/mastodon-bookmark-rss)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

#### Podcast transcript[](https://rss.tips/#podcast-transcript)

-   [BibiGPT](https://airss.co/)  [1428](https://t.me/s/aboutrss/1428)

#### Weibo (微博)[](https://rss.tips/#weibo-%E5%BE%AE%E5%8D%9A)

-   [Weibo to RSS](https://rssfeed.today/weibo/)  [169](https://t.me/s/aboutrss/169)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

#### Wechat Subscription Accounts (微信公众号)[](https://rss.tips/#wechat-subscription-accounts-%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7)

-   [瞅啥](http://www.gzhshoulu.wang/)  [131](https://t.me/s/aboutrss/131)
-   [WeRSS](https://werss.app/)  [133](https://t.me/s/aboutrss/133),  [195](https://t.me/s/aboutrss/195)
-   [今天看啥](http://www.jintiankansha.me/)  [195](https://t.me/s/aboutrss/195)
-   [快知](http://kzfeed.com/)  [195](https://t.me/s/aboutrss/195),  [528](https://t.me/s/aboutrss/528)  [![Online](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-web-design-16.png)](http://kzfeed.com/login)[![](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://apps.apple.com/cn/app/%E5%BF%AB%E7%9F%A5-%E8%AE%A9%E4%BF%A1%E6%81%AF%E8%8E%B7%E5%8F%96%E6%9B%B4%E9%AB%98%E6%95%88/id1465578855)[![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://www.coolapk.com/apk/244476)
-   [RSSHub](https://docs.rsshub.app/new-media.html#wei-xin)  [195](https://t.me/s/aboutrss/195),  [953](https://t.me/s/aboutrss/953)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/DIYgod/RSSHub)
-   [Huginn](https://github.com/huginn/huginn)  [195](https://t.me/s/aboutrss/195),  [528](https://t.me/s/aboutrss/528)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/huginn/huginn)
-   [Vread](https://www.vreadtech.com/)  [258](https://t.me/s/aboutrss/258),  [269](https://t.me/s/aboutrss/269)
-   [瓦斯阅读](https://qnmlgb.tech/)  [349](https://t.me/s/aboutrss/349)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/tenpiece/wxrss)
-   [RSS订阅源](https://www.wechatrss.com/)  [409](https://t.me/s/aboutrss/409),  [410](https://t.me/s/aboutrss/410),  [728](https://t.me/s/aboutrss/728)
-   微信公众号RSS by ZMonster  [438](https://t.me/s/aboutrss/438),  [515](https://t.me/s/aboutrss/515),  [528](https://t.me/s/aboutrss/528)
-   [RSS屋](https://rss.mifaw.com/)  [112](https://t.me/s/aboutrss/112)
-   [外接大脑](https://www.waijiedanao.com/)  [665](https://t.me/s/aboutrss/665)
-   [WxRss](https://wxrss.vip/)  [748](https://t.me/s/aboutrss/748)
-   [FreeRss](http://www.freerss.top/)  [778](https://t.me/s/aboutrss/778)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [WeChat-Feeds](https://wechat.privacyhide.com/)  [821](https://t.me/s/aboutrss/821)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [feeddd](https://feeddd.org/)  [1091](https://t.me/s/aboutrss/1091)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [微信公众号转RSS](https://wechat2rss.xlab.app/)  [1137](https://t.me/s/aboutrss/1137),  [1443](https://t.me/s/aboutrss/1443)
-   [Liuli](https://github.com/liuli-io/liuli)  [1167](https://t.me/s/aboutrss/1167)
-   [WeWe RSS](https://github.com/cooderl/wewe-rss/)  [1423](https://t.me/s/aboutrss/1423)

#### Zhihu (知乎)[](https://rss.tips/#zhihu-%E7%9F%A5%E4%B9%8E)

-   [rss.lilydjwg.me](https://rss.lilydjwg.me/)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/lilydjwg/morerssplz)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

#### Comments of V2EX post[](https://rss.tips/#comments-of-v2ex-post)

-   [rss.lilydjwg.me](https://rss.lilydjwg.me/)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/lilydjwg/morerssplz)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

#### Docsify[](https://rss.tips/#docsify)

-   tutorial  [868](https://t.me/s/aboutrss/868)

### RSS Editor[](https://rss.tips/#rss-editor)

-   [RSSme](http://www.amlpages.com/rssme.shtml)  [649](https://t.me/s/aboutrss/649)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

### RSS2TWITTER[](https://rss.tips/#rss2twitter)

-   [py-feedr](https://github.com/M157q/py-feedr)  [551](https://t.me/s/aboutrss/551): A Python parser to tweet the latest updates from multiple RSS feeds.  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/M157q/py-feedr)
-   [socialdog](https://social-dog.net/en/)
-   [Feedio](https://feedio.co/)  [678](https://t.me/s/aboutrss/678)
-   [dlvr.it](https://dlvrit.com/)  [702](https://t.me/s/aboutrss/702)
-   [RSStoTweet](https://rsstotweet.xyz/)  [1421](https://t.me/s/aboutrss/1421)  ![AI](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-ai-16.png)

### RSS2WIDGET[](https://rss.tips/#rss2widget)

#### For website[](https://rss.tips/#for-website)

-   [feedwind](https://feed.mikle.com/)  [233](https://t.me/s/aboutrss/233)
-   [Feedzy RSS Feeds for WordPress](https://themeisle.com/plugins/feedzy-rss-feeds/)  [239](https://t.me/s/aboutrss/239)
-   [RSSGROUND](https://www.rssground.com/)  [273](https://t.me/s/aboutrss/273)
-   [elink](https://elink.io/)  [392](https://t.me/s/aboutrss/392)  ![Online](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-web-design-16.png)
-   [Feedspot](https://www.feedspot.com/)![Online](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-web-design-16.png)
-   [MOONMOON](https://moonmoon.org/)  [648](https://t.me/s/aboutrss/648)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/moonmoon/moonmoon)
-   [TINT](https://www.tintup.com/blog/the-best-rss-widget/)  [652](https://t.me/s/aboutrss/652)
-   [CommonNinja](https://www.commoninja.com/plugins/feeds)  [755](https://t.me/s/aboutrss/755)
-   [Planet Pluto](https://feedreader.github.io/)  [887](https://t.me/s/aboutrss/887)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/feedreader)
-   [RSS DOG](https://www.rssdog.com/)
-   [WP RSS Aggregator](https://wordpress.org/plugins/wp-rss-aggregator/)
-   [Super RSS Reader](https://www.aakashweb.com/wordpress-plugins/super-rss-reader/)  [1129](https://t.me/s/aboutrss/1129)
-   [tagembed](https://tagembed.com/rss-widget/)  [1259](https://t.me/s/aboutrss/1259)
-   [Glance](https://github.com/glanceapp/glance)  [1454](https://t.me/s/aboutrss/1454)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/glanceapp/glance)

### RSS2ARCHIVE[](https://rss.tips/#rss2archive)

-   [ArchiveBox](https://archivebox.io/)  [560](https://t.me/s/aboutrss/560)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/pirate/ArchiveBox)
-   [Karakeep](https://github.com/karakeep-app/karakeep)
-   [Django link archive](https://github.com/rumca-js/Django-link-archive)
-   [RSS Librarian](https://www.rsslibrarian.ch/librarian.php)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/thefranke/rss-librarian)

### RSS2GitHub[](https://rss.tips/#rss2github)

-   [EchoFeed](https://echofeed.app/)  [1447](https://t.me/s/aboutrss/1447)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/rknightuk/echo)

#### RSS2GitHubProfile[](https://rss.tips/#rss2githubprofile)

-   [Blog post workflow](https://github.com/marketplace/actions/blog-post-workflow)  [764](https://t.me/s/aboutrss/764)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/gautamkrishnar/blog-post-workflow)

### RSS2DISCORD[](https://rss.tips/#rss2discord)

-   [Mirror.bot](https://mirror.bot/)  ![Online](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-web-design-16.png)
-   [MonitoRSS](https://monitorss.xyz/)  [787](https://t.me/s/aboutrss/787)
-   [Readybot](https://readybot.io/)  [1231](https://t.me/s/aboutrss/1231)
-   [EchoFeed](https://echofeed.app/)  [1447](https://t.me/s/aboutrss/1447)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/rknightuk/echo)


### RSS2CMS[](https://rss.tips/#rss2cms)

-   [PressForward](https://pressforward.org/)  [804](https://t.me/s/aboutrss/804)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/PressForward/pressforward)
-   [CyberSEO](https://www.cyberseo.net/)  [869](https://t.me/s/aboutrss/869)

### RSS2BOARD[](https://rss.tips/#rss2board)

-   [Weavr Boards](https://weavr.ai/blogs/Knowledge-curation-and-sharing-made-easy-through-Weavr-Boards-and-RSS-Feeds)  [1077](https://t.me/s/aboutrss/1077)
-   [SnipRSS](https://sniprss.com/)  [1077](https://t.me/s/aboutrss/1077)

### RSS2Pocket[](https://rss.tips/#rss2pocket)

-   [Curated](https://withcurated.com/)  [1098](https://t.me/s/aboutrss/1098)

### RSS2eBook[](https://rss.tips/#rss2ebook)

-   [EpubKit](https://epubkit.app/)  [1460](https://t.me/s/aboutrss/1460)

### RSS2WeChat[](https://rss.tips/#rss2wechat)

-   [RSSPush](https://github.com/easychen/rsspush)  [1251](https://t.me/s/aboutrss/1251)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/easychen/rsspush)

### RSS2Mastodon[](https://rss.tips/#rss2mastodon)

-   [Mastofeed](https://mastofeed.org/)  [1272](https://t.me/s/aboutrss/1272)
-   [feedsin.space](https://feedsin.space/)  [1344](https://t.me/s/aboutrss/1344)
-   [RSS Parrot](https://rss-parrot.net/)  [1403](https://t.me/s/aboutrss/1403)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/gugray/rss-parrot)
-   [EchoFeed](https://echofeed.app/)  [1447](https://t.me/s/aboutrss/1447)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/rknightuk/echo)

### RSS2Webhook[](https://rss.tips/#rss2webhook)

-   [therssproject](https://www.therssproject.com/)  [1299](https://t.me/s/aboutrss/1299)
-   [EchoFeed](https://echofeed.app/)  [1447](https://t.me/s/aboutrss/1447)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/rknightuk/echo)

### RSS2Podcast[](https://rss.tips/#rss2podcast)

-   [POD GENIE](https://pod-genie.com/)  [1318](https://t.me/s/aboutrss/1318)

### RSS2Nostr[](https://rss.tips/#rss2nostr)

-   [atomstr](https://git.sr.ht/~psic4t/atomstr)  [1491](https://t.me/s/aboutrss/1491)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://git.sr.ht/~psic4t/atomstr)
-   [nostrss](https://github.com/Asone/nostrss)  [1491](https://t.me/s/aboutrss/1491)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/Asone/nostrss)
-   [rsslay](https://github.com/piraces/rsslay)  [1491](https://t.me/s/aboutrss/1491)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/piraces/rsslay)

## ✨ RSS feed customization/enhancement[](https://rss.tips/#-rss-feed-customizationenhancement)

### Toolbox[](https://rss.tips/#toolbox)

-   [RSS Gizmos](https://rssgizmos.com/)  [1326](https://t.me/s/aboutrss/1326)
-   [feedless](https://feedless.org/getting-started)  [1340](https://t.me/s/aboutrss/1340)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/damoeb/feedless)
-   [rss-tools](https://adulau.github.io/rss-tools/): A set of crappy Python scripts to handle RSS in an Unix way  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/adulau/rss-tools/)
-   [RSSBrew](https://github.com/yinan-c/RSSBrew)  [1465](https://t.me/s/aboutrss/1465)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/yinan-c/RSSBrew)
-   [Sponder](https://sponder.app/): Build custom RSS processing flows with keyword/regex filtering and feed merging; works with any RSS reader.  ![Online](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-web-design-16.png)

### Full Article Extractors[](https://rss.tips/#full-article-extractors)

-   [Full-Text RSS](https://www.fivefilters.org/full-text-rss/)  [245](https://t.me/s/aboutrss/245),  [437](https://t.me/s/aboutrss/437)
-   [Full Content RSS](http://fullcontentrss.com/)  [246](https://t.me/s/aboutrss/246)
-   [Full Text RSS](https://www.freefullrss.com/)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [FeedEx.Net](https://feedex.net/)
-   [FeedX](https://feedx.net/)  [66](https://t.me/s/aboutrss/66),  [372](https://t.me/s/aboutrss/372)
-   [RSS屋](https://rss.mifaw.com/)  [112](https://t.me/s/aboutrss/112)
-   [](https://rss2full.feedocean.com/)FeedOcean: Full Text RSS Feed  [594](https://t.me/s/aboutrss/594)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/feedocean/rss2full)
-   [morss.it](https://morss.it/)  [713](https://t.me/s/aboutrss/713)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://git.pictuga.com/pictuga/morss)
-   [fulltextrssplz](https://fulltextrssplz.whtsky.me/)  [717](https://t.me/s/aboutrss/717)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/whtsky/fulltextrssplz)
-   [Pipfeed news extract API](https://pipfeed.com/news-extract-api/)  [874](https://t.me/s/aboutrss/874)
-   [简悦](http://ksria.com/simpread/docs/#/RSSReader)  [880](https://t.me/s/aboutrss/880)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/Kenshin/simpread/)

### Reddit RSS fix[](https://rss.tips/#reddit-rss-fix)

-   [Reddit RSS Fixer](https://smithsdownunder.com/reddit_rss/)  [268](https://t.me/s/aboutrss/268)  [![Chrome](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Google_Chrome.png)](https://chrome.google.com/webstore/detail/reddit-rss-fixer/mdmahkfahjcjoclbjmoaliadfgnhboag)
-   [RSS of only top-level comments](https://www.reddit.com/r/rss/comments/ekffc2/is_it_possible_to_have_an_rss_of_only_toplevel/)  [341](https://t.me/s/aboutrss/341)
-   [reddit.0qz.fun](https://reddit.0qz.fun/)  [555](https://t.me/s/aboutrss/555): improved reddit rss feed supports videos, gifs, and images
-   [Reddit Top RSS](https://reddit-top-rss.herokuapp.com/)  [1206](https://t.me/s/aboutrss/1206)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/johnwarne/reddit-top-rss/)

### Tumblr RSS fix[](https://rss.tips/#tumblr-rss-fix)

-   [Tumblr RSS feed with original-size image](https://blog.wizos.me/20180412-139.html)  [289](https://t.me/s/aboutrss/289)  ![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)

### Feed Analytics[](https://rss.tips/#feed-analytics)

-   [Feedburner](https://feedburner.google.com/)  [1013](https://t.me/s/aboutrss/1013),  [1281](https://t.me/s/aboutrss/1281)
-   [FeedPress](https://feed.press/)  [235](https://t.me/s/aboutrss/235)
-   [Feedburner alternatives](http://www.feedburner-alternatives.com/)  [441](https://t.me/s/aboutrss/441)
-   [Feedio](https://feedio.co/)  [678](https://t.me/s/aboutrss/678)
-   [Follow.it](https://follow.it/)  [725](https://t.me/s/aboutrss/725),  [729](https://t.me/s/aboutrss/729),  [1019](https://t.me/s/aboutrss/1019)

### WordPress plugins[](https://rss.tips/#wordpress-plugins)

-   [MailPoet](https://www.mailpoet.com/)  [170](https://t.me/s/aboutrss/170)  : deliver RSS content on specific time.
-   [Feedzy RSS Feeds for WordPress](https://themeisle.com/plugins/feedzy-rss-feeds/)  [239](https://t.me/s/aboutrss/239)
-   [Ultimate Category Excluder](https://wordpress.org/plugins/ultimate-category-excluder/)  [582](https://t.me/s/aboutrss/582)  : Exclude category from Feeds
-   [Featured Images in RSS for Mailchimp & Other Email](https://wordpress.org/plugins/featured-images-for-rss-feeds/)  [602](https://t.me/s/aboutrss/602)

### Feed item filtering[](https://rss.tips/#feed-item-filtering)

-   [siftrss](https://siftrss.com/)  [223](https://t.me/s/aboutrss/223)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [RSSFilter](https://rssfilter.netlify.app/)  [655](https://t.me/s/aboutrss/655)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/bcongdon/rssfilter)
-   [grepfeed](https://grepfeed.sigwait.tk/)  [716](https://t.me/s/aboutrss/716)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/gromnitsky/grepfeed)
-   [Feed Control](https://feedcontrol.fivefilters.org/)  [919](https://t.me/s/aboutrss/919)
-   [RSS Generator](https://synk.info/)  [952](https://t.me/s/aboutrss/952)
-   [RSSHub with RSS-Parser](https://telegra.ph/Use-reverse-proxy-to-filter-source-feed-contents-07-01)  [1060](https://t.me/s/aboutrss/1060)
-   [Feed Filter Maker](https://feed.janicek.co/)  [1279](https://t.me/s/aboutrss/1279)
-   [rss-lambda](https://rss-lambda.ktachibana.party/)  [1405](https://t.me/s/aboutrss/1405)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/k-t-corp/rss-lambda)

### Combine multiple feeds into one[](https://rss.tips/#combine-multiple-feeds-into-one)

-   [RSS Mix](http://www.rssmix.com/)  [250](https://t.me/s/aboutrss/250)
-   [RSS Mixer](http://rssmixer.com/)  [250](https://t.me/s/aboutrss/250)
-   [FEED.INFORMER](http://feed.informer.com/)  [250](https://t.me/s/aboutrss/250)
-   [Feedspot’s RSSCombiner](https://www.feedspot.com/rsscombiner/)  [311](https://t.me/s/aboutrss/311)
-   [RSSUnify](https://feederss.com/index.html)  [1189](https://t.me/s/aboutrss/1189)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [mior](http://mior.ericfu.me/)  [1215](https://t.me/s/aboutrss/1215)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/fuyufjh/mior)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Feed Filter Maker](https://feed.janicek.co/)  [1279](https://t.me/s/aboutrss/1279)

### Obtain translated RSS feed[](https://rss.tips/#obtain-translated-rss-feed)

-   [a Google Script](https://www.labnol.org/internet/google-translate-rss-feeds/5110/)  [712](https://t.me/s/aboutrss/712)
-   [by Using Javascript](https://8430177.github.io/post/jiang-rss-yuan-fan-yi-cheng-zhi-ding-yu-yan-hou-fan-hui/)  [904](https://t.me/s/aboutrss/904)
-   [Use Google Sheet translate RSS item content](https://twitter.com/LorandBodo/status/1414887449189396510)  [1070](https://t.me/s/aboutrss/1070)
-   [RSS-Translation](https://tjsky.github.io/RSS-Translation/)  [1324](https://t.me/s/aboutrss/1324)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/tjsky/Rss-Translation/)
-   [RSS Translator](https://www.rsstranslator.com/)  [1372](https://t.me/s/aboutrss/1372),  [1412](https://t.me/s/aboutrss/1412)

### Styling an RSS feed[](https://rss.tips/#styling-an-rss-feed)

So a new user can see something other than a wall of raw XML. Note that XSLT is going to be deprecated by the browsers.

-   [RSS style with XSL](https://lepture.com/en/2019/rss-style-with-xsl)  [403](https://t.me/s/aboutrss/403)
-   [pretty-feed-v3](https://github.com/genmon/aboutfeeds/blob/main/tools/pretty-feed-v3.xsl)  [965](https://t.me/s/aboutrss/965)
-   [RSS.Style](https://www.rss.style/): now via Javascript instead of XSLT (formerly feed.style)  [1400](https://t.me/s/aboutrss/1400)
-   [StreamBurner](https://git.xmpp-it.net/sch/StreamBurner/src/branch/main/xsl)

### Landing page for RSS Feed[](https://rss.tips/#landing-page-for-rss-feed)

-   [IndieFeed.link](https://indiefeed.link/)  [1418](https://t.me/s/aboutrss/1418)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/lostatc/indiefeed.link)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [RSS.Beauty](https://rss.beauty/)  [1495](https://t.me/s/aboutrss/1495)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/ccbikai/RSS.Beauty)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

### Retrieve old items from a RSS feed[](https://rss.tips/#retrieve-old-items-from-a-rss-feed)

-   [Backfeed](http://backfeed.strangecode.com/)  [991](https://t.me/s/aboutrss/991)
-   [rerss](https://rerss.xyz/)  [1160](https://t.me/s/aboutrss/1160)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [ReFeed.to](https://refeed.to/)  [1474](https://t.me/s/aboutrss/1474)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

### Change RSS feed into vertical text view[](https://rss.tips/#change-rss-feed-into-vertical-text-view)

-   [tategaki.de](https://tategaki.de/feed?url=https://feeds.feedburner.com/allaboutrss)  [1100](https://t.me/s/aboutrss/1100)

### Search across a certain RSS Feed[](https://rss.tips/#search-across-a-certain-rss-feed)

-   [Semantic Search across any RSS feed with Diva](https://www.diva.so/demo)  [1229](https://t.me/s/aboutrss/1229)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

### RSS Feed integrated with AI generated content[](https://rss.tips/#rss-feed-integrated-with-ai-generated-content)

-   [RSSPath](http://www.rsspath.com/)  [1363](https://t.me/s/aboutrss/1363)  ![AI](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-ai-16.png)
-   [RSS-GPT](https://github.com/yinan-c/RSS-GPT)  [1367](https://t.me/s/aboutrss/1367)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/yinan-c/RSS-GPT)![AI](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-ai-16.png)

### Generating Blog’s statistics via RSS feed[](https://rss.tips/#generating-blogs-statistics-via-rss-feed)

-   [EndofYear](https://github.com/7Wate/EndOfYear)  [1384](https://t.me/s/aboutrss/1384)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/7Wate/EndOfYear)

## 👁‍🗨 Ease RSS feed subscribing process and reading experience[](https://rss.tips/#-ease-rss-feed-subscribing-process-and-reading-experience)

### RSS Feed Finding/Detection[](https://rss.tips/#rss-feed-findingdetection)

-   [RSSHub Radar](https://diygod.me/rsshub-radar/)  [47](https://t.me/s/aboutrss/47),  [116](https://t.me/s/aboutrss/116)  [![](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Google_Chrome.png)](https://chrome.google.com/webstore/detail/kefjpfngnndepjbopdmoebkipbgkggaa)[![Firefox](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Mozilla.png)](https://addons.mozilla.org/zh-CN/firefox/addon/rsshub-radar/)[![Windows](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-windows-10-16.png)](https://microsoftedge.microsoft.com/addons/detail/gangkeiaobmjcjokiofpkfpcobpbmnln)[![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/DIYgod/RSSHub-Radar)
-   [Easy to RSS](https://idealclover.top/projects.html)  [![](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Google_Chrome.png)](https://chrome.google.com/webstore/detail/easy-to-rss/hbcmpkcpbnecinpngdnfbnknfkdpdfli)[![Firefox](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Mozilla.png)](https://addons.mozilla.org/zh-CN/firefox/addon/easy-to-rss/)[![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/idealclover/easy-to-rss)
-   [RSS+](https://greasyfork.org/scripts/373252-rss-show-site-all-rss)
-   [Feedsearch](https://feedsearch.dev/)  [310](https://t.me/s/aboutrss/310)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/DBeath/feedsearch-crawler)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [RSS Subscription Extension](https://chrome.google.com/webstore/detail/rss-subscription-extensio/nlbjncdgjeocebhnmkbbbdekmmmcbfjd)  [321](https://t.me/s/aboutrss/321)  ![Chrome](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Google_Chrome.png)
-   [RSS button for Safari](https://rss-extension.bitpiston.com/)  [321](https://t.me/s/aboutrss/321),  [414](https://t.me/s/aboutrss/414)  [![Mac](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-mac-client-16.png)](https://itunes.apple.com/us/app/rss-button-for-safari/id1437501942?ls=1&mt=12)
-   [Awesome RSS](https://github.com/shgysk8zer0/awesome-rss)  [321](https://t.me/s/aboutrss/321)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/shgysk8zer0/awesome-rss)  [![Firefox](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Mozilla.png)](https://addons.mozilla.org/en-US/firefox/addon/awesome-rss/)
-   [Feedbro](https://nodetics.com/feedbro/)  [321](https://t.me/s/aboutrss/321)  [![Chrome](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Google_Chrome.png)](https://chrome.google.com/webstore/detail/feedbro/mefgmmbdailogpfhfblcnnjfmnpnmdfa)[![Firefox](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Mozilla.png)](https://addons.mozilla.org/firefox/addon/feedbroreader/)
-   [Want My RSS](https://github.com/Reeywhaar/want-my-rss)  [558](https://t.me/s/aboutrss/558)  [![Firefox](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Mozilla.png)](https://addons.mozilla.org/en-US/firefox/addon/want-my-rss/)[![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/Reeywhaar/want-my-rss)
-   [Feed Hawk](https://www.goldenhillsoftware.com/feed-hawk/)  [593](https://t.me/s/aboutrss/593)  [![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://itunes.apple.com/us/app/feed-hawk/id1093873777?ls=1&mt=8&at=11l4K5)
-   [RSSPreview](https://github.com/aureliendavid/rsspreview)  [![Firefox](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Mozilla.png)](https://addons.mozilla.org/en-US/firefox/addon/rsspreview/)[![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/aureliendavid/rsspreview)
-   [Inoreader browser extension](https://www.inoreader.com/blog/2020/08/inoreaders-browser-extension-got-a-big-update-today.html)  [![](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Google_Chrome.png)](https://chrome.google.com/webstore/detail/rss-reader-extension-by-i/kfimphpokifbjgmjflanmfeppcjimgah)[![Firefox](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Mozilla.png)](https://addons.mozilla.org/en-US/firefox/addon/rss-reader-extension-inoreader/)[![Windows](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-windows-10-16.png)](https://microsoftedge.microsoft.com/addons/detail/rss-reader-extension-by-/lbjfhdjlblncekgomhadnnpampcahhal)
-   [RSSBud](https://github.com/Cay-Zhang/RSSBud)  [816](https://t.me/s/aboutrss/816),  [910](https://t.me/s/aboutrss/910),  [1064](https://t.me/s/aboutrss/1064),  [1356](https://t.me/s/aboutrss/1356)  : iOS-version RSSHub Radar  [![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://apps.apple.com/us/app/rssbud/id1531443645)[![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/Cay-Zhang/RSSBud)
-   [RSSAid](https://github.com/lt94/RSSAid/)  [911](https://t.me/s/aboutrss/911),  [1475](https://t.me/s/aboutrss/1475)  : Android-version RSSHub Radar  [![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://github.com/lt94/RSSAid/releases)[![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/lt94/RSSAid/)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [RSS Finder](https://rss-finder-web-app.vercel.app/)  [1003](https://t.me/s/aboutrss/1003)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/alexdevero/rss-finder-web-app)
-   [Another RSS Finder](https://rss-finder.rook1e.com/)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/0x2E/rss-finder)
-   RSS Manager  [1169](https://t.me/s/aboutrss/1169)  [![Firefox](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Mozilla.png)](https://addons.mozilla.org/firefox/addon/rss-manager/)
-   [Thirdplace Discovery](https://discovery.thirdplace.no/)  [1202](https://t.me/s/aboutrss/1202)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://git.sr.ht/~thirdplace)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Get RSS Feed URL](https://github.com/shevabam/get-rss-feed-url-extension)  [![Chrome](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Google_Chrome.png)](https://chrome.google.com/webstore/detail/get-rss-feed-url/kfghpdldaipanmkhfpdcjglncmilendn)[![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/shevabam/get-rss-feed-url-extension)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [RSS+Atom Feed Subscribe Button Generator](https://greasyfork.org/scripts/6261-rss-atom-feed-subscribe-button-generator)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [FeedReader App](https://feedreader.xyz/)  [1364](https://t.me/s/aboutrss/1364)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [RSS feed ASAP](https://rssfeedasap.com/)  [1373](https://t.me/s/aboutrss/1373)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

### Subscribing Button[](https://rss.tips/#subscribing-button)

-   [SubToMe](https://www.subtome.com/)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/superfeedr/subtome)

### iOS Shortcut[](https://rss.tips/#ios-shortcut)

-   [获得播客订阅RSS](https://www.icloud.com/shortcuts/3a63525217c54f3d81bae8ea55f9f574)  [295](https://t.me/s/aboutrss/295)
-   [Add Feed To TTRSS](https://www.icloud.com/shortcuts/321cb16915324146b3f7931b5b2a08b7)  [344](https://t.me/s/aboutrss/344)
-   [RSS: Subscribe in NNW](https://www.icloud.com/shortcuts/4e943bc13a7b43a5b60e47ff35807698)  [344](https://t.me/s/aboutrss/450)
-   [播客转换 RSS](https://sharecuts.cn/shortcut/7620)  [726](https://t.me/s/aboutrss/726)

### Browser Booklet[](https://rss.tips/#browser-booklet)

-   [RSS-to-Inoreader](https://tmr.js.org/p/dd73704/)  [228](https://t.me/s/aboutrss/228)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/ttttmr/UserJS)
-   [Subscribe ZhihuZhuanlan](https://rss.lilydjwg.me/)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/lilydjwg/morerssplz)
-   [Subscribe V2EX post comments](https://rss.lilydjwg.me/)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/lilydjwg/morerssplz)

### TOC Support[](https://rss.tips/#toc-support)

-   Simple Outliner: show TOC in Inoreader / Feedly @ Chrome  [1186](https://t.me/s/aboutrss/1186)  [![Chrome](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Google_Chrome.png)](https://chrome.google.com/webstore/detail/smart-toc-%E6%99%BA%E8%83%BD%E7%BD%91%E9%A1%B5%E5%A4%A7%E7%BA%B2/ppdjhggfcaenclmimmdigbcglfoklgaf)

## 🧩 API[](https://rss.tips/#-api)

-   [RSS API](https://rssapi.net/)  [279](https://t.me/s/aboutrss/279)  : Convert & subscribe to RSS, ATOM and JSON-Feeds via API
-   [Feedspot API](https://www.feedspot.com/fs/apireadme)  [290](https://t.me/s/aboutrss/290)
-   [Feedsearch](https://feedsearch.dev/)  [310](https://t.me/s/aboutrss/310)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/DBeath/feedsearch-crawler)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [feedi](https://github.com/davidesantangelo/feedi)  [527](https://t.me/s/aboutrss/527)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/davidesantangelo/feedi)
-   [Substats](https://api.spencerwoo.com/substats/)  [452](https://t.me/s/aboutrss/452),  [470](https://t.me/s/aboutrss/470)  : Serverless Function to Count How Many People are Subscribed to You in Your Favorite Services  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/spencerwooo/Substats)
-   [Open Reader API](https://rss-sync.github.io/Open-Reader-API/): a common feed-syncing API protocol  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/rss-sync/Open-Reader-API)
-   [FetchRSS API](https://fetchrss.com/api)
-   [Fever API](https://feedafever.com/api)
-   [granary](https://granary.io/)  [709](https://t.me/s/aboutrss/709)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/snarfed/granary/)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Pipfeed news extract API](https://pipfeed.com/news-extract-api/)  [874](https://t.me/s/aboutrss/874)
-   [Thirdplace Discovery: Feed discovery HTML JSON API](https://discovery.thirdplace.no/)  [1202](https://t.me/s/aboutrss/1202)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://git.sr.ht/~thirdplace)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [RSS2JSONFeed converter](https://rss2json.com/)  [226](https://t.me/s/aboutrss/226)
-   [RSS feed to JSON API](https://rss-to-json-serverless-api.vercel.app/)  [1285](https://t.me/s/aboutrss/1285)
-   [SearQ](https://searq.org/): a RESTful API that simplifies the search for data from RSS feeds.  [1308](https://t.me/s/aboutrss/1308)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/davidesantangelo/searq.org)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

## 🏗️ Tools for parsing / decoding RSS[](https://rss.tips/#%EF%B8%8F-tools-for-parsing--decoding-rss)

-   [SyndiKit](https://github.com/brightdigit/SyndiKit): Swift Package for Decoding RSS Feeds  [1426](https://t.me/s/aboutrss/1426)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/brightdigit/SyndiKit)
-   [SimplePie](https://simplepie.org/): A simple Atom/RSS parsing library for PHP  [1426](https://t.me/s/aboutrss/1426)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/simplepie/simplepie/)
-   [RSS Gen](https://doc.rssgen.co/): A comprehensive Rust library for generating, parsing, serializing, and deserializing RSS feeds across various RSS versions  [1483](https://t.me/s/aboutrss/1483)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/sebastienrousseau/rssgen)
-   [Crawler-Buddy](https://github.com/rumca-js/crawler-buddy): A server that parses RSS links, and provides output as standardized JSON. Provides feeds for input links

## ⛓ OPML management[](https://rss.tips/#-opml-management)

-   [OPML Checklist](http://this.how/opmlChecklist/)  [1055](https://t.me/s/aboutrss/1055)
-   [FeedLand](http://docs.feedland.org/firstThings.opml)  [495](https://t.me/s/aboutrss/495),  [1271](https://t.me/s/aboutrss/1271)
-   [Feed Curator](https://vincode.io/feed-curator/)  [500](https://t.me/s/aboutrss/500)  [![Mac](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-mac-client-16.png)](https://itunes.apple.com/us/app/feed-curator/id1458647758)[![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/vincode-io/FeedCurator)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [RSS-OPML-to-Markdown](https://github.com/idealclover/RSS-OPML-to-Markdown)  [542](https://t.me/s/aboutrss/542)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/idealclover/RSS-OPML-to-Markdown)
    -   [RSS-OPML-to-Markdown enhancement](https://github.com/AboutRSS/RSS-OPML-to-Markdown/)  [1387](https://t.me/s/aboutrss/1387)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/AboutRSS/RSS-OPML-to-Markdown/)
-   [OPML generator](https://opml-gen.ovh/)  [703](https://t.me/s/aboutrss/703)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [OPML-compatible apps list](http://opml.org/compatibleApps.opml)  [1216](https://t.me/s/aboutrss/1216)
-   [Little Outliner](http://littleoutliner.com/)  [1055](https://t.me/s/aboutrss/1055): browse and edit OPML files.
-   [opml-editor](https://opml.imadij.com/)  [1467](https://t.me/s/aboutrss/1467)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/imdj/opml-editor)

## 📦 Feed Resources/Providers/Recommendations[](https://rss.tips/#-feed-resourcesprovidersrecommendations)

### News[](https://rss.tips/#news)

-   [上下闻](https://news.mindynode.com/en/)  [111](https://t.me/s/aboutrss/111)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/josherich/RSS-ORG)
-   [Unofficial Reuters RSS Feed](https://www.fivefilters.org/2021/reuters-rss-feeds/)  [987](https://t.me/s/aboutrss/987)
-   [Awesome-newsCN-feeds](https://github.com/RSS-Renaissance/awesome-newsCN-feeds)

### Entertainment[](https://rss.tips/#entertainment)

-   [KOTOMI RSS](https://moe4sale.in/)  [18](https://t.me/s/aboutrss/18)  : Anime RSS 索引站，将你的搜索结果订阅为 RSS 源  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/greensea/rssindexer)
-   [MusicButler](https://www.musicbutler.io/)  [187](https://t.me/s/aboutrss/187)  : lets you know when your favorite musicians and bands have released new music.
-   [HK TV series feed for RSS Player](http://allenlow.com/blog/2019/09/22/%E6%B8%AF%E5%89%A7rss-player%E5%90%8E%E5%A4%87rss%E9%93%BE%E6%8E%A5%E5%88%86%E4%BA%AB/)  [270](https://t.me/s/aboutrss/270)
-   [7 RSS Feeds for the Movies Addict](https://www.makeuseof.com/tag/4-rss-feeds-for-the-movies-addict/)  [338](https://t.me/s/aboutrss/338)
-   [Comics RSS](https://www.comicsrss.com/)  [566](https://t.me/s/aboutrss/566)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/ArtskydJ/comicsrss.com)
-   [蜜柑计划 - Mikan Project](https://mikanani.me/)
-   [SHOWRSS: for Broadcatching](https://showrss.info/)

### Society[](https://rss.tips/#society)

-   [一些法律相关信息的 RSS 订阅地址](https://blackwinmin.github.io/posts/law_rss/)  [681](https://t.me/s/aboutrss/681)
-   [品葱精选](https://github.com/Project-Gutenberg/Pincong)  [685](https://t.me/s/aboutrss/685)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/Project-Gutenberg/Pincong)

### Jobs[](https://rss.tips/#jobs)

-   [远程工作职位的 rss 聚合](http://dynamic.yuanjingtech.com/rss/remote-work-jobs.xml)  [320](https://t.me/s/aboutrss/320)

### Tech or IT[](https://rss.tips/#tech-or-it)

-   [RSS Kubernetes](https://t.me/rss_kubernetes)  [401](https://t.me/s/aboutrss/401)
-   [Chinese Security RSS](https://github.com/zhengjim/Chinese-Security-RSS/blob/master/README.md)  [462](https://t.me/s/aboutrss/462)
-   [CyberSecurityRSS](https://github.com/zer0yu/CyberSecurityRSS)  [463](https://t.me/s/aboutrss/463)
-   [favorite link](https://www.guanguans.cn/favorite-link/)  [513](https://t.me/s/aboutrss/513)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/guanguans/favorite-link)
-   [RSS-IT人](https://github.com/Gracker/Rss-IT)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/Gracker/Rss-IT)
-   [软件开发相关RSS源推荐](https://blog.liyaodong.com/posts/rss-list-for-software-development/)  [557](https://t.me/s/aboutrss/557)
-   [f43.me](https://f43.me/)  [590](https://t.me/s/aboutrss/590)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/j0k3r/f43.me)
-   [ReadRUST](https://readrust.net/)  [620](https://t.me/s/aboutrss/620)  : supports JSON feed  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/wezm/read-rust)
-   [Techblast](http://techblast.scripting.com/)  [691](https://t.me/s/aboutrss/691)
-   [Front-End RSS](https://front-end-rss.now.sh/)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/ChanceYu/front-end-rss)
-   [Awesome ML/AI RSS feed](https://github.com/vishalshar/awesome_ML_AI_RSS_feed)  [736](https://t.me/s/aboutrss/736)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/vishalshar/awesome_ML_AI_RSS_feed)
-   [Artificial Intelligence RSS Feeds on the Web](https://www.artificial-intelligence.blog/rss-feeds/)
-   [前端开发/互联网数码/各种软件](https://t.me/s/aboutrss/767)  by 「RSS 交流群」管理员  [@lengthmin](https://github.com/lengthmin)  [768](https://t.me/s/aboutrss/768)
-   [Feed picker for Microsoft products](https://support.microsoft.com/en-us/rss-feed-picker)  [879](https://t.me/s/aboutrss/879)
-   [A collection of over 900 RSS feeds for web developers, updated monthly](https://github.com/simevidas/web-dev-feeds)  [929](https://t.me/s/aboutrss/929)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/simevidas/web-dev-feeds)
-   [Information Security News](https://attachments.convertkitcdnn2.com/446246/c3c56058-be1f-4967-9fae-f21b2b563020/security-news.opml)  [947](https://t.me/s/aboutrss/947)
-   [The iOS Dev Directory](https://iosdevdirectory.com/)  [954](https://t.me/s/aboutrss/954)
-   [Indie Hackers Unofficial Feeds](https://feed.indiehackers.world/)  [961](https://t.me/s/aboutrss/961)
-   [Mac iOS Tech Blogs By Women](https://inessential.com/2015/11/16/blogs_by_women)
-   [Software Engineering Blogs](https://github.com/kilimchoi/engineering-blogs/)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/kilimchoi/engineering-blogs/)
-   [Tech Blogs shared by Emacs China Forum users](https://emacs-china.org/t/elfeed-tech-feeds-rss/17680)  [1071](https://t.me/s/aboutrss/1071)
-   [Awesome-techCN-feeds](https://github.com/RSS-Renaissance/awesome-techCN-feeds)
-   [](https://refined.blog/)Refined Blog

#### Crypto or Blockchain relevant[](https://rss.tips/#crypto-or-blockchain-relevant)

-   [ChainFeeds](https://www.chainfeeds.xyz/)  [1210](https://t.me/s/aboutrss/1210)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/chainfeeds/RSSAggregatorforWeb3)
-   [【925】位优质Mirror作者的Feed地址](https://twitter.com/zlexdl/status/1502629374889144323)  [1210](https://t.me/s/aboutrss/1210)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/zlexdl/mirror)
-   [PrimitivesFeed](https://github.com/PrimitivesLane/PrimitivesFeed)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/PrimitivesLane/PrimitivesFeed)
-   [Bitcoin RSS Feeds](https://bc1984.com/bitcoin-rss-feeds/)  [1143](https://t.me/s/aboutrss/1143)

### Multi-subject[](https://rss.tips/#multi-subject)

-   [Feed43 Feeds List](https://github.com/AboutRSS/ALL-about-RSS/blob/master/Feed43-Feeds-List.md)  [t1](https://twitter.com/aboutRSS/status/1237224150634082305)  : a  **subproject**  of 「ALL about RSS」.
-   My Telegram channel sharing RSS feeds collected by others
    -   [1](https://t.me/s/aboutrss/1071)  [2](https://t.me/s/aboutrss/1099)  [3](https://t.me/s/aboutrss/1143)  [4](https://t.me/s/aboutrss/1195)  [5](https://t.me/s/aboutrss/1210)  [6](https://t.me/s/aboutrss/1273)  [7](https://t.me/s/aboutrss/1296)  [8](https://t.me/s/aboutrss/1320)  [9](https://t.me/aboutrss/s/1349)  [10](https://t.me/s/aboutrss/1371)  [11](https://t.me/s/aboutrss/1395)  [12](https://t.me/s/aboutrss/1414)  [13](https://t.me/s/aboutrss/1442)  [14](https://t.me/s/aboutrss/1459)  [15](https://t.me/s/aboutrss/1487)
-   [Henix’s feeds](https://henix.github.io/feeds/)  [186](https://t.me/s/aboutrss/186)
-   [rss-源共享](https://trello.com/b/lvMGhlNB/%F0%9F%8E%89rss-%E6%BA%90%E5%85%B1%E4%BA%AB)  [191](https://t.me/s/aboutrss/191)
-   [「一天世界」推荐的RSS订阅列表](https://blog.yitianshijie.net/2019/12/10/rss-feeds-recommendation/)  [313](https://t.me/s/aboutrss/313)
-   [Feed Compass](https://vincode.io/feed-compass/)  [500](https://t.me/s/aboutrss/500)  [![Mac](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-mac-client-16.png)](https://itunes.apple.com/us/app/feed-compass/id1458648487)[![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/vincode-io/FeedCompass)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   RSS, 大の搜查 by 轻芒杂志：[01](http://statics01.qingmang.mobi/qingmang.opml)  [02](http://statics01.qingmang.mobi/qingmang_88rss.opml)  [570](https://t.me/s/aboutrss/570)
-   [RSS Source
    
    充实你的 RSS 订阅源](https://rss-source.com/)  [770](https://t.me/s/aboutrss/770)
    
-   [Reabble.cn 推荐的热门订阅源](https://reabble.cn/help)
-   [theChenWen 整理的 4 份 OPML](https://twitter.com/theChenWen/status/1296256174837215234)  [775](https://t.me/s/aboutrss/775)
-   [OPML of D介子](https://github.com/JoJo720/JoJo720/blob/master/assets/rss/D%E4%BB%8B%E5%AD%90.opml)  [801](https://t.me/s/aboutrss/801)
-   [「A君私藏的超好用 RSS 订阅源」 by 爱范儿](https://shimo.im/docs/iwRFK7VNmZIxnuL7/)  [803](https://t.me/s/aboutrss/803)
-   [Popular RSS Feeds by RSS.com](https://rss.com/blog/popular-rss-feeds/)
-   [RSS Feeds from Telegram Channel: DailyRSS](https://t.me/allaboutrss/4893)  [923](https://t.me/s/aboutrss/923)
-   [RSS Maker](https://rss.mk/)  [936](https://t.me/s/aboutrss/936)
-   [Awesome RSS Feeds](https://github.com/spians/awesome-rss-feeds)  [1073](https://t.me/s/aboutrss/1073)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/spians/awesome-rss-feeds)
-   [Single Feed Sharing on Twitter](https://twitter.com/aboutRSS/timelines/1527857429467172864)  [1221](https://t.me/s/aboutrss/1221)
-   [RSS Feed Bundles Sharing on Twitter](https://twitter.com/aboutRSS/timelines/1527674304921362432)  [1230](https://t.me/s/aboutrss/1230)
-   [Buzzing](https://www.buzzing.cc/)  [1250](https://t.me/s/aboutrss/1250)
-   [MoreRSS](https://morerss.com/index.php)  [1442](https://t.me/s/aboutrss/1442)
-   [Awesome RSSHub Routes](https://github.com/JackyST0/awesome-rsshub-routes)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/JackyST0/awesome-rsshub-routes)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

### Aggregators of Indieblogs[](https://rss.tips/#aggregators-of-indieblogs)

-   [中文独立博客列表](https://github.com/timqian/chinese-independent-blogs)  [301](https://t.me/s/aboutrss/301),  [417](https://t.me/s/aboutrss/417)
-   [中文博客RSS订阅](https://t.me/s/chinarss)  [299](https://t.me/s/aboutrss/299)
-   [BlogHub](https://bloghub.fun/)  [417](https://t.me/s/aboutrss/417)
-   [seekbetter.me 寻我](https://seekbetter.me/)  [417](https://t.me/s/aboutrss/417)
-   [BlogWe](https://blogwe.com/)
-   [十年之约](https://foreverblog.cn/)
-   [中文博客圈](https://blog.huhexian.com/)
-   [优秀个人独立博客导航](http://www.jetli.com.cn/)
-   [博客啦](https://www.boke.la/)
-   [「独立 blog 订阅列表」](https://www.notion.so/blog-by-liqi-io-4bdf37d4fb3443b4b6dbed8317450307)  by  [利器](https://liqi.io/)  [763](https://t.me/s/aboutrss/763)
-   [中文独立博客全订阅计划](https://box.othing.xyz/)  [834](https://t.me/s/aboutrss/834)
-   [Blog Surf](https://blogsurf.io/)
-   [RSS Club](https://daverupert.com/rss-club/)
-   [RSSBlog](https://rssblog.cn/)  [1079](https://t.me/s/aboutrss/1079)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/caibingcheng/rssblog)
-   [Awesome-blogCN-feeds](https://github.com/RSS-Renaissance/awesome-blogCN-feeds)
-   [Mataroa Collection](https://collection.mataroa.blog/)
-   [Find Blog 发现博客](https://t.me/s/findblog)  [1227](https://t.me/s/aboutrss/1227)
-   [ooh! directory](https://ooh.directory/)  [1296](https://t.me/s/aboutrss/1296)
-   [积薪](https://firewood.news/)  [1331](https://t.me/s/aboutrss/1331)
-   [Blog of the .Day](https://blogofthe.day/)  [1458](https://t.me/s/aboutrss/1458)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/artlung/blogofthe.day)

## 🔨 Blog Generator that Support RSS[](https://rss.tips/#-blog-generator-that-support-rss)

-   [Nobelium](https://github.com/craigary/nobelium)  [999](https://t.me/s/aboutrss/999)
-   [Ghost](https://ghost.org/)  [999](https://t.me/s/aboutrss/999)
-   [pu-blog](https://py-blog.zcmimi.top/)  [999](https://t.me/s/aboutrss/999)
-   [Maverick](https://alandecode.github.io/Maverick/)  [999](https://t.me/s/aboutrss/999)
-   [Solo / Pipe at B3log](https://b3log.org/)  [999](https://t.me/s/aboutrss/999)
-   [Halo](https://b3log.org/)  [999](https://t.me/s/aboutrss/999)
-   [Gridea](https://gridea.dev/)  [999](https://t.me/s/aboutrss/999)
-   [Peach Blog](https://github.com/LeetaoGoooo/peach-blog)  [999](https://t.me/s/aboutrss/999)
-   [Gatsby](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-an-rss-feed/)  [999](https://t.me/aboutrss/999?comment=7005)
-   [Typefully Profiles](https://typefully.com/profile): Turn your Twitter Threads into blog  [1177](https://t.me/s/aboutrss/1177)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Montaigne](https://montaigne.io/)  [1282](https://t.me/s/aboutrss/1282)
-   [Hey World](https://hey.com/world/)  [1282](https://t.me/s/aboutrss/1282)
-   [lists.sh](https://lists.sh/)  [1282](https://t.me/s/aboutrss/1282)
-   [Bear](https://bearblog.dev/)  [1282](https://t.me/s/aboutrss/1282)
-   [Listed](https://listed.to/)  [1282](https://t.me/s/aboutrss/1282)
-   [Hashnode](https://hashnode.com/)  [1282](https://t.me/s/aboutrss/1282)
-   [xLog](https://xlog.app/)
-   [microfeed](https://www.microfeed.org/)  [1304](https://t.me/s/aboutrss/1304)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/microfeed/microfeed)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [microblogpub](https://microblog.pub/)  [1323](https://t.me/s/aboutrss/1323)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://sr.ht/~tsileo/microblog.pub/)

### Blogroll generator[](https://rss.tips/#blogroll-generator)

-   [Blog friend circle](https://github.com/prinsss/blog-friend-circle/)  [1431](https://t.me/s/aboutrss/1431)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/prinsss/blog-friend-circle/)

## ⏬ Utilize RSS to automate downloading / Broadcatching[](https://rss.tips/#-utilize-rss-to-automate-downloading--broadcatching)

-   [waifu!d for aria2](https://github.com/pcmid/waifud)  [276](https://t.me/s/aboutrss/276)  : a downloader bot  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/ttttmr/UserJS)
-   [RSS & you-get](https://left.pink/archives/2712)  [494](https://t.me/s/aboutrss/494)  : 自动下载B站收藏视频至VPS
-   [FLEXGET](https://flexget.com/)  [749](https://t.me/s/aboutrss/749)
-   [Catch](https://giorgiocalderolla.com/catch.html)  [1045](https://t.me/s/aboutrss/1045)
-   [Radarr](https://radarr.video/)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/Radarr/Radarr)
-   [Sonarr](https://sonarr.tv/)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/Sonarr/Sonarr)
-   [AniVu](https://github.com/SkyD666/AniVu)  [1484](https://t.me/s/aboutrss/1484)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/SkyD666/AniVu)[![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://f-droid.org/packages/com.skyd.anivu)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)

### Clients that support RSS[](https://rss.tips/#clients-that-support-rss)

-   [qBittorrent](https://www.qbittorrent.org/)  [1104](https://t.me/s/aboutrss/1104)

## 🤝 RSS Relevant Community[](https://rss.tips/#-rss-relevant-community)

### Social Network Based on RSS Feed[](https://rss.tips/#social-network-based-on-rss-feed)

-   [](https://www.kalaksi.com/)kalaksi  [975](https://t.me/s/aboutrss/975)
-   [flus](https://flus.fr/)  [1106](https://t.me/s/aboutrss/1106)

### Discussion Forums[](https://rss.tips/#discussion-forums)

-   [RSS node at V2EX](https://www.v2ex.com/go/rss)  [230](https://t.me/s/aboutrss/230)
-   [/r/rss : a subreddit](https://www.reddit.com/r/rss/)
-   [RSS-Public Mailing List](https://groups.google.com/g/rss-public)
-   [RSS@lemmy.ml](https://lemmy.ml/c/rss)

### Telegram Groups / Channels[](https://rss.tips/#telegram-groups--channels)

-   About RSS ([Channel](https://t.me/s/aboutrss)  /  [Group](https://t.me/allaboutrss)  /  [Blog](https://blog.rss.tips/)[1477](https://t.me/s/aboutrss/1477))
-   RSSHub ([Channel](https://t.me/s/awesomeRSSHub)  /  [Group](https://t.me/rsshub))  [229](https://t.me/s/aboutrss/229)
-   [RSS 交流群](https://t.me/joinchat/Ag98F0evTbZwY8HB7oH4fA)
-   RSS Reader App: 期待 - Angelia ([Group](https://t.me/angeliachat))
-   a Full Article Extractor Service: RSS屋 ([Group](https://t.me/joinchat/HiIOAxV7g9JwNuLuThUsyQ))
-   iOS RSS Reader: Prime ([Group](https://t.me/meiyiumingzi))
-   iOS RSS Reader: Ego Reader ([Channel](https://t.me/egoreader_channel)  /  [Group](https://t.me/EgoReader))
-   a Page2RSS service: PolitePol ([Group](https://t.me/joinchat/FuHC1Q-m9ZL7wu_aSmY8PA))
-   [Inoreader 交流群](https://t.me/joinchat/EqQ3nEOEbMHqQHLd6ai-SQ)
-   Tiny Tiny RSS ([Channel](https://t.me/TinyTinyRSS))
-   博客全订阅 ([Channel](https://t.me/blogrsslist)  /  [Group](https://t.me/blogrsslists))  [834](https://t.me/s/aboutrss/834)
-   RSSBud ([Channel](https://t.me/rssbud)  /  [Group](https://t.me/RSSBud_Discussion))  [816](https://t.me/s/aboutrss/816)
-   Feeds Pub ([Channel](https://t.me/feedspub)  /  [Group](https://t.me/feedspub_chat))  [485](https://t.me/s/aboutrss/485)
-   NodeRSSbot ([Channel](https://t.me/NodeRSSBotStatus))
-   TheFeedReaderBot ([Group](https://t.me/TheFeedReaderBotSupport))
-   RSS Bot ([Channel](https://t.me/BotChangelog)  /  [Group](https://t.me/ChannelBros))
-   FreshRSS ([Group](https://t.me/freshrss))
-   RSS3 ([Channel](https://t.me/rss3_c)  /  [Group](https://t.me/joinchat/kP4gHZQPgvdkZmE5))  [1030](https://t.me/s/aboutrss/1030)
-   RSSAid ([Channel](https://t.me/rssaid)  /  [Group](https://t.me/rssaid_group))
-   El Monitorro RSS bot ([Group](https://t.me/el_monitorro))
-   RSSerpent ([Group](https://t.me/rsserpent))
-   Read You: an Android RSS Reader ([Group](https://t.me/ReadYouApp))  [1201](https://t.me/s/aboutrss/1201)
-   RSSEverything ([Group](https://t.me/rsseverything))  [1313](https://t.me/s/aboutrss/1313)

### Official Mastodon Accounts of RSS relevant Apps/Tools/Services/Developers  [1301](https://t.me/s/aboutrss/1301)[](https://rss.tips/#official-mastodon-accounts-of-rss-relevant-appstoolsservicesdevelopers-1301)

-   Feedbin:  [@feedbin@feedbin.social](https://feedbin.social/@feedbin)
-   Unread:  [@unread@mastodon.goldenhillsoftware.com](https://mastodon.goldenhillsoftware.com/@unread)
-   Reeder Developer:  [@rizzi@gloria.social](https://gloria.social/@rizzi)
-   FieryFeeds:  [@fieryfeeds@indieapps.space](https://indieapps.space/@fieryfeeds)
-   Feedly Developer：[@oliv@mastodon.feedly.com](https://mastodon.feedly.com/@oliv)
-   NetNewsWire:  [@NetNewsWire@micro.blog](https://micro.blog/netnewswire)
-   Inoreader:  [@Inoreader@mastodon.social](https://mastodon.social/@Inoreader)
-   Dave Winer：[@davew@mastodon.social](https://mastodon.social/@davew)
-   RSS ADVISORY BOARD:  [@rssboard@mastodon.social](https://mastodon.social/@rssboard)

## ✒ Posts by individuals[](https://rss.tips/#-posts-by-individuals)

### Views / Discussions / Experiences[](https://rss.tips/#views--discussions--experiences)

-   Collections shared in the Telegram Channel
    -   [28](https://t.me/s/aboutrss/1111),  [29](https://t.me/s/aboutrss/1119),  [30](https://t.me/s/aboutrss/1125),  [31](https://t.me/s/aboutrss/1140),  [32](https://t.me/s/aboutrss/1148),  [33](https://t.me/s/aboutrss/1154),  [34](https://t.me/s/aboutrss/1161),  [35](https://t.me/s/aboutrss/1173),  [36](https://t.me/s/aboutrss/1185),  [37](https://t.me/s/aboutrss/1192),  [38](https://t.me/s/aboutrss/1200),  [39](https://t.me/s/aboutrss/1207),  [40](https://t.me/s/aboutrss/1214),  [41](https://t.me/s/aboutrss/1234),  [42](https://t.me/s/aboutrss/1246),  [43](https://t.me/s/aboutrss/1260), ,  [44](https://t.me/s/aboutrss/1268),  [45](https://t.me/s/aboutrss/1278),  [46](https://t.me/s/aboutrss/1284),  [47](https://t.me/s/aboutrss/1290),  [48](https://t.me/s/aboutrss/1295),  [49](https://t.me/s/aboutrss/1302),  [50](https://t.me/s/aboutrss/1307),  [51](https://t.me/s/aboutrss/1316),  [52](https://t.me/s/aboutrss/1328),  [53](https://t.me/s/aboutrss/1339),  [54](https://t.me/s/aboutrss/1347),  [55](https://t.me/s/aboutrss/1357),  [56](https://t.me/s/aboutrss/1369),  [57](https://t.me/s/aboutrss/1380),  [58](https://t.me/s/aboutrss/1393),  [59](https://t.me/s/aboutrss/1401),  [60](https://t.me/s/aboutrss/1410),  [61](https://t.me/s/aboutrss/1416),  [62](https://t.me/s/aboutrss/1430)  ,  [63](https://t.me/s/aboutrss/1446)  ,  [64](https://t.me/s/aboutrss/1453),  [65](https://t.me/s/aboutrss/1466),  [66](https://t.me/s/aboutrss/1481),  [67](https://t.me/s/aboutrss/1489),  [68](https://t.me/s/aboutrss/1496)
-   Introduce RSS  [339](https://t.me/s/aboutrss/339),  [355![Video](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-circled-play-16.png)](https://t.me/s/aboutrss/355),  [396](https://t.me/s/aboutrss/396),  [416](https://t.me/s/aboutrss/416),  [531](https://t.me/s/aboutrss/531),  [552](https://t.me/s/aboutrss/552),  [635](https://t.me/s/aboutrss/635),  [679](https://t.me/s/aboutrss/679),  [950](https://t.me/s/aboutrss/950),  [1014](https://t.me/s/aboutrss/1014)
-   Views / Discussions About  **RSS**  [4](https://t.me/s/aboutrss/4),  [6](https://t.me/s/aboutrss/6),  [10](https://t.me/s/aboutrss/10),  [11](https://t.me/s/aboutrss/11),  [115](https://t.me/s/aboutrss/115),  [132](https://t.me/s/aboutrss/132),  [241](https://t.me/s/aboutrss/241),  [265](https://t.me/s/aboutrss/265),  [335](https://t.me/s/aboutrss/335),  [350](https://t.me/s/aboutrss/350),  [378](https://t.me/s/aboutrss/378),  [397](https://t.me/s/aboutrss/397),  [447](https://t.me/s/aboutrss/447),  [479](https://t.me/s/aboutrss/479),  [605](https://t.me/s/aboutrss/605),  [938](https://t.me/s/aboutrss/938),  [957](https://t.me/s/aboutrss/957)
-   Individual Experiences  [3](https://t.me/s/aboutrss/3),  [19](https://t.me/s/aboutrss/19),  [92](https://t.me/s/aboutrss/92),  [139](https://t.me/s/aboutrss/139),  [163](https://t.me/s/aboutrss/163),  [168](https://t.me/s/aboutrss/168),  [182](https://t.me/s/aboutrss/182),  [240](https://t.me/s/aboutrss/240),  [243](https://t.me/s/aboutrss/243),  [316](https://t.me/s/aboutrss/316),  [318](https://t.me/s/aboutrss/318),  [351](https://t.me/s/aboutrss/351),  [375](https://t.me/s/aboutrss/375),  [406](https://t.me/s/aboutrss/406),  [431](https://t.me/s/aboutrss/431),  [442](https://t.me/s/aboutrss/442),  [453](https://t.me/s/aboutrss/453),  [456![Video](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-circled-play-16.png)](https://t.me/s/aboutrss/456),  [475](https://t.me/s/aboutrss/475),  [514](https://t.me/s/aboutrss/514),  [543](https://t.me/s/aboutrss/543),  [591![Video](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-circled-play-16.png)](https://t.me/s/aboutrss/591),  [638![Podcast](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-sound-surround-16.png)](https://t.me/s/aboutrss/638),  [641![Podcast](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-sound-surround-16.png)](https://t.me/s/aboutrss/641),  [718](https://t.me/s/aboutrss/718),  [720](https://t.me/s/aboutrss/720),  [783](https://t.me/s/aboutrss/783),  [784](https://t.me/s/aboutrss/784),  [861](https://t.me/s/aboutrss/861),  [877](https://t.me/s/aboutrss/877),  [900](https://t.me/s/aboutrss/900),  [903](https://t.me/s/aboutrss/903),  [907](https://t.me/s/aboutrss/907),  [921![Podcast](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-sound-surround-16.png)](https://t.me/s/aboutrss/921),  [979](https://t.me/s/aboutrss/979),  [1095](https://t.me/s/aboutrss/1010)
-   Views / Discussions About  **Newsletters**  [496](https://t.me/s/aboutrss/496)
-   Views / Discussions About RSS and RSS3  [1187![Podcast](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-sound-surround-16.png)](https://t.me/s/aboutrss/1187)

### Tutorials when knowing how to run code[](https://rss.tips/#tutorials-when-knowing-how-to-run-code)

-   Collections shared in the Telegram channel
    -   [1](https://t.me/s/aboutrss/1048),  [2](https://t.me/s/aboutrss/1101),  [3](https://t.me/s/aboutrss/1122),  [4](https://t.me/s/aboutrss/1130),  [5](https://t.me/s/aboutrss/1058),  [6](https://t.me/s/aboutrss/1067),  [7](https://t.me/s/aboutrss/1082),  [8](https://t.me/s/aboutrss/1088),  [9](https://t.me/s/aboutrss/1097),  [10](https://t.me/s/aboutrss/1205),  [11](https://t.me/s/aboutrss/1212),  [12](https://t.me/s/aboutrss/1217),  [13](https://t.me/s/aboutrss/1243),  [14](https://t.me/s/aboutrss/1249),  [15](https://t.me/s/aboutrss/1263),  [16](https://t.me/s/aboutrss/1276),  [17](https://t.me/s/aboutrss/1280),  [18](https://t.me/s/aboutrss/1286),  [19](https://t.me/s/aboutrss/1293),  [20](https://t.me/s/aboutrss/1300),  [21](https://t.me/s/aboutrss/1304),  [22](https://t.me/s/aboutrss/1311),  [23](https://t.me/s/aboutrss/1323),  [24](https://t.me/s/aboutrss/1336),  [25](https://t.me/aboutrss/s/1343),  [26](https://t.me/s/aboutrss/1353),  [27](https://t.me/s/aboutrss/1366),  [28](https://t.me/s/aboutrss/1377),  [29](https://t.me/s/aboutrss/1385),  [30](https://t.me/s/aboutrss/1398),  [31](https://t.me/s/aboutrss/1408),  [32](https://t.me/s/aboutrss/1426),  [33](https://t.me/s/aboutrss/1438),  [34](https://t.me/s/aboutrss/1449),  [35](https://t.me/s/aboutrss/1456),  [36](https://t.me/s/aboutrss/1471),  [37](https://t.me/s/aboutrss/1483),  [38](https://t.me/s/aboutrss/1492)
-   For JavaScript coders  [291](https://t.me/s/aboutrss/291),  [370](https://t.me/s/aboutrss/370),  [468](https://t.me/s/aboutrss/468),  [499](https://t.me/s/aboutrss/499),  [511![Video](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-circled-play-16.png)](https://t.me/s/aboutrss/511),  [519](https://t.me/s/aboutrss/519),  [589](https://t.me/s/aboutrss/589),  [634](https://t.me/s/aboutrss/634),  [842](https://t.me/s/aboutrss/842),  [1023](https://t.me/s/aboutrss/1023)
-   For Python coders  [166](https://t.me/s/aboutrss/166),  [330](https://t.me/s/aboutrss/330),  [356](https://t.me/s/aboutrss/356),  [367](https://t.me/s/aboutrss/367),  [565](https://t.me/s/aboutrss/565),  [776](https://t.me/s/aboutrss/776)
-   For PHP coders  [454](https://t.me/s/aboutrss/454),  [714](https://t.me/s/aboutrss/714)
-   For GO coders  [670](https://t.me/s/aboutrss/670)
-   For MATLAB coders  [440](https://t.me/s/aboutrss/440)
-   For scientific researchers  [67](https://t.me/s/aboutrss/67),  [275](https://t.me/s/aboutrss/275),  [398](https://t.me/s/aboutrss/398),  [467![Video](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-circled-play-16.png)](https://t.me/s/aboutrss/467),  [730](https://t.me/s/aboutrss/730),  [734](https://t.me/s/aboutrss/734)
-   For WordPress bloggers  [277](https://t.me/s/aboutrss/277),  [288](https://t.me/s/aboutrss/288),  [603](https://t.me/s/aboutrss/603),  [810](https://t.me/s/aboutrss/810)
-   For IT bloggers  [893](https://t.me/s/aboutrss/893)
-   For HEXO bloggers  [298](https://t.me/s/aboutrss/298)
-   For Hugo bloggers  [808](https://t.me/s/aboutrss/808)
-   For Gatsby site administrator  [964](https://t.me/s/aboutrss/964)
-   For Telegram users  [894](https://t.me/s/aboutrss/894)
-   For 简悦(SimpleRead) users  [1133](https://t.me/s/aboutrss/1133)
-   For CUBOX users  [1135](https://t.me/s/aboutrss/1135)

## 📔 Books[](https://rss.tips/#-books)

-   《[RSS技术在图书馆中的应用](https://book.douban.com/subject/5367706/)》  [249](https://t.me/s/aboutrss/249)
-   《[Indie Microblogging](https://book.micro.blog/)》  [1305](https://t.me/s/aboutrss/1305)

## 📄 Academic literature[](https://rss.tips/#-academic-literature)

-   [Calishain, T. (2020) ‘RSS: The Most Useful Dead Technology on the Internet’, Online Searcher, 44(1), p. 30-34.](http://www.infotoday.com/OnlineSearcher/Articles/Features/RSS-The-Most-Useful-Dead-Technology-on-the-Internet-139013.shtml)  [460](https://t.me/s/aboutrss/460)
-   [Laura E. Pence, Harry E. Pence (2008) ‘Accessing and Managing Scientific Literature: Using RSS in the Classroom’, J. Chem. Educ., 85(10), p. 1449](https://pubs.acs.org/doi/abs/10.1021/ed085p1449)
-   [Tony Hammond, Timo Hannay, and Ben Lund (2004) ‘The Role of RSS in Science Publishing’, D-Lib Magazine, 10, 12](http://dlib.org/dlib/december04/hammond/12hammond.html)
-   [杜冰. 基于RSS阅读器的文献追踪方法与实践[J]. 教育进展, 2023, 13(2): 795-798.](https://doi.org/10.12677/AE.2023.132129)  [1328](https://t.me/s/aboutrss/1328)

## 🎞 Online course[](https://rss.tips/#-online-course)

-   [RSS-同步世界最新资讯 @ 《文献管理与信息分析》](https://open.163.com/newview/movie/free?pid=HEV46VJJD&mid=EEV46VKF2)  [1090](https://t.me/s/aboutrss/1090)

## 🖥 Hardware relevant[](https://rss.tips/#-hardware-relevant)

### NAS[](https://rss.tips/#nas)

-   [群晖](https://www.synology.com/)  [46](https://t.me/s/aboutrss/46),  [183](https://t.me/s/aboutrss/183),  [184](https://t.me/s/aboutrss/184),  [266](https://t.me/s/aboutrss/266),  [960](https://t.me/s/aboutrss/960),  [994](https://t.me/s/aboutrss/994)
-   斐讯N1  [227](https://t.me/s/aboutrss/227)
-   [U-NAS](https://www.u-nas.cn/)  [357](https://t.me/s/aboutrss/357)
-   [QNAP 威联通](https://www.qnap.com/)  [509](https://t.me/s/aboutrss/509)

### Small single-board computers[](https://rss.tips/#small-single-board-computers)

-   [Raspberry Pi](https://www.raspberrypi.org/)  [640](https://t.me/s/aboutrss/640)

### E-ink Devices[](https://rss.tips/#e-ink-devices)

-   [ZenReader](https://www.tnhh.net/posts/zenreader-4.7-in-rss-eink-reader.html)  [1024](https://t.me/s/aboutrss/1024)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/htruong/zenreader)

## 🗳 Survey and Result[](https://rss.tips/#-survey-and-result)

-   [State of RSS 2020](https://feeder.co/state-of-rss/2020)  [707](https://t.me/s/aboutrss/707),  [769](https://t.me/s/aboutrss/769)

## 🎨 Design[](https://rss.tips/#-design)

-   RSS Icon  [38](https://t.me/s/aboutrss/38),  [91](https://t.me/s/aboutrss/91),  [193](https://t.me/s/aboutrss/193),  [194](https://t.me/s/aboutrss/194)

## 😣 Services that have stopped supporting RSS[](https://rss.tips/#-services-that-have-stopped-supporting-rss)

-   Apple News  [324](https://t.me/s/aboutrss/324)
-   [百度RSS新闻订阅功能](https://wanyaxing.com/blog/20191213115747.html)
-   [New Twitter API Drops Support for RSS](https://mashable.com/2012/09/05/twitter-api-rss/)
-   [Raindrop.io](https://raindropio.canny.io/): every collection still has public RSS feed but Raindrop does not plan to support further improvements for RSS due to possible privacy issues.  [399](https://t.me/s/aboutrss/399)
-   [Buffer](https://buffer.com/)  [619](https://t.me/s/aboutrss/619)  : sunset the content feed feature
-   [Reuters](https://reuters.com/)  [689](https://t.me/s/aboutrss/689),  [695](https://t.me/s/aboutrss/695)  : officially killing off RSS support
-   [Web of Science](https://clarivate.com/webofsciencegroup/wp-content/uploads/sites/2/dlm_uploads/2019/11/WoS534-1-external-release-notes.pdf): As of November, 2019, the ability to make new RSS feeds in Web of Science has been removed.
-   [Linkedin](https://thenextweb.com/insider/2013/12/13/linkedin-will-kill-rss-support-december-19/)
-   [时光网](https://twitter.com/ShinChven/status/1353636917536055298)  [944](https://t.me/s/aboutrss/944)
-   [Google Groups](https://www.theregister.com/2021/08/16/google_groups_rss/)  [1120](https://t.me/s/aboutrss/1120)

## 🦾 Others[](https://rss.tips/#-others)

-   [Is RSS dead?](http://isrssdead.com/)  [376](https://t.me/s/aboutrss/376)
-   [Collect-Info-Research](https://github.com/p1g3/Collect-Info-Research)  [367](https://t.me/s/aboutrss/367)  : a project to help you collect info every day.  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/p1g3/Collect-Info-Research)
-   [Mapnews.io](https://mapnews.io/)  [657](https://t.me/s/aboutrss/657)  : Today’s News on a Map  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/TristanMenzinger/Mapnews)
-   Amazon Author Page: ([An Instance](https://www.amazon.com/Laura-Gibbs/e/B002BMEFVA?ref_=dbs_p_ebk_r00_abau_000000))  [697](https://t.me/s/aboutrss/697)
-   [Rest In Peace Google Reader](https://web.archive.org/web/20210420205654/https://www.ripgooglereader.com/)  [1001](https://t.me/s/aboutrss/1001)

### Figures / Developers[](https://rss.tips/#figures--developers)

-   Aaron Swartz  [1292](https://t.me/s/aboutrss/1292),  [1500](https://t.me/s/aboutrss/1500)  ![Video](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-circled-play-16.png)
-   DIYGod (RSSHub)  [345](https://t.me/s/aboutrss/345)
-   Dave Winer  [538](https://t.me/s/aboutrss/538)
-   GuysKK (蚁阅 Anyant)  [777![Podcast](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-sound-surround-16.png)](https://t.me/s/aboutrss/777)
-   PixelMage (Ego Reader)  [856![Podcast](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-sound-surround-16.png)](https://t.me/s/aboutrss/856)
-   Josh Holtz (An Otter RSS)  [948![Podcast](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-sound-surround-16.png)](https://t.me/s/aboutrss/948)

# 🎙 RSS × Podcast

## Podcast apps that will work with your custom RSS link[](https://rss.tips/#podcast-apps-that-will-work-with-your-custom-rss-link)

-   [irreader](http://irreader.fatecore.com/)  [173](https://t.me/s/aboutrss/173)  ![Windows](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-windows-10-16.png)![Mac](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-mac-client-16.png)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Podcast Addict](https://www.facebook.com/podcastAddict/)  [442](https://t.me/s/aboutrss/442)  [![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://play.google.com/store/apps/details?id=com.bambuna.podcastaddict&hl=en)
-   [Google Podcast](https://podcasts.google.com/)  [473](https://t.me/s/aboutrss/473),  [476](https://t.me/s/aboutrss/476),  [482](https://t.me/s/aboutrss/482),  [895](https://t.me/s/aboutrss/895)  [![Online](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-web-design-16.png)](https://podcasts.google.com/)[![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://play.google.com/store/apps/details?id=com.google.android.apps.podcasts)[![](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://apps.apple.com/app/google-podcasts/id1398000105)
-   [The Podcast App](https://podcast.app/)  [473](https://t.me/s/aboutrss/473)  [![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://play.google.com/store/apps/details?id=com.streema.podcast&hl=en)[![](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://itunes.apple.com/us/app/the-podcast-app/id1199070742?mt=8)
-   [Pocket Casts](https://www.pocketcasts.com/)  [473](https://t.me/s/aboutrss/473)  [![Online](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-web-design-16.png)](https://play.pocketcasts.com/)[![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://play.google.com/store/apps/details?id=au.com.shiftyjelly.pocketcasts)[![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://itunes.apple.com/au/app/pocket-casts/id414834813)
-   [AntennaPod](https://antennapod.org/)  [473](https://t.me/s/aboutrss/473)  [![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://play.google.com/store/apps/details?id=de.danoeh.antennapod)[![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/antennapod/AntennaPod)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [MOON.FM](https://www.moon.fm/)  [473](https://t.me/s/aboutrss/473),  [531](https://t.me/s/aboutrss/531)  ![Windows](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-windows-10-16.png)[![Mac](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-mac-client-16.png)](https://apps.apple.com/us/app/moon-fm-premium-podcast-app/id1465712037?mt=12)![Linux](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Linux.png)[![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://itunes.apple.com/us/app/moon-fm/id1243771413)[![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://play.google.com/store/apps/details?id=fm.moon.app)
-   [小宇宙](https://xiaoyuzhoufm.com/)  [477](https://t.me/s/aboutrss/477),  [484](https://t.me/s/aboutrss/484),  [486](https://t.me/s/aboutrss/486),  [490](https://t.me/s/aboutrss/490),  [531](https://t.me/s/aboutrss/531)  [![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://apps.apple.com/us/app/%E5%B0%8F%E5%AE%87%E5%AE%99-%E4%B8%80%E8%B5%B7%E5%90%AC%E6%92%AD%E5%AE%A2/id1488894313)[![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://xiaoyuzhoufm.com/)
-   [CastBox](https://castbox.fm/)  [473](https://t.me/s/aboutrss/473)  [![Online](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-web-design-16.png)](https://castbox.fm/home)[![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://itunes.apple.com/app/castbox-radio/id1243410543?pt=118301901&mt=8&ct=download_page)[![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://play.google.com/store/apps/details?id=fm.castbox.audiobook.radio.podcast&referrer=utm_source%3Dcastbox_web%26utm_medium%3Dlink%26utm_campaign%3Ddownload_page%26utm_content%3D)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Apple Podcast & iTunes](https://support.apple.com/zh-cn/HT201859)  [473](https://t.me/s/aboutrss/473)  [![Windows](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-windows-10-16.png)](https://www.microsoft.com/p/itunes/9pb2mz1zmb1s?rtc=1&activetab=pivot:overviewtab)![Mac](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-mac-client-16.png)[![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://apps.apple.com/us/app/apple-podcasts/id525463029)
-   [Himalaya](https://www.himalaya.com/)  [![Online](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-web-design-16.png)](https://www.himalaya.com/login)[![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://apps.apple.com/us/app/himalaya-fm-radio-audio-books/id1275493456)[![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://play.google.com/store/apps/details?id=com.ximalaya.ting.himalaya)
-   [Overcast](https://overcast.fm/)  [473](https://t.me/s/aboutrss/473)  [![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://itunes.apple.com/cn/app/overcast-podcast-player/id888422857?mt=8)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Castro](https://castro.fm/)  [473](https://t.me/s/aboutrss/473)  [![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://itunes.apple.com/cn/app/castro-podcasts/id1080840241?mt=8)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Baucast](https://www.baucast.com/)  [473](https://t.me/s/aboutrss/473)  [![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://apps.apple.com/cn/app/baucast-podcast-player/id1471607070)
-   海盗电台  [473](https://t.me/s/aboutrss/473)  [![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://play.google.com/store/apps/details?id=io.github.mthli.pirate)
-   Instacast  [![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://itunes.apple.com/app/instacast-core/id1083868334?mt=8)
-   [Player FM](https://player.fm/)  ![Online](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-web-design-16.png)[![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://itunes.apple.com/us/app/podcast-app-by-player-fm/id940568467?mt=8)[![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://play.google.com/store/apps/details?id=fm.player)
-   [bullhorn](https://www.bullhorn.fm/)  ![Online](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-web-design-16.png)[![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://apps.apple.com/us/app/bullhorn/id1322513763)[![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://play.google.com/store/apps/details?id=com.carrierx.bullhorn&hl=en&referrer=utm_source%3Dko_65915e9b19601d15d%26utm_medium%3D1%26utm_campaign%3Dkobulllhorn-android-o3mo5799cac81c4643%26utm_term%3D%26utm_content%3D%26)
-   [Feedspot](https://www.feedspot.com/)  [530](https://t.me/s/aboutrss/530)  ![Online](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-web-design-16.png)
-   [FeedMe](https://github.com/seazon/FeedMe/blob/master/README.md)  [135](https://t.me/s/aboutrss/135),  [136](https://t.me/s/aboutrss/136),  [161](https://t.me/s/aboutrss/161),  [331](https://t.me/s/aboutrss/331),  [342](https://t.me/s/aboutrss/342)  [![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://play.google.com/store/apps/details?id=com.seazon.feedme)
-   [Cosmicast](https://twitter.com/cosmicastapp)  [564](https://t.me/s/aboutrss/564)  [![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://apps.apple.com/gb/app/cosmicast/id1435195637)[![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/Tigorn/Cosmicast)
-   [RSSANT 蚁阅](https://rss.anyant.com/)  [326](https://t.me/s/aboutrss/326),  [328](https://t.me/s/aboutrss/328),  [498](https://t.me/s/aboutrss/498),  [501](https://t.me/s/aboutrss/501),  [849](https://t.me/s/aboutrss/849)  ![Online](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-web-design-16.png)[![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/anyant/rssant)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Downcast](http://downcast.fm/)  [![Mac](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-mac-client-16.png)](https://itunes.apple.com/us/app/downcast/id668429425?ls=1&mt=12&uo=8&at=11l5Yn)[![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://itunes.apple.com/app/apple-store/id393858566?pt=426382&ct=downcastweb&mt=8&uo=8&at=11l5Yn)
-   [STITCHER](https://www.stitcher.com/)  [![Online](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-web-design-16.png)](https://app.stitcher.com/)[![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://apps.apple.com/us/app/id288087905)[![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://play.google.com/store/apps/details?id=com.stitcher.app)
-   [RSSRadio](http://rssrad.io/)  [![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://apps.apple.com/app/rssradio-podcast-downloader/id386600664)
-   [GNOME Podcasts](https://gitlab.gnome.org/World/podcasts)  [791](https://t.me/s/aboutrss/791)  [![Linux](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Linux.png)](https://gitlab.gnome.org/World/podcasts)[![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://gitlab.gnome.org/World/podcasts)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Podstation](https://podstation.github.io/)  [899](https://t.me/s/aboutrss/899)  [![Chrome](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/Google_Chrome.png)](https://chrome.google.com/webstore/detail/podstation-podcast-player/bpcagekijmfcocgjlnnhpdogbplajjfn)[![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/podStation/podStation)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [FocusPodcast](https://play.google.com/store/apps/details?id=allen.town.focus.podcast)  [1233](https://t.me/s/aboutrss/1233)  [![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://play.google.com/store/apps/details?id=allen.town.focus.podcast)
-   [领讲台](https://www.lingjiangtai.com/)  [1234](https://t.me/s/aboutrss/1234)  [![Online](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-web-design-16.png)](https://www.lingjiangtai.com/)[![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://apps.apple.com/app/%E9%A2%86%E8%AE%B2%E5%8F%B0/id1614074989)[![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://www.lingjiangtai.com/app)
-   [Airshow](https://feedbin.com/airshow)  [1237](https://t.me/s/aboutrss/1237)  [![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://apps.apple.com/app/airshow-lightweight-podcasts/id1584582270)
-   [Pods](https://x.com/Enter_Apps/status/1768669206826926292)  [1440](https://t.me/s/aboutrss/1440)  [![iOS](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-iphone-16.png)](https://apps.apple.com/app/pods-minimal-rss-news-reader/id6478560203)[![Android](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/android.png)](https://play.google.com/store/apps/details?id=air.enter.pods)![AI](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-ai-16.png)

## Aggregators of Podcasts / Podcast Navigation[](https://rss.tips/#aggregators-of-podcasts--podcast-navigation)

-   [中文独立播客](https://typlog.com/podlist/)  [130](https://t.me/s/aboutrss/130),  [480](https://t.me/s/aboutrss/480)
-   [PodCast不完全收藏](https://www.douban.com/note/702906996/)
-   [播客 RSS Feed](https://getpodcast.xyz/)  [480](https://t.me/s/aboutrss/480)
-   [Chinese-Podcasts](https://github.com/alaskasquirrel/Chinese-Podcasts)
-   [Han-language Podcast on Twitter](https://twitter.com/aboutRSS/lists/list1)
-   [播客 × 万花筒](https://pod.wht.one/)
-   [KKBOX podcast](https://podcast.kkbox.com/)
-   [Apple Podcast 人气最高的100个中文播客](https://zhuanlan.zhihu.com/p/166002110)  [758](https://t.me/s/aboutrss/758)
-   [分享你人为值得订阅的内容 by Notion中文社区](https://www.notion.so/cnotion/Notion-Vol-13-89e51bdb621a4e009e7ec60d1cc58c2f)
-   [Podcast OPML collections](http://b19.se/data/)  [926](https://t.me/s/aboutrss/926)
-   [Chris Abraham’s Podcast Collection](https://chrisabraham.com/opml/view)  [1071](https://t.me/s/aboutrss/1071)
-   [中文播客榜](https://xyzrank.com/)  [1236](https://t.me/s/aboutrss/1236)
-   [中文播客数据分析 · 公众版](https://wav.pub/analysis/)

## Podcast Feed Validator[](https://rss.tips/#podcast-feed-validator)

-   [Podbase](https://podba.se/validate/)  [621](https://t.me/s/aboutrss/621)
-   [Cast Feed Validator](https://castfeedvalidator.com/)  [621](https://t.me/s/aboutrss/621)

## Podcast RSS feed submission page for audio platforms[](https://rss.tips/#podcast-rss-feed-submission-page-for-audio-platforms)

-   [Google Podcasts Manager](https://podcastsmanager.google.com/about?hl=en)  [637](https://t.me/s/aboutrss/637)
-   [KKBOX for Podcasters](https://podcast.kkbox.com/podcasters)  [743](https://t.me/s/aboutrss/743)
-   [12 audio platforms summarized in a Google Docs](https://docs.google.com/document/d/1OurVCVVrVRVJMni5wmf2Ut2gE7_ti1MusxaaNCkiXDs/edit)  by  [@tfyhpodcast](https://twitter.com/tfyhpodcast/status/1292872689074536448)  [757](https://t.me/s/aboutrss/757),  [765](https://t.me/s/aboutrss/765)

## Podcast Feed Customization[](https://rss.tips/#podcast-feed-customization)

-   [Listen Notes](https://www.listennotes.com/)  [522](https://t.me/s/aboutrss/522)
-   [huffduffer](https://huffduffer.com/)  [562](https://t.me/s/aboutrss/562)
-   [podcast4us](https://podcast4us.herokuapp.com/)  [595](https://t.me/s/aboutrss/595)  : generates RSS feed for ximalaya.com  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/hondajojo/podcast4us)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [RECAST](https://recastthis.com/)  [931](https://t.me/s/aboutrss/931)

## Podcast Feed to Fediverse[](https://rss.tips/#podcast-feed-to-fediverse)

-   [PodcastAP](https://podcastap.com/)  [1450](https://t.me/s/aboutrss/1450)

## Turn YouTube into Podcast[](https://rss.tips/#turn-youtube-into-podcast)

-   [RSSYes](https://rssyes.com/youtube-to-podcast)  : Convert YouTube channels into podcast RSS feeds  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [PodNoms](https://www.podnoms.com/)  [671](https://t.me/s/aboutrss/671)  : Youtube2PodcastFeed  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Listenbox](https://listenbox.app/)  [683](https://t.me/s/aboutrss/683)
-   [YouCast](https://github.com/i3arnon/YouCast)  [684](https://t.me/s/aboutrss/684)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/i3arnon/YouCast)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [Podsync](https://github.com/mxpv/podsync)  [686](https://t.me/s/aboutrss/686),  [847](https://t.me/s/aboutrss/847)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/mxpv/podsync)

## Turn Twitch into Podcast[](https://rss.tips/#turn-twitch-into-podcast)

-   [TwitchPOD](https://twitchpod.tv/)  [1455](https://t.me/s/aboutrss/1455)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/trevorsharp/twitchpod)

## Turn Podcast/MP3 into Video via Podcast Feed[](https://rss.tips/#turn-podcastmp3-into-video-via-podcast-feed)

-   [HEADLINER](https://headliner.app/)  [698](https://t.me/s/aboutrss/698)
-   [Podcast RSS Generator](https://github.com/vpetersson/podcast-rss-generator/)  : Build a Podcast RSS feed and generate it using GitHub Actions.

## Turn Webpage into Podcast[](https://rss.tips/#turn-webpage-into-podcast)

-   [Audiblogs](https://audiblogs.com/)  [969](https://t.me/s/aboutrss/969)
-   [POD GINIE](https://pod-genie.com/)  [1318](https://t.me/s/aboutrss/1318)

## Podcast Statistics[](https://rss.tips/#podcast-statistics)

-   [中文播客分析](http://beta.moon.fm/podcasts/data)  [520](https://t.me/s/aboutrss/520)
-   [PodFest China 2020 中文播客听众与消费调研](https://podfestchina.com/survey/2020)  [588](https://t.me/s/aboutrss/588)
-   [Podcast-Standard](https://podcast-standard.org/)  [1351](https://t.me/s/aboutrss/1351)

## Podcast Hosting[](https://rss.tips/#podcast-hosting)

-   [Pitch](https://www.getpitch.io/)  [525](https://t.me/s/aboutrss/525)  ![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [FeedPress](https://feed.press/)
-   [RSS Podcast Hosting](https://rss.com/)  [237](https://t.me/s/aboutrss/237),  [1116](https://t.me/s/aboutrss/1116)
-   [JustCast](https://www.justcast.com/): Create a Podcast RSS feed from a Dropbox folder
-   [wavpub](https://wavpub.com/)  [643](https://t.me/s/aboutrss/643)
-   [PodcastGenerator](https://podcastgenerator.net/)  [669](https://t.me/s/aboutrss/669)  [![Open-Source Software](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/open-source.png)](https://github.com/PodcastGenerator/PodcastGenerator/)![Freeware](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-one-free-16.png)
-   [轻芒小程序+ 播客小程序](http://qingmang.me/)  [673](https://t.me/s/aboutrss/673)
-   [Transistor](https://transistor.fm/)
-   [Libsyn](https://libsyn.com/)
-   [Anchor](https://anckor.fm/)
-   [PodBean](https://www.podbean.com/)
-   [Simplecast](https://simplecast.com/)
-   [Fireside](https://fireside.fm/)

## Podcast Search Engine[](https://rss.tips/#podcast-search-engine)

-   [Listen Notes](https://www.listennotes.com/)  [413](https://t.me/s/aboutrss/413),  [522](https://t.me/s/aboutrss/522)
-   [Podlink](https://pod.link/)  [473](https://t.me/s/aboutrss/473)
-   [Podcastly](https://pdcstly.com/)
-   [KKBOX podcast](https://podcast.kkbox.com/)
-   [RSSRadio](http://rssrad.io/#/podcast/search)
-   [RSS2YTM](https://rss2ytm.net/)  [1390](https://t.me/s/aboutrss/1390)

## Podcast RSS Feed Hosting[](https://rss.tips/#podcast-rss-feed-hosting)

-   [4AM](https://at4am.io/t/topic/6954)  [429](https://t.me/s/aboutrss/429)

## Bot to subscribe podcast[](https://rss.tips/#bot-to-subscribe-podcast)

### Telegram[](https://rss.tips/#telegram-2)

-   [Yourcast Bot](https://t.me/yourcastbot)  [592](https://t.me/s/aboutrss/592)
-   [Podcastly](https://t.me/podcastly_bot)  [592](https://t.me/s/aboutrss/592)

## Views / Discussions About RSS and Podcast[](https://rss.tips/#views--discussions-about-rss-and-podcast)

-   [53![Podcast](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-sound-surround-16.png)](https://t.me/s/aboutrss/53),  [129](https://t.me/s/aboutrss/129),  [773![Podcast](https://github.com/AboutRSS/ALL-about-RSS/raw/master/media/icons8-sound-surround-16.png)](https://t.me/s/aboutrss/773),  [916](https://t.me/s/aboutrss/916),  [941](https://t.me/s/aboutrss/941)

## Podcast Community[](https://rss.tips/#podcast-community)

### Discussion Forums[](https://rss.tips/#discussion-forums-1)

-   [4AM](https://at4am.io/)
-   [/r/podcasts : a subreddit](https://www.reddit.com/r/podcasts/)
-   [Podcast node at V2EX](https://www.v2ex.com/go/podcast)
-   [声波](https://www.singpodcast.com/)  [916](https://t.me/s/aboutrss/916)

### Telegram Groups / Channels[](https://rss.tips/#telegram-groups--channels-1)

-   独立播客 ([Group](https://t.me/listenwithyou)  /  [Channel](https://t.me/indiepod))

---

**[⬆ back to top](https://rss.tips/#-what-is-rss)**
