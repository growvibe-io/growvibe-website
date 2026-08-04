import Link from "next/link";
import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";

const siteUrl = "https://growvibe.io";
const LAST_UPDATED = "August 4, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How GrowVibe collects, uses, and protects information from visitors to growvibe.io, including our contact form, AI chat assistant, and analytics.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | GrowVibe",
    description:
      "How GrowVibe collects, uses, and protects information from visitors to growvibe.io.",
    url: `${siteUrl}/privacy`,
    siteName: "GrowVibe",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${siteUrl}/privacy` },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="border-b border-border bg-background">
        <div className="container max-w-3xl py-20">
          <Reveal>
            <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: {LAST_UPDATED}
            </p>

            {/* Editorial note, not legal advice: this policy is written to
                accurately describe what this codebase actually does (the
                contact form, the AI chat widget, and Google Analytics) —
                it is a starting point, not a substitute for review by a
                qualified lawyer, especially before relying on it for
                regulatory compliance (GDPR, CCPA, or otherwise). */}
            <div className="mt-10 max-w-none space-y-8 text-sm leading-relaxed text-foreground/80">
              <p>
                This Privacy Policy explains how GrowVibe (&quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) collects, uses, and
                protects information when you visit growvibe.io (the
                &quot;Site&quot;) or contact us through it. By using the
                Site, you agree to the practices described below.
              </p>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  1. Information We Collect
                </h2>
                <p className="mt-3">We collect information in a few specific ways:</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-foreground">Contact form.</strong>{" "}
                    When you submit our contact form, we collect your name,
                    email address, and any company, city, or message details
                    you provide. This is sent by email to our team so we can
                    respond to you — it is not added to a marketing list or
                    shared with third parties beyond what&apos;s needed to
                    deliver that email (see Section 3).
                  </li>
                  <li>
                    <strong className="text-foreground">AI chat assistant.</strong>{" "}
                    Messages you send to the chat widget on this Site are
                    sent to Google&apos;s Gemini API to generate a response.
                    We don&apos;t ask for or require personal information in
                    chat, though anything you choose to type is processed to
                    generate that reply.
                  </li>
                  <li>
                    <strong className="text-foreground">Analytics.</strong>{" "}
                    We use Google Analytics 4 to understand how visitors use
                    the Site — pages viewed, general location (derived from
                    IP address), device and browser type, and how you
                    arrived at the Site. This is collected automatically via
                    cookies (see Section 4).
                  </li>
                  <li>
                    <strong className="text-foreground">
                      What we don&apos;t collect.
                    </strong>{" "}
                    growvibe.io does not process payments or store payment
                    card details — we don&apos;t run e-commerce checkout on
                    this Site.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  2. How We Use Information
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>To respond to your enquiries and provide quotes or consultations you request.</li>
                  <li>To operate and improve the AI chat assistant.</li>
                  <li>To understand Site usage and improve content, performance, and navigation.</li>
                  <li>To detect and prevent spam or abuse (for example, rate-limiting repeated form submissions).</li>
                </ul>
                <p className="mt-3">
                  We do not sell your information, and we do not send
                  marketing emails unless you&apos;ve directly asked us to.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  3. Third-Party Service Providers
                </h2>
                <p className="mt-3">
                  We rely on a small number of third-party services to run
                  this Site, each of which processes only what it needs to
                  perform its function:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-foreground">Google Analytics</strong> —
                    site usage analytics.
                  </li>
                  <li>
                    <strong className="text-foreground">Google Gemini API</strong> —
                    powers the AI chat assistant.
                  </li>
                  <li>
                    <strong className="text-foreground">Resend</strong> —
                    delivers contact form submissions to our team by email.
                  </li>
                  <li>
                    <strong className="text-foreground">Vercel</strong> —
                    hosts the Site.
                  </li>
                  <li>
                    <strong className="text-foreground">WhatsApp</strong> — if
                    you use the WhatsApp button on this Site, you leave
                    growvibe.io and that conversation is governed by
                    WhatsApp/Meta&apos;s own privacy policy, not this one.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  4. Cookies
                </h2>
                <p className="mt-3">
                  Google Analytics sets cookies in your browser to
                  distinguish visitors and measure Site usage. You can block
                  or delete these cookies through your browser settings, or
                  opt out of Google Analytics using{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-primary underline underline-offset-2 hover:text-primary/80"
                  >
                    Google&apos;s browser add-on
                  </a>
                  . Blocking cookies won&apos;t prevent you from using the
                  Site, but some analytics data may be incomplete as a
                  result.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  5. Data Retention
                </h2>
                <p className="mt-3">
                  Contact form submissions are retained in our email inbox
                  for as long as reasonably needed to handle your enquiry
                  and our normal business records. Chat messages are
                  processed to generate a response and are not stored in a
                  long-term database by us. Analytics data is retained
                  according to Google Analytics&apos; own default retention
                  settings.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  6. Your Rights
                </h2>
                <p className="mt-3">
                  Depending on where you&apos;re located, you may have
                  rights over your personal information — for example,
                  access, correction, deletion, or the right to object to
                  certain processing (rights of this kind are recognized
                  under laws such as the GDPR in the EU/UK and the CCPA in
                  California, among others). To exercise any of these
                  rights, email us at{" "}
                  <a
                    href="mailto:hello@growvibe.io"
                    className="text-primary underline underline-offset-2 hover:text-primary/80"
                  >
                    hello@growvibe.io
                  </a>{" "}
                  and we&apos;ll respond as required by applicable law.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  7. Children&apos;s Privacy
                </h2>
                <p className="mt-3">
                  This Site is not directed at children, and we do not
                  knowingly collect personal information from children. If
                  you believe a child has provided us with personal
                  information, contact us and we&apos;ll remove it.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  8. International Data Transfers
                </h2>
                <p className="mt-3">
                  GrowVibe operates with teams in the United States and
                  India, and the third-party providers listed in Section 3
                  may process data in other countries as part of delivering
                  their services. By using the Site, you understand your
                  information may be processed outside your own country.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  9. Changes to This Policy
                </h2>
                <p className="mt-3">
                  We may update this Privacy Policy from time to time. We&apos;ll
                  update the &quot;Last updated&quot; date above when we do.
                  Continuing to use the Site after a change means you accept
                  the updated policy.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  10. Contact Us
                </h2>
                <p className="mt-3">
                  Questions about this policy or your information? Email us
                  at{" "}
                  <a
                    href="mailto:hello@growvibe.io"
                    className="text-primary underline underline-offset-2 hover:text-primary/80"
                  >
                    hello@growvibe.io
                  </a>{" "}
                  or visit our{" "}
                  <Link
                    href="/contact"
                    className="text-primary underline underline-offset-2 hover:text-primary/80"
                  >
                    Contact page
                  </Link>
                  .
                </p>
              </section>

              <p className="border-t border-border pt-6 text-xs text-muted-foreground">
                This policy is provided as general information about our
                practices and is not a substitute for legal advice. If you
                need this policy reviewed for compliance with a specific
                law or regulation, please consult a qualified lawyer.
              </p>
            </div>
          </Reveal>
        </div>
      </article>
    </>
  );
}
