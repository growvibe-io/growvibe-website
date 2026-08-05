"use client";

import * as React from "react";
import {
  Globe,
  AppWindow,
  Bot,
  Search,
  MousePointerClick,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

// Server Components can't pass function props (like a LucideIcon component
// reference) across to a Client Component — React throws "Functions cannot
// be passed directly to Client Components" at build time. So this nav only
// receives plain, serializable data (slug + label) and resolves each icon
// itself from a local map, rather than accepting the full ServiceCategory
// objects (which carry navIcon and a services array of icon-bearing items).
interface CategoryNavItem {
  slug: string;
  navLabel: string;
}

interface CategoryNavProps {
  categories: CategoryNavItem[];
}

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "website-development": Globe,
  "web-apps-crm": AppWindow,
  "ai-automation": Bot,
  "seo-growth": Search,
  "marketing-advertising": MousePointerClick,
};

/**
 * Sticky quick-jump nav for the service categories. Tracks which section
 * is currently in view via IntersectionObserver so the active pill updates
 * as you scroll, not just on click — a small detail, but it's the kind of
 * polish (see also: the home page's drag-carousel, the FAQ accordion) this
 * site already leans on elsewhere.
 */
export function CategoryNav({ categories }: CategoryNavProps) {
  const [active, setActive] = React.useState(categories[0]?.slug);

  React.useEffect(() => {
    const sections = categories
      .map((category) => document.getElementById(category.slug))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [categories]);

  return (
    <div className="sticky top-20 z-30 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container">
        <nav
          aria-label="Service categories"
          className="flex gap-2 overflow-x-auto py-4"
        >
          {categories.map((category) => {
            const Icon = CATEGORY_ICONS[category.slug];
            return (
              <a
                key={category.slug}
                href={`#${category.slug}`}
                className={cn(
                  "flex flex-shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
                  active === category.slug
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-ink/20 hover:text-foreground"
                )}
              >
                {Icon && <Icon className="h-3.5 w-3.5" />}
                {category.navLabel}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
