import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  PlayCircle,
  Sparkles,
  Check,
  X,
  Palette,
  Zap,
  Smartphone,
  Search,
  Target,
  Bot,
  Rocket,
  TrendingUp,
  Building2,
  Briefcase,
  FileText,
  ShoppingCart,
  House,
  HeartPulse,
  UserCheck,
  AppWindow,
  PenTool,
  LayoutDashboard,
  ShieldCheck,
  Layers,
  Boxes,
  Atom,
  Server,
  Code2,
  MessageSquare,
  RefreshCw,
  Calendar,
  Users,
  Lightbulb,
  MousePointerClick,
  CheckCircle2,
  MapPin,
  Share2,
  Lock,
  CreditCard,
  Monitor,
  Phone,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { Stagger, StaggerItem } from "@/components/stagger";
import { Magnetic } from "@/components/magnetic";
import { SectionHeading } from "@/components/section-heading";
import { GradientMesh } from "@/components/gradient-mesh";
import { FaqAccordion } from "@/components/faq-accordion";
import { BrowserFrame } from "@/components/browser-frame";
import { LightboxProvider, type LightboxImage } from "@/components/lightbox-provider";
import { CaseStudyCard } from "@/components/case-study-card";
import { Photo } from "@/components/mockup-ui";
import { LiveChatCtaButton } from "@/components/live-chat-cta-button";
import { SITE_PHONE } from "@/lib/site-config";

const siteUrl = "https://growvibe.io";

export const metadata: Metadata = {
  title: "Premium Website Design & Development",
  description:
    "Premium, conversion-focused website design and development for businesses worldwide — custom UI/UX, AI-integrated features, Next.js performance, and a free initial consultation.",
  alternates: { canonical: "/website-design" },
  openGraph: {
    title: "Premium Website Design & Development | GrowVibe",
    description:
      "Premium, conversion-focused website design and development for businesses worldwide — custom UI/UX, AI-integrated features, and Next.js performance.",
    url: `${siteUrl}/website-design`,
    siteName: "GrowVibe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Website Design & Development | GrowVibe",
    description:
      "Premium, conversion-focused website design and development for businesses worldwide — custom UI/UX, AI-integrated features, and Next.js performance.",
  },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const WHY_CHOOSE: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Palette,
    title: "Premium Custom UI/UX",
    description:
      "Every layout is designed around your brand and your customers — never a recycled template that looks like everyone else's site.",
  },
  {
    icon: Zap,
    title: "High-Performance Development",
    description:
      "Built with modern frameworks and clean code, so pages load fast and feel smooth from the very first click.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Designed for the phone in your customer's hand first, then scaled up — not squeezed down as an afterthought.",
  },
  {
    icon: Search,
    title: "SEO-Ready Architecture",
    description:
      "Clean structure, fast pages, and proper heading hierarchy from day one, so search engines can find and understand your site.",
  },
  {
    icon: Target,
    title: "Lead Generation Focus",
    description:
      "Every page is built with a clear next step for the visitor — because a beautiful site that doesn't generate enquiries isn't doing its job.",
  },
  {
    icon: Bot,
    title: "AI-Integrated Websites",
    description:
      "Optional AI chat, smart forms, and automated follow-ups built in, so your website keeps working after visitors leave.",
  },
  {
    icon: Rocket,
    title: "Fast Loading Speeds",
    description:
      "Optimized images, clean code, and modern hosting mean your site loads quickly — on a laptop or a phone on patchy mobile data.",
  },
  {
    icon: TrendingUp,
    title: "Built for Future Growth",
    description:
      "A scalable foundation that grows with you — from a five-page site today to new features and pages down the road.",
  },
];

