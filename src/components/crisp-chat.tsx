import Script from "next/script";

const CRISP_WEBSITE_ID = "b035211f-d2ea-48d7-84d4-1dedf3672084";

// Crisp's own loader pattern: `window.$crisp` starts as a plain array that
// queues commands, then Crisp's script (loaded below) drains that queue
// once it's ready. Typed as unknown[] so any command tuple can be pushed
// without `any`.
declare global {
  interface Window {
    $crisp?: unknown[];
    CRISP_WEBSITE_ID?: string;
  }
}

/**
 * Opens the Crisp chat widget programmatically — used by the "Talk to Our
 * Live Team" button in the AI chat widget so a visitor can jump straight
 * from the AI assistant into a real conversation with the team.
 */
export function openCrispChat() {
  if (typeof window === "undefined") return;
  window.$crisp = window.$crisp || [];
  window.$crisp.push(["do", "chat:open"]);
}

/**
 * Crisp live chat widget. Loaded via next/script (afterInteractive) so it
 * doesn't block first paint or hydration. "position:reverse" moves the
 * launcher icon to the bottom-left, since the site's own AI assistant
 * widget (see <AiChatWidget />) already occupies the bottom-right corner.
 */
export function CrispChat() {
  return (
    <Script id="crisp-chat" strategy="afterInteractive">
      {`
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = "${CRISP_WEBSITE_ID}";
        window.$crisp.push(["config", "position:reverse", [true]]);
        (function () {
          var d = document;
          var s = d.createElement("script");
          s.src = "https://client.crisp.chat/l.js";
          s.async = 1;
          d.getElementsByTagName("head")[0].appendChild(s);
        })();
      `}
    </Script>
  );
}
