"use client";

import { MessageCircle } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { openWhatsAppChat } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * "Chat on WhatsApp" — opens a WhatsApp chat with GrowVibe. Needs its own
 * small Client Component because attaching an onClick handler requires a
 * client boundary; the pages that use this (e.g. /website-design) are Server
 * Components that export page-level metadata, so the handler can't live
 * inline in the page itself.
 */
export function LiveChatCtaButton({
  label = "Chat on WhatsApp",
  className,
  variant = "outlineLight",
  size = "lg",
}: {
  label?: string;
  className?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}) {
  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      onClick={() => openWhatsAppChat()}
      data-track="live-chat-click"
      className={cn(className)}
    >
      <MessageCircle className="mr-1.5 h-4 w-4" />
      {label}
    </Button>
  );
}
