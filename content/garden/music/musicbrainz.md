---
tags:
  - tools
---
# [External Resources](https://musicbrainz.org/doc/External_Resources)

This page has not been reviewed by our documentation team ([more info](https://musicbrainz.org/doc/WikiDocs)).

- This page lists tools external to [MusicBrainz](https://musicbrainz.org/doc/MusicBrainz) and ListenBrainz that make editing or viewing data more convenient. This includes programs, scripts, reports, etc from various sources.

## Contents

- [1 Other resources](https://musicbrainz.org/doc/#Other_resources)
- [2 Other online databases](https://musicbrainz.org/doc/#Other_online_databases)
- [3 MusicBrainz Editing tools](https://musicbrainz.org/doc/#MusicBrainz_Editing_tools)
	- [3.1 User scripts / GreaseMonkey / User javascripts / UserJS](https://musicbrainz.org/doc/#User_scripts_/_GreaseMonkey_/_User_javascripts_/_UserJS)
	- [3.2 Parsers](https://musicbrainz.org/doc/#Parsers)
	- [3.3 External sites](https://musicbrainz.org/doc/#External_sites)
	- [3.4 Bookmarklets](https://musicbrainz.org/doc/#Bookmarklets)
- [4 MusicBrainz ISRC submission](https://musicbrainz.org/doc/#MusicBrainz_ISRC_submission)
- [5 MusicBrainz external APIs](https://musicbrainz.org/doc/#MusicBrainz_external_APIs)
- [6 MusicBrainz miscellaneous tools](https://musicbrainz.org/doc/#MusicBrainz_miscellaneous_tools)
- [7 ListenBrainz listen submission](https://musicbrainz.org/doc/#ListenBrainz_listen_submission)
- [8 ListenBrainz tools](https://musicbrainz.org/doc/#ListenBrainz_tools)
- [9 AcousticBrainz tools](https://musicbrainz.org/doc/#AcousticBrainz_tools)
- [10 Old/defunct](https://musicbrainz.org/doc/#Old/defunct)

## Other resources

- [Userscripts page](https://musicbrainz.org/doc/Guides/Userscripts): Local browser scripts that enhance editing or user display
- [Picard Resources page](https://musicbrainz.org/doc/Picard_Resources): Tools, scripts and links related to MusicBrainz Picard
- [MusicBrainz Enabled Applications](https://musicbrainz.org/doc/MusicBrainz_Enabled_Applications): Applications that have MusicBrainz support built in.
- [ListenBrainz Enabled Applications](https://musicbrainz.org/doc/ListenBrainz_Enabled_Applications): Applications that have ListenBrainz support built in.
- [MetaBrainz Enabled Research](https://musicbrainz.org/doc/MetaBrainz_Enabled_Research): Studies and research that used MetaBrainz data

## Other online databases

See [Other Databases](https://musicbrainz.org/doc/Other_Databases).

## MusicBrainz Editing tools

### User scripts / GreaseMonkey / User javascripts / UserJS

Userscripts run in a users web browser and make on-the-fly local changes to specific web pages. In MusicBrainz they are generally used to change the display of pages, often facilitating editing.

For instance, a script may add functionalities to a MusicBrainz page, or shorten repetitive actions to only one click, and so on.

- [List of MusicBrainz userscripts](https://musicbrainz.org/doc/Guides/Userscripts)

### Parsers

| Parser | Info | Author | Link/s |
| --- | --- | --- | --- |
| Bandcamp, Beatport, and Local File Parsers | Parsers to be run at the command line passing in either a URL (Bandcamp release, or Beatport release), or a directory with a set of files. Require at Perl v5.10 or newer, and a differing set of Perl Modules based off the particular service. Local file parsers are format specific. | VxJasonxV | [github](https://github.com/VxJasonxV/MusicBrainz-Track-Parsers) |
| music-metadata | JavaScript NPM module, to parse audio tracks in Node. | Borewit | [npmjs.com](https://www.npmjs.com/package/music-metadata) |
| music-metadata-browser | JavaScript NPM module, to parse audio tracks in the browser. These metadata parser extract virtual any type of metadata from any type of audio track, including [MusicBrainz Identifiers](https://musicbrainz.org/doc/MusicBrainz_Identifier) or other metadata tags supported by [MusicBrainz Picard](https://musicbrainz.org/doc/MusicBrainz_Picard). | Borewit | [npmjs.com](https://www.npmjs.com/package/music-metadata-browser) |
| vgmdb2mb.py | Python script to import VGMDB to MusicBrainz. | fxthomas | [github gist](https://gist.github.com/fxthomas/fd85e906e41f4e6e06f38e92a497005b) |

### External sites

| Website | Type | Info | Author | Link/s |
| --- | --- | --- | --- | --- |
| Harmony | Importer | Imports releases from a Deezer/Spotify/iTunes/Bandcamp/Beatport/Tidal album url, [open-source](https://github.com/kellnerd/harmony) | kellnerd | [website](https://harmony.pulsewidth.org.uk/) |
| yambs | Importer | Imports all entity types from CSV/TSV/text files, releases from Bandcamp/Qobuz/Tidal, and artists from Metal Archives. The [command-line version](https://codeberg.org/derat/yambs) can also extract data from local MP3 files and podcast RSS feeds. | derat | [website](https://yambs.erat.org/) |
| a-tisket | Importer | Imports releases from a Deezer/Spotify/iTunes album url, packaging useful tools into the process, such as ISRC and cover art addition | marlonob | [website](https://atisket.pulsewidth.org.uk/) |
| MET - Metadata Lookup Engine | Importer | Lookup release metadata from various online streaming services and music stores, seed found releases to MusicBrainz. | SuperSaltyGamer? | [website](https://seed.musichoarders.xyz/) |
| Podcast XML to MusicBrainz | Importer | Import podcast episodes into MusicBrainz, from an xml file. | YoGo9 | [github](https://github.com/YoGo9/Podcast-XML-to-MusicBrainz/) |
| MbEventS | Importer | MbEventS (MusicBrainz Event Seeder) is a c# library utilizing the command line version of yambs to create seeds for the MB data base. | Relaxo | [codeberg](https://codeberg.org/relaxo/MbEventS) |
| mbzlists | Playlists | A login-free annotated playlist manager based on MBIDs. | unnu and lepisma | [website](https://mbzlists.com/) |
| Albunack | Various | Displays artist discographies combining MusicBrainz and Discogs entries. Provides shortcuts for linking MB entities to Discogs and importing Discogs releases. Provides custom reports. | Paul Taylor | [website](https://www.albunack.net/) |
| COV | Album art | COV (Cover Search Engine) searches multiple sources for cover art, with options for region and minimum resolution. | SuperSaltyGamer? | [website](https://covers.musichoarders.xyz/) |
| eac-log-lookup | DiscID | Generate and submit DiscID's from EAC/XLD log. |  | [website](https://eac-log-lookup.blogspot.com/) |
| cdtoc | DiscID | CUETools CDTOC to MusicBrainz Full TOC converter. | ToadKing | [website](https://toadking.com/cdtoc.html) |
| Image Max URL | Album art | Finds biggest available image from a image URL (functionality is also included in the [Enhanced Cover Art Uploads](https://musicbrainz.org/doc/Guides/Userscripts#Userscripts:_Cover_art) userscript). |  | [website](https://qsniyg.github.io/maxurl/)/[github](https://github.com/qsniyg/maxurl) |
| ISRCHunt | ISRC | Checks if ISRC's from a Spotify Playlist exist in MB, supplies a Harmony and a-tisket link. | oblomovx | [website](https://isrchunt.com/) |
| SAMBL | Spotify | SAMBL (Streaming Artist MusicBrainz Lookup) Loads artist albums from Spotify, Deezer, Tidal, and Bandcamp, showing which releases are linked in MusicBrainz, identifying specific missing data. Provides A-tisket / Harmony links. | Lioncat6 | [website](https://sambl.lioncat6.com/)/[github](https://github.com/Lioncat6/SAMBL-React/) |
| Top 500 MusicBrainz Editors |  | A list of the top 500 MusicBrainz editors, and ranking changes. | YoGo9 | [website](https://yogo9.github.io/MBTopEditors/) |
| Xythium's TIDAL | TIDAL | Quick and compact search for Tidal releases, compact display of artwork/barcodes/ISRC's etc. | Xythium | [website](https://xythium.github.io/tidal.html) |

### Bookmarklets

Compressed code snippets/actions that can be added to your browser, as a bookmark ([more info](https://www.bookmarkllama.com/blog/bookmarklets)).

| Name | Info | Author | Link/s |
| --- | --- | --- | --- |
| Add to merge queue | Add currently viewed entity to merge queue. | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Annotation Converter | Allows entity annotations to be (partly) written in basic Markdown and converts them into valid annotation markup. Shortens absolute URLs to MusicBrainz entities to `[entity-type:mbid\|label]` links. Automatically fetches and uses the name of the linked entity as label if none was given. Also supports collection descriptions and user profile biographies. | kellnerd | [github](https://github.com/kellnerd/musicbrainz-scripts?tab=readme-ov-file#annotation-converter) |
| Approve all edits | Approve all edits on current page (requires the [power vote script](https://github.com/jesus2099/konami-command/blob/master/mb_POWER-VOTE.user.js)). | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Batch Add Parts Of Series | Batch-adds release groups as parts of the currently edited series. Automatically extracts numbers from titles and uses them as relationship attributes. | kellnerd | [github](https://github.com/kellnerd/musicbrainz-scripts?tab=readme-ov-file#batch-add-parts-of-series) |
| Change All Release Dates | Changes the date for all release events of a release according to the user's input. Useful to correct the dates for digital media releases with lots of release events which are using the wrong first release date of the release group. | kellnerd | [github](https://github.com/kellnerd/musicbrainz-scripts?tab=readme-ov-file#change-all-release-dates) |
| Clear Redundant Medium Titles | Clears medium titles if they are redundant and contain only the medium format and position. Adds a link to the relevant guideline to the edit note. | kellnerd | [github](https://github.com/kellnerd/musicbrainz-scripts?tab=readme-ov-file#clear-redundant-medium-titles) |
| Convert to pseudo-release | From the release editor, sets release type to pseudo-release, removes format, barcode, format, track lengths, etc, and moves to the submit tab. | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Convert URLs with "album/" or "release/" to Harmony links | Converts URLs with "album/" or "release/" to [Harmony](https://harmony.pulsewidth.org.uk/) links (for example, to import releases from the [Spotify Release List](https://spotifyreleaselist.netlify.app/)). | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Convert URLs with "/album" to ISRC Hunt links | Converts URLs with "/album" to [ISRC Hunt](https://isrchunt.com/) links. | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Detect Cover Art Types | Detects and fills the image types and comment of all pending uploads using their filenames. Treats filename parts in parentheses as image comments. | kellnerd | [github](https://github.com/kellnerd/musicbrainz-scripts?tab=readme-ov-file#detect-cover-art-types) |
| Edit Join Phrases | Prompts for a regular expression to search for in each track join phrases and then for a replacement pattern. | derat | [codeberg](https://codeberg.org/derat/mb-bookmarklets#edit-join-phrases)/[forums](https://community.metabrainz.org/t/bookmarklet-for-bulk-editing-track-titles/733184) |
| Enumerate Track Titles | Renames all tracks using their absolute track number and a customizable prefix (which can be empty). Useful to number the parts of an audiobook without chapters and other releases with untitled tracks. Asks the user to input a numbering prefix which can optionally be preceded by flags. | kellnerd | [github](https://github.com/kellnerd/musicbrainz-scripts?tab=readme-ov-file#enumerate-track-titles) |
| Enumerate Cover Art Comments | Prompts for a starting number and an optional text prefix. Fills the comment field for each ready-to-upload cover art image with the prefix and a sequential number (e.g., "CD41", "CD42", etc.). | InvisibleMan78 | [forums](https://community.metabrainz.org/t/288403/2) |
| Expand Collapsed Mediums | Expands all collapsed mediums in the release editor, useful for large releases. | kellnerd | [github](https://github.com/kellnerd/musicbrainz-scripts?tab=readme-ov-file#expand-collapsed-mediums) |
| Guess Series Relationship | Guesses the series name from the name of the currently edited entity and adds a relationship. Tries to extract the series number from the entity name to use it as relationship attribute. Currently limited to release groups, both via their edit pages and via the release relationship editor. | kellnerd | [github](https://github.com/kellnerd/musicbrainz-scripts?tab=readme-ov-file#guess-series-relationship) |
| Load Release With Magic ISRC | Opens [kepstin’s MagicISRC](https://magicisrc.kepstin.ca/) and loads the currently visited MusicBrainz release. | kellnerd | [github](https://github.com/kellnerd/musicbrainz-scripts?tab=readme-ov-file#load-release-with-magic-isrc) |
| Lookup URL in MusicBrainz | Search MusicBrainz URL relationships for the current page URL, for instance to check if a relationship already exists for a Spotify album page. | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Lookup With Harmony | Opens [Harmony](https://harmony.pulsewidth.org.uk/) and performs a release lookup for the currently visited URL. | kellnerd | [github](https://github.com/kellnerd/musicbrainz-scripts?tab=readme-ov-file#lookup-with-harmony) |
| Mark Release As Worldwide | Removes all release events except for the first one and changes its country to \[Worldwide\]. Allows to replace an exhaustive list of release countries/events with a single release event. | kellnerd | [github](https://github.com/kellnerd/musicbrainz-scripts?tab=readme-ov-file#mark-release-as-worldwide) |
| Multi-tool | Performs different actions depending on the page that you are on: Go to next release editor tab (from release editor), apply guess case, submit edit, confirm seeding form and OAuth, reload on error, update release from Harmony or seed it (from release page), go to ISRC submitter. | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Open current page in MET | Open the current page/URL in MET ([MusicBrainz Metadata Seeder](https://seed.musichoarders.xyz/)). | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Open Harmony Release Actions | Opens [Harmony's](https://harmony.pulsewidth.org.uk/) Release Actions page for the currently visited MusicBrainz release. | kellnerd | [github](https://github.com/kellnerd/musicbrainz-scripts#open-harmony-release-actions) |
| Open in Harmony | Loads the current MusicBrainz release page into [Harmony](https://harmony.pulsewidth.org.uk/). | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Open in Harmony (new tab) | Loads the current MusicBrainz release page into [Harmony](https://harmony.pulsewidth.org.uk/), in a new tab. | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Open Spotify/Deezer page in ISRC Hunt (new tab) | Open the current Spotify or Deezer page in [ISRC Hunt](https://isrchunt.com/), in a new tab. | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Open YouTube page in MW Metadata | Open the current YouTube video/page in [MW Metadata](https://mattw.io/youtube-metadata/) (displays various YouTube video details, metadata, statistics, etc). | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Relate This Entity To Multiple MBID | Relates the currently edited entity to multiple entities given by their MBIDs. Uses the selected relationship type of the currently active relationship dialog. | kellnerd | [github](https://github.com/kellnerd/musicbrainz-scripts?tab=readme-ov-file#relate-this-entity-to-multiple-mbid) |
| Rename Tracks | Prompts for a regular expression to search for in each track title and then for a replacement pattern. | derat | [codeberg](https://codeberg.org/derat/mb-bookmarklets#rename-tracks)/[forums](https://community.metabrainz.org/t/bookmarklet-for-bulk-editing-track-titles/733184) |
| YouTube archive search | Search for the current YouTube video/page in archives (checks if the video is in various archive sites). | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Search for recordings of current release or release group | Runs a search for recordings of the current release (from a MusicBrainz release or release group page) | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Search for releases of current artist | Runs a search for releases of the current artist (from a MusicBrainz artist page) | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Set Cover Art Types | Sets cover art types for ready-to-upload images in bulk. | InvisibleMan78 | [forums](https://community.metabrainz.org/t/script-to-set-all-types-of-all-ready-to-upload-pictures/69868/12) |
| Set Language | Sets the language of the current release to whatever you want. | Dr.Blank | [Github](https://github.com/Dr-Blank/userscripts/blob/main/musicbrainz/setLanguage.bookmarklet.md) |
| Submit edit votable | Submit the current edit, with the "Make all edits votable" box checked. | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Show Deezer API data | Show API data when on a Deezer album page. | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Show Qobuz API data | Show API data when on a Qobuz album page. | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Show Qobuz Release Availability | Shows all countries in which the currently visited Qobuz release is available. | kellnerd | [github](https://github.com/kellnerd/musicbrainz-scripts?tab=readme-ov-file#show-qobuz-release-availability) |
| Toggle relationships for removal | Toggles all release relationships to be removed when in the editor. | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| Toggle links for removal | Toggles all links, for instance on an artist page, for removal when in the editor. | chaban | [github](https://github.com/chaban-mb/bookmarklets) |
| View Discogs Entity Via API | Views the API response for the currently visited Discogs entity (in a new tab). | kellnerd | [github](https://github.com/kellnerd/musicbrainz-scripts?tab=readme-ov-file#view-discogs-entity-via-api) |
| Wikipedia link check | Runs on Wikipedia category pages, and displays which artists are/are not linked to MusicBrainz via Wikidata. | yomo12 | [forums](https://community.metabrainz.org/t/a-new-musicbrainz-user-script-was-released/77897/121) |

## MusicBrainz ISRC submission

- There are many ISRC submit websites in [ISRC#Resources](https://musicbrainz.org/doc/ISRC#Resources)

## MusicBrainz external APIs

See [MusicBrainz API libraries](https://musicbrainz.org/doc/MusicBrainz_API#Libraries).

- [graphbrainz](https://github.com/exogen/graphbrainz): query the web service with [graphql](http://graphql.org/)

## MusicBrainz miscellaneous tools

| Title | Type | Info | Author | Link/s |
| --- | --- | --- | --- | --- |
| chapterz.nu |  | Print out M4B file or Audible ASIN chapters in the MusicBrainz tracklist format. | jwillikers | [github](https://github.com/jwillikers/chapterz) |
| Cueshit | Cuesheets | Convert between different cue sheet/chapter/tracklist formats (including MusicBrainz tracklists). | kellnerd | [github](https://github.com/kellnerd/cueshit) |
| enum lists |  | Extracted MusicBrainz enums/IDs that are useful for seeding. | derat | [forums](https://community.metabrainz.org/t/musicbrainz-ids-enums/732391/4) |
| Goldmaster Hugo Theme | Hugo | A Hugo theme with support for a filterable music/release showcase, using data pulled from Musicbrainz. | Goldmaster | [gitlab](https://gitlab.com/Goldmaster/goldmaster) |
| Harmony Assistant | Harmony | Import albums by leveraging Harmony's web interface and Selenium for browser automation. |  | [github](https://github.com/EmberLightVFX/Harmony-Assistant/) |
| hearring-aid | Lidarr | Scripts for deploying and self-hosting a MusicBrainz instance in conjunction with Lidarr's metadata API. | blampe | [github](https://github.com/blampe/hearring-aid) |
| lyriks | Genie | A command line tool that fetches lyrics from Genie, based on MusicBrainz tags/relationships. | Maxr1998 | [github](https://github.com/Maxr1998/lyriks) |
| mb\_MusicBrainzSync | MusicBee | A MusicBee plugin to sync your tags/ratings to your account on MusicBrainz. | FlakyBlueJay | [github](https://github.com/FlakyBlueJay/mb_musicbrainzsync) |
| mbstats |  | Command-line tools for generating statistics about the MusicBrainz online music database. | derat | [codeberg](https://codeberg.org/derat/mbstats) |
| MusicBrainz2Notion | Notion | A tool for syncing artist and music data from MusicBrainz to Notion databases. | Kajiih | [github](https://github.com/Kajiih/MusicBrainz2Notion) |
| musicbrainz-video-tracklist | Video | Tools and a script to generate a tracklist of video recordings for MusicBrainz from the chapters of a video file. | arifer612 | [github](https://github.com/arifer612/musicbrainz-video-tracklist) |
| MusicBrainz Genres | beets | This plugin fetches community voted genres from MusicBrainz and applies them to the albums and items in your beets library. | lazybookwyrm | [github](https://github.com/lazybookwyrm/BeetsPlugins)/[forums](https://community.metabrainz.org/t/beets-musicbrainz-genres-plugin-released/734611) |
| MusicBrainz Helper | beets | This beets plugin generates an HTML report of your beets library that can be helpful for MusicBrainz editing, using AcoustID/fingerprints. | lazybookwyrm | [github](https://github.com/lazybookwyrm/BeetsPlugins)/[forums](https://community.metabrainz.org/t/musicbrainz-helper-a-beets-plugin-to-generate-helpful-reports/712385/1) |
| MusicBrainz-rss-generator | RSS | Generates an RSS feed for new releases by selected artists. | provokateurin | [github](https://github.com/provokateurin/musicbrainz-rss-generator) |
| MusicBrainz Rust | Rust | MusicBrainz rust is a utility crate for the the [MusicBrainz API](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2). [musicbrainz\_rs\_nova](https://github.com/RustyNova016/musicbrainz_rs_nova?tab=readme-ov-file) by RustyNova is the current maintained fork. |  | [github](https://github.com/RustyNova016/musicbrainz_rs_nova?tab=readme-ov-file) |
| MusicSearch |  | An Android app for browsing songs, artists, and anything related to them using MusicBrainz's API. | David Ly Apps | [github](https://github.com/lydavid/MusicSearch) |
| outsidecontext's Projects | Various | git repositories/code for various MB and LB projects. | outsidecontext | [sourcehut](https://sr.ht/~phw/musicbrainz/) |
| PlexRatingToMB | Plex | Export ratings from your Plex server library into a CSV file and/or directly to MusicBrainz. | defvs | [github](https://github.com/defvs/PlexRatingToMB) |
| qobuz\_identifier | Qobuz | A small command-line tool that takes a qobuz ID and matches it to MusicBrainz releases by barcode. | Sciencentistguy | [github](https://github.com/Sciencentistguy/qobuz_identifier) |
| ReleaseFeed | Bandcamp/Spotify | Generates Atom (RSS) feeds for new releases by specified artists on Bandcamp and/or Spotify. | elomatreb | [website](https://releasefeed.elomatreb.eu/)/[codeberg](https://codeberg.org/elomatreb/releasefeed) |
| SonEx MusicBrainz Client | Elixir | A lightweight, Elixir client for the MusicBrainz API v2. | fullstack-ing | [github](https://github.com/son-ex/son-ex-musicbrainz-client) |
| Songs Search |  | A site to instantly search 32M songs from the MusicBrainz songs database, using Typesense Search. | jasonbosco | [website](https://songs-search.typesense.org/)/[github](https://github.com/typesense/showcase-songs-search) |
| spotify-library-to-musicbrainz | Spotify | A CLI tool to map albums/EPs/singles from your Spotify library to their respective Musicbrainz IDs. | provokateurin | [codeberg](https://codeberg.org/provokateurin/spotify-library-to-musicbrainz) |
| [MusicBrainz server](https://musicbrainz.org/doc/MusicBrainz_Server/Setup) |  | Set up your own MusicBrainz server, using Docker or the source code. |  | [wiki](https://musicbrainz.org/doc/MusicBrainz_Server/Setup) |

## ListenBrainz listen submission

- A list of ListenBrainz submission tools is maintained in [ListenBrainz > About > Submitting data](https://listenbrainz.org/add-data/)

**Submission sites that are 'early days' or untested**

| Website | Type | Info | Author | Link/s |
| --- | --- | --- | --- | --- |
| am-osx-status | macOS | Horribly unstable macOS Apple Music state observer and recorder. |  | [github](https://github.com/homomorphist/am-osx-status) |
| Beetbrainz | beets | Submits listens from Emby, Jellyfin, Plex, Tautulli, MPRIS-compatible Linux media players or MPD servers to ListenBrainz. Integrates with beets to ensure accuracy of scrobble metadata. | Gerald B Cox | [wiki](https://codeberg.org/gbcox/beetbrainz/wiki/Home)/[codeberg](https://codeberg.org/gbcox/beetbrainz) |
| Beetpost |  | Generates webhooks from local media players. It was specifically designed with the Beetbrainz application in mind, allowing you to send beetbrainz enhanced scrobbles to Listenbrainz. | Gerald B Cox | [wiki](https://codeberg.org/gbcox/beetpost/wiki/Home)/[codeberg](https://codeberg.org/gbcox/beetpost/) |
| Listening Post | macOS | A macOS app that identifies music playing around you, constantly. Supports submitting listens to ListenBrainz. |  | [website](https://actions.work/listening-post/) |
| osx-scrobbler |  | A lightweight macOS menu bar application that scrobbles your music to Last.fm and ListenBrainz. |  | [github](https://github.com/theli-ua/osx-scrobbler) |
| YTMusic2listenbrainz | YouTube | Python script to submit your YouTube Music watch history to Listenbrainz. | fuddl | [github gist](https://gist.github.com/fuddl/e17aa687df6ac1c7cbee5650ccfbc889) |

## ListenBrainz tools

**External sites**

| Website | Type | Info | Author | Link/s |
| --- | --- | --- | --- | --- |
| ListenBrainz Playlist Tool |  | Select recent listens from a ListenBrainz account and add them to a playlist. | YoGo9 | [website](https://yogo9.github.io/listenbrainz-recent-listens-to-playlist/)/[github](https://github.com/YoGo9/listenbrainz-recent-listens-to-playlist) |
| semaninha. |  | Generates user listen 'album art grids' using ListenBrainz data. |  | [website](https://semaninha.piuvas.net/) |
| TuneMyMusic |  | Export your ListenBrainz “Weekly Exploration” playlist to any music service, using TuneMyMusic. | Drizzle3122 | [forums (tutorial)](https://community.metabrainz.org/t/tutorial-exporting-your-weekly-exploration-to-any-music-service/647759) |
| Unmapped Spotify Listens | Spotify | Fetches unmapped listens from ListenBrainz that were submitted via Spotify and provides MusicBrainz search and Harmony submit links for the release. | YoGo9 | [website](https://yogo9.github.io/unmapped-spotify-listens/)/[github](https://github.com/YoGo9/unmapped-spotify-listens) |
| VinylScrobbler |  | Scrobble vinyl, based on your collection, with a click on the A or B side (WIP). | aereaux | [website](https://jmad.org/vinylscrobbler/)/[codeberg](https://codeberg.org/aereaux/vinylscrobbler) |

**Miscellaneous**

| Title | Type | Info | Author | Link/s |
| --- | --- | --- | --- | --- |
| Alistral |  | A collection of CLI based tools for Listenbrainz. | RustyNova | [github](https://github.com/RustyNova016/Alistral) |
| [elbisaur](https://musicbrainz.org/doc/listenbrainz/elbisaur) |  | [Deno](https://deno.com/) command line app to access the ListenBrainz API. ListenBrainz submission and other tools, e.g. listen deletion. | kellnerd | [wiki](https://musicbrainz.org/doc/listenbrainz/elbisaur)/[github](https://github.com/kellnerd/elbisaur) |
| lastfm-listenbrainz-sync | Last.fm | Scripts to sync Last.fm scrobbles to ListenBrainz, allowing for local cleanup and backup of listen history. | mwiencek | [github](https://github.com/mwiencek/lastfm-listenbrainz-sync) |
| lb-lidarr-plex | Plex/Lidarr | Bridging artist discovery and playlist curation between ListenBrainz, Lidarr, and Plex. | DeviantEng | [github](https://github.com/DeviantEng/lb-lidarr-plex) |
| ListenBrainz cmus submitter | cmus | Logs offline listens in cmus (a console music player for Linux-like systems) to a TSV file. | rnkn | [forums](https://community.metabrainz.org/t/checking-minimal-json-submission/723460/5) |
| listenbrainz-discord-presence | Discourse | Display a Listenbrainz user's now playing song as a rich presence status in Disord. | qouesm | [github](https://github.com/qouesm/listenbrainz-discord-presence) |
| ListenBrainz Ruby wrapper | Ruby | A Ruby wrapper to the ListenBrainz API. | Richard Degenne | [gitlab](https://gitlab.com/Richard-Degenne/listenbrainz) |
| ListenBrainz\_File\_Parser |  | Parses database files from different music listen tracker applications, and imports them into ListenBrainz. | Coloradohusky | [github](https://github.com/Coloradohusky/ListenBrainz_File_Parser) |
| listenbrainz-normalizer |  | Makes a list of your top artists based on actual time played. | rustynail | [gitlab](https://gitlab.com/rustynail/listenbrainz-normalizer) |
| Listenbrainz-Playlist-Sync | Plex | A Python project that imports the 'Weekly Jams' playlist from ListenBrainz into Plex. | Mjsciarabba | [github](https://github.com/Mjsciarabba/Listenbrainz-Playlist-Sync) |
| listenbrainz-rs | Rust | ListenBrainz API bindings for Rust. | InputUsername | [github](https://github.com/InputUsername/listenbrainz-rs) |
| Listenbrainz Playlist Uploader | Playlists | Rust tool to upload M3U playlists to Listenbrainz. | Serene-Arc | [github](https://github.com/Serene-Arc/listenbrainz-playlist-uploader) |
| listenarr | Lidarr | A script to add your most played artists from ListenBrainz to your Lidarr. | Guillaume | [gitlab](https://gitlab.com/pvnkrockjesvs/listenarr) |
| ListenBrainzKit | Swift | Swift wrapper for the ListenBrainz API. | samglt | [github](https://github.com/samglt/ListenBrainzKit) |
| Navidrome\_love\_to\_ListenBrainz | Navidrome | Python script to synchronize your play history (scrobbles) from Navidrome to your ListenBrainz profile. | TheMemoman | [github](https://github.com/TheMemoman/Navidrome_love_to_ListenBrainz) |
| Navidrome\_scrobbles\_to\_ListenBrainz | Navidrome | Python script to synchronize your loved songs from Navidrome to your ListenBrainz profile. | TheMemoman | [github](https://github.com/TheMemoman/Navidrome_scrobbles_to_ListenBrainz) |
| Navidrome ListenBrainz Daily Playlist Importer | Navidrome | A Navidrome plugin to fetch daily/weekly playlists from ListenBrainz. | kgarner7 | [github](https://github.com/kgarner7/navidrome-listenbrainz-daily-playlist) |
| outsidecontext's Projects |  | git repositories/code for various MB and LB projects. | outsidecontext | [sourcehut](https://sr.ht/~phw/musicbrainz/) |
| ratingrelay | Plex | Relay ratings from Plex to ListenBrainz or Last.fm based on a defined Plex rating threshold. | hnolan | [codeberg](https://codeberg.org/hnolan/ratingrelay) |
| re-command | Navidrome | Integrates ListenBrainz recommendations into Navidrome, including auto-downloading and tagging. | Snapyou2 | [github](https://github.com/Snapyou2/re-command) |
| Scotty |  | Transfers your listens/scrobbles and favorite tracks between various music listen tracking \[e.g. ListenBrainz\] and streaming services. | outsidecontext | [sourcehut](https://git.sr.ht/~phw/scotty) |
| Sonobarr | Lidarr | Music discovery for Lidarr power users, blending Last.fm insights, ListenBrainz playlists, and a modern web UI. |  | [github](https://github.com/dodelidoo-labs/sonobarr) |
| Spotify to ListenBrainz History Import | Spotify | A small script that can import your old Spotify history to ListenBrainz. | Stefan Gehr | [gitlab](https://gitlab.com/BoostCookie/spotify-to-listenbrainz-history-import/) |
| Submit TSV from Rockbox lastfm\_scrobbler | Rockbox | Takes a TSV file as generated by the Rockbox lastfm\_scrobbler as its only argument, and submits the listening data to ListenBrainz. | rnkn | [forums](https://community.metabrainz.org/t/script-to-submit-tsv-from-rockbox-lastfm-scrobbler/724640)/[gotweb](https://rnkn.xyz/got/?action=tree&path=lbz.git) |
| Troi Recommendation Playground | Subsonic | The Troi Playlisting Engine combines all of ListenBrainz' playlist efforts: Playlist generation APIs, Local content database (resolve playlists to local files or via a Subsonic API, e.g. Navidrome, Funkwhale, Gonic), Playlist exchange (WIP) |  | [github](https://github.com/metabrainz/troi-recommendation-playground) |

**Widgets**

| **Website** | **Type** | **Info** | **Author** | **Link/s** |
| --- | --- | --- | --- | --- |
| Now-Playing |  | The "official" now-playing ListenBrainz iframe widget. | monkey | [github](https://github.com/metabrainz/listenbrainz-server/releases/tag/v-2025-04-23.0) |
| Now-Playing |  | A minimal/simple HTML and Javascript now-playing ListenBrainz widget. | jasoncrevier | [blog](https://jasoncrevier.com/listenbrainz-widget/) |
| Now-Playing | [Hugo](https://gohugo.io/) | A ready-to use module for Hugo, providing a layout and shortcode for adding a "Now Listening" ListenBrainz widget. | Alex Palaistras | [git](https://git.deuill.org/deuill/hugo-module-listenbrainz) |
| Pinned track |  | The "official" last pinned track ListenBrainz iframe widget. | monkey | [github](https://github.com/metabrainz/listenbrainz-server/releases/tag/v-2025-04-23.0) |

## AcousticBrainz tools

**Miscellaneous**

| Website | Type | Info | Author | Link/s |
| --- | --- | --- | --- | --- |
| acousticbrainz-generator |  | AcousticBrainz feature extraction using Essentia. | ahmed | [Gitea](https://git.altaiar.dev/ahmed/acousticbrainz-generator) |
| Essentia |  | Windows Essentia binaries with Gaia and Tensorflow support. | regorxxx | [essentia github](https://github.com/regorxxx/essentia)/[download github](https://github.com/regorxxx/foobar2000-assets/tree/main/essentia-2.1b6) |

## Old/defunct

- [eMusic-to-Musicbrainz import tool](http://davesmey.com/programs/autoit/emutomb.htm)
- [Advanced MusicBrainz interface](http://www.greycat.ru/musicbrainz/)
- [LinkedBrainz](https://musicbrainz.org/doc/LinkedBrainz) (RDF/SPARQL)
- [MySQL](https://musicbrainz.org/doc/MusicBrainz_MySQL)
- [Neo4j](https://github.com/redapple/sql2graph/blob/master/MUSICBRAINZ_README.md)
- DQSD (Dave's Quick Search Taskbar Toolbar Deskbar): [http://www.dqsd.net/](http://www.dqsd.net/)

This page is [transcluded](https://musicbrainz.org/doc/WikiDocs) from [External Resources](https://wiki.musicbrainz.org/External_Resources).

[Donate](https://metabrainz.org/donate)[Wiki](https://wiki.musicbrainz.org/)[Forums](https://community.metabrainz.org/)[Chat](https://musicbrainz.org/doc/Communication/ChatBrainz)[Bug tracker](http://tickets.metabrainz.org/)[Blog](https://blog.metabrainz.org/)[Mastodon](https://mastodon.social/@MusicBrainz)[Bluesky](https://bsky.app/profile/musicbrainz.org)[Use beta site](https://musicbrainz.org/set-beta-preference?returnto=%2Fdoc%2FExternal_Resources)

Brought to you by [MetaBrainz Foundation](https://metabrainz.org/) and our [sponsors](https://metabrainz.org/sponsors) and [supporters](https://metabrainz.org/supporters).

# [Developer Resources](https://musicbrainz.org/doc/Developer_Resources)

See also [Development](https://musicbrainz.org/doc/Development).

## Client libraries

[libcoverart](https://musicbrainz.org/doc/libcoverart)

Our C/C++ development library geared towards developers who wish to add cover art capabilities to their applications.

See also [official alternatives](https://musicbrainz.org/doc/libcoverart#Official_alternatives) and [third-party alternatives](https://musicbrainz.org/doc/libcoverart#Third_party_alternatives).

[libmusicbrainz](https://musicbrainz.org/doc/libmusicbrainz)

Our C/C++ development library geared towards developers who wish to add MusicBrainz lookup capabilities to their applications.

See also [third-party alternatives](https://musicbrainz.org/doc/libmusicbrainz#Third_party_alternatives).

[libdiscid](https://musicbrainz.org/doc/libdiscid)

Our C library for creating MusicBrainz disc IDs from audio CDs.

See also [language bindings](https://musicbrainz.org/doc/libdiscid#Language_Bindings) and [third party alternatives](https://musicbrainz.org/doc/libdiscid#Third_party_alternatives).

## Bots

- [https://github.com/lalinsky/musicbrainz-bot](https://github.com/lalinsky/musicbrainz-bot)
	- [https://github.com/murdos/musicbrainz-bot](https://github.com/murdos/musicbrainz-bot) (a fork of lalinsky's one)
- [https://github.com/Borewit/musicbrainz-augmentation](https://github.com/Borewit/musicbrainz-augmentation)
- [https://github.com/FelixRilling/musicbrainz-enricher](https://github.com/FelixRilling/musicbrainz-enricher)

A full list of users with the bot flag can be found on [http://musicbrainz.org/privileged](http://musicbrainz.org/privileged)

## Developer documentation

[MusicBrainz web API](https://musicbrainz.org/doc/MusicBrainz_API)

The REST-based webservice API for direct access to MusicBrainz data with output in XML and JSON (Please review the libraries above before writing your own implementation).

**See also:** [MusicBrainz API/Examples](https://musicbrainz.org/doc/MusicBrainz_API/Examples)

[Search requests](https://musicbrainz.org/doc/MusicBrainz_API/Search) and [Indexed Search Syntax](https://musicbrainz.org/doc/Indexed_Search_Syntax)

[XML RelaxNG schema](https://github.com/metabrainz/mmd-schema/blob/master/schema/musicbrainz_mmd-2.0.rng)

[Release Editor Seeding](https://musicbrainz.org/doc/Release_Editor_Seeding): Providing programmatic information to the release editor (from another site or an application), the closest we have to an edit API as yet

[**(internal)** JS autocomplete API](https://musicbrainz.org/doc/User:Kuno/ws/js)

[Server setup](https://musicbrainz.org/doc/Server_Setup)

The [MusicBrainz Server](https://musicbrainz.org/doc/MusicBrainz_Server) is not available as an executable application. Setting up the server will require you to checkout the source code and follow the INSTALL file's instructions.

The [MusicBrainz Database](https://musicbrainz.org/doc/MusicBrainz_Database) contains all the metadata information available on musicbrainz.org and it's free for anyone to [download](https://musicbrainz.org/doc/MusicBrainz_Database/Download) and make use of it (and we encourage this!). Setting it up will require access to a PostgreSQL database. See instructions from [server setup](https://musicbrainz.org/doc/Server_Setup) or use third-party [\[1\]](https://pypi.org/project/mbdata/).

[Server environment variables that may prove useful](https://musicbrainz.org/doc/Development/MusicBrainz_Server_Environment_Variables)

[Search Server Setup](https://github.com/metabrainz/mb-solr) and [Search Indexer Setup](https://github.com/metabrainz/sir) if you're brave enough to want to try.

Embedded metadata

[Picard Tag Mapping](https://picard.musicbrainz.org/docs/mappings/): The documentation for how [Picard](https://musicbrainz.org/doc/Picard) maps concepts to tags; useful if you want to use these tags elsewhere, or if you'd like to follow the same standard.

See also: [ID3v2.4.0](https://musicbrainz.org/doc/ID3v2.4.0)

[Disc IDs and Tagging](https://musicbrainz.org/doc/Disc_IDs_and_Tagging)

[MusicBrainz Identifier](https://musicbrainz.org/doc/MusicBrainz_Identifier)

[Picard](https://musicbrainz.org/doc/Picard) Development

[Plugin API Documentation](https://picard.musicbrainz.org/docs/plugin-api/)

[Picard Tag Mapping](https://picard.musicbrainz.org/docs/mappings/)

[Building on Windows](https://picard.musicbrainz.org/docs/build-windows/)

[Building on macOS](https://picard.musicbrainz.org/docs/build-osx/)

Communicating with other developers

[IRC](https://musicbrainz.org/doc/IRC): Here's where you ask questions of real live people, if anyone's awake. You love it, you know it.

[Forum](https://community.metabrainz.org/): And here's where you ask if we aren't awake, or for anything style-related or needing more consideration than can be easily given in IRC.

[MusicBrainz Summits](https://musicbrainz.org/doc/MusicBrainz_Summit): These happen occasionally, and people get together and talk about MusicBrainz. You should consider coming! Even if not, the discussions had here are sometimes important, and might be worth perusing.

[The Musicbrainz bug tracker](https://tickets.musicbrainz.org/)

This page is [transcluded](https://musicbrainz.org/doc/WikiDocs) from revision [#77143](https://wiki.musicbrainz.org/Developer_Resources?oldid=77143) of [Developer Resources](https://wiki.musicbrainz.org/Developer_Resources).

[Donate](https://metabrainz.org/donate)[Wiki](https://wiki.musicbrainz.org/)[Forums](https://community.metabrainz.org/)[Chat](https://musicbrainz.org/doc/Communication/ChatBrainz)[Bug tracker](http://tickets.metabrainz.org/)[Blog](https://blog.metabrainz.org/)[Mastodon](https://mastodon.social/@MusicBrainz)[Bluesky](https://bsky.app/profile/musicbrainz.org)[Use beta site](https://musicbrainz.org/set-beta-preference?returnto=%2Fdoc%2FDeveloper_Resources)

Brought to you by [MetaBrainz Foundation](https://metabrainz.org/) and our [sponsors](https://metabrainz.org/sponsors) and [supporters](https://metabrainz.org/supporters).
