"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  Search,
  LifeBuoy,
  Bot,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { Typewriter } from "@/components/typewriter";
import { GradientMesh } from "@/components/gradient-mesh";
import { Photo } from "@/components/mockup-ui";

// Non-numeric trust points. We don't have verified, real performance metrics
// (traffic %, retention %, ad spend, ROAS) to publish, so the hero leads with
// honest, always-true value props instead of invented statistics.
const TRUST_POINTS = [
  { icon: Sparkles, label: "Custom-Built Solutions" },
  { icon: Zap, label: "Fast & Responsive" },
  { icon: Search, label: "SEO-Friendly Foundation" },
  { icon: LifeBuoy, label: "Ongoing Support" },
];

// Short rotating phrases only — kept brief so "We build ___" never repeats
// the full H1, and no raw tech stack names (React, HTML, Next.js, Node.js)
// in the main rotation.
const KEYWORDS = [
  "Premium Websites",
  "WordPress Websites",
  "Web Applications",
  "Custom CRM Systems",
  "AI-Powered Websites",
  "E-commerce Stores",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Background drifts slower than the page scroll for a subtle parallax feel.
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-ink text-white"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.12]" />
        <GradientMesh />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container relative pt-20 pb-16 md:pt-24"
      >
        <div className="lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 xl:gap-20">
          {/* Left: copy + CTAs */}
          <div>
            <motion.div
              initial="hidden"
              animate="show"
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Website Development • AI Solutions • Digital Growth
            </motion.div>

            {/* Single H1 for the homepage — the exact, static heading used
                for SEO. The rotating line below is a supporting accent, not
                a second heading, so the page keeps one clear H1. */}
            <motion.h1
              initial="hidden"
              animate="show"
              custom={0.1}
              variants={fadeUp}
              className="mt-6 max-w-4xl font-heading text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem] xl:text-5xl"
            >
              Premium Website Development,{" "}
              <span className="text-primary">AI Solutions</span> &amp; Custom
              CRM Systems
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              custom={0.18}
              variants={fadeUp}
              className="mt-4 max-w-xl min-h-[1.6em] font-heading text-xl font-semibold text-primary sm:text-2xl"
            >
              We build <Typewriter words={KEYWORDS} />
            </motion.p>

            <motion.p
              initial="hidden"
              animate="show"
              custom={0.26}
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/60"
            >
              GrowVibe designs fast, modern, and conversion-focused websites,
              web applications, CRM systems, and AI-powered business
              solutions. We build with WordPress, React, Next.js, and
              Node.js, then help businesses grow through SEO, Google Ads,
              Meta Ads, content marketing, and automation.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              custom={0.34}
              variants={fadeUp}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Magnetic>
                <Button size="lg" variant="light" asChild>
                  <Link href="/contact">
                    Start Your Project
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button size="lg" variant="outlineLight" asChild>
                  <Link href="/work">View Our Work</Link>
                </Button>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right: a live device-mockup preview, giving the hero an actual
              visual focal point instead of copy alone — with two floating
              proof cards for depth, mirroring the premium reference sites. */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.3}
            variants={fadeUp}
            className="relative mx-auto mt-16 w-full max-w-md lg:mx-0 lg:mt-0 lg:max-w-none"
          >
            {/* Ambient glow so the dark device frame separates from the
                dark section background. */}
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 rounded-full bg-primary/20 blur-3xl"
            />

            {/* Gentle continuous float — a slow, subtle bob so the mockup
                feels alive rather than a static screenshot. Separate motion
                element from the entrance animation above so the two don't
                fight each other, and fully disabled for reduced-motion. */}
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.7)] backdrop-blur-sm"
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <div className="ml-3 flex-1 truncate rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/40">
                  growvibe.io
                </div>
                {/* Small "live" pulse — a subtle detail in the mockup's
                    corner rather than a large, distracting animation. */}
                <span className="ml-3 hidden items-center gap-1.5 text-[10px] font-medium text-white/40 sm:flex">
                  <span className="relative flex h-1.5 w-1.5">
                    {!shouldReduceMotion && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    )}
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  Live
                </span>
              </div>

              {/* Full-bleed screenshot — a real stock photo used only as
                  generic, decorative hero imagery (not a fabricated client
                  screenshot), same pattern as the Core Services previews. */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11]">
                <Photo
                  seed="growvibe-hero-mockup"
                  width={900}
                  height={650}
                  className="absolute inset-0 brightness-[0.55]"
                />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-xs font-bold tracking-tight text-white sm:text-sm">
                      GrowVibe
                    </span>
                  </div>
                  <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-primary-foreground sm:text-xs">
                    Get Started
                  </span>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center gap-1.5 px-4 sm:gap-2 sm:px-6">
                  <span className="w-fit rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm sm:text-[11px]">
                    Trusted by growing brands
                  </span>
                  <span className="max-w-[80%] font-heading text-lg font-semibold leading-tight text-white sm:max-w-[70%] sm:text-2xl">
                    Grow Your Business Online
                  </span>
                  <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-ink sm:w-fit sm:text-xs">
                    View Case Studies
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating proof card — traffic growth stat. Drifts on its own
                slightly-offset loop so it doesn't move in lockstep with the
                mockup — a more organic, layered float. */}
            <motion.div
              initial="hidden"
              animate="show"
              custom={0.65}
              variants={fadeUp}
              className="absolute -bottom-6 -left-4 hidden sm:block sm:-left-6"
            >
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
                }
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-ink/90 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <TrendingUp className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-heading text-sm font-bold text-white">
                    Built to Grow
                  </div>
                  <div className="text-[11px] text-white/50">
                    Traffic, leads &amp; conversions
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating proof card — AI assistant */}
            <motion.div
              initial="hidden"
              animate="show"
              custom={0.8}
              variants={fadeUp}
              className="absolute -top-6 -right-2 hidden max-w-[190px] sm:block sm:-right-6"
            >
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }
                }
                className="rounded-xl border border-white/10 bg-ink/90 p-3 shadow-xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white">
                  <Bot className="h-3.5 w-3.5 text-primary" />
                  AI Assistant
                </div>
                <p className="mt-1 text-[11px] leading-snug text-white/60">
                  &ldquo;How can I help grow your business today?&rdquo;
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.42}
          variants={fadeUp}
          className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4 lg:mt-20"
        >
          {TRUST_POINTS.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-white/10 text-primary">
                <item.icon className="h-4 w-4" />
              </span>
              <p className="font-heading text-sm font-semibold leading-snug sm:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
