"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { useLightbox, type LightboxImage } from "@/components/lightbox-provider";

/**
 * Premium browser-chrome mockup for real product screenshots (the actual
 * GrowVibe CRM app, not decorative illustrations). Renders a rounded browser
 * window — traffic-light dots, a URL pill, subtle shadow, a soft top sheen —
 * around a static screenshot from `/public/crm-screenshots`. Clickable by
 * default: opens the shared fullscreen lightbox, with prev/next through
 * `lightboxImages` when provided.
 */
export function BrowserFrame({
  src,
  alt,
  url = "growvibe-crm.vercel.app",
  className,
  priority = false,
  floating = false,
  lightboxImages,
  lightboxIndex = 0,
}: {
  src: string;
  alt: string;
  url?: string;
  className?: string;
  priority?: boolean;
  /** Adds a very slow, subtle floating drift — use sparingly (e.g. the hero shot). */
  floating?: boolean;
  /** Full ordered set of screenshots to cycle through in the lightbox. Defaults to just this image. */
  lightboxImages?: LightboxImage[];
  /** This image's position within `lightboxImages`. */
  lightboxIndex?: number;
}) {
  const { openAt } = useLightbox();
  const images = lightboxImages ?? [{ src, alt }];
  const index = lightboxImages ? lightboxIndex : 0;

  return (
    <button
      type="button"
      onClick={() => openAt(images, index)}
      aria-label={`View larger screenshot: ${alt}`}
      data-cursor="hover"
      className={cn(
        "group relative block w-full overflow-hidden rounded-2xl border border-border/70 bg-card text-left shadow-xl shadow-ink/[0.08] ring-1 ring-ink/[0.03] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        floating && "animate-float",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-border bg-secondary/60 px-4 py-2.5 sm:py-3">
        <div className="flex flex-shrink-0 items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="mx-auto flex w-full max-w-[280px] items-center justify-center gap-1.5 rounded-full border border-border/70 bg-background/80 px-3 py-1 sm:max-w-xs">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-2.5 w-2.5 flex-shrink-0 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className="truncate text-[11px] font-medium text-muted-foreground">
            {url}
          </span>
        </div>
      </div>
      <div className="relative aspect-[1568/784] w-full overflow-hidden bg-secondary/40">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={92}
          sizes="(min-width: 1024px) 720px, 100vw"
          className="object-cover object-top transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.02]"
        />
        {/* Soft glass sheen — a premium highlight, not a literal mirror reflection */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.10] via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/[0.08] to-transparent" />
      </div>
    </button>
  );
}
