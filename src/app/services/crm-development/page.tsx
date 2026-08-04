import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Sparkles,
  HeartPulse,
  Building2,
  HardHat,
  Scale,
  ShoppingCart,
  Briefcase,
  Users,
  BarChart3,
  Zap,
  Plug,
  ShieldCheck,
  Smartphone,
  Bot,
  Target,
  TrendingUp,
  FileText,
  Lightbulb,
  RefreshCw,
  UserCheck,
  Wrench,
  Cpu,
  Cloud,
  Lock,
  Layers,
  GitBranch,
  Rocket,
  LifeBuoy,
  Monitor,
  SlidersHorizontal,
  Calendar,
  Mail,
  Inbox,
  MessageSquare,
  MessageCircle,
  CreditCard,
  Receipt,
  Code2,
  Database,
  Webhook,
  Globe,
  Check,
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
import { AnimatedCounter } from "@/components/animated-counter";
import { CrmDemoPicker } from "@/components/crm-demo-picker";
import { FaqAccordion } from "@/components/faq-accordion";
import { ServiceCard } from "@/components/services/service-card";
import { BrowserFrame } from "@/components/browser-frame";
import { LightboxProvider, type LightboxImage } from "@/components/lightbox-provider";
import type { ServiceItem } from "@/lib/services-data";

// Every screenshot on this page (see /public/crm-screenshots) is a real
// capture from the live General CRM demo — not a mockup or stock
// illustration. The live demo links themselves are handled by
// <CrmDemoPicker /> (src/components/crm-demo-picker.tsx), which now offers
// both the General CRM and the new Subcontractor CRM.
export const metadata: Metadata = {
  title: "CRM Development",
  description:
    "Custom, AI-powered CRM development for healthcare, real estate, construction, law firms, e-commerce, and agencies — see the real product, not a mockup.",
  alternates: { canonical: "/services/crm-development" },
};

const siteUrl = "https://growvibe.io";

// Industry-tailored CRM builds. Shaped as ServiceItem so we can reuse the
// exact same <ServiceCard> visual language as the main /services page —
// icon badge, title, description, feature pills — instead of a one-off
// card style that would make this page feel disconnected from the rest of
// the site.
const INDUSTRY_CRMS: ServiceItem[] = [
  {
    id: "healthcare-crm",
    icon: HeartPulse,
    title: "Healthcare CRM",
    description:
      "Keep patient relationships, appointments, and referrals organized in one system built around how healthcare teams actually work.",
    features: [
      "Patient & lead tracking",
      "Appointment reminders",
      "Referral tracking",
      "Secure data handling",
    ],
  },
  {
    id: "real-estate-crm",
    icon: Building2,
    title: "Real Estate CRM",
    description:
      "Track buyers, sellers, listings, and follow-ups in one pipeline built for how real estate deals actually move.",
    features: [
      "Listing & deal tracking",
      "Buyer/seller pipelines",
      "Automated follow-ups",
      "Showing & appointment tracking",
    ],
  },
  {
    id: "construction-crm",
    icon: HardHat,
    title: "Construction CRM",
    description:
      "Manage leads, bids, job progress, and client communication without juggling spreadsheets and email threads.",
    features: [
      "Bid & estimate tracking",
      "Project pipeline stages",
      "Client communication log",
      "Team task assignment",
    ],
  },
  {
    id: "law-firm-crm",
    icon: Scale,
    title: "Law Firm CRM",
    description:
      "Organize client intake, case status, and follow-ups in a system built around confidentiality and clear case ownership.",
    features: [
      "Client intake tracking",
      "Case status pipeline",
      "Document & note organization",
      "Task & deadline reminders",
    ],
  },
  {
    id: "ecommerce-crm",
    icon: ShoppingCart,
    title: "E-commerce CRM",
    description:
      "Connect customer data, order history, and support conversations so your team can sell and support from one place.",
    features: [
      "Customer & order history",
      "Abandoned cart follow-ups",
      "Support conversation tracking",
      "Segmentation & campaigns",
    ],
  },
  {
    id: "agency-crm",
    icon: Briefcase,
    title: "Agency CRM",
    description:
      "Keep client accounts, project status, and team workload visible in one dashboard built for agency operations.",
    features: [
      "Client account tracking",
      "Project & retainer pipelines",
      "Team workload visibility",
      "Reporting & handoff notes",
    ],
  },
];

