# ✦ 50 Widget Embeds for Your Static Site
***
## 💻 Coding \& Dev Activity
1. **WakaTime bar chart** — `anmol098/waka-readme-stats` fetches your WakaTime API for languages, editors, and OS breakdowns; renders as a text bar chart you write to a `.json` file for your site[^3_1]
2. **WakaTime embed card** — `https://wakatime.com/badge/user/{uuid}` serves a live SVG badge with total coding hours; `<img>`-embeddable, no action needed[^3_2]
3. **GitHub contribution graph** — `https://ghchart.rshah.org/{username}` serves your green contribution grid as a live SVG `<img>`[^3_3]
4. **GitHub stats card** — `github-readme-stats.vercel.app/api?username={user}` for stars, commits, PRs, issues as an embeddable SVG[^3_3]
5. **GitHub streak card** — `github-readme-streak-stats.herokuapp.com?user={user}` for current streak, longest streak, total contributions[^3_3]
6. **GitHub trophies** — `github-profile-trophy.vercel.app/?username={user}` renders achievement badges as embeddable SVG cards[^3_4]
7. **Top languages card** — `github-readme-stats.vercel.app/api/top-langs/?username={user}` with `layout=compact` for a language pie[^3_3]
8. **GitHub pinned repos** — fetch your own pinned repos via the GitHub GraphQL API in a scheduled action, write to `data/pinned.json`, render as cards[^3_5]
9. **StackOverflow reputation** — `https://stackoverflow.com/users/flair/{id}.png` is a self-updating flair embed; or fetch `api.stackexchange.com/2.3/users/{id}` in a workflow for structured JSON[^3_6]
10. **Codewars rank badge** — `www.codewars.com/users/{username}/badges/large` is a live `<img src>` embed with rank and kata count[^3_4]
***
## 🎮 Gaming
11. **Chess.com stats** — `Balastrong/chess-stats-action` fetches rating, wins/losses/draws, and recent games from Chess.com API; uses `<!--START_SECTION:chessStats-->` placeholder injection[^3_7][^3_8]
12. **Steam recently played** — `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/` in a scheduled Python step; write game names, hours, and capsule art URLs to `data/steam.json`[^3_9]
13. **Steam current game badge** — `j4ckofalltrades/steam-current-game` Vercel-hosted SVG card; `<img src="https://steam-current-game.vercel.app/api?steamid={id}">`[^3_9]
14. **Lichess stats** — Lichess has a fully open API at `https://lichess.org/api/user/{username}` (no auth required); fetch rating per time control and puzzle rating into JSON[^3_10]
15. **RetroAchievements** — `https://retroachievements.org/API/API_GetUserSummary.php?u={user}&z={user}&y={key}` returns points, rank, and recent game; write to a data file in a daily action[^3_11]
***
## 📺 Film \& TV
16. **Trakt.tv watch history** — Trakt's REST API (`/users/{user}/history/movies`) with OAuth; `rudrakabir/Trakt-Embed` shows a dynamically fetched watch history widget[^3_12][^3_13]
17. **Trakt poster grid** — `LekoArts/annum` generates a full-year poster grid of watched movies and shows from Trakt history; outputs static HTML[^3_14]
18. **Letterboxd RSS → JSON** — fetch `https://letterboxd.com/{user}/rss/` on a cron, parse with `feedparser`, write `data/films.json` with title, rating, watched date, TMDB poster[^3_15]
19. **TMDB poster enrichment** — after any film fetch, cross-reference `https://api.themoviedb.org/3/search/movie?query={title}` to get backdrop images, genres, and cast[^3_12]
20. **Trakt ratings heatmap** — fetch `/users/{user}/ratings/movies` and `/ratings/shows`, bucket by year/genre, write to a JSON file for a D3 heatmap on your `/watched` page[^3_14]
***
## 🌐 Social \& Fediverse
21. **Mastodon post count badge** — fetch `https://{instance}/api/v1/accounts/lookup?acct={user}`, get `statuses_count`, `followers_count`; write to data file[^3_16]
22. **Mastodon recent posts feed** — `https://{instance}/@{user}/outbox?page=true` with `Accept: application/activity+json` returns ActivityPub JSON of your last 20 posts[^3_17]
23. **Bluesky post feed** — `https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor={handle}` returns your posts as JSON; no auth required for public profiles[^3_18]
24. **Bluesky follower count** — same endpoint: `app.bsky.actor.getProfile?actor={handle}` returns `followersCount`, `followsCount`, `postsCount`[^3_18]
25. **Pixelfed gallery RSS** — Pixelfed exposes `https://{instance}/users/{user}.atom`; parse it in a workflow for a photo grid `data/photos.json`[^3_16]
***
## 🏃 Fitness \& Health
26. **Strava year-to-date stats** — fetch `/athletes/{id}/stats` with OAuth refresh token in a scheduled action; write YTD run distance, elevation, and time to JSON[^3_19]
27. **Strava recent activities** — `/athlete/activities?per_page=5` returns polyline, sport type, distance, pace; decode with `polyline` library for a mini map embed[^3_19]
28. **Strava contributions heatmap** — parse activity dates from `/athlete/activities?per_page=200`, build a GitHub-style grid of active days, write to SVG via Python[^3_20]
29. **Fitbit daily summary** (via Fitbit API) — fetch `/1/user/-/activities/date/today.json` with refresh token; write steps, active minutes, sleep to `data/fitbit.json`[^3_19]
30. **Garmin Connect** (via `cyberjunky/python-garminconnect`) — scrape daily step count and VO2 max estimate in a scheduled Python step; no official API but widely used library[^3_19]
***
## 🌍 Language Learning \& Education
31. **Duolingo streak card** — `https://duolingo-stats-card.vercel.app/api?username={user}` is a live embeddable Vercel card with streak, XP, and league[^3_21]
32. **Duolingo README stats action** — `centrumek/duolingo-readme-stats` injects streak, total XP, and league into a placeholder comment in any Markdown or HTML file[^3_22]
33. **Anki review count** (via AnkiConnect) — if you run Anki with AnkiConnect locally, a webhook workflow can push daily review stats to your repo[^3_22]
34. **Clozemaster fluency score** — Clozemaster exposes a public profile page; scrape it in a workflow with `requests` + `BeautifulSoup` for fluency % per language[^3_22]
***
## 📡 Weather \& Environment
35. **OpenWeatherMap current** — `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}` in a 30-min cron; write temp, conditions, icon to `data/weather.json`[^3_11]
36. **Open-Meteo forecast** (no API key) — `https://api.open-meteo.com/v1/forecast?latitude=37.27&longitude=-80.05&daily=temperature_2m_max` for Salem, VA; completely free[^3_11]
37. **AQI / air quality** — `https://api.openweathermap.org/data/2.5/air_pollution?lat={}&lon={}` returns PM2.5, PM10, O3, NO2 as structured JSON for an air quality indicator[^3_23]
38. **Moon phase** — `https://api.farmsense.net/v1/moonphases/?d={unix_timestamp}` or compute it with a pure Python function (no API key needed); write phase name and emoji to data file[^3_11]
39. **Sunrise/sunset** — `https://api.sunrise-sunset.org/json?lat={}&lng={}` returns golden hour, civil twilight, nautical twilight; free and no-key[^3_11]
***
## 🎌 Anime \& Manga
40. **AniList watching list** — `Yizack/anilist-animes-action` uses AniList's GraphQL API to fetch your `CURRENT`, `COMPLETED`, and `PLANNING` lists and injects them into placeholder comments[^3_24]
41. **AniList stats card** — `https://anilist.co/user/{username}/` exposes anime count, mean score, and genres as a public GraphQL query; fetch and write to data file[^3_25]
42. **MyAnimeList profile stats** — Jikan (unofficial MAL API) at `https://api.jikan.moe/v4/users/{username}/statistics` returns episodes watched, mean score, completed; no key needed[^3_24]
43. **AniList favorites grid** — GraphQL query `MediaListCollection(userName: "{user}", type: ANIME, status: CURRENT)` returns cover images + titles for a currently-watching shelf[^3_25]
***
## 📹 Video \& Streaming
44. **YouTube latest video** — YouTube Data API `channels?part=contentDetails&id={channelId}` → `playlistItems?part=snippet&playlistId={uploadsId}&maxResults=1`; embed thumbnail + title as a "latest video" card[^3_26]
45. **YouTube channel stats** — fetch `statistics` part for `subscriberCount`, `viewCount`, `videoCount`; `jq` extracts them cleanly in a bash step[^3_26]
46. **Twitch live status badge** — `https://api.twitch.tv/helix/streams?user_login={user}` with Client-ID header; write `is_live: true/false` and `viewer_count` to JSON for a live indicator[^3_27]
***
## 🔗 Miscellaneous / IndieWeb
47. **Webmention count** — `https://webmention.io/api/count?target={your_url}` returns like, reply, repost, and mention counts; poll per-page in a nightly action[^3_18]
48. **Pinboard tag cloud** — `https://api.pinboard.in/v1/tags/get?format=json&auth_token={user}:{token}` returns all your tags with counts; build a weighted cloud and write to `data/tags.json`[^3_28]
49. **GitHub sponsor count** — GitHub GraphQL `viewer { sponsorshipsAsMaintainer { totalCount } }` returns your sponsor count; write to a data file for a support badge[^3_3]
50. **Profile visitor counter** (self-hosted) — deploy a Cloudflare Worker with a KV counter that increments on each page load and returns JSON; fetch from your static site via `<script>` tag for a "visitors" count without third-party analytics[^3_11]
<span style="display:none">[^3_29][^3_30][^3_31][^3_32][^3_33][^3_34][^3_35][^3_36][^3_37][^3_38][^3_39][^3_40][^3_41][^3_42][^3_43][^3_44][^3_45][^3_46][^3_47][^3_48][^3_49][^3_50][^3_51]</span>
<div align="center">⁂</div>
[^3_1]: https://github.com/anmol098/waka-readme-stats
[^3_2]: https://github.com/marketplace/actions/wakatime-coding-statistics
[^3_3]: https://github.com/abhisheknaiidu/awesome-github-profile-readme
[^3_4]: https://github.com/dhyeythumar/awesome-readme-tools
[^3_5]: https://dev.to/davorg/updating-github-pages-using-github-actions-395a
[^3_6]: https://blog.jakelee.co.uk/showing-latest-posts-from-multiple-sources-on-github-profile/
[^3_7]: https://github.com/Balastrong/chess-stats-action
[^3_8]: https://github.com/marketplace/actions/chess-com-games-stats
[^3_9]: https://github.com/j4ckofalltrades/steam-current-game
[^3_10]: https://leonardomontini.dev/chess-stats-on-github-action
[^3_11]: https://github.com/gethomepage/homepage/discussions/5206
[^3_12]: https://github.com/rudrakabir/Trakt-Embed
[^3_13]: https://github.com/trakt/trakt-api
[^3_14]: https://github.com/LekoArts/annum
[^3_15]: https://valerionarcisi.me/en/blog/how-i-display-my-latest-watched-movies-using-letterboxd-rss-feed/
[^3_16]: https://github.com/marketplace/actions/any-feed-to-mastodon
[^3_17]: https://jakelazaroff.com/words/integrating-my-blog-with-mastodon/
[^3_18]: https://indieweb.org/webactions
[^3_19]: https://www.curtiscode.dev/post/displaying-strava-stats-using-webhooks
[^3_20]: https://www.reddit.com/r/Ultramarathon/comments/1j7oehd/i_made_a_strava_integration_that_pushes_github/
[^3_21]: https://github.com/KevzPeter/Duolingo-Stats-Card
[^3_22]: https://github.com/centrumek/duolingo-readme-stats
[^3_23]: https://github.com/trekawek/air-quality-info
[^3_24]: https://github.com/marketplace/actions/anilist-animes-action
[^3_25]: https://github.com/yuna0x0/anilist-mcp
[^3_26]: https://blog.jakelee.co.uk/fetching-youtube-metadata-in-github-actions-and-persisting/
[^3_27]: https://github.com/dhyeythumar/youtube-stats-card
[^3_28]: https://gist.github.com/philgruneich/b17732fe8eb828be8328
[^3_29]: https://github.com/marketplace/actions/wakatime-stats
[^3_30]: https://github.com/marketplace/actions/wakatime-stat-update-action
[^3_31]: https://github.com/marketplace/actions/wakatime-gist
[^3_32]: https://wakatime.com/github-time-tracking
[^3_33]: https://github.com/orgs/community/discussions/167549
[^3_34]: https://github.com/LauraAllObe/wakatimeReadmeStats
[^3_35]: https://github.com/suryakantamangaraj/AwesomeGithubProfileTemplates
[^3_36]: https://dev.to/raman_butta/adding-waka-time-stats-to-your-github-readme-59ng
[^3_37]: https://github.com/abusayed0206/trakt
[^3_38]: https://github.com/wwiens/trakt_mcpserver
[^3_39]: https://github.com/edemaine/followshows-to-trakt
[^3_40]: https://github.com/trakt/Trakt-for-Mediaportal/blob/master/TraktPlugin/TraktHandlers/MyVideos.cs
[^3_41]: https://github.com/Hiyori-API/checker_anilist
[^3_42]: https://github.com/HarshaAbeyvickrama/YouTube-Statistics
[^3_43]: https://github.com/devfaysal/YouTube_Channel_Statistics
[^3_44]: https://github.com/stephanedebove/youtube_stats
[^3_45]: https://github.com/flagship-io/flagship-vercel-edge-function-example
[^3_46]: https://github.com/dmadison/splitflap-youtube-stats/blob/master/src/splitflap_youtube_stats.py
[^3_47]: https://hoop.dev/blog/the-simplest-way-to-make-github-actions-vercel-edge-functions-work-like-it-should
[^3_48]: https://github.com/VerKoval/AirQualityModel
[^3_49]: https://github.com/JensBender/youtube-channel-analytics
[^3_50]: https://github.com/motdotla/integration-example-vercel-edge-function/blob/master/README.md
[^3_51]: https://github.com/thomaspich/MMM-duolingo-streak/actions
