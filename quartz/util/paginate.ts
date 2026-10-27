import { Element, ElementContent, Root, RootContent } from "hast"
import { FullSlug } from "./path"

/**
 * Splits a rendered note into parts that each stay under a weight budget.
 *
 * Weight approximates what the browser pays for: every element counts 1, every link counts
 * 2 extra (popover/SPA handlers), and every 100 characters of text counts 1. A short note
 * packed with links and a long note of plain text therefore both get split once they get heavy.
 */

export const DEFAULT_PAGE_BUDGET = 2500

const LINK_WEIGHT = 2
const CHARS_PER_UNIT = 30
// share of the budget a part must reach before a heading is allowed to start a new part
const HEADING_BREAK_RATIO = 0.6

const SPLITTABLE = new Set([
  "ul",
  "ol",
  "li",
  "div",
  "section",
  "blockquote",
  "table",
  "tbody",
  "dl",
  // a paragraph can be a wall of thousands of links separated by line breaks
  "p",
])
const HEADINGS = new Set(["h1", "h2", "h3"])

const weights = new WeakMap<object, number>()

export function weigh(node: RootContent | Root): number {
  if (node.type === "text") return node.value.length / CHARS_PER_UNIT
  if (node.type !== "element" && node.type !== "root") return 0
  const cached = weights.get(node)
  if (cached !== undefined) return cached

  let total = node.type === "element" ? 1 + (node.tagName === "a" ? LINK_WEIGHT : 0) : 0
  for (const child of node.children) total += weigh(child)
  weights.set(node, total)
  return total
}

interface Frame {
  orig: Element
  clone: Element
  attached: boolean
  /** items of an <ol> already started, used to keep numbering on continuation parts */
  started: number
}

export interface PaginatedTree {
  parts: Root[]
  /** heading/footnote ids -> index of the part that holds them */
  idToPart: Map<string, number>
}

function shallowClone(el: Element, keepId: boolean): Element {
  const properties = { ...el.properties }
  if (!keepId) delete properties.id
  return { type: "element", tagName: el.tagName, properties, children: [] }
}

function isElement(node: RootContent | ElementContent): node is Element {
  return node.type === "element"
}

class Builder {
  parts: Root[] = []
  stack: Frame[] = []
  private cur: Root = { type: "root", children: [] }
  private curWeight = 0

  constructor(private budget: number) {
    this.parts.push(this.cur)
  }

  private attachFrames() {
    let parent: Root | Element = this.cur
    for (const frame of this.stack) {
      if (!frame.attached) {
        parent.children.push(frame.clone)
        frame.attached = true
      }
      parent = frame.clone
    }
  }

  private countListItem(node: ElementContent | RootContent) {
    const parent = this.stack[this.stack.length - 1]
    if (parent?.orig.tagName === "ol" && isElement(node) && node.tagName === "li") parent.started++
  }

  private append(node: ElementContent | RootContent, weight: number) {
    this.attachFrames()
    this.countListItem(node)
    const target = this.stack.length ? this.stack[this.stack.length - 1].clone : this.cur
    target.children.push(node as ElementContent)
    this.curWeight += weight
  }

  private startPart() {
    this.cur = { type: "root", children: [] }
    this.parts.push(this.cur)
    this.curWeight = 0
    this.stack = this.stack.map((frame, i) => {
      const clone = shallowClone(frame.orig, false)
      if (frame.orig.tagName === "ol") {
        const base = Number(frame.orig.properties.start ?? 1)
        const continuing = this.stack[i + 1]?.orig.tagName === "li"
        clone.properties.start = base + frame.started - (continuing ? 1 : 0)
      }
      if (frame.orig.tagName === "table") {
        const thead = frame.orig.children.find((c) => isElement(c) && c.tagName === "thead")
        if (thead) clone.children.push(structuredClone(thead))
      }
      return { ...frame, clone, attached: false }
    })
  }

  place(node: ElementContent, depth: number, next?: ElementContent) {
    if (!isElement(node)) {
      this.append(node, weigh(node))
      return
    }

    const w = weigh(node)
    if (depth === 0 && HEADINGS.has(node.tagName) && this.curWeight > 0) {
      // start a new part at a heading once this one is mostly full, and never leave a
      // heading stranded at the end of a part away from the block it introduces
      const withNext = w + (next ? Math.min(weigh(next), this.budget / 2) : 0)
      if (
        this.curWeight >= this.budget * HEADING_BREAK_RATIO ||
        this.curWeight + withNext > this.budget
      ) {
        this.startPart()
      }
    }

    if (this.curWeight + w <= this.budget) {
      this.append(node, w)
    } else if (w <= this.budget && this.curWeight > 0) {
      this.startPart()
      this.append(node, w)
    } else if (SPLITTABLE.has(node.tagName) && node.children.some(isElement)) {
      this.countListItem(node)
      this.stack.push({ orig: node, clone: shallowClone(node, true), attached: false, started: 0 })
      for (const child of node.children) this.place(child, depth + 1)
      this.stack.pop()
    } else {
      // oversized leaf (e.g. one giant code block): cannot be cut, give it a part of its own
      if (this.curWeight > 0) this.startPart()
      this.append(node, w)
    }
  }
}

function collectIds(root: Root | Element, partIndex: number, ids: Map<string, number>) {
  for (const child of root.children) {
    if (!isElement(child)) continue
    const id = child.properties.id
    if (typeof id === "string" && !ids.has(id)) ids.set(id, partIndex)
    collectIds(child, partIndex, ids)
  }
}

export function paginateTree(tree: Root, budget: number = DEFAULT_PAGE_BUDGET): PaginatedTree {
  if (weigh(tree) <= budget) return { parts: [tree], idToPart: new Map() }

  const builder = new Builder(budget)
  const children = tree.children as ElementContent[]
  children.forEach((child, i) => builder.place(child, 0, children[i + 1]))

  const parts = builder.parts.filter((p) => p.children.length > 0)
  const idToPart = new Map<string, number>()
  parts.forEach((part, i) => collectIds(part, i, idToPart))
  return { parts, idToPart }
}

/** Points in-page `#anchor` links at the part that actually holds the anchor. */
export function retargetAnchors(
  parts: Root[],
  idToPart: Map<string, number>,
  hrefFor: (from: number, to: number) => string,
) {
  const visit = (node: Root | Element, from: number) => {
    for (const child of node.children) {
      if (!isElement(child)) continue
      const href = child.properties.href
      if (child.tagName === "a" && typeof href === "string" && href.startsWith("#")) {
        const id = decodeURIComponent(href.slice(1))
        const to = idToPart.get(id)
        if (to !== undefined && to !== from) child.properties.href = `${hrefFor(from, to)}${href}`
      }
      visit(child, from)
    }
  }
  parts.forEach((part, i) => visit(part, i))
}

export interface Pagination {
  /** 1-based index of this part */
  index: number
  total: number
  /** slug of every part, in order */
  slugs: FullSlug[]
  /** heading/footnote id -> index (0-based) of the part that holds it */
  idToPart: Record<string, number>
}

declare module "vfile" {
  interface DataMap {
    pagination: Pagination
  }
}

export function partSlug(slug: FullSlug, index: number): FullSlug {
  return (index === 0 ? slug : `${slug}-page-${index + 1}`) as FullSlug
}