const WEBSITE_TYPES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Building2,
    title: "Corporate Websites",
    description:
      "For established businesses that need a credible, professional online presence that matches their reputation.",
  },
  {
    icon: Briefcase,
    title: "Small Business Websites",
    description:
      "For local and growing businesses that need a clear, affordable website that brings in real enquiries.",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description:
      "For campaigns and launches that need one focused page built to convert traffic into leads or sales.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description:
      "For businesses selling online that need a fast, secure store with a smooth path from browsing to checkout.",
  },
  {
    icon: House,
    title: "Real Estate Websites",
    description:
      "For agents and agencies that need listings, search, and enquiries presented the way buyers actually browse.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Dental Websites",
    description:
      "For clinics and practices that need a trustworthy site with easy appointment booking and clear service pages.",
  },
  {
    icon: UserCheck,
    title: "Professional Service Websites",
    description:
      "For consultants, agencies, and firms that need a site that builds credibility before the first conversation.",
  },
  {
    icon: AppWindow,
    title: "SaaS & Web App Interfaces",
    description:
      "For software products that need a marketing site and product interface that feel like part of the same platform.",
  },
  {
    icon: PenTool,
    title: "Portfolio Websites",
    description:
      "For individuals and creative businesses that need their work to be the star of a clean, distraction-free site.",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Business Platforms",
    description:
      "For businesses whose needs go beyond a standard website — custom-built portals, dashboards, and tools.",
  },
];

const PERFORMANCE_OUTCOMES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Zap,
    title: "Faster Loading Times",
    description: "Pages that open instantly instead of testing your visitor's patience.",
  },
  {
    icon: Smartphone,
    title: "Better Mobile Experience",
    description: "A site that feels just as fast and clean on a phone as it does on a laptop.",
  },
  {
    icon: ShieldCheck,
    title: "Improved Visitor Trust",
    description: "A secure, modern-feeling site that reassures visitors before they even read a word.",
  },
  {
    icon: Search,
    title: "Better Search Visibility",
    description: "A clean technical foundation that gives your site a real shot at ranking well.",
  },
  {
    icon: Layers,
    title: "Easier Future Expansion",
    description: "A scalable structure that makes adding new pages or features simple, not painful.",
  },
];

const TECH_BADGES: { icon: LucideIcon; name: string }[] = [
  { icon: Boxes, name: "Next.js" },
  { icon: Atom, name: "React" },
  { icon: Server, name: "Modern Cloud Hosting" },
  { icon: Code2, name: "Clean, Maintainable Code" },
];

const AI_WEBSITE_FEATURES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Bot,
    title: "AI Support Assistant",
    description: "A live AI assistant that answers visitor questions instantly, day or night.",
  },
  {
    icon: Target,
    title: "Automated Lead Qualification",
    description: "AI reviews and scores new enquiries, so your team focuses on the strongest ones first.",
  },
  {
    icon: FileText,
    title: "Smart Contact Forms",
    description: "Forms that adapt to what a visitor is asking for, instead of one generic form for everyone.",
  },
  {
    icon: RefreshCw,
    title: "Automated Enquiry Responses",
    description: "Instant, on-brand replies to new enquiries while your team gets back to them properly.",
  },
  {
    icon: Sparkles,
    title: "Personalized Recommendations",
    description: "Content and offers tailored to what a visitor is actually browsing for.",
  },
  {
    icon: Search,
    title: "AI-Powered Search",
    description: "Site search that understands what a visitor means, not just the exact words they typed.",
  },
  {
    icon: Calendar,
    title: "AI Appointment Assistance",
    description: "A simple, guided way for visitors to book a call or consultation without back-and-forth emails.",
  },
  {
    icon: MessageSquare,
    title: "Live-Support Integration",
    description: "A clean handoff from AI chat to a real person on your team, whenever a visitor needs one.",
  },
];

const LEAD_GEN_CHECKLIST = [
  "Clear calls-to-action on every page",
  "Lead-generation forms placed where visitors actually convert",
  "Click-to-call buttons for mobile visitors",
  "WhatsApp and live-chat integration",
  "Simple consultation booking",
  "Trust-building sections throughout the site",
  "Conversion-focused page layouts",
  "Analytics and tracking set up from day one",
];

const JOURNEY_STEPS: { icon: LucideIcon; label: string }[] = [
  { icon: Users, label: "Visitor arrives" },
  { icon: Lightbulb, label: "Understands your business" },
  { icon: ShieldCheck, label: "Trusts what they see" },
  { icon: MousePointerClick, label: "Takes action" },
  { icon: CheckCircle2, label: "Becomes a lead" },
];

