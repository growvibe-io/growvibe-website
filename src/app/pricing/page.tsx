import Link from "next/link";
import { headers } from "next/headers";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Check,
  MessageSquare,
  FileCheck,
  Hammer,
  Rocket,
  Globe2,
  Bot,
  LayoutDashboard,
  Sparkles,
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
import { GradientMesh } from "@/components/gradient-mesh";
import { AnimatedCounter } from "@/components/animated-counter";

const siteUrl = "https://growvibe.io";

// -----------------------------------------------------------------------
// Region-based project pricing. Real, business-confirmed starting prices
// per region (not currency-converted estimates) for the four core project
// tiers. Care Plans and Add-ons only have confirmed prices for India today
// (from /pricing-australia) — other regions show a "contact us" prompt for
// those instead of an invented number.
//
// Region is auto-detected from Vercel's `x-vercel-ip-country` request
// header (no third-party geo API/cost). This makes the page
// request-dependent, so it's dynamically rendered per-visit rather than
// statically generated — an acceptable trade-off for a low-traffic
// marketing page in exchange for correct per-region pricing. Any country
// not in REGION_META (or when the header is unavailable, e.g. locally)
// falls back to USD as a neutral, globally-understood default.
// -----------------------------------------------------------------------

type RegionCode = "IN" | "US" | "GB" | "AU" | "AE";

const REGION_META: Record<RegionCode, { label: string; currencyLabel: string }> = {
  IN: { label: "India", currencyLabel: "INR" },
  US: { label: "the United States", currencyLabel: "USD" },
  GB: { label: "the United Kingdom", currencyLabel: "GBP" },
  AU: { label: "Australia", currencyLabel: "AUD" },
  AE: { label: "the UAE", currencyLabel: "AED" },
};

function detectRegion(): RegionCode {
  const country = headers().get("x-vercel-ip-country");
  if (country === "IN" || country === "GB" || country === "AU" || country === "AE") {
    return country;
  }
  return "US";
}

type ProjectTier = {
  key: string;
  title: string;
  tag?: string;
  featured?: boolean;
  meta: string;
  features: string[];
  ctaVariant: "accent" | "outline";
  price: Record<RegionCode, string>;
};

const PROJECT_TIERS: ProjectTier[] = [
  {
    key: "business-website",
    title: "Business Website",
    tag: "Most popular",
    meta: "1–2 weeks · Built in Next.js",
    ctaVariant: "accent",
    price: { IN: "₹9,999", US: "$1,200", AU: "A$1,900", GB: "£950", AE: "AED 4,500" },
    features: [
      "Up to 8 pages, designed for you",
      "Custom design",
      "Built with Next.js",
      "Loads in under 2 seconds",
      "Works properly on every phone",
      "Contact forms and enquiry routing",
      "Google Analytics and Search Console set up",
      "On-page SEO foundations",
      "Unlimited rounds of revisions",
      "30 days free support after launch",
    ],
  },
  {
    key: "ecommerce",
    title: "E-commerce Store",
    meta: "2–3 weeks · Next.js + Stripe",
    ctaVariant: "outline",
    price: { IN: "₹15,999", US: "$2,500", AU: "A$3,900", GB: "£2,000", AE: "AED 9,500" },
    features: [
      "Up to 100 products",
      "Card payments and Apple / Google Pay",
      "Cart, checkout and order management",
      "Customer accounts and order history",
      "Stock and inventory tracking",
      "Abandoned cart emails",
      "Unlimited rounds of revisions",
      "30 days free support after launch",
    ],
  },
  {
    key: "crm",
    title: "Custom CRM",
    tag: "Our specialty",
    featured: true,
    meta: "4–5 weeks · Built around your workflow",
    ctaVariant: "accent",
    price: { IN: "₹79,999", US: "$4,500", AU: "A$7,000", GB: "£3,800", AE: "AED 17,000" },
    features: [
      "Contacts, leads and deal pipeline",
      "Fields and stages matched to how you work",
      "User roles and permissions",
      "Email and calendar integration",
      "Dashboards and reports your team will use",
      "We import your existing spreadsheets",
      "Unlimited rounds of revisions",
      "60 days free support after launch",
    ],
  },
  {
    key: "webapp",
    title: "Web App / SaaS",
    meta: "6–7 weeks · Scoped in stages",
    ctaVariant: "outline",
    price: { IN: "₹79,999", US: "$7,500", AU: "A$11,000", GB: "£6,500", AE: "AED 28,000" },
    features: [
      "Paid discovery and scoping first",
      "User accounts and secure login",
      "Subscription billing via Stripe",
      "Admin panel for your team",
      "API for future integrations",
      "Delivered in stages you approve",
      "Unlimited rounds of revisions",
      "90 days free support after launch",
    ],
  },
];

