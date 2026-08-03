# Awesome Hugging Face Server Apps
> A curated list of over 400 awesome self-hosted web apps, scraping tools, and dynamic servers that require backend compute (like Docker, Python, Node) and cannot be hosted on static edge providers like Cloudflare Workers.

## Table of Contents
* [Web Scraping & Extraction](#web-scraping-extraction)
* [Read-it-Later & Bookmarking](#read-it-later-bookmarking)
* [Dynamic Embeds & Dashboards](#dynamic-embeds-dashboards)
* [Automation & CI/CD](#automation-ci/cd)
* [AI & Machine Learning UIs](#ai-machine-learning-uis)
* [Content Management Systems (Server)](#content-management-systems-(server))
* [Analytics & Data Visualization](#analytics-data-visualization)
* [Databases & BaaS](#databases-baas)
* [Project Management & ERP](#project-management-erp)
* [Collaboration & Chat](#collaboration-chat)
* [Notes & Knowledge Management](#notes-knowledge-management)
* [Media & File Streaming](#media-file-streaming)
* [Passwords & Security](#passwords-security)
* [Monitoring & DevOps](#monitoring-devops)
* [More Open Source Tools](#more-open-source-tools)

## Web Scraping & Extraction
* **[Firecrawl](https://github.com/mendableai/firecrawl)** - Turn sites into LLM-ready markdown.
* **[Crawl4AI](https://github.com/unclecode/crawl4ai)** - LLM-friendly crawler extracting JSON/Markdown.
* **[Huginn](https://github.com/huginn/huginn)** - Create agents that monitor and act on your behalf.
* **[Changedetection.io](https://github.com/dgtlmoon/changedetection.io)** - Website change monitoring and alerts.
* **[ScrapyRT](https://github.com/scrapinghub/scrapyrt)** - Add an HTTP API for Scrapy spiders.
* **[Splash](https://github.com/scrapinghub/splash)** - Lightweight, scriptable browser as a service.
* **[Puppeteer](https://github.com/puppeteer/puppeteer)** - Headless Chrome Node.js API.
* **[Playwright](https://github.com/microsoft/playwright)** - Reliable end-to-end testing for modern web apps.
* **[Selenium Grid](https://github.com/SeleniumHQ/selenium)** - Distributed browser automation.
* **[Aerokube Selenoid](https://github.com/aerokube/selenoid)** - Lightning fast Selenium hub using Docker.
* **[Moon](https://github.com/aerokube/moon)** - Browser automation in Kubernetes.
* **[Browsertrix](https://github.com/webrecorder/browsertrix-crawler)** - High-fidelity browser-based crawler.
* **[ArchiveBox](https://github.com/ArchiveBox/ArchiveBox)** - Open source self-hosted web archive.
* **[SingleFile](https://github.com/gildas-lormeau/SingleFile)** - CLI to save a complete web page into a single HTML file.
* **[Browserless](https://github.com/browserless/browserless)** - Browser as a service using Puppeteer.
* **[Gotenberg](https://github.com/gotenberg/gotenberg)** - Docker-powered stateless API for PDF generation.
* **[Crawlee](https://github.com/apify/crawlee)** - A web scraping and browser automation library.
* **[Colly](https://github.com/gocolly/colly)** - Elegant Scraper and Crawler Framework for Golang.
* **[Pyspider](https://github.com/binux/pyspider)** - A powerful spider system in Python.
* **[Nutch](https://github.com/apache/nutch)** - Extensible and scalable open source web crawler.
* **[Heritrix](https://github.com/internetarchive/heritrix3)** - The Internet Archive's open-source web crawler.
* **[SearXNG](https://github.com/searxng/searxng)** - Privacy-respecting metasearch engine.
* **[Whoogle](https://github.com/benbusby/whoogle-search)** - A self-hosted, ad-free, privacy-respecting Google metasearch.
* **[LibreX](https://github.com/hnhx/librex)** - Privacy respecting free as in freedom metasearch engine.
* **[Scrapinghub Portia](https://github.com/scrapinghub/portia)** - Visual scraping for Scrapy.
* **[Grab](https://github.com/lorien/grab)** - Web Scraping Framework for Python.
* **[Spidey](https://github.com/rivermont/spidey)** - A concurrent web crawler and scraper.
* **[Apify SDK](https://github.com/apify/apify-sdk-js)** - Scalable web scraping library for Node.js.
* **[Ferra](https://github.com/ArielAlev/ferra)** - A fast, reliable scraping tool.
* **[Ferret](https://github.com/MontFerret/ferret)** - Declarative web scraping.
* **[MechanicalSoup](https://github.com/MechanicalSoup/MechanicalSoup)** - Programmatic web scraper/crawler toolkit.
* **[BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/)** - Programmatic web scraper/crawler toolkit.
* **[Lxml](https://github.com/lxml/lxml)** - Programmatic web scraper/crawler toolkit.
* **[Requests-HTML](https://github.com/psf/requests-html)** - Programmatic web scraper/crawler toolkit.
* **[Ruia](https://github.com/howie6879/ruia)** - Programmatic web scraper/crawler toolkit.
* **[Cola](https://github.com/chineking/cola)** - Programmatic web scraper/crawler toolkit.
* **[Demiurge](https://github.com/matiasb/demiurge)** - Programmatic web scraper/crawler toolkit.
* **[Feedparser](https://github.com/kurtmckee/feedparser)** - Programmatic web scraper/crawler toolkit.
* **[Lass](https://github.com/lass-project/lass)** - Programmatic web scraper/crawler toolkit.
* **[RoboBrowser](https://github.com/jmcarp/robobrowser)** - Programmatic web scraper/crawler toolkit.
* **[Scrapely](https://github.com/scrapy/scrapely)** - Programmatic web scraper/crawler toolkit.
* **[Scrapy-Splash](https://github.com/scrapy-plugins/scrapy-splash)** - Programmatic web scraper/crawler toolkit.
* **[WebPipe](https://github.com/webpipe/webpipe)** - Programmatic web scraper/crawler toolkit.
* **[Extracty](https://github.com/extracty/extracty)** - Programmatic web scraper/crawler toolkit.
* **[Pyspider-WebUI](https://github.com/binux/pyspider)** - Programmatic web scraper/crawler toolkit.
* **[Crawlera](https://github.com/scrapinghub/crawlera)** - Programmatic web scraper/crawler toolkit.
* **[PhantomJS](https://github.com/ariya/phantomjs)** - Programmatic web scraper/crawler toolkit.
* **[CasperJS](https://github.com/casperjs/casperjs)** - Programmatic web scraper/crawler toolkit.
* **[Nightmare](https://github.com/segmentio/nightmare)** - Programmatic web scraper/crawler toolkit.
* **[Osmosis](https://github.com/rchipka/node-osmosis)** - Programmatic web scraper/crawler toolkit.
* **[X-Ray](https://github.com/matthewmueller/x-ray)** - Programmatic web scraper/crawler toolkit.
* **[Cheerio](https://github.com/cheeriojs/cheerio)** - Programmatic web scraper/crawler toolkit.
* **[Nokogiri](https://github.com/sparklemotion/nokogiri)** - Programmatic web scraper/crawler toolkit.
* **[Mechanize](https://github.com/sparklemotion/mechanize)** - Programmatic web scraper/crawler toolkit.
* **[Goutte](https://github.com/FriendsOfPHP/Goutte)** - Programmatic web scraper/crawler toolkit.
* **[Panther](https://github.com/symfony/panther)** - Programmatic web scraper/crawler toolkit.
* **[Jaunt](https://github.com/jaunt-api/jaunt)** - Programmatic web scraper/crawler toolkit.
* **[Jsoup](https://github.com/jhy/jsoup)** - Programmatic web scraper/crawler toolkit.
* **[HtmlUnit](https://github.com/HtmlUnit/htmlunit)** - Programmatic web scraper/crawler toolkit.
* **[Selenium-Webdriver](https://github.com/SeleniumHQ/selenium)** - Programmatic web scraper/crawler toolkit.
* **[Watir](https://github.com/watir/watir)** - Programmatic web scraper/crawler toolkit.
* **[ScrapingBee-API](https://github.com/scrapingbee/scrapingbee)** - Programmatic web scraper/crawler toolkit.
* **[ScrapingBot-API](https://github.com/scrapingbot/scrapingbot)** - Programmatic web scraper/crawler toolkit.
* **[Zyte-API](https://github.com/zytedata/zyte-api)** - Programmatic web scraper/crawler toolkit.
* **[ZenRows-API](https://github.com/zenrows/zenrows)** - Programmatic web scraper/crawler toolkit.
* **[BrightData-Proxy](https://github.com/luminati-io/luminati-proxy)** - Programmatic web scraper/crawler toolkit.
* **[Oxylabs-Proxy](https://github.com/oxylabs/oxylabs)** - Programmatic web scraper/crawler toolkit.
* **[Smartproxy-Proxy](https://github.com/smartproxy/smartproxy)** - Programmatic web scraper/crawler toolkit.

## Read-it-Later & Bookmarking
* **[Wallabag](https://github.com/wallabag/wallabag)** - Self hostable read-it-later app.
* **[Linkding](https://github.com/sissbruecker/linkding)** - Minimal bookmark manager.
* **[Shiori](https://github.com/go-shiori/shiori)** - Simple bookmark manager written in Go.
* **[Hoarder](https://github.com/hoarder-app/hoarder)** - Self-hostable bookmarking app with AI tagging.
* **[Omnivore](https://github.com/omnivore-app/omnivore)** - Open source read-it-later solution.
* **[Shaarli](https://github.com/shaarli/Shaarli)** - The personal, minimalist, super-fast, database free, bookmarking service.
* **[BookmarkArchiver](https://github.com/pirate/bookmark-archiver)** - Save an archived copy of all websites in a bookmarks file.
* **[Pinry](https://github.com/pinry/pinry)** - The open-source core of Pinterest.
* **[SemanticScuttle](https://github.com/semanticscuttle/SemanticScuttle)** - Social bookmarking tool.
* **[Espial](https://github.com/jonschouse/espial)** - An open-source, self-hosted bookmarking server.
* **[Neonlink](https://github.com/AlexSciFier/neonlink)** - Self-hosted bookmark service.
* **[Buku](https://github.com/jarun/buku)** - Browser-independent bookmark manager.
* **[Postmarks](https://github.com/ckolderup/postmarks)** - IndieWeb-compatible bookmarking app.
* **[Linkace](https://github.com/Kovah/LinkAce)** - A bookmark archive with link monitoring.
* **[Hackershare](https://github.com/hackershare/hackershare)** - Social bookmarking for hackers.
* **[Benotes](https://github.com/fr0tt/benotes)** - An open source self-hosted web app for your notes and bookmarks.
* **[Ymarks](https://github.com/ymarks/ymarks)** - Sync bookmarks across browsers.
* **[Readeck](https://github.com/readeck/readeck)** - A simple web app to save your favorite reading material.
* **[Briefkasten](https://github.com/ndom91/briefkasten)** - Self-hosted bookmarking app.
* **[KeeWeb](https://github.com/keeweb/keeweb)** - Free cross-platform password manager compatible with KeePass.

## Dynamic Embeds & Dashboards
* **[Metabase](https://github.com/metabase/metabase)** - The simplest, fastest way to get business intelligence and analytics.
* **[Superset](https://github.com/apache/superset)** - Apache Superset is a Data Visualization and Data Exploration Platform.
* **[Redash](https://github.com/getredash/redash)** - Make sense of your data.
* **[Grafana](https://github.com/grafana/grafana)** - The open and composable observability and data visualization platform.
* **[Kibana](https://github.com/elastic/kibana)** - Your window into the Elastic Stack.
* **[Heimdall](https://github.com/linuxserver/Heimdall)** - Application dashboard and launcher.
* **[Homer](https://github.com/bastienwirtz/homer)** - A very simple static homepage for your server.
* **[Dashy](https://github.com/Lissy93/dashy)** - A self-hostable personal dashboard built for you.
* **[Homarr](https://github.com/ajnart/homarr)** - Customizable browser's home page to interact with your homeserver.
* **[Flame](https://github.com/pawelmalak/flame)** - Self-hosted startpage for your server.
* **[Fenrus](https://github.com/revenz/Fenrus)** - Personal home page designed for the self-hosted.
* **[Bdash](https://github.com/bdash-app/bdash)** - A simple data visualization tool.
* **[Turnilo](https://github.com/allegro/turnilo)** - A business intelligence, data exploration and visualization web application.
* **[Lightdash](https://github.com/lightdash/lightdash)** - BI for teams that move fast.
* **[Evidence](https://github.com/evidence-dev/evidence)** - Business intelligence as code.
* **[Trellis](https://github.com/trellis-data/trellis)** - Dynamic dashboard system.
* **[MUI Toolpad](https://github.com/mui/mui-toolpad)** - Low code internal tools builder.
* **[Appsmith](https://github.com/appsmithorg/appsmith)** - Low code project to build admin panels.
* **[ToolJet](https://github.com/ToolJet/ToolJet)** - Extensible low-code framework for building business applications.
* **[Budibase](https://github.com/Budibase/budibase)** - Low code platform for building internal tools.

## Automation & CI/CD
* **[n8n](https://github.com/n8n-io/n8n)** - Free and open fair-code licensed node based Workflow Automation Tool.
* **[Jenkins](https://github.com/jenkinsci/jenkins)** - Open source automation server.
* **[Drone](https://github.com/harness/drone)** - Container-Native, Continuous Delivery Platform.
* **[Woodpecker CI](https://github.com/woodpecker-ci/woodpecker)** - A simple CI engine with great extensibility.
* **[Gitea Actions](https://github.com/go-gitea/gitea)** - Built-in CI/CD in Gitea.
* **[GitLab CI](https://github.com/gitlabhq/gitlabhq)** - Continuous Integration pipeline integrated into GitLab.
* **[Activepieces](https://github.com/activepieces/activepieces)** - No-code business automation tool.
* **[Temporal](https://github.com/temporalio/temporal)** - Microservice orchestration platform.
* **[Kestra](https://github.com/kestra-io/kestra)** - Infinitely scalable orchestration and scheduling platform.
* **[Prefect](https://github.com/PrefectHQ/prefect)** - Data workflow orchestration.
* **[Dagster](https://github.com/dagster-io/dagster)** - A data orchestrator for machine learning, analytics, and ETL.
* **[Airflow](https://github.com/apache/airflow)** - Platform to programmatically author, schedule, and monitor workflows.
* **[Windmill](https://github.com/windmill-labs/windmill)** - Open-source developer platform for scripts and workflows.
* **[Benthos](https://github.com/benthosdev/benthos)** - Declarative data streaming service.
* **[Rundeck](https://github.com/rundeck/rundeck)** - Job Scheduler and Runbook Automation.
* **[Bloop](https://github.com/BloopAI/bloop)** - Automation agent.
* **[Node-RED](https://github.com/node-red/node-red)** - Low-code programming for event-driven applications.
* **[Knative](https://github.com/knative/serving)** - Kubernetes-based platform to build, deploy, and manage serverless workloads.
* **[OpenFaaS](https://github.com/openfaas/faas)** - Serverless Functions Made Simple.
* **[Fission](https://github.com/fission/fission)** - Fast and Simple Serverless Functions for Kubernetes.

## AI & Machine Learning UIs
* **[Ollama WebUI](https://github.com/open-webui/open-webui)** - User-friendly WebUI for LLMs.
* **[LibreChat](https://github.com/danny-avila/LibreChat)** - Enhanced ChatGPT Clone.
* **[Text-generation-webui](https://github.com/oobabooga/text-generation-webui)** - A gradio web UI for running Large Language Models.
* **[Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)** - Stable Diffusion web UI.
* **[ComfyUI](https://github.com/comfyanonymous/ComfyUI)** - A powerful and modular stable diffusion GUI.
* **[Dify](https://github.com/langgenius/dify)** - An open-source LLM app development platform.
* **[Flowise](https://github.com/FlowiseAI/Flowise)** - Drag & drop UI to build your customized LLM flow.
* **[Langflow](https://github.com/logspace-ai/langflow)** - UI for LangChain, designed with react-flow.
* **[LocalAI](https://github.com/mudler/LocalAI)** - Drop-in replacement for OpenAI API that runs locally.
* **[InvokeAI](https://github.com/invoke-ai/InvokeAI)** - A generative AI suite for professionals.
* **[PrivateGPT](https://github.com/imartinez/privateGPT)** - Interact privately with your documents using the power of GPT.
* **[AnythingLLM](https://github.com/Mintplex-Labs/anything-llm)** - A full-stack application that turns any document into an intelligent chatbot.
* **[LobeChat](https://github.com/lobehub/lobe-chat)** - An open-source, modern-design LLMs/AI chat framework.
* **[Chainlit](https://github.com/Chainlit/chainlit)** - Build Python LLM apps in minutes.
* **[Jan](https://github.com/janhq/jan)** - Jan is an open source alternative to ChatGPT that runs 100% offline.
* **[Bionic](https://github.com/bionic-ai/bionic)** - AI interface.
* **[Hugging Face Spaces](https://github.com/huggingface/hub-docs)** - Documentation and SDKs for ML hosting.
* **[Gradio](https://github.com/gradio-app/gradio)** - Build and share delightful machine learning apps.
* **[Streamlit](https://github.com/streamlit/streamlit)** - The fastest way to build and share data apps.
* **[MindsDB](https://github.com/mindsdb/mindsdb)** - In-database Machine Learning.

## Content Management Systems (Server)
* **[Ghost](https://github.com/TryGhost/Ghost)** - Turn your audience into a business. Publishing, memberships, subscriptions.
* **[WordPress](https://github.com/WordPress/WordPress)** - Web software you can use to create a beautiful website, blog, or app.
* **[Strapi](https://github.com/strapi/strapi)** - The leading open-source headless CMS.
* **[Directus](https://github.com/directus/directus)** - The Modern Data Stack.
* **[KeystoneJS](https://github.com/keystonejs/keystone)** - The superpowered CMS for developers.
* **[Payload CMS](https://github.com/payloadcms/payload)** - The best way to build a modern backend + admin UI.
* **[Decap CMS](https://github.com/decaporg/decap-cms)** - A Git-based CMS for Static Site Generators (Requires backend oauth server).
* **[Ponzu](https://github.com/ponzu-cms/ponzu)** - Headless CMS with automatic JSON API.
* **[Wagtail](https://github.com/wagtail/wagtail)** - A Django content management system.
* **[October CMS](https://github.com/octobercms/october)** - Free, open-source, self-hosted CMS platform based on Laravel.
* **[Statamic](https://github.com/statamic/cms)** - The flat-file CMS built for Laravel.
* **[Publii](https://github.com/GetPublii/Publii)** - Open-Source CMS for Static Websites.
* **[Cockpit](https://github.com/agentejo/cockpit)** - A headless and API-driven CMS.
* **[Sanity](https://github.com/sanity-io/sanity)** - Unified content workspace (server parts).
* **[Pimcore](https://github.com/pimcore/pimcore)** - Open Source Data & Experience Management Platform.
* **[Plone](https://github.com/plone/plone)** - The Ultimate Enterprise CMS.
* **[Umbraco](https://github.com/umbraco/Umbraco-CMS)** - The flexible open-source .NET CMS.
* **[Dotclear](https://github.com/dotclear/dotclear)** - Open-source web publishing software.
* **[BlogoText](https://github.com/BlogoText/blogotext)** - A lightweight SQLite blog engine.
* **[Bludit](https://github.com/bludit/bludit)** - Simple, Fast, Secure, Flat-File CMS.

## Analytics & Data Visualization
* **[Plausible](https://github.com/plausible/analytics)** - Simple, open-source, lightweight and privacy-friendly web analytics.
* **[Umami](https://github.com/umami-software/umami)** - A simple, fast, privacy-focused alternative to Google Analytics.
* **[Matomo](https://github.com/matomo-org/matomo)** - Liberating Web Analytics. Starve Google.
* **[PostHog](https://github.com/PostHog/posthog)** - The open source Product OS.
* **[Ackee](https://github.com/electerious/Ackee)** - Self-hosted, Node.js based analytics tool.
* **[Shynet](https://github.com/milesmcc/shynet)** - Modern, privacy-friendly, and detailed web analytics.
* **[GoAccess](https://github.com/allinurl/goaccess)** - Real-time web log analyzer and interactive viewer.
* **[Fathom](https://github.com/usefathom/fathom)** - Simple, privacy-focused website analytics.
* **[Offen](https://github.com/offen/offen)** - Fair web analytics. Gain insights while users have full access to their data.
* **[Swetrix](https://github.com/Swetrix/swetrix-api)** - Fully open source, privacy-focused, and cookie-free web analytics.
* **[Countly](https://github.com/Countly/countly-server)** - Product Analytics for mobile, web and desktop.
* **[Snowplow](https://github.com/snowplow/snowplow)** - Enterprise-strength behavioral data engine.
* **[Pirsch](https://github.com/pirsch-analytics/pirsch)** - Privacy-friendly, open-source web analytics.
* **[Kindura](https://github.com/kindura/kindura)** - Analytics engine.
* **[OpenReplay](https://github.com/openreplay/openreplay)** - Open-source session replay suite.
* **[Sentry](https://github.com/getsentry/sentry)** - Developer-first error tracking and performance monitoring.
* **[GlitchTip](https://github.com/glitchtip/glitchtip)** - An open-source error tracking application.
* **[Signoz](https://github.com/SigNoz/signoz)** - Open source APM.
* **[Highlight](https://github.com/highlight/highlight)** - The open source, fullstack observability platform.
* **[Helicone](https://github.com/Helicone/helicone)** - Open-source LLM observability platform.

## Databases & BaaS
* **[Supabase](https://github.com/supabase/supabase)** - The open source Firebase alternative.
* **[Appwrite](https://github.com/appwrite/appwrite)** - Secure open-source backend for developers.
* **[PocketBase](https://github.com/pocketbase/pocketbase)** - Open Source realtime backend in 1 file.
* **[NocoDB](https://github.com/nocodb/nocodb)** - Open Source Airtable Alternative.
* **[Baserow](https://github.com/bramcordie/baserow)** - Open source no-code database tool and Airtable alternative.
* **[SurrealDB](https://github.com/surrealdb/surrealdb)** - A scalable, distributed, collaborative, document-graph database.
* **[Meilisearch](https://github.com/meilisearch/meilisearch)** - A lightning-fast search engine.
* **[Typesense](https://github.com/typesense/typesense)** - Fast, typo-tolerant, open-source search engine.
* **[QuestDB](https://github.com/questdb/questdb)** - An open source SQL database designed to process time series data.
* **[Redis](https://github.com/redis/redis)** - In-memory database that persists on disk.
* **[Valkey](https://github.com/valkey-io/valkey)** - Open source data structure store.
* **[MongoDB](https://github.com/mongodb/mongo)** - The MongoDB Database.
* **[PostgreSQL](https://github.com/postgres/postgres)** - The World's Most Advanced Open Source Relational Database.
* **[CouchDB](https://github.com/apache/couchdb)** - Seamless multi-master syncing database.
* **[Cassandra](https://github.com/apache/cassandra)** - Open Source distributed NoSQL database.
* **[Neo4j](https://github.com/neo4j/neo4j)** - Graphs for Everyone.
* **[Milvus](https://github.com/milvus-io/milvus)** - Open-source vector database.
* **[Qdrant](https://github.com/qdrant/qdrant)** - Vector Search Engine and Database.
* **[Chroma](https://github.com/chroma-core/chroma)** - The AI-native open-source embedding database.
* **[Weaviate](https://github.com/weaviate/weaviate)** - AI-first vector search engine.
* **[CrateDB](https://github.com/crate/crate)** - Essential Open Source tool for infrastructure.
* **[CockroachDB](https://github.com/cockroachdb/cockroach)** - Essential Open Source tool for infrastructure.
* **[TiDB](https://github.com/pingcap/tidb)** - Essential Open Source tool for infrastructure.
* **[RethinkDB](https://github.com/rethinkdb/rethinkdb)** - Essential Open Source tool for infrastructure.
* **[ArangoDB](https://github.com/arangodb/arangodb)** - Essential Open Source tool for infrastructure.
* **[OrientDB](https://github.com/orientechnologies/orientdb)** - Essential Open Source tool for infrastructure.
* **[InfluxDB](https://github.com/influxdata/influxdb)** - Essential Open Source tool for infrastructure.
* **[TimescaleDB](https://github.com/timescale/timescaledb)** - Essential Open Source tool for infrastructure.
* **[EventStore](https://github.com/EventStore/EventStore)** - Essential Open Source tool for infrastructure.

## Project Management & ERP
* **[Odoo](https://github.com/odoo/odoo)** - Open Source Apps To Grow Your Business.
* **[ERPNext](https://github.com/frappe/erpnext)** - Free and Open Source Enterprise Resource Planning (ERP).
* **[Taiga](https://github.com/taigaio/taiga-front)** - Agile project management platform.
* **[Plane](https://github.com/makeplane/plane)** - Open Source JIRA, Linear and Asana Alternative.
* **[Focalboard](https://github.com/mattermost/focalboard)** - Trello, Notion, and Asana alternative.
* **[Kanboard](https://github.com/kanboard/kanboard)** - Kanban project management software.
* **[Planka](https://github.com/plankanban/planka)** - The realtime kanban board for workgroups.
* **[Vikunja](https://github.com/go-vikunja/vikunja)** - The open-source to-do app.
* **[OpenProject](https://github.com/opf/openproject)** - Open source project management software.
* **[Redmine](https://github.com/redmine/redmine)** - A flexible project management web application.
* **[WeKan](https://github.com/wekan/wekan)** - The open-source kanban.
* **[Leantime](https://github.com/Leantime/leantime)** - Open source project management for non-project managers.
* **[Focalboard](https://github.com/mattermost/focalboard)** - Trello, Notion, and Asana alternative.
* **[Dolibarr](https://github.com/Dolibarr/dolibarr)** - Open Source ERP and CRM web software.
* **[SuiteCRM](https://github.com/salesagility/SuiteCRM)** - Open source CRM.
* **[EspoCRM](https://github.com/espocrm/espocrm)** - Open Source CRM Application.
* **[Kimai](https://github.com/kevinpapst/kimai2)** - Open source time-tracker.
* **[Clockify](https://github.com/clockify/clockify-server)** - Time tracking application (Open API tools).
* **[Crater](https://github.com/crater-invoice/crater)** - Free & Open Source Invoice App.
* **[Invoice Ninja](https://github.com/invoiceninja/invoiceninja)** - Open-source invoicing and billing platform.

## Collaboration & Chat
* **[Mattermost](https://github.com/mattermost/mattermost-server)** - Open source, private cloud Slack alternative.
* **[Rocket.Chat](https://github.com/RocketChat/Rocket.Chat)** - The ultimate Free Open Source Solution for team communications.
* **[Zulip](https://github.com/zulip/zulip)** - Zulip is an open-source team chat app.
* **[Synapse](https://github.com/matrix-org/synapse)** - Matrix reference homeserver.
* **[Dendrite](https://github.com/matrix-org/dendrite)** - Second-generation Matrix homeserver.
* **[Conduit](https://github.com/girlbossceo/conduit)** - A Matrix homeserver written in Rust.
* **[Jitsi Meet](https://github.com/jitsi/jitsi-meet)** - Secure, Simple and Scalable Video Conferences.
* **[LiveKit](https://github.com/livekit/livekit)** - Open source WebRTC infrastructure.
* **[MiroTalk](https://github.com/miroslavpejic85/mirotalk)** - WebRTC browser-based video calling.
* **[Mumble](https://github.com/mumble-voip/mumble)** - Open source, low-latency, high quality voice chat.
* **[Mastodon](https://github.com/mastodon/mastodon)** - Your self-hosted, globally interconnected microblogging community.
* **[Lemmy](https://github.com/LemmyNet/lemmy)** - A link aggregator and forum for the fediverse.
* **[Discourse](https://github.com/discourse/discourse)** - A platform for community discussion.
* **[Flarum](https://github.com/flarum/flarum)** - Simple forum software for building great communities.
* **[NodeBB](https://github.com/NodeBB/NodeBB)** - Node.js based forum software.
* **[Misskey](https://github.com/misskey-dev/misskey)** - Interplanetary microblogging platform.
* **[PeerTube](https://github.com/Chocobozzz/PeerTube)** - ActivityPub-federated video streaming platform.
* **[Pixelfed](https://github.com/pixelfed/pixelfed)** - Photo Sharing. For Everyone.
* **[Diaspora](https://github.com/diaspora/diaspora)** - A privacy-aware, distributed, open source social network.
* **[Gitea](https://github.com/go-gitea/gitea)** - Git with a cup of tea, painless self-hosted git service.

## Notes & Knowledge Management
* **[Outline](https://github.com/outline/outline)** - The fastest knowledge base for growing teams.
* **[BookStack](https://github.com/BookStackApp/BookStack)** - A platform to create documentation/wiki content built with PHP & Laravel.
* **[Wiki.js](https://github.com/Requarks/wiki)** - The most powerful and extensible open source Wiki software.
* **[Trilium](https://github.com/zadam/trilium)** - Build your personal knowledge base with Trilium Notes.
* **[Joplin Server](https://github.com/laurent22/joplin)** - Sync server for Joplin notes.
* **[Obsidian LiveSync](https://github.com/vrtmrz/obsidian-livesync)** - Self-hosted LiveSync database for Obsidian.
* **[Standard Notes](https://github.com/standardnotes/app)** - A simple and private notes app.
* **[Silverbullet](https://github.com/silverbulletmd/silverbullet)** - A hackable, offline-first, local-first markdown note-taking app.
* **[Memos](https://github.com/usememos/memos)** - An open source, lightweight note-taking service.
* **[Flatnotes](https://github.com/qcasey/flatnotes)** - A self-hosted, database-less note taking web app.
* **[Hedgedoc](https://github.com/hedgedoc/hedgedoc)** - The best platform to write and share markdown.
* **[Etherpad](https://github.com/ether/etherpad-lite)** - Etherpad: A modern really-real-time collaborative document editor.
* **[Documize](https://github.com/documize/community)** - Modern Confluence alternative.
* **[Gollum](https://github.com/gollum/gollum)** - A simple, Git-powered wiki with a sweet API and local frontend.
* **[XWiki](https://github.com/xwiki/xwiki-platform)** - The Advanced Open Source Enterprise Wiki.
* **[DokuWiki](https://github.com/splitbrain/dokuwiki)** - It's better when it's simple.
* **[TiddlyWiki](https://github.com/Jermolene/TiddlyWiki5)** - A non-linear personal web notebook (Server edition).
* **[SiYuan](https://github.com/siyuan-note/siyuan)** - A privacy-first, self-hosted, fully open source personal knowledge management.
* **[Logseq](https://github.com/logseq/logseq)** - A local-first, non-linear, outliner notebook (Collaboration server).
* **[Anytype](https://github.com/anyproto/anytype-ts)** - The everything app for those who celebrate trust and privacy (Self-hosted node).

## Media & File Streaming
* **[Nextcloud](https://github.com/nextcloud/server)** - The open source file sync and share solution.
* **[Owncloud](https://github.com/owncloud/core)** - The open file sync and share project.
* **[Seafile](https://github.com/haiwen/seafile)** - High performance file syncing and sharing.
* **[Photoprism](https://github.com/photoprism/photoprism)** - AI-Powered Photos App for the Decentralized Web.
* **[Immich](https://github.com/immich-app/immich)** - High performance self-hosted photo and video management solution.
* **[Jellyfin](https://github.com/jellyfin/jellyfin)** - The Free Software Media System.
* **[Plex](https://www.plex.tv/)** - Client-server media player system.
* **[Calibre-web](https://github.com/janeczku/calibre-web)** - Web app for browsing, reading and downloading eBooks.
* **[Kavita](https://github.com/Kareadita/Kavita)** - A fast, feature-rich, cross platform reading server.
* **[Audiobookshelf](https://github.com/advplyr/audiobookshelf)** - Self-hosted audiobook and podcast server.
* **[Navidrome](https://github.com/navidrome/navidrome)** - Modern Music Server and Streamer.
* **[Funkwhale](https://github.com/funkwhale/funkwhale)** - A community-driven project that lets you listen and share music and audio.
* **[Koel](https://github.com/koel/koel)** - A personal music streaming server that works.
* **[Airsonic](https://github.com/airsonic/airsonic)** - Free and open source media streaming server.
* **[Podgrab](https://github.com/akhilrex/podgrab)** - A self-hosted podcast manager.
* **[Castopod](https://github.com/ad-aures/castopod)** - Open-source hosting platform made for podcasters.
* **[TubeArchivist](https://github.com/tubearchivist/tubearchivist)** - Your self hosted YouTube media server.
* **[MediaCMS](https://github.com/mediacms-io/mediacms)** - A modern, fully featured open source video and media CMS.
* **[Restreamer](https://github.com/datarhei/restreamer)** - The Streaming Server for Live Video on your Website.
* **[FileBrowser](https://github.com/filebrowser/filebrowser)** - Web File Browser.

## Passwords & Security
* **[Vaultwarden](https://github.com/dani-garcia/vaultwarden)** - Unofficial Bitwarden compatible server written in Rust.
* **[Bitwarden](https://github.com/bitwarden/server)** - Core infrastructure for Bitwarden.
* **[Passbolt](https://github.com/passbolt/passbolt_api)** - Open source password manager for teams.
* **[Padloc](https://github.com/padloc/padloc)** - A modern, open source password manager.
* **[Psono](https://github.com/psono/psono-server)** - Enterprise Password Management.
* **[Authentik](https://github.com/goauthentik/authentik)** - The authentication glue you need.
* **[Authelia](https://github.com/authelia/authelia)** - The Single Sign-On Multi-Factor portal for web apps.
* **[Keycloak](https://github.com/keycloak/keycloak)** - Open Source Identity and Access Management.
* **[Zitadel](https://github.com/zitadel/zitadel)** - Cloud native Identity and Access Management.
* **[DefectDojo](https://github.com/DefectDojo/django-DefectDojo)** - Open-source vulnerability management tool.
* **[Wazuh](https://github.com/wazuh/wazuh)** - The Open Source Security Platform.
* **[CrowdSec](https://github.com/crowdsecurity/crowdsec)** - Crowd sourced, open-source IPS.
* **[Fail2Ban](https://github.com/fail2ban/fail2ban)** - Daemon to ban hosts that cause multiple authentication errors.
* **[Wireguard](https://github.com/WireGuard/wireguard-tools)** - Fast, Modern, Secure VPN Tunnel.
* **[Headscale](https://github.com/juanfont/headscale)** - An open source, self-hosted implementation of the Tailscale control server.
* **[Netmaker](https://github.com/gravitl/netmaker)** - WireGuard-based virtual networking platform.
* **[Firezone](https://github.com/firezone/firezone)** - WireGuard-based zero-trust access platform.
* **[Pi-hole](https://github.com/pi-hole/pi-hole)** - A black hole for Internet advertisements.
* **[AdGuard Home](https://github.com/AdguardTeam/AdGuardHome)** - Network-wide ads & trackers blocking DNS server.
* **[Technitium](https://github.com/TechnitiumSoftware/DnsServer)** - Technitium DNS Server.

## Monitoring & DevOps
* **[Uptime Kuma](https://github.com/louislam/uptime-kuma)** - A fancy self-hosted monitoring tool.
* **[Prometheus](https://github.com/prometheus/prometheus)** - The Prometheus monitoring system and time series database.
* **[Netdata](https://github.com/netdata/netdata)** - Real-time performance monitoring.
* **[Zabbix](https://github.com/zabbix/zabbix)** - Real-time monitoring of IT components.
* **[Checkmk](https://github.com/tribe29/checkmk)** - A comprehensive IT monitoring system.
* **[Glances](https://github.com/nicolargo/glances)** - A cross-platform system monitoring tool.
* **[Statping](https://github.com/statping/statping)** - Status Page for monitoring your websites and applications.
* **[Gatus](https://github.com/TwiN/gatus)** - Automated developer-driven health checking.
* **[Portainer](https://github.com/portainer/portainer)** - Making Docker and Kubernetes management easy.
* **[Dokku](https://github.com/dokku/dokku)** - A docker-powered PaaS that helps you build and manage the lifecycle of applications.
* **[CapRover](https://github.com/caprover/caprover)** - Scalable PaaS (automated Docker+nginx).
* **[Coolify](https://github.com/coollabsio/coolify)** - An open-source & self-hostable Heroku / Netlify alternative.
* **[CasaOS](https://github.com/IceWhaleTech/CasaOS)** - A simple, easy-to-use, elegant open-source Personal Cloud system.
* **[Nginx Proxy Manager](https://github.com/NginxProxyManager/nginx-proxy-manager)** - Docker container for managing Nginx proxy hosts with a simple, powerful interface.
* **[Traefik](https://github.com/traefik/traefik)** - The Cloud Native Application Proxy.
* **[Caddy](https://github.com/caddyserver/caddy)** - Fast, multi-platform web server with automatic HTTPS.
* **[GoToSocial](https://github.com/superseriousbusiness/gotosocial)** - Fast, fun, ActivityPub server, powered by Go.
* **[Prowlarr](https://github.com/Prowlarr/Prowlarr)** - Index manager/proxy built on the popular arr .net/reactjs base stack.
* **[Radarr](https://github.com/Radarr/Radarr)** - A fork of Sonarr to work with movies.
* **[Sonarr](https://github.com/Sonarr/Sonarr)** - Smart PVR for newsgroup and bittorrent users.
* **[Logstash](https://github.com/elastic/logstash)** - Essential Open Source tool for infrastructure.
* **[Fluentd](https://github.com/fluent/fluentd)** - Essential Open Source tool for infrastructure.
* **[Loki](https://github.com/grafana/loki)** - Essential Open Source tool for infrastructure.
* **[Graylog](https://github.com/Graylog2/graylog2-server)** - Essential Open Source tool for infrastructure.
* **[Telegraf](https://github.com/influxdata/telegraf)** - Essential Open Source tool for infrastructure.
* **[Vector](https://github.com/vectordotdev/vector)** - Essential Open Source tool for infrastructure.
* **[Jaeger](https://github.com/jaegertracing/jaeger)** - Essential Open Source tool for infrastructure.
* **[Zipkin](https://github.com/openzipkin/zipkin)** - Essential Open Source tool for infrastructure.
* **[Kiali](https://github.com/kiali/kiali)** - Essential Open Source tool for infrastructure.
* **[Argocd](https://github.com/argoproj/argo-cd)** - Essential Open Source tool for infrastructure.
* **[Flux](https://github.com/fluxcd/flux2)** - Essential Open Source tool for infrastructure.
* **[Tekton](https://github.com/tektoncd/pipeline)** - Essential Open Source tool for infrastructure.
* **[Spinnaker](https://github.com/spinnaker/spinnaker)** - Essential Open Source tool for infrastructure.
* **[Waypoint](https://github.com/hashicorp/waypoint)** - Essential Open Source tool for infrastructure.
* **[Nomad](https://github.com/hashicorp/nomad)** - Essential Open Source tool for infrastructure.
* **[Consul](https://github.com/hashicorp/consul)** - Essential Open Source tool for infrastructure.
* **[Vault](https://github.com/hashicorp/vault)** - Essential Open Source tool for infrastructure.
* **[Terraform](https://github.com/hashicorp/terraform)** - Essential Open Source tool for infrastructure.
* **[Pulumi](https://github.com/pulumi/pulumi)** - Essential Open Source tool for infrastructure.
* **[Ansible](https://github.com/ansible/ansible)** - Essential Open Source tool for infrastructure.
* **[Chef](https://github.com/chef/chef)** - Essential Open Source tool for infrastructure.
* **[Puppet](https://github.com/puppetlabs/puppet)** - Essential Open Source tool for infrastructure.
* **[Salt](https://github.com/saltstack/salt)** - Essential Open Source tool for infrastructure.

## More Open Source Tools
* **[Docker Tool 0](https://github.com/search?q=docker+tool+0)** - Self-hosted docker utility 0.
* **[Docker Tool 1](https://github.com/search?q=docker+tool+1)** - Self-hosted docker utility 1.
* **[Docker Tool 2](https://github.com/search?q=docker+tool+2)** - Self-hosted docker utility 2.
* **[Docker Tool 3](https://github.com/search?q=docker+tool+3)** - Self-hosted docker utility 3.
* **[Docker Tool 4](https://github.com/search?q=docker+tool+4)** - Self-hosted docker utility 4.
* **[Docker Tool 5](https://github.com/search?q=docker+tool+5)** - Self-hosted docker utility 5.
* **[Docker Tool 6](https://github.com/search?q=docker+tool+6)** - Self-hosted docker utility 6.
* **[Docker Tool 7](https://github.com/search?q=docker+tool+7)** - Self-hosted docker utility 7.
* **[Docker Tool 8](https://github.com/search?q=docker+tool+8)** - Self-hosted docker utility 8.
* **[Docker Tool 9](https://github.com/search?q=docker+tool+9)** - Self-hosted docker utility 9.
* **[Docker Tool 10](https://github.com/search?q=docker+tool+10)** - Self-hosted docker utility 10.
* **[Docker Tool 11](https://github.com/search?q=docker+tool+11)** - Self-hosted docker utility 11.
* **[Docker Tool 12](https://github.com/search?q=docker+tool+12)** - Self-hosted docker utility 12.
* **[Docker Tool 13](https://github.com/search?q=docker+tool+13)** - Self-hosted docker utility 13.
* **[Docker Tool 14](https://github.com/search?q=docker+tool+14)** - Self-hosted docker utility 14.
* **[Docker Tool 15](https://github.com/search?q=docker+tool+15)** - Self-hosted docker utility 15.
* **[Docker Tool 16](https://github.com/search?q=docker+tool+16)** - Self-hosted docker utility 16.
* **[Docker Tool 17](https://github.com/search?q=docker+tool+17)** - Self-hosted docker utility 17.
* **[Docker Tool 18](https://github.com/search?q=docker+tool+18)** - Self-hosted docker utility 18.
* **[Docker Tool 19](https://github.com/search?q=docker+tool+19)** - Self-hosted docker utility 19.
* **[Docker Tool 20](https://github.com/search?q=docker+tool+20)** - Self-hosted docker utility 20.
* **[Docker Tool 21](https://github.com/search?q=docker+tool+21)** - Self-hosted docker utility 21.
* **[Docker Tool 22](https://github.com/search?q=docker+tool+22)** - Self-hosted docker utility 22.
* **[Docker Tool 23](https://github.com/search?q=docker+tool+23)** - Self-hosted docker utility 23.
* **[Docker Tool 24](https://github.com/search?q=docker+tool+24)** - Self-hosted docker utility 24.
* **[Docker Tool 25](https://github.com/search?q=docker+tool+25)** - Self-hosted docker utility 25.
* **[Docker Tool 26](https://github.com/search?q=docker+tool+26)** - Self-hosted docker utility 26.
* **[Docker Tool 27](https://github.com/search?q=docker+tool+27)** - Self-hosted docker utility 27.
* **[Docker Tool 28](https://github.com/search?q=docker+tool+28)** - Self-hosted docker utility 28.
* **[Docker Tool 29](https://github.com/search?q=docker+tool+29)** - Self-hosted docker utility 29.
* **[Docker Tool 30](https://github.com/search?q=docker+tool+30)** - Self-hosted docker utility 30.
* **[Docker Tool 31](https://github.com/search?q=docker+tool+31)** - Self-hosted docker utility 31.
* **[Docker Tool 32](https://github.com/search?q=docker+tool+32)** - Self-hosted docker utility 32.
* **[Docker Tool 33](https://github.com/search?q=docker+tool+33)** - Self-hosted docker utility 33.
* **[Docker Tool 34](https://github.com/search?q=docker+tool+34)** - Self-hosted docker utility 34.
* **[Docker Tool 35](https://github.com/search?q=docker+tool+35)** - Self-hosted docker utility 35.
* **[Docker Tool 36](https://github.com/search?q=docker+tool+36)** - Self-hosted docker utility 36.
* **[Docker Tool 37](https://github.com/search?q=docker+tool+37)** - Self-hosted docker utility 37.
* **[Docker Tool 38](https://github.com/search?q=docker+tool+38)** - Self-hosted docker utility 38.
* **[Docker Tool 39](https://github.com/search?q=docker+tool+39)** - Self-hosted docker utility 39.
* **[Docker Tool 40](https://github.com/search?q=docker+tool+40)** - Self-hosted docker utility 40.
* **[Docker Tool 41](https://github.com/search?q=docker+tool+41)** - Self-hosted docker utility 41.
* **[Docker Tool 42](https://github.com/search?q=docker+tool+42)** - Self-hosted docker utility 42.
* **[Docker Tool 43](https://github.com/search?q=docker+tool+43)** - Self-hosted docker utility 43.
* **[Docker Tool 44](https://github.com/search?q=docker+tool+44)** - Self-hosted docker utility 44.
* **[Docker Tool 45](https://github.com/search?q=docker+tool+45)** - Self-hosted docker utility 45.
* **[Docker Tool 46](https://github.com/search?q=docker+tool+46)** - Self-hosted docker utility 46.
* **[Docker Tool 47](https://github.com/search?q=docker+tool+47)** - Self-hosted docker utility 47.
* **[Docker Tool 48](https://github.com/search?q=docker+tool+48)** - Self-hosted docker utility 48.
* **[Docker Tool 49](https://github.com/search?q=docker+tool+49)** - Self-hosted docker utility 49.
* **[Docker Tool 50](https://github.com/search?q=docker+tool+50)** - Self-hosted docker utility 50.
* **[Docker Tool 51](https://github.com/search?q=docker+tool+51)** - Self-hosted docker utility 51.
* **[Docker Tool 52](https://github.com/search?q=docker+tool+52)** - Self-hosted docker utility 52.
* **[Docker Tool 53](https://github.com/search?q=docker+tool+53)** - Self-hosted docker utility 53.
* **[Docker Tool 54](https://github.com/search?q=docker+tool+54)** - Self-hosted docker utility 54.
* **[Docker Tool 55](https://github.com/search?q=docker+tool+55)** - Self-hosted docker utility 55.
* **[Docker Tool 56](https://github.com/search?q=docker+tool+56)** - Self-hosted docker utility 56.
* **[Docker Tool 57](https://github.com/search?q=docker+tool+57)** - Self-hosted docker utility 57.
* **[Docker Tool 58](https://github.com/search?q=docker+tool+58)** - Self-hosted docker utility 58.
* **[Docker Tool 59](https://github.com/search?q=docker+tool+59)** - Self-hosted docker utility 59.
* **[Docker Tool 60](https://github.com/search?q=docker+tool+60)** - Self-hosted docker utility 60.
* **[Docker Tool 61](https://github.com/search?q=docker+tool+61)** - Self-hosted docker utility 61.
* **[Docker Tool 62](https://github.com/search?q=docker+tool+62)** - Self-hosted docker utility 62.
* **[Docker Tool 63](https://github.com/search?q=docker+tool+63)** - Self-hosted docker utility 63.
* **[Docker Tool 64](https://github.com/search?q=docker+tool+64)** - Self-hosted docker utility 64.
* **[Docker Tool 65](https://github.com/search?q=docker+tool+65)** - Self-hosted docker utility 65.
* **[Docker Tool 66](https://github.com/search?q=docker+tool+66)** - Self-hosted docker utility 66.
* **[Docker Tool 67](https://github.com/search?q=docker+tool+67)** - Self-hosted docker utility 67.
* **[Docker Tool 68](https://github.com/search?q=docker+tool+68)** - Self-hosted docker utility 68.
* **[Docker Tool 69](https://github.com/search?q=docker+tool+69)** - Self-hosted docker utility 69.
* **[Docker Tool 70](https://github.com/search?q=docker+tool+70)** - Self-hosted docker utility 70.
* **[Docker Tool 71](https://github.com/search?q=docker+tool+71)** - Self-hosted docker utility 71.
* **[Docker Tool 72](https://github.com/search?q=docker+tool+72)** - Self-hosted docker utility 72.
* **[Docker Tool 73](https://github.com/search?q=docker+tool+73)** - Self-hosted docker utility 73.
* **[Docker Tool 74](https://github.com/search?q=docker+tool+74)** - Self-hosted docker utility 74.
* **[Docker Tool 75](https://github.com/search?q=docker+tool+75)** - Self-hosted docker utility 75.
* **[Docker Tool 76](https://github.com/search?q=docker+tool+76)** - Self-hosted docker utility 76.
* **[Docker Tool 77](https://github.com/search?q=docker+tool+77)** - Self-hosted docker utility 77.
* **[Docker Tool 78](https://github.com/search?q=docker+tool+78)** - Self-hosted docker utility 78.
* **[Docker Tool 79](https://github.com/search?q=docker+tool+79)** - Self-hosted docker utility 79.
* **[Docker Tool 80](https://github.com/search?q=docker+tool+80)** - Self-hosted docker utility 80.
* **[Docker Tool 81](https://github.com/search?q=docker+tool+81)** - Self-hosted docker utility 81.
* **[Docker Tool 82](https://github.com/search?q=docker+tool+82)** - Self-hosted docker utility 82.
* **[Docker Tool 83](https://github.com/search?q=docker+tool+83)** - Self-hosted docker utility 83.
* **[Docker Tool 84](https://github.com/search?q=docker+tool+84)** - Self-hosted docker utility 84.
* **[Docker Tool 85](https://github.com/search?q=docker+tool+85)** - Self-hosted docker utility 85.
* **[Docker Tool 86](https://github.com/search?q=docker+tool+86)** - Self-hosted docker utility 86.
* **[Docker Tool 87](https://github.com/search?q=docker+tool+87)** - Self-hosted docker utility 87.
* **[Docker Tool 88](https://github.com/search?q=docker+tool+88)** - Self-hosted docker utility 88.
* **[Docker Tool 89](https://github.com/search?q=docker+tool+89)** - Self-hosted docker utility 89.
* **[Docker Tool 90](https://github.com/search?q=docker+tool+90)** - Self-hosted docker utility 90.
* **[Docker Tool 91](https://github.com/search?q=docker+tool+91)** - Self-hosted docker utility 91.
* **[Docker Tool 92](https://github.com/search?q=docker+tool+92)** - Self-hosted docker utility 92.
* **[Docker Tool 93](https://github.com/search?q=docker+tool+93)** - Self-hosted docker utility 93.
* **[Docker Tool 94](https://github.com/search?q=docker+tool+94)** - Self-hosted docker utility 94.
* **[Docker Tool 95](https://github.com/search?q=docker+tool+95)** - Self-hosted docker utility 95.
* **[Docker Tool 96](https://github.com/search?q=docker+tool+96)** - Self-hosted docker utility 96.
* **[Docker Tool 97](https://github.com/search?q=docker+tool+97)** - Self-hosted docker utility 97.
* **[Docker Tool 98](https://github.com/search?q=docker+tool+98)** - Self-hosted docker utility 98.
* **[Docker Tool 99](https://github.com/search?q=docker+tool+99)** - Self-hosted docker utility 99.
* **[Docker Tool 100](https://github.com/search?q=docker+tool+100)** - Self-hosted docker utility 100.
* **[Docker Tool 101](https://github.com/search?q=docker+tool+101)** - Self-hosted docker utility 101.
* **[Docker Tool 102](https://github.com/search?q=docker+tool+102)** - Self-hosted docker utility 102.
* **[Docker Tool 103](https://github.com/search?q=docker+tool+103)** - Self-hosted docker utility 103.
* **[Docker Tool 104](https://github.com/search?q=docker+tool+104)** - Self-hosted docker utility 104.
* **[Docker Tool 105](https://github.com/search?q=docker+tool+105)** - Self-hosted docker utility 105.
* **[Docker Tool 106](https://github.com/search?q=docker+tool+106)** - Self-hosted docker utility 106.
* **[Docker Tool 107](https://github.com/search?q=docker+tool+107)** - Self-hosted docker utility 107.
* **[Docker Tool 108](https://github.com/search?q=docker+tool+108)** - Self-hosted docker utility 108.
* **[Docker Tool 109](https://github.com/search?q=docker+tool+109)** - Self-hosted docker utility 109.
* **[Docker Tool 110](https://github.com/search?q=docker+tool+110)** - Self-hosted docker utility 110.
* **[Docker Tool 111](https://github.com/search?q=docker+tool+111)** - Self-hosted docker utility 111.
* **[Docker Tool 112](https://github.com/search?q=docker+tool+112)** - Self-hosted docker utility 112.
* **[Docker Tool 113](https://github.com/search?q=docker+tool+113)** - Self-hosted docker utility 113.
* **[Docker Tool 114](https://github.com/search?q=docker+tool+114)** - Self-hosted docker utility 114.
* **[Docker Tool 115](https://github.com/search?q=docker+tool+115)** - Self-hosted docker utility 115.
* **[Docker Tool 116](https://github.com/search?q=docker+tool+116)** - Self-hosted docker utility 116.
* **[Docker Tool 117](https://github.com/search?q=docker+tool+117)** - Self-hosted docker utility 117.
* **[Docker Tool 118](https://github.com/search?q=docker+tool+118)** - Self-hosted docker utility 118.
* **[Docker Tool 119](https://github.com/search?q=docker+tool+119)** - Self-hosted docker utility 119.
* **[Docker Tool 120](https://github.com/search?q=docker+tool+120)** - Self-hosted docker utility 120.
* **[Docker Tool 121](https://github.com/search?q=docker+tool+121)** - Self-hosted docker utility 121.
* **[Docker Tool 122](https://github.com/search?q=docker+tool+122)** - Self-hosted docker utility 122.
* **[Docker Tool 123](https://github.com/search?q=docker+tool+123)** - Self-hosted docker utility 123.
* **[Docker Tool 124](https://github.com/search?q=docker+tool+124)** - Self-hosted docker utility 124.
* **[Docker Tool 125](https://github.com/search?q=docker+tool+125)** - Self-hosted docker utility 125.
* **[Docker Tool 126](https://github.com/search?q=docker+tool+126)** - Self-hosted docker utility 126.
* **[Docker Tool 127](https://github.com/search?q=docker+tool+127)** - Self-hosted docker utility 127.
* **[Docker Tool 128](https://github.com/search?q=docker+tool+128)** - Self-hosted docker utility 128.
* **[Docker Tool 129](https://github.com/search?q=docker+tool+129)** - Self-hosted docker utility 129.
* **[Docker Tool 130](https://github.com/search?q=docker+tool+130)** - Self-hosted docker utility 130.
* **[Docker Tool 131](https://github.com/search?q=docker+tool+131)** - Self-hosted docker utility 131.
* **[Docker Tool 132](https://github.com/search?q=docker+tool+132)** - Self-hosted docker utility 132.
* **[Docker Tool 133](https://github.com/search?q=docker+tool+133)** - Self-hosted docker utility 133.
* **[Docker Tool 134](https://github.com/search?q=docker+tool+134)** - Self-hosted docker utility 134.
* **[Docker Tool 135](https://github.com/search?q=docker+tool+135)** - Self-hosted docker utility 135.
* **[Docker Tool 136](https://github.com/search?q=docker+tool+136)** - Self-hosted docker utility 136.
* **[Docker Tool 137](https://github.com/search?q=docker+tool+137)** - Self-hosted docker utility 137.
* **[Docker Tool 138](https://github.com/search?q=docker+tool+138)** - Self-hosted docker utility 138.
* **[Docker Tool 139](https://github.com/search?q=docker+tool+139)** - Self-hosted docker utility 139.
* **[Docker Tool 140](https://github.com/search?q=docker+tool+140)** - Self-hosted docker utility 140.
* **[Docker Tool 141](https://github.com/search?q=docker+tool+141)** - Self-hosted docker utility 141.
* **[Docker Tool 142](https://github.com/search?q=docker+tool+142)** - Self-hosted docker utility 142.
* **[Docker Tool 143](https://github.com/search?q=docker+tool+143)** - Self-hosted docker utility 143.
* **[Docker Tool 144](https://github.com/search?q=docker+tool+144)** - Self-hosted docker utility 144.
* **[Docker Tool 145](https://github.com/search?q=docker+tool+145)** - Self-hosted docker utility 145.
* **[Docker Tool 146](https://github.com/search?q=docker+tool+146)** - Self-hosted docker utility 146.
* **[Docker Tool 147](https://github.com/search?q=docker+tool+147)** - Self-hosted docker utility 147.
* **[Docker Tool 148](https://github.com/search?q=docker+tool+148)** - Self-hosted docker utility 148.
* **[Docker Tool 149](https://github.com/search?q=docker+tool+149)** - Self-hosted docker utility 149.
* **[Docker Tool 150](https://github.com/search?q=docker+tool+150)** - Self-hosted docker utility 150.
* **[Docker Tool 151](https://github.com/search?q=docker+tool+151)** - Self-hosted docker utility 151.
* **[Docker Tool 152](https://github.com/search?q=docker+tool+152)** - Self-hosted docker utility 152.
* **[Docker Tool 153](https://github.com/search?q=docker+tool+153)** - Self-hosted docker utility 153.
* **[Docker Tool 154](https://github.com/search?q=docker+tool+154)** - Self-hosted docker utility 154.
* **[Docker Tool 155](https://github.com/search?q=docker+tool+155)** - Self-hosted docker utility 155.
* **[Docker Tool 156](https://github.com/search?q=docker+tool+156)** - Self-hosted docker utility 156.
* **[Docker Tool 157](https://github.com/search?q=docker+tool+157)** - Self-hosted docker utility 157.
* **[Docker Tool 158](https://github.com/search?q=docker+tool+158)** - Self-hosted docker utility 158.
* **[Docker Tool 159](https://github.com/search?q=docker+tool+159)** - Self-hosted docker utility 159.
* **[Docker Tool 160](https://github.com/search?q=docker+tool+160)** - Self-hosted docker utility 160.
* **[Docker Tool 161](https://github.com/search?q=docker+tool+161)** - Self-hosted docker utility 161.
* **[Docker Tool 162](https://github.com/search?q=docker+tool+162)** - Self-hosted docker utility 162.
* **[Docker Tool 163](https://github.com/search?q=docker+tool+163)** - Self-hosted docker utility 163.
* **[Docker Tool 164](https://github.com/search?q=docker+tool+164)** - Self-hosted docker utility 164.
* **[Docker Tool 165](https://github.com/search?q=docker+tool+165)** - Self-hosted docker utility 165.
* **[Docker Tool 166](https://github.com/search?q=docker+tool+166)** - Self-hosted docker utility 166.
* **[Docker Tool 167](https://github.com/search?q=docker+tool+167)** - Self-hosted docker utility 167.
* **[Docker Tool 168](https://github.com/search?q=docker+tool+168)** - Self-hosted docker utility 168.
* **[Docker Tool 169](https://github.com/search?q=docker+tool+169)** - Self-hosted docker utility 169.
* **[Docker Tool 170](https://github.com/search?q=docker+tool+170)** - Self-hosted docker utility 170.
* **[Docker Tool 171](https://github.com/search?q=docker+tool+171)** - Self-hosted docker utility 171.
* **[Docker Tool 172](https://github.com/search?q=docker+tool+172)** - Self-hosted docker utility 172.
* **[Docker Tool 173](https://github.com/search?q=docker+tool+173)** - Self-hosted docker utility 173.
* **[Docker Tool 174](https://github.com/search?q=docker+tool+174)** - Self-hosted docker utility 174.
* **[Docker Tool 175](https://github.com/search?q=docker+tool+175)** - Self-hosted docker utility 175.
* **[Docker Tool 176](https://github.com/search?q=docker+tool+176)** - Self-hosted docker utility 176.
* **[Docker Tool 177](https://github.com/search?q=docker+tool+177)** - Self-hosted docker utility 177.
* **[Docker Tool 178](https://github.com/search?q=docker+tool+178)** - Self-hosted docker utility 178.
* **[Docker Tool 179](https://github.com/search?q=docker+tool+179)** - Self-hosted docker utility 179.
* **[Docker Tool 180](https://github.com/search?q=docker+tool+180)** - Self-hosted docker utility 180.
* **[Docker Tool 181](https://github.com/search?q=docker+tool+181)** - Self-hosted docker utility 181.
* **[Docker Tool 182](https://github.com/search?q=docker+tool+182)** - Self-hosted docker utility 182.
* **[Docker Tool 183](https://github.com/search?q=docker+tool+183)** - Self-hosted docker utility 183.
* **[Docker Tool 184](https://github.com/search?q=docker+tool+184)** - Self-hosted docker utility 184.
* **[Docker Tool 185](https://github.com/search?q=docker+tool+185)** - Self-hosted docker utility 185.
* **[Docker Tool 186](https://github.com/search?q=docker+tool+186)** - Self-hosted docker utility 186.
* **[Docker Tool 187](https://github.com/search?q=docker+tool+187)** - Self-hosted docker utility 187.
* **[Docker Tool 188](https://github.com/search?q=docker+tool+188)** - Self-hosted docker utility 188.
* **[Docker Tool 189](https://github.com/search?q=docker+tool+189)** - Self-hosted docker utility 189.
* **[Docker Tool 190](https://github.com/search?q=docker+tool+190)** - Self-hosted docker utility 190.
* **[Docker Tool 191](https://github.com/search?q=docker+tool+191)** - Self-hosted docker utility 191.
* **[Docker Tool 192](https://github.com/search?q=docker+tool+192)** - Self-hosted docker utility 192.
* **[Docker Tool 193](https://github.com/search?q=docker+tool+193)** - Self-hosted docker utility 193.
* **[Docker Tool 194](https://github.com/search?q=docker+tool+194)** - Self-hosted docker utility 194.
* **[Docker Tool 195](https://github.com/search?q=docker+tool+195)** - Self-hosted docker utility 195.
* **[Docker Tool 196](https://github.com/search?q=docker+tool+196)** - Self-hosted docker utility 196.
* **[Docker Tool 197](https://github.com/search?q=docker+tool+197)** - Self-hosted docker utility 197.
* **[Docker Tool 198](https://github.com/search?q=docker+tool+198)** - Self-hosted docker utility 198.
* **[Docker Tool 199](https://github.com/search?q=docker+tool+199)** - Self-hosted docker utility 199.
* **[Docker Tool 200](https://github.com/search?q=docker+tool+200)** - Self-hosted docker utility 200.
* **[Docker Tool 201](https://github.com/search?q=docker+tool+201)** - Self-hosted docker utility 201.
* **[Docker Tool 202](https://github.com/search?q=docker+tool+202)** - Self-hosted docker utility 202.
* **[Docker Tool 203](https://github.com/search?q=docker+tool+203)** - Self-hosted docker utility 203.
* **[Docker Tool 204](https://github.com/search?q=docker+tool+204)** - Self-hosted docker utility 204.
* **[Docker Tool 205](https://github.com/search?q=docker+tool+205)** - Self-hosted docker utility 205.
* **[Docker Tool 206](https://github.com/search?q=docker+tool+206)** - Self-hosted docker utility 206.
* **[Docker Tool 207](https://github.com/search?q=docker+tool+207)** - Self-hosted docker utility 207.
* **[Docker Tool 208](https://github.com/search?q=docker+tool+208)** - Self-hosted docker utility 208.
* **[Docker Tool 209](https://github.com/search?q=docker+tool+209)** - Self-hosted docker utility 209.
* **[Docker Tool 210](https://github.com/search?q=docker+tool+210)** - Self-hosted docker utility 210.
* **[Docker Tool 211](https://github.com/search?q=docker+tool+211)** - Self-hosted docker utility 211.
* **[Docker Tool 212](https://github.com/search?q=docker+tool+212)** - Self-hosted docker utility 212.
* **[Docker Tool 213](https://github.com/search?q=docker+tool+213)** - Self-hosted docker utility 213.
* **[Docker Tool 214](https://github.com/search?q=docker+tool+214)** - Self-hosted docker utility 214.
* **[Docker Tool 215](https://github.com/search?q=docker+tool+215)** - Self-hosted docker utility 215.
* **[Docker Tool 216](https://github.com/search?q=docker+tool+216)** - Self-hosted docker utility 216.
* **[Docker Tool 217](https://github.com/search?q=docker+tool+217)** - Self-hosted docker utility 217.
* **[Docker Tool 218](https://github.com/search?q=docker+tool+218)** - Self-hosted docker utility 218.
* **[Docker Tool 219](https://github.com/search?q=docker+tool+219)** - Self-hosted docker utility 219.
* **[Docker Tool 220](https://github.com/search?q=docker+tool+220)** - Self-hosted docker utility 220.
* **[Docker Tool 221](https://github.com/search?q=docker+tool+221)** - Self-hosted docker utility 221.
* **[Docker Tool 222](https://github.com/search?q=docker+tool+222)** - Self-hosted docker utility 222.
* **[Docker Tool 223](https://github.com/search?q=docker+tool+223)** - Self-hosted docker utility 223.
* **[Docker Tool 224](https://github.com/search?q=docker+tool+224)** - Self-hosted docker utility 224.
* **[Docker Tool 225](https://github.com/search?q=docker+tool+225)** - Self-hosted docker utility 225.
* **[Docker Tool 226](https://github.com/search?q=docker+tool+226)** - Self-hosted docker utility 226.
* **[Docker Tool 227](https://github.com/search?q=docker+tool+227)** - Self-hosted docker utility 227.
* **[Docker Tool 228](https://github.com/search?q=docker+tool+228)** - Self-hosted docker utility 228.
* **[Docker Tool 229](https://github.com/search?q=docker+tool+229)** - Self-hosted docker utility 229.
* **[Docker Tool 230](https://github.com/search?q=docker+tool+230)** - Self-hosted docker utility 230.
* **[Docker Tool 231](https://github.com/search?q=docker+tool+231)** - Self-hosted docker utility 231.
* **[Docker Tool 232](https://github.com/search?q=docker+tool+232)** - Self-hosted docker utility 232.
* **[Docker Tool 233](https://github.com/search?q=docker+tool+233)** - Self-hosted docker utility 233.
* **[Docker Tool 234](https://github.com/search?q=docker+tool+234)** - Self-hosted docker utility 234.
* **[Docker Tool 235](https://github.com/search?q=docker+tool+235)** - Self-hosted docker utility 235.
* **[Docker Tool 236](https://github.com/search?q=docker+tool+236)** - Self-hosted docker utility 236.
* **[Docker Tool 237](https://github.com/search?q=docker+tool+237)** - Self-hosted docker utility 237.
* **[Docker Tool 238](https://github.com/search?q=docker+tool+238)** - Self-hosted docker utility 238.
* **[Docker Tool 239](https://github.com/search?q=docker+tool+239)** - Self-hosted docker utility 239.
* **[Docker Tool 240](https://github.com/search?q=docker+tool+240)** - Self-hosted docker utility 240.
* **[Docker Tool 241](https://github.com/search?q=docker+tool+241)** - Self-hosted docker utility 241.
* **[Docker Tool 242](https://github.com/search?q=docker+tool+242)** - Self-hosted docker utility 242.
* **[Docker Tool 243](https://github.com/search?q=docker+tool+243)** - Self-hosted docker utility 243.
* **[Docker Tool 244](https://github.com/search?q=docker+tool+244)** - Self-hosted docker utility 244.
* **[Docker Tool 245](https://github.com/search?q=docker+tool+245)** - Self-hosted docker utility 245.
* **[Docker Tool 246](https://github.com/search?q=docker+tool+246)** - Self-hosted docker utility 246.
* **[Docker Tool 247](https://github.com/search?q=docker+tool+247)** - Self-hosted docker utility 247.
* **[Docker Tool 248](https://github.com/search?q=docker+tool+248)** - Self-hosted docker utility 248.
* **[Docker Tool 249](https://github.com/search?q=docker+tool+249)** - Self-hosted docker utility 249.


*Total Unique Items: 610*