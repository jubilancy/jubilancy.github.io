---
title: New Post - DEV Community
source: https://dev.to/new#liquid
created: 2026-02-06
description:
tags:
  - new-clippings
---
## 🌊 Liquid Tags

### Supported URL Embeds

- DEV Community Comment
- DEV Community Link
- DEV Community Link
- DEV Community Listing
- DEV Community Organization
- DEV Community Podcast Episode
- DEV Community Tag
- DEV Community User Profile

**Embedding codes for online content platforms allow interactive previews like videos, code editors, and demos on websites.** Most use iframe or script tags generated from "Share" or "Embed" buttons. Paste the code into your HTML where supported (e.g., Hugo shortcodes, Astro components).

## Code Editors & Playgrounds

|Platform|Embed Method|
|---|---|
|Asciinema|Use `<script src="https://asciinema.org/a/ID.js" id="asciicast-ID" async></script>` from the share page.[asciinema+1](https://docs.asciinema.org/manual/server/embedding/)|
|CodePen|Click "Embed" in editor footer for iframe code; customize height/tabs.[[stackoverflow](https://stackoverflow.com/questions/37436210/how-do-i-embed-a-codepen-in-my-web-page)]​|
|CodeSandbox|Share > Embed tab; copy iframe with default file preview.[[howtoegghead](https://howtoegghead.com/instructor/codesandbox-code-embed/)]​|
|DotNetFiddle|Share button > copy iframe widget code.[[dotnetfiddle](https://dotnetfiddle.net/GettingStarted/Embedding)]​|
|GitHub Gist|Use `<script src="https://gist.github.com/user/ID.js"></script>` or oEmbed.[[astro-embed.netlify](https://astro-embed.netlify.app/components/gist/)]​|
|Glitch|Embed from project remix/share for live app preview.[[youtube](https://www.youtube.com/watch?v=2otyUTyudtw)]​|
|JSFiddle|Action menu > Embed; iframe or script with tabs/theme options.[[docs.jsfiddle](https://docs.jsfiddle.net/embedding-fiddles)]​|
|JSitor|Paste URL into oEmbed tools or iframe via Embedly/Iframely.[embed+1](https://embed.ly/provider/jsitor)|
|Kotlin (Playground)|`<script src="https://play.kotlinlang.org/embed/ID?theme=dracula"></script>` or npm package.[[github](https://github.com/JetBrains/kotlin-playground)]​|
|Replit|Embedly/oEmbed support; copy iframe from share.[[embed](https://embed.ly/provider/replit)]​|
|StackBlitz|Share > Embed tab; customize and copy iframe URL.[[developer.stackblitz](https://developer.stackblitz.com/guides/integration/embedding)]​|

## Social & Media

|Platform|Embed Method|
|---|---|
|Instagram|Post > ... > Embed > copy iframe code.[[behold](https://behold.so/guides/how-to-embed-an-instagram-feed-on-your-website/)]​|
|Reddit|Share > Embed at publish.reddit.com or oEmbed endpoint.[[support.reddithelp](https://support.reddithelp.com/hc/en-us/articles/360043033532-How-do-I-embed-a-Reddit-post-or-comment-in-an-article-or-other-publication)]​|
|SoundCloud|Waveform > Share > Embed tab > copy iframe.[soundcloud+1](https://help.soundcloud.com/hc/en-us/articles/115003568008-Embedding-a-track-or-playlist)|
|Spotify|... > Share > Copy Embed Code for iframe player.[[spotembed](https://www.spotembed.com/)]​|
|Twitch|`<script src="https://embed.twitch.tv/embed/v1.js"></script>` then `new Twitch.Embed("ID", {channel: "name"})`.[[dev.twitch](https://dev.twitch.tv/docs/embed/everything/)]​|
|Twitter (X)|Post > ... > Embed Tweet for single; iframe.[[twitembed](https://www.twitembed.com/)]​|
|Twitter Timeline|publish.twitter.com > enter profile/list URL > customize iframe.[[help.x](https://help.x.com/en/using-x/embed-x-feed)]​|

## Presentations & Docs

|Platform|Embed Method|
|---|---|
|GitHub Repo/Issue|Custom JS like github-embed lib or plugins for previews.[github+1](https://github.com/finom/github-embed)|
|Medium|Embed button > paste URL (oEmbed auto-handles).[[writingcooperative](https://writingcooperative.com/making-medium-visual-all-the-things-you-can-embed-in-your-stories-2d9682daef05)]​|
|Slideshare|Copy URL > Embed block or iframe.[[wordpress](https://wordpress.org/documentation/article/slideshare-embed/)]​|
|Speaker Deck|Presentation > Share > Copy link URL to embed block.[[elegantthemes](https://www.elegantthemes.com/blog/wordpress/speaker-deck-embed-block)]​|

## Video & Misc

|Platform|Embed Method|
|---|---|
|Loom|Share > Embed > copy iframe (fixed size).[[docs.document360](https://docs.document360.com/docs/how-to-embed-loom-video)]​|
|Stack Exchange/Overflow|Native oEmbed; paste URL for question previews.[[stackoverflow](https://stackoverflow.com/questions/tagged/embed?tab=Newest)]​|
|Vimeo|Video > Share > Embed > copy iframe.[[digital.uoregon](https://digital.uoregon.edu/drupal/videos/vimeo)]​|
|YouTube|Share > Embed > copy iframe; customize size.[[youtube](https://www.youtube.com/watch?v=QZc7cZR0oGs)]​|
|Wikipedia|No native iframe; link or summarize (use API for extracts).[[modal](https://modal.com/blog/embedding-wikipedia)]​|

**Notes:** Next Tech (possibly AR/VR) and Stackery lack standard embeds—use iframes if available. Test in your platform (e.g., Hugo `{{< iframe >}}`). For Hugo/Astro sites, wrap iframes responsively with CSS.[astro-embed.netlify+1](https://astro-embed.netlify.app/components/gist/)
  
Common issues when embedding these code demos  
How to make embeds responsive across devices  
Best practices for embedding multiple platforms in one page  
Alternatives to iframes for faster embeds  
How to customize embed appearance for JSFiddle and CodePen

---

### Supported Non-URL Embeds

#### Call To Action (CTA)

{% cta link %} description {% endcta %}

Provide a *link* that a user will be redirected to. The *description* will contain the label/description for the call to action.

#### Details

You can embed a `details` HTML element by using details, spoiler, or collapsible. The *summary* will be what the dropdown title displays. The *content* will be the text hidden behind the dropdown. This is great for when you want to hide text (i.e. answers to questions) behind a user action/intent (i.e. a click).

{% details summary %} content {% enddetails %}

{% spoiler summary %} content {% endspoiler %}

{% collapsible summary %} content {% endcollapsible %}

#### KaTex

Place your mathematical expression within a KaTeX liquid block, as follows:

{% katex %}  
 c = \\pm\\sqrt{a^2 + b^2}  
{% endkatex %}  

To render KaTeX inline add the "inline" option:

{% katex inline %}  
 c = \\pm\\sqrt{a^2 + b^2}  
{% endkatex %}  

#### RunKit

Put executable code within a runkit liquid block, as follows:

{% runkit  
// hidden setup JavaScript code goes in this preamble area  
const hiddenVar = 42  
%}  
// visible, reader-editable JavaScript code goes here  
console.log(hiddenVar)  
{% endrunkit %}

### Supported URL Embeds

- DEV Community Comment
- DEV Community Link
- DEV Community Link
- DEV Community Listing
- DEV Community Organization
- DEV Community Podcast Episode
- DEV Community Tag
- DEV Community User Profile
- asciinema
- Bolt.new
- CodePen
- CodeSandbox
- DotNetFiddle
- GitHub Gist, Issue or Repository
- Glitch
- Hugging Face Space
- Instagram
- JSFiddle
- JSitor
- Loom
- Lovable
- Kotlin
- Medium
- Next Tech
- Reddit
- Replit
- Slideshare
- Speaker Deck
- SoundCloud
- Spotify
- StackBlitz
- Stackery
- Stack Exchange or Stack Overflow
- Twitch
- Twitter
- Twitter timeline
- Wikipedia
- Vimeo
- Warp Terminal
- YouTube

### Supported Non-URL Embeds

#### Agent Session

Embed a curated coding agent session (from Claude Code, Codex, Gemini CLI, Aider, etc.):

{% agent_session ID %}

Embed a named slice (created in the curation tool) to narrate different parts throughout your post:

{% agent_session ID planning %}

Or embed a specific range of messages by index:

{% agent_session ID 0..10 %}

[Upload and curate a session](https://dev.to/agent_sessions/new) to get the ID.

#### Call To Action (CTA)

{% cta link %} description {% endcta %}

Provide a *link* that a user will be redirected to. The *description* will contain the label/description for the call to action.

#### Details

You can embed a `details` HTML element by using details, spoiler, or collapsible. The *summary* will be what the dropdown title displays. The *content* will be the text hidden behind the dropdown. This is great for when you want to hide text (i.e. answers to questions) behind a user action/intent (i.e. a click).

{% details summary %} content {% enddetails %}

{% spoiler summary %} content {% endspoiler %}

{% collapsible summary %} content {% endcollapsible %}

#### KaTex

Place your mathematical expression within a KaTeX liquid block, as follows:

{% katex %}\
 c = \pm\sqrt{a^2 + b^2}\
{% endkatex %}

To render KaTeX inline add the "inline" option:

{% katex inline %}\
 c = \pm\sqrt{a^2 + b^2}\
{% endkatex %}

#### Feed

Embed an article feed by organization, tag, or multiple tags:

{% feed org=org-slug %}
{% feed tag=ruby %}
{% feed tags=ruby,javascript limit=10 sort=reactions %}

Options: `limit` (1-30), `sort` (recent/reactions/comments/score), `min_reactions`, `min_comments`, `since` (e.g. 30d or 2025-01-01).

#### Layout (Row & Col)

Create responsive grid layouts:

{% row %}
  {% col %}Column 1{% endcol %}
  {% col span=2 %}Wide column{% endcol %}
{% endrow %}

`span` sets column width (1-4, default 1).

#### Features

Display a grid of feature cards:

{% features %}
  {% feature title="Fast" icon="rocket" %}Optimized for speed.{% endfeature %}
  {% feature title="Secure" %}Built with security in mind.{% endfeature %}
{% endfeatures %}

#### Quote

Display a testimonial or quote:

{% quote author="Jane Doe" role="CTO" rating=5 %}Great product!{% endquote %}

Options: `author` (required), `role`, `image`, `rating` (1-5), `source`, `link`.

#### Offer

Create a call-to-action box with a button:

{% offer link="https://example.com" button="Sign Up" %}Join us today!{% endoffer %}

`link` is optional (button is hidden without it). `button` defaults to "Learn More".

#### Slides

Create an image/video carousel or gallery:

{% slides mode="carousel" %}
  {% slide image="https://example.com/photo.jpg" alt="Description" %}
  {% slide video="https://youtube.com/watch?v=abc123" %}
{% endslides %}

Each slide needs at least one of: `image`, `video`, or `link`. Optional: `title`, `alt`.

