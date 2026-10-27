import { Element, ElementContent, Root, Text } from "hast"

/**
 * Wraps the first letter of a note's opening paragraph in a `span.dropcap` so CSS can show an
 * engraved initial in its place. The real letter stays in the text for readers and copy/paste.
 *
 * The initials are cut from the Delamotte ornamental alphabet (see quartz/static/dropcaps/CREDITS.md).
 * It has 21 letters: J is shown as I and W as V. Letters it lacks (O, X, Z) get `data-letter="plain"`,
 * which CSS draws as a blackletter capital on a matching panel.
 */

export const DROPCAP_LETTERS = "abcdefghiklmnpqrstuvy".split("")

const ALIASES: Record<string, string> = { j: "i", w: "v" }

// openings shorter than this are captions or labels, not prose
const MIN_OPENING_CHARS = 80

export function dropcapLetter(char: string): string | null {
  const base = char.normalize("NFD")[0]?.toLowerCase()
  if (!base || !/[a-z]/.test(base)) return null
  const letter = ALIASES[base] ?? base
  return DROPCAP_LETTERS.includes(letter) ? letter : "plain"
}

const isElement = (n: ElementContent): n is Element => n.type === "element"

function textLength(node: ElementContent): number {
  if (node.type === "text") return node.value.length
  return isElement(node) ? node.children.reduce((n, c) => n + textLength(c), 0) : 0
}

/** Replaces the first non-blank text node under `parent`; returns whether it did. */
function wrapFirstLetter(parent: Element): boolean {
  for (let i = 0; i < parent.children.length; i++) {
    const child = parent.children[i]
    if (isElement(child)) {
      if (child.tagName === "code" || child.tagName === "pre") return false
      if (child.tagName === "svg" || child.tagName === "img") return false
      if (wrapFirstLetter(child)) return true
      continue
    }
    if (child.type !== "text" || child.value.trim() === "") continue

    const lead = child.value.length - child.value.trimStart().length
    const letter = dropcapLetter(child.value[lead])
    if (!letter) return false

    const replacement: ElementContent[] = []
    if (lead > 0) replacement.push({ type: "text", value: child.value.slice(0, lead) } as Text)
    replacement.push({
      type: "element",
      tagName: "span",
      properties: { className: ["dropcap"], dataLetter: letter },
      children: [{ type: "text", value: child.value[lead] }],
    })
    if (child.value.length > lead + 1) {
      replacement.push({ type: "text", value: child.value.slice(lead + 1) })
    }
    parent.children.splice(i, 1, ...replacement)
    return true
  }
  return false
}

const HEADING_TAGS = new Set(["h1", "h2", "h3", "h4", "h5", "h6"])

/**
 * Returns a tree whose opening paragraph has a drop cap, or the same tree if the note does not open
 * with one. The opening paragraph is the first block after any headings; a note that starts with a
 * list, image or table gets none.
 */
export function withDropcap(tree: Root): Root {
  const index = tree.children.findIndex(
    (n) =>
      (n.type === "element" && !HEADING_TAGS.has(n.tagName)) ||
      (n.type === "text" && n.value.trim() !== ""),
  )
  const first = tree.children[index]
  if (!first || first.type !== "element" || first.tagName !== "p") return tree
  if (textLength(first) < MIN_OPENING_CHARS) return tree

  const opening = structuredClone(first) as Element
  if (!wrapFirstLetter(opening)) return tree

  const children = [...tree.children]
  children[index] = opening
  return { ...tree, children }
}
