import * as React from "react";

/**
 * Shared building blocks for the site's product-mockup previews (the
 * Core Services showcase and the Portfolio cards). Everything here is
 * drawn with plain SVG/HTML using only the site's real design tokens —
 * these are original, on-brand demo interfaces, not real screenshots and
 * not copied from any other product.
 */

/**
 * A realistic laptop-style device frame — a dark bezel around the screen
 * plus a thin base/hinge bar beneath and a lifted drop shadow — so previews
 * read as an actual device mockup rather than a flat browser window.
 */
export function DeviceFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col drop-shadow-lg">
      <div className="relative flex flex-1 flex-col overflow-hidden rounded-t-lg border-[5px] border-b-0 border-ink bg-background sm:rounded-t-xl sm:border-[7px]">
        <span className="absolute left-1/2 top-0 z-10 h-1 w-1 -translate-x-1/2 translate-y-px rounded-full bg-white/25 sm:h-1.5 sm:w-1.5" />
        <div className="flex flex-1 flex-col overflow-hidden">{children}</div>
      </div>
      <div className="relative h-1.5 flex-shrink-0 rounded-b-md bg-ink sm:h-2">
        <div className="absolute left-1/2 top-0 h-full w-8 -translate-x-1/2 rounded-b-sm bg-white/10 sm:w-12" />
      </div>
    </div>
  );
}

/**
 * Freely-licensed stock photography (Lorem Picsum) used only for generic,
 * decorative imagery — hero/product shots, never paired with a fabricated
 * person's name or claimed as a real client's own photography. The seed
 * keeps each slot showing the same photo on every load instead of a random
 * one.
 */
export function Photo({
  seed,
  width = 480,
  height = 320,
  className = "",
  priority = false,
  alt = "",
}: {
  seed: string;
  width?: number;
  height?: number;
  className?: string;
  /** Set true for above-the-fold usages (e.g. the homepage hero). Skips
   * `loading="lazy"` and asks the browser to fetch it first — lazy-loading
   * an image that's visible on first paint just delays it and can hurt
   * Largest Contentful Paint, which is exactly what PageSpeed Insights
   * flagged for the hero's mockup photo on growvibe.io. */
  priority?: boolean;
  /** Defaults to "" (decorative, matches every existing usage of this
   * component — mockups, avatars, thumbnails that are purely illustrative).
   * Pass a real, descriptive string for usages where the image conveys
   * actual content, e.g. blog post featured images, so it's meaningful to
   * screen readers and gets real SEO credit instead of being skipped. */
  alt?: string;
}) {
  return (
    <img
      src={`https://picsum.photos/seed/${seed}/${width}/${height}`}
      alt={alt}
      draggable={false}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      className={`h-full w-full bg-secondary object-cover ${className}`}
    />
  );
}

/** A small circular photo avatar — for a customer, contact, or team member. */
export function PhotoAvatar({ seed, size = 16 }: { seed: string; size?: number }) {
  return (
    <img
      src={`https://picsum.photos/seed/${seed}/64/64`}
      alt=""
      draggable={false}
      loading="lazy"
      className="flex-shrink-0 rounded-full bg-secondary object-cover"
      style={{ width: size, height: size }}
    />
  );
}

/** A small rectangular photo thumbnail — a page preview or ad creative. */
export function Thumbnail({ seed, className = "" }: { seed: string; className?: string }) {
  return (
    <img
      src={`https://picsum.photos/seed/${seed}/96/72`}
      alt=""
      draggable={false}
      loading="lazy"
      className={`flex-shrink-0 rounded-sm bg-secondary object-cover ${className}`}
    />
  );
}

/** A smooth area/line chart with a soft monochrome fade beneath the line. */
export function MiniAreaChart({ points, gradientId }: { points: string; gradientId: string }) {
  return (
    <svg viewBox="0 0 100 40" className="h-full w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.32" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,40 ${points} 100,40`} fill={`url(#${gradientId})`} stroke="none" />
      <polyline
        points={points}
        fill="none"
        className="stroke-primary"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A circular progress gauge, e.g. for an SEO/performance score. */
export function Donut({ value, size = 44 }: { value: number; size?: number }) {
  const stroke = 5;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(100, Math.max(0, value)) / 100) * circumference;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} strokeWidth={stroke} className="stroke-secondary" fill="none" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="stroke-primary"
        fill="none"
      />
    </svg>
  );
}

export function Avatar({ initials, tone = "primary" }: { initials: string; tone?: "primary" | "ink" }) {
  return (
    <span
      className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[6px] font-bold ${
        tone === "primary" ? "bg-primary/15 text-primary" : "bg-ink text-white"
      }`}
    >
      {initials}
    </span>
  );
}

export function AvatarStack({ initials }: { initials: string[] }) {
  return (
    <div className="flex -space-x-1.5">
      {initials.map((label, i) => (
        <span
          key={label + i}
          className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-card bg-primary/15 text-[6px] font-bold text-primary"
        >
          {label}
        </span>
      ))}
    </div>
  );
}

export function StatTile({ label, value, delta }: { label: string; value: string; delta?: string }) {
  return (
    <div className="flex flex-col justify-center rounded-md border border-border bg-card px-2 py-1.5 shadow-sm">
      <div className="flex items-baseline justify-between gap-1">
        <span className="text-[8px] font-bold text-foreground sm:text-[10px]">{value}</span>
        {delta && <span className="whitespace-nowrap text-[6px] font-semibold text-primary">{delta}</span>}
      </div>
      <div className="truncate text-[6px] text-muted-foreground sm:text-[7px]">{label}</div>
    </div>
  );
}

export function StatusPill({ label, tone = "positive" }: { label: string; tone?: "positive" | "neutral" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-1.5 py-0.5 text-[6px] font-medium ${
        tone === "positive" ? "bg-primary/10 text-primary" : "bg-secondary text-secondary-foreground"
      }`}
    >
      <span className={`h-1 w-1 rounded-full ${tone === "positive" ? "bg-primary" : "bg-muted-foreground"}`} />
      {label}
    </span>
  );
}

export function MiniBars({ values, highlight }: { values: number[]; highlight?: number }) {
  return (
    <div className="flex h-full items-end gap-1">
      {values.map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t-sm ${i === highlight ? "bg-primary" : "bg-primary/25"}`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}
