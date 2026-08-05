"use client";

import { getWhatsAppUrl } from "@/lib/whatsapp";

const FLOAT_MESSAGE = "Hi GrowVibe! I'd like to know more about your services.";

/**
 * Site-wide floating WhatsApp launcher. Sits bottom-right so it never
 * collides with the AI assistant launcher (bottom-left, see
 * <AiChatWidget />). A plain external link — no widget script/iframe to
 * load, so it's always available on click.
 */
export function WhatsAppFloatingButton() {
  return (
    <a
      href={getWhatsAppUrl(FLOAT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      data-track="whatsapp-float-click"
      aria-label="Chat with GrowVibe on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.393.7 4.623 1.908 6.497L4 29l7.685-1.877A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.818a9.77 9.77 0 0 1-4.98-1.363l-.357-.213-4.56 1.113 1.126-4.44-.234-.364A9.77 9.77 0 0 1 5.818 15c0-5.618 4.568-10.182 10.186-10.182 5.618 0 10.182 4.564 10.182 10.182 0 5.618-4.564 10.182-10.182 10.182Zm5.55-7.62c-.303-.152-1.792-.884-2.07-.985-.278-.101-.48-.152-.682.152-.202.303-.783.985-.96 1.187-.177.202-.354.227-.657.076-.303-.152-1.278-.471-2.435-1.502-.9-.803-1.508-1.796-1.684-2.099-.177-.303-.019-.467.133-.618.136-.136.303-.354.454-.53.152-.177.202-.303.303-.505.101-.202.05-.379-.025-.53-.076-.152-.682-1.645-.934-2.253-.246-.591-.497-.511-.682-.52-.177-.008-.379-.01-.581-.01-.202 0-.53.076-.808.379-.278.303-1.06 1.035-1.06 2.524 0 1.489 1.086 2.928 1.237 3.13.152.202 2.137 3.264 5.178 4.577.723.312 1.288.499 1.728.639.726.231 1.387.198 1.909.12.582-.087 1.792-.733 2.045-1.44.253-.708.253-1.314.177-1.44-.076-.126-.278-.202-.581-.354Z" />
      </svg>
    </a>
  );
}
