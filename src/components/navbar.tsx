"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { LogoMark } from "@/components/logo-mark";
import { cn } from "@/lib/utils";
import { handleInPageHashClick } from "@/lib/scroll-to-hash";

type MenuKey = "services";

// A single, tighter Services mega-menu — grouped by what a visitor is
// actually trying to do, not by raw tech-stack names. React/Next.js/Node.js/
// HTML/WordPress never appear as their own top-level nav items; they show up
// only as small tags on the homepage service cards and inside these grouped
// service descriptions.
const SERVICES_MENU = [
  {
    group: "Website Development",
    items: [
      { href: "/website-design", label: "Website Design" },
      { href: "/services#wordpress-development", label: "WordPress Development" },
      { href: "/services#ecommerce-development", label: "E-commerce Websites" },
      { href: "/services#landing-pages", label: "Landing Pages" },
      { href: "/services#website-maintenance", label: "Website Maintenance" },
    ],
  },
  {
    group: "Web Apps & Systems",
    items: [
      { href: "/services#web-applications", label: "Web Application Development" },
      { href: "/services/crm-development", label: "CRM Development" },
      { href: "/services#saas-development", label: "SaaS Development" },
      { href: "/services#api-development", label: "API Development" },
    ],
  },
  {
    group: "AI & Automation",
    items: [
      { href: "/#ai-powered-websites", label: "AI-Powered Websites" },
      { href: "/#ai-chatbots", label: "AI Chatbots" },
      { href: "/#ai-crm", label: "AI CRM" },
      { href: "/#workflow-automation", label: "Workflow Automation" },
      { href: "/#ai-seo", label: "AI SEO" },
    ],
  },
  {
    group: "Digital Growth",
    items: [
      { href: "/services#seo", label: "SEO" },
      { href: "/services#google-ppc", label: "Google Ads" },
      { href: "/services#meta-ppc", label: "Meta Ads" },
      { href: "/services#content-marketing", label: "Content Marketing" },
    ],
  },
];

