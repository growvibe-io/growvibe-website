import {
  LayoutTemplate,
  Layers,
  Boxes,
  Atom,
  Server,
  FileCode,
  ShoppingCart,
  FileText,
  Wrench,
  AppWindow,
  Cloud,
  LayoutDashboard,
  UserCog,
  Plug,
  Sparkles,
  Zap,
  Search,
  TrendingUp,
  MousePointerClick,
  Share2,
  PenTool,
  Mail,
  BarChart3,
  Globe,
  Bot,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  /** Optional link to a dedicated deep-dive page for this service (e.g.
   * CRM Development's own page). Most services don't have one and just
   * use the anchor on this page. */
  href?: string;
}

export interface ServiceCategory {
  slug: string;
  navLabel: string;
  navIcon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  /** "grid" = standard card grid (for larger categories); "feature" = a
   * pair of larger, more detailed cards (for focused, high-value categories
   * that only hold a couple of services but deserve more visual weight). */
  layout: "grid" | "feature";
  tone: "light" | "dark" | "tint";
  services: ServiceItem[];
}

// Same 25 services, same ids (every id below is linked to from the navbar,
// footer, home page, and blog posts as /services#<id> — do not rename any
// id without also updating those hrefs), same descriptions/features as the
// original flat catalog. Only the grouping and presentation changed.
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "website-development",
    navLabel: "Website Development",
    navIcon: Globe,
    eyebrow: "Website Development",
    title: "Websites built to load fast and convert",
    description:
      "From custom-coded marketing sites to WordPress builds your team can manage, every site starts with the platform that actually fits — not a default.",
    layout: "grid",
    tone: "light",
    services: [
      {
        id: "website-design",
        icon: LayoutTemplate,
        title: "Website Design",
        description:
          "Modern, responsive, and conversion-focused websites designed around your brand and business goals.",
        features: [
          "Custom UI/UX design",
          "Mobile-first layouts",
          "Brand-aligned visuals",
          "Conversion-focused structure",
        ],
        href: "/website-design",
      },
      {
        id: "wordpress-development",
        icon: Layers,
        title: "WordPress Development",
        description:
          "Professional WordPress websites that are easy to manage, responsive, fast, and SEO-friendly.",
        features: [
          "Custom WordPress themes",
          "Plugin setup & integrations",
          "Fast, SEO-friendly builds",
          "Easy content editing",
        ],
      },
      {
        id: "nextjs-development",
        icon: Boxes,
        title: "Next.js Development",
        description:
          "High-performance websites and web applications built on the modern Next.js framework for speed and scale.",
        features: [
          "Server-rendered for speed & SEO",
          "Scalable architecture",
          "Fast page loads",
          "Built to grow",
        ],
      },
      {
        id: "react-development",
        icon: Atom,
        title: "React Development",
        description:
          "Interactive, fast, and engaging user interfaces built with the React library.",
        features: [
          "Interactive interfaces",
          "Reusable components",
          "Smooth interactions",
          "Works with any backend",
        ],
      },
      {
        id: "nodejs-development",
        icon: Server,
        title: "Node.js Development",
        description:
          "Secure backend systems, APIs, dashboards, and database-powered web platforms.",
        features: [
          "Custom APIs & integrations",
          "Secure backend architecture",
          "Database-powered platforms",
          "Admin dashboards & tools",
        ],
      },
      {
        id: "custom-html-websites",
        icon: FileCode,
        title: "Custom HTML Websites",
        description:
          "Lightweight, custom-coded websites with complete design flexibility and strong performance.",
        features: [
          "Hand-coded HTML, CSS & JS",
          "Lightweight, fast pages",
          "Full design flexibility",
          "No CMS overhead",
        ],
      },
      {
        id: "ecommerce-development",
        icon: ShoppingCart,
        title: "E-commerce Development",
        description:
          "Professional online stores with product management, secure payments, and a smooth customer experience.",
        features: [
          "Product & inventory management",
          "Secure payment integrations",
          "Optimized checkout",
          "Storefront branding",
        ],
      },
      {
        id: "landing-pages",
        icon: FileText,
        title: "Landing Pages",
        description:
          "Focused, high-converting landing pages built for campaigns, launches, and lead generation.",
        features: [
          "Conversion-focused layouts",
          "Fast, mobile-first builds",
          "A/B test-ready structure",
          "Built for paid & organic",
        ],
      },
      {
        id: "website-maintenance",
        icon: Wrench,
        title: "Website Maintenance",
        description:
          "Ongoing updates, monitoring, and support that keep your website secure, fast, and up to date.",
        features: [
          "Regular updates & backups",
          "Uptime & security monitoring",
          "Performance checkups",
          "Priority support",
        ],
      },
    ],
  },
  {
    slug: "web-apps-crm",
    navLabel: "Web Apps & CRM",
    navIcon: AppWindow,
    eyebrow: "Web Applications & CRM",
    title: "Custom software for how your business actually runs",
    description:
      "When a website isn't enough — dashboards, internal tools, and CRM systems built around your workflows, not a rigid template.",
    layout: "grid",
    tone: "tint",
    services: [
      {
        id: "web-applications",
        icon: AppWindow,
        title: "Web Applications",
        description:
          "Custom web applications that streamline how your business and customers get things done online.",
        features: [
          "Custom business logic",
          "Secure authentication",
          "Real-time data",
          "Built to scale",
        ],
      },
      {
        id: "saas-development",
        icon: Cloud,
        title: "SaaS Development",
        description:
          "Custom SaaS platforms with subscription billing, user accounts, and the features your product needs.",
        features: [
          "Multi-tenant architecture",
          "Subscription & billing",
          "User account management",
          "Scalable cloud infra",
        ],
      },
      {
        id: "customer-dashboards",
        icon: LayoutDashboard,
        title: "Customer Dashboards",
        description:
          "Self-serve dashboards where your customers can track orders, usage, and account details.",
        features: [
          "Real-time reporting",
          "Account self-service",
          "Role-based access",
          "Clean, intuitive UI",
        ],
      },
      {
        id: "admin-panels",
        icon: UserCog,
        title: "Admin Panels",
        description:
          "Internal admin tools that give your team full control over content, users, and operations.",
        features: [
          "Content & user management",
          "Role & permission controls",
          "Custom reporting views",
          "Built around your workflows",
        ],
      },
      {
        id: "api-development",
        icon: Plug,
        title: "API Development",
        description:
          "Secure, well-documented APIs that connect your website to the tools your business already uses.",
        features: [
          "RESTful API design",
          "Third-party integrations",
          "Auth & rate limiting",
          "Clear documentation",
        ],
      },
      {
        id: "crm-development",
        icon: LayoutDashboard,
        title: "CRM Development",
        description:
          "Custom CRM systems that keep your leads, customers, and sales pipeline organized in one place.",
        features: [
          "Custom CRM systems",
          "Lead & customer tracking",
          "Sales pipeline dashboards",
          "Team collaboration tools",
        ],
        href: "/services/crm-development",
      },
    ],
  },
  {
    slug: "ai-automation",
    navLabel: "AI & Automation",
    navIcon: Bot,
    eyebrow: "AI Solutions & Automation",
    title: "AI built into the business, not bolted on",
    description:
      "Chatbots and workflow automation that actually remove work from your team's week — scoped around a real process, not a generic \"AI package.\"",
    layout: "feature",
    tone: "dark",
    services: [
      {
        id: "ai-solutions",
        icon: Sparkles,
        title: "AI Solutions",
        description:
          "AI chatbots, automation, and smart tools built into your website to save time and grow revenue.",
        features: [
          "AI chatbots & virtual assistants",
          "Automated lead qualification",
          "AI-powered content & SEO tools",
          "Custom AI integrations",
        ],
      },
      {
        id: "business-automation",
        icon: Zap,
        title: "Business Automation",
        description:
          "Automated workflows that eliminate repetitive tasks and connect your everyday business tools.",
        features: [
          "Workflow automation",
          "Tool & app integrations",
          "Automated follow-ups",
          "Fewer manual errors",
        ],
      },
    ],
  },
  {
    slug: "seo-growth",
    navLabel: "SEO",
    navIcon: Search,
    eyebrow: "SEO & Organic Growth",
    title: "Search visibility that compounds",
    description:
      "Technical foundations and content strategy built for how search actually works today — not a checklist of tricks.",
    layout: "feature",
    tone: "light",
    services: [
      {
        id: "seo",
        icon: Search,
        title: "Search Engine Optimization",
        description:
          "Long-term, compounding organic growth through technical SEO, on-page optimization, and authoritative link building.",
        features: [
          "Technical SEO audits & fixes",
          "Keyword research & content strategy",
          "On-page & off-page optimization",
          "Local SEO for multi-location brands",
        ],
      },
      {
        id: "ai-powered-seo",
        icon: TrendingUp,
        title: "AI-Powered SEO",
        description:
          "AI-driven content, keyword, and technical recommendations that help you rank faster.",
        features: [
          "AI content & keyword research",
          "Automated technical SEO checks",
          "AI-assisted on-page optimization",
          "Ongoing ranking insights",
        ],
      },
    ],
  },
  {
    slug: "marketing-advertising",
    navLabel: "Marketing & Ads",
    navIcon: MousePointerClick,
    eyebrow: "Marketing & Advertising",
    title: "Demand generation across every channel that matters",
    description:
      "Paid, organic, and lifecycle marketing working from the same playbook — so traffic, leads, and retention aren't three separate conversations.",
    layout: "grid",
    tone: "tint",
    services: [
      {
        // Deliberately not "google-ads" / "-ads-" — generic ad-blocker
        // cosmetic filters (EasyList etc.) hide elements whose id/class
        // matches known ad-network container naming, and "google-ads"
        // matches that pattern closely enough to get hidden by default in
        // many blockers even though this is just a marketing-service card,
        // not an actual ad. The display title below is unaffected.
        id: "google-ppc",
        icon: MousePointerClick,
        title: "Google Ads",
        description:
          "Google Search and Shopping campaigns focused on generating qualified leads and sales.",
        features: [
          "Search & Shopping campaigns",
          "Keyword & bid strategy",
          "Conversion tracking",
          "Weekly optimization",
        ],
      },
      {
        // Same reasoning as "google-ppc" above — "meta-ads" reads as an
        // ad-network container id to generic ad-blocker filters.
        id: "meta-ppc",
        icon: Share2,
        title: "Meta Ads",
        description:
          "Facebook and Instagram ad campaigns that reach the right audience and drive results.",
        features: [
          "Facebook & Instagram ads",
          "Audience targeting & retargeting",
          "Creative testing",
          "Performance reporting",
        ],
      },
      {
        id: "social-media",
        icon: Share2,
        title: "Social Media Marketing",
        description:
          "Strategic content and community management that builds brand affinity and turns followers into paying customers.",
        features: [
          "Content calendars & production",
          "Community management",
          "Influencer partnerships",
          "Platform-specific strategy",
        ],
      },
      {
        id: "content-marketing",
        icon: PenTool,
        title: "Content Marketing",
        description:
          "SEO-driven blog content, video, and lead magnets that establish authority and keep your funnel full.",
        features: [
          "Blog & article writing",
          "Video & short-form content",
          "Lead magnets & gated content",
          "Content distribution strategy",
        ],
      },
      {
        id: "email-marketing",
        icon: Mail,
        title: "Email & Lifecycle Marketing",
        description:
          "Automated flows and campaigns that nurture leads, reduce churn, and drive repeat revenue.",
        features: [
          "Welcome & nurture sequences",
          "Abandoned cart & win-back flows",
          "Newsletter strategy & design",
          "List segmentation",
        ],
      },
      {
        id: "conversion-optimization",
        icon: BarChart3,
        title: "Conversion Optimization",
        description:
          "Full-funnel tracking and conversion rate optimization so every dollar you spend is accounted for.",
        features: [
          "Analytics & tracking setup",
          "Custom reporting dashboards",
          "Landing page A/B testing",
          "Funnel & conversion audits",
        ],
      },
    ],
  },
];

export function getAllServices(): ServiceItem[] {
  return SERVICE_CATEGORIES.flatMap((category) => category.services);
}
