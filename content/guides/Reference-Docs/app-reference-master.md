# App Reference — Master File

> Organized reference for all apps, tools, and services. Add new entries at the bottom under a new `---` divider block.

---

## Table of Contents

- [Cursor CLI](#cursor-cli)
- [Farcaster](#farcaster)
- [Kaggle](#kaggle)
- [Eleventy CMS (Static CMS + Netlify)](#eleventy-cms-static-cms--netlify)
- [Geocoding Tools](#geocoding-tools)
- [OpenStreetMap](#openstreetmap)
- [Matrix / Element](#matrix--element)
- [XMPP](#xmpp)
- [SingleFile (Browser Extension)](#singlefile-browser-extension)
- [Soundcharts](#soundcharts)
- [Wisp.place](#wispplace)
- [Zo Computer](#zo-computer)
- [10er](#10er)
- [Nostr](#nostr)
- [Cosmos](#cosmos)
- [Travel Tracker Apps (iOS)](#travel-tracker-apps-ios)
- [Google Maps — Saved Places](#google-maps--saved-places)
- [GPS Coordinates Log](#gps-coordinates-log)

---

## Cursor CLI

**Docs:** https://cursor.com/docs/cli/overview

### Topics

| Topic | Doc Link |
|---|---|
| Get started with Cursor CLI (installation, agents, MCP integration) | https://cursor.com/docs/cli/overview |
| Headless CLI (scripts and automation workflows) | https://cursor.com/docs/cli/headless |
| Shell Mode (run shell commands from agents with safety checks and output display) | https://cursor.com/docs/cli/shell-mode |
| GitHub Actions (integrate Cursor CLI with CI/CD workflows) | https://cursor.com/docs/cli/github-actions |

---

## Farcaster

**URL:** https://farcaster.xyz/~/developers  
**Clipped from:** https://app.kollected.io/home (2026-03-21)

### Developer Tools

| Tool | URL |
|---|---|
| Preview Tool (preview a URL as a Mini App) | https://farcaster.xyz/~/developers |
| Embed Tool (see how your Mini App will look) | https://farcaster.xyz/~/developers |
| Manifests (sign, manage, publish Mini Apps) | https://farcaster.xyz/~/developers |
| Mini App Manifest Tools | https://farcaster.xyz/~/developers/mini-apps/manifest |
| Mini App Embed Tools | https://farcaster.xyz/~/developers/mini-apps/embed |
| API Keys | https://farcaster.xyz/~/developers/api-keys |
| Refresh feed embeds / cards | https://farcaster.xyz/~/developers/embeds |

### Farcaster Docs

| Topic | URL |
|---|---|
| API | https://docs.farcaster.xyz/reference/farcaster/api |
| Signer Requests | https://docs.farcaster.xyz/reference/farcaster/signer-requests |
| Intent URLs | https://docs.farcaster.xyz/reference/farcaster/intent-urls |
| Direct Casts | https://docs.farcaster.xyz/reference/farcaster/direct-casts |
| Mini Apps | https://miniapps.farcaster.xyz/ |
| SIWF | https://docs.farcaster.xyz/developers/siwf/ |
| Protocol | https://docs.farcaster.xyz |

---

## Kaggle

**URL:** https://www.kaggle.com

### Notebook Version Types

- **Save & Run All (Commit):** Runs a fresh copy of your notebook and saves the output
- **Save & Run All with an Accelerator:** Same but with accelerator
- **Run without an accelerator for this session**

### Import Options

- Import from external URL (e.g. `https://www.an-example.com/ml/notebook.ipynb`)
- Drag & drop file upload (`.ipynb`, `.py`)
- Via Kaggle CLI:

```bash
# <FOLDER_PATH> should contain the notebook file (.ipynb, .Rmd, .py)
# and the kernel-metadata.json file.
kaggle kernels push -p <FOLDER_PATH>
```

**API setup:** https://www.kaggle.com/docs/api#authentication  
**Notebooks/scripts docs:** https://www.kaggle.com/docs/notebooks#scripts

---

## Eleventy CMS (Static CMS + Netlify)

**Password:**
```
h5e~#730Q9%'cKQ]MBcO\:L
```

| Resource | URL |
|---|---|
| Static CMS customization docs | https://staticcms.org/docs/docs/customizing-static-cms/ |
| Netlify project overview | https://app.netlify.com/projects/effervescent-smakager-457fd7/overview |

---

## Geocoding Tools

### Batch Geocoding Services

| Tool | Notes |
|---|---|
| **Smarty** | Bulk address validation; upload lists (US or international) to get lat/lng and precision levels. Free: up to 10 addresses at once. Paid: rooftop accuracy and higher. |
| **BatchGeo** | Converts addresses to mappable coordinates using Google Maps Geocoding API. Paste lists to create shareable maps quickly. |
| **Geoapify** | Free online tool; geocode up to 500 rows from CSV, Excel, or text files. Returns coordinates, address components, and a confidence score. [Tool link](https://www.geoapify.com/tools/geocoding-online/) |
| **Geocodio** | Batch spreadsheet geocoding: 4-step process (input, preview, append, finalize). |
| **U.S. Census Geocoder** | Free; U.S. addresses only; process up to 10,000 addresses at a time. |
| **ArcGIS Enterprise/Pro** | Large-scale, high-performance geocoding. Tools: "Geocode Table" and "Geocode File." Customizable timeouts for large jobs. [Best practices](https://enterprise.arcgis.com/en/portal/11.5/administer/windows/best-practices-for-portal-batch-geocoding.htm) |
| **Maptitude** | Desktop-based, low-cost option for large datasets (e.g. 200k+ addresses). No per-request fees. |

### Key Considerations

- **Input Format:** Standardized spreadsheets (CSV, XLSX) with clear columns for street, city, state, and ZIP code are recommended.
- **Accuracy:** Options range from Zip 9 precision (block level) to rooftop accuracy.
- **Limits:** Free tools often limit rows (e.g. 500–10,000).
- **Data Preparation:** Normalizing addresses and removing duplicates can improve results.

---

## OpenStreetMap

**URL:** https://www.openstreetmap.org  
**Account profile:** https://www.openstreetmap.org/user/fhejkcfgbk  
**uMap profile:** https://umap.osm.ch/en/user/tezeta/

> OpenStreetMap is a free and editable map of the world, created by people and available under an open license. Maps things that are *real and current* — not ratings, historical/hypothetical features, or data from copyrighted sources.

### Key Links

| Action | URL |
|---|---|
| Edit with iD (in-browser) | https://www.openstreetmap.org/edit?editor=id |
| Edit with Remote Control (JOSM, Potlatch, Merkaartor) | https://www.openstreetmap.org/edit?editor=remote |
| History | https://www.openstreetmap.org/history |
| Export | https://www.openstreetmap.org/export |
| GPS Traces | https://www.openstreetmap.org/traces |
| User Diaries | https://www.openstreetmap.org/diary |
| Communities | https://www.openstreetmap.org/communities |
| Copyright | https://www.openstreetmap.org/copyright |
| Help | https://www.openstreetmap.org/help |
| About | https://www.openstreetmap.org/about |
| My Dashboard | https://www.openstreetmap.org/dashboard |
| My Messages | https://www.openstreetmap.org/messages/inbox |
| My Profile | https://www.openstreetmap.org/user/fhejkcfgbk |
| My Account | https://www.openstreetmap.org/account |
| My Preferences | https://www.openstreetmap.org/preferences/basic |
| Imports guidelines | https://wiki.openstreetmap.org/wiki/Import/Guidelines |
| Automated Edits code of conduct | https://wiki.openstreetmap.org/wiki/Automated_Edits_code_of_conduct |
| Welcome Mat (for organizations) | https://welcome.openstreetmap.org/ |

### Basic Mapping Terms

- **Editor:** A program or website used to edit the map.
- **Node:** A point on the map, like a single restaurant or a tree.
- **Way:** A line or area, like a road, stream, lake, or building.
- **Tag:** A bit of data about a node or way, like a restaurant's name or a road's speed limit.

### Adding Notes (without an account)

Click the note icon on the map to add a marker, drag it to position, add a message, and save — other mappers will investigate.

---

## Matrix / Element

**Matrix handle:** `@ely:unredacted.org`  
**Space:** https://matrix.to/#/#space:unredacted.org  
**Unredacted.org:** https://unredacted.org  

### Integration Manager

- Integration manager: **scalar.vector.im**
- Can manage bots, widgets, and sticker packs
- Receives configuration data; can modify widgets, send room invites, and set power levels on your behalf
- Setting: Enable the integration manager

### Encryption / Message Search

- Element can't securely cache encrypted messages locally while running in a web browser.
- Use [Element Desktop](https://element.io/download) for encrypted messages to appear in search results.

### Privacy — Identity Server

- Currently **not** using an identity server.
- To discover and be discoverable by existing contacts, add one under Privacy settings.

### Advanced

- Ignored users: none currently.

### Other

- Naz University livestream: https://www2.naz.edu/school-music/concerts-events/livestream

---

## XMPP

**Address:** `el@xmpp.xyz`  
**XMPP link:** https://xmpp.link/#el@xmpp.xyz  
**Protocol URI:** `xmpp://el@xmpp.xyz`  
**Icon:** https://simpleicons.org/icons/xmpp.svg

### Related Notes (Obsidian links)

- `[[web-clips/element.io integrations list.md]]`
- `[[web-clips/How To Use OTR.md]]`
- `[[all/How To Connect To XMPP.is With Pidgin.md]]`
- `[[all/matrix stuff!.md]]`
- `[[rss links]]`
- `[[eliana/notes to sort/fediverse - Unknown.md]]`
- `[[eliana/rss/~rss 1.md]]`

### Related Daily Notes

- `[[hiiiiii/~daily/⚛︎ Friday, Mar 27th 2026 ⚛︎.md]]`
- `[[hiiiiii/~daily/⚛︎ Tuesday, Mar 24th 2026 ⚛︎.md]]`
- `[[hiiiiii/~daily/⚛︎ Tuesday, Feb 17th 2026 ⚛︎.md]]`
- `[[hiiiiii/~daily/⚛︎ Sunday, Feb 15th 2026 ⚛︎.md]]`
- `[[hiiiiii/~daily/2026-01-25.md]]`

---

## SingleFile (Browser Extension)

**Help page:** `chrome-extension://mpiodijhokgodhhofbcjdecpffjipkle/src/ui/pages/help.html`

### File Naming

```
archives/{page-title} {date-iso}.{filename-extension}
```

### Bookmarks Options

- **Save the page of a newly created bookmark** — saves pages added to bookmarks. If the page isn't already in a tab, SingleFile will open a temporary tab to save it. *Recommended: uncheck this option.*
- **Link the new bookmark to the saved page**
- Ignored folders / Allowed folders settings available

### Auto-Save Options

- Auto-save after page load or on page unload
- Auto-save after page load
- Auto-save on page unload
- Auto-save on tab discard
- Auto-save on tab removal
- Auto-save waiting delay after page load (s)
- Auto-save periodically (period in seconds)
- Save the page with SingleFile Companion

### Misc. Options

- Add proof of existence
- Save pages in background
- Display stats in the console after processing

### Auto-Settings Rules

| URL | Profile |
|---|---|
| (default) | Default settings |
| (custom) | eliana |
| (custom) | markdown |
| (custom) | Disabled |

- Display all profiles
- Display 'Auto-save profile' column
- Synchronize options
- Import / Export / Reset

---

## Soundcharts

**URL:** https://soundcharts.com  
**Type:** Music analytics platform

### Overview

- Track artists and songs from a unified platform (socials, charts, playlists, airplay)
- Identify sources of growth by country and platform
- Benchmark artists in one click
- Review performance of 16M+ artists and 84M+ songs
- Global Radio Airplay Monitoring: 2,465 stations in 87 countries
- Real-time data from 23,738+ charts and 7.3M playlists
- Discover new songs/artists on radio and platform charts; set up notifications and reports

### Product Links

| Feature | URL |
|---|---|
| Data sources | https://soundcharts.com/en/datasources |
| Artist analytics | https://soundcharts.com/en/artist-analytics |
| Song analytics | https://soundcharts.com/en/song-analytics |
| Airplay | https://soundcharts.com/en/radio-airplay-monitoring |
| Charts | https://soundcharts.com/en/streaming-charts-monitoring |
| Socials | https://soundcharts.com/en/social-media-monitoring |
| Playlists | https://soundcharts.com/en/playlists-monitoring |
| API | https://soundcharts.com/en/api-data-for-music-industry |
| Audio features | https://soundcharts.com/en/audio-features-api |
| Pricing | https://soundcharts.com/en/pricing |
| What's new | https://soundcharts.com/en/changelogs |

### Use Cases

A&R research, Promoters, Publicists, Radio programmers, Artists, Publishers, Students  
→ https://soundcharts.com/en/ar-research-and-business-facing-music-discovery

### Streaming Platforms Covered

Spotify, Apple Music, Amazon Music, YouTube, Shazam, Deezer, SoundCloud, Tidal, QQ Music, JioSaavn/Gaana, Anghami, Melon, Boomplay

### Social Platforms Covered

Instagram, TikTok, X (Twitter), Facebook

### Free Tools

| Tool | URL |
|---|---|
| ISRC finder | https://soundcharts.com/en/isrc-finder |
| Distributor finder | https://soundcharts.com/en/distributor-finder |
| Genre finder | https://soundcharts.com/en/genre-finder |
| Label finder | https://soundcharts.com/en/label-finder |
| Key & BPM finder | https://soundcharts.com/en/audio-finder |
| Reverse ISRC lookup | https://soundcharts.com/en/reverse-isrc-finder |

### Rankings

| Ranking | URL |
|---|---|
| Artist rankings | https://soundcharts.com/en/artists/soundcharts-score |
| Song rankings | https://soundcharts.com/en/songs/spotify-streams |
| Radio station rankings | https://soundcharts.com/en/radio-stations/instagram-followers |
| Playlist rankings | https://soundcharts.com/en/playlists |
| Charts | https://soundcharts.com/en/charts |

---

## Wisp.place

**URL:** https://wisp.place/onboarding  
**Claimed domain:** `ely.wisp.place` ✓

### Specs

- Supported: HTML, CSS, JS, images, fonts, and more
- Limits: 100MB per file, 300MB total
- Upload your site or start with an empty one

---

## Zo Computer

**URLs:**
- https://etmr.zo.computer/
- https://etmr.zo.space/
- mailto:etmr@zo.computer

Chat with Zo in messaging apps, or email at `etmr@zo.computer`. Discord or Slack can be connected later in Settings.

---

## 10er

**Campaign URL base:** https://10er.com/creators/campaigns/el/

### Content Sources

| Source Type | Setup Link |
|---|---|
| Podcast RSS feed (auto-detect new episodes) | https://10er.com/creators/campaigns/el/creation_sources/new?creation_source%5Bsourceable_type%5D=PodcastSource |
| YouTube channel (track new videos) | https://10er.com/creators/campaigns/el/creation_sources/new?creation_source%5Bsourceable_type%5D=YouTubeSource |
| Blog RSS feed (monitor new posts) | https://10er.com/creators/campaigns/el/creation_sources/new?creation_source%5Bsourceable_type%5D=BlogSource |
| Calendar-based (regular monthly or weekly releases) | https://10er.com/creators/campaigns/el/creation_sources/new?creation_source%5Bsourceable_type%5D=CalendarSource |

---

## Nostr

**Profile:** https://nostr.com/npub1hj9uwgevzhm3v27jhjtfvkad3gdnat3x4l5theumwsq3hz6g9ztsyuha0u  
**Relay:** https://nostr.com/r/wss://nos.lol  
**NIP-01 spec:** https://github.com/nostr-protocol/nips/blob/master/01.md  
**njump:** https://github.com/fiatjaf/njump  
**to-markdown:** https://github.com/domchristie/to-markdown

### Event Links (nevent1qqsfv2e8...)

| Client | URL |
|---|---|
| coracle.social | https://coracle.social/nevent1qqsfv2e8spzgw8ea8gjsamken5y0u24rflx0m4hxz5yqkv0763c3rqspp4mhxue69uhkummn9ekx7mqzyz7gh3er9s2lw93t627fd9jm4k9pk04wy6h73wl8nd6qzxutfq5fw8gglcm |
| jumble.social | https://jumble.social/nevent1qqsfv2e8spzgw8ea8gjsamken5y0u24rflx0m4hxz5yqkv0763c3rqspp4mhxue69uhkummn9ekx7mqzyz7gh3er9s2lw93t627fd9jm4k9pk04wy6h73wl8nd6qzxutfq5fw8gglcm |
| lumilumi.app | https://lumilumi.app/nevent1qqsfv2e8spzgw8ea8gjsamken5y0u24rflx0m4hxz5yqkv0763c3rqspp4mhxue69uhkummn9ekx7mqzyz7gh3er9s2lw93t627fd9jm4k9pk04wy6h73wl8nd6qzxutfq5fw8gglcm |
| nostter.app | https://nostter.app/nevent1qqsfv2e8spzgw8ea8gjsamken5y0u24rflx0m4hxz5yqkv0763c3rqspp4mhxue69uhkummn9ekx7mqzyz7gh3er9s2lw93t627fd9jm4k9pk04wy6h73wl8nd6qzxutfq5fw8gglcm |
| nostrudel.ninja | https://nostrudel.ninja/l/nevent1qqsfv2e8spzgw8ea8gjsamken5y0u24rflx0m4hxz5yqkv0763c3rqspp4mhxue69uhkummn9ekx7mqzyz7gh3er9s2lw93t627fd9jm4k9pk04wy6h73wl8nd6qzxutfq5fw8gglcm |
| phoenix.social | https://phoenix.social/nevent1qqsfv2e8spzgw8ea8gjsamken5y0u24rflx0m4hxz5yqkv0763c3rqspp4mhxue69uhkummn9ekx7mqzyz7gh3er9s2lw93t627fd9jm4k9pk04wy6h73wl8nd6qzxutfq5fw8gglcm |
| primal.net | https://primal.net/e/nevent1qqsfv2e8spzgw8ea8gjsamken5y0u24rflx0m4hxz5yqkv0763c3rqspp4mhxue69uhkummn9ekx7mqzyz7gh3er9s2lw93t627fd9jm4k9pk04wy6h73wl8nd6qzxutfq5fw8gglcm |
| iris.to | https://iris.to/nevent1qqsfv2e8spzgw8ea8gjsamken5y0u24rflx0m4hxz5yqkv0763c3rqspp4mhxue69uhkummn9ekx7mqzyz7gh3er9s2lw93t627fd9jm4k9pk04wy6h73wl8nd6qzxutfq5fw8gglcm |

Raw nevent: `nostr:nevent1qqsfv2e8spzgw8ea8gjsamken5y0u24rflx0m4hxz5yqkv0763c3rqspp4mhxue69uhkummn9ekx7mqzyz7gh3er9s2lw93t627fd9jm4k9pk04wy6h73wl8nd6qzxutfq5fw8gglcm`

---

## Cosmos

**Import sources available:**

- Pinterest — Import your pins
- Are.na — Import your connections
- Tumblr — Import your blog

---

## Travel Tracker Apps (iOS)

| App | App Store Link |
|---|---|
| EveryPlace - Where I've Been | https://apps.apple.com/us/app/everyplace-where-ive-been/id1067276598 |
| VoyageX - Visited Countries | https://apps.apple.com/us/app/voyagex-visited-countries/id1096626087 |
| Travel Pins - Track Where Been | https://apps.apple.com/us/app/travel-pins-track-where-been/id1464618728 |
| Places Been - Travel Tracker Map | https://apps.apple.com/us/app/places-been-travel-tracker/id1480355919 |
| Balloon - Been Visited Map | https://apps.apple.com/us/app/balloon-been-visited-map/id1495178154 |
| Been Done - Travel Journal Map | https://apps.apple.com/us/app/been-done-travel-journal-map/id6444615703 |
| World Map - Visited Countries | https://apps.apple.com/us/app/world-map-visited-countries/id1551551412 |
| Pin365 - Your Travel Map | https://apps.apple.com/us/app/pin365-your-travel-map/id1234330249 |
| Countries Been | https://apps.apple.com/us/app/countries-been/id1165849344 |
| Skratch - Travel Map & eSIM | https://apps.apple.com/us/app/skratch-travel-map-esim/id1457438876 |
| Visited - Travel Tracker Map | https://apps.apple.com/us/app/visited-travel-tracker-map/id846983349 |

---

## Google Maps — Saved Places

| Place | Maps Link |
|---|---|
| Google DC - Massachusetts Ave | https://www.google.com/maps/place/Google+DC+-+Massachusetts+Ave/data=!4m2!3m1!1s0x88e7729f629ff08f:0xf6fd37328818c73a |
| Google Spruce Goose | https://www.google.com/maps/place/Google+Spruce+Goose/data=!4m2!3m1!1s0x80c2b16eededdcef:0x46f63a4e4f1dce6b |
| Google Reston | https://www.google.com/maps/place/Google+Reston/data=!4m2!3m1!1s0x89b649aee6e5826f:0x5b95644fde05f688 |
| The Conjuring House | https://www.google.com/maps/place/The+Conjuring+House/data=!4m2!3m1!1s0x89e417346b61023b:0x37b66516b2b53640 |
| Rita's Italian Ice & Frozen Custard | https://www.google.com/maps/place/Rita%27s+Italian+Ice+%26+Frozen+Custard/data=!4m2!3m1!1s0x89b7ade230f2866d:0x48ace681c599eba5 |
| Stitch Sew Shop | https://www.google.com/maps/place/Stitch+Sew+Shop/data=!4m2!3m1!1s0x89b7b0ff661fdb09:0x880de9cb168d012c |
| Little Caesars Pizza | https://www.google.com/maps/place/Little+Caesars+Pizza/data=!4m2!3m1!1s0x884d9376bcb33d5d:0x7abf82d5e8b9bb8f |

---

## GPS Coordinates Log

Raw coordinate set (lat, lon) — likely from a GPS track in Vermont/Champlain Valley area:

```
44.496211666667, -73.187088333333
44.492645, -73.181236666667
44.488871666667, -73.179091666667
44.48523, -73.173233333333
44.48442, -73.171928333333
44.482783333333, -73.169311666667
44.482388333333, -73.168655
44.480816666667, -73.166047166667
44.479605, -73.164147166667
44.4767, -73.1593
44.476661666667, -73.159308333333
44.470958333333, -73.150597166667
44.47022, -73.150513833333
44.469628333333, -73.1512
44.46963, -73.151183333333
44.469636666667, -73.151208333333
44.469628333333, -73.151191666667
44.469605, -73.151161166667
44.469588333333, -73.1511695
44.451953333333, -73.174278333333
44.45295, -73.178436666667
44.45295, -73.178436666667
44.45295, -73.178436666667
44.45295, -73.178436666667
44.45295, -73.178436666667
44.464236666667, -73.18367
44.464286666667, -73.183678333333
44.464286666667, -73.183678333333
44.464308333333, -73.183716666667
44.464303333333, -73.183686666667
44.464286666667, -73.183821666667
44.464286666667, -73.183821666667
44.464286666667, -73.183821666667
44.464286666667, -73.183821666667
44.464296666667, -73.183691666667
44.464296666667, -73.183691666667
44.464271666667, -73.183708333333
44.464271666667, -73.183708333333
44.464753333333, -73.184136666667
44.464905, -73.184503333333
44.464896666667, -73.184455
44.465483333333, -73.184028333333
44.46552, -73.184088333333
44.46552, -73.184088333333
44.382441666667, -73.226891666667
44.382441666667, -73.226891666667
44.382246666667, -73.226853333333
44.381503333333, -73.227163333333
44.3803, -73.2277
44.38005, -73.227761666667
44.379786666667, -73.227821666667
44.366283333333, -73.233003333333
44.367703333333, -73.232453333333
44.367645, -73.232505
44.367645, -73.232505
44.367645, -73.232505
44.36535, -73.233528333333
44.36507, -73.233641666667
44.364538333333, -73.233878333333
44.36332, -73.23445
44.36282, -73.234733333333
44.360613333333, -73.236053333333
44.360286666667, -73.236205
44.359946666667, -73.236366666667
44.359616666667, -73.236533333333
44.358813333333, -73.236916666667
44.3582, -73.2372
44.357911666667, -73.237311666667
44.357311666667, -73.237555
44.3553, -73.2382
44.35217, -73.239266666667
44.3514, -73.2394
44.3458, -73.2395
44.345821666667, -73.239455
44.3444, -73.2391
44.344445, -73.239136666667
44.344445, -73.239136666667
44.344445, -73.239136666667
44.344445, -73.239136666667
44.3252, -73.2424
44.325203333333, -73.24243
44.325203333333, -73.24243
44.325203333333, -73.24243
44.325203333333, -73.24243
44.325203333333, -73.24243
44.325203333333, -73.24243
44.325203333333, -73.24243
44.3202, -73.2483
44.318, -73.2483
44.31797, -73.248291666667
44.31797, -73.248291666667
44.31797, -73.248291666667
44.31797, -73.248291666667
44.312436666667, -73.247566666667
44.312111666667, -73.247453333333
44.311966666667, -73.247391666667
44.311855, -73.247336666667
44.311803333333, -73.247313333333
44.311546666667, -73.247186666667
44.311355, -73.247116666667
44.31053, -73.246703333333
44.310403333333, -73.246645
44.310271666667, -73.246588333333
44.309403333333, -73.2462
44.309403333333, -73.2462
44.306658333333, -73.244888333333
44.306283333333, -73.24475
44.298605, -73.243805
44.298125, -73.243788333333
44.297621666667, -73.243766666667
44.292745, -73.24237
44.292216666667, -73.24218
44.291, -73.241621666667
44.290761666667, -73.241516666667
44.290283333333, -73.24128
44.289813333333, -73.241058333333
44.282196666667, -73.236816666667
44.281403333333, -73.236375
44.27842, -73.235108333333
44.27712, -73.234878333333
44.27698, -73.234855
44.276571666667, -73.234771666667
44.274971666667, -73.234428333333
44.273971666667, -73.234138333333
44.273736666667, -73.234091666667
44.272275, -73.233771666667
44.271846666667, -73.233671666667
44.271466666667, -73.233575
44.269146666667, -73.233161666667
44.268355, -73.233038333333
44.268153333333, -73.233003333333
44.267741666667, -73.232903333333
44.265575, -73.232216666667
44.264921666667, -73.231941666667
44.25663, -73.227996666667
44.256328333333, -73.227913333333
44.255591666667, -73.227796666667
44.255433333333, -73.227783333333
44.255096666667, -73.22773
44.254933333333, -73.227705
44.254078333333, -73.227608333333
44.2534, -73.2276
44.253363333333, -73.227555
44.248886666667, -73.229125
44.24828, -73.229295
44.224216666667, -73.238563333333
44.223836666667, -73.238716666667
44.080191666667, -73.175955
44.07975, -73.17585
44.0792, -73.17575
44.043613833333, -73.1624445
44.01875, -73.166358333333
44.008277783333, -73.181488333333
44.00833055, -73.181533333333
44.00833055, -73.181533333333
44.00833055, -73.181533333333
44.017841666667, -73.169311666667
44.017841666667, -73.169311666667
44.017833333333, -73.169205
44.017708333333, -73.169175
44.017697166667, -73.169196666667
44.017697166667, -73.169196666667
44.017697166667, -73.169196666667
44.017697166667, -73.169196666667
44.017708333333, -73.16912
44.0177195, -73.169066666667
44.0177195, -73.169066666667
44.0177195, -73.169066666667
44.017733333333, -73.169236666667
44.017716666667, -73.16918
44.0178195, -73.169188333333
44.0178195, -73.169188333333
44.0178195, -73.169188333333
44.0178195, -73.169188333333
44.017772166667, -73.169296666667
44.017777833333, -73.16915
43.996691666667, -73.145552833333
44.009186116667, -73.179161666667
44.009186116667, -73.179161666667
44.009188883333, -73.17913
44.0092, -73.179
44.009163883333, -73.179038333333
44.0091, -73.1791
44.009125, -73.179091666667
44.009125, -73.179091666667
44.009125, -73.179091666667
44.00946945, -73.179046666667
44.00921945, -73.179055
44.00914445, -73.179008333333
44.009152783333, -73.179
44.009152783333, -73.179
43.927313333333, -73.102713833333
43.927095, -73.102508333333
43.927028333333, -73.102372166667
43.926555, -73.100363833333
43.926521666667, -73.100166666667
43.926521666667, -73.100166666667
43.908158333333, -73.068
43.908158333333, -73.068
43.908188333333, -73.068
43.908188333333, -73.068
43.9082, -73.068
43.908253333333, -73.068016666667
43.908253333333, -73.068016666667
43.908253333333, -73.068016666667
43.9082, -73.068
44.097458333333, -73.173225
44.097458333333, -73.173225
44.097661166667, -73.173195
44.097661166667, -73.173195
44.104272166667, -73.173788333333
44.104272166667, -73.173788333333
44.340763333333, -73.23828
44.340763333333, -73.23828
44.342455, -73.238678333333
44.342455, -73.238678333333
44.343191666667, -73.238853333333
44.1373945, -73.196996666667
44.1373945, -73.196996666667
44.136883333333, -73.196341666667
44.136883333333, -73.196341666667
44.136383333333, -73.195703333333
44.136027833333, -73.195258333333
44.1356805, -73.194816666667
44.134063833333, -73.192733333333
44.133908333333, -73.192536666667
44.1337, -73.1923
44.1316805, -73.18998
44.131497166667, -73.18982
44.131497166667, -73.18982
44.1309195, -73.189361666667
44.095363833333, -73.173605
44.092, -73.1742
44.091275, -73.17433
44.091275, -73.17433
44.0886, -73.175071666667
44.009925, -73.17688
44.009925, -73.17688
44.009452783333, -73.176666666667
44.009675, -73.177063333333
44.0095, -73.1771
44.0095, -73.1771
44.0096, -73.177
44.00959445, -73.17703
44.00959445, -73.17703
44.0095, -73.1771
44.009497216667, -73.177095
44.009497216667, -73.177095
44.0095, -73.1771
44.0095, -73.1771
44.0095, -73.1771
44.0095, -73.1771
44.0095, -73.1772
44.0095, -73.1772
44.0095, -73.1771
44.0095, -73.1771
44.0095, -73.1771
44.0096, -73.1772
44.0095, -73.1771
44.0096, -73.1771
44.009563883333, -73.177103333333
44.0094, -73.177
44.0093, -73.177
44.009741666667, -73.177313333333
44.009091666667, -73.17987
44.009158333333, -73.179816666667
44.009158333333, -73.179816666667
44.008266666667, -73.181488333333
44.419075, -73.209253333333
44.42477, -73.210603333333
44.42482, -73.210725
44.424878333333, -73.21077
44.42485, -73.210738333333
44.3726, -72.878
44.367336666667, -72.85927
44.366171666667, -72.854721666667
43.6585, -72.3264
43.658538333333, -72.326438333333
43.658538333333, -72.326438333333
43.658538333333, -72.326438333333
43.658538333333, -72.326438333333
43.658538333333, -72.326438333333
43.707338333333, -72.294753333333
43.7036, -72.3
43.7032, -72.2985
43.700958333333, -72.289266666667
43.701033333333, -72.28923
43.701033333333, -72.28923
43.700986666667, -72.289261666667
43.700986666667, -72.289261666667
43.701246666667, -72.289008333333
43.701186666667, -72.288855
43.701155, -72.28885
43.702225, -72.289475
43.70227, -72.289483333333
43.70227, -72.289483333333
43.70227, -72.289483333333
43.7021, -72.289275
43.7021, -72.289275
44.168171666667, -73.251013333333
```

---

<!-- ADD NEW APPS BELOW THIS LINE -->
