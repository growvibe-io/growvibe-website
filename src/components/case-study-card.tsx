import Link from "next/link";
import { ArrowUpRight, ShoppingCart, Search, Star, TrendingUp, Bot, Send, Sparkles } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DeviceFrame, MiniAreaChart, Donut, StatTile, Photo } from "@/components/mockup-ui";

type PreviewVariant = "ecommerce" | "dashboard" | "chat";

/**
 * Rich, original demo interfaces — NOT real screenshots. These are
 * concept/demo/internal projects with no live product to photograph, so
 * rather than fabricate a fake "real" screenshot, each variant is a
 * distinct, on-brand product mockup (its own layout, not reused from the
 * others) built only from this site's palette and components.
 */
function ProjectPreview({ variant = "dashboard" }: { variant?: PreviewVariant }) {
  return (
    <div className="h-[210px] border-b border-border p-2 sm:h-[230px] sm:p-2.5">
      <DeviceFrame>
        {variant === "ecommerce" && (
          <div className="flex h-full flex-col bg-card">
            {/* Full-bleed banner photo with the nav overlaid directly on
                top, like a real scrolled screenshot of a storefront home
                page rather than a boxed-in illustration. */}
            <div className="relative flex-[1.6] overflow-hidden">
              <Photo
                seed="growvibe-ecom-banner"
                width={520}
                height={260}
                className="absolute inset-0 brightness-[0.55]"
              />
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-2.5 py-1.5 sm:px-3">
                <span className="text-[7px] font-bold tracking-tight text-white sm:text-[9px]">Aurora Goods</span>
                <div className="flex items-center gap-2">
                  <Search className="h-2.5 w-2.5 text-white/80" />
                  <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white/20">
                    <ShoppingCart className="h-2 w-2 text-white" />
                    <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-primary text-[5px] font-bold text-primary-foreground">
                      3
                    </span>
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 z-10 flex flex-col justify-center gap-1 px-2.5 sm:px-3">
                <span className="text-[8px] font-heading font-semibold text-white sm:text-[12px]">
                  New Season, New Style
                </span>
                <span className="w-fit rounded-full bg-primary px-2 py-0.5 text-[6px] font-semibold text-primary-foreground">
                  Shop Now
                </span>
              </div>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-1.5 overflow-hidden bg-background p-1.5 sm:p-2">
              {[
                { name: "Canvas Tote", price: "$48", seed: "growvibe-product-tote" },
                { name: "Studio Lamp", price: "$96", seed: "growvibe-product-lamp" },
                { name: "Ceramic Vase", price: "$32", seed: "growvibe-product-vase" },
                { name: "Wool Throw", price: "$64", seed: "growvibe-product-throw" },
              ].map((p) => (
                <div key={p.name} className="flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-sm">
                  <div className="h-[55%] overflow-hidden">
                    <Photo seed={p.seed} width={200} height={140} />
                  </div>
                  <div className="flex flex-1 flex-col justify-center gap-0.5 px-1.5 py-1">
                    <span className="truncate text-[6px] font-medium text-foreground sm:text-[7px]">{p.name}</span>
                    <div className="flex items-center justify-between">
                      <span className="text-[6px] font-bold text-foreground sm:text-[7px]">{p.price}</span>
                      <div className="flex text-primary">
                        {Array.from({ length: 4 }).map((_, s) => (
                          <Star key={s} className="h-1.5 w-1.5 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {variant === "dashboard" && (
          <div className="flex h-full flex-col bg-card">
            <div className="flex flex-shrink-0 items-center justify-between border-b border-border px-3 py-2 sm:px-4">
              <span className="text-[7px] font-bold text-foreground sm:text-[9px]">Customer Dashboard</span>
              <span className="hidden items-center gap-1 rounded-full border border-border px-1.5 py-0.5 sm:flex">
                <Search className="h-2 w-2 text-muted-foreground" />
                <span className="text-[6px] text-muted-foreground">Search</span>
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-1.5 overflow-hidden bg-background p-1.5 sm:p-2">
            <div className="grid flex-shrink-0 grid-cols-3 gap-1.5">
              <StatTile label="Customers" value="1,204" delta="+6%" />
              <StatTile label="Open Deals" value="86" />
              <StatTile label="Win Rate" value="41%" delta="+3%" />
            </div>

            <div className="flex flex-shrink-0 flex-col gap-1 rounded-md border border-border bg-card p-1.5 shadow-sm">
              {[
                { label: "New", pct: 100, count: 24 },
                { label: "Qualified", pct: 62, count: 15 },
                { label: "Won", pct: 30, count: 7 },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-1.5">
                  <span className="w-10 flex-shrink-0 text-[6px] font-medium text-muted-foreground sm:w-12 sm:text-[7px]">
                    {s.label}
                  </span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${s.pct}%` }} />
                  </div>
                  <span className="w-4 flex-shrink-0 text-right text-[6px] font-semibold text-foreground">{s.count}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-1 gap-1.5 overflow-hidden">
              <div className="flex flex-[1.4] flex-col rounded-md border border-border bg-card p-1.5 shadow-sm">
                <span className="mb-1 flex items-center gap-1 text-[6px] font-medium text-muted-foreground sm:text-[7px]">
                  <TrendingUp className="h-2.5 w-2.5 text-primary" />
                  Deals Closed
                </span>
                <MiniAreaChart gradientId="portfolio-crm" points="0,26 15,22 30,24 45,14 60,18 75,8 100,6" />
              </div>
              <div className="hidden flex-1 flex-col items-center justify-center gap-0.5 rounded-md border border-border bg-card p-1.5 shadow-sm sm:flex">
                <Donut value={68} size={34} />
                <span className="text-[6px] font-medium text-muted-foreground">Lead Source</span>
              </div>
            </div>
            </div>
          </div>
        )}

        {variant === "chat" && (
          <div className="flex h-full flex-col bg-card">
            <div className="flex flex-shrink-0 items-center justify-between border-b border-border px-3 py-2 sm:px-4">
              <span className="flex items-center gap-1 text-[7px] font-bold text-foreground sm:text-[9px]">
                <Bot className="h-2.5 w-2.5 text-primary" />
                Retail Assistant
              </span>
              <span className="flex items-center gap-1 text-[6px] font-medium text-primary">
                <span className="h-1 w-1 rounded-full bg-primary" />
                Online
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-1.5 overflow-hidden bg-background p-1.5 sm:p-2">
            <div className="flex flex-1 flex-col justify-end gap-1 overflow-hidden">
              <div className="ml-auto max-w-[75%] rounded-lg rounded-tr-none bg-primary/15 px-1.5 py-1">
                <span className="text-[6px] leading-snug text-foreground sm:text-[7px]">
                  Recommend a gift under $50
                </span>
              </div>
              <div className="flex items-start gap-1">
                <span className="flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <Bot className="h-2 w-2 text-primary" />
                </span>
                <div className="max-w-[80%] rounded-lg rounded-tl-none border border-border bg-card px-1.5 py-1 shadow-sm">
                  <span className="text-[6px] leading-snug text-foreground sm:text-[7px]">
                    Here are a few picks I think they&apos;d love:
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-shrink-0 gap-1.5">
              {[
                { name: "Ceramic Vase", price: "$32", seed: "growvibe-reco-vase" },
                { name: "Wool Throw", price: "$44", seed: "growvibe-reco-throw" },
                { name: "Candle Set", price: "$28", seed: "growvibe-reco-candle" },
              ].map((p) => (
                <div key={p.name} className="flex flex-1 flex-col overflow-hidden rounded-md border border-border bg-card shadow-sm">
                  <div className="h-5 overflow-hidden">
                    <Photo seed={p.seed} width={120} height={60} />
                  </div>
                  <div className="px-1 py-0.5">
                    <div className="truncate text-[6px] font-medium text-foreground">{p.name}</div>
                    <div className="text-[6px] font-bold text-primary">{p.price}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-shrink-0 items-center gap-1 text-[6px] text-muted-foreground">
              <Sparkles className="h-2.5 w-2.5 text-primary" />
              AI-personalized recommendations
            </div>

            <div className="grid flex-shrink-0 grid-cols-3 gap-1.5">
              <StatTile label="Conversion" value="8.4%" />
              <StatTile label="Avg Order" value="$62" />
              <StatTile label="Assisted Sales" value="$14.2k" />
            </div>

            <div className="flex flex-shrink-0 items-center gap-1.5">
              <div className="flex flex-1 items-center rounded-full border border-border bg-card px-2 py-1">
                <span className="text-[6px] text-muted-foreground">Ask about a product…</span>
              </div>
              <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                <Send className="h-2 w-2 text-primary-foreground" />
              </span>
            </div>
            </div>
          </div>
        )}
      </DeviceFrame>
    </div>
  );
}

export interface CaseStudyCardProps {
  id?: string;
  client: string;
  industry: string;
  description: string;
  /** Concept Project / Demo Project / Internal Build — used for projects
   *  that don't have a real, verifiable client metric to report. */
  tag?: string;
  /** Only set metric/result for real, verified client outcomes. */
  metric?: string;
  result?: string;
  /** Which preview layout to draw. Defaults to a dashboard shape. */
  preview?: PreviewVariant;
  /** If set, renders a "View Project" link (e.g. to the full portfolio page). */
  viewHref?: string;
}

export function CaseStudyCard({
  id,
  client,
  industry,
  description,
  tag,
  metric,
  result,
  preview = "dashboard",
  viewHref,
}: CaseStudyCardProps) {
  return (
    <Card
      id={id}
      data-cursor="hover"
      className="group relative flex h-full scroll-mt-28 flex-col overflow-hidden border-border/70 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.015] hover:border-ink/20 hover:shadow-xl"
    >
      <ProjectPreview variant={preview} />
      <div className="flex flex-1 flex-col justify-between p-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            {industry}
          </span>
          <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight">
            {client}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="mt-6 border-t border-border pt-5">
          {metric && result ? (
            <>
              <div className="font-heading text-3xl font-semibold text-primary">
                {metric}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{result}</p>
            </>
          ) : (
            <div className="flex items-center justify-between gap-3">
              {tag && (
                <Badge variant="accent" className="font-medium">
                  {tag}
                </Badge>
              )}
              {viewHref && (
                <Link
                  href={viewHref}
                  data-cursor="hover"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  View Project
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
