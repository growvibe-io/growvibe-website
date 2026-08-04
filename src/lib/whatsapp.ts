/**
 * Single source of truth for GrowVibe's WhatsApp contact number and chat
 * link. Mirrors the SITE_PHONE pattern in site-config.ts — change the
 * number once here and it updates everywhere WhatsApp is used (the AI
 * chat widget's "Chat on WhatsApp" CTA, the site-wide floating button,
 * and any other live-chat entry point).
 */

/** wa.me deep links need the number with country code, digits only. */
const WHATSAPP_NUMBER = "919229009290";

/** Human-readable, for UI text if ever needed. */
export const WHATSAPP_DISPLAY = "+91 92290 09290";

const DEFAULT_MESSAGE = "Hi GrowVibe! I'd like to know more about your services.";

/**
 * Builds a wa.me link that opens a chat with GrowVibe's WhatsApp number,
 * pre-filled with a friendly, editable message.
 */
export function getWhatsAppUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Opens WhatsApp (app on mobile, web.whatsapp.com on desktop) in a new tab
 * with the chat pre-filled. Used by CTA buttons that previously opened the
 * Crisp widget in place.
 */
export function openWhatsAppChat(message?: string) {
  if (typeof window === "undefined") return;
  window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
