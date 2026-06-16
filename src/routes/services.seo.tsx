import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { Search, FileSearch, Code, Link2, MapPin, BarChart3, Wrench, Globe2 } from "lucide-react";

export const Route = createFileRoute("/services/seo")({
  head: () => ({
    meta: [
      { title: "SEO Services — Rank Higher & Capture Intent | CliqRush" },
      { name: "description", content: "Technical, on-page, off-page and local SEO that compounds organic traffic and qualified leads. Transparent reporting, real results." },
      { property: "og:title", content: "SEO Services | CliqRush" },
      { property: "og:description", content: "Compounding organic growth through technical SEO, content and link building." },
    ],
  }),
  component: () => (
    <ServicePageLayout
      eyebrow="SEO Services"
      title="Rank higher. Capture intent. Compound traffic."
      description="A full-stack SEO program — technical, on-page, content and links — engineered around the keywords that actually drive revenue for your business."
      features={[
        { icon: FileSearch, title: "Keyword Research", desc: "Intent-mapped keyword strategy across awareness, consideration and conversion." },
        { icon: Wrench, title: "Technical SEO", desc: "Core Web Vitals, indexation, schema, internal links and site architecture audits." },
        { icon: Code, title: "On-Page SEO", desc: "Title, meta, headings, content optimisation and topical authority building." },
        { icon: Link2, title: "Link Building", desc: "High-authority, niche-relevant backlinks built through digital PR and outreach." },
        { icon: MapPin, title: "Local SEO", desc: "Google Business Profile, citations, reviews and map-pack domination." },
        { icon: Globe2, title: "International SEO", desc: "Hreflang, geo-targeting and multi-market content strategy." },
        { icon: BarChart3, title: "Transparent Reporting", desc: "Live ranking, traffic, lead and revenue dashboards updated weekly." },
        { icon: Search, title: "Content Optimisation", desc: "Refresh existing pages to recover and grow rankings — fast wins, monthly." },
      ]}
      faqs={[
        { q: "How long does SEO take to work?", a: "Most clients see meaningful movement in 3 months, with compounding results by month 6. Local SEO often shows faster results." },
        { q: "Do you guarantee #1 rankings?", a: "No ethical SEO can guarantee positions, but we commit to traffic, leads and revenue targets — the metrics that matter." },
        { q: "Will I own the content and links?", a: "Yes. Everything we build lives on your domain, in your tools, under your accounts." },
      ]}
    />
  ),
});