// Real screenshots from the live GrowVibe CRM demo (growvibe-crm.vercel.app),
// captured directly from the running app — see /public/crm-screenshots.
// Alternating image/content rows, in the order requested: Executive
// Dashboard, Leads, Pipeline, Customers, Projects, Tasks, Reports, AI
// Assistant, AI Automations. (The main Dashboard screenshot leads the page
// itself, in the hero.)
const FEATURE_SHOWCASE: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
}[] = [
  {
    id: "executive-dashboard",
    eyebrow: "Executive Dashboard",
    title: "A morning briefing for leadership, not another report to build",
    description:
      "Revenue, pipeline value, and conversion rate roll up into one view — with an AI executive summary that reads like a person wrote it, not a spreadsheet.",
    bullets: [
      "Real-time revenue, pipeline and conversion metrics",
      "AI-written executive summary, generated fresh",
      "Sales funnel from first touch to closed-won",
    ],
    image: "/crm-screenshots/executive.jpg",
    imageAlt: "GrowVibe CRM Executive Dashboard showing revenue, pipeline value and sales funnel",
  },
  {
    id: "leads",
    eyebrow: "Leads",
    title: "Every lead scored, sorted, and ready to work",
    description:
      "AI scores every inbound lead the moment it lands, so your team spends time on the ones most likely to close instead of guessing.",
    bullets: [
      "AI lead score on every record",
      "Filter by status, source, and owner instantly",
      "Estimated value and qualification tracked automatically",
    ],
    image: "/crm-screenshots/leads.jpg",
    imageAlt: "GrowVibe CRM Leads list with AI scores, statuses and estimated deal value",
  },
  {
    id: "pipeline",
    eyebrow: "Pipeline",
    title: "A pipeline your team can actually read",
    description:
      "Drag-and-drop deals across seven stages, with a weighted forecast that updates the moment anything moves — no manual recalculating.",
    bullets: [
      "Seven-stage kanban board, fully drag-and-drop",
      "Weighted forecast recalculates live",
      "Per-stage totals so nothing gets lost",
    ],
    image: "/crm-screenshots/deals.jpg",
    imageAlt: "GrowVibe CRM drag-and-drop deals pipeline across seven stages",
  },
  {
    id: "customers",
    eyebrow: "Customers",
    title: "Every account, with the health score to back it up",
    description:
      "ARR, renewal dates, and a health score for every customer — so at-risk accounts surface before they churn, not after.",
    bullets: [
      "Health score on every account",
      "Renewal dates and ARR at a glance",
      "Full profile: timeline, notes, deals and tasks",
    ],
    image: "/crm-screenshots/customers.jpg",
    imageAlt: "GrowVibe CRM Customers grid with ARR, health scores and renewal dates",
  },
  {
    id: "projects",
    eyebrow: "Projects",
    title: "Delivery work tracked next to the deal that funded it",
    description:
      "Budgets, spend, and progress for every project — connected to the customer and deal it belongs to, not managed in a separate tool.",
    bullets: [
      "Budget vs. spend tracked per project",
      "Progress and status at a glance",
      "Linked directly to the originating customer",
    ],
    image: "/crm-screenshots/projects.jpg",
    imageAlt: "GrowVibe CRM Projects board with budgets, spend and progress",
  },
  {
    id: "tasks",
    eyebrow: "Tasks",
    title: "Everything the team owes, in one queue",
    description:
      "Open, due today, overdue, and completed — every task prioritized and tied back to the lead, deal, or account it belongs to.",
    bullets: [
      "Priority and due-date tracking built in",
      "Overdue items surfaced automatically",
      "Tied to the account, deal, or lead they belong to",
    ],
    image: "/crm-screenshots/tasks.jpg",
    imageAlt: "GrowVibe CRM Tasks queue with priorities and due dates",
  },
  {
    id: "reports",
    eyebrow: "Reports",
    title: "The numbers leadership actually asks for",
    description:
      "Conversion rate, monthly growth, average deal size, and revenue vs. target — the metrics that answer \"how are we doing\" without a manual export.",
    bullets: [
      "Revenue vs. target, tracked monthly",
      "Conversion funnel and lead-source performance",
      "Team leaderboard built in",
    ],
    image: "/crm-screenshots/reports.jpg",
    imageAlt: "GrowVibe CRM Reports showing revenue versus target and conversion rate",
  },
  {
    id: "ai-assistant",
    eyebrow: "AI Assistant",
    title: "Ask it anything about your business, in plain English",
    description:
      "The AI assistant answers from your live CRM data — forecasts, at-risk deals, top leads — the same way a sharp analyst on your team would.",
    bullets: [
      "Answers generated from live CRM data",
      "Drafts follow-up emails on request",
      "Available from anywhere in the app, one click away",
    ],
    image: "/crm-screenshots/ai-assistant.jpg",
    imageAlt: "GrowVibe CRM AI Assistant answering a question about next month's revenue",
  },
  {
    id: "ai-automations",
    eyebrow: "AI Automations",
    title: "Workflows AI runs on your behalf, end to end",
    description:
      "From a new lead landing to a meeting getting booked, AI handles the qualification, the follow-up draft, and the scheduling — automatically.",
    bullets: [
      "Automatic lead qualification and scoring",
      "AI-drafted follow-up emails, ready to send",
      "End-to-end workflow, from lead to booked meeting",
    ],
    image: "/crm-screenshots/automations.jpg",
    imageAlt: "GrowVibe CRM AI Automations showing a lead moving through the system end to end",
  },
];

