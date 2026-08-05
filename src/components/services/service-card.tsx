import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/lib/services-data";

interface ServiceCardProps {
  service: ServiceItem;
  dark?: boolean;
}

/**
 * Standard grid-card treatment for larger categories. The icon sits in a
 * soft gradient badge (rather than the old flat accent square) and
 * features render as compact pills instead of a checklist — the same
 * chip language used in <ServiceShowcase> on the home page, so the two
 * pages read as one visual system instead of two different styles.
 */
export function ServiceCard({ service, dark = false }: ServiceCardProps) {
  return (
    <div
      id={service.id}
      className={cn(
        "group relative flex h-full scroll-mt-44 flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl",
        dark
          ? "border-white/10 bg-white/[0.03] hover:border-primary/40 hover:bg-white/[0.05]"
          : "border-border/70 bg-card hover:border-primary/30"
      )}
    >
      <div
        aria-hidden
        className={cn(
          "absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100",
          dark ? "bg-primary/20" : "bg-primary/10"
        )}
      />

      <div
        className={cn(
          "relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl",
          dark
            ? "bg-gradient-to-br from-primary/25 to-primary/10 text-primary"
            : "bg-gradient-to-br from-primary/15 to-primary/5 text-primary"
        )}
      >
        <service.icon className="h-6 w-6" />
      </div>

      <h3
        className={cn(
          "relative mt-5 font-heading text-lg font-semibold tracking-tight",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {service.title}
      </h3>
      <p
        className={cn(
          "relative mt-2 text-sm leading-relaxed",
          dark ? "text-white/60" : "text-muted-foreground"
        )}
      >
        {service.description}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {service.features.map((feature) => (
          <span
            key={feature}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-medium",
              dark
                ? "bg-white/10 text-white/70"
                : "bg-secondary text-secondary-foreground"
            )}
          >
            {feature}
          </span>
        ))}
      </div>

      {service.href && (
        <Link
          href={service.href}
          className={cn(
            "relative mt-5 inline-flex items-center gap-1 text-sm font-medium transition-colors",
            dark ? "text-primary hover:text-primary/80" : "text-primary hover:text-primary/80"
          )}
        >
          Learn more
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}
