import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "the commonplace notebook for eliana",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    pageWeightBudget: 2500,
    analytics: {
      provider: 'umami',
        host: 'https://cloud.umami.is',
        websiteId: '163553f5-45c0-4291-8423-20bdf8cd73d0'
    },
    locale: "en-US",
    baseUrl: "jubilancy.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: { name: "Newsreader", weights: [400, 500, 600], includeItalic: true },
        body: "Newsreader",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#F7F2E8",
          lightgray: "#DDD2BD",
          gray: "#7A776C",
          darkgray: "#33322D",
          dark: "#141413",
          secondary: "#005032",
          tertiary: "#C6613F",
          highlight: "rgba(0, 80, 50, 0.08)",
          textHighlight: "#E6884655",
        },
        darkMode: {
          light: "#0C1211",
          lightgray: "#2A302F",
          gray: "#7F8886",
          darkgray: "#CDD3D1",
          dark: "#F5F8F7",
          secondary: "#00A265",
          tertiary: "#E68846",
          highlight: "rgba(0, 162, 101, 0.12)",
          textHighlight: "#E6884644",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", externalLinkIcon: false }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
  emitters: [
    Plugin.AliasRedirects(),
    Plugin.ComponentResources(),
    Plugin.ContentPage(),
    Plugin.FolderPage(),
    Plugin.TagPage(),
    Plugin.ContentIndex({
      enableSiteMap: true,
      enableRSS: true,
    }),
    Plugin.Assets(),
    Plugin.Static(),
    Plugin.Favicon(),
    Plugin.NotFoundPage(),
],
  },
}

export default config
