import Link from "next/link";
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
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { Stagger, StaggerItem } from "@/components/stagger";
import { Magnetic } from "@/components/magnetic";
import { SectionHeading } from "@/components/section-heading";
import { FaqAccordion } from "@/components/faq-accordion";

const siteUrl = "https://growvibe.io";

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
    description: "Custom, AI-powered CRM systems, from A$9,000 fixed price — the one service where we do publish a starting point.",
    href: "/services/crm-development",
    cta: "See CRM pricing",
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
    question: "Why don't you publish a fixed price list?",
    answer:
      "Because a five-page brochure site and a multi-role CRM integration aren't the same project, and a single price list would either overcharge simple projects or undercharge complex ones. Instead, we quote a fixed price for your specific scope after a short, free call — so you know exactly what you're paying for before we start.",
  },
  {
    question: "Do you ever publish fixed prices?",
    answer:
      "Yes, for CRM Development we publish a starting price of A$9,000 since that project type has a consistent enough scope to quote upfront. For most other services, scope varies enough that a short call gets you a far more accurate number than a generic figure would.",
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

      {/* Hero */}
      <section className="border-b border-border bg-background">
        <div className="container py-20 text-center">
          <Reveal>
            <Badge variant="accent" className="mb-6">
              Pricing
            </Badge>
            <h1 className="mx-auto max-w-2xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              A custom quote, built around your actual project
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              We don&apos;t publish a one-size-fits-all price list, because no
              two projects need the same thing. Instead, every quote is
              fixed, written, and agreed before we start — no hourly
              billing, no surprises.
            </p>
          </Reveal>
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
                  data-cursor="hover"
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
                data-cursor="hover"
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
                    data-cursor="hover"
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
