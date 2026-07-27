import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/lib/services-data";

interface ServiceFeatureCardProps {
  service: ServiceItem;
  dark?: boolean;
}

/**
 * Larger, more detailed treatment for categories that only hold one or two
 * services (AI Solutions, SEO). Fewer cards on the page means each one can
 * afford more visual weight — a bigger icon, the full feature list spelled
 * out rather than compressed into pills, so the category doesn't read as
 * an afterthought next to the 9-card Website Development grid.
 */
export function ServiceFeatureCard({ service, dark = false }: ServiceFeatureCardProps) {
  return (
    <div
      id={service.id}
      data-cursor="hover"
      className={cn(
        "group relative flex h-full scroll-mt-44 flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:p-10",
        dark
          ? "border-white/10 bg-white/[0.03] hover:border-primary/40"
          : "border-border/70 bg-card hover:border-primary/30"
      )}
    >
      <div
        aria-hidden
        className={cn(
          "absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
          dark ? "bg-primary/20" : "bg-primary/10"
        )}
      />

      <div
        className={cn(
          "relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl",
          dark
            ? "bg-gradient-to-br from-primary/25 to-primary/10 text-primary"
            : "bg-gradient-to-br from-primary/15 to-primary/5 text-primary"
        )}
      >
        <service.icon className="h-8 w-8" />
      </div>

      <h3
        className={cn(
          "relative mt-6 font-heading text-2xl font-semibold tracking-tight",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {service.title}
      </h3>
      <p
        className={cn(
          "relative mt-3 max-w-md text-base leading-relaxed",
          dark ? "text-white/60" : "text-muted-foreground"
        )}
      >
        {service.description}
      </p>

      <ul className="relative mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {service.features.map((feature) => (
          <li
            key={feature}
            className={cn(
              "flex items-center gap-2.5 text-sm font-medium",
              dark ? "text-white/80" : "text-foreground/80"
            )}
          >
            <span
              className={cn(
                "flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full",
                dark ? "bg-primary/20" : "bg-primary/15"
              )}
            >
              <Check className="h-3 w-3 text-primary" />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
