import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SERVICES, getService, type ServiceSlug } from "@/lib/site-data";
import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { Reveal } from "@/components/site/motion-primitives";
import { FeatureList, StatsSection, FAQSection, RelatedServices, IndustriesSection } from "@/components/site/sections";
import { CTASection } from "@/components/site/CTASection";
import { CONTACT } from "@/lib/site-data";
import { Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICE_CONTENT } from "@/lib/service-content";
import socialAsset from "@/assets/bytechwave-social.png.asset.json";

const validSlugs = new Set(SERVICES.map((s) => s.slug));

const WHY_IMAGES: Record<ServiceSlug, string> = {
  "informational-website-development": "/why-website-development.jpg",
  "local-seo-services": "/local-seo-ui.jpg",
  "google-business-profile-optimization": "/why-google-business-profile.jpg",
  "content-creation": "/why-content-creation.jpg",
  "website-maintenance": "/why-maintenance.jpg",
  "logo-brand-design": "/why-branding.jpg",
  "google-search-console-setup": "/why-google-search-console.jpg",
  "website-redesign-services": "/why-redesign.jpg",
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    if (!validSlugs.has(params.slug as ServiceSlug)) throw notFound();
    return { slug: params.slug as ServiceSlug };
  },
  head: ({ params }) => {
    if (!validSlugs.has(params.slug as ServiceSlug)) return { meta: [{ title: "Not Found" }] };
    const s = getService(params.slug as ServiceSlug);
    return {
      meta: [
        { title: `${s.title} — ByTech Wave` },
        { name: "description", content: s.description },
        { property: "og:title", content: `${s.title} — ByTech Wave` },
        { property: "og:description", content: s.description },
        { property: "og:image", content: socialAsset.url },
        { property: "twitter:image", content: socialAsset.url },
        { property: "og:url", content: `/services/${s.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="text-center">
        <h1 className="font-display text-3xl font-black">Service not found</h1>
        <Link to="/services" className="mt-4 inline-flex text-primary underline">View all services</Link>
      </div>
    </div>
  ),
});

function ServicePage() {
  const { slug } = Route.useLoaderData() as { slug: ServiceSlug };
  const s = getService(slug);
  const content = SERVICE_CONTENT[slug];

  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32">
        <AnimatedBackground />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold">Service</span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              {s.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">{content.intro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-bold text-white shadow-elegant hover:scale-105 transition-transform">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href={CONTACT.emailHref} className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-accent-glow hover:scale-105 transition-transform">
                <Mail className="h-4 w-4" /> Get a Quote
              </a>
            </div>
          </div>
          <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-elegant">
            <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-accent/20" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">Benefits</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-black">
                Key benefits of <span className="text-gradient-primary">{s.title}</span>
              </h2>
              <p className="mt-3 text-muted-foreground">{content.whyMatters}</p>
            </div>
          </Reveal>
          <div className="mt-10">
            <FeatureList items={content.benefits} />
          </div>
        </div>
      </section>

      {/* Detailed content */}
      <section className="py-24 bg-gradient-soft">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div>
              <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold text-accent uppercase tracking-wider">Detailed Overview</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-black">
                What our {s.title.toLowerCase()} includes
              </h2>
            </div>
          </Reveal>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            {content.detailed.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          {content.internalLinks && content.internalLinks.length > 0 && (
            <div className="mt-8 rounded-2xl bg-card p-6 shadow-card">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">Explore Related</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {content.internalLinks.map((link) => {
                  const target = getService(link.slug);
                  return (
                    <Link
                      key={link.slug}
                      to="/services/$slug"
                      params={{ slug: link.slug }}
                      className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      {link.label ?? target.title} <ArrowRight className="h-3 w-3" />
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">Process</span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-black">
                Our proven <span className="text-gradient-primary">approach</span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.05}>
                <div className="group relative h-full rounded-3xl bg-card p-8 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1 border border-transparent hover:border-primary/20">
                  <div className="text-6xl font-black text-gradient-primary opacity-80">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold text-accent uppercase tracking-wider">Why Us</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-black">
                Why choose ByTech Wave for {s.title.toLowerCase()}
              </h2>
              <p className="mt-4 text-muted-foreground">{content.whyChoose}</p>
              <ul className="mt-6 space-y-3">
                {content.whyChoosePoints.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={WHY_IMAGES[s.slug]}
                alt={`${s.title} — ByTech Wave`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <IndustriesSection />
      <StatsSection />
      <FAQSection items={content.faqs} />
      <RelatedServices slugs={s.related} />
      <CTASection
        title={`Ready to get started with ${s.title}?`}
        subtitle="Talk to ByTech Wave today and get a free consultation for your business."
      />
    </>
  );
}
