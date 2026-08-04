import Link from "next/link";
import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";

const siteUrl = "https://growvibe.io";
const LAST_UPDATED = "August 4, 2026";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of growvibe.io, GrowVibe's website, AI chat assistant, and the services described on this site.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | GrowVibe",
    description:
      "The terms that govern your use of growvibe.io, GrowVibe's website, AI chat assistant, and the services described on this site.",
    url: `${siteUrl}/terms`,
    siteName: "GrowVibe",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Terms of Service", item: `${siteUrl}/terms` },
  ],
};

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: {LAST_UPDATED}
            </p>

            {/* Editorial note, not legal advice: a starting template
                reflecting how this site and its stated business practices
                (fixed written quotes, no guaranteed results, client owns
                project code) actually work — have a qualified lawyer
                review before relying on it, and before it governs a real
                client engagement or dispute. */}
            <div className="mt-10 max-w-none space-y-8 text-sm leading-relaxed text-foreground/80">
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your use of
                growvibe.io (the &quot;Site&quot;) and your engagement with
                GrowVibe (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                for any website, CRM, AI, or related project. By using the
                Site or engaging our services, you agree to these Terms.
              </p>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  1. Use of the Site
                </h2>
                <p className="mt-3">
                  You may browse and use the Site for its intended purpose —
                  learning about our services and getting in touch. You
                  agree not to scrape, reverse-engineer, or misuse the Site,
                  or attempt to disrupt its normal operation.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  2. Content Is Informational, Not a Binding Offer
                </h2>
                <p className="mt-3">
                  Descriptions of our services, process, and pricing
                  approach on this Site (including the Pricing page) are
                  provided for general information. They don&apos;t
                  constitute a binding offer or contract. A project only
                  becomes binding once we&apos;ve agreed a written, fixed
                  quote or signed agreement with you covering scope, price,
                  and timeline.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  3. No Guaranteed Results
                </h2>
                <p className="mt-3">
                  We build websites, CRMs, and AI solutions to a high
                  standard, but we don&apos;t guarantee specific business
                  outcomes — search rankings, traffic, leads, or sales — for
                  any project. No agency honestly can. Where we make claims
                  about our own work, we aim to keep them accurate and free
                  of invented statistics or fabricated results.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  4. AI Chat Assistant
                </h2>
                <p className="mt-3">
                  The AI chat assistant on this Site is provided for general
                  information about GrowVibe and our services. It is not
                  professional, legal, or financial advice, and its
                  responses — like any AI system&apos;s — may occasionally
                  be inaccurate or incomplete. It does not have the
                  authority to make binding commitments, quotes, or
                  promises on GrowVibe&apos;s behalf; for anything binding,
                  contact our team directly.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  5. Intellectual Property
                </h2>
                <p className="mt-3">
                  The Site&apos;s design, branding, and written content
                  belong to GrowVibe unless stated otherwise, and may not be
                  copied or reused without permission. Ownership of work we
                  build for a specific client project — including source
                  code — is governed by that client&apos;s individual
                  agreement with us, not by these Terms.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  6. Third-Party Links and Services
                </h2>
                <p className="mt-3">
                  This Site links to or integrates with third-party services
                  (for example, WhatsApp). We aren&apos;t responsible for the
                  content, availability, or privacy practices of third-party
                  sites or services you reach from here.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  7. Limitation of Liability
                </h2>
                <p className="mt-3">
                  To the fullest extent permitted by law, GrowVibe is not
                  liable for indirect, incidental, or consequential damages
                  arising from your use of this Site. This section does not
                  limit or exclude any liability that can&apos;t lawfully be
                  limited or excluded.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  8. Governing Law
                </h2>
                <p className="mt-3">
                  These Terms are governed by the laws of the jurisdiction
                  in which GrowVibe is registered, without regard to
                  conflict-of-law principles. Any dispute relating to a
                  specific client project is governed by that
                  project&apos;s individual written agreement first, where
                  one exists.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  9. Changes to These Terms
                </h2>
                <p className="mt-3">
                  We may update these Terms from time to time. We&apos;ll
                  update the &quot;Last updated&quot; date above when we do.
                  Continuing to use the Site after a change means you accept
                  the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  10. Contact Us
                </h2>
                <p className="mt-3">
                  Questions about these Terms? Email us at{" "}
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
                These Terms are provided as a general starting point and are
                not a substitute for legal advice. Please have a qualified
                lawyer review them before relying on them for a real client
                engagement or dispute.
              </p>
            </div>
          </Reveal>
        </div>
      </article>
    </>
  );
}
