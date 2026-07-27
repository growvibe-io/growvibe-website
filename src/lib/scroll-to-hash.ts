import type { MouseEvent } from "react";

/**
 * Next.js's <Link> only re-scrolls to a fragment when it detects an actual
 * navigation. If you're already on /services and click a services-menu item
 * pointing to a different #anchor on that same page — or click the same
 * anchor a second time — the router sees no route change and does nothing,
 * so the page just sits there ("nothing happens"). Plain browser anchor
 * navigation has the same issue: it only re-fires on a hash *change*.
 *
 * This click handler manually scrolls to the target element whenever the
 * link points at the page we're already on, so in-page anchor links (the
 * Services mega-menu, footer service links, etc.) always work — not just
 * the first time you click a given one. Cross-page links are left alone;
 * Next.js + the browser already handle scrolling to the fragment once that
 * page finishes loading.
 */
export function handleInPageHashClick(
  e: MouseEvent<HTMLAnchorElement>,
  href: string,
  currentPathname: string
) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return;

  const targetPath = href.slice(0, hashIndex) || "/";
  const hash = href.slice(hashIndex + 1);
  const normalizedCurrent = currentPathname || "/";

  if (targetPath !== normalizedCurrent) return;

  const el = document.getElementById(hash);
  if (!el) return;

  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", href);
}
