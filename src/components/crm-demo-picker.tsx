"use client";

import * as React from "react";
import Link from "next/link";
import { Building2, PlayCircle, Wrench, X } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";

const GENERAL_CRM_URL = "https://demo.growvibe.io";
const SUBCONTRACTOR_CRM_URL = "https://kestrel-demo.growvibe.io";

const DEMO_OPTIONS = [
  {
    key: "general",
    icon: Building2,
    title: "General CRM",
    description:
      "Leads, pipeline, deals, and AI insights — built for services businesses.",
    href: GENERAL_CRM_URL,
  },
  {
    key: "subcontractor",
    icon: Wrench,
    title: "Subcontractor CRM",
    description:
      "Tenders, jobs, variations, progress claims, and retention — built for trade subcontractors.",
    href: SUBCONTRACTOR_CRM_URL,
  },
] as const;

interface CrmDemoPickerProps {
  triggerLabel?: string;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
  className?: string;
}

/**
 * Trigger button that opens a small "which demo?" picker instead of linking
 * straight to a single CRM. Used everywhere the page used to link directly
 * to growvibe-crm.vercel.app — same button look, it just asks which demo to
 * open first, then opens the chosen one in a new tab.
 */
export function CrmDemoPicker({
  triggerLabel = "Explore the Live CRM Demo",
  size = "lg",
  variant = "light",
  className,
}: CrmDemoPickerProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <Magnetic>
        <Button
          size={size}
          variant={variant}
          className={className}
          onClick={() => setOpen(true)}
        >
          <PlayCircle className="mr-1.5 h-4 w-4" />
          {triggerLabel}
        </Button>
      </Magnetic>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Choose a CRM demo"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-6 text-left shadow-xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
              Which demo would you like to explore?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Both run on the same platform with real AI features and live
              demo data.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {DEMO_OPTIONS.map((option) => (
                <Link
                  key={option.key}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="group flex h-full flex-col rounded-xl border border-border/70 p-5 transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
                    <option.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading font-semibold">{option.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {option.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                    Open demo
                    <PlayCircle className="ml-1.5 h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
