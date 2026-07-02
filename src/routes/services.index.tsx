import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { ServicesGrid } from "@/components/site/sections";
import { CTASection } from "@/components/site/CTASection";
import socialAsset from "@/assets/bytechwave-social.png.asset.json";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services — ByTech Wave Digital Marketing" },
      { name: "description", content: "Explore all ByTech Wave services: website development, Local SEO, Google Business Profile optimization, content creation, and more." },
      { property: "og:title", content: "Our Services — ByTech Wave" },
      { property: "og:description", content: "Websites, SEO, and marketing services for small businesses." },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: socialAsset.url },
      { property: "twitter:image", content: socialAsset.url },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <AnimatedBackground variant="soft" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block rounded-full glass px-4 py-1 text-xs font-semibold uppercase tracking-wider">Services</span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-black">
            Digital marketing services that <span className="text-gradient-hero">drive real results</span>
          </h1>
          <p className="mt-5 text-muted-foreground text-lg">
            From beautifully designed websites to Local SEO and Google Business Profile optimization — we deliver everything your business needs to win online.
          </p>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServicesGrid />
        </div>
      </section>
      <CTASection />
    </>
  );
}
