import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { Video, Film, Play, Building2, Package, Youtube } from "lucide-react";

export const Route = createFileRoute("/services/video-creation")({
  head: () => ({
    meta: [
      { title: "Video Creation — Ad Creatives, Reels & YouTube | CliqRush" },
      { name: "description", content: "Scroll-stopping video creative for paid ads, short-form, YouTube, corporate and product." },
      { property: "og:title", content: "Video Creation | CliqRush" },
      { property: "og:description", content: "Video creative that performs across paid and organic." },
    ],
  }),
  component: () => (
    <ServicePageLayout
      eyebrow="Video Creation"
      title="Scroll-stopping video, built to perform."
      description="From ad creatives to reels, YouTube and product videos — engineered to win attention and drive action."
      features={[
        { icon: Video, title: "Ad Creatives", desc: "High-volume, performance-led ad creative built for Meta, YouTube and TikTok." },
        { icon: Film, title: "Short-Form Videos", desc: "Hook-led short-form content for organic + paid growth." },
        { icon: Play, title: "Reels", desc: "Reels and TikToks designed for completion rate and shareability." },
        { icon: Building2, title: "Corporate Videos", desc: "Brand films, founder stories and culture videos with cinematic quality." },
        { icon: Package, title: "Product Videos", desc: "Demos, explainers and unboxings that drive conversion at the PDP." },
        { icon: Youtube, title: "YouTube Content", desc: "Long-form YouTube strategy, scripting and editing for compounding reach." },
      ]}
    />
  ),
});
