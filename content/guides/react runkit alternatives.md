---
tags:
  - guides
---

<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# i need alternatives to [https://github.com/runkitdev/react-runkit](https://github.com/runkitdev/react-runkit)

You can replace `react-runkit` with more general React-based code playground/embed components, especially if you mainly need “edit + run + preview” rather than full RunKit’s Node environment.[^1_1][^1_2]

## React-focused embeds

- @codesandbox/sandpack-react – CodeSandbox’s official React playground toolkit; gives you an embeddable `<Sandpack />` component with live editor + preview, npm deps, theming, and composable primitives so you can style it to match your site.[^1_1]
- component-playground – A small React component (used in the linked CodeSandbox) that renders a React component plus editable source with live preview; good if your use case is specifically React UI demos rather than arbitrary Node scripts.[^1_2]


## General JS playground embeds

- CodePen – Offers embeddable pens you can drop into React via `<iframe>`; supports HTML/CSS/JS and frameworks, but not a Node backend like RunKit.[^1_3]
- JSFiddle – Similar to CodePen, with React boilerplates available and simple embed snippets you can wrap in a React component.[^1_4][^1_3]
- StackBlitz – Full online IDE with embeddable projects; works well for more complex examples, though the embed is usually iframe-based rather than a tiny component wrapper.[^1_5][^1_3]


## Notebook-style / REPL alternatives

- Scribbler JavaScript Notebook – Browser-based JS notebook, open source; can be self‑hosted and embedded for “notebook-like” interactive docs, though you may need to wire your own React wrapper.[^1_6]
- Nodebook – Self‑hosted, multi-language in-browser REPL; again, closer to RunKit conceptually, but you embed via its web UI rather than a ready-made React component.[^1_6]

If you describe your exact needs (Node vs browser-only, need npm, need serverless endpoints vs just UI demos, SSR constraints), a more tailored pick or small wrapper component around one of these is possible.
<span style="display:none">[^1_10][^1_11][^1_12][^1_13][^1_14][^1_15][^1_16][^1_17][^1_18][^1_19][^1_20][^1_21][^1_22][^1_23][^1_24][^1_25][^1_26][^1_27][^1_7][^1_8][^1_9]</span>

<div align="center">⁂</div>

[^1_1]: https://dev.to/salehmubashar/create-a-dynamic-code-playground-with-sandpack-react-3na5

[^1_2]: https://codesandbox.io/p/sandbox/trusting-poitras-lxjnk6w7om

[^1_3]: https://dev.to/robertshaw/20-javascript-playgrounds-to-use-in-2019-455c

[^1_4]: https://jsfiddle.net/boilerplate/react-jsx

[^1_5]: https://github.com/orgs/community/discussions/141424

[^1_6]: https://alternativeto.net/software/runkit/

[^1_7]: https://github.com/runkitdev/react-runkit

[^1_8]: https://www.reddit.com/r/node/comments/a8i443/runkit_like_app_that_works_in_local_environment/

[^1_9]: https://stackoverflow.com/questions/6154412/php-alternatives-to-runkit-for-intercepting-method-calls

[^1_10]: https://itsrakesh.com/blog/online-playgrounds-for-every-technology

[^1_11]: https://codedrivendevelopment.com/posts/most-useful-sites-for-javascript-typescript-engineers

[^1_12]: https://developers.thoughtspot.com/docs/react-app-embed

[^1_13]: https://discuss.runkit.com/t/how-to-embed-runkit-inside-my-gitbook/178

[^1_14]: https://dev.to/devteam/ways-to-enhance-your-dev-posts-useful-embeds-1g0f

[^1_15]: https://www.npmjs.com/package/react-code-blocks

[^1_16]: https://playcode.io/react

[^1_17]: https://github.com/runkitdev

[^1_18]: https://news.ycombinator.com/item?id=16580380

[^1_19]: https://github.com/topics/runkit

[^1_20]: https://blog.bitsrc.io/11-react-ui-component-playgrounds-for-2018-eef5a87a1bf8

[^1_21]: https://github.com/codesandbox/sandpack

[^1_22]: https://blog.csdn.net/gitblog_00363/article/details/141150217

[^1_23]: https://codepen.io

[^1_24]: https://jsfiddle.net

[^1_25]: https://stackblitz.com/edit/javascript

[^1_26]: https://scribbler.live

[^1_27]: https://nbks.dev


---

# Embeddable React code playgrounds to use instead of react-runkit

How to integrate SandPack into a React app
Self hosted JavaScript notebook alternatives to RunKit
React components for in-browser REPLs and sandboxes
Compare Nodebook Scribbler and SandPack features

