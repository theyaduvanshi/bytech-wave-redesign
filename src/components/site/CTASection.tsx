import { Phone, Mail, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/site-data";
import { motion } from "framer-motion";
import { AnimatedBackground } from "./AnimatedBackground";

export function CTASection({
  title = "Ready to Grow Your Business?",
  subtitle = "Let's build a website and marketing strategy that brings you real customers.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 shadow-elegant">
          <AnimatedBackground />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative text-center text-white"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/90">{subtitle}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-primary shadow-elegant hover:scale-105 transition-transform"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={CONTACT.emailHref}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-accent-glow hover:scale-105 transition-transform"
              >
                <Mail className="h-4 w-4" /> Email Us
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-bold text-white border-white/40 hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