const WEBSITE_FEATURES: { icon: LucideIcon; label: string }[] = [
  { icon: Smartphone, label: "Responsive design" },
  { icon: Zap, label: "Fast loading performance" },
  { icon: FileText, label: "Contact forms" },
  { icon: MessageSquare, label: "Live chat integration" },
  { icon: Share2, label: "Social media integration" },
  { icon: MapPin, label: "Google Maps integration" },
  { icon: TrendingUp, label: "Analytics & tracking" },
  { icon: Search, label: "SEO foundations" },
  { icon: Lock, label: "SSL & security" },
  { icon: Layers, label: "CMS options" },
  { icon: PenTool, label: "Blog / content section" },
  { icon: Calendar, label: "Appointment booking" },
  { icon: CreditCard, label: "Payment integration" },
  { icon: LayoutDashboard, label: "CRM integration" },
  { icon: Bot, label: "AI chatbot integration" },
  { icon: Monitor, label: "Custom dashboards (when required)" },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description: "We learn about your business, goals, audience, and what your current site isn't doing for you.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description: "We map the sitemap, content plan, and technical approach before a single screen is designed.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description: "We design a custom look and feel around your brand, not a theme picked off a shelf.",
  },
  {
    number: "04",
    title: "Development",
    description: "We build the site with modern, high-performance technology — responsive, fast, and secure.",
  },
  {
    number: "05",
    title: "Testing & Optimization",
    description: "We test across devices and browsers, and optimize speed, accessibility, and content.",
  },
  {
    number: "06",
    title: "Launch",
    description: "We handle the launch — domain, hosting, and final quality checks — so it goes live smoothly.",
  },
  {
    number: "07",
    title: "Ongoing Support",
    description: "We stay involved after launch with updates, monitoring, and support as your business grows.",
  },
];

const RISK_ITEMS = [
  "Visitors don't trust the business",
  "Fewer enquiries and phone calls",
  "A poor experience on mobile devices",
  "Slow-loading pages that lose patience",
  "Weak visibility on Google",
  "Visitors choose a competitor instead",
];

const SOLUTION_ITEMS = [
  "A site that builds instant credibility",
  "More enquiries and phone calls",
  "A smooth, fast mobile experience",
  "Fast-loading pages that keep attention",
  "A stronger foundation for search visibility",
  "Visitors choose you instead",
];

const PRICING_FACTORS = [
  "Number of pages your site needs",
  "Design complexity and custom features",
  "Required integrations (CRM, booking, payments)",
  "E-commerce and product catalog needs",
  "AI features, like chat or smart forms",
  "Volume of content to write or migrate",
  "Your preferred project timeline",
];