Sandpack stands out as the top embeddable React code playground alternative to react-runkit, offering a full in-browser editor with live preview, npm support, and customizable components. Other options like react-sandbox-editor provide lighter iframes for React snippets, while self-hosted notebooks such as Scribbler focus on browser-based JS without Node backends. Nodebook appears limited or unmaintained as a direct RunKit clone, with Scribbler and Sandpack emphasizing client-side execution over full Node REPLs.[^2_1][^2_2][^2_3][^2_4]

## Sandpack Integration

Install via `npm i @codesandbox/sandpack-react`, import `<Sandpack />`, and add it to your app with props like `template="react"` for quick setup; include the CSS import for styling.[^2_5][^2_6]
Customize with `files`, `theme`, `options` for read-only mode or custom layouts, and it handles bundling, HMR, and error overlays out-of-the-box.[^2_7][^2_1]
For Hugo/static sites, use the CDN version with import maps to embed without a build step.[^2_6]

## Feature Comparison

| Feature | Sandpack (@codesandbox/sandpack-react) | Scribbler JS Notebook [^2_4] | Nodebook [^2_4] | react-sandbox-editor [^2_3] |
| :-- | :-- | :-- | :-- | :-- |
| Self-hosted | No (CDN/cloud bundler) | Yes (pure browser JS) | Yes (limited docs) | Yes (client-side iframe) |
| Node.js support | Partial (Nodebox mode, no full event loop) [^2_8] | No (browser-only) | Yes (aimed at Node) | No (React/browser scripts) |
| npm deps | Yes (bundled/cached) | No | Partial | Via unpkg URLs |
| React component | Yes (composable) | Embed via iframe/web | Web UI embed | Yes (Sandbox HOC) |
| Editable preview | Full editor + HMR | Notebook cells | REPL-style | Dual editors (script/template) |
| Best for | Docs/demos (your Hugo sites) | Pure JS notebooks | Node experiments (if active) | Simple React snippets |

## Other Embeddable Options

- react-sandbox-editor – Lightweight React wrapper for sandboxed iframes with script/template editors; deps via CDN, good for unhosted UI demos without npm complexity.[^2_3]
- PlayCode React Playground – Online editor with embed potential via iframes; supports JSX/TS but less customizable as a component.[^2_9]

Self-hosted full Node REPLs like RunKit remain scarce post-shutdown; consider Observable or JupyterLite for JS if notebooks fit better than embeds.[^2_10][^2_4]
<span style="display:none">[^2_11][^2_12][^2_13][^2_14][^2_15][^2_16][^2_17][^2_18][^2_19][^2_20][^2_21][^2_22]</span>

<div align="center">⁂</div>

[^2_1]: https://sandpack.codesandbox.io/docs/quickstart

[^2_2]: https://sandpack.codesandbox.io/docs/getting-started

[^2_3]: https://github.com/malerba118/react-sandbox-editor

[^2_4]: https://alternativeto.net/software/runkit/

[^2_5]: https://dev.to/codesandboxio/using-sandpack-for-react-libraries-documentation-4838

[^2_6]: https://github.com/runkitdev/react-runkit

[^2_7]: https://sandpack.codesandbox.io

[^2_8]: https://sandpack.codesandbox.io/docs/resources/faq

[^2_9]: https://playcode.io/react

[^2_10]: https://itsrakesh.com/blog/online-playgrounds-for-every-technology

[^2_11]: https://blog.logrocket.com/build-interactive-blog-with-react-sandpack/

[^2_12]: https://www.madlymused.com/comparing-book-writing-software/

[^2_13]: https://sandpack.codesandbox.io/docs/guides

[^2_14]: https://codesandbox.io/s/repl-component-d3gcy

[^2_15]: https://www.joshwcomeau.com/react/next-level-playground/

[^2_16]: https://github.com/noxstream/SelfHosted

[^2_17]: https://www.reddit.com/r/osr/comments/1gumu2x/i_need_help_with_creating_a_sandbox/

[^2_18]: https://hackernoon.com/embed-an-in-browser-code-preview-into-your-react-application-with-sandpack

[^2_19]: https://www.reddit.com/r/node/comments/a8i443/runkit_like_app_that_works_in_local_environment/

[^2_20]: https://preactjs.com/repl/

[^2_21]: https://github.com/ManUtopiK/awesome-stars

[^2_22]: https://codesandbox.io/s/reactjs-playground-h19jh


---

# Best self hosted React playgrounds for production use

How to embed Sandpack with custom npm dependencies
Performance differences between Sandpack and RunKit
Security risks of running live code in the browser
How to persist user code and state in Sandpack sessions

