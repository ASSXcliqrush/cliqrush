import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { Code2, ShoppingBag, Layout, Zap, Smartphone, Search, FileCode, Layers } from "lucide-react";

export const Route = createFileRoute("/services/website-development")({
  head: () => ({
    meta: [
      { title: "Website Development — High-Converting Websites | CliqRush" },
      { name: "description", content: "Fast, mobile-first, SEO-friendly business websites, ecommerce stores and landing pages designed to convert." },
      { property: "og:title", content: "Website Development | CliqRush" },
      { property: "og:description", content: "Websites engineered to turn traffic into pipeline." },
    ],
  }),
  component: () => (
    <ServicePageLayout
      eyebrow="Website Development"
      title="Websites engineered to convert."
      description="Beautifully designed, lightning-fast websites and landing pages built for SEO, conversions and scale."
      features={[
        { icon: Layout, title: "Business Websites", desc: "Brand-led, conversion-focused websites for service businesses and B2B." },
        { icon: ShoppingBag, title: "E-commerce Websites", desc: "Shopify, WooCommerce and headless stores built to maximise AOV and LTV." },
        { icon: Layers, title: "Landing Pages", desc: "Modular landing pages built for paid campaigns and offer launches." },
        { icon: FileCode, title: "WordPress Development", desc: "Custom themes, plugins and lightweight builds — no bloat." },
        { icon: Zap, title: "Speed Optimisation", desc: "Sub-2-second load times, perfect Core Web Vitals scores." },
        { icon: Smartphone, title: "Mobile Optimisation", desc: "Mobile-first design with conversion patterns tuned for small screens." },
        { icon: Search, title: "SEO-Friendly Structure", desc: "Clean URLs, semantic HTML, schema, and crawlable architecture from day one." },
        { icon: Code2, title: "Tech Stack of Choice", desc: "WordPress, Next.js, Webflow or Shopify — we pick what fits your business." },
      ]}
    />
  ),
});
