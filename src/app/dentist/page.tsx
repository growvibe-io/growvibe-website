import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Check,
  Palette,
  Zap,
  Calendar,
  Bot,
  MapPin,
  MoveHorizontal,
  Star,
  BarChart3,
  Search,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { Stagger, StaggerItem } from "@/components/stagger";
import { Magnetic } from "@/components/magnetic";
import { SectionHeading } from "@/components/section-heading";
import { FaqAccordion } from "@/components/faq-accordion";
import { LiveChatCtaButton } from "@/components/live-chat-cta-button";
import { DeviceFrame, Photo } from "@/components/mockup-ui";

const siteUrl = "https://growvibe.io";

export const metadata: Metadata = {
  title: "Dental Website Design & Development",
  description:
    "Premium, high-converting dental websites that help clinics attract new patients, increase appointment bookings, improve local SEO, and automate enquiries with AI.",
  alternates: { canonical: "/dentist" },
  openGraph: {
    title: "Dental Website Design & Development | GrowVibe",
    description:
      "Premium, high-converting dental websites that help clinics attract new patients, increase appointment bookings, improve local SEO, and automate enquiries with AI.",
    url: `${siteUrl}/dentist`,
    siteName: "GrowVibe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Website Design & Development | GrowVibe",
    description:
      "Premium, high-converting dental websites that help clinics attract new patients, increase appointment bookings, improve local SEO, and automate enquiries with AI.",
  },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const TRUST_BADGES = ["AI Chatbots", "Online Appointment Booking", "Local SEO", "Mobile Optimised"];

const WHY_GROWVIBE: { icon: typeof Palette; title: string; description: string }[] = [
  {
    icon: Palette,
    title: "Premium Custom UI/UX",
    description: "A design built around your clinic's brand — not a reused dental template.",
  },
  {
    icon: Zap,
    title: "Fast Next.js Websites",
    description: "Built to load in under two seconds, on any device and any connection.",
  },
  {
    icon: Calendar,
    title: "Online Appointment Booking",
    description: "Patients book directly from your site, day or night, with no phone tag.",
  },
  {
    icon: Bot,
    title: "AI Chatbot for Patient Enquiries",
    description: "Answers common questions and captures new patient enquiries automatically.",
  },
  {
    icon: MapPin,
    title: "Google Maps Integration",
    description: "Clear directions and location details so patients can find you easily.",
  },
  {
    icon: MoveHorizontal,
    title: "Before & After Gallery",
    description: "Showcase real results with a clean, interactive comparison gallery.",
  },
  {
    icon: Star,
    title: "Patient Reviews",
    description: "Build trust by surfacing your best reviews right on the page.",
  },
  {
    icon: BarChart3,
    title: "Google Analytics",
    description: "See exactly how visitors find and use your site, from day one.",
  },
  {
    icon: Search,
    title: "Local SEO Optimisation",
    description: "Built to rank for the searches that actually bring in new patients nearby.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Fast Hosting",
    description: "Reliable hosting with SSL, backups, and monitoring included.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Discovery",
    description: "Understand your clinic and goals.",
  },
  {
    title: "Design",
    description: "Create a modern, premium dental website.",
  },
  {
    title: "Development",
    description: "Build a fast, SEO-ready website with AI integrations.",
  },
  {
    title: "Launch",
    description: "Go live and help generate more patient enquiries.",
  },
];

const FAQ_ITEMS = [
  {
    question: "How long does a dental website take?",
    answer:
      "Most dental clinic websites are ready in a few weeks. The exact timeline depends on scope — how many pages, whether you need online booking or an AI chatbot — we'll confirm an exact date once we understand your project.",
  },
  {
    question: "Can patients book appointments online?",
    answer:
      "Yes. We build online appointment booking directly into your site, so patients can request or book a visit without having to call during office hours.",
  },
  {
    question: "Can you add AI chat support?",
    answer:
      "Yes. We can add an AI chatbot trained on your clinic's services and FAQs, so it can answer common patient questions and capture enquiries around the clock.",
  },
  {
    question: "Will my website rank on Google?",
    answer:
      "Every site we build starts with a solid local SEO foundation — fast loading, proper structure, and metadata built for local search. Ongoing SEO campaigns are available separately if you want to actively grow organic traffic.",
  },
  {
    question: "Can you redesign my existing dental website?",
    answer:
      "Yes. We can improve the design, speed, mobile experience, and conversion flow of an existing dental website, and migrate your existing content and photos across.",
  },
];

// ---------------------------------------------------------------------------
// Illustrative "concept" portfolio previews — original layouts built from
// this site's own design system, not screenshots of any real clinic. Used
// because no real dental client project exists yet, so each card is clearly
// labeled "Concept Project" rather than presented as real client work.
// ---------------------------------------------------------------------------

function DentalHomepagePreview() {
  return (
    <div className="h-[210px] border-b border-border p-2 sm:h-[230px] sm:p-2.5">
      <DeviceFrame>
        <div className="flex h-full flex-col bg-card">
          <div className="relative flex-[1.5] overflow-hidden">
            <Photo
              seed="growvibe-dental-hero"
              width={520}
              height={240}
              className="absolute inset-0 brightness-[0.55]"
            />
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-2.5 py-1.5 sm:px-3">
              <span className="text-[7px] font-bold tracking-tight text-white sm:text-[9px]">Bright Smile Dental</span>
              <span className="rounded-full bg-primary px-2 py-0.5 text-[6px] font-semibold text-primary-foreground">
                Book Now
              </span>
            </div>
            <div className="absolute inset-0 z-10 flex flex-col justify-center gap-1 px-2.5 sm:px-3">
              <span className="text-[8px] font-heading font-semibold text-white sm:text-[12px]">
                Your Smile, Our Priority
              </span>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-3 gap-1.5 overflow-hidden bg-background p-1.5 sm:p-2">
            {["Cleanings", "Implants", "Whitening"].map((s) => (
              <div
                key={s}
                className="flex flex-col items-center justify-center gap-1 rounded-md border border-border bg-card p-1.5 text-center shadow-sm"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-2 w-2" />
                </span>
                <span className="truncate text-[6px] font-medium text-foreground sm:text-[7px]">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </DeviceFrame>
    </div>
  );
}

function BeforeAfterGalleryPreview() {
  return (
    <div className="h-[210px] border-b border-border p-2 sm:h-[230px] sm:p-2.5">
      <DeviceFrame>
        <div className="flex h-full flex-col bg-card">
          <div className="flex flex-shrink-0 items-center justify-between border-b border-border px-3 py-2 sm:px-4">
            <span className="text-[7px] font-bold text-foreground sm:text-[9px]">Before &amp; After</span>
          </div>
          <div className="relative flex-1 overflow-hidden bg-background p-1.5 sm:p-2">
            <div className="relative flex h-full w-full overflow-hidden rounded-md border border-border shadow-sm">
              <div className="relative w-1/2 overflow-hidden border-r-2 border-white">
                <Photo seed="growvibe-dental-before" width={260} height={200} className="brightness-[0.7] grayscale" />
                <span className="absolute bottom-1 left-1 rounded-full bg-ink/70 px-1.5 py-0.5 text-[6px] font-semibold text-white">
                  Before
                </span>
              </div>
              <div className="relative w-1/2 overflow-hidden">
                <Photo seed="growvibe-dental-after" width={260} height={200} />
                <span className="absolute bottom-1 right-1 rounded-full bg-primary px-1.5 py-0.5 text-[6px] font-semibold text-primary-foreground">
                  After
                </span>
              </div>
              <span className="absolute left-1/2 top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
                <MoveHorizontal className="h-2.5 w-2.5 text-ink" />
              </span>
            </div>
          </div>
        </div>
      </DeviceFrame>
    </div>
  );
}

function AppointmentBookingPreview() {
  const slots = ["9:00 AM", "11:30 AM", "2:00 PM", "4:15 PM"];
  return (
    <div className="h-[210px] border-b border-border p-2 sm:h-[230px] sm:p-2.5">
      <DeviceFrame>
        <div className="flex h-full flex-col bg-card">
          <div className="flex flex-shrink-0 items-center gap-1.5 border-b border-border px-3 py-2 sm:px-4">
            <Calendar className="h-2.5 w-2.5 text-primary" />
            <span className="text-[7px] font-bold text-foreground sm:text-[9px]">Book an Appointment</span>
          </div>
          <div className="flex flex-1 flex-col gap-1.5 overflow-hidden bg-background p-1.5 sm:p-2">
            <span className="text-[6px] font-medium text-muted-foreground">Tuesday, March 12</span>
            <div className="grid grid-cols-2 gap-1.5">
              {slots.map((slot, i) => (
                <div
                  key={slot}
                  className={`rounded-md border px-1.5 py-1.5 text-center text-[6px] font-medium sm:text-[7px] ${
                    i === 1
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground"
                  }`}
                >
                  {slot}
                </div>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-center gap-1.5 rounded-full bg-ink px-2.5 py-1.5 text-[6px] font-semibold text-white sm:text-[8px]">
              <Bot className="h-2.5 w-2.5 text-primary" />
              Confirm Booking
            </div>
          </div>
        </div>
      </DeviceFrame>
    </div>
  );
}

const CONCEPT_PROJECTS = [
  {
    key: "homepage",
    category: "CLINIC WEBSITE",
    title: "Modern Dental Clinic Homepage",
    description:
      "A premium homepage concept built around booking and trust — clear services, a strong call to action, and a design that feels credible from the first scroll.",
    Preview: DentalHomepagePreview,
  },
  {
    key: "gallery",
    category: "PATIENT RESULTS",
    title: "Before & After Gallery",
    description:
      "An interactive before/after comparison gallery concept — the pattern used to showcase real patient results on client sites.",
    Preview: BeforeAfterGalleryPreview,
  },
  {
    key: "booking",
    category: "APPOINTMENT BOOKING",
    title: "AI-Assisted Booking Flow",
    description:
      "A concept booking widget showing how patients pick a time and confirm instantly, with AI handling the back-and-forth.",
    Preview: AppointmentBookingPreview,
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function DentistPage() {
  return (
    <>
      {/* 1. Hero — full-screen looping video background */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink text-white sm:min-h-screen">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/videos/dentist-hero.mp4"
          poster="/videos/dentist-hero-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        {/* 35–40% flat dark overlay, exactly as specified, so the video stays
            visible while the text on top stays easy to read. */}
        <div className="absolute inset-0 bg-ink/[0.38]" />

        <div className="container relative py-24">
          <Reveal>
            <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Premium Dental Websites That Bring More Patients
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              We design premium, high-converting dental websites that help clinics attract new
              patients, increase appointment bookings, improve local SEO, and automate enquiries
              with AI.
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
                <Button size="lg" variant="outlineLight" asChild>
                  <Link href="#portfolio">View Our Work</Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex max-w-2xl flex-wrap items-center gap-2.5">
              {TRUST_BADGES.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80"
                >
                  <Check className="h-3 w-3 flex-shrink-0 text-primary" />
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Why GrowVibe */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Why GrowVibe"
              title="Why dentists choose GrowVibe"
              description="A dental website has one job — turn visitors into booked appointments. Everything below is built toward that."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {WHY_GROWVIBE.map((item, i) => (
              <StaggerItem key={item.title}>
                <Card
                  data-cursor="hover"
                  className="h-full border-border/70 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardContent className="pt-7">
                    <div
                      className="flex h-10 w-10 animate-float-icon items-center justify-center rounded-md bg-primary/10 text-primary"
                      style={{ animationDelay: `${i * 120}ms` }}
                    >
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-heading text-sm font-semibold leading-snug">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 3. Our Process */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Our Process"
              title="How we build your website"
              description="Four steps. You always know what happens next."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <StaggerItem key={step.title}>
                <Card
                  data-cursor="hover"
                  className="h-full border-border/70 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 4. Portfolio */}
      <section id="portfolio" className="scroll-mt-24 py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Portfolio"
              title="Dental website concepts"
              description="No live dental client project yet — every example below is clearly labeled as exactly what it is."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {CONCEPT_PROJECTS.map(({ key, category, title, description, Preview }) => (
              <StaggerItem key={key}>
                <Card
                  data-cursor="hover"
                  className="group relative flex h-full flex-col overflow-hidden border-border/70 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.015] hover:border-ink/20 hover:shadow-xl"
                >
                  <Preview />
                  <div className="flex flex-1 flex-col justify-between p-8">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {category}
                      </span>
                      <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight">{title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
                    </div>
                    <div className="mt-6 border-t border-border pt-5">
                      <Badge variant="accent" className="font-medium">
                        Concept Project
                      </Badge>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={120}>
            <div className="mt-10 text-center">
              <Link
                href="/work"
                data-cursor="hover"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                View Full Portfolio
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. FAQ */}
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

      {/* 6. Final CTA — no pricing on this page by design; both CTAs route
          to a free consultation or a live conversation, never a price. */}
      <section className="container pb-24 pt-20 sm:pt-24">
        <Reveal>
          <div className="avoid-print-break relative overflow-hidden rounded-2xl bg-ink px-8 py-16 text-center text-white sm:px-16">
            <div className="absolute inset-0 bg-dot-grid opacity-[0.1]" />
            <div className="relative">
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to Grow Your Dental Practice?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60">
                Let&apos;s build a premium website that attracts more patients and helps your
                clinic stand out online.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Magnetic>
                  <Button size="lg" variant="light" asChild>
                    <Link href="/contact?intent=quote" data-track="consultation-cta-click">
                      Request a Free Consultation
                      <ArrowUpRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                </Magnetic>
                <Magnetic>
                  <LiveChatCtaButton label="Talk to Our Live Team" variant="outlineLight" size="lg" />
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
