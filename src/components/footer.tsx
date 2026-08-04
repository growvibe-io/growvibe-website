import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { Button } from "@/components/ui/button";
import { SITE_PHONE, SITE_PHONE_INDIA } from "@/lib/site-config";

const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/work" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Website Development", href: "/services#website-design" },
      { label: "Web Applications", href: "/services#web-applications" },
      { label: "CRM Development", href: "/services/crm-development" },
      { label: "Real Estate Websites", href: "/real-estate" },
      { label: "Dental Websites", href: "/dentist" },
      { label: "AI Solutions", href: "/#ai-solutions" },
      { label: "SEO", href: "/services#seo" },
      { label: "Paid Advertising", href: "/services#google-ppc" },
    ],
  },
];

// Only real, verifiable contact details belong here — no placeholder
// street address.
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="container py-16">
        {/* Flexbox, not a proportional grid: fr-based grid columns force
            every column to the SAME allocated width regardless of how
            much of it the content actually uses, which is what made the
            gap after short columns (Company) look huge and the gap after
            wide columns (Services) look small — the gaps were only equal
            in raw column width, not in visible whitespace. Flex items
            size to their own content by default, so a single `gap` value
            reads as the same visible space everywhere, and the columns
            naturally sit closer together on the left instead of being
            stretched across the full row. */}
        <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:items-start md:gap-x-16 md:gap-y-10">
          <div className="md:shrink-0">
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
              build modern websites, CRM systems, and AI-powered automation,
              backed by the SEO, Google Ads, Meta Ads, and content marketing
              that help them grow.
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

          {FOOTER_LINKS.map((col) => (
            <div key={col.title} className="md:shrink-0">
              {/* h3, not h4: the last heading in each page's <main> content
                  is an h2 (or an h3 nested under one), so this footer must
                  continue at h3 to keep the document's heading order
                  sequential — jumping straight to h4 here was flagged by
                  Lighthouse's "Heading elements are not in a sequentially-
                  descending order" accessibility/SEO audit on every page. */}
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
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

          <div className="md:shrink-0">
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
              <li>
                <a
                  href={SITE_PHONE.href}
                  className="transition-colors hover:text-white"
                >
                  {SITE_PHONE.display}
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
