import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Sparkles,
  Palette,
  Rocket,
  Smartphone,
  LifeBuoy,
  Star,
  Check,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Stagger, StaggerItem } from "@/components/stagger";
import { Magnetic } from "@/components/magnetic";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { CaseStudyCard } from "@/components/case-study-card";
import { FaqAccordion } from "@/components/faq-accordion";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceShowcase, type ServiceShowcaseItem } from "@/components/service-showcase";
import { AiSolutionsShowcase, type AiSolutionCard } from "@/components/ai-solutions-showcase";

// Six core services shown as a horizontally scrolling showcase carousel.
// The full, granular catalog still lives on /services.
const SERVICES_SHOWCASE: ServiceShowcaseItem[] = [
  {
    category: "Website Development",
    title: "Website Design & Development",
    description: "Beautiful websites built for speed, SEO, and conversions.",
    tags: ["WordPress", "HTML", "React", "Next.js"],
    href: "/services#website-design",
    preview: "website",
  },
  {
    category: "Web Applications",
    title: "Web Applications & SaaS",
    description:
      "Custom dashboards, portals, and subscription platforms built to scale.",
    tags: ["React", "Next.js", "Node.js", "API"],
    href: "/services#web-applications",
    preview: "dashboard",
  },
  {
    category: "CRM",
    title: "CRM Development",
    description:
      "Custom CRM systems that keep leads, customers, and pipelines organized.",
    tags: ["CRM", "Automation", "Reports"],
    href: "/services/crm-development",
    preview: "crm",
  },
  {
    category: "AI Solutions",
    title: "AI Solutions",
    description:
      "AI-powered websites, chatbots, and automation built into your business.",
    tags: ["AI", "Chatbots", "Automation"],
    href: "/#ai-solutions",
    preview: "ai",
  },
  {
    category: "SEO",
    title: "SEO",
    description:
      "Technical and content SEO that improves visibility and organic traffic.",
    tags: ["SEO", "Technical SEO", "Content"],
    href: "/services#seo",
    preview: "seo",
  },
  {
    category: "Advertising",
    title: "Google & Meta Ads",
    description:
      "Paid campaigns focused on qualified leads and measurable growth.",
    tags: ["Google Ads", "Meta Ads", "Analytics"],
    href: "/services#google-ppc",
    preview: "ads",
  },
];

// Six AI cards, shown as a split-screen stacked-scroll showcase. The other
// AI use cases we support (lead qualification, content automation, document
// processing, general business automation) are folded into these
// descriptions/feature points rather than shown as separate cards.
const AI_SOLUTIONS: AiSolutionCard[] = [
  {
    id: "ai-powered-websites",
    icon: "website",
    title: "AI-Powered Websites",
    description: "Websites designed with AI features built into the experience.",
    features: [
      "Intelligent search",
      "Personalized content",
      "AI lead capture",
      "Smart recommendations",
      "Automated customer journeys",
    ],
  },
  {
    id: "ai-chatbots",
    icon: "chatbot",
    title: "AI Chatbots",
    description: "24/7 assistants that answer questions and capture qualified leads.",
    features: [
      "Website chat assistants",
      "Lead qualification",
      "Appointment booking",
      "Product guidance",
      "Multilingual support",
    ],
  },
  {
    id: "ai-customer-support",
    icon: "support",
    title: "AI Customer Support",
    description: "AI support tools that reduce repetitive questions and customer wait times.",
    features: [
      "Knowledge-base answers",
      "Ticket classification",
      "Response suggestions",
      "Document processing",
      "Human-agent handoff",
    ],
  },
  {
    id: "ai-crm",
    icon: "crm",
    title: "AI CRM Assistants",
    description: "Smart assistants that help teams organize leads and follow up consistently.",
    features: [
      "Lead summaries",
      "Follow-up reminders",
      "Pipeline updates",
      "Customer insights",
      "Automated task creation",
    ],
    href: "/services/crm-development",
  },
  {
    id: "ai-seo",
    icon: "seo",
    title: "AI SEO",
    description:
      "AI-assisted content and technical workflows that support stronger search visibility.",
    features: [
      "Content planning",
      "Keyword clustering",
      "On-page recommendations",
      "Internal linking suggestions",
      "Technical issue summaries",
    ],
  },
  {
    id: "workflow-automation",
    icon: "automation",
    title: "Workflow Automation",
    description: "Connected workflows that reduce repetitive manual work across business tools.",
    features: [
      "Form-to-CRM automation",
      "Email workflows",
      "Lead routing",
      "Data synchronization",
      "Reporting automation",
    ],
  },
];

