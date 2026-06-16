import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { Target, Eye, Heart, Zap, Trophy, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CliqRush — Performance Marketing Agency" },
      { name: "description", content: "We're a team of strategists, marketers, designers and creators on a mission to make growth accountable to revenue." },
      { property: "og:title", content: "About CliqRush" },
      { property: "og:description", content: "Strategists, marketers and builders behind CliqRush." },
    ],
  }),
  component: AboutPage,
});

const TEAM = [
  { name: "Aarav Sharma", role: "Founder & CEO", bio: "10+ years building growth engines for D2C and SaaS brands." },
  { name: "Neha Verma", role: "Head of Performance", bio: "Ex-agency lead, $20M+ in managed ad spend across Meta and Google." },
  { name: "Karan Mehta", role: "Head of SEO", bio: "Technical SEO obsessive. Built 4 sites to 1M+ monthly organic." },
  { name: "Sara Iyer", role: "Creative Director", bio: "Brand and creative for high-growth consumer companies." },
  { name: "Rohit Banerjee", role: "Head of Web", bio: "Engineering lead. Fast, scalable, conversion-tuned websites." },
  { name: "Tanya Khanna", role: "Head of Content", bio: "Editorial leader. Builds content engines that compound." },
];

const VALUES = [
  { icon: Target, t: "Outcomes over outputs", d: "We're judged by revenue moved, not decks delivered." },
  { icon: Heart, t: "Client-first", d: "Long-term partnerships, never short-term wins." },
  { icon: Zap, t: "Speed of execution", d: "Bias for shipping. Test fast, learn fast, scale faster." },
  { icon: Trophy, t: "Craft + rigour", d: "World-class creative meets engineering-grade tracking." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About CliqRush"
        title="A growth agency built around one thing: your revenue."
        description="We're strategists, marketers, designers and engineers helping ambitious businesses turn marketing into a predictable growth channel."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Story" title="Born from in-house. Built for outcomes." center={false} />
            <div className="mt-6 space-y-4 text-base text-muted-foreground">
              <p>CliqRush started as the in-house growth team for a fast-scaling D2C brand. After scaling revenue 14x in 18 months, founders started asking us to do the same for them.</p>
              <p>Five years and 100+ projects later, we've grown into a full-stack digital marketing agency working with startups, e-commerce brands, B2B companies and service businesses across India and globally.</p>
              <p>Our promise is simple: marketing that's accountable to revenue — with the craft, transparency and speed of a true growth partner.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border bg-card p-6 shadow-card">
              <Target className="h-7 w-7 text-brand" />
              <h3 className="mt-3 font-bold text-foreground">Mission</h3>
              <p className="mt-2 text-sm text-muted-foreground">Make great marketing accessible, measurable and accountable for every business that wants to grow.</p>
            </div>
            <div className="rounded-3xl border bg-card p-6 shadow-card">
              <Eye className="h-7 w-7 text-brand" />
              <h3 className="mt-3 font-bold text-foreground">Vision</h3>
              <p className="mt-2 text-sm text-muted-foreground">To be the go-to growth partner for 1,000 ambitious businesses in the next 5 years.</p>
            </div>
            <div className="col-span-full rounded-3xl border bg-gradient-brand p-6 text-brand-foreground shadow-elegant">
              <Users className="h-7 w-7" />
              <h3 className="mt-3 font-bold">Why businesses choose CliqRush</h3>
              <p className="mt-2 text-sm opacity-90">Senior strategists on every account, weekly reporting, channel-agnostic recommendations, and an obsession with making the revenue number.</p>
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-surface">
        <Section>
          <SectionHeading eyebrow="What we value" title="The principles we hire, work and grow by." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.t} className="rounded-3xl border bg-card p-6 shadow-card">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-brand text-brand-foreground"><v.icon className="h-5 w-5" /></div>
                <div className="mt-4 font-bold text-foreground">{v.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <Section>
        <SectionHeading eyebrow="The Team" title="Senior operators on every account." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((p) => (
            <div key={p.name} className="rounded-3xl border bg-card p-6 shadow-card">
              <div className="h-32 rounded-2xl bg-gradient-brand opacity-90" />
              <div className="mt-5 text-lg font-bold text-foreground">{p.name}</div>
              <div className="text-sm font-semibold text-brand">{p.role}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABand />
    </SiteLayout>
  );
}
