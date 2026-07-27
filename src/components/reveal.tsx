"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay before the animation starts, in milliseconds. */
  delay?: number;
  /** Distance (px) the element travels while revealing. Keep small for a subtle effect. */
  distance?: number;
  /** Also scale in slightly from 0.96 -> 1, for extra emphasis on hero-level elements. */
  scale?: boolean;
}

/**
 * Fades and slides children into view the first time they cross into the
 * viewport. Built on framer-motion's whileInView so it composes cleanly
 * with <Stagger>/<StaggerItem> elsewhere in the app.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 20,
  scale = false,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance, scale: scale ? 0.96 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
