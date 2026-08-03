---
tags:
  - guides
---
# SingleFile Config Guide

This file explains what your SingleFile configuration is, how the main settings work, and what your current profile is optimized for. At the bottom, it includes your config code so you can keep the explanation and the source together. [file:41][file:42]

## What this file is

These attached files are **SingleFile extension configuration exports**. SingleFile is a browser extension that saves a full web page into one self-contained HTML file, and this JSON controls how it captures resources, names files, strips unused content, and decides where saves go. [file:41][file:42]

Your config contains multiple profiles, including `__Default_Settings__, eliana, markdown`. The profile that looks like your personal working profile is `eliana`, alongside a `__Default_Settings__` baseline and at least one specialized profile such as `markdown`. [file:41]

## Reading your setup

The overall pattern of your config is practical and archive-focused: background saving is enabled, lazy images are loaded before saving, scripts/videos/audio are often blocked in the stricter profiles, duplicate and unused assets are cleaned up, and file naming is controlled with a template. [file:41][file:42]

One notable difference across profiles is that `__Default_Settings__` in one export uses `compressContent: true` and `extractDataFromPage: true`, while your other export and named profiles like `eliana` and `markdown` lean toward `compressContent: false` and `extractDataFromPage: false`, which is a more conservative setup for predictable output. [file:41][file:42]

## Main profile notes

Your `eliana` profile appears tuned for clean offline page captures: `blockScripts` is `true`, `blockAudios` is `true`, `blockVideos` is `true`, `loadDeferredImages` is `true`, `compressHTML` is `true`, and cleanup options such as `removeHiddenElements`, `removeUnusedFonts`, and `removeUnusedStyles` are enabled. [file:41][file:42]

Your `markdown` profile is more permissive: scripts, audio, and video are not blocked there, `saveOriginalURLs` is enabled, the filename template is simplified to `{page-title}_{date-iso}.{filename-extension}`, and the infobar template includes title, URL, and date. That suggests it is meant for a different kind of archival workflow than your stricter general profile. [file:41]

## Saving behavior

- `backgroundSave` = `True` — Saves in the background so the tab can stay usable while SingleFile works. [file:41]
- `autoClose` = `False` — Closes the tab automatically after saving if enabled. [file:41]
- `autoOpenEditor` = `False` — Opens the built-in editor immediately after capture when enabled. [file:41]
- `autoSaveDelay` = `1` — Wait time before an autosave starts. [file:41]
- `autoSaveLoadOrUnload` = `True` — Triggers autosave when a page loads or unloads; this is one of the main automation switches. [file:41]
- `autoSaveLoad` = `False` — Autosaves on load only. [file:41]
- `autoSaveUnload` = `False` — Autosaves on unload only. [file:41]
- `autoSaveRepeat` = `False` — Repeats autosaves on a schedule. [file:41]
- `autoSaveRepeatDelay` = `10` — Delay in seconds/minutes between repeated autosaves, depending on app behavior. [file:41]
- `autoSaveExternalSave` = `False` — Allows autosave to work with external save targets. [file:41]
- `autoSaveDiscard` = `False` — Discards autosaved pages instead of keeping them if enabled. [file:41]
- `autoSaveRemove` = `False` — Removes previous autosaved content if enabled. [file:41]

## Blocking and capture

