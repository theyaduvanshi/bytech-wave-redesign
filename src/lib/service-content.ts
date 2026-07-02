import type { ServiceSlug } from "./site-data";

export interface ServiceContent {
  intro: string;
  whyMatters: string;
  benefits: string[];
  detailed: string[];
  process: { title: string; desc: string }[];
  whyChoose: string;
  whyChoosePoints: string[];
  faqs: { q: string; a: string }[];
  internalLinks?: { slug: ServiceSlug; label?: string }[];
}

const commonWhyChoose = [
  "Affordable, transparent pricing",
  "Fast turnaround times",
  "Personalized, human support",
  "SEO-first mindset baked into every project",
  "Proven results across 300+ businesses",
  "Ongoing partnership, not one-and-done",
];

export const SERVICE_CONTENT: Record<ServiceSlug, ServiceContent> = {
  "informational-website-development": {
    intro: "Beautifully designed, fast, mobile-first informational websites for small businesses — starting at just ₹6,000 ($64). Perfect for establishing your online presence and generating leads from day one.",
    whyMatters: "In today's digital-first world, your website is your business's most important marketing asset. It works 24/7 to introduce your business, build trust, and turn visitors into paying customers — long after your team has gone home.",
    benefits: [
      "Mobile-first responsive design",
      "Lightning-fast page speeds",
      "Built-in SEO best practices",
      "Contact forms and click-to-call CTAs",
      "Google Analytics ready",
      "Secure HTTPS with SSL certificate",
      "Social media integration",
      "Easy content updates",
    ],
    detailed: [
      "Our informational website development service is designed for small and local businesses that want a strong online presence without the enterprise price tag. Every website we build combines beautiful design, fast performance, and SEO-optimized structure so you can start showing up on Google, WhatsApp shares, and Google Business Profile links from day one.",
      "We start with a discovery conversation to understand your business, your audience, and your goals. From there we build a site map, gather your brand assets, and design a modern layout that reflects your brand personality. Each page is built to load in under two seconds, look flawless on mobile, and rank on Google for the searches your customers are actually making.",
      "Every informational website we deliver includes a home page, about section, services or menu section, contact page, and click-to-call buttons that make it dead-simple for a potential customer to reach you. We add schema markup, Open Graph tags, and semantic HTML so your listings look great on Google and social media previews.",
      "Once your website is live, we don't disappear. We include free minor edits for the first month and offer affordable Website Maintenance plans to keep everything running smoothly. Pair your new site with our Local SEO Services and Google Search Console Setup to accelerate rankings, or add a Website Redesign later as your business grows. Everything we build is designed to scale with you.",
    ],
    process: [
      { title: "Discovery", desc: "We learn about your business, audience, and goals." },
      { title: "Design", desc: "Custom, mobile-first mockups that reflect your brand." },
      { title: "Development", desc: "Clean code, fast load times, and full SEO structure." },
      { title: "Content Setup", desc: "We help you write and organize your website copy." },
      { title: "Launch", desc: "We deploy your site with SSL, analytics, and tracking." },
      { title: "Support", desc: "Ongoing maintenance, updates, and improvements." },
    ],
    whyChoose: "ByTech Wave is the trusted website development partner for hundreds of small businesses. We combine premium design, honest pricing, and a real understanding of Local SEO — so your website doesn't just look great, it actually earns you customers.",
    whyChoosePoints: commonWhyChoose,
    faqs: [
      { q: "How much does an informational website cost?", a: "Our informational websites start at just ₹6,000 ($64). Larger custom sites are priced based on scope." },
      { q: "How long does it take?", a: "Most sites are delivered within 5–10 business days once we have your content and images." },
      { q: "Will my website be SEO-friendly?", a: "Yes. Every website is built with clean HTML, fast load times, and on-page SEO best practices." },
      { q: "Do I own my website?", a: "100%. You own your domain, hosting account, and all content." },
      { q: "Can I edit my website myself?", a: "Yes — we can set you up with a simple CMS or provide affordable ongoing updates through maintenance plans." },
      { q: "Do you offer hosting?", a: "We can recommend affordable hosting or handle it end-to-end for you." },
    ],
    internalLinks: [
      { slug: "local-seo-services" },
      { slug: "website-maintenance" },
      { slug: "google-search-console-setup" },
      { slug: "website-redesign-services" },
    ],
  },

  "local-seo-services": {
    intro: "Rank higher on Google Maps, the local pack, and location-based searches. Our Local SEO services drive real customers straight to your business.",
    whyMatters: "97% of consumers search online before choosing a local business. If you're not in the top three Google results, you're invisible to the majority of buyers in your area — Local SEO fixes that.",
    benefits: [
      "Higher Google Maps rankings",
      "More calls, direction requests, and bookings",
      "Local pack visibility for your keywords",
      "Consistent NAP citations across the web",
      "Optimized Google Business Profile",
      "On-page SEO for local intent",
      "Review generation strategy",
      "Monthly reporting and insights",
    ],
    detailed: [
      "Local SEO is the single highest-ROI marketing channel for most small businesses. Unlike traditional advertising, Local SEO brings in customers who are actively searching for what you offer — right now, near you. Our Local SEO service is built around the same signals Google uses to rank businesses in the map pack: relevance, proximity, and prominence.",
      "We start with a full audit of your current online presence — your website, Google Business Profile, citations, reviews, and competitor landscape. From there we build a customized plan to close the gaps, optimize what's working, and grow your visibility for the searches that matter in your service area.",
      "Our work spans on-page optimization (title tags, meta descriptions, schema, service pages), off-page SEO (citations, backlinks, review generation), and Google Business Profile Optimization — the three pillars that consistently produce top-three map rankings for our clients. We also handle keyword research to make sure we're targeting the queries that actually generate calls and revenue.",
      "Local SEO works best when paired with a solid website foundation. If you haven't yet, explore our Informational Website Development to get a fast, SEO-ready site, or our Content Creation service for the location-optimized service pages and blog posts that fuel long-term ranking growth. Ranking locally is a long game, and ByTech Wave plays it to win.",
    ],
    process: [
      { title: "Audit", desc: "We analyze your current rankings, competitors, and opportunities." },
      { title: "Strategy", desc: "A custom local SEO plan built around your service area." },
      { title: "On-page SEO", desc: "Title tags, schema, service pages, and internal linking." },
      { title: "GBP Optimization", desc: "Full Google Business Profile setup and optimization." },
      { title: "Citations & Reviews", desc: "Consistent NAP, quality citations, and review growth." },
      { title: "Reporting", desc: "Monthly reports showing rankings, calls, and ROI." },
    ],
    whyChoose: "ByTech Wave specializes in Local SEO for small and service-based businesses. We know what it takes to reach the top three of Google Maps in competitive local markets — and we do it without shady tactics or long-term lock-ins.",
    whyChoosePoints: commonWhyChoose,
    faqs: [
      { q: "How long does Local SEO take?", a: "Most clients see meaningful movement within 60–90 days, with major ranking gains in 3–6 months." },
      { q: "Do you guarantee #1 rankings?", a: "No ethical SEO can guarantee rankings. We do guarantee transparent work, real strategies, and measurable progress." },
      { q: "What areas do you serve?", a: "We work with businesses across India and internationally." },
      { q: "Do I need a Google Business Profile?", a: "Yes — and we'll optimize it as part of the service." },
      { q: "Do you handle content too?", a: "Yes. Content Creation is available as an add-on or bundled service." },
    ],
    internalLinks: [
      { slug: "google-business-profile-optimization" },
      { slug: "content-creation" },
      { slug: "informational-website-development" },
    ],
  },

  "google-business-profile-optimization": {
    intro: "Own the Google Map Pack with a fully optimized Google Business Profile. Get more calls, more direction requests, and more customers — for free.",
    whyMatters: "Your Google Business Profile is often the first impression a potential customer has of your business. A fully optimized listing can be the difference between hundreds of monthly calls and zero visibility.",
    benefits: [
      "Higher rankings in Google Maps and local pack",
      "More phone calls and website clicks",
      "Direction requests from nearby customers",
      "Star ratings that build instant trust",
      "Professional photos and posts",
      "Review generation and response strategy",
      "Product and service listings",
      "Insights and monthly reporting",
    ],
    detailed: [
      "Google Business Profile (formerly Google My Business) is arguably the most valuable free marketing tool available to any local business. A properly optimized profile can outperform your website in generating leads — and it's the primary driver of visibility in the Google Map Pack and local searches.",
      "Our Google Business Profile Optimization service is a full-service, ongoing engagement. We start with a comprehensive audit and optimization of your existing profile — categories, services, attributes, business description, opening hours, and photos. We add professional service descriptions, product listings, and Q&A entries that address the most common customer concerns.",
      "We also implement a systematic review generation strategy that helps you steadily grow authentic 5-star reviews from happy customers, plus a professional response protocol so both positive and negative reviews are handled with care. Weekly Google Posts, updated photos, and rich media keep your profile fresh — a signal Google's algorithm rewards with higher rankings.",
      "Google Business Profile Optimization works best when paired with Local SEO Services and Content Creation. Together, these services form the complete local search stack that consistently puts our clients in the top three of Google Maps for their most valuable keywords.",
    ],
    process: [
      { title: "Audit", desc: "Full assessment of your current profile and competitors." },
      { title: "Setup / Cleanup", desc: "Categories, services, hours, attributes, and description." },
      { title: "Media", desc: "Professional photos, videos, and cover imagery." },
      { title: "Content", desc: "Weekly posts, Q&A, offers, and product listings." },
      { title: "Reviews", desc: "Review generation campaigns and response management." },
      { title: "Reporting", desc: "Monthly insights on calls, searches, and actions." },
    ],
    whyChoose: "We've optimized hundreds of Google Business Profiles for local businesses and know exactly which levers move the needle. Our clients consistently see 40–200% more calls and direction requests within 60 days.",
    whyChoosePoints: commonWhyChoose,
    faqs: [
      { q: "Can you set up a new Google Business Profile?", a: "Yes — we handle setup, verification, and full optimization from scratch." },
      { q: "How long until I see results?", a: "Most clients see call volume improve within 4–8 weeks of full optimization." },
      { q: "Do you write posts and manage the profile?", a: "Yes. Ongoing plans include weekly Google Posts and monthly review response." },
      { q: "Can you help suspended profiles?", a: "In most cases, yes. Reach out and we'll assess your situation." },
      { q: "Is this a one-time or ongoing service?", a: "Both. Many clients start with a one-time optimization and add ongoing management later." },
    ],
    internalLinks: [
      { slug: "local-seo-services" },
      { slug: "content-creation" },
    ],
  },

  "content-creation": {
    intro: "SEO-optimized website copy, blog posts, and service pages written to rank on Google and convert readers into paying customers.",
    whyMatters: "Google rewards websites that publish helpful, keyword-optimized content consistently. Great content is what turns your website from a digital brochure into a lead-generating machine.",
    benefits: [
      "Keyword-optimized website copy",
      "Long-form blog posts that rank",
      "Location-specific service pages",
      "Compelling calls-to-action",
      "Meta titles and descriptions",
      "Schema markup and internal linking",
      "Original, human-written content",
      "Regular publishing cadence",
    ],
    detailed: [
      "Content is the fuel that powers modern SEO. Without regular, high-quality, keyword-focused content, your website will struggle to rank — no matter how beautiful the design or how technically sound the build. Our Content Creation service is built specifically for small and local businesses that want to compete on Google without hiring a full-time writer.",
      "Every piece of content we produce starts with deep keyword research. We identify the terms your customers are actually searching, analyze the top-ranking competitors, and build a content brief that gives us the best chance of ranking. Then our writers craft original, human-first content — never generic AI slop — that reads naturally and satisfies the search intent.",
      "We create website copy, service pages, location pages, FAQs, blog posts, and case studies. Every piece is optimized with proper H1/H2/H3 structure, semantic HTML, internal linking to your other pages, meta descriptions, and Open Graph tags. When paired with strong Local SEO Services, our content consistently earns first-page rankings for competitive local terms.",
      "Content also feeds your Google Business Profile Optimization. We repurpose long-form content into Google Posts, FAQ entries, and social snippets so nothing is wasted. Everything works together — that's the ByTech Wave approach.",
    ],
    process: [
      { title: "Keyword Research", desc: "We identify the terms your customers search." },
      { title: "Content Brief", desc: "Detailed outlines with intent, structure, and CTAs." },
      { title: "Writing", desc: "Original, human-first content by expert writers." },
      { title: "SEO Optimization", desc: "Meta tags, schema, internal links, and structure." },
      { title: "Publishing", desc: "We upload, format, and publish to your website." },
      { title: "Refresh", desc: "Regular updates to keep rankings strong." },
    ],
    whyChoose: "Our content is written by real humans who understand SEO, local search, and how small businesses talk to customers. No fluff, no filler — just content that ranks and converts.",
    whyChoosePoints: commonWhyChoose,
    faqs: [
      { q: "Do you use AI to write content?", a: "We use AI as a research assistant, but all published content is written and edited by real humans." },
      { q: "How much content do I need?", a: "Most local businesses do best with 2–4 quality blog posts or service pages per month." },
      { q: "Can you handle images too?", a: "Yes — we can source or generate royalty-free images for every piece." },
      { q: "Will the content actually rank?", a: "Content combined with proper Local SEO consistently ranks. We share monthly reporting so you can see it happen." },
      { q: "Can I request specific topics?", a: "Absolutely. We build a joint content calendar with you every month." },
    ],
    internalLinks: [
      { slug: "local-seo-services" },
      { slug: "informational-website-development" },
      { slug: "google-business-profile-optimization" },
    ],
  },

  "website-maintenance": {
    intro: "Keep your website fast, secure, and up-to-date with proactive maintenance from ByTech Wave. Peace of mind, priced for small business.",
    whyMatters: "An unmaintained website is a security risk, an SEO liability, and a lost-sales generator. Regular maintenance keeps your site fast, secure, and continuously converting.",
    benefits: [
      "Regular software and plugin updates",
      "Automatic daily backups",
      "Security monitoring and malware scanning",
      "Uptime monitoring 24/7",
      "Performance optimization",
      "Content updates included",
      "Broken link and SEO health checks",
      "Priority support",
    ],
    detailed: [
      "Building a website is only half the job — keeping it running smoothly is the other half. Every website needs regular software updates, security patches, backups, and performance monitoring to stay competitive on Google and safe from hackers. Our Website Maintenance service handles all of it, so you can focus on running your business.",
      "Our maintenance plans cover everything from core software and plugin updates to daily backups stored securely off-site, malware scanning, uptime monitoring, and performance audits. If something breaks, we fix it — usually before you even notice. If Google Core Web Vitals scores start slipping, we tune them back up. If a plugin becomes a security risk, we replace it proactively.",
      "Every maintenance plan includes a monthly allotment of content updates so you can keep hours, images, service pages, and specials fresh without paying extra. Larger changes are billed at transparent hourly rates or bundled into a bigger project like a Website Redesign.",
      "Website Maintenance pairs naturally with Informational Website Development, Google Search Console Setup, and Website Redesign Services. Together, they form a complete lifecycle — build it, launch it, maintain it, and evolve it. That's how we help small businesses compound their online presence over time.",
    ],
    process: [
      { title: "Onboarding", desc: "Full audit of your current site, tech stack, and risks." },
      { title: "Backups", desc: "Automated daily off-site backups on day one." },
      { title: "Updates", desc: "Weekly plugin, theme, and core updates in a staging environment." },
      { title: "Monitoring", desc: "24/7 uptime and security monitoring." },
      { title: "Optimization", desc: "Monthly performance and SEO health checks." },
      { title: "Reporting", desc: "Monthly maintenance and health reports." },
    ],
    whyChoose: "Website Maintenance from ByTech Wave is proactive, not reactive. We prevent problems before they cost you customers — and if something ever does break, we're on it fast.",
    whyChoosePoints: commonWhyChoose,
    faqs: [
      { q: "Can you maintain sites you didn't build?", a: "Yes — we audit and onboard existing WordPress, Webflow, and custom sites." },
      { q: "What's included in a content update?", a: "Text changes, image swaps, new pages, product/service updates, hours, and more." },
      { q: "How quickly do you respond?", a: "Priority requests are usually addressed within one business day." },
      { q: "Do you host websites?", a: "We can recommend and manage hosting on your behalf if needed." },
      { q: "Can I cancel anytime?", a: "Yes. No long-term contracts — month-to-month plans." },
    ],
    internalLinks: [
      { slug: "informational-website-development" },
      { slug: "website-redesign-services" },
      { slug: "google-search-console-setup" },
    ],
  },

  "logo-brand-design": {
    intro: "Custom logos and brand identity systems that make your small business look big. Memorable, professional, and built to scale.",
    whyMatters: "Your logo and brand identity are the visual promise you make to customers. A polished, consistent brand builds instant credibility and dramatically increases perceived value.",
    benefits: [
      "Custom, original logo designs",
      "Multiple concepts to choose from",
      "Full color palette and typography system",
      "Brand guidelines document",
      "Print and web ready files",
      "Social media profile assets",
      "Business card and stationery design",
      "Unlimited revisions until you love it",
    ],
    detailed: [
      "Great branding is more than a pretty logo — it's a complete visual system that makes your business instantly recognizable. Our Logo & Brand Design service delivers a professional identity you'll be proud to put on your website, business cards, storefront, and Google Business Profile.",
      "We begin with a brand discovery session to understand your business, your customers, your competitors, and the personality you want to project. From there we develop three distinct logo concepts, each with a supporting color palette, typography pairing, and mockup showing how the identity comes to life across real touchpoints.",
      "Once you choose a direction, we refine it to perfection and deliver a full brand kit — vector files (SVG, PDF, EPS), raster files (PNG, JPG), a color and typography guide, social media avatars and covers, and business card templates. Everything you need to launch or relaunch your brand with confidence.",
      "A strong brand pairs beautifully with a professional website. If you're ready to modernize your online presence, explore our Informational Website Development or Website Redesign Services to make sure your digital storefront matches the quality of your new identity.",
    ],
    process: [
      { title: "Discovery", desc: "Brand personality, competitors, and audience." },
      { title: "Moodboard", desc: "Visual direction and inspiration." },
      { title: "Concepts", desc: "Three distinct logo directions with mockups." },
      { title: "Refinement", desc: "Iterations on your chosen direction." },
      { title: "Brand Kit", desc: "Full delivery of files, guidelines, and assets." },
      { title: "Launch", desc: "Rollout across your website and marketing." },
    ],
    whyChoose: "We design brands that punch above their weight. Whether you're a solo trades business or a growing local company, we make you look like the professional you already are.",
    whyChoosePoints: commonWhyChoose,
    faqs: [
      { q: "How many logo concepts do I get?", a: "Three distinct directions, each with mockups. Unlimited revisions on the chosen direction." },
      { q: "What files will I receive?", a: "Vector (SVG, PDF, EPS) and raster (PNG, JPG) in multiple color variants." },
      { q: "How long does it take?", a: "Most logo projects are complete within 10–14 business days." },
      { q: "Do you design just logos or full brands?", a: "Both. We offer standalone logos or complete brand identity systems." },
      { q: "Can you redesign my existing logo?", a: "Yes — refreshes and full rebrands are both available." },
    ],
    internalLinks: [
      { slug: "informational-website-development" },
      { slug: "website-redesign-services" },
    ],
  },

  "google-search-console-setup": {
    intro: "Full Google Search Console setup, sitemap submission, and ongoing monitoring so Google finds, indexes, and ranks every page of your website.",
    whyMatters: "If Google can't find or crawl your pages, they can't rank — no matter how great the content. Search Console is the direct line of communication between your website and Google's index.",
    benefits: [
      "Property verification and setup",
      "XML sitemap generation and submission",
      "Indexing coverage monitoring",
      "Core Web Vitals reporting",
      "Mobile usability audits",
      "Search performance insights",
      "Manual action monitoring",
      "Structured data validation",
    ],
    detailed: [
      "Google Search Console is the single most important free tool for any website owner serious about SEO. It shows you exactly which pages Google has indexed, what searches you're appearing for, where your Core Web Vitals stand, and whether there are any technical issues holding you back. Yet most small business owners never set it up — or set it up incorrectly.",
      "Our Google Search Console Setup service handles the entire process end-to-end. We verify your property, generate and submit an XML sitemap, request indexing for your critical pages, and configure alerts so you know immediately if anything breaks. We also cross-connect Search Console with Google Analytics for richer keyword insights.",
      "Beyond setup, we perform a full indexing audit — checking for pages that Google isn't crawling, duplicate content issues, broken structured data, mobile usability problems, and Core Web Vitals opportunities. You'll leave with a clean, fully indexed website and a monthly Search Console report showing your progress.",
      "Search Console works best in combination with a fast, well-built website and consistent content. Explore our Informational Website Development, Website Maintenance, and Local SEO Services to build a complete SEO foundation that maximizes everything Search Console reveals.",
    ],
    process: [
      { title: "Verification", desc: "Confirm ownership via DNS or file upload." },
      { title: "Sitemap", desc: "Generate and submit an XML sitemap." },
      { title: "Indexing Audit", desc: "Identify pages Google isn't crawling." },
      { title: "Fixes", desc: "Resolve crawl errors, duplicates, and blocks." },
      { title: "Enhancements", desc: "Core Web Vitals, mobile, and structured data." },
      { title: "Reporting", desc: "Monthly performance and indexing reports." },
    ],
    whyChoose: "We've set up Google Search Console for hundreds of small business websites and know exactly which settings, filters, and integrations produce the most useful insights fastest.",
    whyChoosePoints: commonWhyChoose,
    faqs: [
      { q: "Do I already need a website?", a: "Yes — Search Console is set up on an existing live website." },
      { q: "Will this improve my rankings?", a: "Search Console itself doesn't rank pages, but fixing issues it reveals typically does." },
      { q: "How long does setup take?", a: "Verification is same-day. A full audit takes 2–3 business days." },
      { q: "Do you also set up Google Analytics?", a: "Yes — we can bundle GA4 setup and integration." },
      { q: "Is this a one-time or ongoing service?", a: "Both. Most clients start with setup, then add ongoing SEO monitoring." },
    ],
    internalLinks: [
      { slug: "local-seo-services" },
      { slug: "informational-website-development" },
      { slug: "website-maintenance" },
    ],
  },

  "website-redesign-services": {
    intro: "Transform your outdated website into a modern, fast, lead-generating machine — without losing your existing Google rankings.",
    whyMatters: "An outdated website silently costs you customers every day. A modern, mobile-first redesign can double your conversion rate and dramatically improve your Google visibility in weeks, not years.",
    benefits: [
      "Modern, mobile-first design",
      "Dramatically faster page speeds",
      "Improved conversion rates",
      "Preserved SEO rankings via redirects",
      "New content and imagery",
      "Updated brand identity",
      "SEO-first information architecture",
      "Analytics and tracking rebuilt",
    ],
    detailed: [
      "If your current website is more than three years old, chances are it's holding your business back. Design trends have shifted, mobile usage has exploded, Google's ranking factors have evolved, and customer expectations are higher than ever. Our Website Redesign Services turn tired, underperforming websites into modern, high-converting digital experiences.",
      "We start with a full audit of your current site — what's working, what isn't, which pages carry SEO value, and which conversion opportunities you're missing. Then we design a fresh, brand-aligned experience with modern typography, imagery, and interactions, built on a fast, SEO-optimized foundation.",
      "SEO preservation is central to every redesign. We map every existing URL, plan 301 redirects, preserve high-performing content, and coordinate with Google Search Console so your rankings not only survive the migration but usually improve after it. Most of our redesign clients see traffic increases within 60–90 days.",
      "A redesign is the perfect moment to level up other parts of your marketing too. Pair with Website Maintenance to keep the new site fast, Informational Website Development thinking for new landing pages, or Logo & Brand Design if your visual identity also needs a refresh. Everything ByTech Wave does compounds.",
    ],
    process: [
      { title: "Audit", desc: "Full review of current design, SEO, and conversions." },
      { title: "Strategy", desc: "New site map, content plan, and SEO migration plan." },
      { title: "Design", desc: "Modern, mobile-first mockups aligned to your brand." },
      { title: "Build", desc: "Fast, SEO-ready development in a staging environment." },
      { title: "Migration", desc: "301 redirects, sitemap update, and QA." },
      { title: "Launch & Monitor", desc: "Post-launch SEO monitoring and tuning." },
    ],
    whyChoose: "Website redesigns are risky when done wrong — lost rankings, broken links, and traffic drops. We do them right, with SEO preservation baked into every step so your business only moves forward.",
    whyChoosePoints: commonWhyChoose,
    faqs: [
      { q: "Will I lose my Google rankings?", a: "Not when done right. We map every URL, set 301 redirects, and monitor Search Console during and after launch." },
      { q: "How long does a redesign take?", a: "Most redesigns take 4–8 weeks depending on scope and content." },
      { q: "Can you keep my current CMS?", a: "Yes — we work with WordPress, Webflow, Shopify, and custom platforms." },
      { q: "Do you also handle new content?", a: "Yes. Pair with our Content Creation service for a full content refresh." },
      { q: "What if I need ongoing help after launch?", a: "Add Website Maintenance to keep everything secure, fast, and up-to-date." },
    ],
    internalLinks: [
      { slug: "website-maintenance" },
      { slug: "informational-website-development" },
      { slug: "logo-brand-design" },
    ],
  },
};
