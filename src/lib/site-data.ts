export type ServiceSlug =
  | "informational-website-development"
  | "local-seo-services"
  | "google-business-profile-optimization"
  | "content-creation"
  | "website-maintenance"
  | "logo-brand-design"
  | "google-search-console-setup"
  | "website-redesign-services";

export interface Service {
  slug: ServiceSlug;
  title: string;
  short: string;
  description: string;
  icon: string;
  image: string;
  related: ServiceSlug[];
}

export const SERVICES: Service[] = [
  {
    slug: "informational-website-development",
    title: "Informational Website Development",
    short: "Fast, mobile-first websites that turn visitors into customers.",
    description:
      "Beautifully designed, SEO-ready informational websites for small businesses — starting at just ₹6,000.",
    icon: "Globe",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=80",
    related: [
      "local-seo-services",
      "website-maintenance",
      "google-search-console-setup",
      "website-redesign-services",
    ],
  },
  {
    slug: "local-seo-services",
    title: "Local SEO Services",
    short: "Rank higher on Google Maps and local searches.",
    description:
      "Drive qualified local traffic with expert on-page, technical, and citation-based local SEO.",
    icon: "MapPin",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    related: [
      "google-business-profile-optimization",
      "content-creation",
      "informational-website-development",
    ],
  },
  {
    slug: "google-business-profile-optimization",
    title: "Google Business Profile Optimization",
    short: "Get discovered on Google Maps and local searches.",
    description:
      "Full GBP setup, optimization, and management to bring more calls, direction requests, and reviews.",
    icon: "MapPinned",
    image: "/google-business-profile.jpg",
    related: ["local-seo-services", "content-creation"],
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    short: "SEO-optimized content that ranks and converts.",
    description:
      "Website copy, blogs, and service pages written to rank on Google and convert readers into customers.",
    icon: "PenLine",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
    related: [
      "local-seo-services",
      "informational-website-development",
      "google-business-profile-optimization",
    ],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    short: "Keep your website fast, secure, and up to date.",
    description:
      "Ongoing updates, backups, security patches, and performance tuning — so your site never lets you down.",
    icon: "Wrench",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    related: [
      "informational-website-development",
      "website-redesign-services",
      "google-search-console-setup",
    ],
  },
  {
    slug: "logo-brand-design",
    title: "Logo & Brand Design",
    short: "Memorable identities for growing brands.",
    description:
      "Custom logo design, brand systems, and visual identities that make your business unforgettable.",
    icon: "Palette",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1600&q=80",
    related: ["informational-website-development", "website-redesign-services"],
  },
  {
    slug: "google-search-console-setup",
    title: "Google Search Console Setup",
    short: "Track, monitor, and improve your Google presence.",
    description:
      "Complete Search Console setup, sitemap submission, and indexing so Google finds every page.",
    icon: "LineChart",
    image: "/google-search-console.jpg",
    related: [
      "local-seo-services",
      "informational-website-development",
      "website-maintenance",
    ],
  },
  {
    slug: "website-redesign-services",
    title: "Website Redesign Services",
    short: "Refresh your outdated website into a lead-generating machine.",
    description:
      "Modern redesigns that improve speed, SEO, and conversions without losing your existing rankings.",
    icon: "Sparkles",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80",
    related: [
      "website-maintenance",
      "informational-website-development",
      "logo-brand-design",
    ],
  },
];

export const getService = (slug: ServiceSlug) =>
  SERVICES.find((s) => s.slug === slug)!;

export const CONTACT = {
  phone: "+91 8290079076",
  phoneHref: "tel:+918290079076",
  email: "support@bytechwave.com",
  emailHref: "mailto:support@bytechwave.com",
  whatsapp: "https://wa.me/918290079076",
};

export const INDUSTRIES = [
  { name: "Construction", icon: "HardHat" },
  { name: "Home Services", icon: "Home" },
  { name: "Roofing", icon: "Warehouse" },
  { name: "Plumbing", icon: "Droplets" },
  { name: "Cleaning", icon: "Sparkles" },
  { name: "Real Estate", icon: "Building2" },
  { name: "Healthcare", icon: "Stethoscope" },
  { name: "Restaurants", icon: "UtensilsCrossed" },
  { name: "Local Businesses", icon: "Store" },
  { name: "Professional Services", icon: "Briefcase" },
];
