import { cn } from "@/lib/utils";

/**
 * Soft, slow-drifting blurred color fields — a subtle "gradient mesh"
 * background. Pure CSS (transform + opacity only), so it's GPU-accelerated
 * and cheap to run continuously. Respects prefers-reduced-motion (see
 * globals.css).
 */
export function GradientMesh({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute -left-24 -top-24 h-[420px] w-[420px] animate-blob-slow rounded-full bg-primary/25 blur-[110px]" />
      <div
        className="absolute -right-24 top-1/3 h-[380px] w-[380px] animate-blob-slower rounded-full bg-emerald-300/10 blur-[110px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[320px] w-[320px] animate-blob-slow rounded-full bg-white/5 blur-[100px]"
        style={{ animationDelay: "-3s" }}
      />
    </div>
  );
}
