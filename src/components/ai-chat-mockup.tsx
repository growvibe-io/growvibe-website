"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Bot, Send } from "lucide-react";

interface ChatTurn {
  role: "visitor" | "ai";
  text: string;
}

// A short, honest, entirely scripted exchange — not a live AI call. Loops
// continuously to demonstrate the kind of assistant GrowVibe builds, inside
// the /website-design hero's browser mockup.
const CONVERSATION: ChatTurn[] = [
  { role: "visitor", text: "I need a website for my business." },
  {
    role: "ai",
    text: "We build premium websites, custom CRM systems and AI automation tailored to your business.",
  },
  { role: "visitor", text: "Can you also help me get more customers?" },
  {
    role: "ai",
    text: "Yes. Every website is SEO-ready and can include AI chatbots, Google Ads landing pages, lead capture forms, CRM integration and marketing automation.",
  },
];

const AI_THINKING_MS = 1100;
const PAUSE_BETWEEN_TURNS_MS = 500;
const INPUT_CHAR_MS = 38;
const HOLD_AFTER_CONVERSATION_MS = 3200;
const HOLD_BEFORE_RESTART_MS = 700;

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * A looping, purely scripted recreation of a chat with "GrowVibe AI" —
 * simulates a visitor typing into the input bar, sending, an AI "typing…"
 * indicator, then the reply appearing. No real API call; just a timed
 * animation loop so the hero can *show* the AI capability rather than only
 * describe it. Respects prefers-reduced-motion by shortening every delay
 * and skipping the message slide-in.
 */
export function AiChatMockup() {
  const shouldReduceMotion = useReducedMotion();
  const [messages, setMessages] = React.useState<ChatTurn[]>([]);
  const [inputText, setInputText] = React.useState("");
  const [aiTyping, setAiTyping] = React.useState(false);

  const d = React.useCallback(
    (ms: number) => (shouldReduceMotion ? Math.min(ms, 220) : ms),
    [shouldReduceMotion]
  );

  React.useEffect(() => {
    let cancelled = false;

    async function run() {
      while (!cancelled) {
        for (const turn of CONVERSATION) {
          if (cancelled) return;

          if (turn.role === "visitor") {
            for (let i = 1; i <= turn.text.length; i++) {
              if (cancelled) return;
              setInputText(turn.text.slice(0, i));
              // eslint-disable-next-line no-await-in-loop
              await wait(d(INPUT_CHAR_MS));
            }
            await wait(d(280));
            if (cancelled) return;
            setInputText("");
            setMessages((prev) => [...prev, turn]);
          } else {
            setAiTyping(true);
            await wait(d(AI_THINKING_MS));
            if (cancelled) return;
            setAiTyping(false);
            setMessages((prev) => [...prev, turn]);
          }

          await wait(d(PAUSE_BETWEEN_TURNS_MS));
        }

        await wait(d(HOLD_AFTER_CONVERSATION_MS));
        if (cancelled) return;
        setMessages([]);
        setAiTyping(false);
        await wait(d(HOLD_BEFORE_RESTART_MS));
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [d]);

  return (
    <div className="flex h-full min-h-[380px] flex-col bg-background">
      {/* Chat header */}
      <div className="flex flex-shrink-0 items-center gap-2.5 border-b border-border bg-ink px-4 py-3 text-white">
        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
          <Bot className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold">GrowVibe AI</div>
          <div className="flex items-center gap-1.5 text-[11px] text-white/50">
            <span className="relative flex h-1.5 w-1.5">
              {!shouldReduceMotion && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              )}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Online now
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-1 flex-col justify-end gap-3 overflow-hidden px-4 py-4 sm:px-5">
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={`${i}-${m.role}`}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.15 : 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed sm:text-sm ${
                m.role === "visitor"
                  ? "ml-auto rounded-tr-sm bg-ink text-white"
                  : "mr-auto rounded-tl-sm bg-secondary text-foreground"
              }`}
            >
              {m.text}
            </motion.div>
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {aiTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mr-auto flex items-center gap-1 rounded-2xl rounded-tl-sm bg-secondary px-3.5 py-3"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/60"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fake input bar — typed text plus a blinking caret and a send
          button that gives a subtle pulse once a message is ready, in
          place of an actual moving cursor graphic (kept deliberately
          understated rather than a flashy pointer animation). */}
      <div className="flex-shrink-0 border-t border-border px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2.5">
          <span className="min-h-[1.2em] flex-1 truncate text-[13px] text-foreground/80 sm:text-sm">
            {inputText}
            {inputText && (
              <span
                aria-hidden
                className="ml-0.5 inline-block h-[1em] w-[1.5px] translate-y-[0.15em] animate-pulse bg-foreground/60 align-middle"
              />
            )}
          </span>
          <motion.span
            animate={
              !shouldReduceMotion && inputText
                ? { scale: [1, 1.12, 1] }
                : { scale: 1 }
            }
            transition={{ duration: 0.5, repeat: inputText ? Infinity : 0, repeatDelay: 0.5 }}
            className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            <Send className="h-3.5 w-3.5" />
          </motion.span>
        </div>
      </div>
    </div>
  );
}
