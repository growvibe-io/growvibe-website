import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Target, Heart, Lightbulb, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { Stagger, StaggerItem } from "@/components/stagger";
import { Magnetic } from "@/components/magnetic";
import { AnimatedCounter } from "@/components/animated-counter";
import { SectionHeading } from "@/components/section-heading";

const siteUrl = "https://growvibe.io";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GrowVibe, a website development and AI solutions company, and the team behind our clients' websites, CRM systems, and results.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | GrowVibe",
    description:
      "Learn about GrowVibe, a website development and AI solutions company, and the team behind our clients' websites, CRM systems, and results.",
    url: `${siteUrl}/about`,
    siteName: "GrowVibe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | GrowVibe",
    description:
      "Learn about GrowVibe, a website development and AI solutions company, and the team behind our clients' websites, CRM systems, and results.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "About Us", item: `${siteUrl}/about` },
  ],
};

const VALUES = [
  {
    icon: Target,
    title: "Results Obsessed",
    description:
      "We measure success in revenue and pipeline, not likes or impressions.",
  },
  {
    icon: Heart,
    title: "Client-First Partnership",
    description:
      "We work as an extension of your team, not an outside vendor.",
  },
  {
    icon: Lightbulb,
    title: "Always Testing",
    description:
      "We run structured experiments so your strategy keeps improving.",
  },
  {
    icon: ShieldCheck,
    title: "Radical Transparency",
    description:
      "Clear reporting, honest timelines, and no vanity metrics — ever.",
  },
];

const STATS = [
  { label: "Year founded", value: 2022, format: false },
  { label: "Brands served", value: 100, suffix: "+" },
  { label: "Team members", value: 5 },
  { label: "Industries served", value: 15, suffix: "+" },
];

const TEAM = [
  {
    name: "Price K",
    role: "Founder & CEO",
    bio: "15 years in performance marketing, previously led growth at two venture-backed startups.",
  },
  {
    name: "Sofia Nguyen",
    role: "Head of SEO",
    bio: "Former in-house SEO lead who has scaled organic traffic for e-commerce and SaaS brands.",
  },
  {
    name: "Marcus Bell",
    role: "Head of Paid Media",
    bio: "Manages 7-figure monthly ad budgets across Google, Meta, and TikTok for clients.",
  },
  {
    name: "Elena Kovac",
    role: "Head of Content & Social",
    bio: "Builds content systems that turn audiences into communities and communities into customers.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="border-b border-border bg-background">
        <div className="container py-20 text-center">
          <Reveal>
            <Badge variant="accent" className="mb-6">
              About GrowVibe
            </Badge>
            <h1 className="mx-auto max-w-2xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              We help ambitious brands grow, on purpose
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              GrowVibe is a modern website development and AI solutions
              company founded in 2022. We build premium websites, custom
              web applications, CRM systems, AI-powered business solutions,
              and digital growth strategies that help businesses scale
              online. Today we partner with 100+ brands across e-commerce,
              SaaS, and local services.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <h2 className="font-heading text-3xl font-semibold tracking-tight">
                Our Mission
              </h2>
              <p className="mt-4 text-muted-foreground">
                Too many businesses get burned by agencies that overpromise
                and underdeliver. We started GrowVibe to fix that. Our team
                combines beautiful design, modern development technologies,
                automation, and marketing expertise to create complete
                digital solutions — with transparent reporting and a
                genuine obsession with our clients&apos; bottom line.
              </p>
              <p className="mt-4 text-muted-foreground">
                Every strategy we build starts with your business goals, not
                a generic playbook. That&apos;s why our average client
                partnership lasts over three years.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-2 gap-6">
            {STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <Card className="border-border/70 p-8 text-center transition-transform duration-300 hover:-translate-y-1">
                  <div className="font-heading text-3xl font-semibold text-primary">
                    {stat.format === false ? (
                      stat.value
                    ) : (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    )}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Our values"
              title="What we stand for"
              align="center"
            />
          </Reveal>
          <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <StaggerItem key={value.title}>
                <Card
                  className="h-full border-border/70 text-center transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md"
                >
                  <CardContent className="pt-8">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-accent text-accent-foreground">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-heading font-semibold">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Leadership"
            title="Meet the leadership team"
            description="Specialists who've done the work in-house before leading it for our clients."
            align="center"
          />
        </Reveal>
        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <StaggerItem key={member.name}>
              <Card
                className="h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="pt-8 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent text-xl font-semibold text-accent-foreground">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="mt-4 font-heading font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="container pb-24">
        <Reveal>
          <div className="avoid-print-break relative overflow-hidden rounded-2xl bg-ink px-8 py-16 text-center text-white sm:px-16">
            <div className="absolute inset-0 bg-dot-grid opacity-[0.1]" />
            <div className="relative">
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&apos;s build your growth story together
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60">
                Tell us about your goals and we&apos;ll show you exactly how
                we&apos;d approach them.
              </p>
              <Magnetic className="mt-8">
                <Button size="lg" variant="light" asChild>
                  <Link href="/contact">
                    Get In Touch
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