- `blockAlternativeImages` = `True` — Blocks alternate image candidates, usually to reduce extra downloads. [file:41]
- `blockAudios` = `True` — Prevents audio resources from being embedded. [file:41]
- `blockFonts` = `False` — Prevents webfonts from being downloaded and embedded. [file:41]
- `blockImages` = `False` — Prevents images from being downloaded and embedded. [file:41]
- `blockMixedContent` = `False` — Blocks insecure HTTP subresources on HTTPS pages. [file:41]
- `blockScripts` = `True` — Blocks JavaScript during capture to reduce breakage, tracking, or dynamic changes. [file:41]
- `blockStylesheets` = `False` — Prevents stylesheets from loading; usually not ideal unless you want a raw page. [file:41]
- `blockVideos` = `True` — Prevents video resources from being embedded. [file:41]
- `loadDeferredImages` = `True` — Attempts to load lazy images before saving so they appear in the archive. [file:41]
- `loadDeferredImagesBeforeFrames` = `False` — Loads deferred images before iframe/frame processing. [file:41]
- `loadDeferredImagesBlockCookies` = `False` — Blocks cookies while loading lazy images. [file:41]
- `loadDeferredImagesBlockStorage` = `False` — Blocks local/session storage while loading lazy images. [file:41]
- `loadDeferredImagesDispatchScrollEvent` = `False` — Fakes scroll events to trigger lazy loaders. [file:41]
- `loadDeferredImagesKeepZoomLevel` = `False` — Preserves current zoom while deferred images are loaded. [file:41]
- `loadDeferredImagesMaxIdleTime` = `1500` — Maximum wait time for lazy images to settle before SingleFile moves on. [file:41]

## Compression and cleanup

- `compressCSS` = `False` — Minifies CSS specifically. [file:41]
- `compressContent` = `False` — Compresses embedded content more aggressively to reduce file size. [file:41]
- `compressHTML` = `True` — Minifies HTML output. [file:41]
- `disableCompression` = `False` — Master kill switch for compression features. [file:41]
- `groupDuplicateImages` = `True` — Deduplicates repeated images to reduce archive size. [file:41]
- `groupDuplicateStylesheets` = `False` — Deduplicates repeated stylesheets to reduce archive size. [file:41]
- `removeAlternativeFonts` = `True` — Removes alternate font sources that are not needed in final output. [file:41]
- `removeAlternativeImages` = `True` — Removes alternate image variants not selected for the saved page. [file:41]
- `removeAlternativeMedias` = `True` — Removes unused media alternatives like unused video/audio candidates. [file:41]
- `removeFrames` = `False` — Removes frames/iframes from the saved page. [file:41]
- `removeHiddenElements` = `True` — Removes hidden DOM elements that are not visible. [file:41]
- `removeNoScriptTags` = `True` — Removes noscript blocks from the final archive. [file:41]
- `removeSavedDate` = `False` — Omits saved-date metadata from the output if enabled. [file:41]
- `removeUnusedFonts` = `True` — Strips font data that appears unused in the final page. [file:41]
- `removeUnusedStyles` = `True` — Strips CSS rules that appear unused in the final page. [file:41]

## Filename and metadata

- `filenameTemplate` = `%if-empty<{page-title}|No title> ({date-locale} {time-locale}).{filename-extension}` — Template used to name saved files. [file:41]
- `filenameConflictAction` = `uniquify` — What SingleFile does when a filename already exists. [file:41]
- `filenameMaxLength` = `192` — Maximum filename length before truncation. [file:41]
- `filenameMaxLengthUnit` = `bytes` — Whether the max length is counted as bytes or characters. [file:41]
- `filenameReplacementCharacter` = `_` — Character used when illegal filename characters are replaced. [file:41]
- `replaceEmojisInFilename` = `False` — Replaces emoji in filenames for compatibility if enabled. [file:41]
- `saveOriginalURLs` = `False` — Preserves original resource URLs in the saved output metadata. [file:41]
- `saveFilenameTemplateData` = `False` — Stores extra metadata used to build the filename template. [file:41]
- `saveFavicon` = `True` — Keeps the page favicon in the saved file. [file:41]
- `insertMetaCSP` = `True` — Adds a Content Security Policy meta tag to the saved file. [file:41]
- `insertMetaNoIndex` = `False` — Adds a noindex meta tag so saved pages are less likely to be indexed. [file:41]
- `insertSingleFileComment` = `True` — Inserts a SingleFile signature comment into the saved HTML. [file:41]
- `extractDataFromPage` = `False` — Extracts page data for template variables and metadata. [file:41]

