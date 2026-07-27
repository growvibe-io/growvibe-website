import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "text-white/50" : "text-primary",
            align === "center" && "justify-center"
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              light ? "bg-white/50" : "bg-primary"
            )}
          />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            light ? "text-white/60" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
