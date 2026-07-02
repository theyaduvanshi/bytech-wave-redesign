import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { SERVICES, CONTACT } from "@/lib/site-data";
import { motion, AnimatePresence } from "framer-motion";
const logo = "/logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center shrink-0" aria-label="ByTech Wave home">
          <img
            src={logo}
            alt="ByTech Wave"
            className="h-10 w-auto sm:h-12"
            loading="eager"
            decoding="async"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-primary" }}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              Services <ChevronDown className="h-4 w-4" />
            </Link>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full w-[22rem] pt-2"
                >
                  <div className="glass rounded-2xl p-2 shadow-elegant">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="block rounded-xl px-3 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        <div className="font-medium">{s.title}</div>
                        <div className="text-xs text-muted-foreground line-clamp-1">
                          {s.short}
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-accent px-4 py-2 text-sm font-semibold text-white shadow-accent-glow hover:scale-105 transition-transform"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <button
            aria-label="Toggle menu"
            className="lg:hidden grid h-10 w-10 place-items-center rounded-xl glass"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden glass border-t border-border"
          >
            <div className="px-4 py-3 space-y-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm font-medium hover:bg-primary/10"
                >
                  {n.label}
                </Link>
              ))}
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-sm font-medium hover:bg-primary/10">
                  Services <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-3 space-y-1 mt-1">
                  <Link
                    to="/services"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-primary/10"
                  >
                    All Services
                  </Link>
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm hover:bg-primary/10"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </details>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
