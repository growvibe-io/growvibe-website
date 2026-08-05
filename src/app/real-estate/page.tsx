import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Building2,
  Zap,
  Users,
  ShieldCheck,
  ClipboardList,
  MapPin,
  Search,
  Home,
  Check,
  ChevronDown,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { Stagger, StaggerItem } from "@/components/stagger";
import { Magnetic } from "@/components/magnetic";
import { SectionHeading } from "@/components/section-heading";
import { FaqAccordion } from "@/components/faq-accordion";
import { LightboxProvider, type LightboxImage } from "@/components/lightbox-provider";
import { LiveProjectCard } from "@/components/live-project-card";
import { DeviceFrame, Photo } from "@/components/mockup-ui";
import { LiveChatCtaButton } from "@/components/live-chat-cta-button";

const siteUrl = "https://growvibe.io";

export const metadata: Metadata = {
  title: "Real Estate Website Design & Development",
  description:
    "Premium, high-performance real estate websites for agencies, developers and property consultants — IDX/MLS integration, lead capture, CRM integration, and SEO-optimised, built to convert.",
  alternates: { canonical: "/real-estate" },
  openGraph: {
    title: "Real Estate Website Design & Development | GrowVibe",
    description:
      "Premium, high-performance real estate websites for agencies, developers and property consultants — IDX/MLS integration, lead capture, and SEO-optimised, built to convert.",
    url: `${siteUrl}/real-estate`,
    siteName: "GrowVibe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Website Design & Development | GrowVibe",
    description:
      "Premium, high-performance real estate websites for agencies, developers and property consultants — IDX/MLS integration, lead capture, and SEO-optimised, built to convert.",
  },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const WHY_GROWVIBE: { icon: typeof Building2; title: string; description: string }[] = [
  {
    icon: Building2,
    title: "Built for Property Businesses",
    description:
      "Not a generic template — every site is structured around listings, agents, and enquiries from day one.",
  },
  {
    icon: Zap,
    title: "Fast, Modern Websites",
    description:
      "Built with Next.js for pages that load instantly and hold up under real listing traffic.",
  },
  {
    icon: Users,
    title: "More Qualified Leads",
    description:
      "Lead capture forms and clear calls to action, designed to convert browsers into real enquiries.",
  },
  {
    icon: ShieldCheck,
    title: "One Team, Start to Finish",
    description:
      "Design, development, SEO, and ongoing support from a single team — no handoffs, no guesswork.",
  },
];

// Real, live example (GoldChase Advisory — a luxury real estate investment
// advisory site, reusing the same screenshot from the main Portfolio page)
// alongside honestly-labeled concept builds. No fabricated "real" projects.
const RECENT_PROJECTS_REAL = {
  id: "goldchase-advisory",
  category: "REAL ESTATE ADVISORY",
  title: "GoldChase Advisory",
  description:
    "A premium corporate website for a luxury real estate investment advisory firm — modern interface, premium branding, and a strong focus on lead generation and client trust.",
  badge: "Live Website",
  image: "/portfolio-screenshots/goldchase-advisory.jpg",
};

const FEATURES: { icon: typeof Home; title: string; description: string }[] = [
  {
    icon: Home,
    title: "IDX/MLS Integration",
    description:
      "Pull live listings directly from your IDX or MLS feed, so property data stays accurate and up to date automatically.",
  },
  {
    icon: ClipboardList,
    title: "Lead Capture Forms",
    description:
      "Enquiry forms, tour requests, and property alerts built to capture and route leads straight to your team.",
  },
  {
    icon: MapPin,
    title: "Google Maps Integration",
    description:
      "Interactive maps with property pins, neighbourhood context, and location-based search built in.",
  },
  {
    icon: Users,
    title: "CRM Integration",
    description:
      "Connect leads directly into your existing CRM — or we build one for you — so nothing falls through the cracks.",
  },
  {
    icon: Search,
    title: "SEO Optimised",
    description:
      "Built on a technical foundation designed to rank — clean structure, fast pages, and proper metadata from day one.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Loading",
    description:
      "Built with Next.js so pages load in under two seconds, on any device and any connection.",
  },
];

// Kept intentionally empty — no fabricated client quotes. The moment real,
// permission-to-quote testimonials exist, add them here and this section
// switches from the fallback below to showing them automatically (same
// pattern used on the homepage).
const TESTIMONIALS: { quote: string; name: string; role: string }[] = [];

const APPROACH_POINTS = [
  "Strategy built around your listings and leads",
  "Direct access to the people building your site",
  "Transparent timelines, fixed scope",
  "Support that continues after launch",
];

// No invented dollar figures — pricing for a vertical this specific
// (IDX/MLS scope varies a lot deal to deal) is quoted after a short call,
// consistent with the rest of the main site's "no fixed price, worldwide"
// positioning. Each tier is feature-scoped instead.
const PRICING_TIERS: {
  title: string;
  tag?: string;
  featured?: boolean;
  description: string;
  features: string[];
}[] = [
  {
    title: "Agent Website",
    description: "For individual agents and small teams building their own presence.",
    features: [
      "Up to 6 pages, custom designed",
      "Mobile-first, fast-loading build",
      "Lead capture & contact forms",
      "Basic SEO foundation",
      "Google Maps on listing/contact pages",
    ],
  },
  {
    title: "Agency / Brokerage",
    tag: "Most popular",
    featured: true,
    description: "For agencies and brokerages managing multiple agents and live listings.",
    features: [
      "Everything in Agent Website",
      "IDX/MLS listing feed integration",
      "Multi-agent profiles & search",
      "CRM integration for lead routing",
      "Property search & map filtering",
      "SEO foundation across all pages",
    ],
  },
  {
    title: "Enterprise Platform",
    description: "For multi-office brokerages and developers needing a custom platform.",
    features: [
      "Everything in Agency / Brokerage",
      "Custom property management dashboard",
      "Multi-location & multi-brand support",
      "Marketing automation & analytics",
      "Dedicated support and priority SLAs",
    ],
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Real Estate Website Design & Development",
      item: `${siteUrl}/real-estate`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Real Estate Website Design & Development",
  name: "Real Estate Website Design & Development",
  description:
    "Premium, high-performance real estate websites for agencies, developers and property consultants — IDX/MLS integration, lead capture, CRM integration, and SEO-optimised, built to convert.",
  provider: {
    "@type": "Organization",
    name: "GrowVibe",
    url: siteUrl,
  },
  areaServed: ["United States", "Worldwide"],
};

const FAQ_ITEMS = [
  {
    question: "Do you integrate with IDX/MLS listing feeds?",
    answer:
      "Yes. We integrate IDX/MLS feeds so your listings stay live and searchable directly on your site, pulling from the feed your brokerage already uses.",
  },
  {
    question: "How long does a real estate website take to build?",
    answer:
      "Most agent and small agency sites are ready in a few weeks. Larger multi-office platforms with custom property search and dashboards take longer — we'll give you an exact timeline once we understand your scope.",
  },
  {
    question: "Can you migrate our existing property listings?",
    answer:
      "Yes. We can migrate existing listings, agent bios, and content from your current site so nothing is lost during the switch.",
  },
  {
    question: "Is SEO included?",
    answer:
      "Every real estate site we build starts with a solid on-page SEO foundation — fast loading, proper structure, and metadata. Ongoing SEO campaigns are available separately if you want to actively grow organic search traffic.",
  },
  {
    question: "Can you connect our CRM or lead system?",
    answer:
      "Yes. We can connect popular CRMs and lead-routing tools, or build a custom CRM if your team needs something tailored to how you actually work.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Every project includes free support after launch, and you can move onto an ongoing care plan for updates, monitoring, and content changes.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

// ---------------------------------------------------------------------------
// Illustrative "concept" project mockups — original layouts built from this
// site's own design system, not screenshots of any real product. Used for
// projects with no live site to photograph, matching the honesty standard
// used on the main Portfolio page (clearly labeled "Concept Project").
// ---------------------------------------------------------------------------

function PropertyListingsPreview() {
  const properties = [
    { price: "$650,000", meta: "4 bd · 3 ba", seed: "growvibe-re-home-1" },
    { price: "$425,000", meta: "2 bd · 2 ba", seed: "growvibe-re-home-2" },
    { price: "$1.2M", meta: "5 bd · 4 ba", seed: "growvibe-re-home-3" },
    { price: "$890,000", meta: "3 bd · 3 ba", seed: "growvibe-re-home-4" },
  ];
  return (
    <div className="h-[210px] border-b border-border p-2 sm:h-[230px] sm:p-2.5">
      <DeviceFrame>
        <div className="flex h-full flex-col bg-card">
          <div className="relative flex-[1.3] overflow-hidden">
            <Photo
              seed="growvibe-re-hero"
              width={520}
              height={220}
              className="absolute inset-0 brightness-[0.55]"
            />
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-2.5 py-1.5 sm:px-3">
              <span className="text-[7px] font-bold tracking-tight text-white sm:text-[9px]">Aurora Realty</span>
              <span className="rounded-full bg-primary px-2 py-0.5 text-[6px] font-semibold text-primary-foreground">
                Search
              </span>
            </div>
            <div className="absolute inset-0 z-10 flex flex-col justify-center gap-1 px-2.5 sm:px-3">
              <span className="text-[8px] font-heading font-semibold text-white sm:text-[12px]">
                Find Your Next Home
              </span>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-1.5 overflow-hidden bg-background p-1.5 sm:p-2">
            {properties.map((p) => (
              <div
                key={p.price}
                className="flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-sm"
              >
                <div className="h-[55%] overflow-hidden">
                  <Photo seed={p.seed} width={200} height={140} />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-0.5 px-1.5 py-1">
                  <span className="truncate text-[6px] font-bold text-foreground sm:text-[7px]">{p.price}</span>
                  <span className="truncate text-[6px] text-muted-foreground">{p.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DeviceFrame>
    </div>
  );
}

function PropertyMapSearchPreview() {
  const pins = [
    { x: "28%", y: "32%" },
    { x: "55%", y: "58%" },
    { x: "72%", y: "24%" },
    { x: "42%", y: "72%" },
  ];
  const list = [
    { price: "$520k", meta: "3 bd", seed: "growvibe-re-map-1" },
    { price: "$640k", meta: "4 bd", seed: "growvibe-re-map-2" },
    { price: "$380k", meta: "2 bd", seed: "growvibe-re-map-3" },
  ];
  return (
    <div className="h-[210px] border-b border-border p-2 sm:h-[230px] sm:p-2.5">
      <DeviceFrame>
        <div className="flex h-full bg-card">
          <div className="hidden w-[38%] flex-col gap-1.5 overflow-hidden border-r border-border bg-background p-1.5 sm:flex sm:p-2">
            <span className="text-[6px] font-bold text-foreground sm:text-[7px]">24 Properties</span>
            {list.map((p) => (
              <div key={p.price} className="flex gap-1 rounded-md border border-border bg-card p-1 shadow-sm">
                <div className="h-6 w-8 flex-shrink-0 overflow-hidden rounded-sm">
                  <Photo seed={p.seed} width={80} height={60} />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-0.5">
                  <span className="text-[5px] font-bold text-foreground">{p.price}</span>
                  <span className="text-[5px] text-muted-foreground">{p.meta}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="relative flex-1 overflow-hidden bg-secondary/40">
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
            />
            {pins.map((pos, i) => (
              <span
                key={i}
                className="absolute flex h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md"
                style={{ left: pos.x, top: pos.y }}
              >
                <MapPin className="h-2 w-2" />
              </span>
            ))}
          </div>
        </div>
      </DeviceFrame>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function RealEstatePage() {
  const projectImages: LightboxImage[] = [
    { src: RECENT_PROJECTS_REAL.image, alt: RECENT_PROJECTS_REAL.title },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero — full-screen looping video background */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink text-white sm:min-h-screen">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/real-estate-hero.mp4"
          poster="/videos/real-estate-hero-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        {/* Dark overlay for text readability — gradient so the bottom (where
            copy sits) is darkest, top stays a little lighter. */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink/85" />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.08]" />

        <div className="container relative py-24">
          <Reveal>
            <Badge variant="dark" className="mb-6">
              <Building2 className="mr-1.5 h-3 w-3 text-primary" />
              Real Estate Web Design
            </Badge>
            <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Premium Real Estate Websites That Generate More Leads
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              We build high-performance real estate websites for agencies, developers, and property
              consultants. Fast, modern, SEO-optimised, and designed to convert visitors into
              qualified enquiries.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Magnetic>
                <Button
                  size="lg"
                  variant="accent"
                  asChild
                  className="shadow-[0_0_0_0_rgba(28,160,102,0)] transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(28,160,102,0.35)]"
                >
                  <Link href="/contact?intent=quote" data-track="consultation-cta-click">
                    Request a Free Consultation
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic>
                <LiveChatCtaButton />
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-8 text-sm text-white/40">
              Built for agencies, developers &amp; independent property consultants
            </p>
          </Reveal>
        </div>

        <Reveal delay={400} className="absolute inset-x-0 bottom-6 hidden justify-center sm:flex">
          <span className="flex h-9 w-9 animate-float-icon items-center justify-center rounded-full border border-white/20 text-white/60">
            <ChevronDown className="h-4 w-4" />
          </span>
        </Reveal>
      </section>

      {/* 2. Why real estate businesses choose GrowVibe */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Why GrowVibe"
              title="Why real estate businesses choose GrowVibe"
              description="Property websites live and die by their listings and their leads — everything we build is structured around both."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_GROWVIBE.map((item, i) => (
              <StaggerItem key={item.title}>
                <Card
                  className="h-full border-border/70 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardContent className="pt-8">
                    <div
                      className="flex h-11 w-11 animate-float-icon items-center justify-center rounded-md bg-primary/10 text-primary"
                      style={{ animationDelay: `${i * 150}ms` }}
                    >
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-heading font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 3. Recent projects */}
      <section id="recent-projects" className="scroll-mt-24 bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Recent Projects"
              title="Real estate work, honestly labeled"
              description="A live client example alongside concept builds — clearly marked as exactly what each one is."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <LightboxProvider>
            <Stagger className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
              <StaggerItem>
                <LiveProjectCard
                  {...RECENT_PROJECTS_REAL}
                  imageAlt={RECENT_PROJECTS_REAL.title}
                  lightboxImages={projectImages}
                  lightboxIndex={0}
                />
              </StaggerItem>

              <StaggerItem>
                <Card
                  className="group relative flex h-full flex-col overflow-hidden border-border/70 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.015] hover:border-ink/20 hover:shadow-xl"
                >
                  <PropertyListingsPreview />
                  <div className="flex flex-1 flex-col justify-between p-8">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        AGENCY WEBSITE
                      </span>
                      <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight">
                        Property Listings Platform
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        A concept build for a multi-agent brokerage — property search, listing
                        grid, and lead capture designed to work with a live IDX/MLS feed.
                      </p>
                    </div>
                    <div className="mt-6 border-t border-border pt-5">
                      <Badge variant="accent" className="font-medium">
                        Concept Project
                      </Badge>
                    </div>
                  </div>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card
                  className="group relative flex h-full flex-col overflow-hidden border-border/70 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.015] hover:border-ink/20 hover:shadow-xl"
                >
                  <PropertyMapSearchPreview />
                  <div className="flex flex-1 flex-col justify-between p-8">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        PROPERTY SEARCH
                      </span>
                      <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight">
                        Map-Based Property Search
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        A concept build showing interactive map search with property pins — the
                        pattern used for the Google Maps integration on client sites.
                      </p>
                    </div>
                    <div className="mt-6 border-t border-border pt-5">
                      <Badge variant="accent" className="font-medium">
                        Concept Project
                      </Badge>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            </Stagger>
          </LightboxProvider>

          <Reveal delay={120}>
            <div className="mt-10 text-center">
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                View Full Portfolio
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Features */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Features"
              title="Everything a modern real estate site needs"
              description="Built in from the start, not bolted on later."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((item) => (
              <StaggerItem key={item.title}>
                <div
                  className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl"
                >
                  <div
                    aria-hidden
                    className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mt-5 font-heading text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 5. Testimonials — no fabricated quotes; wired to switch on
          automatically once real, permission-to-quote reviews exist. */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          {TESTIMONIALS.length > 0 ? (
            <>
              <Reveal>
                <SectionHeading
                  eyebrow="Testimonials"
                  title="Don't just take our word for it"
                  align="center"
                  className="mx-auto"
                />
              </Reveal>
              <Stagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
                {TESTIMONIALS.map((t) => (
                  <StaggerItem key={t.name}>
                    <Card className="flex h-full flex-col justify-between border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <CardContent className="pt-6">
                        <p className="text-sm leading-relaxed text-foreground/80">
                          &ldquo;{t.quote}&rdquo;
                        </p>
                        <div className="mt-6">
                          <p className="text-sm font-semibold">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </Stagger>
            </>
          ) : (
            <>
              <Reveal>
                <SectionHeading
                  eyebrow="Our Approach"
                  title="Built Around Your Property Business"
                  description="Every real estate project starts with your listings, your leads, and your market — not a reused template. You get a site designed around how your business actually works."
                  align="center"
                  className="mx-auto"
                />
              </Reveal>
              <Reveal delay={120}>
                <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
                  {APPROACH_POINTS.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                      <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                      {point}
                    </div>
                  ))}
                </div>
              </Reveal>
            </>
          )}
        </div>
      </section>

      {/* 6. Pricing — feature-scoped tiers, quoted after a short call rather
          than invented dollar figures (matches the main site's worldwide,
          no-fixed-price positioning). */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Pricing"
              title="Pricing that scopes to your business"
              description="Every real estate project is different — IDX providers, listing volume, and integrations all affect scope. Pick the tier closest to your needs and we'll confirm an exact, fixed quote on a short call."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <StaggerItem key={tier.title}>
                <Card
                  className={cn(
                    "flex h-full flex-col p-7",
                    tier.featured && "border-primary/60 shadow-lg shadow-primary/10 ring-1 ring-primary/60"
                  )}
                >
                  {tier.tag && (
                    <Badge variant="accent" className="mb-4 w-fit">
                      {tier.tag}
                    </Badge>
                  )}
                  <h3 className="font-heading text-lg font-semibold tracking-tight">{tier.title}</h3>
                  <p className="mt-2 border-b border-border pb-5 text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.featured ? "accent" : "outline"}
                    className="mt-6 w-full"
                    asChild
                  >
                    <Link href="/contact?intent=quote" data-track="consultation-cta-click">
                      Get a Custom Quote
                    </Link>
                  </Button>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions people actually ask"
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <Reveal delay={100}>
            <FaqAccordion items={FAQ_ITEMS} className="mx-auto mt-14 max-w-3xl" />
          </Reveal>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="container pb-24 pt-4">
        <Reveal>
          <div className="avoid-print-break relative overflow-hidden rounded-2xl bg-ink px-8 py-16 text-center text-white sm:px-16">
            <div className="absolute inset-0 bg-dot-grid opacity-[0.1]" />
            <div className="relative">
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready for a website that generates real leads?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60">
                Tell us about your listings, your market, and your goals — we&apos;ll show you exactly
                how we&apos;d build it.
              </p>
              <Magnetic className="mt-8 inline-flex">
                <Button size="lg" variant="light" asChild>
                  <Link href="/contact?intent=quote" data-track="consultation-cta-click">
                    Request a Free Consultation
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
