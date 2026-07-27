// Blog content lives here as structured data rather than MDX/a CMS, since
// the site has neither installed. Each post's `body` is an array of
// typed content blocks rendered by <ArticleBody> (src/components/blog/
// article-body.tsx) — this keeps content type-checked, keeps rendering
// consistent across posts, and avoids dangerouslySetInnerHTML entirely.
//
// SEO notes for anyone editing this file:
// - `description` is the meta description AND the card excerpt: keep it
//   150-160 characters, unique per post, and written to earn a click.
// - `title` becomes the <title> tag (via the [slug] page's generateMetadata)
//   and the H1. Keep the target keyword near the front.
// - Every post should internally link to at least one /services#anchor
//   and at least one other post — that's what the "internalLinks" data
//   on each block/faq is for; it's also just done inline in body text.

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "checklist"; items: string[] }
  | { type: "callout"; title: string; text: string };

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // ISO 8601
  keywords: string[];
  body: ContentBlock[];
  faqs: FaqItem[];
}

function estimateReadingTime(post: BlogPost): string {
  const words = post.body
    .map((block) => {
      if (block.type === "p" || block.type === "h2" || block.type === "h3") {
        return block.text;
      }
      if (block.type === "ul" || block.type === "ol" || block.type === "checklist") {
        return block.items.join(" ");
      }
      if (block.type === "callout") {
        return `${block.title} ${block.text}`;
      }
      return "";
    })
    .join(" ")
    .split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "nextjs-vs-wordpress-for-business-websites",
    title: "Next.js vs WordPress: Which Should You Choose for Your Business Website?",
    description:
      "A practical, no-hype comparison of Next.js and WordPress for business websites — covering speed, editing, security, cost, and how to decide.",
    category: "Website Development",
    date: "2026-07-24",
    keywords: [
      "Next.js vs WordPress",
      "best platform for business website",
      "WordPress or Next.js",
      "website platform comparison",
    ],
    body: [
      {
        type: "p",
        text: "If you're planning a new business website, you'll eventually run into this question: should it be built on WordPress, or on a modern framework like Next.js? Both are legitimate, widely used choices — the honest answer is that neither one is universally \"better.\" They're built for different priorities, and the right pick depends on what your site actually needs to do, who's going to manage it day to day, and how much it needs to grow.",
      },
      {
        type: "p",
        text: "This isn't a Next.js sales pitch dressed up as a comparison. WordPress still powers a huge share of the web for good reason. Here's a straightforward breakdown of where each one genuinely wins, so you can make the call with your eyes open.",
      },
      {
        type: "h2",
        id: "what-they-are",
        text: "What Next.js and WordPress actually are",
      },
      {
        type: "p",
        text: "WordPress is a content management system (CMS): a piece of software, plus a database, that runs on a server and lets non-technical people log into a dashboard and edit pages, publish posts, and install plugins for things like forms, e-commerce, or SEO — all without touching code.",
      },
      {
        type: "p",
        text: "Next.js is a React framework for building web applications and websites from code. There's no built-in admin dashboard — a developer builds the pages, and content either lives in the codebase or comes from a separate headless CMS connected to it. It trades WordPress's out-of-the-box editing convenience for more control over performance, structure, and custom functionality.",
      },
      {
        type: "h2",
        id: "speed-and-performance",
        text: "Speed and performance",
      },
      {
        type: "p",
        text: "This is where the two diverge the most in practice. A default WordPress install, once you add a theme, page builder, and a handful of plugins, tends to load a lot of resources on every request — which is exactly what plugins for caching and image optimization exist to paper over. It can be made fast, but you're fighting the platform's defaults to get there.",
      },
      {
        type: "p",
        text: "Next.js sites are typically pre-rendered as static HTML at build time or rendered on the server on demand, then hydrated with only the JavaScript that page actually needs. For a marketing site with mostly static content, that usually means faster page loads and stronger Core Web Vitals scores with far less tuning — which matters for SEO too, since page experience is one of the signals Google's ranking systems weigh.",
      },
      {
        type: "h2",
        id: "content-editing",
        text: "Content management and the editing experience",
      },
      {
        type: "p",
        text: "This is WordPress's home turf. The block editor is genuinely good now, and a marketing team can publish a blog post, swap a hero image, or update a pricing table without ever pinging a developer. If your site needs frequent, small content updates from non-technical staff, that's a real and valuable advantage — don't underrate it.",
      },
      {
        type: "p",
        text: "With Next.js, content editing depends entirely on what you connect it to. Paired with a headless CMS (Sanity, Contentful, or similar), non-technical editors get a comparable dashboard experience, and the site keeps Next.js's performance benefits. Built without one, content changes go through a developer and a deploy — fine for a site that changes rarely, painful for one that needs daily updates.",
      },
      {
        type: "h2",
        id: "security-and-maintenance",
        text: "Security and ongoing maintenance",
      },
      {
        type: "p",
        text: "WordPress's popularity is also what makes it a bigger target. The core software itself is reasonably secure, but the plugin ecosystem is uneven — an abandoned or poorly maintained plugin is the most common way WordPress sites get compromised. Keeping a WordPress site secure means staying disciplined about updates, and being selective about which plugins you install in the first place.",
      },
      {
        type: "p",
        text: "A Next.js site has a much smaller attack surface: there's no public admin login to brute-force, and no plugin marketplace of variable quality. The tradeoff is that any custom functionality is code someone has to write and maintain directly, rather than installing a plugin for it.",
      },
      {
        type: "h2",
        id: "cost-to-build-and-maintain",
        text: "Cost to build and maintain over time",
      },
      {
        type: "p",
        text: "WordPress usually has a lower starting cost. Themes and plugins solve most common needs off the shelf, and hosting is inexpensive and widely available. Costs tend to show up later, as plugin licenses, premium themes, and maintenance retainers accumulate.",
      },
      {
        type: "p",
        text: "A custom Next.js build typically costs more upfront, since more of the site is bespoke code rather than pre-built plugins. In exchange, there's less ongoing plugin-update overhead, and hosting on platforms like Vercel is often efficient for the traffic levels most business sites see.",
      },
      {
        type: "h2",
        id: "when-wordpress-wins",
        text: "When WordPress is the right choice",
      },
      {
        type: "ul",
        items: [
          "Your team publishes content often (blog, news, resources) and needs to do it without a developer",
          "You need e-commerce out of the box — WooCommerce covers most common storefront needs",
          "Budget is tight and you need something live quickly on a modest starting cost",
          "Your site's needs are well served by existing themes and plugins, without heavy customization",
        ],
      },
      {
        type: "h2",
        id: "when-nextjs-wins",
        text: "When Next.js is the right choice",
      },
      {
        type: "ul",
        items: [
          "Page speed and Core Web Vitals are a priority — competitive industries, ad-driven traffic, or SEO-sensitive niches",
          "You want custom interactions, animations, or a UI that off-the-shelf themes can't produce",
          "The site will grow into a web app — customer dashboards, gated tools, or logged-in features",
          "You have (or plan to have) ongoing developer support to maintain and extend it",
        ],
      },
      {
        type: "h2",
        id: "decision-framework",
        text: "A quick way to decide",
      },
      {
        type: "p",
        text: "Ask two questions. First: who edits the content day to day, and how often — a non-technical team publishing weekly leans WordPress (or Next.js with a headless CMS); a site that changes a few times a year doesn't need that overhead either way. Second: does the site need to do anything beyond present content — custom logic, dashboards, integrations — because that's where Next.js's flexibility starts to outweigh WordPress's convenience.",
      },
      {
        type: "callout",
        title: "There's no wrong platform, only a wrong fit",
        text: "Plenty of fast, successful business sites run on WordPress, and plenty of slow, hard-to-maintain sites run on Next.js built without much care. The platform matters less than whether it was built and configured for your specific needs.",
      },
      {
        type: "p",
        text: "We build both. GrowVibe's website design work covers custom WordPress development for content-heavy or budget-conscious builds, and Next.js and React development for performance-critical or product-like sites — so the conversation starts with your goals, not a preferred stack.",
      },
    ],
    faqs: [
      {
        question: "Is Next.js better than WordPress for SEO?",
        answer:
          "Next.js sites often score better on Core Web Vitals out of the box, which is one ranking signal among many. A well-optimized WordPress site with good caching and lean plugins can still rank very well — technical SEO fundamentals (site structure, content quality, internal linking) matter more than the platform itself.",
      },
      {
        question: "Can I move from WordPress to Next.js later?",
        answer:
          "Yes. It's a common path once a WordPress site outgrows its plugin stack or performance ceiling — content and URLs can be migrated with redirects in place so you don't lose existing search rankings.",
      },
      {
        question: "Does Next.js support a blog like WordPress does?",
        answer:
          "Yes, either by storing posts in the codebase (fine for a small number of posts that change infrequently) or by connecting a headless CMS, which gives non-technical editors a familiar publishing dashboard while keeping the front end on Next.js.",
      },
      {
        question: "Which one is cheaper in the long run?",
        answer:
          "It depends on usage. WordPress's ongoing costs are mostly plugin licenses and update maintenance; Next.js's are mostly developer time for changes. A content-heavy site updated constantly by non-developers often costs less long-term on WordPress; a site that rarely changes but needs top performance often costs less long-term on Next.js.",
      },
    ],
  },
  {
    slug: "ai-automation-cut-business-costs",
    title: "How AI Automation Can Cut Operational Costs for Small and Mid-Sized Businesses",
    description:
      "A practical look at where AI automation actually saves small and mid-sized businesses time and money — with real examples and a low-risk way to start.",
    category: "AI Solutions",
    date: "2026-07-24",
    keywords: [
      "AI automation for small business",
      "business process automation",
      "reduce operational costs with AI",
      "AI automation examples",
    ],
    body: [
      {
        type: "p",
        text: "\"AI automation\" gets thrown around loosely enough that it's worth being precise about what it actually means for a small or mid-sized business: using AI models and rule-based workflows together to handle repetitive, well-defined tasks that currently eat up staff hours — not replacing judgment calls, but clearing out the busywork around them.",
      },
      {
        type: "p",
        text: "Done well, it's less about chasing a trend and more about a straightforward operations question: where is your team spending hours on work that's repetitive, rules-based, and doesn't need a human's full attention every single time?",
      },
      {
        type: "h2",
        id: "what-it-actually-means",
        text: "What AI automation actually means in practice",
      },
      {
        type: "p",
        text: "In practice it's a combination of a few things working together: AI models that can read, summarize, classify, or draft text; workflow automation that connects your existing tools (CRM, inbox, calendar, spreadsheets) so information moves between them without manual copy-paste; and clear rules for when something needs a human to step in. None of that requires building a custom AI product from scratch — most of the value for a small business comes from wiring existing AI capability into the tools you already use.",
      },
      {
        type: "h2",
        id: "where-time-is-lost",
        text: "Where businesses are losing the most time today",
      },
      {
        type: "ul",
        items: [
          "Manual data entry — retyping information between a form, an inbox, a spreadsheet, and a CRM",
          "Customer support triage — reading every incoming message to figure out who should handle it",
          "Lead follow-up — new leads sitting for hours or days before anyone responds",
          "Scheduling and coordination — back-and-forth emails just to book a meeting",
          "Reporting and reconciliation — someone manually compiling numbers from three different tools every week",
        ],
      },
      {
        type: "p",
        text: "None of these require creativity or judgment to do correctly most of the time — which is exactly what makes them good automation candidates. The judgment calls (should we take this deal, how should we respond to this upset customer) stay with your team; the surrounding busywork doesn't have to.",
      },
      {
        type: "h2",
        id: "examples-by-department",
        text: "Real examples of AI automation by department",
      },
      {
        type: "h3",
        text: "Sales and CRM",
      },
      {
        type: "p",
        text: "New leads get automatically logged, enriched with basic company information, and routed to the right rep — with an AI-drafted first-touch email waiting for a quick review rather than a blank page. Follow-up reminders fire automatically based on where a deal sits in the pipeline, so leads stop going cold simply because nobody remembered to check.",
      },
      {
        type: "h3",
        text: "Customer support",
      },
      {
        type: "p",
        text: "An AI assistant handles the first response for common, repetitive questions (order status, business hours, pricing tiers) instantly, and escalates anything it's not confident about to a human — instead of every message sitting in a shared inbox until someone has time to triage it.",
      },
      {
        type: "h3",
        text: "Operations and back office",
      },
      {
        type: "p",
        text: "Incoming invoices, receipts, or intake forms get read and the relevant fields extracted automatically into your accounting or project system, instead of someone retyping them by hand line by line.",
      },
      {
        type: "h3",
        text: "Marketing and reporting",
      },
      {
        type: "p",
        text: "Weekly performance numbers from ads, analytics, and email tools get pulled into one summary automatically, so the team spends its time interpreting the numbers instead of assembling them.",
      },
      {
        type: "h2",
        id: "how-much-can-you-save",
        text: "How much can you actually save",
      },
      {
        type: "p",
        text: "Resist any number that gets thrown around without your own math behind it — the honest way to estimate this is with a simple framework you can run yourself: take a task, estimate the hours per week it currently costs across your team, and multiply by a fully-loaded hourly cost (wages plus overhead, not just salary). That's your current cost of the manual process. Weigh it against the cost of the tools and setup needed to automate it, plus the smaller amount of oversight time that remains.",
      },
      {
        type: "p",
        text: "A task costing a team ten hours a week that can be cut to two hours of review time is a real, calculable saving — and it compounds every week going forward, which is usually where the return shows up most clearly over a year.",
      },
      {
        type: "h2",
        id: "risks-and-mistakes",
        text: "Common risks and mistakes when adopting AI automation",
      },
      {
        type: "ul",
        items: [
          "Automating a broken process — automation makes a bad workflow run faster, it doesn't fix it",
          "No human escalation path — every automated system needs a clear way for edge cases to reach a person",
          "Ignoring data privacy — customer and financial data need the same handling standards inside an automated workflow as outside one",
          "Chasing the hype instead of the ROI — the best starting project is the one with the clearest, most measurable time savings, not the most impressive-sounding one",
        ],
      },
      {
        type: "h2",
        id: "a-simple-roadmap",
        text: "A simple roadmap to start",
      },
      {
        type: "checklist",
        items: [
          "Audit where your team's hours actually go for a week — be specific, not general",
          "Pick one repetitive, high-volume, low-risk process as a pilot",
          "Automate that single process and set a clear way to measure the time saved",
          "Review after 30 days, adjust, and only then expand to a second process",
        ],
      },
      {
        type: "callout",
        title: "Start narrow, prove it, then expand",
        text: "The businesses that get real value from AI automation almost always start with one well-chosen process instead of trying to automate everything at once. A narrow, measurable pilot builds the internal confidence (and the budget case) for the next one.",
      },
      {
        type: "p",
        text: "This is the same approach we take with GrowVibe's AI solutions and business automation work — starting with an audit of where your team's time actually goes, then building the specific automation that addresses it, rather than selling a generic \"AI package.\"",
      },
    ],
    faqs: [
      {
        question: "Is AI automation only worth it for large companies?",
        answer:
          "No — if anything, small teams often feel repetitive work more acutely, since there's no large back-office staff to absorb it. A single well-chosen automation can free up a meaningful share of a small team's week.",
      },
      {
        question: "How long does it take to implement?",
        answer:
          "A focused first pilot — one process, connected to your existing tools — is typically achievable in weeks, not months. Broader automation across multiple departments is a longer, phased project.",
      },
      {
        question: "Will AI automation replace my staff?",
        answer:
          "The goal of a well-scoped project is to remove repetitive busywork, not judgment-based roles. Most businesses find their team redirects freed-up time toward higher-value work rather than becoming redundant.",
      },
      {
        question: "What's the difference between AI automation and a chatbot?",
        answer:
          "A chatbot is one possible piece of a larger automation — usually the customer-facing part. AI automation more broadly includes back-office workflows, data processing, and internal tooling that nobody outside the business ever sees.",
      },
    ],
  },
  {
    slug: "local-seo-checklist",
    title: "Local SEO Checklist: How Small Businesses Can Rank Higher on Google",
    description:
      "A practical local SEO checklist for small businesses — Google Business Profile, on-site fundamentals, reviews, citations, and a repeatable monthly routine.",
    category: "SEO & Marketing",
    date: "2026-07-24",
    keywords: [
      "local SEO checklist",
      "how to rank higher on Google local search",
      "local SEO for small business",
      "Google Business Profile optimization",
    ],
    body: [
      {
        type: "p",
        text: "For most small businesses — a clinic, a contractor, a restaurant, a law office — the customers that matter most are searching with location intent: \"near me,\" a neighborhood name, or a city. Ranking for those searches is a different discipline than general SEO, with its own checklist of things that actually move the needle. Here's a practical rundown of what to prioritize, in the order it tends to pay off.",
      },
      {
        type: "h2",
        id: "what-local-seo-means",
        text: "What local SEO means and why it's different",
      },
      {
        type: "p",
        text: "General SEO is about ranking a page for a topic, wherever the searcher is. Local SEO adds a location layer on top: Google is trying to match a searcher not just to relevant content, but to a nearby, legitimate, well-reviewed business that can actually serve them. That means your Google Business Profile and your reputation signals carry as much weight as your website itself — often more, for the searches that lead directly to a call or a visit.",
      },
      {
        type: "h2",
        id: "google-business-profile",
        text: "Claim and optimize your Google Business Profile",
      },
      {
        type: "p",
        text: "This is the single highest-leverage thing most small businesses can do, and the most commonly neglected. If you haven't verified your listing, start there — everything else compounds on top of it.",
      },
      {
        type: "ul",
        items: [
          "Verify your listing and keep your name, address, and phone number exactly consistent with your website",
          "Choose the most specific and accurate primary category available, plus relevant secondary categories",
          "Fill in hours, services, attributes, and a complete business description — don't leave sections blank",
          "Add real photos regularly (storefront, team, work examples) — listings with more photos consistently get more engagement",
          "Respond to the Q&A section and post updates periodically rather than leaving the profile static",
        ],
      },
      {
        type: "h2",
        id: "on-site-fundamentals",
        text: "On-site local SEO fundamentals",
      },
      {
        type: "p",
        text: "Your website still matters — it's what confirms to both Google and the customer that you're legitimate and relevant once they click through.",
      },
      {
        type: "ul",
        items: [
          "Keep your name, address, and phone number identical across your site, your Google Business Profile, and every directory listing",
          "Include your city or service area naturally in title tags, headings, and page copy — not stuffed in, just present",
          "Add LocalBusiness schema markup so search engines can parse your address, hours, and service area directly",
          "Create a dedicated page per service area if you cover multiple towns or neighborhoods, rather than one generic page",
          "Keep the site fast and mobile-friendly — a large share of local searches happen on a phone, often while someone is already moving toward a decision",
        ],
      },
      {
        type: "h2",
        id: "reviews-and-reputation",
        text: "Reviews and reputation",
      },
      {
        type: "p",
        text: "Review count, recency, and rating are a direct local ranking factor, not just a trust signal for customers reading them. A steady trickle of new reviews outperforms a pile of old ones sitting untouched.",
      },
      {
        type: "ul",
        items: [
          "Ask every satisfied customer for a review — make it a habit, not an occasional request",
          "Respond to every review, positive and negative, professionally and promptly",
          "Never buy or fake reviews — it risks your listing entirely and the returns are short-lived at best",
        ],
      },
      {
        type: "h2",
        id: "citations",
        text: "Local citations and directory consistency",
      },
      {
        type: "p",
        text: "A citation is any online mention of your business name, address, and phone number — directories, industry associations, local chambers of commerce. Consistency across these matters more than sheer volume: conflicting information across listings actively undermines the trust signal Google is trying to build.",
      },
      {
        type: "h2",
        id: "local-content",
        text: "Content that earns local relevance",
      },
      {
        type: "p",
        text: "Beyond the core site pages, content built around your actual service area builds relevance over time — a page answering questions specific to your city or region, or coverage of local events and community involvement your business is genuinely part of. It doesn't need to be constant, but it should be real and specific rather than generic city names dropped into templated text.",
      },
      {
        type: "h2",
        id: "monthly-checklist",
        text: "A practical monthly local SEO routine",
      },
      {
        type: "checklist",
        items: [
          "Check for and respond to all new Google Business Profile reviews and Q&A",
          "Post at least one update or offer to your Google Business Profile",
          "Add 2-3 new photos if you have them",
          "Spot-check that your NAP (name, address, phone) is still consistent across your site and top directories",
          "Review your Google Business Profile insights for search queries you're already appearing for, and note gaps",
        ],
      },
      {
        type: "callout",
        title: "Local SEO rewards consistency, not intensity",
        text: "A modest routine done every month for a year outperforms an intense one-time push. Most of what moves local rankings — reviews, listing accuracy, fresh content — compounds slowly rather than jumping overnight.",
      },
      {
        type: "p",
        text: "This is the same routine we run for clients through GrowVibe's SEO and AI-powered SEO services, often alongside Google Ads for the searches that need to convert faster than organic rankings can build.",
      },
    ],
    faqs: [
      {
        question: "How long does local SEO take to show results?",
        answer:
          "Google Business Profile changes can show up in weeks. Broader ranking improvements from reviews, citations, and content typically build over a few months of consistent effort rather than all at once.",
      },
      {
        question: "Do I need a website for local SEO, or is a Google Business Profile enough?",
        answer:
          "A Google Business Profile alone can drive calls and direction requests, but a website adds trust signals, lets you rank for more search variations, and gives you a place to send paid traffic and other marketing — most businesses need both.",
      },
      {
        question: "What's the real difference between SEO and local SEO?",
        answer:
          "General SEO optimizes for topical relevance anywhere; local SEO adds proximity and reputation as major ranking factors, and puts far more weight on your Google Business Profile and reviews than a typical national SEO campaign would.",
      },
      {
        question: "How often should I post on my Google Business Profile?",
        answer:
          "A few times a month is a reasonable, sustainable cadence for most small businesses — consistency matters more than frequency, so it's better to post reliably a little than heavily for a week and then go silent.",
      },
    ],
  },
];

export const BLOG_POSTS_WITH_META = BLOG_POSTS.map((post) => ({
  ...post,
  readingTime: estimateReadingTime(post),
}));

export function getAllPosts() {
  return BLOG_POSTS_WITH_META;
}

export function getPostBySlug(slug: string) {
  return BLOG_POSTS_WITH_META.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2) {
  return BLOG_POSTS_WITH_META.filter((post) => post.slug !== slug).slice(0, limit);
}
