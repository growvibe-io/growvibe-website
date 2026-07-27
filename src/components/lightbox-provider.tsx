"use client";

import * as React from "react";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxContextValue {
  /** Open the lightbox on `images[index]`, with prev/next cycling through `images`. */
  openAt: (images: LightboxImage[], index: number) => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

/** Access the shared lightbox from any client component beneath <LightboxProvider>. */
export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error("useLightbox must be used within a <LightboxProvider>");
  }
  return ctx;
}

/**
 * Renders a single, shared fullscreen lightbox for every clickable CRM
 * screenshot on the page. Dark blurred backdrop, smooth scale-in, prev/next
 * across whichever image set was opened, Escape/click-outside to close,
 * and native pinch-zoom left enabled on the image itself.
 */
export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [index, setIndex] = useState<number | null>(null);

  const openAt = useCallback((imgs: LightboxImage[], i: number) => {
    setImages(imgs);
    setIndex(i);
  }, []);

  const close = useCallback(() => setIndex(null), []);

  const next = useCallback(() => {
    setIndex((i) => (i === null ? i : (i + 1) % images.length));
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (index === null) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index, close, next, prev]);

  const current = index !== null ? images[index] : null;

  return (
    <LightboxContext.Provider value={{ openAt }}>
      {children}
      <AnimatePresence>
        {current && (
          <motion.div
            key="lightbox-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={close}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 sm:right-6 sm:top-6"
            >
              <X className="h-5 w-5" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label="Previous screenshot"
                  className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 sm:left-6"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label="Next screenshot"
                  className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 sm:right-6"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <motion.div
              key={current.src}
              className="relative flex max-h-[85vh] w-full max-w-6xl flex-col items-center"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative aspect-[1568/784] w-full overflow-hidden rounded-xl bg-black shadow-2xl sm:rounded-2xl"
                style={{ touchAction: "pinch-zoom" }}
              >
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="90vw"
                  quality={95}
                  className="object-contain"
                />
              </div>
              <p className="mt-4 max-w-2xl px-4 text-center text-sm text-white/70">
                {current.alt}
              </p>
              {images.length > 1 && (
                <p className="mt-1 text-xs text-white/40">
                  {index !== null ? index + 1 : 0} / {images.length}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}