const NAV_LINKS: { href: string; label: string; menu?: MenuKey }[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", menu: "services" },
  { href: "/pricing-australia", label: "Pricing" },
  { href: "/work", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [hoveredHref, setHoveredHref] = React.useState<string | null>(null);
  const [openMenu, setOpenMenu] = React.useState<MenuKey | null>(null);
  const [mobileExpanded, setMobileExpanded] = React.useState<MenuKey | null>(null);

  // Constant, never-animated header height. This is intentional: the header is
  // `position: fixed` (out of document flow), so animating ITS OWN height is
  // perfectly safe — it can never shift page content. But the spacer below
  // (which reserves the header's space in normal flow) must stay at a fixed
  // size, because a flow element resizing near the scroll threshold is exactly
  // what caused the jitter (browser scroll-anchoring nudges scrollY to
  // compensate, flipping `scrolled` back and forth in a feedback loop).
  const HEADER_HEIGHT = 80;

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
    setMobileExpanded(null);
    setHoveredHref(null);
  }, [pathname]);

  // Lock background scrolling while the mobile menu is open, and let Escape
  // close it — keeps keyboard/touch users from getting stuck behind the panel.
  React.useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
    <motion.header
      animate={{
        boxShadow: scrolled
          ? "0 10px 35px rgba(0,0,0,0.28)"
          : "0 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-b border-[rgba(255,255,255,0.06)] transition-[backdrop-filter] duration-300",
        scrolled ? "backdrop-blur-2xl" : "backdrop-blur-xl"
      )}
      style={{
        height: HEADER_HEIGHT,
        background:
          "radial-gradient(circle at 6% 50%, rgba(41,142,95,0.30), transparent 38%), radial-gradient(circle at 100% 45%, rgba(110,231,183,0.08), transparent 30%), #0B0C10",
      }}
    >
      {/* Same dotted grid as the hero, reused verbatim so it tiles seamlessly into it */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.12]" />

      {/* Scroll darkening: fades in on top of the (unchanged) gradient for readability */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-black transition-opacity duration-300 ease-in-out"
        style={{ opacity: scrolled ? 0.2 : 0 }}
      />

      <div className="container relative z-10 flex h-full items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" data-cursor="hover">
          <motion.span
            whileHover={{ rotate: 8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex h-9 w-9 items-center justify-center"
          >
            <LogoMark className="h-9 w-9" />
          </motion.span>
          <span className="font-heading text-lg font-bold tracking-tight text-white">
            Grow<span className="text-primary">Vibe</span>
          </span>
        </Link>

        <nav
          className="relative hidden lg:flex items-center gap-1"
          onMouseLeave={() => {
            setHoveredHref(null);
            setOpenMenu(null);
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            const showIndicator = hoveredHref ? hoveredHref === link.href : isActive;

            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => {
                  setHoveredHref(link.href);
                  setOpenMenu(link.menu ?? null);
                }}
                onFocus={() => {
                  setHoveredHref(link.href);
                  setOpenMenu(link.menu ?? null);
                }}
              >
                <Link
                  href={link.href}
                  data-cursor="hover"
                  className={cn(
                    "relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  )}
                >
                  {link.label}
                  {link.menu && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 opacity-60 transition-transform duration-200",
                        openMenu === link.menu && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {showIndicator && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-4 -bottom-px h-px bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}

                <AnimatePresence>
                  {link.menu === "services" && openMenu === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 top-full z-50 mt-3 w-[760px] -translate-x-1/2 rounded-xl border border-white/10 bg-ink/95 p-6 shadow-2xl backdrop-blur-xl"
                    >
                      <div className="grid grid-cols-4 gap-6">
                        {SERVICES_MENU.map((col) => (
                          <div key={col.group}>
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                              {col.group}
                            </p>
                            <ul className="space-y-0.5">
                              {col.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    data-cursor="hover"
                                    onClick={(e) => {
                                      setOpenMenu(null);
                                      handleInPageHashClick(e, item.href, pathname ?? "/");
                                    }}
                                    className="block rounded-md px-2 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 border-t border-white/10 pt-3">
                        <Link
                          href="/services"
                          data-cursor="hover"
                          onClick={() => setOpenMenu(null)}
                          className="flex items-center gap-1.5 rounded-lg p-2 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          View all services
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Magnetic strength={0.25}>
            <Button
              asChild
              variant="light"
              className="group shadow-[0_0_20px_-6px_rgba(41,142,95,0.35)] hover:shadow-[0_0_30px_-6px_rgba(41,142,95,0.6)]"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </Magnetic>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <nav
              className="container flex max-h-[calc(100vh-5rem)] flex-col gap-1 overflow-y-auto py-4"
              aria-label="Mobile"
            >
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  <div className="flex items-center justify-between rounded-md text-sm font-medium text-white/80">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex-1 px-3 py-3 hover:text-white"
                    >
                      {link.label}
                    </Link>
                    {link.menu && (
                      <button
                        aria-label={`Toggle ${link.label} submenu`}
                        aria-expanded={mobileExpanded === link.menu}
                        onClick={() =>
                          setMobileExpanded((cur) => (cur === link.menu ? null : link.menu ?? null))
                        }
                        className="p-3"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            mobileExpanded === link.menu && "rotate-180"
                          )}
                        />
                      </button>
                    )}
                  </div>

                  <AnimatePresence>
                    {link.menu === "services" && mobileExpanded === "services" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-3"
                      >
                        {SERVICES_MENU.map((col) => (
                          <div key={col.group} className="mt-2 first:mt-0">
                            <p className="px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/35">
                              {col.group}
                            </p>
                            {col.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={(e) => {
                                  setOpen(false);
                                  handleInPageHashClick(e, item.href, pathname ?? "/");
                                }}
                                className="block rounded-md px-3 py-2.5 text-sm text-white/55 hover:bg-white/5 hover:text-white"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Magnetic strength={0.2} className="mt-2 block">
                <Button asChild variant="light" className="w-full">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Start Your Project
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>

      {/* Static-height spacer: reserves the header's space in normal document
          flow. Deliberately NEVER animated (see HEADER_HEIGHT comment above) —
          this is the piece that eliminates the jitter for good. */}
      <div aria-hidden className="header-spacer" style={{ height: HEADER_HEIGHT }} />
    </>
  );
}