const CARE_PLANS_IN: { title: string; price: string; features: string[] }[] = [
  {
    title: "Essential",
    price: "₹3,999/month",
    features: [
      "Hosting, SSL & daily backups",
      "Security monitoring",
      "Priority emergency bug fixes",
      "Up to 2 hours of content updates per month",
      "Monthly SEO health report",
      "Email & live chat support",
    ],
  },
  {
    title: "Growth",
    price: "₹5,999/month",
    features: [
      "Everything in Essential",
      "Landing page creation",
      "Monthly performance optimisation",
      "SEO improvements",
      "Conversion optimisation recommendations",
    ],
  },
];

const ADD_ONS_IN: { title: string; price: string; description: string }[] = [
  {
    title: "AI Chat Assistant",
    price: "From ₹5,999",
    description: "Trained on your business. Answers customer questions and captures leads while you sleep.",
  },
  {
    title: "Workflow Automation",
    price: "From ₹9,999",
    description: "Connect your tools so data stops being typed twice. Quotes, invoices, follow-ups — automatic.",
  },
  {
    title: "SEO Setup",
    price: "From ₹9,999",
    description: "Technical audit, page structure, schema markup and a 3-month content plan you can run yourself.",
  },
  {
    title: "Extra Pages",
    price: "₹2,999 each",
    description: "Need more than 8 pages? Add them at a flat rate. No hourly billing, no surprises.",
  },
];

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "How GrowVibe prices website, CRM, web app, and AI projects — a transparent, fixed-quote process instead of a one-size-fits-all price list, for clients worldwide.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | GrowVibe",
    description:
      "How GrowVibe prices website, CRM, web app, and AI projects — a transparent, fixed-quote process instead of a one-size-fits-all price list, for clients worldwide.",
    url: `${siteUrl}/pricing`,
    siteName: "GrowVibe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | GrowVibe",
    description:
      "How GrowVibe prices website, CRM, web app, and AI projects — a transparent, fixed-quote process instead of a one-size-fits-all price list, for clients worldwide.",
  },
};

const QUOTE_FACTORS = [
  "Number of pages or screens your project needs",
  "Design complexity and custom features",
  "Required integrations (CRM, booking, payments, analytics)",
  "AI features, like a chat assistant or workflow automation",
  "Data migration from an existing site, CRM, or spreadsheets",
  "Your preferred timeline",
];

const HOW_IT_WORKS = [
  {
    icon: MessageSquare,
    title: "Free consultation",
    description:
      "A short call to understand your goals, requirements, and timeline — no cost, no obligation.",
  },
  {
    icon: FileCheck,
    title: "Fixed, written quote",
    description:
      "A clear proposal with the exact scope and price, agreed in writing before any work starts. No hourly billing.",
  },
  {
    icon: Hammer,
    title: "Build",
    description:
      "We design and build your project, with regular updates so you're never waiting in the dark.",
  },
  {
    icon: Rocket,
    title: "Launch & support",
    description:
      "We launch your project and stay involved afterward with support as your business evolves.",
  },
];

const STARTING_POINTS: {
  icon: typeof Globe2;
  title: string;
  description: string;
  href: string;
  cta: string;
}[] = [
  {
    icon: Globe2,
    title: "Website Design & Development",
    description:
      "Custom websites, e-commerce stores, and landing pages — priced around your pages, features, and integrations.",
    href: "/website-design",
    cta: "See what's included",
  },
  {
    icon: LayoutDashboard,
    title: "CRM Development",
    description: "Custom, AI-powered CRM systems — see the Custom CRM tier in the pricing table above for a real starting point in your region.",
    href: "/services/crm-development",
    cta: "See CRM details",
  },
  {
    icon: Bot,
    title: "AI Solutions & Automation",
    description:
      "Chatbots, workflow automation, and AI features added to a new or existing site — scoped around what you actually need.",
    href: "/services#ai-automation",
    cta: "Explore AI solutions",
  },
];

