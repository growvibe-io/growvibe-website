import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Check, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { Stagger, StaggerItem } from "@/components/stagger";
import { Magnetic } from "@/components/magnetic";
import { FaqAccordion } from "@/components/faq-accordion";

// -----------------------------------------------------------------------
// Standalone ad-landing page for Indian buyers, priced in INR. File path
// and route (/pricing-australia) are left as-is from when this page
// targeted Australian buyers in AUD — only the content below was updated
// to target Indian businesses, so existing links/ad campaigns pointing at
// this URL keep working. Worth renaming the route to something like
// /pricing-india in a follow-up if that history no longer matters.
//
// The rest of the site (Services, CRM Development, Website Design) is
// positioned as a premium, worldwide agency with no published prices;
// this page shows fixed INR pricing aimed specifically at Indian buyers
// reached via paid ads. Both can exist at once because this one is never
// surfaced to general visitors — only reached by a direct link (e.g. from
// a Google/Meta ad).
// -----------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Pricing for Indian Businesses",
  description:
    "Fixed-price websites, e-commerce stores, custom CRMs and web apps for Indian businesses, built in Next.js at prices built for growing businesses.",
  alternates: { canonical: "/pricing-australia" },
  // Ad-traffic-only landing page — kept out of organic search so it
  // doesn't compete with or confuse the "no fixed price, worldwide"
  // messaging on the rest of the site.
  robots: { index: false, follow: true },
  openGraph: {
    title: "Pricing for Indian Businesses | GrowVibe",
    description:
      "Fixed-price websites, e-commerce stores, custom CRMs and web apps for Indian businesses, built in Next.js at prices built for growing businesses.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing for Indian Businesses | GrowVibe",
    description:
      "Fixed-price websites, e-commerce stores, custom CRMs and web apps for Indian businesses, built in Next.js at prices built for growing businesses.",
  },
};

const TRUST_CHIPS = [
  "We work Indian business hours — 10am to 6pm IST",
  "Fixed price, fixed scope",
  "You own 100% of the code",
  "Live Support",
];

type PricingCard = {
  tag?: string;
  featured?: boolean;
  title: string;
  price: string;
  meta: string;
  features: string[];
  cta: string;
  ctaVariant: "accent" | "outline";
};

const PROJECT_PRICING: PricingCard[] = [
  {
    tag: "Most popular",
    title: "Business Website",
    price: "₹9,999",
    meta: "1–2 weeks · Built in Next.js",
    features: [
      "Up to 8 pages, designed for you",
      "Custom design",
      "Built with Next.js",
      "Loads in under 2 seconds",
      "Works properly on every phone",
      "Contact forms and enquiry routing",
      "Google Analytics and Search Console set up",
      "On-page SEO foundations",
      "SEO setup",
      "Unlimited rounds of revisions",
      "30 days free support after launch",
    ],
    cta: "Get a quote",
    ctaVariant: "accent",
  },
  {
    title: "E-commerce Store",
    price: "₹15,999",
    meta: "2–3 weeks · Next.js + Stripe",
    features: [
      "Up to 100 products",
      "Card payments and Apple / Google Pay",
      "Cart, checkout and order management",
      "Customer accounts and order history",
      "Stock and inventory tracking",
      "Abandoned cart emails",
      "Staff training session on handover",
      "Unlimited rounds of revisions",
      "30 days free support after launch",
    ],
    cta: "Get a quote",
    ctaVariant: "outline",
  },
  {
    tag: "Our specialty",
    featured: true,
    title: "Custom CRM",
    price: "₹79,999",
    meta: "4–5 weeks · Built around your workflow",
    features: [
      "Contacts, leads and deal pipeline",
      "Fields and stages matched to how you work",
      "User roles and permissions",
      "Email and calendar integration",
      "Dashboards and reports your team will use",
      "We import your existing spreadsheets",
      "Training for your team",
      "Unlimited rounds of revisions",
      "60 days free support after launch",
    ],
    cta: "Get a quote",
    ctaVariant: "accent",
  },
  {
    title: "Web App / SaaS",
    price: "₹79,999",
    meta: "6–7 weeks · Scoped in stages",
    features: [
      "Paid discovery and scoping first",
      "User accounts and secure login",
      "Subscription billing via Stripe",
      "Admin panel for your team",
      "API for future integrations",
      "Built to handle growth",
      "Delivered in stages you approve",
      "Unlimited rounds of revisions",
      "90 days free support after launch",
    ],
    cta: "Book a scoping call",
    ctaVariant: "outline",
  },
];

