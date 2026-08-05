"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Puzzle,
  Bot,
  MessageSquare,
  LayoutDashboard,
  Sparkles,
  RefreshCw,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type IconComponent = React.ComponentType<{ className?: string }>;

// Icon components are functions, and Next.js can't pass functions from a
// Server Component (page.tsx) across the boundary into this Client
// Component as props. So `AiSolutionCard.icon` carries a plain string key
// instead, and this map (which lives entirely inside the client bundle)
// resolves it to the actual icon component.
export type AiSolutionIconKey = "website" | "chatbot" | "support" | "crm" | "seo" | "automation";

const ICONS: Record<AiSolutionIconKey, IconComponent> = {
  website: Puzzle,
  chatbot: Bot,
  support: MessageSquare,
  crm: LayoutDashboard,
  seo: Sparkles,
  automation: RefreshCw,
};

export interface AiSolutionCard {
  id: string;
  icon: AiSolutionIconKey;
  title: string;
  description: string;
  features: string[];
  /** Where "Learn More" links to. Defaults to /contact when not set. */
  href?: string;
}

// Alternating dark / light panel styling, per the requested design —
// index 0, 2, 4 are dark; 1, 3, 5 are light gray.
type Tone = "dark" | "light";
const CARD_TONES: Tone[] = ["dark", "light", "dark", "light", "dark", "light"];

/**
 * A single stacked panel. On desktop each card is `position: sticky` with
 * the same `top` offset, so — using nothing but normal document flow and
 * CSS sticky positioning — each new card slides up the page and settles in
 * place over the previous one as the visitor scrolls. No scroll-hijacking,
 * no wheel listeners, no locked body scroll: the browser's native scrolling
 * drives the entire effect, so the page always scrolls through and past the
 * section normally.
 */
function AiCard({
  item,
  tone,
  index,
  isLast,
}: {
  item: AiSolutionCard;
  tone: Tone;
  index: number;
  isLast: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isDark = tone === "dark";
  const Icon = ICONS[item.icon];

  return (
    <motion.div
      id={item.id}
      initial={shouldReduceMotion ? undefined : { opacity: 0.85, scale: 0.98, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ zIndex: index + 1 }}
      className={cn(
        "relative flex min-h-[420px] scroll-mt-28 flex-col overflow-hidden rounded-[24px] p-9 shadow-xl sm:min-h-[460px] sm:p-12 lg:sticky lg:top-[120px] lg:h-[500px]",
        !isLast && "mb-6 sm:mb-8",
        isDark ? "bg-ink text-white" : "border border-border/70 bg-secondary text-foreground"
      )}
    >
      {/* Subtle decorative visual — a large, faint ghost icon in the corner. */}
      <Icon
        aria-hidden
        className={cn(
          "pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 rotate-[-8deg]",
          isDark ? "text-white/[0.06]" : "text-ink/[0.05]"
        )}
      />

      <div
        className={cn(
          "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg",
          isDark ? "bg-white/10 text-primary" : "bg-primary/10 text-primary"
        )}
      >
        <Icon className="h-[18px] w-[18px]" />
      </div>

      <h3 className="relative mt-5 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
        {item.title}
      </h3>
      <p
        className={cn(
          "relative mt-2.5 max-w-md text-sm leading-relaxed sm:text-base",
          isDark ? "text-white/65" : "text-muted-foreground"
        )}
      >
        {item.description}
      </p>

      <ul className="relative mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
        {item.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
            <span className={isDark ? "text-white/80" : "text-foreground/80"}>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={item.href ?? "/contact"}
        className={cn(
          "group relative mt-auto inline-flex w-fit items-center gap-1.5 pt-6 text-sm font-medium transition-colors",
          isDark ? "text-white hover:text-primary" : "text-ink hover:text-primary"
        )}
      >
        Learn More
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}

/**
 * Split-screen AI Solutions section: a sticky left column (label, heading,
 * copy, CTA) alongside six stacked cards on the right that slide upward and
 * take each other's place as the visitor scrolls — built entirely with CSS
 * sticky positioning and normal document scroll, so the page never traps
 * the visitor and always continues naturally into the next section.
 */
export function AiSolutionsShowcase({ items }: { items: AiSolutionCard[] }) {
  return (
    <section id="ai-solutions" className="scroll-mt-28 bg-secondary/40 py-20 sm:py-28">
      <div className="container">
        <div className="lg:grid lg:grid-cols-[42%_58%] lg:items-start lg:gap-x-12 xl:gap-x-16">
          <div className="lg:sticky lg:top-[120px]">
            <Reveal>
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                AI Solutions
              </div>
              <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Put AI to Work in Your Business
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                From intelligent websites and 24/7 chat assistants to CRM automation and
                AI-powered SEO, we build practical AI solutions that help businesses save time,
                capture more leads, and serve customers more efficiently.
              </p>
              <div className="mt-8">
                <Magnetic>
                  <Button variant="default" size="lg" asChild>
                    <Link href="/contact">
                      Explore AI Solutions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 lg:mt-0">
            {items.map((item, i) => (
              <AiCard
                key={item.id}
                item={item}
                tone={CARD_TONES[i % CARD_TONES.length]}
                index={i}
                isLast={i === items.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
