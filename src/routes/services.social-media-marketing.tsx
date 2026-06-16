import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { CalendarDays, Palette, Send, Users, TrendingUp, Megaphone } from "lucide-react";

export const Route = createFileRoute("/services/social-media-marketing")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing — Grow a Real Audience | CliqRush" },
      { name: "description", content: "Full-stack social media management — content, design, posting, community and growth." },
      { property: "og:title", content: "Social Media Marketing | CliqRush" },
      { property: "og:description", content: "Social media built for brand and pipeline." },
    ],
  }),
  component: () => (
    <ServicePageLayout
      eyebrow="Social Media Marketing"
      title="Grow a real audience that drives real revenue."
      description="Strategy-led social media — content, design, posting, community management and paid amplification — done end-to-end."
      features={[
        { icon: CalendarDays, title: "Content Planning", desc: "Monthly content calendars built around your brand pillars and offers." },
        { icon: Palette, title: "Graphic Design", desc: "On-brand carousels, statics and motion designed for conversions." },
        { icon: Send, title: "Posting", desc: "Daily posting, scheduling and platform-specific optimisation." },
        { icon: Users, title: "Community Management", desc: "DMs, comments and engagement managed like a real customer-facing channel." },
        { icon: TrendingUp, title: "Social Growth", desc: "Audience growth strategies — collabs, hashtags, reels, lives and series." },
        { icon: Megaphone, title: "Brand Awareness", desc: "Always-on brand campaigns that build recall and demand." },
      ]}
    />
  ),
});