const FAQ_ITEMS = [
  {
    question: "How much does a new website cost?",
    answer:
      "It depends on the number of pages, design complexity, required features, and integrations — so we don't publish a fixed price. Tell us about your project and we'll provide a clear, custom quote after a free initial consultation.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Timelines vary with scope — a focused landing page moves faster than a full e-commerce build with integrations. We'll give you a realistic timeline once we understand your requirements.",
  },
  {
    question: "Will my website work well on mobile devices?",
    answer:
      "Yes. Every site we build is designed mobile-first and tested across devices, since most visitors will land on your site from a phone.",
  },
  {
    question: "Can you redesign our existing website instead of starting from scratch?",
    answer:
      "Yes. We regularly redesign existing websites — keeping the content and structure that works and rebuilding the design, performance, and features around it.",
  },
  {
    question: "Will my new website be SEO-ready?",
    answer:
      "Yes. Every site is built with clean code, proper heading structure, fast loading times, and technical SEO foundations in place from day one. We don't guarantee specific rankings — no honest agency can — but the technical groundwork for strong visibility is always there.",
  },
  {
    question: "Do you write the content, or do we need to provide it?",
    answer:
      "Either works. We can build the site around content you provide, or help develop copy and messaging as part of the project — just let us know what you need.",
  },
  {
    question: "Can you add AI chat or live chat integration to our website?",
    answer:
      "Yes. We can add an AI support assistant, smart forms, or live-chat integration like the one on this very site, depending on what fits your business.",
  },
  {
    question: "Can you build an online store with payments?",
    answer:
      "Yes. We build e-commerce websites with product management, secure checkout, and payment integrations built around how you sell.",
  },
  {
    question: "Will we be able to update the website ourselves after launch?",
    answer:
      "Yes, when you'd like that. We can build the site with a CMS so your team can edit content directly, or handle updates for you — whichever fits how your team likes to work.",
  },
  {
    question: "Do you offer support after the website goes live?",
    answer:
      "Yes. We offer ongoing support and maintenance after launch, so your site stays secure, fast, and up to date as your business evolves.",
  },
  {
    question: "Do you work with clients outside the United States?",
    answer:
      "Yes. GrowVibe serves businesses worldwide, with teams registered in both the USA and India, and we work remotely with clients across time zones every day.",
  },
  {
    question: "What do you need from us to get started?",
    answer:
      "Just a free initial consultation to talk through your business, goals, and any existing branding or content you have. From there, we'll map out the plan and a custom quote.",
  },
];

// Every real screenshot used on this page, in the order it appears — shared
// by the CRM demo showcase below so the lightbox can cycle prev/next.
const REAL_PLATFORM_SCREENSHOTS: LightboxImage[] = [
  {
    src: "/crm-screenshots/dashboard.jpg",
    alt: "GrowVibe CRM dashboard — a real, live web application built and deployed by GrowVibe",
  },
  {
    src: "/crm-screenshots/executive.jpg",
    alt: "GrowVibe CRM executive dashboard with live revenue, pipeline, and AI insights",
  },
  {
    src: "/crm-screenshots/login.jpg",
    alt: "GrowVibe CRM secure sign-in screen",
  },
];

// The same honestly-labeled concept/demo projects shown on the main /work
// portfolio page — reused here rather than inventing new, unverified project
// examples for this page specifically.
const MORE_PROJECTS: {
  client: string;
  industry: string;
  description: string;
  tag: string;
  preview: "ecommerce" | "chat";
}[] = [
  {
    client: "E-commerce Concept Project",
    industry: "E-commerce",
    description:
      "A modern e-commerce experience designed for fast product discovery, mobile usability, and a simple checkout flow.",
    tag: "Concept Project",
    preview: "ecommerce",
  },
  {
    client: "AI Retail Demo",
    industry: "AI Projects",
    description:
      "An AI-assisted storefront concept with customer support chat and intelligent product discovery.",
    tag: "Internal Build",
    preview: "chat",
  },
];

// ---------------------------------------------------------------------------
// Structured data
// ---------------------------------------------------------------------------

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Website Design & Development",
      item: `${siteUrl}/website-design`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Website Design & Development",
  name: "Premium Website Design & Development",
  description:
    "Premium, conversion-focused website design and development — custom UI/UX, Next.js performance, AI-integrated features, and ongoing support for businesses worldwide.",
  provider: {
    "@type": "Organization",
    name: "GrowVibe",
    url: siteUrl,
  },
  areaServed: ["United States", "India", "Worldwide"],
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

// ---------------------------------------------------------------------------
// Presentational helpers
// ---------------------------------------------------------------------------

/**
 * Browser-chrome wrapper for the original, on-brand website mockups below
 * (hero + comparison). These are illustrative layouts built only from this
 * site's own design tokens — not real screenshots and not a stock template —
 * so they're deliberately NOT wired into the lightbox the way real product
 * screenshots (see <BrowserFrame>) are.
 */
