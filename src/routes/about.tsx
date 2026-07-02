import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { Reveal } from "@/components/site/motion-primitives";
import { StatsSection } from "@/components/site/sections";
import { CTASection } from "@/components/site/CTASection";
import { Target, Eye, Heart, Users, Award, Zap, ArrowRight } from "lucide-react";
import socialAsset from "@/assets/bytechwave-social.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ByTech Wave — Small Business Digital Marketing Agency" },
      { name: "description", content: "ByTech Wave is a digital marketing agency helping small businesses grow through beautiful websites, Local SEO, and Google Business Profile optimization." },
      { property: "og:title", content: "About ByTech Wave" },
      { property: "og:description", content: "We help small businesses win online with websites, SEO, and Local marketing." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: socialAsset.url },
      { property: "twitter:image", content: socialAsset.url },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32">
        <AnimatedBackground />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block rounded-full glass px-4 py-1 text-xs font-semibold uppercase tracking-wider">About Us</span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-black">
            We're on a mission to help <span className="text-gradient-hero">small businesses win online</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            ByTech Wave is a full-service digital marketing agency built specifically for small and local businesses. We combine premium design, expert SEO, and honest pricing to deliver real growth — not empty promises.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80" alt="ByTech Wave team" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-black">
                A story built around <span className="text-gradient-primary">small business</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                ByTech Wave was founded on one core belief — every small business deserves a professional online presence. For years we watched brilliant local businesses struggle online, either priced out by big agencies or burned by cheap templates that never generated a single lead.
              </p>
              <p className="mt-4 text-muted-foreground">
                So we built a different kind of agency. One that treats small businesses like the growth engines they are. One that delivers premium websites, expert Local SEO, and dedicated support at prices that make sense. From informational sites starting at ₹6,000 to full digital marketing engagements, everything we do is designed around one question: will this actually help our clients grow?
              </p>
              <p className="mt-4 text-muted-foreground">
                Today, ByTech Wave partners with hundreds of businesses across construction, home services, healthcare, real estate, restaurants, and professional services — and we're just getting started.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-3xl md:text-5xl font-black">
                Our <span className="text-gradient-primary">values</span>
              </h2>
              <p className="mt-3 text-muted-foreground">The principles that guide every project.</p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: "Mission-driven", desc: "Help small businesses grow online with premium-quality digital experiences." },
              { icon: Eye, title: "Transparent", desc: "Honest pricing, clear timelines, and monthly reporting — always." },
              { icon: Heart, title: "Client-first", desc: "Your success is our success. We show up like your marketing team." },
              { icon: Users, title: "Approachable", desc: "No jargon, no big-agency egos. Just real experts, real fast." },
              { icon: Award, title: "Quality-obsessed", desc: "Every pixel, every keyword, every line of code — done right." },
              { icon: Zap, title: "Fast execution", desc: "We move quickly so your business can too." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="group h-full rounded-3xl bg-card p-8 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-white shadow-elegant group-hover:scale-110 transition-transform">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-black">
              Ready to work <span className="text-gradient-primary">together</span>?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Explore our services or reach out for a free consultation. We'd love to help your business grow.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-bold text-white shadow-elegant hover:scale-105 transition-transform">
                View Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-accent-glow hover:scale-105 transition-transform">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
