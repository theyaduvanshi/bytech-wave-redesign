import { Link } from "@tanstack/react-router";
import { SERVICES, INDUSTRIES, type ServiceSlug } from "@/lib/site-data";
import * as Icons from "lucide-react";
import { Reveal, Counter } from "./motion-primitives";
import { CheckCircle2, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

type IconName = keyof typeof Icons;
const Icon = ({ name, className }: { name: string; className?: string }) => {
  const Comp = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name] ?? Icons.Sparkles;
  return <Comp className={className} />;
};

export function ServicesGrid({ exclude }: { exclude?: ServiceSlug }) {
  const list = SERVICES.filter((s) => s.slug !== exclude);
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {list.map((s, i) => (
        <Reveal key={s.slug} delay={i * 0.05}>
          <Link
            to="/services/$slug"
            params={{ slug: s.slug }}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/90 backdrop-blur shadow-soft">
                <Icon name={s.icon} className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">
                {s.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function IndustriesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              Industries
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-black">
              Industries We <span className="text-gradient-primary">Serve</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Trusted by local businesses across a wide range of industries.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.04}>
              <div className="group flex flex-col items-center gap-3 rounded-2xl glass p-6 text-center hover:bg-gradient-primary hover:text-white transition-all duration-300 hover:-translate-y-1">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-white group-hover:bg-white group-hover:text-primary transition-colors">
                  <Icon name={ind.icon} className="h-6 w-6 text-white group-hover:text-white" />
                </div>
                <span className="text-sm font-semibold">{ind.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  const stats = [
    { label: "Projects Completed", value: 250 },
    { label: "Happy Clients", value: 180 },
    { label: "Websites Delivered", value: 200 },
    { label: "Businesses Helped", value: 300 },
  ];
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-primary p-10 md:p-14 shadow-elegant text-white">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-center">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div>
                  <div className="font-display text-4xl md:text-5xl font-black">
                    <Counter value={s.value} />
                  </div>
                  <div className="mt-2 text-white/80 text-sm">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export const TESTIMONIALS = [
  { name: "Rahul Mehta", role: "Construction Business Owner", quote: "ByTech Wave transformed our online presence. Our leads doubled within 3 months.", rating: 5 },
  { name: "Priya Sharma", role: "Cleaning Services", quote: "Affordable, fast, and professional. Our website ranks #1 for local searches now.", rating: 5 },
  { name: "Amit Verma", role: "Real Estate Agent", quote: "Google Business Profile setup brought us 40+ calls in the first month.", rating: 5 },
  { name: "Dr. Neha Kapoor", role: "Dental Clinic", quote: "The team understood healthcare marketing perfectly. Bookings are up 60%.", rating: 5 },
  { name: "Suresh Patel", role: "Restaurant Owner", quote: "Beautiful website, honest pricing, great support. Highly recommended.", rating: 5 },
  { name: "Anjali Rao", role: "Plumbing Services", quote: "Local SEO from ByTech Wave put us on Google Maps top 3. Amazing work.", rating: 5 },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold text-accent uppercase tracking-wider">
              Reviews
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-black">
              Loved by <span className="text-gradient-primary">Businesses</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 relative overflow-hidden">
          <div className="flex gap-6 animate-marquee w-max">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="w-[22rem] shrink-0 rounded-2xl bg-card p-6 shadow-card">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm">{t.quote}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQSection({
  items,
  title = "Frequently Asked Questions",
}: {
  items: { q: string; a: string }[];
  title?: string;
}) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-black">{title}</h2>
          </div>
        </Reveal>
        <div className="mt-10 space-y-3">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <details className="group rounded-2xl bg-card shadow-card open:shadow-elegant transition-all">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-semibold">
                  <span>{it.q}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary group-open:bg-accent group-open:text-white transition-colors">
                    <Icons.Plus className="h-4 w-4 group-open:rotate-45 transition-transform" />
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground">{it.a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((it, i) => (
        <motion.li
          key={it}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.4 }}
          className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-card"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5" />
          <span className="text-sm">{it}</span>
        </motion.li>
      ))}
    </ul>
  );
}

export function RelatedServices({ slugs }: { slugs: ServiceSlug[] }) {
  const list = SERVICES.filter((s) => slugs.includes(s.slug));
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-black">
              Related <span className="text-gradient-primary">Services</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Explore more ways ByTech Wave can grow your business.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group block overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
