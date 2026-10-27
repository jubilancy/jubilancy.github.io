import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative, simplifySlug } from "../util/path"
import { classNames } from "../util/lang"

interface Options {
  title: string
  exclude: string[]
}

const defaultOptions: Options = {
  title: "explorer",
  exclude: ["tags", "private", "templates"],
}

interface Entry {
  slug: FullSlug
  label: string
  count: number
  folder: boolean
}

// Static, build-time list of top-level folders and root pages. Ships no client script
// and no per-page tree, so it stays cheap no matter how many notes exist.
export default ((userOpts?: Partial<Options>) => {
  const opts: Options = { ...defaultOptions, ...userOpts }

  const TopLevelNav: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
  }: QuartzComponentProps) => {
    const entries = new Map<string, Entry>()
    for (const file of allFiles) {
      const slug = file.slug!
      const [first, ...rest] = slug.split("/")
      if (opts.exclude.includes(first) || slug === "index" || slug === "404") continue

      if (rest.length === 0) {
        entries.set(first, {
          slug: slug,
          label: file.frontmatter?.title ?? first,
          count: 0,
          folder: false,
        })
        continue
      }

      const entry = entries.get(first) ?? {
        slug: `${first}/index` as FullSlug,
        label: first,
        count: 0,
        folder: true,
      }
      if (rest.length === 1 && rest[0] === "index") {
        entry.label = file.frontmatter?.title ?? first
      } else {
        entry.count++
      }
      entries.set(first, entry)
    }

    const sorted = [...entries.values()].sort((a, b) => {
      if (a.folder !== b.folder) return a.folder ? -1 : 1
      return a.label.localeCompare(b.label, undefined, { numeric: true, sensitivity: "base" })
    })
    const current = fileData.slug!.split("/")[0]

    return (
      <nav class={classNames(displayClass, "top-nav")} aria-label={opts.title}>
        <h3>{opts.title}</h3>
        <ul>
          {sorted.map((entry) => (
            <li class={simplifySlug(entry.slug).split("/")[0] === current ? "active" : undefined}>
              <a href={resolveRelative(fileData.slug!, entry.slug)}>{entry.label}</a>
              {entry.folder && entry.count > 0 && <span class="count">{entry.count}</span>}
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  TopLevelNav.css = `
.top-nav { flex: 0 1 auto; overflow-y: auto; }
.top-nav h3 { font-size: 0.72rem; margin: 0 0 0.4rem; }
.top-nav ul { list-style: none; margin: 0; padding: 0; }
.top-nav li { display: flex; justify-content: space-between; align-items: baseline; gap: 0.5rem; line-height: 2; }
.top-nav a { text-decoration: none; font-weight: 400; color: var(--darkgray); }
.top-nav li.active a, .top-nav a:hover { color: var(--tertiary); }
.top-nav .count { font-size: 0.7rem; color: var(--gray); }
`
  return TopLevelNav
}) satisfies QuartzComponentConstructor
