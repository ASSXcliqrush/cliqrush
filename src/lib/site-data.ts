import {
  Search, Megaphone, Code2, PenTool, Video, Share2,
} from "lucide-react";

export const CONTACT = {
  phone: "+919712702525",
  phoneDisplay: "+91 97127 02525",
  whatsapp: "919712702525",
  email: "hello@cliqrush.com",
  address: "CliqRush Digital, Bengaluru, India",
  hours: "Mon–Sat · 10:00 AM – 7:00 PM IST",
  gmb: "https://maps.app.goo.gl/6qm6n9L9MQyUhNkH6",
};

export const SERVICES = [
  {
    slug: "seo",
    title: "SEO Services",
    tagline: "Rank higher. Capture intent.",
    to: "/services/seo" as const,
    icon: Search,
    summary:
      "Technical, on-page, and off-page SEO that compounds traffic and qualified leads month over month.",
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    tagline: "Profitable paid acquisition.",
    to: "/services/performance-marketing" as const,
    icon: Megaphone,
    summary:
      "Google, Meta and LinkedIn Ads engineered around conversion tracking, creative testing and CAC targets.",
  },
  {
    slug: "website-development",
    title: "Website Development",
    tagline: "High-converting websites.",
    to: "/services/website-development" as const,
    icon: Code2,
    summary:
      "Fast, mobile-first, SEO-friendly websites and landing pages designed to turn traffic into pipeline.",
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    tagline: "Content that ranks & converts.",
    to: "/services/content-marketing" as const,
    icon: PenTool,
    summary:
      "Strategy-led blog, SEO and lead-gen content that builds authority and drives qualified demand.",
  },
  {
    slug: "video-creation",
    title: "Video Creation",
    tagline: "Scroll-stopping creatives.",
    to: "/services/video-creation" as const,
    icon: Video,
    summary:
      "Ad creatives, reels, YouTube and product videos crafted to perform across paid and organic channels.",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    tagline: "Grow a real audience.",
    to: "/services/social-media-marketing" as const,
    icon: Share2,
    summary:
      "Full-stack social — strategy, design, posting, community and growth — built for brand and pipeline.",
  },
] as const;

export const TRUST_METRICS = [
  { value: "100+", label: "Projects Delivered" },
  { value: "5+ yrs", label: "Industry Experience" },
  { value: "12+", label: "Industries Served" },
  { value: "ROI", label: "Focused Approach" },
];

export const PROCESS = [
  { step: "01", title: "Discovery Call", desc: "We understand your business, goals, audience and current performance." },
  { step: "02", title: "Growth Audit", desc: "Deep dive into website, channels, funnels and competitor benchmarks." },
  { step: "03", title: "Strategy Development", desc: "A custom 90-day growth roadmap with channels, budgets and KPIs." },
  { step: "04", title: "Campaign Execution", desc: "Launch SEO, ads, content and creative — built around conversion." },
  { step: "05", title: "Optimization", desc: "Weekly experiments, creative testing and funnel optimisation." },
  { step: "06", title: "Scale Growth", desc: "Double down on what works. Compound results month over month." },
];

export const TESTIMONIALS = [
  { name: "Rohan Mehta", role: "Founder", company: "Northbeam Apparel", industry: "E-commerce", rating: 5,
    quote: "CliqRush rebuilt our paid funnel and we hit a 4.2x ROAS in 90 days. Honest, sharp, and obsessed with results." },
  { name: "Ayesha Khan", role: "Marketing Director", company: "Lendora Finance", industry: "Fintech", rating: 5,
    quote: "Our qualified lead volume tripled in 5 months. The reporting is the clearest we've ever seen from an agency." },
  { name: "Vikram Shah", role: "CEO", company: "BluePeak Realty", industry: "Real Estate", rating: 5,
    quote: "From SEO to landing pages, every dial moved. CliqRush genuinely feels like an in-house growth team." },
  { name: "Priya Nair", role: "Co-founder", company: "Hearth & Co.", industry: "D2C Home", rating: 5,
    quote: "Creative quality went up, CAC went down. They actually understand the unit economics behind every ad." },
  { name: "Daniel Park", role: "Head of Growth", company: "Stackwise SaaS", industry: "B2B SaaS", rating: 5,
    quote: "Inbound demos doubled in two quarters. Their content + SEO motion is unreasonably effective." },
  { name: "Sneha Iyer", role: "Owner", company: "Aura Wellness Clinic", industry: "Healthcare", rating: 5,
    quote: "Local SEO and Google Ads transformed our bookings. We're now the #1 result in our area." },
  { name: "Arjun Kapoor", role: "Director", company: "Forge & Foundry", industry: "Manufacturing B2B", rating: 5,
    quote: "Finally, an agency that speaks pipeline, not vanity metrics. LinkedIn Ads delivered serious enterprise leads." },
  { name: "Meera Pillai", role: "Founder", company: "Tinted Studio", industry: "Beauty D2C", rating: 5,
    quote: "Our reels strategy went viral and built a real community. Revenue from social is now our #1 channel." },
];

