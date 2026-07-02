import { createFileRoute, Link } from "@tanstack/react-router";
import socialAsset from "@/assets/bytechwave-social.png.asset.json";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Sparkles, Zap, Award, Users, Rocket, HeartHandshake, MapPin, Search, Globe } from "lucide-react";
import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { Reveal } from "@/components/site/motion-primitives";
import { ServicesGrid, IndustriesSection, StatsSection, TestimonialsSection, FAQSection, FeatureList } from "@/components/site/sections";
import { CTASection } from "@/components/site/CTASection";
import { CONTACT } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ByTech Wave | Digital Marketing Agency" },
      { name: "description", content: "Professional website design, SEO, and Google Business Profile optimization for small businesses. Informational websites starting at ₹6,000." },
      { property: "og:title", content: "ByTech Wave — Grow Your Business Online" },
      { property: "og:description", content: "Websites, Local SEO, and digital marketing that generate real leads." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: socialAsset.url },
      { property: "twitter:image", content: socialAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <AboutPreview />
      <ServicesSection />
      <IndustriesSection />
      <WhyWebsite />
      <WhyLocalSEO />
      <GBPBenefits />
      <ProcessTimeline />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection
        items={[
          { q: "How much does a website cost?", a: "Our informational websites start at just ₹6,000 ($64). Custom projects and eCommerce are priced based on scope." },
          { q: "How long does it take to build a website?", a: "Most informational websites are delivered in 5–10 business days after content and images are provided." },
          { q: "Do you offer SEO services?", a: "Yes — we specialize in Local SEO, on-page optimization, and Google Business Profile management to help you rank locally." },
          { q: "Do you provide website maintenance?", a: "Absolutely. Our maintenance plans cover updates, backups, security, and performance tuning." },
          { q: "Can you optimize my Google Business Profile?", a: "Yes. We fully optimize GBP listings so you show up in Google Maps and local pack searches." },
        ]}
      />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden flex items-center">
      <AnimatedBackground />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold"
            >
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Premium Digital Marketing Agency
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight"
            >
              Grow Your Business Online with{" "}
              <span className="text-gradient-hero">ByTech Wave</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl"
            >
              Professional website design, SEO, Google Business Profile optimization, and digital marketing solutions that help businesses generate more leads and customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-gradient-accent px-5 py-3 text-white shadow-accent-glow animate-pulse-glow"
            >
              <Zap className="h-5 w-5" />
              <span className="font-bold">Informational Websites Starting at Just ₹6,000 ($64)</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-bold text-white shadow-elegant hover:scale-105 transition-transform">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-bold hover:bg-white/70 transition-colors">
                View Services <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={CONTACT.emailHref} className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-accent-glow hover:scale-105 transition-transform">
                Get Started
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Digital marketing team collaborating"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-accent/30" />
            </div>
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-8 rounded-2xl glass p-4 shadow-elegant hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-white"><Search className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Ranking</div>
                  <div className="font-bold">#1 on Google</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 bottom-10 rounded-2xl glass p-4 shadow-elegant hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-accent text-white"><Users className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Leads / mo</div>
                  <div className="font-bold">+180%</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    { icon: Sparkles, title: "Affordable Pricing", desc: "Premium quality at prices small businesses love." },
    { icon: Search, title: "SEO-Friendly Websites", desc: "Built from the ground up to rank on Google." },
    { icon: Zap, title: "Mobile-Responsive Design", desc: "Perfect experience on every screen size." },
    { icon: Rocket, title: "Fast Turnaround", desc: "Most sites delivered within 5–10 business days." },
    { icon: HeartHandshake, title: "Personalized Support", desc: "Real humans, real answers, real fast." },
    { icon: Award, title: "Performance-Focused", desc: "Fast Core Web Vitals and rock-solid uptime." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              Why ByTech Wave
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-black">
              Everything your business needs to <span className="text-gradient-primary">win online</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <div className="group h-full rounded-3xl bg-card p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/20">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-white shadow-elegant group-hover:scale-110 transition-transform">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="ByTech Wave team"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gradient-accent p-5 text-white shadow-accent-glow hidden sm:block">
              <div className="text-3xl font-black">300+</div>
              <div className="text-xs uppercase tracking-wider">Businesses Helped</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold text-accent uppercase tracking-wider">
              About ByTech Wave
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-black">
              We help small businesses <span className="text-gradient-primary">win online</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              ByTech Wave is a full-service digital marketing agency built for small and local businesses. Our mission is simple — help you get discovered, get trusted, and get more customers online. From beautiful websites to Local SEO and Google Business Profile optimization, we deliver measurable results at prices that make sense.
            </p>
            <p className="mt-4 text-muted-foreground">
              We combine strategy, design, and technology to build online experiences that actually generate leads. Whether you're launching your first website or ready to scale, we're the partner that makes it happen.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-bold text-white shadow-elegant hover:scale-105 transition-transform"
            >
              Learn More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-black">
              Complete <span className="text-gradient-primary">Digital Solutions</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Everything you need to establish a strong online presence and grow your business.
            </p>
          </div>
        </Reveal>
        <ServicesGrid />
      </div>
    </section>
  );
}

