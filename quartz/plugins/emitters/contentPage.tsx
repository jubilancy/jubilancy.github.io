import path from "path"
import { QuartzEmitterPlugin } from "../types"
import { QuartzComponentProps } from "../../components/types"
import HeaderConstructor from "../../components/Header"
import BodyConstructor from "../../components/Body"
import { pageResources, renderPage } from "../../components/renderPage"
import { FullPageLayout } from "../../cfg"
import { pathToRoot, resolveRelative } from "../../util/path"
import { paginateTree, partSlug, retargetAnchors } from "../../util/paginate"
import { defaultContentPageLayout, sharedPageComponents } from "../../../quartz.layout"
import { Content } from "../../components"
import { styleText } from "util"
import { write } from "./helpers"
import { BuildCtx } from "../../util/ctx"
import { Root } from "hast"
import { StaticResources } from "../../util/resources"
import { QuartzPluginData } from "../vfile"

async function* processContent(
  ctx: BuildCtx,
  tree: Root,
  fileData: QuartzPluginData,
  allFiles: QuartzPluginData[],
  opts: FullPageLayout,
  resources: StaticResources,
) {
  const baseSlug = fileData.slug!
  const cfg = ctx.cfg.configuration
  const { parts, idToPart } = paginateTree(tree, cfg.pageWeightBudget)
  const slugs = parts.map((_, i) => partSlug(baseSlug, i))
  if (parts.length > 1) {
    retargetAnchors(parts, idToPart, (from, to) => resolveRelative(slugs[from], slugs[to]))
  }

  for (const [i, part] of parts.entries()) {
    const slug = slugs[i]
    const partData: QuartzPluginData =
      parts.length > 1
        ? {
            ...fileData,
            slug,
            pagination: {
              index: i + 1,
              total: parts.length,
              slugs,
              idToPart: Object.fromEntries(idToPart),
            },
          }
        : fileData
    const externalResources = pageResources(pathToRoot(slug), resources)
    const componentData: QuartzComponentProps = {
      ctx,
      fileData: partData,
      externalResources,
      cfg,
      children: [],
      tree: part,
      allFiles,
    }

    const content = renderPage(cfg, slug, componentData, opts, externalResources)
    yield write({ ctx, content, slug, ext: ".html" })
  }
}

export const ContentPage: QuartzEmitterPlugin<Partial<FullPageLayout>> = (userOpts) => {
  const opts: FullPageLayout = {
    ...sharedPageComponents,
    ...defaultContentPageLayout,
    pageBody: Content(),
    ...userOpts,
  }

  const { head: Head, header, beforeBody, pageBody, afterBody, left, right, footer: Footer } = opts
  const Header = HeaderConstructor()
  const Body = BodyConstructor()

  return {
    name: "ContentPage",
    getQuartzComponents() {
      return [
        Head,
        Header,
        Body,
        ...header,
        ...beforeBody,
        pageBody,
        ...afterBody,
        ...left,
        ...right,
        Footer,
      ]
    },
    async *emit(ctx, content, resources) {
      const allFiles = content.map((c) => c[1].data)
      let containsIndex = false

      for (const [tree, file] of content) {
        const slug = file.data.slug!
        if (slug === "index") {
          containsIndex = true
        }

        // only process home page, non-tag pages, and non-index pages
        if (slug.endsWith("/index") || slug.startsWith("tags/")) continue
        yield* processContent(ctx, tree as Root, file.data, allFiles, opts, resources)
      }

      if (!containsIndex) {
        console.log(
          styleText(
            "yellow",
            `\nWarning: you seem to be missing an \`index.md\` home page file at the root of your \`${ctx.argv.directory}\` folder (\`${path.join(ctx.argv.directory, "index.md")} does not exist\`). This may cause errors when deploying.`,
          ),
        )
      }
    },
    async *partialEmit(ctx, content, resources, changeEvents) {
      const allFiles = content.map((c) => c[1].data)

      // find all slugs that changed or were added
      const changedSlugs = new Set<string>()
      for (const changeEvent of changeEvents) {
        if (!changeEvent.file) continue
        if (changeEvent.type === "add" || changeEvent.type === "change") {
          changedSlugs.add(changeEvent.file.data.slug!)
        }
      }

      for (const [tree, file] of content) {
        const slug = file.data.slug!
        if (!changedSlugs.has(slug)) continue
        if (slug.endsWith("/index") || slug.startsWith("tags/")) continue

        yield* processContent(ctx, tree as Root, file.data, allFiles, opts, resources)
      }
    },
  }
}
