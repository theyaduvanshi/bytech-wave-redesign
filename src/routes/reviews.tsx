import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { Reveal } from "@/components/site/motion-primitives";
import { TESTIMONIALS } from "@/components/site/sections";
import { CTASection } from "@/components/site/CTASection";
import { Star, Quote } from "lucide-react";
import socialAsset from "@/assets/bytechwave-social.png.asset.json";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews — ByTech Wave" },
      { name: "description", content: "Read what small business owners are saying about ByTech Wave's website design, Local SEO, and Google Business Profile optimization services." },
      { property: "og:title", content: "Client Reviews — ByTech Wave" },
      { property: "og:description", content: "Real reviews from small businesses growing with ByTech Wave." },
      { property: "og:url", content: "/reviews" },
      { property: "og:image", content: socialAsset.url },
      { property: "twitter:image", content: socialAsset.url },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32">
        <AnimatedBackground />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block rounded-full glass px-4 py-1 text-xs font-semibold uppercase tracking-wider">Reviews</span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-black">
            What our clients <span className="text-gradient-hero">say about us</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Real reviews from real small businesses growing with ByTech Wave.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative h-full rounded-3xl bg-card p-8 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
                  <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: t.rating }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-primary text-white font-bold">{t.name.charAt(0)}</div>
                    <div>
                      <div className="text-sm font-bold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to become our next success story?" subtitle="Join hundreds of small businesses growing with ByTech Wave." />
    </>
  );
}
