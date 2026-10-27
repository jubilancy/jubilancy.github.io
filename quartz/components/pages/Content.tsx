import { ComponentChildren } from "preact"
import { Root } from "hast"
import { htmlToJsx } from "../../util/jsx"
import { withDropcap } from "../../util/dropcap"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

// notes at least this long get an illuminated initial and small-caps opening
const LONG_NOTE_WORDS = 600

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const words = fileData.text ? fileData.text.split(/\s+/).length : 0
  // later parts of a paginated note start mid-text
  const opensNote = !fileData.pagination || fileData.pagination.index === 1
  const long = opensNote && words >= LONG_NOTE_WORDS ? ["long-note"] : []
  const content = htmlToJsx(
    fileData.filePath!,
    opensNote && words >= LONG_NOTE_WORDS ? withDropcap(tree as Root) : tree,
  ) as ComponentChildren
  const classString = ["popover-hint", ...long, ...classes].join(" ")
  return <article class={classString}>{content}</article>
}

export default (() => Content) satisfies QuartzComponentConstructor
