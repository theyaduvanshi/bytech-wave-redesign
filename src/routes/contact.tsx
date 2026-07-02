import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { Reveal } from "@/components/site/motion-primitives";
import { CTASection } from "@/components/site/CTASection";
import { CONTACT } from "@/lib/site-data";
import { Phone, Mail, MessageCircle, Clock, ShieldCheck, Zap, HeartHandshake, Award, CheckCircle2 } from "lucide-react";
import socialAsset from "@/assets/bytechwave-social.png.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ByTech Wave — Call, Email or WhatsApp Us" },
      { name: "description", content: "Get in touch with ByTech Wave for website design, Local SEO, and digital marketing. Call +91 8290079076 or email support@bytechwave.com." },
      { property: "og:title", content: "Contact ByTech Wave" },
      { property: "og:description", content: "Call, email, or WhatsApp us for a free consultation." },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: socialAsset.url },
      { property: "twitter:image", content: socialAsset.url },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    { icon: Phone, title: "Call Us", value: CONTACT.phone, href: CONTACT.phoneHref, cta: "Call Now", gradient: "bg-gradient-primary" },
    { icon: Mail, title: "Email Us", value: CONTACT.email, href: CONTACT.emailHref, cta: "Send Email", gradient: "bg-gradient-accent" },
    { icon: MessageCircle, title: "WhatsApp", value: "Chat with our team", href: CONTACT.whatsapp, cta: "Open WhatsApp", gradient: "bg-gradient-hero" },
  ];
  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32">
        <AnimatedBackground />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block rounded-full glass px-4 py-1 text-xs font-semibold uppercase tracking-wider">Contact</span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-black">
            Let's build something <span className="text-gradient-hero">amazing together</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Reach out any way you like — we typically respond within a few hours during business hours.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group block h-full rounded-3xl bg-card p-8 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1 border border-transparent hover:border-primary/20">
                  <div className={`grid h-14 w-14 place-items-center rounded-2xl ${c.gradient} text-white shadow-elegant group-hover:scale-110 transition-transform`}>
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground break-words">{c.value}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-accent transition-colors">
                    {c.cta} →
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-gradient-primary p-8 text-white shadow-elegant">
              <Clock className="h-8 w-8" />
              <h2 className="mt-4 font-display text-2xl font-bold">Business Hours</h2>
              <div className="mt-6 space-y-2 text-sm">
                <div className="flex justify-between border-b border-white/20 pb-2"><span>Monday – Friday</span><span className="font-bold">9:00 AM – 7:00 PM</span></div>
                <div className="flex justify-between border-b border-white/20 pb-2"><span>Saturday</span><span className="font-bold">10:00 AM – 5:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="font-bold">Closed</span></div>
              </div>
              <p className="mt-6 text-sm text-white/85">Urgent website issues? WhatsApp us anytime — we monitor after hours.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-card p-8 shadow-card">
              <h2 className="font-display text-2xl font-bold">Why Contact ByTech Wave</h2>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  { i: ShieldCheck, t: "Honest, upfront pricing — no surprises" },
                  { i: Zap, t: "Fast response, usually within a few hours" },
                  { i: HeartHandshake, t: "Real humans, no chatbots or scripts" },
                  { i: Award, t: "300+ small businesses served" },
                  { i: CheckCircle2, t: "Free 20-minute strategy consultation" },
                ].map((r) => (
                  <li key={r.t} className="flex gap-3">
                    <r.i className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{r.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Prefer to talk right now?" subtitle="Give us a call — we'd love to hear about your business." />
    </>
  );
}
