import test, { describe } from "node:test"
import assert from "node:assert"
import { Element, Root } from "hast"
import { dropcapLetter, withDropcap } from "./dropcap"

const text = (value: string) => ({ type: "text" as const, value })
const el = (tagName: string, children: Element["children"], properties = {}): Element => ({
  type: "element",
  tagName,
  properties,
  children,
})
const root = (...children: Element[]): Root => ({ type: "root", children })
const prose =
  "Coming of age literary genre that follows a young person's moral and psychological growth."

describe("dropcapLetter", () => {
  test("maps letters, accents and the missing J and W", () => {
    assert.strictEqual(dropcapLetter("C"), "c")
    assert.strictEqual(dropcapLetter("É"), "e")
    assert.strictEqual(dropcapLetter("J"), "i")
    assert.strictEqual(dropcapLetter("u"), "u")
    assert.strictEqual(dropcapLetter("W"), "v")
  })
  test("letters without an initial are drawn plain", () => {
    for (const ch of ["O", "x", "Z"]) assert.strictEqual(dropcapLetter(ch), "plain")
  })
  test("rejects non-letters", () => {
    assert.strictEqual(dropcapLetter("1"), null)
    assert.strictEqual(dropcapLetter('"'), null)
    assert.strictEqual(dropcapLetter(""), null)
  })
})

describe("withDropcap", () => {
  test("wraps the first letter and keeps the rest of the text", () => {
    const tree = root(el("h1", [text("Title")]), el("p", [text(prose)]))
    const out = withDropcap(tree)
    const p = out.children[1] as Element
    const span = p.children[0] as Element
    assert.strictEqual(span.properties.dataLetter, "c")
    assert.deepStrictEqual(span.children, [text("C")])
    assert.deepStrictEqual(p.children[1], text(prose.slice(1)))
  })

  test("does not mutate the original tree", () => {
    const tree = root(el("p", [text(prose)]))
    withDropcap(tree)
    assert.deepStrictEqual((tree.children[0] as Element).children, [text(prose)])
  })

  test("goes inside inline elements", () => {
    const tree = root(el("p", [el("strong", [text("Bold start")]), text(` ${prose}`)]))
    const out = withDropcap(tree)
    const strong = (out.children[0] as Element).children[0] as Element
    assert.strictEqual((strong.children[0] as Element).properties.dataLetter, "b")
  })

  test("only the first block after the headings can open with a drop cap", () => {
    const afterList = root(el("ul", [el("li", [text("item")])]), el("p", [text(prose)]))
    assert.strictEqual(withDropcap(afterList), afterList)
    const afterHeadings = root(el("h1", [text("A")]), el("h2", [text("B")]), el("p", [text(prose)]))
    assert.notStrictEqual(withDropcap(afterHeadings), afterHeadings)
  })

  test("skips short openings, non-letters and code", () => {
    const short = root(el("p", [text("Short caption")]))
    assert.strictEqual(withDropcap(short), short)
    const digit = root(el("p", [text(`1. ${prose}`)]))
    assert.strictEqual(withDropcap(digit), digit)
    const code = root(el("p", [el("code", [text(prose)])]))
    assert.strictEqual(withDropcap(code), code)
  })
})
