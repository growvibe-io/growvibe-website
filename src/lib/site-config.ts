/**
 * Single source of truth for GrowVibe's published contact phone number.
 * The footer, the contact page, the Organization JSON-LD schema, and the
 * AI chat widget's "Call Us" button all read from here — change the
 * number once, and it updates everywhere it's used instead of drifting
 * out of sync across hardcoded copies.
 */
export const SITE_PHONE = {
  /** Human-readable, for UI text and button labels. */
  display: "+1 (888) 404-1718",
  /** tel: link target. */
  href: "tel:+18884041718",
  /** schema.org telephone format (hyphenated, no parentheses/spaces). */
  schema: "+1-888-404-1718",
};
