"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Bot, Send, X, Loader2, Sparkles, MessageCircle, ArrowUpRight, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { openWhatsAppChat } from "@/lib/whatsapp";
import { SITE_PHONE_INDIA } from "@/lib/site-config";

type ContactCtaLevel = "contact" | "phone";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  // Set when this reply calls for a contact/consultation next step — renders
  // real contact buttons below it instead of the model writing its own
  // (unclickable) link text. "contact" = Chat on WhatsApp + Request a
  // Free Consultation. "phone" = the same two, plus a Call Us button, for
  // replies specifically about GrowVibe's phone number or contact details.
  ctaLevel?: ContactCtaLevel;
}

const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Hi! I'm GrowVibe's AI assistant — a live example of the AI chatbots we build for clients. Ask me about our services, our process, or how AI fits into your project.",
};

// Copy for the pre-chat nudge bubble — kept as constants (not raw JSX text)
// so an apostrophe in "I'm" never trips the no-unescaped-entities lint rule.
const NUDGE_TITLE = "👋 Hi! I'm GrowVibe AI.";
const NUDGE_BODY =
  "Ask me anything about websites, custom CRM development, AI automation or pricing.";

const MAX_INPUT_LENGTH = 2000;

// Match the markers the system prompt instructs the model to emit (see
// src/app/api/chat/route.ts) instead of writing its own Markdown link.
const PHONE_CTA_MARKER = "[[SHOW_PHONE_CTA]]";
const CONTACT_CTA_MARKER = "[[SHOW_CONTACT_CTA]]";

/**
 * Turns a raw model reply into safe display text plus a CTA level. Strips
 * whichever marker is present (or a stray link straight to /contact) into
 * `ctaLevel`, and — as a safety net in case the model ever slips one in
 * anyway — scrubs any other Markdown link syntax down to plain text, so raw
 * "[label](url)" syntax can never reach the chat UI.
 */
function parseAssistantReply(raw: string): { content: string; ctaLevel?: ContactCtaLevel } {
  let ctaLevel: ContactCtaLevel | undefined;
  if (raw.includes(PHONE_CTA_MARKER)) ctaLevel = "phone";
  else if (raw.includes(CONTACT_CTA_MARKER)) ctaLevel = "contact";

  let content = raw.split(PHONE_CTA_MARKER).join("").split(CONTACT_CTA_MARKER).join("");

  content = content.replace(/\[([^\]]+)\]\(\/contact[^)]*\)/gi, () => {
    if (!ctaLevel) ctaLevel = "contact";
    return "";
  });

  content = content.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

  content = content.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();

  return { content, ctaLevel };
}

/**
 * A real, working AI chat widget — not a mockup. Calls /api/chat (which
 * calls Anthropic's API server-side) so any visitor can actually talk to
 * it and get a genuine, on-brand answer back, proving the "AI chatbots"
 * service the site advertises rather than just describing it.
 */
