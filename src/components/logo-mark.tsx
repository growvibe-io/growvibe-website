"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Custom "G" logomark: a ring with a deliberately narrow opening, a bold
// bar bridging well past center (this pairing — not the arrow — is what
// reads as "G" rather than "O"/"C"), plus a small growth-arrow accent
// tucked into its own leftover notch so it never crosses or hides the
// letterform. Path data generated from scripts/gen_g_logo.py — keep the
// two in sync if the geometry ever changes.
const RING_D =
  "M 155.43 68.00 A 64 64 0 1 0 160.14 121.89 L 133.83 112.31 A 36 36 0 1 1 131.18 82.00 Z";
const BAR_D = "M 86.00 91.00 L 164.00 91.00 L 164.00 109.00 L 86.00 109.00 Z";
// Arrow tail sits exactly at the bar's outer top-right corner (164,91) — a
// single point of contact, not floating nearby and not buried inside the
// bar's fill — so it reads as growing out of the G's stroke rather than a
// sticker placed on top. From there it climbs at a steeper angle than
// before specifically so it diverges away from the ring's outer curve
// faster, opening up clear negative space above it.
const ARROW_HALO_D =
  "M 155.57 85.17 L 171.50 62.16 L 165.95 58.31 L 192.45 49.90 L 193.91 77.66 L 188.36 73.82 L 172.43 96.83 Z";
const ARROW_D =
  "M 158.45 87.16 L 177.22 60.04 L 172.50 56.76 L 192.45 49.90 L 193.05 70.99 L 188.32 67.72 L 169.55 94.84 Z";

interface LogoMarkProps {
  className?: string;
  /** Play the one-time "load-in" reveal (ring fades in, then the arrow
   * flies in with a small spring overshoot). Set false for secondary
   * placements (e.g. the footer) so the animation isn't duplicated. */
  animate?: boolean;
  /**
   * "onDark" (default) — for sitting directly on the dark navbar/footer
   * background with no container: the whole mark (ring, bar, and arrow)
   * renders solid white, a single clean shape with no color contrast
   * needed — the arrow already reads as a distinct accent because its
   * geometry pokes out past the ring's silhouette.
   * "brand" — the original green-on-white treatment, for placements on
   * a light/white surface (e.g. the favicon).
   */
  variant?: "onDark" | "brand";
}

export function LogoMark({ className, animate = true, variant = "onDark" }: LogoMarkProps) {
  const shouldReduceMotion = useReducedMotion();
  const playIntro = animate && !shouldReduceMotion;
  const gradId = React.useId();

  const ringFill = variant === "onDark" ? "#FFFFFF" : `url(#${gradId})`;
  const arrowFill = variant === "onDark" ? "#FFFFFF" : `url(#${gradId})`;

  return (
    <svg viewBox="32 10 166 166" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(152, 55%, 36%)" />
          <stop offset="100%" stopColor="hsl(152, 55%, 30%)" />
        </linearGradient>
      </defs>
      <motion.g
        initial={playIntro ? { opacity: 0, scale: 0.8 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ transformOrigin: "100px 100px" }}
      >
        <path d={RING_D} fill={ringFill} />
        <path d={BAR_D} fill={ringFill} />
      </motion.g>
      <motion.g
        initial={playIntro ? { opacity: 0, x: -22, y: 22, scale: 0.7 } : false}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        transition={
          playIntro
            ? { type: "spring", stiffness: 260, damping: 15, delay: 0.32 }
            : { duration: 0 }
        }
        style={{ transformOrigin: "174px 73px" }}
      >
        {/* The halo only earns its keep on "brand": there, the arrow is
         * brand-green like the ring, so it needs the light outline to
         * stay visually separate from the ring/bar beneath it. On
         * "onDark" the arrow is now the same solid white as the ring, so
         * there's nothing left to separate it from -- skip the halo. */}
        {variant === "brand" && <path d={ARROW_HALO_D} fill="#FAFAF8" />}
        <path d={ARROW_D} fill={arrowFill} />
      </motion.g>
    </svg>
  );
}
