# can you explain the terminology for using something via jsdeliver as an alternate option to installing that "something" on your computer

When you use jsDelivr (or any CDN) instead of installing something locally, you're choosing between two different approaches to including libraries in your project.[^1][^2]

## Key Terminology

**Local installation** means downloading and storing the library files on your own server or in your project directory (like when you `npm install` a package). **CDN (Content Delivery Network) hosting** means linking to library files hosted on an external server via a URL (like `https://cdn.jsdelivr.net/npm/package-name`).[^2][^5][^1]

## How It Works

When you use a CDN link, your HTML references an external URL instead of a local file path. The library is fetched from the CDN's servers (often geographically distributed edge servers) when users visit your page. With local installation, the library files live alongside your other project files and are served from your own domain.[^5][^1][^2]

## Trade-offs

**CDN advantages:**

```
- No installation or build process needed - just add a `<script>` or `<link>` tag[^6]
```

- Potential browser caching if users visited other sites using the same CDN resource[^2]
- jsDelivr specifically uses a multi-CDN approach with automatic failover across providers like Cloudflare and Fastly[^5]

**Local installation advantages:**

- Complete control over versions and availability[^1]
- No dependency on third-party server uptime[^4]
- Fewer network requests across different domains[^4]
- Works offline during development[^1]

Many developers use CDNs for quick prototyping and experimentation, then switch to local copies for production to reduce external dependencies.[^6]
<span style="display:none">[^3][^7][^8]</span>

<div align="center">⁂</div>

[^1]: https://stackoverflow.com/questions/42591235/is-it-better-to-use-cdn-for-js-and-similar-resources-vs-local

[^2]: https://www.reddit.com/r/learnjavascript/comments/mkh0tp/js_from_a_cdn_vs_local/

[^3]: https://processwire.com/talk/topic/17938-best-way-to-load-js-libraries-from-cdn-or-local/

[^4]: https://news.ycombinator.com/item?id=7428803

[^5]: https://blog.blazingcdn.com/en-us/jsdelivr-vs-unpkg-vs-cdnjs-best-free-cdn-for-open-source-projects

[^6]: https://dev.to/pvcodes/should-we-use-cdn-or-locally-download-libraies-db6

[^7]: https://meta.discourse.org/t/should-i-load-third-party-libraries-from-vendor-or-cdn/205357?tl=en

[^8]: https://community.latenode.com/t/cdn-vs-package-managers-why-do-developers-still-use-direct-links-for-bootstrap-jquery/36537