export const CASE_STUDIES = [
  {
    slug: "northbeam-apparel",
    client: "Northbeam Apparel",
    industry: "E-commerce",
    challenge: "Plateaued ROAS at 1.8x with rising CAC across Meta Ads.",
    strategy: "Rebuilt creative testing framework, restructured campaigns by purchase intent, launched a high-converting PDP.",
    results: [
      { label: "ROAS", value: "4.2x" },
      { label: "Revenue Growth", value: "+186%" },
      { label: "CAC Reduction", value: "−38%" },
      { label: "Conversion Rate", value: "+72%" },
    ],
    tag: "Performance Marketing",
  },
  {
    slug: "lendora-finance",
    client: "Lendora Finance",
    industry: "Fintech",
    challenge: "Low-quality leads from generic landing pages and poor organic visibility.",
    strategy: "Intent-mapped SEO content plan, dedicated landing pages by product, advanced conversion tracking.",
    results: [
      { label: "Qualified Leads", value: "+312%" },
      { label: "Organic Traffic", value: "+248%" },
      { label: "Cost / Lead", value: "−54%" },
      { label: "Pipeline Value", value: "₹14.2 Cr" },
    ],
    tag: "SEO + Paid",
  },
  {
    slug: "bluepeak-realty",
    client: "BluePeak Realty",
    industry: "Real Estate",
    challenge: "High ad spend with no clear attribution and weak lead nurturing.",
    strategy: "Funnel rebuild, WhatsApp-first nurture, geo-targeted Google Ads and a new project microsite.",
    results: [
      { label: "Site Visits Booked", value: "+220%" },
      { label: "Lead-to-Visit", value: "23%" },
      { label: "Cost / Site Visit", value: "−41%" },
      { label: "Revenue Closed", value: "₹38 Cr" },
    ],
    tag: "Lead Generation",
  },
  {
    slug: "stackwise-saas",
    client: "Stackwise SaaS",
    industry: "B2B SaaS",
    challenge: "Stalled inbound, weak SEO presence in a competitive niche.",
    strategy: "Programmatic SEO, thought leadership content, LinkedIn Ads to ICP accounts.",
    results: [
      { label: "Demo Requests", value: "+207%" },
      { label: "Organic Traffic", value: "+340%" },
      { label: "Sales Pipeline", value: "$2.1M" },
      { label: "MQL → SQL", value: "+58%" },
    ],
    tag: "SEO + Content",
  },
  {
    slug: "aura-wellness",
    client: "Aura Wellness Clinic",
    industry: "Healthcare",
    challenge: "Heavily reliant on referrals, invisible on Google Maps.",
    strategy: "Local SEO overhaul, GBP optimisation, hyperlocal Google Ads.",
    results: [
      { label: "Monthly Bookings", value: "+260%" },
      { label: "GBP Calls", value: "+412%" },
      { label: "Top-3 Rankings", value: "47 kws" },
      { label: "Review Rating", value: "4.9★" },
    ],
    tag: "Local SEO",
  },
  {
    slug: "tinted-studio",
    client: "Tinted Studio",
    industry: "Beauty D2C",
    challenge: "Low brand awareness, weak organic social presence.",
    strategy: "Reels-first content engine, influencer collabs, creator-style ad creatives.",
    results: [
      { label: "Followers", value: "+185K" },
      { label: "Revenue (Social)", value: "+390%" },
      { label: "Reel Views", value: "62M" },
      { label: "ROAS", value: "5.6x" },
    ],
    tag: "Social + Creative",
  },
];

export const BLOG_POSTS = [
  { slug: "seo-roadmap-2026", title: "The 2026 SEO Roadmap: What Actually Moves Rankings Now", category: "SEO", readTime: "9 min", excerpt: "AI overviews, EEAT, and topical authority — a practical playbook for compounding organic growth.", featured: true },
  { slug: "meta-ads-creative-system", title: "The Creative System We Use to Scale Meta Ads Past 5x ROAS", category: "Performance", readTime: "11 min", excerpt: "Inside the testing framework, hook library and creative ops behind our highest-performing accounts." },
  { slug: "landing-pages-that-convert", title: "Anatomy of a Landing Page That Converts at 12%+", category: "CRO", readTime: "7 min", excerpt: "The structural patterns, copy frameworks and proof elements that consistently win." },
  { slug: "local-seo-checklist", title: "The Local SEO Checklist for 2026", category: "SEO", readTime: "8 min", excerpt: "Every step we use to dominate map-pack rankings for service businesses." },
  { slug: "b2b-linkedin-playbook", title: "The B2B LinkedIn Playbook for Pipeline Generation", category: "Performance", readTime: "10 min", excerpt: "How to combine organic, ads and ABM to fill pipeline with ICP accounts." },
  { slug: "content-engine-30-days", title: "Build a Content Engine in 30 Days", category: "Content", readTime: "6 min", excerpt: "From topical map to publishing rhythm — the system we deploy with every new client." },
];