// Every screenshot on the page, in the order it appears top to bottom — the
// shared lightbox cycles through this whole set with prev/next, regardless
// of which one a visitor clicks first.
const ALL_SCREENSHOTS: LightboxImage[] = [
  {
    src: "/crm-screenshots/dashboard.jpg",
    alt: "GrowVibe CRM dashboard with live leads, deals, revenue and AI insights",
  },
  ...FEATURE_SHOWCASE.map((item) => ({ src: item.image, alt: item.imageAlt })),
  {
    src: "/crm-screenshots/customer-detail.jpg",
    alt: "GrowVibe CRM customer profile with an AI-generated summary and renewal probability",
  },
  {
    src: "/crm-screenshots/login.jpg",
    alt: "GrowVibe CRM secure sign-in screen",
  },
];

const AI_FEATURES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Bot,
    title: "AI Business Assistant",
    description:
      "Ask questions about leads, deals, or revenue in plain English and get answers pulled straight from live CRM data.",
  },
  {
    icon: Target,
    title: "AI Lead Prioritisation",
    description:
      "Every inbound lead is scored automatically, so your team always knows exactly who to call next.",
  },
  {
    icon: TrendingUp,
    title: "AI Revenue Forecasting",
    description:
      "Next month's revenue projected from real momentum and pipeline — not a guess dressed up as a chart.",
  },
  {
    icon: FileText,
    title: "AI Weekly Reports",
    description:
      "A written summary of the week's performance, generated on demand instead of assembled by hand.",
  },
  {
    icon: Lightbulb,
    title: "AI Business Insights",
    description:
      "Patterns in conversion, source performance, and deal velocity, surfaced before someone has to go digging.",
  },
  {
    icon: RefreshCw,
    title: "AI Workflow Automation",
    description:
      "Lead qualification, follow-up drafts, and meeting scheduling handled automatically, end to end.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description:
      "A ranked list of what to focus on today, so nothing urgent slips through unnoticed.",
  },
  {
    icon: UserCheck,
    title: "AI Customer Summaries",
    description:
      "Every account gets a plain-English summary and renewal-risk read the moment you open it.",
  },
];

