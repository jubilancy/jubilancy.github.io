import { FullSlug, getFullSlug, resolveRelative } from "../../util/path"
import { ContentDetails } from "../../plugins/emitters/contentIndex"

declare const fetchData: Promise<{ [slug: string]: ContentDetails }>

document.addEventListener("nav", () => {
  const link = document.querySelector<HTMLAnchorElement>("a.random-note")
  if (!link) return

  const onClick = async (e: MouseEvent) => {
    e.preventDefault()
    const here = getFullSlug(window)
    // the search index is already requested on every page, so this costs no extra download
    const slugs = Object.keys(await fetchData).filter(
      (slug) =>
        slug !== here && slug !== "index" && !slug.endsWith("/index") && !slug.startsWith("tags/"),
    )
    if (slugs.length === 0) return
    const pick = slugs[Math.floor(Math.random() * slugs.length)] as FullSlug
    window.spaNavigate(new URL(resolveRelative(here, pick), window.location.href))
  }

  link.addEventListener("click", onClick)
  window.addCleanup(() => link.removeEventListener("click", onClick))
})