function MockupChrome({
  url = "yourbusiness.com",
  floating = false,
  className,
  children,
}: {
  url?: string;
  floating?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-border/70 bg-card shadow-xl shadow-ink/[0.08] ring-1 ring-ink/[0.03]",
        floating && "animate-float",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-border bg-secondary/60 px-4 py-2.5 sm:py-3">
        <div className="flex flex-shrink-0 items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="mx-auto flex w-full max-w-[280px] items-center justify-center gap-1.5 rounded-full border border-border/70 bg-background/80 px-3 py-1 sm:max-w-xs">
          <Lock className="h-2.5 w-2.5 flex-shrink-0 text-muted-foreground" />
          <span className="truncate text-[11px] font-medium text-muted-foreground">{url}</span>
        </div>
      </div>
      <div className="relative overflow-hidden bg-background">{children}</div>
    </div>
  );
}

/** The premium homepage mockup used in the hero and the design comparison. */
function PremiumHomepageMockup() {
  return (
    <div className="relative aspect-[1568/900] w-full bg-background p-2.5 sm:p-4">
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <div className="flex flex-shrink-0 items-center justify-between border-b border-border px-4 py-2.5 sm:px-6 sm:py-3.5">
          <span className="font-heading text-[9px] font-bold text-foreground sm:text-sm">
            Aurora &amp; Co.
          </span>
          <div className="hidden items-center gap-4 text-[9px] text-muted-foreground sm:flex sm:text-xs">
            <span>Services</span>
            <span>About</span>
            <span>Work</span>
            <span>Contact</span>
          </div>
          <span className="rounded-full bg-primary px-2.5 py-1.5 text-[7px] font-semibold text-primary-foreground sm:text-[10px]">
            Get Started
          </span>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-3 overflow-hidden px-4 py-4 sm:grid-cols-2 sm:gap-5 sm:px-6 sm:py-6">
          <div className="flex flex-col justify-center gap-2 sm:gap-3">
            <span className="w-fit rounded-full bg-primary/10 px-2 py-1 text-[6px] font-semibold text-primary sm:text-[9px]">
              Trusted by businesses worldwide
            </span>
            <span className="font-heading text-[11px] font-semibold leading-tight text-foreground sm:text-xl">
              Grow Your Business With Confidence
            </span>
            <span className="hidden text-[8px] leading-relaxed text-muted-foreground sm:block sm:text-[11px]">
              A premium website built around your goals, your customers, and how your business actually grows.
            </span>
            <div className="flex gap-1.5 sm:gap-2">
              <span className="rounded-full bg-ink px-2.5 py-1.5 text-[6px] font-semibold text-white sm:text-[9px]">
                Get Started
              </span>
              <span className="rounded-full border border-border px-2.5 py-1.5 text-[6px] font-semibold text-foreground sm:text-[9px]">
                Learn More
              </span>
            </div>
          </div>
          <div className="relative hidden overflow-hidden rounded-lg sm:block">
            <Photo seed="growvibe-website-mockup-hero" width={520} height={360} />
          </div>
        </div>
      </div>
    </div>
  );
}

/** An abstract "generic template" skeleton — deliberately not a real site or
 * any specific competitor, just plain rectangles standing in for dense,
 * undifferentiated template content, for an honest illustrative comparison. */
