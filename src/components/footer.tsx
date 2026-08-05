import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { Button } from "@/components/ui/button";
import { SITE_PHONE_INDIA } from "@/lib/site-config";

// Every href below points at a real page or a real, existing anchor id —
// none of these are invented. Service anchors (id="...") come straight
// from SERVICE_CATEGORIES in @/lib/services-data.ts, where each service
// card renders `id={service.id}`, so `/services#<id>` always resolves to
// a real section on the page (see ServiceCard/ServiceFeatureCard).
const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const WEB_SERVICES_LINKS = [
  { label: "Website Development", href: "/services#website-design" },
  { label: "WordPress Development", href: "/services#wordpress-development" },
  { label: "Next.js Development", href: "/services#nextjs-development" },
  { label: "React Development", href: "/services#react-development" },
  { label: "Node.js Development", href: "/services#nodejs-development" },
  { label: "Web Applications", href: "/services#web-applications" },
  // Links to the dedicated CRM page (not just the #crm-development anchor)
  // since that's the deeper, more authoritative destination — same page
  // the old "CRM Development" footer link and the pricing page both use.
  { label: "Custom CRM Development", href: "/services/crm-development" },
];

const GROWTH_AI_LINKS = [
  // Same destination the navbar and homepage already use for "AI
  // Solutions" — the homepage's AI showcase section, not the services
  // page's shorter AI card.
  { label: "AI Solutions", href: "/#ai-solutions" },
  // No standalone "AI Chatbot Development" page/anchor exists yet — this
  // points at the services page's AI Solutions card, whose description
  // and features are specifically about AI chatbots, so it's a real,
  // relevant destination rather than a placeholder link.
  { label: "AI Chatbot Development", href: "/services#ai-solutions" },
  { label: "SEO Services", href: "/services#seo" },
  { label: "Google Ads", href: "/services#google-ppc" },
  { label: "Meta Ads", href: "/services#meta-ppc" },
  { label: "Real Estate Websites", href: "/real-estate" },
  { label: "Dental Websites", href: "/dentist" },
];

const FOOTER_LINK_GROUPS = [
  { title: "Company", links: COMPANY_LINKS },
  { title: "Web Services", links: WEB_SERVICES_LINKS },
  { title: "Growth & AI", links: GROWTH_AI_LINKS },
];

// Only real, verifiable contact details belong here — no placeholder
// street address.
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="container py-16">
        {/* 5-column desktop layout: Brand / Company / Web Services /
            Growth & AI / Get in touch. The explicit fr ratio gives Brand
            (the widest content: paragraph + trust line + button) the most
            room, Company (short labels) the least, and gives the two
            longer link lists (Web Services, Growth & AI — 7 items each,
            longer labels) matching, generous widths so their columns stay
            the same height as each other and don't tower over Company or
            Get in touch. Below `lg`, columns fall back to simple
            equal-width wrapping (2 then 3 up) before stacking to 1 column
            on mobile. */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.45fr_0.8fr_1fr_1fr_0.9fr] lg:gap-x-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center">
                <LogoMark className="h-9 w-9" animate={false} />
              </span>
              <span className="font-heading text-lg font-bold tracking-tight">
                GrowVibe
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              GrowVibe is a website development and AI solutions company. We
              build modern websites, CRM systems and AI-powered automation,
              backed by SEO and paid advertising.
            </p>
            <p className="mt-4 text-xs font-medium tracking-wide text-white/35">
              USA &amp; India Registered • Serving Worldwide
            </p>
            <Button asChild variant="light" size="sm" className="mt-6">
              <Link href="/contact">
                Start Your Project
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          {/* Company / Web Services / Growth & AI */}
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title}>
              {/* h3, not h4: the last heading in each page's <main> content
                  is an h2 (or an h3 nested under one), so this footer must
                  continue at h3 to keep the document's heading order
                  sequential — jumping straight to h4 here was flagged by
                  Lighthouse's "Heading elements are not in a sequentially-
                  descending order" accessibility/SEO audit on every page. */}
              <h3 className="text-sm font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Get in touch */}
          <div>
            <h3 className="text-sm font-semibold text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/50">
              <li>
                <a
                  href="mailto:hello@growvibe.io"
                  className="transition-colors hover:text-white"
                >
                  hello@growvibe.io
                </a>
              </li>
              <li>
                <a
                  href={SITE_PHONE_INDIA.href}
                  className="transition-colors hover:text-white"
                >
                  {SITE_PHONE_INDIA.display}
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80"
            >
              Contact Us
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row">
          <p>&copy; {new Date().getFullYear()} GrowVibe. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
