import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { Target, Repeat, BarChart3, Layers, LineChart, Megaphone, Linkedin, Facebook } from "lucide-react";

export const Route = createFileRoute("/services/performance-marketing")({
  head: () => ({
    meta: [
      { title: "Performance Marketing — Google, Meta & LinkedIn Ads | CliqRush" },
      { name: "description", content: "Profitable paid acquisition across Google, Meta and LinkedIn — built around conversion tracking, creative testing and CAC." },
      { property: "og:title", content: "Performance Marketing | CliqRush" },
      { property: "og:description", content: "Paid ads engineered around conversion, creative and CAC." },
    ],
  }),
  component: () => (
    <ServicePageLayout
      eyebrow="Performance Marketing"
      title="Paid acquisition that's accountable to revenue."
      description="Google, Meta and LinkedIn Ads built around your unit economics — with creative, landing pages and tracking handled end-to-end."
      features={[
        { icon: Megaphone, title: "Google Ads", desc: "Search, Performance Max, Shopping and YouTube campaigns optimised for ROAS." },
        { icon: Facebook, title: "Meta Ads", desc: "Full-funnel Facebook + Instagram ads with creator-style creative testing." },
        { icon: Linkedin, title: "LinkedIn Ads", desc: "ABM-grade B2B campaigns targeting your ICP for pipeline, not vanity clicks." },
        { icon: Repeat, title: "Remarketing", desc: "Multi-channel remarketing across Display, Meta, YouTube and email." },
        { icon: Target, title: "Conversion Tracking", desc: "Server-side tracking, CAPI, GA4 and enhanced conversions, set up properly." },
        { icon: Layers, title: "Landing Pages", desc: "High-converting landing pages and offer pages built to maximise CVR." },
        { icon: LineChart, title: "Analytics", desc: "Looker Studio dashboards tying every channel back to pipeline and revenue." },
        { icon: BarChart3, title: "Reporting", desc: "Weekly + monthly reporting with action items, not just numbers." },
      ]}
    />
  ),
});
