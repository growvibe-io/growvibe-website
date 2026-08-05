import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { Stagger, StaggerItem } from "@/components/stagger";
import { getAllPosts } from "@/lib/blog-data";

const siteUrl = "https://growvibe.io";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides on website development, AI automation, and SEO from the GrowVibe team — no fluff, written to actually help you decide and act.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | GrowVibe",
    description:
      "Practical guides on website development, AI automation, and SEO from the GrowVibe team — no fluff, written to actually help you decide and act.",
    url: `${siteUrl}/blog`,
    siteName: "GrowVibe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | GrowVibe",
    description:
      "Practical guides on website development, AI automation, and SEO from the GrowVibe team — no fluff, written to actually help you decide and act.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
  ],
};

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="border-b border-border bg-background">
        <div className="container py-24">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Badge variant="accent" className="mb-6">
                Blog
              </Badge>
              <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                Practical guides, not filler
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Straightforward write-ups on website development, AI
                automation, and SEO — the kind of thing we&apos;d actually
                send a client who asked the question directly.
              </p>
            </div>
          </Reveal>

          <Stagger className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <Card className="group flex h-full flex-col justify-between border-border/70 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-ink/20 hover:shadow-xl">
                    <div>
                      <Badge variant="outline" className="mb-4">
                        {post.category}
                      </Badge>
                      <h2 className="font-heading text-xl font-semibold leading-snug tracking-tight text-foreground">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readingTime}
                        </span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
