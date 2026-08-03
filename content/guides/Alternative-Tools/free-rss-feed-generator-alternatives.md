---
tags:
  - guides
---

# Free RSS Feed Generator Alternatives
*Created: 4/24/2026, 12:41:25 PM*
*Exported: 4/24/2026, 12:41:25 PM*

---

## 1. User

is there a free alternative to rss.app?

---

## 2. AI

## TL;DR

Free alternatives to RSS.app for generating feeds from websites include **[RSSHub](https://www.google.com/search?q=https://rsshub.app/)**, **[PolitePaul](https://politepaul.com/)**, and **[RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge)**.

---

### **Top Free RSS Generators**

- **[RSSHub](https://www.google.com/search?q=https://rsshub.app/)**

- **Best for:** Developers and users seeking an open-source, community-driven solution.
- **Features:** Supports thousands of websites (social media, news, etc.) through "routes."
- **Cost:** Completely free; can be self-hosted for unlimited use.
- **[PolitePaul](https://politepaul.com/)**

- **Best for:** A simple, visual "no-code" experience similar to RSS.app.
- **Features:** Includes a visual constructor to pick elements (Title, Link) from a page.
- **Cost:** Free tier allows basic feed creation and monitoring.
- **[RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge)**

- **Best for:** Privacy-conscious users willing to self-host.
- **Features:** Generates feeds for sites that don't provide them (e.g., Instagram, Twitter/X, Google Search).
- **Cost:** 100% free (Open Source).
- **[RssEverything](https://rsseverything.com/)**

- **Best for:** Quick extraction rules.
- **Features:** Updates every 10 minutes (faster than the old Feed43).
- **Cost:** Offers a functional free plan with limits on items per feed.
- **[FetchRSS](https://fetchrss.com/)**

- **Best for:** Social media conversion.
- **Features:** Visual builder for non-technical users.
- **Cost:** Free plan is limited (5 feeds, manual updates every 24 hours).

---

### **Comparison Table**

| | **Feature** | | **[RSSHub](https://www.google.com/search?q=https://rsshub.app/)** | | **[PolitePaul](https://politepaul.com/)** | | **[RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge)** | | **[FetchRSS](https://fetchrss.com/)** |
| :--- | :--- | :--- | :--- | :--- |
| | **Open Source** | | Yes | | No | | Yes | | No |
| | **Setup** | | Web/Self-host | | Web | | Self-host | | Web |
| | **Visual Selector** | | No (Pre-built routes) | | Yes | | No | | Yes |
| | **Price** | | $0 | | Free Tier | | $0 | | Limited Free |

---

### **For Consuming Feeds (Readers)**

If you already have a feed and just need a free app to read it:

- **[NetNewsWire](https://netnewswire.com/)**: Completely free, open-source native app for Mac and iOS.
- **[FreshRSS](https://freshrss.org/)**: Best self-hosted aggregator.
- **[Inoreader](https://www.inoreader.com/)**: Robust free tier (up to 150 feeds).

---

## 3. User

no like the tools and widgets rss.app has

---

## 4. AI

## TL;DR

If you need the **galleries, carousels, and walls** that RSS.app offers, the best free alternatives are **[Common Ninja](https://www.commoninja.com/widgets/rss-feed)** and **[SociableKIT](https://www.sociablekit.com/free-widgets/free-rss-feed-widget-website/)**. For a more technical, developer-friendly "widget gallery," **[RSSHub](https://www.google.com/search?q=https://rsshub.app/)** combined with a custom frontend is the open-source path.

---

### **Visual Widget Gallery Alternatives**

- **[Common Ninja (RSS Feed Widget)](https://www.commoninja.com/widgets/rss-feed)**

- **Widget Styles:** Magazine layouts, News Walls, Carousels, and Tickers.
- **Best Feature:** Very high degree of CSS customization and skinning, almost identical to RSS.app’s builder.
- **Free Tier:** Includes a free version, though it has a "view limit" (how many times the widget can be loaded per month).
- **[SociableKIT](https://www.sociablekit.com/free-widgets/free-rss-feed-widget-website/)**

- **Widget Styles:** Responsive grids, lists, and masonry layouts.
- **Best Feature:** Specifically designed for embedding on site builders (Wix, Notion, WordPress).
- **Free Tier:** Offers a free plan with standard customization.
- **[FeedWind](https://www.google.com/search?q=https://feedwind.com/)**

- **Widget Styles:** Clean, professional scrolls and lists.
- **Best Feature:** One of the oldest and most stable widget generators. It supports "media" feeds very well (great for YouTube/Instagram galleries).
- **Free Tier:** Limited free version with a small "powered by" link.
- **[Surfing Waves](https://surfing-waves.com/feed.htm)**

- **Widget Styles:** Basic lists and scrolling tickers.
- **Best Feature:** **Completely free** with no view limits (rare for hosted widgets).
- **Cons:** The UI is dated, but it allows for custom CSS to make it look modern.

---

### **Alternative Feature Comparison**

| | **Feature** | | **[Common Ninja](https://www.commoninja.com/)** | | **[SociableKIT](https://www.sociablekit.com/)** | | **[FeedWind](https://www.google.com/search?q=https://feedwind.com/)** | | **[Surfing Waves](https://surfing-waves.com/)** |
| :--- | :--- | :--- | :--- | :--- |
| | **Carousel/Slider** | | Yes | | Yes | | Yes | | No (Scroll only) |
| | **News Wall** | | Yes | | Yes | | No | | No |
| | **Ticker** | | Yes | | No | | No | | Yes |
| | **Custom CSS** | | Yes | | Yes | | Yes | | Yes |
| | **Free Limit** | | View Based | | Entry Based | | Feature Based | | Unlimited |

---

### **Developer/Self-Hosted Option**

If you want to avoid "Free Tier" limits and watermarks entirely:

- **[RSSHub](https://www.google.com/search?q=https://rsshub.app/)**: Since you use developer tools, you can use RSSHub to get the data and then use a simple JavaScript library like **[Feed-to-HTML](https://www.google.com/search?q=https://github.com/sdepold/feed-to-html)** or a **[Slick Carousel](https://kenwheeler.github.io/slick/)** to build your own widget. This gives you total control over the "Gallery" look without a subscription.

Which specific widget style (e.g., the scrolling ticker or the image grid) are you trying to replicate?

---

## 5. User

so i can create my own widgets and host them? just like rss.hub has? and could i make it public for others?

---

## 6. AI

## TL;DR

Yes, you can absolutely build and host your own public RSS widgets. Since you use **[RSSHub](https://www.google.com/search?q=https://rsshub.app/)**, the standard path is to use its data output and render it into a "widget" using a small bit of HTML/JS, then host it on a platform like **[GitHub Pages](https://pages.github.com/)** or **[Vercel](https://vercel.com/)**.

---

### **1. The Architecture**

To replace RSS.app, you need two parts:

- **The Data (RSSHub):** Generates the feed (e.g., your Mastodon or GitHub activity).
- **The UI (The Widget):** A small website that fetches that feed and displays it as a gallery or list.

### **2. How to Create the Widget**

Since you're comfortable with developer tools, you don't need a "builder." You can use a library to turn an RSS feed into a visual component:

- **[Feed-to-HTML](https://www.google.com/search?q=https://github.com/sdepold/feed-to-html)**: A simple JS script to render feeds into a div.
- **[RSS2JSON](https://rss2json.com/)**: This is a vital "bridge." Most browsers block your website from reading an RSS feed directly due to CORS (Security). RSS2JSON turns your RSSHub link into a JSON object that is easy to style with CSS.
- **Custom CSS**: You can style your "gallery" exactly how you want (grid, carousel, masonry) using standard CSS.

### **3. Hosting & Making it Public**

Once you have your HTML/JS file:

- **[GitHub Pages](https://pages.github.com/)**: Perfect for hosting a static widget. You can point a subdomain (like `widgets.eliana.lol`) to it.
- **[Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/)**: Great if you want to add a tiny bit of backend logic or use a framework like Astro.
- **Embedding**: Once hosted, you (and others) can use an `<iframe>` to put your widget on any other site:
HTML
```
<iframe src="https://widgets.eliana.lol/my-cool-gallery" width="100%" height="500px"></iframe>

```

### **4. Open Source "Self-Hostable" Builders**

If you want a GUI to manage many widgets for others to use:

- **[RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge)**: While primarily for feeds, it can be extended.
- **[Widget-Server Projects](https://www.google.com/search?q=https://github.com/topics/widget-server)**: There are various templates on GitHub for "RSS to Widget" servers that you can deploy to a VPS.

---

### **Example Workflow**

1. **Get Feed**: `https://rsshub.app/github/issue/DIYgod/RSSHub`
2. **Convert to JSON**: `https://api.rss2json.com/v1/api.json?rss_url=YOUR_RSSHUB_URL`
3. **Build UI**: Write a 20-line HTML file that `fetch()`es that JSON and loops through the items to create cards.
4. **Deploy**: Push to GitHub.
5. **Share**: Give people the URL to embed.

Do you want a template for a basic HTML/JS widget that uses your RSSHub feeds?

---

## 7. User

make me a guide for later. also is this helpful https://docs.rsshub.app/ecosystem#integration? i plan on literally making every single tool available on rss.app but for free. that includes [RSS Feeds](https://rss.app/rss-feed)  -   [Webpage to RSS](https://rss.app/rss-feed/webpage-to-rss)  -   [Google News RSS](https://rss.app/rss-feed/google-news-rss-feed)  -   [Instagram RSS Feed](https://rss.app/rss-feed/create-instagram-rss-feed)  -   [TikTok RSS Feed](https://rss.app/rss-feed/tiktok-to-rss)  -   [Threads RSS Feed](https://rss.app/rss-feed/create-threads-rss-feed)  -   [Craigslist RSS Feed](https://rss.app/rss-feed/craigslist-to-rss)  -   [X / Twitter RSS Feed](https://rss.app/rss-feed/create-twitter-rss-feed)  -   [Reddit RSS Feed](https://rss.app/rss-feed/create-reddit-rss-feed)  -   [YouTube RSS Feed](https://rss.app/rss-feed/create-youtube-rss-feed)  -   [Telegram RSS Feed](https://rss.app/rss-feed/create-Telegram-rss-feed)  -   [Facebook RSS Feed](https://rss.app/rss-feed/create-facebook-rss-feed)  -   [eBay RSS Feed](https://rss.app/rss-feed/create-ebay-rss-feed)  -   [Bluesky RSS Feed](https://rss.app/rss-feed/bsky-to-rss)  -   [All Feeds](https://rss.app/rss-feed)  [Widgets](https://rss.app/rss-widgets)  -   [RSS to HTML](https://rss.app/rss-to-html)  -   [News Wall](https://rss.app/rss-widgets/news-wall-widget)  -   [News Ticker](https://rss.app/rss-widgets/news-ticker-widget)  -   [Carousel](https://rss.app/rss-widgets/carousel-widget)  -   [List](https://rss.app/rss-widgets/list-widget)  -   [Shopify](https://rss.app/website-widgets-integrations/shopify-news-feeds-widget)  -   [Squarespace](https://rss.app/website-widgets-integrations/squarespace-news-feeds-widget)  -   [Weebly](https://rss.app/website-widgets-integrations/weebly-news-feeds-widget)  -   [Wordpress](https://rss.app/website-widgets-integrations/wordpress-news-feeds-widget)  -   [Drupal](https://rss.app/website-widgets-integrations/drupal-news-feeds-widget)  -   [HTML](https://rss.app/website-widgets-integrations/html-news-feeds-widget)  -   [Wix](https://rss.app/website-widgets-integrations/wix-news-feeds-widget)  -   [All Widgets](https://rss.app/rss-widgets)  [Tools & Features](https://rss.app/tools)  -   [RSS Builder](https://rss.app/rss-feed/rss-builder)  -   [Bots & Alerts](https://rss.app/bots)  -   [RSS to Email](https://rss.app/tools/rss-to-email)  -   [Newsletter to RSS](https://rss.app/tools/newsletter-to-rss-feed-email-feed)  -   [RSS Feed Translation](https://rss.app/translate-rss-feeds)  -   [RSS Feed Aggregator](https://rss.app/feed-bundles)  -   [RSS to JSON](https://rss.app/tools/rss-to-json)  -   [RSS to CSV](https://rss.app/tools/rss-to-csv)  [Resources](https://rss.app/rss-feed)  -   [Pricing](https://rss.app/pricing)  -   [Discover](https://rss.app/discover)  -   [RSS Viewer](https://rssviewer.app/)  -   [RSS Finder](https://rssfinder.app/)  -   [RSS Validator](https://rssvalidator.app/)  -   [Chrome Extension](https://chrome.google.com/webstore/detail/rss-feed-url-finder/apfhghblgifegckccakakdlbjcdnbjmb)  -   [Widgets Showcase](https://rss.app/showcase)  -   [Affiliate Program](https://rss.app/affiliates)  -   [API Documentation](https://rss.app/docs/api)  -   [Changelog](https://help.rss.app/en/articles/10012270-changelog)  -   [Help Center](https://help.rss.app/)  [Bots & Alerts](https://rss.app/bots)  -   [YouTube Telegram Bot](https://rss.app/bots/youtube-telegram-bot)  -   [Google News Telegram Bot](https://rss.app/bots/google-telegram-bot)  -   [RSS Feed Telegram Bot](https://rss.app/bots/rssfeeds-telegram-bot)  -   [RSS Feed Discord Bot](https://rss.app/bots/rssfeeds-discord-bot)  -   [X / Twitter Discord Bot](https://rss.app/bots/twitter-discord-bot)  -   [YouTube Discord Bot](https://rss.app/bots/youtube-discord-bot)  -   [X / Twitter Slack Bot](https://rss.app/bots/twitter-slack-bot)  -   [Google News Slack Bot](https://rss.app/bots/google-slack-bot)  -   [Google News Discord Bot](https://rss.app/bots/google-discord-bot)  -   [All Bots](https://rss.app/bots)  [Integrations](https://rss.app/website-widgets-integrations)  -   [Mailchimp](https://rss.app/website-widgets-integrations/mailchimp-news-feeds-widget)  -   [Zapier](https://rss.app/website-widgets-integrations/zapier-news-feeds-widget)  -   [Slack](https://rss.app/website-widgets-integrations/slack-news-feeds-widget)  -   [Joomla](https://rss.app/website-widgets-integrations/joomla-news-feeds-widget)  -   [IFTTT](https://rss.app/website-widgets-integrations/ifttt-news-feeds-widget)  -   [All Integrations](https://rss.app/website-widgets-integrations)  [Blog](https://rss.app/blog)  -   [How to Add an Instagram Carousel to Your Website with RSS](https://rss.app/blog/how-to-add-an-instagram-carousel-to-your-website-with-rss-IkcGMU)  -   [How to Get RSS Feeds From Websites](https://rss.app/blog/how-to-get-rss-feeds-from-websites-AvlNeH)  -   [The Best News Aggregators in 2023](https://rss.app/blog/the-best-news-aggregators-in-2023-uCdjuf)  -   [RSS to Email: Automatically Send New Content to Your Email](https://rss.app/blog/rss-to-email-automatically-send-new-content-to-your-email-NnDtGb)  -   [How to Filter and Modify RSS Feeds](https://rss.app/blog/how-to-filter-and-modify-rss-feeds-pCMrvq)  -   [Add an Instagram Bot to Your Telegram Channel, Group, or Topic](https://rss.app/blog/add-an-instagram-bot-to-your-telegram-channel-group-or-topic-0umqYY)  -   [How to Add an Instagram Bot to Discord](https://rss.app/blog/how-to-add-an-instagram-bot-to-discord-226uiA)  -   [How to Create an RSS Feed From CNN (In Seconds)](https://rss.app/blog/how-to-create-an-rss-feed-from-cnn-in-seconds-yk9Div)  -   [How to Find and Use a Native RSS Feed from Any Website](https://rss.app/blog/how-to-find-and-use-a-native-rss-feed-from-any-website-QWfulB)  -   [How to Build a Custom RSS Feed With RSS.app Collections](https://rss.app/blog/how-to-build-a-custom-rss-feed-with-rss-app-collections-m5UXqv)  -   [How to Create a Custom RSS Feed for LinkedIn Jobs](https://rss.app/blog/how-to-create-a-custom-rss-feed-for-linkedin-jobs-DyLYzy)  -   [How to Turn Google News into an RSS Feed](https://rss.app/blog/how-to-turn-google-news-into-an-rss-feed-10I4vh)  -   [New Feature: Republish Curated Content with Your Own Domain](https://rss.app/blog/new-feature-republish-curated-content-with-your-own-domain-yW50KG)  -   [Track Social Media in One Place Using RSS](https://rss.app/blog/track-social-media-in-one-place-using-rss-Z3dSAe)  -   [All Blog Posts](https://rss.app/blog)

---

## 8. AI

## TL;DR

The **[RSSHub Integration Ecosystem](https://docs.rsshub.app/ecosystem#integration)** is the perfect blueprint for your project as it provides the existing bridges to connect data to various platforms. You can replicate RSS.app’s entire feature set for free by combining **[RSSHub](https://www.google.com/search?q=https://rsshub.app/)** for data, **[RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge)** for scraping, and custom **[HTML/JS templates](https://www.google.com/search?q=https://github.com/sdepold/feed-to-html)** for the widgets.

---

### **Project Blueprint: Open-Source RSS.app Alternative**

#### **1. Data Layer (The Feeds)**

To replace the paid "Feed Generators," use these open-source engines:

- **Social & Big Tech:** **[RSSHub](https://www.google.com/search?q=https://rsshub.app/)** covers Instagram, TikTok, Threads, X (Twitter), Reddit, YouTube, Telegram, and Bluesky.
- **Classifieds & E-commerce:** **[RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge)** has specific "bridges" for Craigslist and eBay.
- **General Webpages:** Use **[PolitePaul](https://politepaul.com/)** or a self-hosted **[Huginn](https://github.com/huginn/huginn)** instance to create feeds from sites without native support.
- **News:** **[Google News](https://news.google.com/rss)** has a native RSS format you can use directly for free.

#### **2. Visual Layer (The Widgets)**

To replace "News Walls" and "Carousels" without paying for "Views":

- **The Engine:** Use **[RSS2JSON](https://rss2json.com/)** (free tier) or a custom fetch script to turn your RSSHub links into usable data.
- **The UI:** Build a single responsive HTML/CSS template for each style:

- **News Wall:** Use **[CSS Grid/Masonry](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)**.
- **Carousel:** Use **[Swiper.js](https://swiperjs.com/)** or **[Slick](https://kenwheeler.github.io/slick/)**.
- **Ticker:** Use a simple CSS animation with `white-space: nowrap`.
- **The Hosting:** Deploy these templates to **[GitHub Pages](https://pages.github.com/)**. Users can then embed them via `<iframe src="your-url.com/wall?feed=URL">`.

#### **3. Tooling & Automation**

- **RSS to Email:** Use **[Follow.it](https://follow.it/)** (free tier) or a **[GitHub Action](https://github.com/features/actions)** that triggers an email via **[SendGrid](https://sendgrid.com/)**.
- **RSS to JSON/CSV:** RSSHub already supports `.json` and `.csv` extensions natively (e.g., `rsshub.app/route.json`).
- **Filtering/Merging:** Use **[RSS-Parser](https://github.com/rbren/rss-parser)** or **[Feed-Mixer](https://www.google.com/search?q=https://github.com/mbaltrusaitis/feed-mixer)**.

#### **4. Bots & Alerts**

- **Discord/Slack/Telegram:** Use **[Apprise](https://github.com/caronc/apprise)**. It is a universal notification library that can send RSS updates to 60+ services for free.
- **Zapier/IFTTT Alternative:** **[n8n](https://n8n.io/)** (self-hostable) or **[Pipedream](https://pipedream.com/)** (generous free tier).

---

### **Implementation Guide**

| | **RSS.app Feature** | | **Free Alternative Tool** | | **Implementation Strategy** |
| :--- | :--- | :--- |
| | **All Social Feeds** | | **[RSSHub](https://www.google.com/search?q=https://rsshub.app/)** | | Host your own instance to avoid rate limits. |
| | **Visual Widgets** | | **[Custom HTML Templates](https://www.google.com/search?q=https://github.com/sdepold/feed-to-html)** | | Host on GitHub Pages; use URL params to pass the feed. |
| | **RSS Builder** | | **[RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge)** | | Use the "CSS Selector" bridge to target site elements. |
| | **Telegram/Discord Bots** | | **[MonitoRSS](https://monitorss.xyz/)** | | The most robust free open-source RSS bot for Discord. |
| | **Newsletter to RSS** | | **[Kill the Newsletter!](https://www.kill-the-newsletter.com/)** | | Converts any email newsletter into an RSS feed. |
| | **Feed Translation** | | **[Google Translate API](https://cloud.google.com/translate)** | | Use a small script to pass feed descriptions through the API. |

---

### **Why the RSSHub Integration Link is Helpful**

The **[RSSHub Integration page](https://docs.rsshub.app/ecosystem#integration)** confirms that you don't need to build everything from scratch. It lists:

1. **Browser Extensions:** You can use their existing logic to find feeds on pages.
2. **Serverless Support:** You can see how they handle deployment on Vercel/Netlify.
3. **Frameworks:** It shows how to integrate feeds into Hugo, Hexo, and Gatsby, which covers your "Shopify/WordPress/Wix" integration goals.

Would you like a sample "News Wall" HTML/CSS code block to start your public widget library?

---

## 9. User

please make me a documentation for this project, using the site map of rss.app as your guide for what to document for widget.eliana.lol/rss

---

## 10. AI

## TL;DR

This documentation outlines the architecture for **widget.eliana.lol**, a free, open-source alternative to RSS.app. It replicates the premium sitemap by utilizing **[RSSHub](https://www.google.com/search?q=https://rsshub.app/)** for data, **[GitHub Pages](https://pages.github.com/)** for hosting, and **[Apprise](https://github.com/caronc/apprise)** for notifications.

---

## **Project Overview: widget.eliana.lol**

A decentralized, zero-cost suite of RSS tools designed to replace paid "feed-as-a-service" platforms.

### **Core Architecture**

- **Data Engine:** Self-hosted **[RSSHub](https://www.google.com/search?q=https://docs.rsshub.app/)** instance.
- **Widget Rendering:** Client-side JavaScript using **[RSS2JSON](https://rss2json.com/)** and **[Tailwind CSS](https://tailwindcss.com/)**.
- **Hosting:** Static deployment via **[GitHub Pages](https://pages.github.com/)**.
- **Bots/Alerts:** Serverless functions triggered by **[GitHub Actions](https://github.com/features/actions)**.

---

## **1. RSS Feed Generators (The Data Layer)**

Replicating RSS.app's primary feed creation tools using open-source routes.

- **[Social Media Feeds](https://www.google.com/search?q=https://widget.eliana.lol/rss/social)**

- **Instagram/TikTok/Threads:** Powered by **[RSSHub Social Routes](https://www.google.com/search?q=https://docs.rsshub.app/routes/social-media)**.
- **X (Twitter):** Powered by **[RSSHub Twitter Route](https://www.google.com/search?q=https://docs.rsshub.app/routes/social-media%23twitter)** or **[Nitter](https://nitter.net/)** instances.
- **Bluesky:** Powered by **[RSSHub Bluesky Route](https://www.google.com/search?q=https://docs.rsshub.app/routes/social-media%23bluesky)**.
- **[E-Commerce & Classifieds](https://www.google.com/search?q=https://widget.eliana.lol/rss/shopping)**

- **eBay/Craigslist:** Implementation via **[RSS-Bridge Shopping Bridges](https://github.com/RSS-Bridge/rss-bridge)**.
- **[Webpage to RSS](https://www.google.com/search?q=https://widget.eliana.lol/rss/webpage-to-rss)**

- **HTML Scraping:** Use **[PolitePaul](https://politepaul.com/)** for no-code or **[Puppeteer](https://pptr.dev/)** scripts for complex dynamic sites.

---

## **2. Visual Widgets (The UI Layer)**

Embeddable components that render RSS data into modern web elements.

- **[News Wall / Grid](https://www.google.com/search?q=https://widget.eliana.lol/widgets/wall)**

- **Design:** A masonry layout using **[Masonry.js](https://masonry.desandro.com/)**.
- **Usage:** `<iframe src="https://widget.eliana.lol/wall?feed=URL"></iframe>`
- **[Carousel / Slider](https://www.google.com/search?q=https://widget.eliana.lol/widgets/carousel)**

- **Design:** Touch-responsive slider using **[Swiper.js](https://swiperjs.com/)**.
- **Best for:** Instagram and YouTube thumbnails.
- **[News Ticker](https://www.google.com/search?q=https://widget.eliana.lol/widgets/ticker)**

- **Design:** Lightweight CSS-only horizontal scroll.
- **Best for:** Stock prices, breaking news, or Mastodon timelines.
- **[List / Compact](https://www.google.com/search?q=https://widget.eliana.lol/widgets/list)**

- **Design:** Minimalist text-heavy layout for sidebars (e.g., WordPress/Wix).

---

## **3. Tools & Features (The Logic Layer)**

Advanced manipulation of feed data.

- **[RSS Builder & Aggregator](https://www.google.com/search?q=https://widget.eliana.lol/tools/builder)**

- **Function:** Combine multiple RSSHub routes into a single "Bundle" using **[RSS-Mixer](https://www.google.com/search?q=https://github.com/mbaltrusaitis/feed-mixer)** logic.
- **[RSS to JSON/CSV](https://www.google.com/search?q=https://widget.eliana.lol/tools/export)**

- **Function:** Native RSSHub output extensions (`.json`, `.csv`).
- **[Feed Translation](https://www.google.com/search?q=https://widget.eliana.lol/tools/translate)**

- **Function:** Integration with **[LibreTranslate](https://libretranslate.com/)** (Open Source) to localize feed content.
- **[Newsletter to RSS](https://www.google.com/search?q=https://widget.eliana.lol/tools/newsletter)**

- **Function:** Powered by **[Kill the Newsletter!](https://www.kill-the-newsletter.com/)**.

---

## **4. Bots & Alerts (The Notification Layer)**

Automated pushes to third-party platforms.

- **[Discord / Slack Bot](https://www.google.com/search?q=https://widget.eliana.lol/bots/chat)**

- **Engine:** **[MonitoRSS](https://monitorss.xyz/)** for self-hosted Discord management.
- **[Telegram Bot](https://www.google.com/search?q=https://widget.eliana.lol/bots/telegram)**

- **Engine:** **[RSSHub Telegram Bot](https://www.google.com/search?q=https://github.com/DIYgod/RSSHub-Reader)** or custom script using **[Telegraf.js](https://telegraf.js.org/)**.
- **[Email Alerts](https://www.google.com/search?q=https://widget.eliana.lol/bots/email)**

- **Engine:** **[Follow.it](https://follow.it/)** or GitHub Actions + **[Nodemailer](https://nodemailer.com/)**.

---

## **5. Integration Guide**

Documentation for external platform support.

| | **Platform** | | **Method** |
| :--- | :--- |
| | **WordPress/Wix/Shopify** | | Use the `Custom HTML` block with an `<iframe>` pointing to `widget.eliana.lol`. |
| | **Zapier/IFTTT** | | Point "Webhooks" to your RSSHub JSON endpoints. |
| | **Custom Apps** | | Access the raw data via `widget.eliana.lol/api/v1`. |

Export to Sheets
---

## **6. Public Resources**

- **[Discover](https://www.google.com/search?q=https://widget.eliana.lol/discover):** A directory of popular public feeds.
- **[Validator](https://www.google.com/search?q=https://widget.eliana.lol/validate):** Integration with the **[W3C Feed Validator](https://validator.w3.org/feed/)**.
- **[Chrome Extension](https://www.google.com/search?q=https://widget.eliana.lol/extension):** Fork of **[RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar)** for one-click feed discovery.
