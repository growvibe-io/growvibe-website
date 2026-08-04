import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { Stagger, StaggerItem } from "@/components/stagger";
import { Magnetic } from "@/components/magnetic";
import { SectionHeading } from "@/components/section-heading";
import { CaseStudyCard } from "@/components/case-study-card";
import { LiveProjectCard } from "@/components/live-project-card";
import { LightboxProvider, type LightboxImage } from "@/components/lightbox-provider";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A look at GrowVibe's website, CRM, and AI project work, honestly labeled as concept, demo, or internal builds until real client case studies are ready to publish.",
  alternates: { canonical: "/work" },
};

// Honest, clearly-labeled project examples. We don't publish fictional
// company names or invented results as if they were real client outcomes —
// these are concept/demo/internal builds until we have real, permission-to-
// publish client case studies to add here.
const PROJECTS = [
  {
    id: "ecommerce-concept",
    client: "E-commerce Concept Project",
    industry: "E-commerce",
    description:
      "A modern e-commerce experience designed for fast product discovery, mobile usability, and a simple checkout flow.",
    tag: "Concept Project",
    preview: "ecommerce" as const,
  },
  {
    id: "custom-crm-demo",
    client: "Custom CRM Demo",
    industry: "CRM Systems",
    description:
      "A CRM dashboard created to manage leads, customer records, follow-ups, pipeline stages, and team activity.",
    tag: "Demo Project",
    preview: "dashboard" as const,
    viewHref: "/services/crm-development",
  },
  {
    id: "ai-retail-demo",
    client: "AI Retail Demo",
    industry: "AI Projects",
    description:
      "An AI-assisted storefront concept with customer support chat and intelligent product discovery.",
    tag: "Internal Build",
    preview: "chat" as const,
  },
];

// Real client and product websites — actual screenshots, not illustrated
// mockups (see /public/portfolio-screenshots). Each one is honestly labeled
// via its badge (Live Website / Concept Project / Client Project).
const LIVE_PROJECTS = [
  {
    id: "goldchase-advisory",
    category: "FINANCIAL ADVISORY",
    title: "GoldChase Advisory",
    description:
      "A premium corporate website designed for a luxury real estate investment advisory firm. Built with a modern, elegant interface, premium branding and a strong focus on lead generation and client trust.",
    badge: "Live Website",
    image: "/portfolio-screenshots/goldchase-advisory.jpg",
    url: undefined as string | undefined,
  },
  {
    id: "novax-crypto-platform",
    category: "WEB APPLICATION",
    title: "NovaX Crypto Platform",
    description:
      "A modern cryptocurrency web application featuring live market data, portfolio tracking, responsive dashboards and a premium trading interface designed for speed and usability.",
    badge: "Concept Project",
    image: "/portfolio-screenshots/novax-crypto-platform.jpg",
    url: undefined as string | undefined,
  },
  {
    id: "qikfox-browser-platform",
    category: "SOFTWARE",
    title: "QikFox Browser Platform",
    description:
      "A modern product website designed to showcase browser technology with a clean user experience, product features, platform downloads and conversion-focused landing pages.",
    badge: "Client Project",
    image: "/portfolio-screenshots/qikfox-browser.jpg",
    url: "qikfox.com",
  },
];

const LIVE_PROJECT_IMAGES: LightboxImage[] = LIVE_PROJECTS.map((p) => ({
  src: p.image,
  alt: p.title,
}));

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="container py-20">
          <Reveal>
            <Badge variant="accent" className="mb-6">
              Portfolio
            </Badge>
            <h1 className="max-w-2xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Website, CRM, and AI project work
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              A selection of concept, demo, and internal builds that show
              how we approach website, e-commerce, CRM, and AI projects.
              Real client case studies will be added here as they&apos;re
              ready to publish.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container py-20">
        <Stagger className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <StaggerItem key={project.client}>
              <CaseStudyCard {...project} />
            </StaggerItem>
          ))}
        </Stagger>

        <LightboxProvider>
          <Stagger className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {LIVE_PROJECTS.map((project, i) => (
              <StaggerItem key={project.id}>
                <LiveProjectCard
                  {...project}
                  imageAlt={project.title}
                  lightboxImages={LIVE_PROJECT_IMAGES}
                  lightboxIndex={i}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </LightboxProvider>
      </section>

      <section className="container pb-24">
        <Reveal>
          <div className="avoid-print-break relative overflow-hidden rounded-2xl bg-ink px-8 py-16 text-center text-white sm:px-16">
            <div className="absolute inset-0 bg-dot-grid opacity-[0.1]" />
            <div className="relative">
              <SectionHeading
                title="Want to see how we'd approach your project?"
                description="Tell us about your business and we'll show you exactly how we'd approach it."
                align="center"
                light
              />
              <Magnetic className="mt-8">
                <Button size="lg" variant="light" asChild>
                  <Link href="/contact">
                    Start a Project
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