const CORE_CAPABILITIES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Users,
    title: "Lead & Customer Tracking",
    description: "Every contact, conversation, and record organized in one searchable system.",
  },
  {
    icon: BarChart3,
    title: "Sales Pipeline Dashboards",
    description: "Clear visibility into every deal, case, or project stage — no more guesswork.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automated reminders, follow-ups, and status updates that remove manual busywork.",
  },
  {
    icon: Plug,
    title: "Integrations",
    description: "Connects with the email, calendar, and business tools your team already uses.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access",
    description: "Give each team member exactly the access they need — nothing more, nothing less.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Access",
    description: "A responsive interface your team can use just as easily from a phone as a desktop.",
  },
];

const TRUST_HIGHLIGHTS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Wrench,
    title: "Fully Custom Built",
    description: "Built from scratch around your exact workflow — not a rebranded template.",
  },
  {
    icon: Cpu,
    title: "AI Powered",
    description: "Real AI running on live data, wired into every module from day one.",
  },
  {
    icon: Cloud,
    title: "Cloud Hosted",
    description: "Deployed on modern cloud infrastructure with zero maintenance overhead.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Role-based access and data protection built in, not bolted on later.",
  },
  {
    icon: Lock,
    title: "Secure Authentication",
    description: "Modern authentication and session handling, not a bare login form.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "A full experience on any device, not a stripped-down mobile view.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Built for speed, so your team never waits on the interface.",
  },
  {
    icon: Layers,
    title: "Unlimited Scalability",
    description: "Grows from a five-person team to a full enterprise rollout.",
  },
  {
    icon: GitBranch,
    title: "Built Around Your Workflow",
    description: "Every pipeline and field mapped to how your team actually works.",
  },
];

const INTEGRATIONS: { icon: LucideIcon; name: string }[] = [
  { icon: Globe, name: "Google Workspace" },
  { icon: Calendar, name: "Google Calendar" },
  { icon: Mail, name: "Gmail" },
  { icon: Inbox, name: "Outlook" },
  { icon: MessageSquare, name: "Slack" },
  { icon: MessageCircle, name: "WhatsApp" },
  { icon: CreditCard, name: "Stripe" },
  { icon: Receipt, name: "QuickBooks" },
  { icon: Zap, name: "Zapier" },
  { icon: Code2, name: "REST APIs" },
  { icon: Database, name: "Supabase" },
  { icon: Webhook, name: "Webhooks" },
];

const WHY_GROWVIBE: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: SlidersHorizontal,
    title: "Custom-built for your exact workflow",
    description: "No rigid template — every pipeline, field, and stage is built around how your team actually works.",
  },
  {
    icon: Bot,
    title: "AI built into the platform",
    description: "Forecasting, scoring, and automation are part of the core build, not a bolt-on add-on.",
  },
  {
    icon: Monitor,
    title: "Modern enterprise-grade interface",
    description: "The kind of interface your team enjoys using, not one they tolerate.",
  },
  {
    icon: Rocket,
    title: "Fast cloud deployment",
    description: "Built and shipped to production quickly, without a drawn-out implementation cycle.",
  },
  {
    icon: Lock,
    title: "Secure authentication",
    description: "Modern authentication and access control from the first line of code.",
  },
  {
    icon: Layers,
    title: "Scalable architecture",
    description: "Built to grow with your team, from a handful of users to an enterprise rollout.",
  },
  {
    icon: Smartphone,
    title: "Responsive on every device",
    description: "A full, usable experience on desktop, tablet, and phone alike.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing support and future enhancements",
    description: "We stay involved after launch — this is a relationship, not a one-time handoff.",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "We learn your workflow, team structure, and the tools you currently use to manage leads and customers.",
  },
  {
    number: "02",
    title: "Plan",
    description: "We map data fields, pipeline stages, user roles, and integrations before writing any code.",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop custom-built dashboards, tracking, and automation — not a rigid, one-size-fits-all template.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We migrate your existing data, train your team, and provide ongoing support as your process evolves.",
  },
];

const CRM_PRICING_POINTS = [
  "50% to begin, 50% on approval",
  "You own 100% of the code",
  "60 days free support after launch",
];

