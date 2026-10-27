import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Pager(),
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "recently tended",
        limit: 6,
        showTags: false,
        filter: (f, page) => {
          const folder = page.slug!.slice(0, -"index".length)
          return f.slug!.startsWith(folder) && !f.slug!.endsWith("/index")
        },
      }),
      condition: (page) =>
        page.fileData.slug!.endsWith("/index") && !page.fileData.slug!.startsWith("tags/"),
    }),
    Component.ConditionalRender({
      component: Component.RecentNotes({ title: "recently tended", limit: 6 }),
      condition: (page) => page.fileData.slug === "index",
    }),
  ],
  footer: Component.Footer({
    links: {
      github: "https://github.com/jubilancy/jubilancy.github.io",
      colophon: "/colophon",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.Pager(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.TopLevelNav(),
  ],
  right: [Component.DesktopOnly(Component.TableOfContents()), Component.Backlinks()],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.TopLevelNav(),
  ],
  right: [],
}