const HOW_WE_WORK = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your business, audience, goals, required features, and competitors.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We create the website structure, technical plan, content direction, and project timeline.",
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "We design and develop the solution with responsive layouts, clean code, and strong performance.",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "We test, launch, monitor, and support the project through SEO, advertising, maintenance, and automation.",
  },
];

const TECH_GROUPS = [
  {
    group: "Website Platforms",
    items: ["WordPress", "HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    group: "Frontend & Full Stack",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    group: "Databases & Cloud",
    items: ["MongoDB", "MySQL", "Firebase", "Supabase", "Vercel"],
  },
  {
    group: "AI & Development Tools",
    items: ["OpenAI", "Claude AI", "Google Gemini", "GitHub"],
  },
];

const WHY_CHOOSE_US = [
  {
    icon: Palette,
    title: "Premium Custom Design",
    description: "Custom, on-brand design that makes a strong first impression.",
  },
  {
    icon: Rocket,
    title: "Fast Performance",
    description: "Optimized for fast loading and a smoother visitor experience.",
  },
  {
    icon: Search,
    title: "SEO-Ready Structure",
    description:
      "Built with clean, technical foundations that help you get found by the right customers.",
  },
  {
    icon: Sparkles,
    title: "AI and Automation Expertise",
    description:
      "Smart chatbots, CRM tools, and workflow automation built directly into your systems.",
  },
  {
    icon: Smartphone,
    title: "Responsive on Every Device",
    description:
      "Designed to work smoothly across desktop, tablet, and mobile devices.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    description: "Dedicated support and maintenance long after launch.",
  },
];

// Honest, clearly-labeled demo/concept work — not fictional client names or
// invented results. Real client case studies (with real metrics) can be
// added here once we have them to publish.
const PORTFOLIO_PROJECTS = [
  {
    id: "ecommerce-concept",
    client: "E-commerce Concept Project",
    industry: "E-commerce",
    description:
      "A modern e-commerce experience designed for fast product discovery, mobile usability, and a simple checkout flow.",
    tag: "Concept Project",
    preview: "ecommerce" as const,
    viewHref: "/work#ecommerce-concept",
  },
  {
    id: "custom-crm-demo",
    client: "Custom CRM Demo",
    industry: "CRM Systems",
    description:
      "A CRM dashboard created to manage leads, customer records, follow-ups, pipeline stages, and team activity.",
    tag: "Demo Project",
    preview: "dashboard" as const,
    viewHref: "/work#custom-crm-demo",
  },
  {
    id: "ai-retail-demo",
    client: "AI Retail Demo",
    industry: "AI Projects",
    description:
      "An AI-assisted storefront concept with customer support chat and intelligent product discovery.",
    tag: "Internal Build",
    preview: "chat" as const,
    viewHref: "/work#ai-retail-demo",
  },
];

// Kept empty until we have real, permission-to-publish customer quotes —
// the moment this array has entries, the section below renders them
// automatically instead of the "Built Around Your Business Goals" message.
const TESTIMONIALS: { quote: string; name: string; role: string }[] = [];

const BUSINESS_GOALS_POINTS = [
  "Custom strategy for every project",
  "Clear communication and milestones",
  "Flexible support after launch",
];

const FAQ_ITEMS = [
  {
    question: "What types of websites do you build?",
    answer:
      "We build business websites, WordPress websites, e-commerce stores, landing pages, web applications, SaaS platforms, CRM systems, and custom digital solutions.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can improve the design, speed, mobile experience, SEO structure, content layout, and conversion flow of an existing website.",
  },
  {
    question: "Do you provide SEO with website development?",
    answer:
      "Yes. Every website is built with an SEO-friendly technical foundation. Ongoing SEO services are also available for businesses that want to improve organic visibility and traffic.",
  },
  {
    question: "Can you add AI features to an existing website?",
    answer:
      "Yes. Depending on the website and business needs, we can add AI chatbots, customer support tools, lead qualification, intelligent search, content workflows, and automation.",
  },
  {
    question: "Which platform should I choose for my website?",
    answer:
      "The right platform depends on the website's purpose, required features, budget, scalability, and management needs. We may recommend WordPress, React, Next.js, Node.js, or another suitable solution.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes. Ongoing maintenance can include updates, backups, security checks, performance monitoring, content changes, technical support, and improvements.",
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

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Core services — split-screen sticky-stack showcase, cards left /
          description right (mirrors AiSolutionsShowcase below, which is
          description left / cards right). Section id, container, heading,
          and CTA now live inside ServiceShowcase itself, same as
          AiSolutionsShowcase owns its own. */}
      <ServiceShowcase items={SERVICES_SHOWCASE} />

      {/* AI Solutions — split-screen sticky-left / stacked-scroll-right showcase */}
      <AiSolutionsShowcase items={AI_SOLUTIONS} />

      {/* How We Work */}
      <section className="container pt-16 pb-28">
        <Reveal>
          <SectionHeading
            eyebrow="Our Process"
            title="How We Work"
            description="A clear, four-step process from first conversation to ongoing growth."
          />
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_WE_WORK.map((step) => (
            <StaggerItem key={step.number}>
              <div
                className="h-full rounded-2xl border border-border/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-md"
              >
                <div className="font-heading text-3xl font-semibold text-primary">
                  {step.number}
                </div>
                <h3 className="mt-3 font-heading text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Technology */}
      <section id="technologies" className="scroll-mt-28 bg-ink py-28 text-white">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Technology"
              title="Built with Modern, Trusted Technology"
              description="We choose the right tools for the job — proven, scalable technology that keeps your website fast and future-proof."
              align="center"
              light
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-14 space-y-8">
              {TECH_GROUPS.map((group) => (
                <div key={group.group} className="text-center">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                    {group.group}
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white/80 transition-colors duration-300 hover:border-primary/50 hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Businesses Choose GrowVibe"
            align="center"
          />
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {WHY_CHOOSE_US.map((item) => (
            <StaggerItem key={item.title}>
              <Card
                className="h-full border-border/70 text-center transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md"
              >
                <CardContent className="pt-8">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-accent text-accent-foreground">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="container scroll-mt-28 pt-28 pb-16">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Portfolio" title="Selected Work" />
            <Button variant="outline" asChild>
              <Link href="/work">
                View Full Portfolio
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Stagger className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((project) => (
            <StaggerItem key={project.client}>
              <CaseStudyCard {...project} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Built Around Your Business Goals — replaces fictional testimonials.
          TESTIMONIALS stays wired up and ready: add real, permission-to-quote
          reviews to the array above and this section switches to showing
          them automatically. */}
      <section className="bg-secondary/40 pt-16 pb-28">
        <div className="container">
          {TESTIMONIALS.length > 0 ? (
            <>
              <Reveal>
                <SectionHeading
                  eyebrow="Testimonials"
                  title="Don't just take our word for it"
                  align="center"
                />
              </Reveal>

              <Stagger className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                {TESTIMONIALS.map((t) => (
                  <StaggerItem key={t.name}>
                    <Card className="flex h-full flex-col justify-between border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <CardContent className="pt-6">
                        <div className="flex gap-1 text-primary">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <Star key={idx} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-foreground/80">
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
                  title="Built Around Your Business Goals"
                  description="Every project begins with a clear understanding of your business, audience, required features, and growth goals. You receive a solution designed around your needs, not a reused template."
                  align="center"
                />
              </Reveal>
              <Reveal delay={120}>
                <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
                  {BUSINESS_GOALS_POINTS.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2 text-sm font-medium text-foreground/80"
                    >
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

      {/* FAQ */}
      <section id="faq" className="container scroll-mt-28 pt-28 pb-24">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            align="center"
          />
        </Reveal>

        <Reveal delay={120}>
          <FaqAccordion items={FAQ_ITEMS} className="mx-auto mt-14 max-w-3xl" />
        </Reveal>

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>

      {/* Final CTA */}
      <section className="container pb-20">
        <Reveal>
          <div className="avoid-print-break relative overflow-hidden rounded-2xl bg-ink px-8 py-20 text-center text-white sm:px-16">
            <div className="absolute inset-0 bg-dot-grid opacity-[0.1]" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&apos;s Build the Right Digital Solution for Your Business
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60">
                Tell us what you want to build, improve, or automate.
                We&apos;ll review your goals, required features, timeline,
                and current setup, then recommend the right website, CRM,
                AI, SEO, or advertising solution.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Magnetic>
                  <Button size="lg" variant="light" asChild>
                    <Link href="/contact?intent=quote">
                      Request a Free Quote
                      <ArrowUpRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button size="lg" variant="outlineLight" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
