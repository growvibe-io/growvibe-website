"use client";

import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLightbox, type LightboxImage } from "@/components/lightbox-provider";

/**
 * Portfolio card for a real, screenshotted project (not an illustrated
 * mockup — see CaseStudyCard/ProjectPreview for those). Same outer sizing,
 * spacing and hover treatment as CaseStudyCard so it sits in the same grid
 * without looking like a different component. The preview image opens the
 * shared fullscreen lightbox (see LightboxProvider) instead of navigating
 * away, and cycles through `lightboxImages` when a full set is passed in.
 */
export interface LiveProjectCardProps {
  id?: string;
  category: string;
  title: string;
  description: string;
  badge: string;
  image: string;
  imageAlt: string;
  url?: string;
  /** Full ordered set of screenshots to cycle through in the lightbox. Defaults to just this image. */
  lightboxImages?: LightboxImage[];
  /** This card's position within `lightboxImages`. */
  lightboxIndex?: number;
}

export function LiveProjectCard({
  id,
  category,
  title,
  description,
  badge,
  image,
  imageAlt,
  url,
  lightboxImages,
  lightboxIndex = 0,
}: LiveProjectCardProps) {
  const { openAt } = useLightbox();
  const images = lightboxImages ?? [{ src: image, alt: imageAlt }];
  const index = lightboxImages ? lightboxIndex : 0;
  const open = () => openAt(images, index);

  return (
    <Card
      id={id}
      data-cursor="hover"
      className="group relative flex h-full scroll-mt-28 flex-col overflow-hidden border-border/70 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.015] hover:border-ink/20 hover:shadow-xl"
    >
      <div className="h-[210px] border-b border-border p-2 sm:h-[230px] sm:p-2.5">
        <button
          type="button"
          onClick={open}
          aria-label={`View full preview: ${title}`}
          data-cursor="hover"
          className="flex h-full w-full flex-col overflow-hidden rounded-lg border-[5px] border-ink bg-background text-left sm:rounded-xl sm:border-[7px]"
        >
          <div className="flex flex-shrink-0 items-center gap-1.5 bg-ink px-2.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
            {url && (
              <span className="mx-auto max-w-[70%] truncate text-[9px] font-medium text-white/50">
                {url}
              </span>
            )}
          </div>
          <div className="relative flex-1 overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              quality={90}
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
          </div>
        </button>
      </div>

      <div className="flex flex-1 flex-col justify-between p-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            {category}
          </span>
          <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="mt-6 border-t border-border pt-5">
          <Badge variant="accent" className="font-medium">
            {badge}
          </Badge>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <button
              type="button"
              onClick={open}
              data-cursor="hover"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              View Full Preview
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