function GenericTemplateMockup() {
  return (
    <div className="relative aspect-[1568/900] w-full bg-white p-2.5 sm:p-4">
      <div className="flex h-full flex-col gap-2 overflow-hidden rounded-lg border border-border bg-white p-3 sm:gap-2.5 sm:p-5">
        <div className="flex flex-shrink-0 items-center justify-between border-b border-border/70 pb-2">
          <div className="h-2 w-14 rounded-full bg-foreground/20 sm:h-2.5 sm:w-20" />
          <div className="flex gap-1.5 sm:gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-1.5 w-5 rounded-full bg-foreground/15 sm:w-8" />
            ))}
          </div>
        </div>
        <div className="h-2.5 w-3/4 rounded-full bg-foreground/25 sm:h-3.5" />
        <div className="h-1.5 w-full rounded-full bg-foreground/10" />
        <div className="h-1.5 w-5/6 rounded-full bg-foreground/10" />
        <div className="mt-1 h-12 w-full flex-shrink-0 rounded-md bg-foreground/[0.06] sm:h-20" />
        <div className="grid flex-1 grid-cols-3 gap-1.5 sm:gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-md bg-foreground/[0.06]" />
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function WebsiteDesignPage() {
  return (
    <LightboxProvider>
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

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-ink pb-32 pt-20 text-white sm:pb-44 sm:pt-24">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.12]" />
        <GradientMesh />

        <div className="container relative text-center">
          <Reveal>
            <Badge variant="dark" className="mb-6">
              <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
              Website Design &amp; Development
            </Badge>
            <h1 className="mx-auto max-w-3xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Premium Websites Built to Grow Your Business
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              We design and build premium, high-performance websites that make your business look
              credible, load fast, and turn visitors into real enquiries — for businesses across the
              United States, India, and beyond.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Reveal delay={160}>
              <Magnetic>
                <Button
                  size="lg"
                  variant="light"
                  asChild
                  className="shadow-[0_0_0_0_rgba(28,160,102,0)] transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(28,160,102,0.35)]"
                >
                  <Link href="/contact?intent=quote" data-track="consultation-cta-click">
                    Request a Free Consultation
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
            </Reveal>
            <Reveal delay={240}>
              <Magnetic>
                <Button size="lg" variant="outlineLight" asChild>
                  <Link href="#portfolio">
                    <PlayCircle className="mr-1.5 h-4 w-4" />
                    View Our Work
                  </Link>
                </Button>
              </Magnetic>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <p className="mt-8 text-sm text-white/40">
              Serving businesses worldwide • USA &amp; India registered
            </p>
          </Reveal>
        </div>
      </section>

      {/* Floating premium homepage mockup — bleeds up into the dark hero */}
      <div className="container relative -mt-24 sm:-mt-32">
        <Reveal delay={280} scale>
          <MockupChrome floating className="mx-auto max-w-5xl" url="yourbusiness.com">
            <PremiumHomepageMockup />
          </MockupChrome>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            An original, illustrative homepage mockup — not a real client site or stock template.
          </p>
        </Reveal>
      </div>

      {/* 2. Why Choose GrowVibe */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose GrowVibe"
              title="A website built to work as hard as you do"
              description="Not just a good-looking site — a website designed, built, and optimized to bring your business real results."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((item, i) => (
              <StaggerItem key={item.title}>
                <Card
                  data-cursor="hover"
                  className="h-full border-border/70 transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
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

      {/* 3. Website Types We Build */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Website Types We Build"
              title="Whatever your business is, we've likely built for one like it"
              description="Every industry needs a different structure and strategy — here's how we adapt the build to yours."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WEBSITE_TYPES.map((item) => (
              <StaggerItem key={item.title}>
                <div
                  data-cursor="hover"
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

      {/* 4. Premium UI/UX Design */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Premium UI/UX Design"
              title="Designed to Make Your Business Look Credible, Modern and Memorable"
              description="Every design starts with your brand, your audience, and your goals — mapped into a visitor journey built to build trust and convert, not just a page that looks nice."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 items-start gap-8 sm:grid-cols-2 sm:gap-6">
              <div>
                <MockupChrome url="genericbuilder.com/site42" className="opacity-90 grayscale">
                  <GenericTemplateMockup />
                </MockupChrome>
                <p className="mt-3 text-center text-sm text-muted-foreground">
                  Typical template — dense, generic, no clear visual hierarchy
                </p>
              </div>
              <div>
                <MockupChrome url="yourbusiness.com">
                  <PremiumHomepageMockup />
                </MockupChrome>
                <p className="mt-3 text-center text-sm font-medium text-foreground">
                  A GrowVibe custom build — clear hierarchy, on-brand, built to convert
                </p>
              </div>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted-foreground">
              Both mockups are original, illustrative layouts built from our own design system — not
              screenshots of any real website or competitor.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5. Performance and Technology */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Performance & Technology"
              title="Modern technology, built around real business outcomes"
              description="We build on Next.js, React, and modern web infrastructure — not because it's trendy, but because of what it means for your visitors and your search rankings."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PERFORMANCE_OUTCOMES.map((item, i) => (
              <StaggerItem key={item.title}>
                <div
                  data-cursor="hover"
                  className="h-full rounded-2xl border border-border/70 bg-card p-6 text-center transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div
                    className="mx-auto flex h-11 w-11 animate-float-icon items-center justify-center rounded-md bg-accent text-accent-foreground"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-sm font-semibold">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={120}>
            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-3">
              {TECH_BADGES.map((item) => (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-xs font-medium text-foreground"
                >
                  <item.icon className="h-3.5 w-3.5 text-primary" />
                  {item.name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. AI-Integrated Websites */}
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.08]" />
        <div className="container relative">
          <Reveal>
            <SectionHeading
              eyebrow="AI-Integrated Websites"
              title="Websites that keep working after visitors leave"
              description="Every GrowVibe website can ship with real AI features built in — the same kind of AI assistant powering the chat on this very site."
              align="center"
              light
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AI_WEBSITE_FEATURES.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-primary/20">
                  <div
                    className="flex h-11 w-11 flex-shrink-0 animate-float-icon items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 text-primary ring-1 ring-inset ring-white/10"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/50">{item.description}</p>
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={140}>
            <div className="mt-12 text-center">
              <Magnetic className="inline-flex">
                <Button size="lg" variant="light" asChild>
                  <Link href="/contact?intent=quote" data-track="consultation-cta-click">
                    Discuss AI Features for Your Website
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
              <div className="mt-5">
                <Link
                  href="/#ai-solutions"
                  data-cursor="hover"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white"
                >
                  See our full AI Solutions &amp; automation showcase
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Built to Generate Leads */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Built to Generate Leads"
              title="A beautiful website that doesn't generate leads isn't finished"
              description="Every page is built around a simple visitor journey — from landing on your site to becoming a real enquiry."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-14 flex max-w-4xl flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-2">
              {JOURNEY_STEPS.map((step, i) => (
                <Fragment key={step.label}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <span className="max-w-[6.5rem] text-xs font-medium text-foreground">
                      {step.label}
                    </span>
                  </div>
                  {i < JOURNEY_STEPS.length - 1 && (
                    <div className="hidden h-px w-8 flex-shrink-0 bg-border sm:block lg:w-16" />
                  )}
                </Fragment>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <ul className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {LEAD_GEN_CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 8. Website Features */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Website Features"
              title="Features available across our website builds"
              description="Exact features depend on your project's requirements — this is the range we regularly build from."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {WEBSITE_FEATURES.map((item, i) => (
              <StaggerItem key={item.label}>
                <div
                  data-cursor="hover"
                  className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-border/70 bg-card p-5 text-center transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div
                    className="flex h-10 w-10 animate-float-icon items-center justify-center rounded-md bg-accent text-accent-foreground"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-medium leading-snug">{item.label}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 9. Our Development Process */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Our Development Process"
              title="A clear, proven process from first call to launch"
              description="No guesswork — here's exactly how a GrowVibe website project moves from idea to a live site."
            />
          </Reveal>

          <div className="relative mt-14">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block"
            />
            <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((step) => (
                <StaggerItem key={step.number}>
                  <div
                    data-cursor="hover"
                    className="relative h-full rounded-2xl border border-border/70 bg-card p-6 transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">
                      {step.number}
                    </div>
                    <h3 className="mt-4 font-heading text-base font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* 10. Portfolio / Featured Work */}
      <section id="portfolio" className="scroll-mt-24 bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Featured Work"
              title="Real work, honestly labeled"
              description="Real screenshots from our own live platform, plus concept and demo projects — clearly labeled as exactly what they are."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Reveal delay={100}>
            <div
              data-track="portfolio-project-click"
              className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl border border-border/70 bg-card p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                <BrowserFrame
                  src="/crm-screenshots/dashboard.jpg"
                  alt="GrowVibe CRM dashboard — a real, live web application built and deployed by GrowVibe"
                  lightboxImages={REAL_PLATFORM_SCREENSHOTS}
                  lightboxIndex={0}
                />
                <div>
                  <Badge variant="accent" className="mb-3">
                    Demo Platform
                  </Badge>
                  <h3 className="font-heading text-xl font-semibold tracking-tight">
                    Custom CRM Web Application
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Real screenshots from GrowVibe&apos;s own live CRM platform — built, designed, and
                    deployed by our team, and one example of the custom web application and interface
                    design work we do beyond marketing websites.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {["Next.js & React", "Custom UI/UX design", "Real-time dashboards", "AI features built in"].map(
                      (feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      )
                    )}
                  </ul>
                  <Link
                    href="/services/crm-development"
                    data-cursor="hover"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
                  >
                    View Project
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          <Stagger className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {MORE_PROJECTS.map((project) => (
              <StaggerItem key={project.client}>
                <div data-track="portfolio-project-click" className="h-full">
                  <CaseStudyCard {...project} />
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={120}>
            <div className="mt-10 text-center">
              <Link
                href="/work"
                data-cursor="hover"
                data-track="portfolio-project-click"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                View Full Portfolio
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11. Why a Professional Website Matters */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Why It Matters"
              title="Why a professional website matters more than ever"
              description="Your website is often the very first impression a potential customer has of your business."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/70 bg-card p-7">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  With a weak website
                </h3>
                <ul className="mt-5 space-y-3">
                  {RISK_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-primary/30 bg-primary/[0.04] p-7">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  With a GrowVibe website
                </h3>
                <ul className="mt-5 space-y-3">
                  {SOLUTION_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 12. Website Packages / Pricing Approach */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionHeading
                eyebrow="Pricing Approach"
                title="A custom quote, built around your actual project"
                description="We don't publish fixed prices, because no two websites need the same thing. Your quote is based on:"
                align="center"
                className="mx-auto"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {PRICING_FACTORS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <div className="mx-auto mt-10 max-w-xl text-center">
              <Magnetic className="inline-flex">
                <Button size="lg" asChild>
                  <Link href="/contact?intent=quote" data-track="consultation-cta-click">
                    Get a Custom Website Quote
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
              <p className="mt-4 text-sm text-muted-foreground">
                No-obligation initial consultation. We don&apos;t promise guaranteed rankings or sales —
                just a clear, honest plan for your project.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" align="center" className="mx-auto" />
          </Reveal>

          <Reveal delay={120}>
            <FaqAccordion items={FAQ_ITEMS} className="mx-auto mt-14 max-w-3xl" />
          </Reveal>
        </div>
      </section>

      {/* 14. Final Conversion Section */}
      <section className="container py-24">
        <Reveal>
          <div className="avoid-print-break relative overflow-hidden rounded-2xl bg-ink px-8 py-16 text-center text-white sm:px-16">
            <div className="absolute inset-0 bg-dot-grid opacity-[0.1]" />
            <GradientMesh className="opacity-60" />
            <div className="relative">
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to Build a Website That Works as Hard as You Do?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60">
                Tell us about your business and goals, and we&apos;ll show you exactly how we&apos;d
                approach your website — with a clear, custom plan and no pressure.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Magnetic>
                  <Button
                    size="lg"
                    variant="light"
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
              <a
                href={SITE_PHONE.href}
                data-cursor="hover"
                data-track="phone-number-click"
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white"
              >
                <Phone className="h-3.5 w-3.5" />
                or call us at {SITE_PHONE.display}
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 15. Sticky Mobile CTA — mobile-only. Sits at z-30, deliberately
          lower than the AI chat launcher (z-40) and the Crisp launcher
          (very high z-index by default), so both always render above it and
          stay fully visible and clickable — never covered. */}
      <div
        className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur-lg sm:hidden"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <Link
          href="/contact?intent=quote"
          data-cursor="hover"
          data-track="consultation-cta-click"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-sm transition-transform active:scale-[0.98]"
        >
          Get a Free Consultation
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      {/* Scroll clearance so the fixed bar above never overlaps this page's
          own final CTA content on mobile. */}
      <div className="h-20 sm:hidden" aria-hidden />
    </LightboxProvider>
  );
}