function WhyWebsite() {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
                Why a website matters
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-black">
                Why Your Business Needs a <span className="text-gradient-primary">Website</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Your website is the digital front door of your business. In today's world, customers research online before they call, visit, or buy. Without a website, you're invisible to the people looking for you right now.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <FeatureList items={[
              "Online credibility that builds trust instantly",
              "Lead generation from Google searches 24/7",
              "Local visibility so nearby customers find you",
              "Customer trust through reviews and content",
              "Mobile accessibility on every device",
              "Business growth through scalable online presence",
            ]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyLocalSEO() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                alt="Local SEO analytics"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold text-accent uppercase tracking-wider">
                Local SEO
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-black">
                Why Local SEO <span className="text-gradient-primary">Matters</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                97% of consumers search online for local businesses. If you're not ranking on Google Maps and local searches, you're losing customers to competitors who are.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex gap-3"><MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" /><span><b>Google rankings</b> — appear when locals search your services.</span></li>
                <li className="flex gap-3"><MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" /><span><b>Maps visibility</b> — show up in the Google Map Pack.</span></li>
                <li className="flex gap-3"><MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" /><span><b>Local search traffic</b> — free, high-intent visitors.</span></li>
                <li className="flex gap-3"><MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" /><span><b>Increased leads</b> — calls, direction requests, and bookings.</span></li>
                <li className="flex gap-3"><MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" /><span><b>Competitive advantage</b> — outrank the businesses next door.</span></li>
              </ul>
              <Link to="/services/$slug" params={{ slug: "local-seo-services" }} className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-bold text-white shadow-elegant hover:scale-105 transition-transform">
                Explore Local SEO <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function GBPBenefits() {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
                Google Business Profile
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-black">
                Own the <span className="text-gradient-primary">Google Map Pack</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                A fully optimized Google Business Profile is one of the most powerful (and free) marketing assets a local business can have. It's the difference between being found and being forgotten.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "More calls from local searches",
                  "Higher visibility on Google Maps",
                  "Direction requests from nearby customers",
                  "Star ratings that build instant trust",
                  "Free traffic every single day",
                  "Photo & post management for engagement",
                ].map((t) => (
                  <div key={t} className="flex gap-2 rounded-xl bg-card p-3 shadow-card text-sm">
                    <Globe className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {t}
                  </div>
                ))}
              </div>
              <Link to="/services/$slug" params={{ slug: "google-business-profile-optimization" }} className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-bold text-white shadow-accent-glow hover:scale-105 transition-transform">
                Optimize My Profile <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-elegant">
              <img
                src="/home-gbp-ui.jpg"
                alt="Google Business Profile dashboard on smartphone"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  const steps = [
    { n: "01", title: "Consultation", desc: "We learn about your business, goals, and audience." },
    { n: "02", title: "Planning", desc: "We map out your site structure, content, and SEO strategy." },
    { n: "03", title: "Design", desc: "Custom, modern designs that reflect your brand." },
    { n: "04", title: "Development", desc: "Fast, mobile-first, SEO-ready websites." },
    { n: "05", title: "Launch", desc: "Go live with confidence and analytics in place." },
    { n: "06", title: "Optimization", desc: "Tune performance, SEO, and conversions." },
    { n: "07", title: "Ongoing Support", desc: "We're here for maintenance, growth, and results." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold text-accent uppercase tracking-wider">
              Process
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-black">
              Our Website <span className="text-gradient-primary">Development Process</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-1/2" />
          <div className="space-y-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <div className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 grid h-8 w-8 place-items-center rounded-full bg-gradient-accent text-white text-xs font-bold shadow-accent-glow">
                    {i + 1}
                  </div>
                  <div className="md:w-1/2 md:px-12 pl-14 md:pl-0">
                    <div className="rounded-2xl bg-card p-6 shadow-card hover:shadow-elegant transition-shadow">
                      <div className="text-xs font-black text-accent">{s.n}</div>
                      <h3 className="mt-1 font-display text-xl font-bold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