Sandpack offers self-hosting for production via its bundler deployment, making it reliable without external dependencies, while pure client-side options like react-live suit lightweight React-only playgrounds. Custom npm deps in Sandpack work via `customSetup.dependencies` for public packages or bundled files/private registries for restricted ones. Browser code execution limits risks to the sandboxed iframe (no direct DOM/network access beyond your config), unlike RunKit's server-side Node which could expose more attack surface.[^3_1][^3_2][^3_3][^3_4][^3_5]

## Self-Hosted React Playgrounds

- react-live – FormidableLabs' modular React component for live-editable source + preview; fully self-contained, no bundler needed, ideal for static Hugo sites with custom scoping.[^3_1]
- Sandpack self-hosted bundler – Deploy CodeSandbox's bundler to your domain (Vercel/Netlify) and point `bundlerURL` prop; production-ready with caching/CDN options.[^3_2]
- LiveCodes – Self-hostable multi-language playground (React/TS/Vue); embeddable SDK for custom interactions, supports npm via bundler.[^3_6]


## Sandpack Custom Deps \& Persistence

Use `<Sandpack customSetup={{ dependencies: { 'lodash': '^4.17.21' } }} />` for public npm; for private/custom, bundle JS into `files` under `/node_modules/pkg/index.js` or use `teamId` + registry.[^3_7][^3_4][^3_5]
Persist state with `useSandpack()` hook + `useActiveCode` to sync `localStorage` or URL params; wrap in `<SandpackProvider files={savedFiles}>` and listen to `onCodeUpdate`.[^3_8][^3_9]
Example: `const { code } = useActiveCode('/App.js'); useEffect(() => setSavedCode(code), [code]);` then restore on mount.[^3_8]

## Performance \& Security

Sandpack's in-browser bundling (SWC/esbuild) starts in <200ms with HMR, lighter than RunKit's full Node spins (often 1s+ cold starts), but large deps increase iframe load.[^3_10][^3_2]
Browser risks: eval() in isolated iframe limits to CSP sandbox (block network/fetch by default); watch V8 exploits but no server breach possible vs RunKit's potential RCE on their infra.[^3_3][^3_11]
<span style="display:none">[^3_12][^3_13][^3_14][^3_15][^3_16][^3_17][^3_18][^3_19][^3_20][^3_21][^3_22]</span>

<div align="center">⁂</div>

[^3_1]: https://github.com/FormidableLabs/react-live

[^3_2]: https://www.joshwcomeau.com/react/next-level-playground/

[^3_3]: https://www.cisecurity.org/advisory/multiple-vulnerabilities-in-google-chrome-could-allow-for-arbitrary-code-execution_2025-053

[^3_4]: https://sandpack.codesandbox.io/docs/getting-started/usage

[^3_5]: https://sandpack.codesandbox.io/docs/getting-started/private-packages

[^3_6]: https://livecodes.io/docs/why

[^3_7]: https://github.com/codesandbox/sandpack/discussions/58

[^3_8]: https://stackoverflow.com/questions/75036249/how-to-use-a-usestate-variable-for-the-value-of-sandpackcodeeditor

[^3_9]: https://github.com/codesandbox/sandpack/discussions/823

[^3_10]: https://github.com/farm-fe/performance-compare

[^3_11]: https://its.ny.gov/2025-061

[^3_12]: https://www.reddit.com/r/webdev/comments/15ilml7/a_code_playground_for_react_vue_svelte_typescript/

[^3_13]: https://codesandbox.io/s/react-new

[^3_14]: https://dev.to/salehmubashar/create-a-dynamic-code-playground-with-sandpack-react-3na5

[^3_15]: https://playcode.io/react

[^3_16]: https://v0.rspack.rs/misc/benchmark

[^3_17]: https://www.youtube.com/watch?v=5i-BAEBtM6s

[^3_18]: https://betterstack.com/community/comparisons/best-sandbox-runners/

[^3_19]: https://socprime.com/blog/cve-2025-12036-vulnerability/

[^3_20]: https://www.freecodecamp.org/news/how-to-build-a-react-development-playground-using-storybook-667ef9808e9f/

[^3_21]: https://en.wikipedia.org/wiki/Live_coding

[^3_22]: https://sandpack.codesandbox.io/docs/guides/hosting-the-bundler


---

# Guide to self hosting Sandpack for production use

Compare Sandpack and CodeSandbox performance for large apps
How to load private npm packages into Sandpack securely
Strategies to sandbox untrusted user code in the browser
Best storage options for persisting Sandpack session state

