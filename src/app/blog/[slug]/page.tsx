import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { FaqAccordion } from "@/components/faq-accordion";
import { ArticleBody } from "@/components/blog/article-body";
import { Photo } from "@/components/mockup-ui";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog-data";

const siteUrl = "https://growvibe.io";

// Which /services anchors each post should point readers toward — kept
// here (not in blog-data.ts) since it's a presentation/CTA concern, not
// article content.
const RELATED_SERVICES: Record<string, { label: string; href: string }[]> = {
  "nextjs-vs-wordpress-for-business-websites": [
    { label: "Website Design", href: "/services#website-design" },
    { label: "Next.js Development", href: "/services#nextjs-development" },
    { label: "WordPress Development", href: "/services#wordpress-development" },
  ],
  "ai-automation-cut-business-costs": [
    { label: "AI Solutions", href: "/services#ai-solutions" },
    { label: "Business Automation", href: "/services#business-automation" },
  ],
  "local-seo-checklist": [
    { label: "SEO", href: "/services#seo" },
    { label: "AI-Powered SEO", href: "/services#ai-powered-seo" },
    { label: "Google Ads", href: "/services#google-ppc" },
  ],
  "business-website-cost-2026": [
    { label: "Website Design", href: "/website-design" },
    { label: "Pricing", href: "/pricing" },
  ],
  "wordpress-vs-nextjs-for-business-websites": [
    { label: "Website Design", href: "/website-design" },
    { label: "Next.js Development", href: "/services#nextjs-development" },
    { label: "WordPress Development", href: "/services#wordpress-development" },
  ],
  "website-not-generating-leads": [
    { label: "Website Design", href: "/website-design" },
    { label: "Custom CRM Development", href: "/services/crm-development" },
    { label: "SEO", href: "/services#seo" },
  ],
  "business-website-features-checklist": [
    { label: "Website Design", href: "/website-design" },
    { label: "Pricing", href: "/pricing" },
  ],
  "real-estate-website-design-guide": [
    { label: "Real Estate Websites", href: "/real-estate" },
    { label: "Custom CRM Development", href: "/services/crm-development" },
  ],
  "dental-website-design-guide": [
    { label: "Dental Websites", href: "/dentist" },
  ],
  "what-is-a-custom-crm": [
    { label: "Custom CRM Development", href: "/services/crm-development" },
    { label: "Pricing", href: "/pricing" },
  ],
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Post not found" };
  }

  const url = `${siteUrl}/blog/${post.slug}`;
  const seoTitle = post.seoTitle ?? post.title;
  return {
    title: seoTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: seoTitle,
      description: post.description,
      url,
      siteName: "GrowVibe",
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: post.description,
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const url = `${siteUrl}/blog/${post.slug}`;
  const related = getRelatedPosts(post.slug);
  const services = RELATED_SERVICES[post.slug] ?? [];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "GrowVibe", url: siteUrl },
    publisher: {
      "@type": "Organization",
      name: "GrowVibe",
      logo: { "@type": "ImageObject", url: `${siteUrl}/opengraph-image` },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="border-b border-border bg-background">
        <div className="container max-w-3xl py-20">
          <Reveal>
            <Link
              href="/blog"
              data-cursor="hover"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Blog
            </Link>

            <Badge variant="accent" className="mb-4 mt-6">
              {post.category}
            </Badge>
            <h1 className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-border pb-8 text-sm text-muted-foreground">
              <span>By the GrowVibe Team</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime}
              </span>
            </div>
          </Reveal>

          {post.heroImage && (
            <Reveal delay={50} className="mt-8">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border">
                <Photo
                  seed={post.heroImage.seed}
                  width={1200}
                  height={675}
                  alt={post.heroImage.alt}
                  className="absolute inset-0"
                  priority
                />
              </div>
            </Reveal>
          )}

          <Reveal delay={100} className="mt-10">
            <ArticleBody blocks={post.body} />
          </Reveal>

          {services.length > 0 && (
            <Reveal delay={100}>
              <Card className="mt-12 border-border/70 p-7">
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Related services
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      data-cursor="hover"
                      className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {service.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </Card>
            </Reveal>
          )}

          {post.faqs.length > 0 && (
            <Reveal delay={100} className="mt-14">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                Frequently asked questions
              </h2>
              <FaqAccordion items={post.faqs} className="mt-6" />
            </Reveal>
          )}

          <Reveal delay={100}>
            <div className="mt-14 rounded-2xl bg-ink px-8 py-10 text-center text-white">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                Have a question specific to your business?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/60">
                We&apos;re happy to talk it through directly — no generic
                sales pitch, just a straight answer. Tell us about your
                project and we&apos;ll get back to you with real next steps.
              </p>
              <Magnetic className="mt-6 inline-flex">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Request a Free Consultation
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>

          {related.length > 0 && (
            <Reveal delay={100}>
              <div className="mt-14 border-t border-border pt-10">
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Keep reading
                </p>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {related.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      data-cursor="hover"
                    >
                      <Card className="group h-full border-border/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-lg">
                        <Badge variant="outline" className="mb-3">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="font-heading text-base font-semibold leading-snug tracking-tight text-foreground">
                          {relatedPost.title}
                        </h3>
                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                          Read article
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </article>
    </>
  );
}