const FAQ_ITEMS = [
  {
    question: "Why don't you publish a fixed price list for everything?",
    answer:
      "For our four core project types — Business Website, E-commerce Store, Custom CRM, and Web App/SaaS — we do, in the pricing table above, with a real starting price for your region. Beyond those four, scope varies enough (AI features, integrations, migrations) that a single number would either overcharge simple projects or undercharge complex ones, so we quote those after a short, free call.",
  },
  {
    question: "Are the starting prices above final?",
    answer:
      "They're real starting points for the most common version of each project, not teaser numbers. Your exact price depends on the specific pages, features, and integrations you need — we confirm the final figure in a fixed, written quote before any work begins.",
  },
  {
    question: "Is there a deposit, and how do payments work?",
    answer:
      "Most projects are 50% to begin and 50% on approval before final handover, agreed in writing as part of your fixed quote. Larger web app builds may be split into staged payments tied to milestones instead.",
  },
  {
    question: "Will the price change once you start the project?",
    answer:
      "No. We quote a fixed price for a fixed scope, agreed in writing before we start. If you ask for something outside that scope during the build, we quote it separately and you decide before we touch it — you won't get a surprise invoice.",
  },
  {
    question: "Do you work with businesses outside the United States?",
    answer:
      "Yes. GrowVibe serves clients worldwide, with teams registered in both the USA and India, and we work remotely across time zones every day.",
  },
  {
    question: "What's the fastest way to get an actual number?",
    answer:
      "Tell us about your project on the Contact page. A free consultation is usually enough for us to give you a realistic price range on the call, followed by a written fixed quote once we understand your full requirements.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Pricing", item: `${siteUrl}/pricing` },
  ],
};

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