## Display and UI

- `applySystemTheme` = `True` — Makes the extension UI follow the system light/dark theme. [file:41]
- `browserActionMenuEnabled` = `True` — Enables the toolbar button menu. [file:41]
- `contextMenuEnabled` = `True` — Enables right-click context menu entries. [file:41]
- `tabMenuEnabled` = `True` — Enables tab-related menu integration. [file:41]
- `progressBarEnabled` = `True` — Shows progress while a save is running. [file:41]
- `displayInfobar` = `True` — Displays an infobar in saved pages or during processing, depending on context. [file:41]
- `displayInfobarInEditor` = `False` — Shows the infobar inside the editor view. [file:41]
- `displayStats` = `False` — Shows size/statistics information. [file:41]
- `shadowEnabled` = `True` — Enables UI shadow styling in the extension. [file:41]
- `warnUnsavedPage` = `True` — Warns when leaving a page that may not be saved. [file:41]

## Output and destination

- `saveToClipboard` = `False` — Copies the saved output to clipboard instead of or in addition to a file. [file:41]
- `saveToDropbox` = `False` — Uses Dropbox as a save target. [file:41]
- `saveToGDrive` = `False` — Uses Google Drive as a save target. [file:41]
- `saveToGitHub` = `False` — Uses GitHub as a save target. [file:41]
- `saveToRestFormApi` = `False` — Posts saved data to a REST form API. [file:41]
- `saveToS3` = `False` — Uses Amazon S3 as a save target. [file:41]
- `saveWithCompanion` = `False` — Uses a local companion app/helper for saving. [file:41]
- `saveWithMCP` = `False` — Uses MCP integration as a save path. [file:41]
- `saveWithWebDAV` = `False` — Uses a WebDAV server as a save target. [file:41]
- `sharePage` = `False` — Enables page sharing features if supported. [file:41]
- `openSavedPage` = `False` — Opens the saved result automatically after capture. [file:41]
- `selfExtractingArchive` = `False` — Saves as a self-extracting archive format rather than a plain HTML archive. [file:41]

## Advanced

- `defaultEditorMode` = `normal` — Sets the editor mode SingleFile opens in by default. [file:41]
- `networkTimeout` = `0` — Network timeout for resource fetches; 0 usually means default/no explicit limit. [file:41]
- `maxResourceSize` = `10` — Maximum allowed resource size, usually in MB. [file:41]
- `maxResourceSizeEnabled` = `False` — Turns the resource-size limit on or off. [file:41]
- `maxSizeDuplicateImages` = `524288` — Size threshold used when deduplicating images. [file:41]
- `contentWidth` = `70` — Preferred content width in the reading/editor layout. [file:41]
- `resolveLinks` = `True` — Rewrites or resolves links for saved-page consistency. [file:41]
- `resolveFragmentIdentifierURLs` = `False` — Normalizes anchor/fragment URLs. [file:41]
- `passReferrerOnError` = `False` — Passes referrer info when retrying or handling failed requests. [file:41]
- `preventAppendedData` = `False` — Prevents extra data from being appended to existing files. [file:41]
- `userScriptEnabled` = `False` — Allows custom user scripts during processing. [file:41]
- `moveStylesInHead` = `False` — Moves style elements into the head for cleaner structure. [file:41]

## Rules and globals

The config also has `rules`, `maxParallelWorkers`, and `processInForeground` at the top level. Your rules shown here target `file:` URLs with the default profile and a disabled autosave profile, `maxParallelWorkers` is set to `10`, and `processInForeground` is set to `False`. [file:41][file:42]

## Quick interpretation

In plain language, your main setup is optimized for **stable, lighter, less noisy archives** rather than perfect playback of interactive media-heavy pages. Blocking scripts/audio/video while keeping images and lazy-image loading is a sensible balance for saving readable snapshots of web pages. [file:41][file:42]

