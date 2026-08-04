import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

import { getAllPosts } from "@/lib/blog-data";

const siteUrl = "https://growvibe.io";

// Route segments that exist as real pages but should never appear in the
// sitemap — an ad-traffic-only landing page (marked `robots: {index: false}`
// on its own metadata) and post-submit "thank you" pages that have nothing
// for search engines to rank. To keep a future page out of the sitemap,
// add its folder name here and give it `robots: {index: false}` in its own
// metadata too.
const EXCLUDED_SEGMENTS = new Set([
  "pricing-australia",
  "thank-you-enquiry",
  "thank-you-booking",
  "api",
]);

/**
 * Walks src/app and collects every route that has its own page.tsx/page.ts,
 * so new top-level pages — like /real-estate or /dentist were before this
 * changed — are picked up automatically the next time the site builds,
 * with no manual edit to this file required. Dynamic segments (e.g.
 * blog/[slug]) are skipped here since they need per-item data (a URL, a
 * lastModified date) that only their own data source has — those are
 * added separately below, the same way blog posts already were.
 *
 * Runs at build time (this sitemap has no request-time data, so Next.js
 * statically generates it), where the full source tree is present — same
 * environment `next build` already uses for everything else on this site.
 * Wrapped in try/catch with a small known-routes fallback merged in below,
 * so a filesystem hiccup here degrades gracefully instead of breaking the
 * whole sitemap.
 */
function discoverStaticRoutes(): string[] {
  const appDir = path.join(process.cwd(), "src", "app");
  const routes: string[] = [];

  function walk(dir: string, route: string) {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }

    const hasPage = entries.some(
      (entry) => entry.isFile() && (entry.name === "page.tsx" || entry.name === "page.ts")
    );
    if (hasPage) routes.push(route);

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const name = entry.name;
      if (name.startsWith("_") || name.startsWith(".")) continue;
      if (name.startsWith("[")) continue; // dynamic segment — handled per-source elsewhere
      if (EXCLUDED_SEGMENTS.has(name)) continue;

      walk(path.join(dir, name), `${route}/${name}`);
    }
  }

  try {
    walk(appDir, "");
  } catch {
    return [];
  }

  return routes;
}

// Known-good fallback in case the filesystem walk above ever comes back
// empty (e.g. a future hosting change without local disk access) — keeps
// the sitemap from going blank. Update this alongside EXCLUDED_SEGMENTS if
// a page is deliberately removed; there's no need to add new pages here,
// discoverStaticRoutes() already picks those up.
const KNOWN_ROUTES_FALLBACK = [
  "",
  "/services",
  "/services/crm-development",
  "/work",
  "/about",
  "/blog",
  "/contact",
  "/website-design",
  "/real-estate",
  "/dentist",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const discovered = discoverStaticRoutes();
  const routes = discovered.length > 0 ? discovered : KNOWN_ROUTES_FALLBACK;

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