Self-host Sandpack's bundler for production by cloning codesandbox-client repo, building the sandpack folder, and deploying the www assets to your static host (Netlify/Vercel/Cloudflare). Set `bundlerURL` in `<Sandpack options={{ bundlerURL: 'https://your-domain.com' }} />` to route bundling there, enabling custom caching/registry tweaks without CodeSandbox dependency.[^4_1][^4_2]
Sandpack outperforms CodeSandbox for embeds (sub-200ms cold starts via optimized Sucrase/esbuild in workers) but lags on massive apps due to in-browser limits vs CodeSandbox's server optimizations.[^4_3][^4_4]
Secure private npm by proxying via self-hosted Node server with read-only tokens, scoped to specific packages, and encrypt tokens server-side to avoid client exposure.[^4_5][^4_1]

## Self-Hosting Steps

1. `git clone https://github.com/codesandbox/codesandbox-client`, `yarn install`, `yarn build:deps`.[^4_1]
2. `yarn build:sandpack` generates `/www` folder with bundler assets.[^4_1]
3. Deploy `/www` to static host; configure CORS for your domain.[^4_6][^4_1]
4. Pass `bundlerURL` in Sandpack props; test with large deps for perf.[^4_1]

## Sandboxing Strategies

- Embed in `<iframe sandbox="allow-scripts">` with strict CSP (`default-src 'none'; script-src 'unsafe-eval'; worker-src blob:`) to block network/storage.[^4_7][^4_8]
- Use Web Workers for eval() isolation (no DOM/window access); postMessage for controlled comms.[^4_8]
- Strip dangerous APIs via Function constructor scoping (e.g., `Function('console.log("ok")')` in empty context) before eval.[^4_8]


## Persistence Options

| Option | Pros | Cons | Sandpack Fit |
| :-- | :-- | :-- | :-- |
| localStorage | Simple, survives reloads (~5MB) | Sync issues, quota limits [^4_9] | Best for single-user Hugo demos; use `useActiveCode` + JSON.stringify(files) |
| URL params | Shareable, no storage | 2kB limit, no large state [^4_10] | Quick sessions via `sandpackUrl` prop |
| IndexedDB | Large data, structured | Complex API [^4_9] | Offline/multi-file via dexie.js wrapper |
| Server DB (your API) | Scalable, multi-device | Network latency [^4_11] | Custom backend for eliana.lol logins/sessions |

Combine localStorage for quick saves with optional server sync for production.[^4_9][^4_12]
<span style="display:none">[^4_13][^4_14][^4_15][^4_16][^4_17][^4_18][^4_19][^4_20][^4_21][^4_22]</span>

<div align="center">⁂</div>

[^4_1]: https://sandpack.codesandbox.io/docs/guides/hosting-the-bundler

[^4_2]: https://github.com/codesandbox/sandpack/issues/23

[^4_3]: https://codesandbox.io/blog/the-journey-to-a-faster-sandpack-transpiler

[^4_4]: https://github.com/codesandbox/sandpack/issues/292

[^4_5]: https://sandpack.codesandbox.io/docs/getting-started/private-packages

[^4_6]: https://github.com/codesandbox/sandpack/issues/1140

[^4_7]: https://www.meziantou.net/executing-untrusted-javascript-code-in-a-browser.htm

[^4_8]: https://stackoverflow.com/questions/12209657/how-can-i-sandbox-untrusted-user-submitted-javascript-content

[^4_9]: https://www.uxpin.com/studio/blog/how-to-use-react-for-state-persistence/

[^4_10]: https://stackoverflow.com/questions/75036249/how-to-use-a-usestate-variable-for-the-value-of-sandpackcodeeditor

[^4_11]: https://sparkco.ai/blog/mastering-session-state-persistence-best-practices-for-2025

[^4_12]: https://github.com/codesandbox/sandpack/discussions/823

[^4_13]: https://www.joshwcomeau.com/react/next-level-playground/

[^4_14]: https://danilowoz.com/blog/sandpack

[^4_15]: https://dev.to/salehmubashar/create-a-dynamic-code-playground-with-sandpack-react-3na5

[^4_16]: https://codesandbox.io/blog/sandpack-recap-ama

[^4_17]: https://sandpack.codesandbox.io/docs/architecture/private-packages

[^4_18]: https://sandpack.codesandbox.io/docs/getting-started

[^4_19]: https://www.duocircle.com/email-security/vulnerable-npm-api-exposes-private-packages-why-you-need-to-be-aware-of-it

[^4_20]: https://www.endorlabs.com/learn/happier-doms-the-perils-of-running-untrusted-javascript-code-outside-of-a-web-browser

[^4_21]: https://sandpack.codesandbox.io/docs/advanced-usage/components

[^4_22]: https://www.librechat.ai/docs/features/artifacts

