import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { PenTool, FileText, Search, Globe2, Magnet, Share2 } from "lucide-react";

export const Route = createFileRoute("/services/content-marketing")({
  head: () => ({
    meta: [
      { title: "Content Marketing — Content That Ranks & Converts | CliqRush" },
      { name: "description", content: "Strategy-led content marketing — blog, SEO, website and lead-gen content that drives qualified demand." },
      { property: "og:title", content: "Content Marketing | CliqRush" },
      { property: "og:description", content: "Build authority. Drive qualified leads." },
    ],
  }),
  component: () => (
    <ServicePageLayout
      eyebrow="Content Marketing"
      title="Content that ranks, educates and converts."
      description="A complete content engine — strategy, writing, SEO and distribution — built to compound traffic and pipeline."
      features={[
        { icon: PenTool, title: "Content Strategy", desc: "Topical maps, content pillars and editorial calendars tied to revenue keywords." },
        { icon: FileText, title: "Blog Writing", desc: "Expert-level long-form articles written by industry-aware writers and editors." },
        { icon: Search, title: "SEO Content", desc: "Content optimised for search intent, EEAT and AI overviews." },
        { icon: Globe2, title: "Website Content", desc: "Homepage, service pages, programmatic pages and landing pages that convert." },
        { icon: Magnet, title: "Lead-Generation Content", desc: "Lead magnets, ebooks, calculators and gated assets that capture demand." },
        { icon: Share2, title: "Content Distribution", desc: "Repurpose for LinkedIn, newsletters, communities and paid amplification." },
      ]}
    />
  ),
});