export default function PricingPage() {
  const region = detectRegion();
  const regionLabel = REGION_META[region].label;
  const isIndia = region === "IN";

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero — same dark / dot-grid / GradientMesh / stats-row pattern used
          on the CRM Development and Website Design hero sections, so this
          page matches the site's other "premium" heroes instead of
          standing out as a plain, flat one. */}
      <section className="relative overflow-hidden bg-ink pb-16 pt-20 text-white sm:pb-20 sm:pt-24">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.12]" />
        <GradientMesh />

        <div className="container relative text-center">
          <Reveal>
            <Badge variant="dark" className="mb-6">
              <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
              Pricing
            </Badge>
            <h1 className="mx-auto max-w-3xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Real starting prices, in your currency
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Below are real starting prices for {regionLabel}, shown in{" "}
              {REGION_META[region].currencyLabel}. Beyond these four core
              project types, every quote is fixed, written, and agreed
              before we start — no hourly billing, no surprises.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Magnetic>
                <Button size="lg" variant="light" asChild>
                  <Link href="/contact?intent=quote">
                    Get a Custom Quote
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button size="lg" variant="outlineLight" asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-xs text-white/40">
              Pricing shown for {regionLabel} based on your location.{" "}
              <Link href="/contact" className="underline underline-offset-2 hover:text-white/70">
                Contact us
              </Link>{" "}
              if that isn&apos;t right and we&apos;ll quote you correctly.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mx-auto mt-12 flex max-w-lg flex-wrap items-center justify-center gap-x-16 gap-y-6 border-t border-white/10 pt-10">
              <div>
                <div className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                  <AnimatedCounter value={PROJECT_TIERS.length} />
                </div>
                <p className="mt-1 text-sm text-white/50">Project types priced upfront</p>
              </div>
              <div>
                <div className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                  <AnimatedCounter value={100} suffix="%" />
                </div>
                <p className="mt-1 text-sm text-white/50">Fixed price, in writing</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Project pricing by region */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        {/* Soft, blurred color fields behind the cards — reuses the same
            blob-move keyframes GradientMesh uses on dark sections, toned
            down for a light background. Without something colorful behind
            them, the semi-transparent/backdrop-blur cards below would just
            look like flat white boxes rather than actual glass. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-0 h-[420px] w-[420px] animate-blob-slow rounded-full bg-primary/[0.12] blur-[110px]" />
          <div
            className="absolute -right-24 top-1/3 h-[380px] w-[380px] animate-blob-slower rounded-full bg-emerald-300/[0.14] blur-[110px]"
            style={{ animationDelay: "-6s" }}
          />
          <div
            className="absolute bottom-0 left-1/3 h-[320px] w-[320px] animate-blob-slow rounded-full bg-primary/[0.08] blur-[100px]"
            style={{ animationDelay: "-3s" }}
          />
        </div>

        <div className="container relative">
          <Reveal>
            <SectionHeading
              eyebrow="Project Pricing"
              title="Four core project types, priced for your region"
              description="Every price below is a real starting point, not a teaser. Your final quote depends on how many features you need — we confirm it in writing before any work begins."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECT_TIERS.map((tier) => (
              <StaggerItem key={tier.key}>
                <Card
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden border-white/60 bg-white/60 p-7 shadow-xl shadow-black/[0.03] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/75 hover:shadow-2xl",
                    tier.featured
                      ? "border-primary/50 ring-1 ring-primary/50 hover:shadow-primary/20"
                      : "hover:border-primary/40 hover:shadow-primary/10"
                  )}
                >
                  {tier.featured && (
                    <div
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/70 to-primary"
                    />
                  )}
                  {tier.tag && (
                    <Badge variant="accent" className="mb-4 w-fit">
                      {tier.tag}
                    </Badge>
                  )}
                  <h3 className="font-heading text-lg font-semibold tracking-tight">{tier.title}</h3>
                  <div className="mt-3">
                    <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                      From
                    </div>
                    <div className="mt-1 font-heading text-3xl font-semibold tracking-tight">
                      {tier.price[region]}
                    </div>
                  </div>
                  <p className="mt-2 border-b border-border pb-5 text-sm text-muted-foreground">{tier.meta}</p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.ctaVariant === "accent" ? "accent" : "outline"}
                    className="mt-6 w-full"
                    asChild
                  >
                    <Link href="/contact?intent=quote">Get a Quote</Link>
                  </Button>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Care plans */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Care Plans"
              title="Keep it running after launch"
              description="A website is not a one-off purchase. Things break, plugins expire, security patches land. Pick a plan and stop thinking about it."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
            {CARE_PLANS_IN.map((plan) => (
              <StaggerItem key={plan.title}>
                <Card
                  className="flex h-full flex-col border-border/70 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <h3 className="font-heading text-lg font-semibold">{plan.title}</h3>
                  <div className="mt-2 font-heading text-2xl font-semibold tracking-tight">
                    {isIndia ? plan.price : (
                      <span className="text-base font-medium text-muted-foreground">
                        Contact us for a custom monthly plan
                      </span>
                    )}
                  </div>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {!isIndia && (
                    <Button variant="outline" className="mt-6 w-full" asChild>
                      <Link href="/contact?intent=quote">Contact Us</Link>
                    </Button>
                  )}
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            {isIndia
              ? "Cancel any time with 30 days' notice. No lock-in contracts."
              : `Care plan pricing shown for India — get in touch for ${regionLabel} pricing.`}
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Add-ons"
              title="Bolt these onto any project"
              description="Optional extras that layer onto any of the project types above."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ADD_ONS_IN.map((addon) => (
              <StaggerItem key={addon.title}>
                <Card
                  className="flex h-full flex-col border-border/70 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <h3 className="font-heading text-base font-semibold">{addon.title}</h3>
                  <div className="mt-3 font-heading text-xl font-semibold text-primary">
                    {isIndia ? addon.price : "Contact us for pricing"}
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{addon.description}</p>
                  {!isIndia && (
                    <Link
                      href="/contact?intent=quote"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
                    >
                      Contact Us
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
          {!isIndia && (
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Add-on pricing shown for India — get in touch for {regionLabel} pricing.
            </p>
          )}
        </div>
      </section>

      {/* What affects your quote */}
      <section className="container py-20">
        <Reveal>
          <SectionHeading
            eyebrow="What affects your quote"
            title="Every project is scoped around a few key factors"
            description="Your final price depends on what you actually need — here's what we take into account."
          />
        </Reveal>

        <Reveal delay={100}>
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {QUOTE_FACTORS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* How it works */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="From first call to a fixed price"
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step, i) => (
              <StaggerItem key={step.title}>
                <Card
                  className="h-full border-border/70 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Where to start */}
      <section className="container py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Where to Start"
            title="Explore pricing by service"
            description="A few of our services in more depth — each links to what's included and how we scope it."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {STARTING_POINTS.map((item) => (
            <StaggerItem key={item.title}>
              <Card
                className="flex h-full flex-col border-border/70 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardContent className="flex h-full flex-col p-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent text-accent-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
                  >
                    {item.cta}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Pricing questions people actually ask" align="center" className="mx-auto" />
          </Reveal>
          <Reveal delay={120}>
            <FaqAccordion items={FAQ_ITEMS} className="mx-auto mt-14 max-w-3xl" />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-24">
        <Reveal>
          <div className="avoid-print-break relative overflow-hidden rounded-2xl bg-ink px-8 py-16 text-center text-white sm:px-16">
            <div className="absolute inset-0 bg-dot-grid opacity-[0.1]" />
            <GradientMesh className="opacity-60" />
            <div className="relative">
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to get a real number?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60">
                Tell us about your project and we&apos;ll follow up with a
                clear, fixed quote — not a generic estimate.
              </p>
              <Magnetic className="mt-8 inline-flex">
                <Button size="lg" variant="light" asChild>
                  <Link href="/contact?intent=quote">
                    Get a Custom Quote
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
