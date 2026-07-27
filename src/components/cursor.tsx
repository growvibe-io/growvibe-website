"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom magnetic cursor: a small dot that trails the pointer with a soft
 * spring, and grows into a soft ring whenever it passes over anything
 * tagged data-cursor="hover" (buttons, cards, links).
 *
 * Only ever activates on devices with a precise pointer (mouse/trackpad) —
 * touch devices are completely unaffected and keep their native behavior.
 */
// Third-party widgets that render their UI in an isolated iframe/shadow
// root (Crisp being the one currently on this site). Once the pointer is
// over one of these, the page stops receiving mousemove events entirely —
// our custom dot would just freeze in place at the last known position
// instead of tracking the real cursor, while the native cursor is still
// suppressed everywhere else on the page. Rather than leave a frozen or
// invisible pointer, we fully step aside (native cursor + no custom dot)
// whenever the pointer is anywhere over one of these containers.
const ISOLATED_WIDGET_SELECTOR = '#crisp-chatbox, [id^="crisp-"], [class*="crisp-client"]';

export function Cursor() {
  const [enabled, setEnabled] = React.useState(false);
  const [hovering, setHovering] = React.useState(false);
  const [suspended, setSuspended] = React.useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 28, stiffness: 380, mass: 0.4 });
  const springY = useSpring(y, { damping: 28, stiffness: 380, mass: 0.4 });

  React.useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    const applyMatch = () => setEnabled(mql.matches);
    applyMatch();
    mql.addEventListener("change", applyMatch);
    return () => mql.removeEventListener("change", applyMatch);
  }, []);

  React.useEffect(() => {
    document.documentElement.classList.toggle("custom-cursor-active", enabled && !suspended);
    return () => document.documentElement.classList.remove("custom-cursor-active");
  }, [enabled, suspended]);

  React.useEffect(() => {
    if (!enabled) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setSuspended(!!target?.closest(ISOLATED_WIDGET_SELECTOR));
      setHovering(!!target?.closest('[data-cursor="hover"]'));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [enabled, x, y]);

  if (!enabled || suspended) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        className="rounded-full bg-white"
        animate={{
          width: hovering ? 52 : 8,
          height: hovering ? 52 : 8,
          opacity: hovering ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      />
    </motion.div>
  );
}
