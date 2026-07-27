"use client";

import * as React from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  animate,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  MoveHorizontal,
  Home,
  BarChart3,
  Users,
  Settings,
  Bell,
  Search,
  SlidersHorizontal,
  Bot,
  Send,
  MessageSquare,
  Database,
  TrendingUp,
  CheckCircle2,
  Circle,
  Phone,
  Clock,
  Target,
  Link2,
  FileText,
  Star,
  UserCircle,
  ChevronDown,
  ChevronRight,
  Palette,
  Code2,
  CalendarDays,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  DeviceFrame,
  MiniAreaChart,
  Donut,
  StatTile,
  StatusPill,
  MiniBars,
  Photo,
  PhotoAvatar,
  Thumbnail,
} from "@/components/mockup-ui";

export type ServicePreview = "website" | "dashboard" | "crm" | "ai" | "seo" | "ads";

export interface ServiceShowcaseItem {
  category: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  preview: ServicePreview;
}

// Gap between slides, in px — the single source of truth for scroll math
// (arrow buttons, drag bounds, active-dot detection all read this).
const GAP = 24;

const mockupVariants = {
  rest: { y: 0 },
  hover: { y: -6 },
};

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.015 },
};

const chip =
  "inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-border bg-card px-2 py-0.5 text-[6px] font-medium text-foreground sm:text-[7px]";

/**
 * Rich, original demo interfaces for each service — built entirely from
 * this site's own palette (ink/primary/secondary/card/border) using real
 * layout patterns (sidebars, tables, charts, calendars, workflow nodes).
 * These are not real screenshots and not copied from any other product;
 * they're designed to read as polished, finished software.
 */