const CARE_PLANS: { title: string; price: string; features: string[] }[] = [
  {
    title: "Essential",
    price: "₹3,999/month",
    features: [
      "Hosting",
      "SSL Certificate",
      "Daily Backups",
      "Security Monitoring",
      "Priority Emergency Bug Fixes",
      "Up to 2 Hours of Content Updates per Month",
      "Monthly SEO Health Report",
      "Core Web Vitals Optimisation",
      "AI Chatbot Monitoring (if applicable)",
      "Email Support",
      "Live Chat Support",
      "Priority Support",
    ],
  },
  {
    title: "Growth",
    price: "₹5,999/month",
    features: [
      "Everything in Essential",
      "Landing Page Creation",
      "Monthly Performance Optimisation",
      "SEO Improvements",
      "Conversion Optimisation Recommendations",
      "Email Support",
      "Live Chat Support",
      "Priority Support",
    ],
  },
];

const ADD_ONS: { title: string; price: string; description: string }[] = [
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

const HOW_IT_WORKS = [
  {
    title: "Free call",
    description:
      "20 minutes. You tell us what you need, we tell you honestly whether we're the right fit and roughly what it costs.",
  },
  {
    title: "Fixed quote",
    description: "A written proposal with the exact scope, the exact price and the delivery date. No hourly billing. Ever.",
  },
  {
    title: "Build",
    description: "50% deposit and we start. You see progress on a live preview link every week — no waiting in the dark.",
  },
  {
    title: "Launch",
    description: "Final 50% on approval. We hand over every file, password and repository. Then support, free, for 30 days.",
  },
];

const GOOD_FIT = [
  "Want something built properly, not from a template",
  "Have a budget of ₹9,999 or more",
  "Can give feedback within a few days",
  "Want one team for the build and the upkeep",
  "Care about speed and search rankings",
];

const NOT_A_FIT = [
  "Need it live in under one week",
  "Have a budget under ₹9,999",
  "Want to be billed by the hour",
  "Need someone physically on-site",
  "Are looking for the cheapest quote available",
];

const FAQ_ITEMS = [
  {
    question: "Why are your prices lower than a typical agency?",
    answer:
      "We keep our team lean and our process efficient — no big office, no long chain of account managers between you and the person doing the work. That saving goes straight into your price, not our margin. The difference is our overheads, not the quality of the work — we use the same frameworks, the same standards and the same testing that a larger agency would.",
  },
  {
    question: "Where is your team, and when can I reach you?",
    answer:
      "Our team works from India. We keep standard business hours for calls and support: 10am to 6pm IST, Monday to Friday. Messages sent during your business day get a reply within four hours. If you need a call outside that window, we'll arrange it.",
  },
  {
    question: "Who owns the code and the website?",
    answer:
      "You do — completely, from the moment the final invoice is paid. You get the full source code repository, all hosting logins, the domain, and every design file. Nothing is held hostage. If you ever want to move to another developer, everything they need is already yours.",
  },
  {
    question: "What if the price goes up halfway through?",
    answer:
      "It doesn't. We quote a fixed price for a fixed scope, agreed in writing before we start. If you ask for something outside that scope during the build, we quote it separately and you decide yes or no before we touch it. You'll never open an invoice that surprises you.",
  },
  {
    question: "How do I pay, and is it safe?",
    answer:
      "50% to begin, 50% on approval before handover. We invoice in Indian Rupees, and you can pay by bank transfer, UPI or card. The final payment is only due once you've seen the finished work and signed off on it — so you're never paying for something you haven't reviewed.",
  },
  {
    question: "What happens after launch — do you disappear?",
    answer:
      "Support is included free for 30 days on websites, 60 days on CRM projects and 90 days on web apps. After that you can move onto a care plan from ₹3,999 a month, or simply email us when you need something. There's no obligation either way, and no lock-in contract.",
  },
  {
    question: "Can I see your work first?",
    answer:
      "Yes. Ask on the call and we'll walk you through our demo builds, explain what we built and why, and how we'd approach something similar for you. As our client list grows, we'll add real project walkthroughs here too.",
  },
  {
    question: "How long does it actually take?",
    answer:
      "A business website is 1–2 weeks. An online store is 2–3 weeks. A custom CRM is 4–5 weeks. These assume you get us your content and feedback within a few days at each stage — the main reason projects run late is waiting on the client, so we'll tell you exactly what we need and when.",
  },
  {
    question: "Do I need to pay GST?",
    answer:
      "GST is added to your invoice where applicable under Indian tax law — we'll confirm the exact treatment for your business when we send your written quote. It's still worth a quick check with your accountant for how it applies to your specific situation. We'll provide whatever documentation they ask for.",
  },
];

function PriceCard({ card }: { card: PricingCard }) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col p-7",
        card.featured && "border-primary/60 shadow-lg shadow-primary/10 ring-1 ring-primary/60"
      )}
    >
      {card.tag && (
        <Badge variant="accent" className="mb-4 w-fit">
          {card.tag}
        </Badge>
      )}
      <h3 className="font-heading text-lg font-semibold tracking-tight">{card.title}</h3>
      <div className="mt-3">
        <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">From</div>
        <div className="mt-1 font-heading text-3xl font-semibold tracking-tight">{card.price}</div>
      </div>
      <p className="mt-2 border-b border-border pb-5 text-sm text-muted-foreground">{card.meta}</p>
      <ul className="mt-5 flex-1 space-y-2.5">
        {card.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            <span className="text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={card.ctaVariant === "accent" ? "accent" : "outline"}
        className="mt-6 w-full"
        asChild
      >
        <a href="#book" data-track="consultation-cta-click">
          {card.cta}
        </a>
      </Button>
    </Card>
  );
}

