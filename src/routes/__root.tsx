import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-black text-gradient-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-bold text-white shadow-elegant hover:scale-105 transition-transform"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gradient-primary px-6 py-3 text-sm font-bold text-white"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border px-6 py-3 text-sm font-medium">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ByTech Wave — Websites, SEO & Digital Marketing for Small Business" },
      { name: "description", content: "ByTech Wave builds SEO-friendly websites, optimizes Google Business Profiles, and delivers digital marketing that generates real leads. Starting at ₹6,000." },
      { name: "author", content: "ByTech Wave" },
      {
      name: "google-site-verification",
      content: "EWMCQ2iGPARLvEI16JhLkztHf7zwsxposIQqMmt9-RU",
    },
      { property: "og:title", content: "ByTech Wave — Digital Marketing Agency" },
      { property: "og:description", content: "Professional websites, Local SEO, and Google Business Profile optimization for small businesses." },
      { property: "og:type", content: "website" },
{ property: "og:site_name", content: "ByTech Wave" },
{
  property: "og:url",
  content: "https://bytechwave.com",
},
{
  property: "og:image",
  content: "https://bytechwave.com/social-share.png",
},
{
  property: "og:image:width",
  content: "1200",
},
{
  property: "og:image:height",
  content: "630",
},
{
  name: "twitter:card",
  content: "summary_large_image",
},
{
  name: "twitter:image",
  content: "https://bytechwave.com/social-share.png",
},
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-B60PSQ35JG",
      async: true,
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-B60PSQ35JG');
      `,
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "ByTech Wave",
        description:
          "Digital marketing agency offering website development, Local SEO, and Google Business Profile optimization.",
        telephone: "+91 8290079076",
        email: "support@bytechwave.com",
        sameAs: [],
      }),
    },
  ],
}),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