The biggest choices shaping your results are the filename template, script blocking, deferred image loading, aggressive cleanup of unused resources, and whether `selfExtractingArchive` is on or off in a given profile. Those settings do the most to affect reliability, file size, and readability. [file:41][file:42]

## Your config code

Below is your config code preserved in a fenced code block for reference. [file:41][file:42]

```json
{
  "profiles": {
    "__Default_Settings__": {
      "S3AccessKey": "",
      "S3Bucket": "",
      "S3Domain": "s3.amazonaws.com",
      "S3Region": "",
      "S3SecretKey": "",
      "_migratedTemplateFormat": true,
      "acceptHeaders": {
        "audio": "audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,application/ogg;q=0.7,video/*;q=0.6,*/*;q=0.5",
        "document": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "font": "application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8",
        "image": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "script": "*/*",
        "stylesheet": "text/css,*/*;q=0.1",
        "video": "video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5"
      },
      "addProof": false,
      "allowedBookmarkFolders": [
        "",
        ""
      ],
      "applySystemTheme": true,
      "autoClose": false,
      "autoOpenEditor": false,
      "autoSaveDelay": 1,
      "autoSaveDiscard": false,
      "autoSaveExternalSave": false,
      "autoSaveLoad": false,
      "autoSaveLoadOrUnload": true,
      "autoSaveRemove": false,
      "autoSaveRepeat": false,
      "autoSaveRepeatDelay": 10,
      "autoSaveUnload": false,
      "backgroundSave": true,
      "blockAlternativeImages": true,
      "blockAudios": true,
      "blockFonts": false,
      "blockImages": false,
      "blockMixedContent": false,
      "blockScripts": true,
      "blockStylesheets": false,
      "blockVideos": true,
      "browserActionMenuEnabled": true,
      "compressCSS": false,
      "compressContent": true,
      "compressHTML": true,
      "confirmFilename": false,
      "confirmInfobarContent": false,
      "contentWidth": "70",
      "contextMenuEnabled": true,
      "createRootDirectory": false,
      "customShortcut": null,
      "defaultEditorMode": "normal",
      "delayAfterProcessing": 0,
      "delayBeforeProcessing": 0,
      "disableCompression": false,
      "displayInfobar": true,
      "displayInfobarInEditor": false,
      "displayStats": false,
      "extractDataFromPage": true,
      "filenameConflictAction": "uniquify",
      "filenameMaxLength": "192",
      "filenameMaxLengthUnit": "bytes",
      "filenameReplacedCharacters": [
        "~",
        "+",
        "?",
        "%",
        "*",
        ":",
        "|",
        "\"",
        "<",
        ">",
        "\\\\",
        "\u0000-\u001f",
        "",
        "~",
        "+",
        "?",
        "%",
        "*",
        ":",
        "|",
        "\"",
        "<",
        ">",
        "\\\\",
        "\u0000-\u001f",
        ""
      ],
      "filenameReplacementCharacter": "_",
      "filenameReplacementCharacters": [
        "～",
        "＋",
        "？",
        "％",
        "＊",
        "：",
        "｜",
        "＂",
        "＜",
        "＞",
        "＼",
        "～",
        "＋",
        "？",
        "％",
        "＊",
        "：",
        "｜",
        "＂",
        "＜",
        "＞",
        "＼"
      ],
      "filenameTemplate": "%if-empty<{page-title}|No title> ({date-locale} {time-locale}).{filename-extension}",
      "forceWebAuthFlow": false,
      "githubBranch": "main",
      "githubRepository": "SingleFile-Archives",
      "githubToken": "",
      "githubUser": "",
      "groupDuplicateImages": true,
      "groupDuplicateStylesheets": false,
      "ignoredBookmarkFolders": [
        "",
        ""
      ],
      "imageReductionFactor": "1",
      "includeBOM": false,
      "includeInfobar": false,
      "infobarPositionAbsolute": false,
      "infobarPositionBottom": "",
      "infobarPositionLeft": "",
      "infobarPositionRight": "16px",
      "infobarPositionTop": "16px",
      "infobarTemplate": "",
      "insertEmbeddedImage": false,
      "insertEmbeddedScreenshotImage": false,
      "insertMetaCSP": true,
      "insertMetaNoIndex": false,
      "insertSingleFileComment": true,
      "insertTextBody": false,
      "loadDeferredImages": true,
      "loadDeferredImagesBeforeFrames": false,
      "loadDeferredImagesBlockCookies": false,
      "loadDeferredImagesBlockStorage": false,
      "loadDeferredImagesDispatchScrollEvent": false,
      "loadDeferredImagesKeepZoomLevel": false,
      "loadDeferredImagesMaxIdleTime": 1500,
      "logsEnabled": true,
      "maxResourceSize": 10,
      "maxResourceSizeEnabled": false,
      "maxSizeDuplicateImages": 524288,
      "mcpAuthToken": "",
      "mcpServerUrl": "",
      "moveStylesInHead": false,
      "networkTimeout": 0,
      "openEditor": false,
      "openInfobar": false,
      "openSavedPage": false,
      "passReferrerOnError": false,
      "password": "",
      "preventAppendedData": false,
      "progressBarEnabled": true,
      "removeAlternativeFonts": true,
      "removeAlternativeImages": true,
      "removeAlternativeMedias": true,
      "removeFrames": false,
      "removeHiddenElements": true,
      "removeNoScriptTags": true,
      "removeSavedDate": false,
      "removeUnusedFonts": true,
      "removeUnusedStyles": true,
      "removedElementsSelector": "",
      "replaceBookmarkURL": true,
      "replaceEmojisInFilename": false,
      "resolveFragmentIdentifierURLs": false,
      "resolveLinks": true,
      "saveCreatedBookmarks": false,
      "saveFavicon": true,
      "saveFilenameTemplateData": false,
      "saveOriginalURLs": false,
      "saveRawPage": false,
      "saveToClipboard": false,
      "saveToDropbox": false,
      "saveToGDrive": false,
      "saveToGitHub": false,
      "saveToRestFormApi": false,
      "saveToRestFormApiFileFieldName": "",
      "saveToRestFormApiToken": "",
      "saveToRestFormApiUrl": "",
      "saveToRestFormApiUrlFieldName": "",
      "saveToS3": false,
      "saveWithCompanion": false,
      "saveWithMCP": false,
      "saveWithWebDAV": false,
      "selfExtractingArchive": true,
      "shadowEnabled": true,
      "sharePage": false,
      "tabMenuEnabled": true,
      "userScriptEnabled": false,
      "warnUnsavedPage": true,
      "webDAVPassword": "",
      "webDAVURL": "",
      "webDAVUser": "",
      "woleetKey": ""
    },
    "eliana": {
      "S3AccessKey": "",
      "S3Bucket": "",
      "S3Domain": "s3.amazonaws.com",
      "S3Region": "",
      "S3SecretKey": "",
      "_migratedTemplateFormat": true,
      "acceptHeaders": {
        "audio": "audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,application/ogg;q=0.7,video/*;q=0.6,*/*;q=0.5",
        "document": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "font": "application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8",
        "image": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "script": "*/*",
        "stylesheet": "text/css,*/*;q=0.1",
        "video": "video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5"
      },
      "addProof": false,
      "allowedBookmarkFolders": [
        "",
        ""
      ],
      "applySystemTheme": true,
      "autoClose": false,
      "autoOpenEditor": false,
      "autoSaveDelay": 1,
      "autoSaveDiscard": false,
      "autoSaveExternalSave": false,
      "autoSaveLoad": false,
      "autoSaveLoadOrUnload": true,
      "autoSaveRemove": false,
      "autoSaveRepeat": false,
      "autoSaveRepeatDelay": 10,
      "autoSaveUnload": false,
      "backgroundSave": true,
      "blockAlternativeImages": true,
      "blockAudios": true,
      "blockFonts": false,
      "blockImages": false,
      "blockMixedContent": false,
      "blockScripts": true,
      "blockStylesheets": false,
      "blockVideos": true,
      "browserActionMenuEnabled": true,
      "compressCSS": false,
      "compressContent": false,
      "compressHTML": true,
      "confirmFilename": false,
      "confirmInfobarContent": false,
      "contentWidth": "70",
      "contextMenuEnabled": true,
      "createRootDirectory": false,
      "customShortcut": null,
      "defaultEditorMode": "normal",
      "delayAfterProcessing": 0,
      "delayBeforeProcessing": 0,
      "disableCompression": false,
      "displayInfobar": true,
      "displayInfobarInEditor": false,
      "displayStats": false,
      "extractDataFromPage": false,
      "filenameConflictAction": "uniquify",
      "filenameMaxLength": "192",
      "filenameMaxLengthUnit": "bytes",
      "filenameReplacedCharacters": [
        "~",
        "+",
        "?",
        "%",
        "*",
        ":",
        "|",
        "\"",
        "<",
        ">",
        "\\\\",
        "\u0000-\u001f",
        "",
        "~",
        "+",
        "?",
        "%",
        "*",
        ":",
        "|",
        "\"",
        "<",
        ">",
        "\\\\",
        "\u0000-\u001f",
        ""
      ],
      "filenameReplacementCharacter": "_",
      "filenameReplacementCharacters": [
        "～",
        "＋",
        "？",
        "％",
        "＊",
        "：",
        "｜",
        "＂",
        "＜",
        "＞",
        "＼",
        "～",
        "＋",
        "？",
        "％",
        "＊",
        "：",
        "｜",
        "＂",
        "＜",
        "＞",
        "＼"
      ],
      "filenameTemplate": "%if-empty<{page-title}|No title> ({date-locale} {time-locale}).{filename-extension}",
      "forceWebAuthFlow": false,
      "githubBranch": "main",
      "githubRepository": "SingleFile-Archives",
      "githubToken": "",
      "githubUser": "",
      "groupDuplicateImages": true,
      "groupDuplicateStylesheets": false,
      "ignoredBookmarkFolders": [
        "",
        ""
      ],
      "imageReductionFactor": "1",
      "includeBOM": false,
      "includeInfobar": false,
      "infobarPositionAbsolute": false,
      "infobarPositionBottom": "",
      "infobarPositionLeft": "",
      "infobarPositionRight": "16px",
      "infobarPositionTop": "16px",
      "infobarTemplate": "",
      "insertEmbeddedImage": false,
      "insertEmbeddedScreenshotImage": false,
      "insertMetaCSP": true,
      "insertMetaNoIndex": false,
      "insertSingleFileComment": true,
      "insertTextBody": false,
      "loadDeferredImages": true,
      "loadDeferredImagesBeforeFrames": false,
      "loadDeferredImagesBlockCookies": false,
      "loadDeferredImagesBlockStorage": false,
      "loadDeferredImagesDispatchScrollEvent": false,
      "loadDeferredImagesKeepZoomLevel": false,
      "loadDeferredImagesMaxIdleTime": 1500,
      "logsEnabled": true,
      "maxResourceSize": 10,
      "maxResourceSizeEnabled": false,
      "maxSizeDuplicateImages": 524288,
      "mcpAuthToken": "",
      "mcpServerUrl": "",
      "moveStylesInHead": false,
      "networkTimeout": 0,
      "openEditor": false,
      "openInfobar": false,
      "openSavedPage": false,
      "passReferrerOnError": false,
      "password": "",
      "preventAppendedData": false,
      "progressBarEnabled": true,
      "removeAlternativeFonts": true,
      "removeAlternativeImages": true,
      "removeAlternativeMedias": true,
      "removeFrames": false,
      "removeHiddenElements": true,
      "removeNoScriptTags": true,
      "removeSavedDate": false,
      "removeUnusedFonts": true,
      "removeUnusedStyles": true,
      "removedElementsSelector": "",
      "replaceBookmarkURL": true,
      "replaceEmojisInFilename": false,
      "resolveFragmentIdentifierURLs": false,
      "resolveLinks": true,
      "saveCreatedBookmarks": false,
      "saveFavicon": true,
      "saveFilenameTemplateData": false,
      "saveOriginalURLs": false,
      "saveRawPage": false,
      "saveToClipboard": false,
      "saveToDropbox": false,
      "saveToGDrive": false,
      "saveToGitHub": false,
      "saveToRestFormApi": false,
      "saveToRestFormApiFileFieldName": "",
      "saveToRestFormApiToken": "",
      "saveToRestFormApiUrl": "",
      "saveToRestFormApiUrlFieldName": "",
      "saveToS3": false,
      "saveWithCompanion": false,
      "saveWithMCP": false,
      "saveWithWebDAV": false,
      "selfExtractingArchive": false,
      "shadowEnabled": true,
      "sharePage": false,
      "tabMenuEnabled": true,
      "userScriptEnabled": false,
      "warnUnsavedPage": true,
      "webDAVPassword": "",
      "webDAVURL": "",
      "webDAVUser": "",
      "woleetKey": ""
    },
    "markdown": {
      "S3AccessKey": "",
      "S3Bucket": "",
      "S3Domain": "s3.amazonaws.com",
      "S3Region": "",
      "S3SecretKey": "",
      "_migratedTemplateFormat": true,
      "acceptHeaders": {
        "audio": "audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,application/ogg;q=0.7,video/*;q=0.6,*/*;q=0.5",
        "document": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "font": "application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8",
        "image": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "script": "*/*",
        "stylesheet": "text/css,*/*;q=0.1",
        "video": "video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5"
      },
      "addProof": false,
      "allowedBookmarkFolders": [
        ""
      ],
      "applySystemTheme": true,
      "autoClose": false,
      "autoOpenEditor": false,
      "autoSaveDelay": 1,
      "autoSaveDiscard": false,
      "autoSaveExternalSave": false,
      "autoSaveLoad": false,
      "autoSaveLoadOrUnload": true,
      "autoSaveRemove": false,
      "autoSaveRepeat": false,
      "autoSaveRepeatDelay": 10,
      "autoSaveUnload": false,
      "backgroundSave": true,
      "blockAlternativeImages": true,
      "blockAudios": false,
      "blockFonts": false,
      "blockImages": false,
      "blockMixedContent": false,
      "blockScripts": false,
      "blockStylesheets": false,
      "blockVideos": false,
      "browserActionMenuEnabled": true,
      "compressCSS": false,
      "compressContent": false,
      "compressHTML": true,
      "confirmFilename": false,
      "confirmInfobarContent": false,
      "contentWidth": "70",
      "contextMenuEnabled": true,
      "createRootDirectory": false,
      "customShortcut": null,
      "defaultEditorMode": "normal",
      "delayAfterProcessing": 0,
      "delayBeforeProcessing": 0,
      "disableCompression": false,
      "displayInfobar": true,
      "displayInfobarInEditor": false,
      "displayStats": false,
      "extractDataFromPage": false,
      "filenameConflictAction": "uniquify",
      "filenameMaxLength": "192",
      "filenameMaxLengthUnit": "bytes",
      "filenameReplacedCharacters": [
        "~",
        "+",
        "?",
        "%",
        "*",
        ":",
        "|",
        "\"",
        "<",
        ">",
        "\\\\",
        "\u0000-\u001f",
        ""
      ],
      "filenameReplacementCharacter": "_",
      "filenameReplacementCharacters": [
        "～",
        "＋",
        "？",
        "％",
        "＊",
        "：",
        "｜",
        "＂",
        "＜",
        "＞",
        "＼"
      ],
      "filenameTemplate": "{page-title}_{date-iso}.{filename-extension}",
      "forceWebAuthFlow": false,
      "githubBranch": "main",
      "githubRepository": "SingleFile-Archives",
      "githubToken": "",
      "githubUser": "",
      "groupDuplicateImages": true,
      "groupDuplicateStylesheets": false,
      "ignoredBookmarkFolders": [
        ""
      ],
      "imageReductionFactor": "1",
      "includeBOM": false,
      "includeInfobar": false,
      "infobarPositionAbsolute": false,
      "infobarPositionBottom": "",
      "infobarPositionLeft": "",
      "infobarPositionRight": "16px",
      "infobarPositionTop": "16px",
      "infobarTemplate": "Title: {page-title} {url-href} ({date-iso})",
      "insertEmbeddedImage": false,
      "insertEmbeddedScreenshotImage": false,
      "insertMetaCSP": true,
      "insertMetaNoIndex": false,
      "insertSingleFileComment": true,
      "insertTextBody": false,
      "loadDeferredImages": true,
      "loadDeferredImagesBeforeFrames": false,
      "loadDeferredImagesBlockCookies": false,
      "loadDeferredImagesBlockStorage": false,
      "loadDeferredImagesDispatchScrollEvent": false,
      "loadDeferredImagesKeepZoomLevel": false,
      "loadDeferredImagesMaxIdleTime": 1500,
      "logsEnabled": true,
      "maxResourceSize": 10,
      "maxResourceSizeEnabled": false,
      "maxSizeDuplicateImages": 524288,
      "mcpAuthToken": "",
      "mcpServerUrl": "",
      "moveStylesInHead": false,
      "networkTimeout": 0,
      "openEditor": false,
      "openInfobar": false,
      "openSavedPage": false,
      "passReferrerOnError": false,
      "password": "",
      "preventAppendedData": false,
      "progressBarEnabled": true,
      "removeAlternativeFonts": true,
      "removeAlternativeImages": true,
      "removeAlternativeMedias": true,
      "removeFrames": false,
      "removeHiddenElements": true,
      "removeNoScriptTags": true,
      "removeSavedDate": false,
      "removeUnusedFonts": true,
      "removeUnusedStyles": true,
      "removedElementsSelector": "",
      "replaceBookmarkURL": true,
      "replaceEmojisInFilename": false,
      "resolveFragmentIdentifierURLs": false,
      "resolveLinks": true,
      "saveCreatedBookmarks": false,
      "saveFavicon": true,
      "saveFilenameTemplateData": false,
      "saveOriginalURLs": true,
      "saveRawPage": false,
      "saveToClipboard": false,
      "saveToDropbox": false,
      "saveToGDrive": false,
      "saveToGitHub": false,
      "saveToRestFormApi": false,
      "saveToRestFormApiFileFieldName": "",
      "saveToRestFormApiToken": "",
      "saveToRestFormApiUrl": "",
      "saveToRestFormApiUrlFieldName": "",
      "saveToS3": false,
      "saveWithCompanion": false,
      "saveWithMCP": false,
      "saveWithWebDAV": false,
      "selfExtractingArchive": false,
      "shadowEnabled": true,
      "sharePage": false,
      "tabMenuEnabled": true,
      "userScriptEnabled": false,
      "warnUnsavedPage": true,
      "webDAVPassword": "",
      "webDAVURL": "",
      "webDAVUser": "",
      "woleetKey": ""
    }
  },
  "rules": [
    {
      "autoSaveProfile": "__Disabled_Settings__",
      "profile": "__Default_Settings__",
      "url": "file:"
    },
    {
      "autoSaveProfile": "__Disabled_Settings__",
      "profile": "__Default_Settings__",
      "url": "file:"
    }
  ],
  "maxParallelWorkers": 10,
  "processInForeground": false
}
```