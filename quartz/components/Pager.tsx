import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { classNames } from "../util/lang"

// part numbers shown on each side of the current one
const WINDOW = 2

function visibleParts(current: number, total: number): (number | null)[] {
  const shown: (number | null)[] = []
  let last = 0
  for (let n = 1; n <= total; n++) {
    if (n === 1 || n === total || Math.abs(n - current) <= WINDOW) {
      if (n - last > 1) shown.push(null)
      shown.push(n)
      last = n
    }
  }
  return shown
}

const Pager: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const pagination = fileData.pagination
  if (!pagination) return null

  const { index, total, slugs } = pagination
  const href = (n: number) => resolveRelative(fileData.slug!, slugs[n - 1])

  return (
    <nav class={classNames(displayClass, "pager")} aria-label="parts of this note">
      {index > 1 ? (
        <a class="internal" rel="prev" href={href(index - 1)}>
          ← prev
        </a>
      ) : (
        <span class="disabled">← prev</span>
      )}
      <ol>
        {visibleParts(index, total).map((n) =>
          n === null ? (
            <li class="gap">…</li>
          ) : (
            <li>
              {n === index ? (
                <span aria-current="page">{n}</span>
              ) : (
                <a class="internal" href={href(n)}>
                  {n}
                </a>
              )}
            </li>
          ),
        )}
      </ol>
      {index < total ? (
        <a class="internal" rel="next" href={href(index + 1)}>
          next →
        </a>
      ) : (
        <span class="disabled">next →</span>
      )}
      <span class="count">
        part {index} of {total}
      </span>
    </nav>
  )
}

Pager.css = `
.pager {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem 1rem;
  margin: 1rem 0;
  padding: 0.5rem 0;
  border-block: 1px solid var(--lightgray);
  font-family: var(--codeFont);
  font-size: 0.78rem;
}
.pager ol { display: flex; flex-wrap: wrap; gap: 0.5rem; list-style: none; margin: 0; padding: 0; }
.pager a { text-decoration: none; }
.pager [aria-current] { color: var(--tertiary); font-weight: 600; }
.pager .disabled, .pager .gap { color: var(--gray); }
.pager .count { margin-left: auto; color: var(--gray); letter-spacing: 0.06em; text-transform: uppercase; }
`

export default (() => Pager) satisfies QuartzComponentConstructor