function ServiceMockup({ variant }: { variant: ServicePreview }) {
  return (
    <DeviceFrame>
      {variant === "website" && (
        <div className="flex h-full flex-col bg-card">
          {/* Full-bleed hero photo — the "screenshot" of a real homepage,
              with the nav and headline overlaid directly on the image the
              way an actual website hero section works. */}
          <div className="relative flex-[5] overflow-hidden">
            <Photo
              seed="growvibe-website-hero"
              width={900}
              height={600}
              className="absolute inset-0 brightness-[0.55]"
            />

            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-3 py-2 sm:px-4 sm:py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-[7px] font-bold tracking-tight text-white sm:text-[9px]">GrowVibe</span>
              </div>
              <div className="hidden items-center gap-2.5 text-[7px] font-medium text-white/85 sm:flex sm:text-[8px]">
                <span>Home</span>
                <span>Services</span>
                <span>Portfolio</span>
                <span>Contact</span>
              </div>
              <span className="rounded-full bg-primary px-2 py-0.5 text-[6px] font-semibold text-primary-foreground sm:text-[7px]">
                Get Started
              </span>
            </div>

            <div className="absolute inset-0 z-10 flex flex-col justify-center gap-1 px-3 pt-4 sm:gap-1.5 sm:px-8">
              <span className="w-fit rounded-full bg-white/15 px-1.5 py-0.5 text-[6px] font-semibold text-white backdrop-blur-sm sm:text-[7px]">
                Trusted by growing brands
              </span>
              <span className="max-w-[75%] text-[10px] font-heading font-semibold leading-tight text-white sm:max-w-[60%] sm:text-[17px]">
                Websites That Turn Visitors Into Customers
              </span>
              <span className="hidden max-w-[50%] text-[8px] leading-snug text-white/80 sm:block sm:text-[9px]">
                Fast, modern, conversion-focused design for growing brands.
              </span>
              <div className="mt-1 flex gap-1.5">
                <span className="rounded-full bg-primary px-2.5 py-1 text-[6px] font-semibold text-primary-foreground sm:text-[8px]">
                  Start Your Project
                </span>
                <span className="rounded-full border border-white/50 px-2.5 py-1 text-[6px] font-medium text-white sm:text-[8px]">
                  View Our Work
                </span>
              </div>
            </div>
          </div>

          {/* A sliver of the next section, cropped at the frame's bottom
              edge — implying the real page continues below, like an
              actual scrolled screenshot rather than a self-contained card. */}
          <div className="flex flex-[1.3] items-center gap-2 border-t border-border px-3 sm:gap-3 sm:px-4">
            <div className="flex text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-2 w-2 fill-current" />
              ))}
            </div>
            <span className="hidden truncate text-[6px] text-muted-foreground sm:block sm:text-[7px]">
              &quot;GrowVibe transformed our online presence.&quot; — J. Carter
            </span>
            <div className="ml-auto hidden items-center gap-1.5 sm:flex">
              {[Palette, Code2, Search].map((Icon, i) => (
                <span key={i} className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-2.5 w-2.5 text-primary" />
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {variant === "dashboard" && (
        <div className="flex h-full flex-col bg-card">
          <div className="flex flex-shrink-0 items-center justify-between border-b border-border px-3 py-2 sm:px-4">
            <span className="text-[7px] font-bold text-foreground sm:text-[9px]">Overview</span>
            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-1 rounded-full border border-border px-1.5 py-0.5 sm:flex">
                <Search className="h-2 w-2 text-muted-foreground" />
                <span className="text-[6px] text-muted-foreground">Search</span>
              </div>
              <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full bg-secondary">
                <Bell className="h-2 w-2 text-foreground" />
                <span className="absolute -right-0.5 -top-0.5 h-1 w-1 rounded-full bg-primary" />
              </span>
              <div className="flex items-center gap-1">
                <UserCircle className="h-3.5 w-3.5 text-muted-foreground" />
                <ChevronDown className="hidden h-2 w-2 text-muted-foreground sm:block" />
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-1.5 overflow-hidden bg-background p-1.5 sm:p-2">
            {/* Large photo banner — unmissable, same treatment as the
                website hero, sized for a dashboard welcome/report card. */}
            <div className="relative h-[34px] flex-shrink-0 overflow-hidden rounded-md sm:h-[46px] lg:h-[54px]">
              <Photo seed="growvibe-dash-banner" width={640} height={160} className="absolute inset-0 brightness-[0.5]" />
              <div className="relative z-10 flex h-full flex-col justify-center gap-0.5 px-2 sm:px-3">
                <span className="text-[8px] font-bold text-white sm:text-[10px]">Revenue is up 12% this month</span>
                <span className="hidden text-[6px] text-white/80 sm:block sm:text-[7px]">Your Q3 performance report is ready</span>
              </div>
            </div>

            <div className="flex flex-1 gap-1.5 overflow-hidden">
              <div className="hidden w-[24%] flex-col gap-1 rounded-md border border-border bg-card p-1.5 shadow-sm sm:flex">
                {[
                  { icon: Home, label: "Dashboard" },
                  { icon: BarChart3, label: "Analytics" },
                  { icon: Users, label: "Customers" },
                  { icon: Settings, label: "Settings" },
                ].map((entry, i) => (
                  <div
                    key={entry.label}
                    className={`flex items-center gap-1.5 rounded px-1.5 py-1 ${i === 0 ? "bg-primary/10" : ""}`}
                  >
                    <entry.icon className={`h-2.5 w-2.5 flex-shrink-0 ${i === 0 ? "text-primary" : "text-muted-foreground"}`} />
                    <span className={`truncate text-[7px] font-medium ${i === 0 ? "text-foreground" : "text-muted-foreground"}`}>
                      {entry.label}
                    </span>
                  </div>
                ))}
                <div className="mt-auto rounded-md bg-primary/10 p-1.5">
                  <span className="text-[6px] font-semibold text-primary">Upgrade to Pro</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-1.5 overflow-hidden">
                <div className="grid flex-shrink-0 grid-cols-3 gap-1.5">
                  <StatTile label="Revenue" value="$48.2k" delta="+12%" />
                  <StatTile label="Active Users" value="3,482" delta="+8%" />
                  <StatTile label="Churn" value="2.1%" delta="-0.4%" />
                </div>

                <div className="flex flex-1 gap-1.5 overflow-hidden">
                  <div className="flex flex-1 flex-col rounded-md border border-border bg-card p-1.5 shadow-sm">
                    <span className="mb-1 flex items-center gap-1 text-[6px] font-medium text-muted-foreground sm:text-[7px]">
                      <TrendingUp className="h-2.5 w-2.5 text-primary" />
                      Revenue Trend
                    </span>
                    <MiniAreaChart gradientId="dash-rev" points="0,24 15,20 30,22 45,10 60,14 75,5 100,9" />
                  </div>
                  <div className="hidden flex-1 flex-col rounded-md border border-border bg-card p-1.5 shadow-sm sm:flex">
                    <span className="mb-1 text-[6px] font-medium text-muted-foreground sm:text-[7px]">Usage by Day</span>
                    <MiniBars values={[30, 55, 40, 70, 50, 65, 45]} highlight={3} />
                  </div>
                </div>

                <div className="flex-shrink-0 overflow-hidden rounded-md border border-border bg-card shadow-sm">
                  <div className="flex items-center justify-between border-b border-border px-2 py-1 text-[6px] font-semibold text-muted-foreground sm:text-[7px]">
                    <span>Recent Activity</span>
                    <span>Status</span>
                  </div>
                  {[
                    { name: "Acme Co. — new signup", status: "Active", seed: "growvibe-avatar-acme" },
                    { name: "Nova Retail — plan upgraded", status: "Active", seed: "growvibe-avatar-nova" },
                  ].map((row, i) => (
                    <div key={row.name} className={`flex items-center justify-between px-2 py-1 ${i === 0 ? "bg-secondary/30" : ""}`}>
                      <div className="flex items-center gap-1.5 truncate">
                        <PhotoAvatar seed={row.seed} size={16} />
                        <span className="truncate text-[6px] text-foreground sm:text-[7px]">{row.name}</span>
                      </div>
                      <StatusPill label={row.status} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {variant === "crm" && (
        <div className="flex h-full flex-col bg-card">
          <div className="flex flex-shrink-0 items-center justify-between border-b border-border px-3 py-2 sm:px-4">
            <span className="text-[7px] font-bold text-foreground sm:text-[9px]">Pipeline</span>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 rounded-full border border-border px-1.5 py-0.5 text-[6px] text-muted-foreground">
                <Search className="h-2 w-2" />
                Search
              </span>
              <SlidersHorizontal className="h-2.5 w-2.5 text-muted-foreground" />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-1.5 overflow-hidden bg-background p-1.5 sm:p-2">
          {/* Large photo banner — a deal spotlight, same treatment as the
              website hero. */}
          <div className="relative h-[34px] flex-shrink-0 overflow-hidden rounded-md sm:h-[46px] lg:h-[54px]">
            <Photo seed="growvibe-crm-banner" width={640} height={160} className="absolute inset-0 brightness-[0.5]" />
            <div className="relative z-10 flex h-full flex-col justify-center gap-0.5 px-2 sm:px-3">
              <span className="text-[8px] font-bold text-white sm:text-[10px]">Closing this week: Acme Co.</span>
              <span className="hidden text-[6px] text-white/80 sm:block sm:text-[7px]">$24,000 deal · follow-up scheduled</span>
            </div>
          </div>
          <div className="flex flex-1 gap-1.5 overflow-hidden">
            <div className="hidden w-[22%] flex-col gap-1.5 sm:flex">
              <div className="flex flex-1 flex-col gap-1 rounded-md border border-border bg-card p-1.5 shadow-sm">
                <span className="text-[6px] font-semibold uppercase tracking-wide text-muted-foreground">Contacts</span>
                {[
                  { name: "Jordan Kim", seed: "growvibe-avatar-jordan" },
                  { name: "Priya Shah", seed: "growvibe-avatar-priya" },
                  { name: "Marcus Tan", seed: "growvibe-avatar-marcus" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-1.5 rounded px-1 py-0.5">
                    <PhotoAvatar seed={c.seed} size={16} />
                    <span className="truncate text-[6px] font-medium text-foreground">{c.name}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-md border border-border bg-card p-1.5 shadow-sm">
                <div className="mb-1 flex items-center gap-1 text-[6px] font-semibold text-muted-foreground">
                  <CalendarDays className="h-2.5 w-2.5 text-primary" />
                  This Week
                </div>
                <div className="grid grid-cols-7 gap-0.5">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span
                      key={i}
                      className={`flex h-2.5 w-2.5 items-center justify-center rounded-sm text-[5px] ${
                        i === 3 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {i + 10}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid flex-1 grid-cols-3 gap-1.5 overflow-hidden">
              {[
                {
                  title: "New Leads",
                  items: [
                    { name: "Jordan K.", seed: "growvibe-avatar-jordan" },
                    { name: "Alina R.", seed: "growvibe-avatar-alina" },
                  ],
                },
                {
                  title: "Qualified",
                  items: [
                    { name: "Marcus T.", seed: "growvibe-avatar-marcus" },
                    { name: "Devon P.", seed: "growvibe-avatar-devon" },
                  ],
                },
                { title: "Won", items: [{ name: "Sam W.", seed: "growvibe-avatar-sam" }] },
              ].map((col) => (
                <div key={col.title} className="flex flex-col gap-1 rounded-md border border-border bg-card p-1.5 shadow-sm">
                  <span className="text-[6px] font-bold uppercase tracking-wide text-muted-foreground sm:text-[7px]">
                    {col.title}
                  </span>
                  {col.items.map((lead) => (
                    <div key={lead.name} className="flex items-center gap-1 rounded border border-border bg-secondary/60 px-1 py-1">
                      <PhotoAvatar seed={lead.seed} size={12} />
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-[6px] font-semibold text-foreground sm:text-[7px]">{lead.name}</div>
                        <div className="mt-0.5 h-1 w-2/3 rounded-full bg-primary/25" />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="grid flex-shrink-0 grid-cols-3 gap-1.5">
            <div className={chip}>
              <Phone className="h-2 w-2 text-primary" />
              Call Jordan — Today
            </div>
            <div className={chip}>
              <Clock className="h-2 w-2 text-primary" />
              Meeting — 2:00 PM
            </div>
            <div className="flex items-center justify-between rounded-md border border-border bg-card px-2 py-1 shadow-sm">
              <span className="flex items-center gap-1 text-[6px] font-medium text-foreground sm:text-[7px]">
                <CheckCircle2 className="h-2.5 w-2.5 text-primary" />
                Conversion
              </span>
              <span className="text-[7px] font-bold text-primary sm:text-[8px]">32%</span>
            </div>
          </div>
          </div>
        </div>
      )}

      {variant === "ai" && (
        <div className="flex h-full flex-col bg-card">
          <div className="flex flex-shrink-0 items-center justify-between border-b border-border px-3 py-2 sm:px-4">
            <span className="flex items-center gap-1 text-[7px] font-semibold text-foreground sm:text-[9px]">
              <Bot className="h-2.5 w-2.5 text-primary" />
              AI Assistant
            </span>
            <span className="flex items-center gap-1 rounded-full border border-border px-1.5 py-0.5 text-[6px] text-muted-foreground">
              GPT model
              <ChevronDown className="h-2 w-2" />
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-1.5 overflow-hidden bg-background p-1.5 sm:p-2">
          {/* Large photo banner — same treatment as the website hero. */}
          <div className="relative h-[34px] flex-shrink-0 overflow-hidden rounded-md sm:h-[46px] lg:h-[54px]">
            <Photo seed="growvibe-ai-banner" width={640} height={160} className="absolute inset-0 brightness-[0.5]" />
            <div className="relative z-10 flex h-full flex-col justify-center gap-0.5 px-2 sm:px-3">
              <span className="text-[8px] font-bold text-white sm:text-[10px]">AI handled 128 chats this week</span>
              <span className="hidden text-[6px] text-white/80 sm:block sm:text-[7px]">96% customer satisfaction score</span>
            </div>
          </div>
          <div className="flex flex-1 gap-1.5 overflow-hidden">
          <div className="hidden w-[26%] flex-col gap-1.5 sm:flex">
            <div className="flex flex-1 flex-col gap-1 rounded-md border border-border bg-card p-1.5 shadow-sm">
              <span className="flex items-center gap-1 text-[6px] font-semibold uppercase tracking-wide text-muted-foreground">
                <MessageSquare className="h-2.5 w-2.5" />
                Recent
              </span>
              {["Website copy draft", "Lead follow-up email", "FAQ suggestions"].map((t) => (
                <span key={t} className="truncate rounded px-1 py-0.5 text-[6px] text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1 rounded-md border border-border bg-card px-1.5 py-1 shadow-sm">
              <Database className="h-2.5 w-2.5 text-primary" />
              <span className="text-[6px] font-medium text-foreground">Knowledge Base</span>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-1.5 overflow-hidden">
            <div className="flex flex-1 flex-col justify-end gap-1 overflow-hidden">
              <div className="flex items-start gap-1">
                <span className="flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <Bot className="h-2 w-2 text-primary" />
                </span>
                <div className="max-w-[80%] rounded-lg rounded-tl-none border border-border bg-card px-1.5 py-1 shadow-sm">
                  <span className="text-[6px] leading-snug text-foreground sm:text-[7px]">
                    How can I help grow your business today?
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-end gap-1">
                <div className="max-w-[75%] rounded-lg rounded-tr-none bg-primary/15 px-1.5 py-1">
                  <span className="text-[6px] leading-snug text-foreground sm:text-[7px]">
                    I need a booking form on my site.
                  </span>
                </div>
                <PhotoAvatar seed="growvibe-avatar-customer" size={16} />
              </div>
            </div>

            <div className="flex flex-shrink-0 items-center gap-1 overflow-hidden text-[6px] text-muted-foreground">
              <Workflow className="h-2.5 w-2.5 flex-shrink-0 text-primary" />
              <span className="whitespace-nowrap rounded-full border border-border bg-card px-1.5 py-0.5">New Lead</span>
              <ChevronRight className="h-2 w-2 flex-shrink-0" />
              <span className="whitespace-nowrap rounded-full border border-border bg-card px-1.5 py-0.5">AI Qualifies</span>
              <ChevronRight className="h-2 w-2 flex-shrink-0" />
              <span className="whitespace-nowrap rounded-full bg-primary/10 px-1.5 py-0.5 text-primary">Notify Sales</span>
            </div>

            <div className="flex flex-shrink-0 items-center gap-1.5">
              <div className="flex flex-1 items-center rounded-full border border-border bg-card px-2 py-1">
                <span className="text-[6px] text-muted-foreground sm:text-[7px]">Ask AI Assistant…</span>
              </div>
              <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                <Send className="h-2 w-2 text-primary-foreground" />
              </span>
            </div>

            <div className="flex flex-shrink-0 flex-wrap gap-1.5">
              <StatusPill label="Chatbot: Active" />
              <StatusPill label="Automation: Running" />
              <span className="hidden text-[6px] text-muted-foreground sm:inline">Avg response 1.2s · 96% satisfaction</span>
            </div>
          </div>
          </div>
          </div>
        </div>
      )}

      {variant === "seo" && (
        <div className="flex h-full flex-col bg-card">
          <div className="flex flex-shrink-0 items-center justify-between border-b border-border px-3 py-2 sm:px-4">
            <span className="text-[7px] font-bold text-foreground sm:text-[9px]">SEO Dashboard</span>
            <span className="hidden rounded-full border border-border px-1.5 py-0.5 text-[6px] text-muted-foreground sm:inline">
              Last 30 days
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-1.5 overflow-hidden bg-background p-1.5 sm:p-2">
          {/* Large photo banner — same treatment as the website hero. */}
          <div className="relative h-[34px] flex-shrink-0 overflow-hidden rounded-md sm:h-[46px] lg:h-[54px]">
            <Photo seed="growvibe-seo-banner" width={640} height={160} className="absolute inset-0 brightness-[0.5]" />
            <div className="relative z-10 flex h-full flex-col justify-center gap-0.5 px-2 sm:px-3">
              <span className="text-[8px] font-bold text-white sm:text-[10px]">Organic traffic up 38% this quarter</span>
              <span className="hidden text-[6px] text-white/80 sm:block sm:text-[7px]">12 keywords now ranking on page 1</span>
            </div>
          </div>
          <div className="grid flex-shrink-0 grid-cols-4 gap-1.5">
            <StatTile label="Organic Traffic" value="24.8k" />
            <StatTile label="Impressions" value="182k" />
            <StatTile label="Clicks" value="12.4k" />
            <StatTile label="Avg Position" value="4.2" />
          </div>

          <div className="flex flex-1 gap-1.5 overflow-hidden">
            <div className="flex flex-[1.3] flex-col rounded-md border border-border bg-card p-1.5 shadow-sm">
              <span className="mb-1 flex items-center gap-1 text-[6px] font-medium text-muted-foreground sm:text-[7px]">
                <TrendingUp className="h-2.5 w-2.5 text-primary" />
                Organic Traffic Trend
              </span>
              <MiniAreaChart gradientId="seo-traffic" points="0,26 15,22 30,24 45,13 60,17 75,6 100,3" />
            </div>
            <div className="hidden w-1/3 flex-col items-center justify-center gap-0.5 rounded-md border border-border bg-card p-1.5 shadow-sm sm:flex">
              <div className="relative flex items-center justify-center">
                <Donut value={94} size={40} />
                <span className="absolute font-heading text-[9px] font-bold text-primary">94</span>
              </div>
              <span className="text-center text-[6px] font-medium text-muted-foreground">SEO Score</span>
            </div>
          </div>

          <div className="flex-shrink-0 overflow-hidden rounded-md border border-border bg-card shadow-sm">
            <div className="flex items-center justify-between border-b border-border px-2 py-1 text-[6px] font-semibold text-muted-foreground">
              <span>Keyword</span>
              <span>Position</span>
            </div>
            {[
              { kw: "web design agency", pos: "#3", seed: "growvibe-page-web-design" },
              { kw: "custom crm software", pos: "#1", seed: "growvibe-page-crm" },
            ].map((row, i) => (
              <div key={row.kw} className={`flex items-center justify-between gap-1.5 px-2 py-1 ${i === 0 ? "bg-secondary/30" : ""}`}>
                <div className="flex min-w-0 items-center gap-1.5">
                  <Thumbnail seed={row.seed} className="h-4 w-6 sm:h-5 sm:w-7" />
                  <span className="truncate text-[6px] text-foreground sm:text-[7px]">{row.kw}</span>
                </div>
                <span className="flex flex-shrink-0 items-center gap-0.5 text-[6px] font-semibold text-primary">
                  {row.pos}
                  <ArrowUp className="h-2 w-2" />
                </span>
              </div>
            ))}
          </div>

          <div className="hidden flex-shrink-0 flex-wrap gap-1.5 sm:flex">
            <div className={chip}>
              <Link2 className="h-2 w-2 text-primary" />
              420 Backlinks
            </div>
            <div className={chip}>
              <FileText className="h-2 w-2 text-primary" />
              86 Indexed Pages
            </div>
            <div className={chip}>
              <CheckCircle2 className="h-2 w-2 text-primary" />
              Core Web Vitals
            </div>
            <div className={chip}>
              <Circle className="h-2 w-2 text-muted-foreground" />
              Schema Markup
            </div>
          </div>
          </div>
        </div>
      )}

      {variant === "ads" && (
        <div className="flex h-full flex-col bg-card">
          <div className="flex flex-shrink-0 items-center justify-between border-b border-border px-3 py-2 sm:px-4">
            <span className="flex items-center gap-1 text-[7px] font-bold text-foreground sm:text-[9px]">
              <Target className="h-2.5 w-2.5 text-primary" />
              Campaign Performance
            </span>
            <div className="hidden gap-1 sm:flex">
              <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[6px] font-semibold text-primary">Google Ads</span>
              <span className="rounded-full bg-secondary px-1.5 py-0.5 text-[6px] font-medium text-secondary-foreground">Meta Ads</span>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-1.5 overflow-hidden bg-background p-1.5 sm:p-2">
          {/* Large photo banner — same treatment as the website hero. */}
          <div className="relative h-[34px] flex-shrink-0 overflow-hidden rounded-md sm:h-[46px] lg:h-[54px]">
            <Photo seed="growvibe-ads-banner" width={640} height={160} className="absolute inset-0 brightness-[0.5]" />
            <div className="relative z-10 flex h-full flex-col justify-center gap-0.5 px-2 sm:px-3">
              <span className="text-[8px] font-bold text-white sm:text-[10px]">4.6x return on ad spend</span>
              <span className="hidden text-[6px] text-white/80 sm:block sm:text-[7px]">342 conversions across Google &amp; Meta</span>
            </div>
          </div>
          <div className="grid flex-shrink-0 grid-cols-3 gap-1.5 sm:grid-cols-6">
            <StatTile label="Ad Spend" value="$8.4k" />
            <StatTile label="Conversions" value="342" />
            <StatTile label="CPC" value="$1.24" />
            <div className="hidden sm:block">
              <StatTile label="CTR" value="3.8%" />
            </div>
            <div className="hidden sm:block">
              <StatTile label="Cost/Lead" value="$24.60" />
            </div>
            <StatTile label="ROAS" value="4.6x" />
          </div>

          <div className="flex flex-1 gap-1.5 overflow-hidden">
            <div className="flex flex-[1.4] flex-col rounded-md border border-border bg-card p-1.5 shadow-sm">
              <span className="mb-1 text-[6px] font-medium text-muted-foreground sm:text-[7px]">Spend vs Conversions</span>
              <MiniAreaChart gradientId="ads-spend" points="0,22 15,18 30,20 45,12 60,15 75,7 100,10" />
            </div>
            <div className="hidden flex-1 flex-col justify-center gap-1 rounded-md border border-border bg-card p-1.5 shadow-sm sm:flex">
              <span className="text-[6px] font-medium text-muted-foreground">Channel Split</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[62%] bg-primary" />
              </div>
              <span className="text-[6px] text-muted-foreground">Google 62% · Meta 38%</span>
            </div>
          </div>

          <div className="flex-shrink-0 overflow-hidden rounded-md border border-border bg-card shadow-sm">
            <div className="flex items-center justify-between border-b border-border px-2 py-1 text-[6px] font-semibold text-muted-foreground">
              <span>Campaign</span>
              <span>Status</span>
            </div>
            {[
              { name: "Search — Brand Terms", status: "Active", seed: "growvibe-ad-search" },
              { name: "Meta — Retargeting", status: "Active", seed: "growvibe-ad-retarget" },
            ].map((row, i) => (
              <div key={row.name} className={`flex items-center justify-between gap-1.5 px-2 py-1 ${i === 0 ? "bg-secondary/30" : ""}`}>
                <div className="flex min-w-0 items-center gap-1.5">
                  <Thumbnail seed={row.seed} className="h-4 w-6 sm:h-5 sm:w-7" />
                  <span className="truncate text-[6px] text-foreground sm:text-[7px]">{row.name}</span>
                </div>
                <StatusPill label={row.status} />
              </div>
            ))}
          </div>
          </div>
        </div>
      )}
    </DeviceFrame>
  );
}

export function ServiceShowcase({ items }: { items: ServiceShowcaseItem[] }) {
  const shouldReduceMotion = useReducedMotion();
  const viewportRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [index, setIndex] = React.useState(0);
  const [bounds, setBounds] = React.useState({ min: 0, step: 0 });

  const measure = React.useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const slide = track?.querySelector<HTMLElement>("[data-slide]");
    if (!viewport || !track || !slide) return;
    const slideWidth = slide.getBoundingClientRect().width;
    const step = slideWidth + GAP;
    const trackWidth = items.length * step - GAP;
    const min = Math.min(0, viewport.clientWidth - trackWidth);
    setBounds({ min, step });
  }, [items.length]);

  React.useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useMotionValueEvent(x, "change", (latest) => {
    if (!bounds.step) return;
    const idx = Math.round(-latest / bounds.step);
    setIndex(Math.min(items.length - 1, Math.max(0, idx)));
  });

  const goTo = React.useCallback(
    (i: number) => {
      const clamped = Math.min(items.length - 1, Math.max(0, i));
      const target = Math.max(bounds.min, -clamped * bounds.step);
      animate(x, target, shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 32 });
    },
    [bounds, items.length, shouldReduceMotion, x]
  );

  // Wheel handoff: only take over the event (and preventDefault) when the
  // slider can actually move further in the requested direction. At either
  // end we simply do nothing, so the browser's normal vertical page scroll
  // continues immediately — no need to move the cursor off the section.
  // This also handles genuine horizontal trackpad gestures the same way.
  React.useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const current = x.get();
      const canGoForward = current > bounds.min + 1;
      const canGoBackward = current < -1;
      if ((delta > 0 && canGoForward) || (delta < 0 && canGoBackward)) {
        e.preventDefault();
        x.set(Math.min(0, Math.max(bounds.min, current - delta)));
      }
    };
    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", onWheel);
  }, [bounds, x]);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const step = bounds.step || 1;
    const projected = x.get() + info.velocity.x * 0.2;
    const newIndex = Math.round(-projected / step);
    goTo(newIndex);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(index - 1);
    }
  };

  const atStart = index <= 0;
  const atEnd = index >= items.length - 1;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="relative">
      <div className="mb-4 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        <MoveHorizontal className="h-3.5 w-3.5" />
        Drag or use the arrows to explore
      </div>

      <div ref={viewportRef} className="overflow-hidden">
        <motion.div
          ref={trackRef}
          role="region"
          aria-label="Our services"
          tabIndex={0}
          onKeyDown={onKeyDown}
          drag="x"
          dragConstraints={{ left: bounds.min, right: 0 }}
          dragElastic={0.05}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          style={{ x, touchAction: "pan-y" }}
          className="flex cursor-grab gap-6 pb-2 pt-1 active:cursor-grabbing focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {items.map((item) => (
            <div
              key={item.title}
              data-slide
              role="group"
              aria-roledescription="slide"
              aria-label={item.title}
              className="w-[88vw] flex-shrink-0 sm:w-[82vw] lg:w-[75vw] lg:max-w-[900px]"
            >
              <motion.div initial="rest" whileHover="hover" animate="rest" className="h-full">
                <Link
                  href={item.href}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  data-cursor="hover"
                  className="group block h-full select-none"
                >
                  <motion.div
                    variants={cardVariants}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex h-full flex-col rounded-2xl border border-border bg-card p-3 shadow-sm transition-shadow duration-300 group-hover:shadow-xl sm:p-4 lg:h-[650px]"
                  >
                    <motion.div
                      variants={mockupVariants}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="h-[230px] w-full sm:h-[300px] lg:h-[350px]"
                    >
                      <ServiceMockup variant={item.preview} />
                    </motion.div>

                    <div className="flex flex-1 flex-col overflow-hidden px-1 pt-[14px] sm:px-2">
                      <Badge variant="accent" className="w-fit">
                        {item.category}
                      </Badge>
                      <h3 className="mt-[14px] font-heading text-lg font-semibold tracking-tight sm:text-xl lg:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-[14px] line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="mt-[18px] flex flex-wrap gap-2">
                        {item.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="mt-[20px] inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary">
                        Learn More
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <span className="font-heading text-sm font-medium tabular-nums text-muted-foreground">
          {pad(index + 1)} / {pad(items.length)}
        </span>

        <div className="flex items-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Go to ${item.title}`}
              onClick={() => goTo(i)}
              data-cursor="hover"
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous service"
            onClick={() => goTo(index - 1)}
            disabled={atStart}
            data-cursor="hover"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-ink transition-all duration-200 hover:border-ink/30 hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next service"
            onClick={() => goTo(index + 1)}
            disabled={atEnd}
            data-cursor="hover"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-ink transition-all duration-200 hover:border-ink/30 hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