export function AiChatWidget() {
  const shouldReduceMotion = useReducedMotion();
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const listRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  // --- Pre-chat nudge bubble ----------------------------------------------
  // A one-time, low-pressure invitation into the chat. Appears once, 5s
  // after load; never reappears once the visitor dismisses it or opens the
  // chat by any means (this bubble, its "Ask AI" button, or the launcher).
  const [nudgeVisible, setNudgeVisible] = React.useState(false);
  const [nudgeDismissed, setNudgeDismissed] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setNudgeVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (open) {
      setNudgeVisible(false);
      setNudgeDismissed(true);
    }
  }, [open]);

  const dismissNudge = () => {
    setNudgeVisible(false);
    setNudgeDismissed(true);
  };

  React.useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  }, [messages, loading, shouldReduceMotion]);

  React.useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-12) }),
      });
      const data = await res.json();
      const raw =
        typeof data?.reply === "string" && data.reply.length > 0
          ? data.reply
          : "Sorry, I couldn't respond just now — please try again.";
      const { content, ctaLevel } = parseAssistantReply(raw);
      setMessages((cur) => [...cur, { role: "assistant", content, ctaLevel }]);
    } catch {
      setMessages((cur) => [
        ...cur,
        {
          role: "assistant",
          content: "Sorry, something went wrong reaching the assistant. Please try again, or reach the team directly.",
          ctaLevel: "contact",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void sendMessage();
    }
  };

  return (
    <>
      {/* Launcher */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        data-cursor="hover"
        data-track="ai-chat-engagement"
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-xl transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
      >
        {open ? <X className="h-5 w-5" /> : <Bot className="h-6 w-6" />}
        {!open && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4">
            {!shouldReduceMotion && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            )}
            <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-primary">
              <Sparkles className="h-2 w-2 text-primary-foreground" />
            </span>
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {nudgeVisible && !nudgeDismissed && !open && (
          <motion.div
            key="ai-nudge"
            role="button"
            tabIndex={0}
            aria-label="Open GrowVibe AI assistant"
            data-cursor="hover"
            onClick={() => setOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpen(true);
              }
            }}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group fixed bottom-24 right-5 z-40 w-[calc(100vw-2.5rem)] max-w-[300px] cursor-pointer rounded-2xl border border-border bg-card p-4 text-left shadow-2xl shadow-ink/10 outline-none transition-transform duration-200 ease-out hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:bottom-28 sm:right-6"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                dismissNudge();
              }}
              data-cursor="hover"
              aria-label="Dismiss"
              className="absolute right-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>

            <div className="flex items-start gap-2.5 pr-5">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Bot className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-snug text-foreground">{NUDGE_TITLE}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{NUDGE_BODY}</p>
              </div>
            </div>

            <span className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform duration-200 ease-out group-hover:scale-[1.02]">
              Ask AI
              <MessageCircle className="h-3.5 w-3.5" />
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="GrowVibe AI Assistant"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-5 z-40 flex h-[70vh] max-h-[560px] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:bottom-28 sm:right-6"
          >
            <div className="flex flex-shrink-0 items-center gap-2.5 border-b border-border bg-ink px-4 py-3 text-white">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Bot className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold">GrowVibe AI Assistant</div>
                <div className="flex items-center gap-1.5 text-[11px] text-white/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Powered by Claude
                </div>
              </div>
            </div>

            <div ref={listRef} className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <React.Fragment key={i}>
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                      m.role === "user"
                        ? "ml-auto rounded-tr-sm bg-ink text-white"
                        : "mr-auto rounded-tl-sm bg-secondary text-foreground"
                    )}
                  >
                    {m.content}
                  </div>

                  {m.role === "assistant" && m.ctaLevel && (
                    <div className="mr-auto flex w-full max-w-[85%] flex-col gap-2">
                      {m.ctaLevel === "phone" && (
                        <a
                          href={SITE_PHONE_INDIA.href}
                          data-cursor="hover"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/20 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                        >
                          <Phone className="h-4 w-4" />
                          Call Us — {SITE_PHONE_INDIA.display}
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() =>
                          openWhatsAppChat(
                            "Hi GrowVibe! I was chatting with your AI assistant and would like to talk to your team."
                          )
                        }
                        data-cursor="hover"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Chat on WhatsApp
                      </button>
                      <Link
                        href="/contact"
                        data-cursor="hover"
                        onClick={() => setOpen(false)}
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-ink/20 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                      >
                        Request a Free Consultation
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  )}
                </React.Fragment>
              ))}
              {loading && (
                <div className="mr-auto flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-secondary px-3.5 py-2.5 text-sm text-muted-foreground">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Thinking…
                </div>
              )}
            </div>

            <div className="flex-shrink-0 border-t border-border p-3">
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  rows={1}
                  maxLength={MAX_INPUT_LENGTH}
                  placeholder="Ask about our services…"
                  className="max-h-24 flex-1 resize-none rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-ink/30"
                />
                <button
                  type="button"
                  onClick={() => void sendMessage()}
                  disabled={loading || !input.trim()}
                  data-cursor="hover"
                  aria-label="Send message"
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-ink text-white transition-opacity disabled:opacity-30"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-[10px] leading-snug text-muted-foreground">
                AI-generated answers may not always be fully accurate — for project specifics,{" "}
                <Link href="/contact" className="underline hover:text-foreground">
                  contact our team
                </Link>
                .
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
