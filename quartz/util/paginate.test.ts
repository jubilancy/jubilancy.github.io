import test, { describe } from "node:test"
import assert from "node:assert"
import { Element, Root } from "hast"
import { paginateTree, retargetAnchors, weigh } from "./paginate"

const el = (tagName: string, children: Element["children"] = [], properties = {}): Element => ({
  type: "element",
  tagName,
  properties,
  children,
})
const text = (value: string) => ({ type: "text" as const, value })
const root = (...children: Element[]): Root => ({ type: "root", children })
const items = (n: number, prefix = "item") =>
  Array.from({ length: n }, (_, i) => el("li", [el("a", [text(`${prefix} ${i}`)], { href: "/x" })]))
const countLis = (r: Root): number => JSON.stringify(r).split('"tagName":"li"').length - 1

describe("weigh", () => {
  test("counts elements, extra for links, and text length", () => {
    assert.strictEqual(weigh(el("p", [text("x".repeat(300))])), 1 + 10)
    assert.strictEqual(weigh(el("p", [el("a", [text("hi")], { href: "/" })])), 1 + 3 + 2 / 30)
  })
})

describe("paginateTree", () => {
  test("leaves light notes alone", () => {
    const tree = root(el("p", [text("short")]))
    const { parts } = paginateTree(tree, 100)
    assert.strictEqual(parts.length, 1)
    assert.strictEqual(parts[0], tree)
  })

  test("breaks before a heading once a part is mostly full", () => {
    const section = (n: number) => [
      el("h2", [text(`h${n}`)], { id: `h${n}` }),
      el("p", [text("y".repeat(600))]),
    ]
    const tree = root(...section(1), ...section(2), ...section(3))
    const { parts, idToPart } = paginateTree(tree, 40)
    assert.strictEqual(parts.length, 3)
    assert.deepStrictEqual(
      [...idToPart.entries()],
      [
        ["h1", 0],
        ["h2", 1],
        ["h3", 2],
      ],
    )
  })

  test("splits one huge list and keeps every item exactly once", () => {
    const tree = root(el("ul", items(200)))
    const { parts } = paginateTree(tree, 100)
    assert.ok(parts.length > 1)
    assert.strictEqual(
      parts.reduce((n, p) => n + countLis(p), 0),
      200,
    )
    for (const part of parts) assert.ok(weigh(part) <= 100)
  })

  test("splits a list nested inside one giant item", () => {
    const tree = root(el("ul", [el("li", [text("top"), el("ul", items(200))])]))
    const { parts } = paginateTree(tree, 100)
    assert.ok(parts.length > 1)
    assert.strictEqual(
      parts.reduce((n, p) => n + countLis(p), 0),
      201 + (parts.length - 1),
    )
  })

  test("continues ordered list numbering", () => {
    const tree = root(el("ol", items(100)))
    const { parts } = paginateTree(tree, 60)
    const first = parts[0].children[0] as Element
    const second = parts[1].children[0] as Element
    assert.strictEqual(first.properties.start, undefined)
    assert.strictEqual(second.properties.start, first.children.length + 1)
  })

  test("repeats the table header on each part", () => {
    const rows = Array.from({ length: 100 }, (_, i) => el("tr", [el("td", [text(`r${i}`)])]))
    const tree = root(
      el("table", [el("thead", [el("tr", [el("th", [text("H")])])]), el("tbody", rows)]),
    )
    const { parts } = paginateTree(tree, 60)
    assert.ok(parts.length > 1)
    for (const part of parts) assert.ok(JSON.stringify(part).includes('"tagName":"thead"'))
  })

  test("splits a paragraph that is a wall of links", () => {
    const links = Array.from({ length: 300 }, (_, i) => [
      el("a", [text(`l${i}`)], { href: "/x" }),
      text("\n"),
    ]).flat()
    const { parts } = paginateTree(root(el("p", links)), 100)
    assert.ok(parts.length > 1)
    assert.strictEqual(
      parts.reduce((n, p) => n + (JSON.stringify(p).split('"tagName":"a"').length - 1), 0),
      300,
    )
  })

  test("gives an unsplittable oversize block its own part", () => {
    const tree = root(
      el("p", [text("intro")]),
      el("pre", [text("z".repeat(50000))]),
      el("p", [text("outro")]),
    )
    const { parts } = paginateTree(tree, 100)
    assert.strictEqual(parts.length, 3)
  })
})

describe("retargetAnchors", () => {
  test("rewrites only anchors that live on another part", () => {
    const parts = [
      root(el("a", [text("x")], { href: "#later" }), el("a", [text("y")], { href: "#here" })),
      root(el("h2", [text("Later")], { id: "later" })),
    ]
    parts[0].children.push(el("h2", [text("Here")], { id: "here" }))
    const idToPart = new Map([
      ["later", 1],
      ["here", 0],
    ])
    retargetAnchors(parts, idToPart, (_f, t) => `part-${t}`)
    const [a, b] = parts[0].children as Element[]
    assert.strictEqual(a.properties.href, "part-1#later")
    assert.strictEqual(b.properties.href, "#here")
  })
})