export default function PricingAustraliaPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-background">
        <div className="container py-20 text-center">
          <Reveal>
            <h1 className="mx-auto max-w-2xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Clear pricing. No surprises.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Custom websites, CRMs and web apps for Indian businesses — built with the same tech the
              big platforms use, at prices built for growing businesses.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-2.5">
              {TRUST_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-foreground/80"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Project pricing */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                Project pricing
              </h2>
              <p className="mt-3 text-muted-foreground">
                Every price below is a real starting point, not a teaser. Your final quote depends on how
                many features you need — we confirm it in writing before any work begins.
              </p>
            </div>
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECT_PRICING.map((card) => (
              <StaggerItem key={card.title}>
                <PriceCard card={card} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Care plans */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                Keep it running — care plans
              </h2>
              <p className="mt-3 text-muted-foreground">
                A website is not a one-off purchase. Things break, plugins expire, security patches land.
                Pick a plan and stop thinking about it.
              </p>
            </div>
          </Reveal>

          <Stagger className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
            {CARE_PLANS.map((plan) => (
              <StaggerItem key={plan.title}>
                <Card className="h-full p-7">
                  <h3 className="font-heading text-lg font-semibold">{plan.title}</h3>
                  <div className="mt-2 font-heading text-2xl font-semibold tracking-tight">
                    {plan.price}
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Cancel any time with 30 days&apos; notice. No lock-in contracts.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">Add-ons</h2>
              <p className="mt-3 text-muted-foreground">Bolt these onto any project.</p>
            </div>
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ADD_ONS.map((addon) => (
              <StaggerItem key={addon.title}>
                <Card className="h-full p-6">
                  <h3 className="font-heading text-base font-semibold">{addon.title}</h3>
                  <div className="mt-3 font-heading text-xl font-semibold text-primary">{addon.price}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{addon.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                How it works
              </h2>
              <p className="mt-3 text-muted-foreground">Four steps. You always know what happens next.</p>
            </div>
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step, i) => (
              <StaggerItem key={step.title}>
                <div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </div>
                  <h3 className="mt-3 font-heading text-base font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Founding client offer */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <div className="rounded-2xl border border-primary/40 bg-primary/[0.05] p-7 sm:p-9">
              <h3 className="font-heading text-lg font-semibold">Founding client offer — 30% off</h3>
              <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                We&apos;re building our client list in India, and we&apos;d rather earn proof than buy
                it. The next three projects get <strong className="text-foreground">30% off</strong>{" "}
                the prices above. In return we ask for a short written review, permission to use your logo,
                and the ability to write up the project as a case study. That&apos;s the whole trade —
                nothing hidden.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Are we a good fit */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                Are we a good fit?
              </h2>
              <p className="mt-3 text-muted-foreground">We&apos;d rather tell you now than waste your time.</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
              <Card className="p-7">
                <h3 className="mb-4 font-heading text-base font-semibold">Yes, if you</h3>
                <ul className="space-y-2.5">
                  {GOOD_FIT.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-7">
                <h3 className="mb-4 font-heading text-base font-semibold">Probably not, if you</h3>
                <ul className="space-y-2.5">
                  {NOT_A_FIT.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Questions people actually ask
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <FaqAccordion items={FAQ_ITEMS} className="mx-auto mt-14 max-w-3xl" />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section id="book" className="scroll-mt-24 bg-secondary/40 py-20 text-center sm:py-24">
        <div className="container">
          <Reveal>
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Not sure which one you need?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Book a free 20-minute call. We&apos;ll tell you what your project realistically costs, and if
              we&apos;re not the right fit we&apos;ll say so.
            </p>
            <Magnetic className="mt-8 inline-flex">
              <Button size="lg" asChild>
                <Link href="/contact?intent=quote" data-track="consultation-cta-click">
                  Book a Free 20-Minute Call
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </Magnetic>
            <p className="mt-4 text-sm text-muted-foreground">
              Available 10am – 6pm IST · No sales pressure · hello@growvibe.io
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
