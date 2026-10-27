/**
 * Note stages, set with `stage:` in frontmatter. Named for the steps of making a manuscript.
 * Change the words here; nothing else needs to know them.
 */
export const STAGES = {
  inked: "first pass: copied in or jotted down",
  rubricated: "marked up: headings, links and annotations added",
  illuminated: "finished and cared for",
} as const

export type Stage = keyof typeof STAGES

export function isStage(value: unknown): value is Stage {
  return typeof value === "string" && value in STAGES
}
