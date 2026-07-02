import { Link } from "@tanstack/react-router";
import { SERVICES, CONTACT } from "@/lib/site-data";
import { Phone, Mail, MessageCircle } from "lucide-react";
const logo = "/logo.png";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-to-b from-background to-secondary">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center" aria-label="ByTech Wave home">
              <img src={logo} alt="ByTech Wave" className="h-12 w-auto" loading="lazy" decoding="async" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Professional websites, SEO, and digital marketing that help small
              businesses grow online.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["/", "Home"],
                ["/services", "Services"],
                ["/about", "About"],
                ["/reviews", "Reviews"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={CONTACT.phoneHref} className="flex items-center gap-2 hover:text-primary">
                  <Phone className="h-4 w-4 text-accent" /> {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="flex items-center gap-2 hover:text-primary">
                  <Mail className="h-4 w-4 text-accent" /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary">
                  <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © 2026 ByTech Wave. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
