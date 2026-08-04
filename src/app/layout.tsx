import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Cursor } from "@/components/cursor";
import { AiChatWidget } from "@/components/ai-chat-widget";
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button";
import { GoogleAnalytics } from "@/components/google-analytics";
import { SITE_PHONE } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const siteUrl = "https://growvibe.io";

const title = "GrowVibe | Website Development, AI Solutions & CRM Systems";
const description =
  "GrowVibe builds premium websites, web applications, CRM systems, and AI-powered business solutions. We also provide SEO, Google Ads, Meta Ads, automation, and ongoing support.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | GrowVibe",
  },
  description,
  keywords: [
    "website design",
    "web development",
    "WordPress development",
    "Next.js development",
    "React development",
    "AI solutions",
    "AI chatbot development",
    "CRM development",
    "business automation",
    "SEO agency",
    "digital marketing agency",
    "GrowVibe",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "GrowVibe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GrowVibe",
  url: siteUrl,
  logo: `${siteUrl}/opengraph-image`,
  email: "hello@growvibe.io",
  telephone: SITE_PHONE.schema,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE_PHONE.schema,
      contactType: "customer service",
      areaServed: "US",
    },
  ],
  description,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GrowVibe",
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Cursor />
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <AiChatWidget />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
