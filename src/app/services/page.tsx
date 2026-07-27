import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { Stagger, StaggerItem } from "@/components/stagger";
import { Magnetic } from "@/components/magnetic";
import { SectionHeading } from "@/components/section-heading";
import { GradientMesh } from "@/components/gradient-mesh";
import { AnimatedCounter } from "@/components/animated-counter";
import { CategoryNav } from "@/components/services/category-nav";
import { ServiceCard } from "@/components/services/service-card";
import { ServiceFeatureCard } from "@/components/services/service-feature-card";
import { SERVICE_CATEGORIES, getAllServices } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "GrowVibe's full range of services: website design, WordPress, Next.js, React, and Node.js development, CRM development, AI solutions and automation, plus SEO, Google Ads, Meta Ads, and content marketing.",
  alternates: { canonical: "/services" },
};

const siteUrl = "https://growvibe.io";
const allServices = getAllServices();

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: allServices.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: {
        "@type": "Organization",
        name: "GrowVibe",
        url: siteUrl,
      },
    },
  })),
};

const toneBackground = {
  light: "bg-background",
  tint: "bg-secondary/40",
  dark: "bg-ink text-white",
};

export default function ServicesPage() {
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

      {/* Hero — dark, same GradientMesh + dot-grid treatment as the home
          page's Hero, so /services opens with the same weight instead of
          a flat white banner. */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.12]" />
        <GradientMesh />

        <div className="container relative py-20 text-center sm:py-24">
          <Reveal>
            <Badge variant="dark" className="mb-6">
              <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
              Our Services
            </Badge>
            <h1 className="mx-auto max-w-3xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Website development, AI solutions, and digital growth services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Whether you need a brand-new website, a custom CRM system,
              AI-powered automation, or the marketing that brings customers
              to you, our specialist teams deliver strategy and execution
              under one roof.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto mt-12 flex max-w-lg flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t border-white/10 pt-10">
              <div>
                <div className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                  <AnimatedCounter value={allServices.length} />
                </div>
                <p className="mt-1 text-sm text-white/50">Services offered</p>
              </div>
              <div>
                <div className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                  <AnimatedCounter value={SERVICE_CATEGORIES.length} />
                </div>
                <p className="mt-1 text-sm text-white/50">Specialty areas</p>
              </div>
              <div>
                <div className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                  1
                </div>
                <p className="mt-1 text-sm text-white/50">Team, start to finish</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CategoryNav
        categories={SERVICE_CATEGORIES.map(({ slug, navLabel }) => ({
          slug,
          navLabel,
        }))}
      />

      {SERVICE_CATEGORIES.map((category) => (
        <section
          key={category.slug}
          id={category.slug}
          className={`scroll-mt-44 py-20 sm:py-24 ${toneBackground[category.tone]}`}
        >
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow={category.eyebrow}
                title={category.title}
                description={category.description}
                light={category.tone === "dark"}
              />
            </Reveal>

            {category.layout === "grid" ? (
              <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service) => (
                  <StaggerItem key={service.id}>
                    <ServiceCard service={service} dark={category.tone === "dark"} />
                  </StaggerItem>
                ))}
              </Stagger>
            ) : (
              <Stagger className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {category.services.map((service) => (
                  <StaggerItem key={service.id}>
                    <ServiceFeatureCard service={service} dark={category.tone === "dark"} />
                  </StaggerItem>
                ))}
              </Stagger>
            )}

            {category.slug === "ai-automation" && (
              <Reveal delay={120}>
                <div className="mt-8 text-center">
                  <Link
                    href="/#ai-solutions"
                    data-cursor="hover"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    See the full AI Solutions showcase on our home page
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            )}
          </div>
        </section>
      ))}

      <section className="container py-24">
        <Reveal>
          <div className="avoid-print-break relative overflow-hidden rounded-2xl bg-ink px-8 py-16 text-center text-white sm:px-16">
            <div className="absolute inset-0 bg-dot-grid opacity-[0.1]" />
            <GradientMesh className="opacity-60" />
            <div className="relative">
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Not sure which service is right for you?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60">
                Get a free marketing audit and we&apos;ll recommend the
                channels with the biggest growth opportunity for your
                business.
              </p>
              <Magnetic className="mt-8 inline-flex">
                <Button size="lg" variant="light" asChild>
                  <Link href="/contact">
                    Get Your Free Audit
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
