import type { Metadata } from "next";
import { Mail, Phone, Clock, type LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { SITE_PHONE, SITE_PHONE_INDIA } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with GrowVibe to start your website, CRM, or AI project, or request a custom quote for your business.",
  alternates: { canonical: "/contact" },
};

// Only real, verifiable contact details — no placeholder street address.
// Add one back here once GrowVibe has a published office address.
const CONTACT_DETAILS: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@growvibe.io",
    href: "mailto:hello@growvibe.io",
  },
  {
    icon: Phone,
    label: "Phone (India)",
    value: SITE_PHONE_INDIA.display,
    href: SITE_PHONE_INDIA.href,
  },
  {
    icon: Phone,
    label: "Phone (US)",
    value: SITE_PHONE.display,
    href: SITE_PHONE.href,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri, 9am - 6pm PT",
  },
];

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { intent?: string };
}) {
  const isQuote = searchParams?.intent === "quote";
  const isDemo = searchParams?.intent === "demo";

  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="container py-20 text-center">
          <Reveal>
            <Badge variant="accent" className="mb-6">
              Get In Touch
            </Badge>
            <h1 className="mx-auto max-w-2xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              {isDemo
                ? "See a live demo of your CRM"
                : isQuote
                ? "Get a custom quote for your project"
                : "Let's talk about your project"}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              {isDemo
                ? "Tell us a bit about your business and industry, and a member of our team will walk you through a live demo of a CRM built around how you actually work."
                : isQuote
                ? "Tell us about your goals, required features, and timeline. We'll review your requirements and get back to you with a clear custom proposal."
                : "Fill out the form below and we'll get back to you within one business day to talk through your website, CRM, AI, or marketing project."}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <Card className="border-border/70">
              <CardContent className="p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6">
              {CONTACT_DETAILS.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