const FAQ_ITEMS = [
  {
    question: "Can you build a CRM specific to our industry?",
    answer:
      "Yes. We build the CRM around your specific workflow rather than adapting a generic template — whether that's healthcare, real estate, construction, legal, e-commerce, agency operations, or another industry entirely.",
  },
  {
    question: "Can you migrate our data from spreadsheets or an existing CRM?",
    answer:
      "Yes. We can migrate contacts, deal or case history, and records from spreadsheets or your current CRM so your team isn't starting from zero.",
  },
  {
    question: "Can the CRM integrate with tools we already use?",
    answer:
      "Yes. We build integrations with the email, calendar, accounting, and other business tools your team already relies on — Google Workspace, Slack, Stripe, QuickBooks, Zapier, and custom REST APIs among them — so the CRM fits into your existing setup instead of replacing it.",
  },
  {
    question: "Is the CRM mobile-friendly?",
    answer:
      "Yes. Every CRM we build is fully responsive, so your team can access leads, records, and pipelines from a phone or tablet as easily as a desktop.",
  },
  {
    question: "What does the \"Explore the Live CRM Demo\" button show me?",
    answer:
      "It lets you pick between two fully working CRMs — a General CRM (dashboard, leads, pipeline, tasks, and reports) and a Subcontractor CRM (tenders, jobs, variations, progress claims, and retention), both with real AI features running on live demo data, that you can click through yourself right now. When you're ready, request a free consultation and we'll build one around your industry.",
  },
  {
    question: "How long does a custom CRM take to build?",
    answer:
      "It depends on your requirements — the number of pipelines, integrations, and user roles all affect scope. Share your project details on the Contact page and we'll give you a real timeline, not a generic estimate.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
    {
      "@type": "ListItem",
      position: 3,
      name: "CRM Development",
      item: `${siteUrl}/services/crm-development`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "CRM Development",
  name: "Custom CRM Development",
  description:
    "Custom, AI-powered CRM systems tailored to healthcare, real estate, construction, law firm, e-commerce, and agency workflows.",
  provider: {
    "@type": "Organization",
    name: "GrowVibe",
    url: siteUrl,
  },
  areaServed: ["United States", "Worldwide"],
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

/** One alternating screenshot-beside-content row in the feature showcase. */
function ShowcaseRow({
  eyebrow,
  title,
  description,
  bullets,
  image,
  imageAlt,
  reverse = false,
  tinted = false,
  lightboxIndex,
}: {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  tinted?: boolean;
  lightboxIndex: number;
}) {
  return (
    <section className={cn("py-16 sm:py-20", tinted && "bg-secondary/40")}>
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className={reverse ? "lg:order-2" : undefined}>
            <BrowserFrame
              src={image}
              alt={imageAlt}
              lightboxImages={ALL_SCREENSHOTS}
              lightboxIndex={lightboxIndex}
            />
          </Reveal>
          <Reveal delay={100} className={reverse ? "lg:order-1" : undefined}>
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {eyebrow}
            </div>
            <h3 className="font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              {title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-foreground/80">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function CrmDevelopmentPage() {
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink pb-36 pt-20 text-white sm:pb-48 sm:pt-24">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.12]" />
        <GradientMesh />

        <div className="container relative text-center">
          <Reveal>
            <Badge variant="dark" className="mb-6">
              <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
              CRM Development
            </Badge>
            <h1 className="mx-auto max-w-3xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Custom, AI-powered CRM development, built around your industry
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              This isn&apos;t a mockup. Every screenshot on this page is
              captured from our real, working CRM platform — the same one
              we customize for healthcare, real estate, construction, law
              firms, e-commerce, and agencies.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Reveal delay={100}>
              <CrmDemoPicker
                triggerLabel="Explore the Live CRM Demo"
                size="lg"
                variant="light"
                className="shadow-[0_0_0_0_rgba(28,160,102,0)] transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(28,160,102,0.35)]"
              />
            </Reveal>
            <Reveal delay={220}>
              <Magnetic>
                <Button size="lg" variant="outlineLight" asChild>
                  <Link href="/contact?intent=quote">
                    Book a Free CRM Strategy Call
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <div className="mx-auto mt-12 flex max-w-lg flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t border-white/10 pt-10">
              <div>
                <div className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                  <AnimatedCounter value={INDUSTRY_CRMS.length} />
                </div>
                <p className="mt-1 text-sm text-white/50">Industries covered</p>
              </div>
              <div>
                <div className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                  <AnimatedCounter value={AI_FEATURES.length} />
                </div>
                <p className="mt-1 text-sm text-white/50">Built-in AI features</p>
              </div>
              <div>
                <div className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                  <AnimatedCounter value={100} suffix="%" />
                </div>
                <p className="mt-1 text-sm text-white/50">Custom-built</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Floating hero screenshot — bleeds up into the dark hero above */}
      <div className="container relative -mt-28 sm:-mt-36">
        <Reveal delay={240} scale>
          <BrowserFrame
            src="/crm-screenshots/dashboard.jpg"
            alt="GrowVibe CRM dashboard with live leads, deals, revenue and AI insights"
            className="mx-auto max-w-5xl"
            priority
            lightboxImages={ALL_SCREENSHOTS}
            lightboxIndex={0}
          />
        </Reveal>
      </div>

      {/* Industry CRM cards */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Built For Your Industry"
              title="CRM systems tailored to how you actually work"
              description="The same pipeline logic doesn't work for a law firm and a real estate team. Here's how we adapt the build to your industry."
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_CRMS.map((item) => (
              <StaggerItem key={item.id}>
                <ServiceCard service={item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Feature showcase — real screenshots beside real explanations */}
      <div className="border-t border-border/70">
        <div className="container pt-20 sm:pt-24">
          <Reveal>
            <SectionHeading
              eyebrow="See The Real Product"
              title="Every screen, straight from the live CRM"
              description="No stock dashboards, no illustrated placeholders — this is what your team would actually click through every day."
              align="center"
              className="mx-auto"
            />
          </Reveal>
        </div>
        {FEATURE_SHOWCASE.map((item, i) => (
          <ShowcaseRow
            key={item.id}
            eyebrow={item.eyebrow}
            title={item.title}
            description={item.description}
            bullets={item.bullets}
            image={item.image}
            imageAlt={item.imageAlt}
            reverse={i % 2 === 1}
            tinted={i % 2 === 1}
            lightboxIndex={i + 1}
          />
        ))}
      </div>

      {/* AI Built Into Every CRM */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Intelligence, Not Just Data Entry"
              title="AI built into every CRM"
              description="Every GrowVibe CRM ships with AI already wired into the workflow — real logic running on your live data, not a bolted-on chatbot."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <BrowserFrame
                  src="/crm-screenshots/ai-assistant.jpg"
                  alt="GrowVibe CRM AI assistant answering a question about next month's revenue"
                  lightboxImages={ALL_SCREENSHOTS}
                  lightboxIndex={8}
                />
                <p className="mt-3 text-center text-sm text-muted-foreground">
                  The AI assistant, answering from live data
                </p>
              </div>
              <div>
                <BrowserFrame
                  src="/crm-screenshots/customer-detail.jpg"
                  alt="GrowVibe CRM customer profile with an AI-generated summary and renewal probability"
                  lightboxImages={ALL_SCREENSHOTS}
                  lightboxIndex={10}
                />
                <p className="mt-3 text-center text-sm text-muted-foreground">
                  An AI customer summary, on every account
                </p>
              </div>
            </div>
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AI_FEATURES.map((item, i) => (
              <StaggerItem key={item.title}>
                <Card
                  data-cursor="hover"
                  className="h-full border-border/70 transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardContent className="pt-8">
                    <div
                      className="flex h-11 w-11 animate-float-icon items-center justify-center rounded-md bg-primary/10 text-primary"
                      style={{ animationDelay: `${i * 200}ms` }}
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

      {/* Core capabilities */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="What's Included"
              title="Every CRM we build includes"
              align="center"
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_CAPABILITIES.map((item, i) => (
              <StaggerItem key={item.title}>
                <Card
                  data-cursor="hover"
                  className="h-full border-border/70 text-center transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardContent className="pt-8">
                    <div
                      className="mx-auto flex h-12 w-12 animate-float-icon items-center justify-center rounded-md bg-accent text-accent-foreground"
                      style={{ animationDelay: `${i * 200}ms` }}
                    >
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-heading font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Trust & platform highlights */}
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.08]" />
        <div className="container relative">
          <Reveal>
            <SectionHeading
              eyebrow="Built To A Higher Standard"
              title="A platform built like enterprise software, not a template"
              align="center"
              light
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST_HIGHLIGHTS.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-primary/20">
                  <div
                    className="flex h-12 w-12 flex-shrink-0 animate-float-icon items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 text-primary ring-1 ring-inset ring-white/10"
                    style={{ animationDelay: `${i * 180}ms` }}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/50">
                    {item.description}
                  </p>
                  {/* Soft brand-colour glow that fades in on hover */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={120}>
            <div className="mx-auto mt-14 max-w-2xl">
              <BrowserFrame
                src="/crm-screenshots/login.jpg"
                alt="GrowVibe CRM secure sign-in screen"
                lightboxImages={ALL_SCREENSHOTS}
                lightboxIndex={11}
              />
              <p className="mt-3 text-center text-sm text-white/50">
                Secure sign-in, ready on day one — every CRM ships with real authentication, not a placeholder login screen.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Connects To Your Stack"
              title="Integrates with the tools you already use"
              description="Every CRM we build can be customized with the third-party integrations your business actually needs — these are common starting points, not the limit."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {INTEGRATIONS.map((item, i) => (
              <StaggerItem key={item.name}>
                <div
                  data-cursor="hover"
                  className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-border/70 bg-card p-6 text-center transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div
                    className="flex h-11 w-11 animate-float-icon items-center justify-center rounded-md bg-accent text-accent-foreground"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why GrowVibe */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Why GrowVibe"
              title="Why businesses choose GrowVibe over an off-the-shelf CRM"
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_GROWVIBE.map((item, i) => (
              <StaggerItem key={item.title}>
                <div
                  data-cursor="hover"
                  className="h-full rounded-2xl border border-border/70 bg-card p-6 transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div
                    className="flex h-11 w-11 animate-float-icon items-center justify-center rounded-md bg-accent text-accent-foreground"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Our Process"
              title="How we build your CRM"
              description="A clear, four-step process from first conversation to a system your team actually uses."
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <StaggerItem key={step.number}>
                <div
                  data-cursor="hover"
                  className="h-full rounded-2xl border border-border/70 p-6 transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="font-heading text-3xl font-semibold text-primary">
                    {step.number}
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Pricing"
              title="Custom CRM pricing"
              description="No quote forms to find out if we're in your budget."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto mt-14 max-w-2xl">
              <Card className="relative overflow-hidden border-primary/30 p-8 text-center sm:p-12">
                <div className="absolute inset-0 bg-dot-grid opacity-[0.05]" />
                <div className="relative">
                  <Badge variant="outline" className="border-primary/40 text-primary">
                    Custom CRM
                  </Badge>
                  <p className="mt-6 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                    From A$9,000
                  </p>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Fixed price, agreed in writing before we start. Typical build
                    time 8-10 weeks.
                  </p>

                  <ul className="mx-auto mt-8 flex flex-col items-center gap-3 text-left sm:flex-row sm:justify-center sm:gap-8">
                    {CRM_PRICING_POINTS.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-8 text-xs text-muted-foreground">
                    Final price depends on your features and integrations.
                  </p>

                  <Magnetic className="mt-6">
                    <Button size="lg" asChild>
                      <Link href="/pricing-australia">
                        See full pricing
                        <ArrowUpRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </Button>
                  </Magnetic>
                </div>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" align="center" />
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
                Let&apos;s build your custom CRM
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60">
                GrowVibe works with clients across Australia, the United States
                and worldwide. Experience the AI CRM yourself, or request a free
                consultation and we&apos;ll get back to you with a clear,
                custom plan.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CrmDemoPicker
                  triggerLabel="Experience the AI CRM"
                  size="lg"
                  variant="light"
                  className="shadow-[0_0_0_0_rgba(28,160,102,0)] transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(28,160,102,0.35)]"
                />
                <Magnetic>
                  <Button size="lg" variant="outlineLight" asChild>
                    <Link href="/contact">
                      Request a Free Consultation
                      <ArrowUpRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </LightboxProvider>
  );
}
