import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Section, SectionHeading } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";
import { CTABand } from "@/components/site/CTABand";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Phone, Star, Check, TrendingUp, LineChart, BarChart3, Sparkles, ArrowUpRight,
  Target, Eye, Users, Zap, MessageSquare, Cpu, Clock,
} from "lucide-react";
import { SERVICES, TRUST_METRICS, PROCESS, TESTIMONIALS, CASE_STUDIES, CONTACT } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CliqRush — Digital Marketing Agency That Drives Revenue" },
      { name: "description", content: "CliqRush is a performance marketing agency delivering SEO, paid ads, content, websites and social media that turn clicks into qualified leads." },
      { property: "og:title", content: "CliqRush — Digital Marketing Agency That Drives Revenue" },
      { property: "og:description", content: "CliqRush is a performance marketing agency delivering SEO, paid ads, content, websites and social media that turn clicks into qualified leads." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <WhyCliqRush />
      <DashboardMock />
      <ProcessTimeline />
      <CaseStudiesPreview />
      <Testimonials />
      <AuditLead />
      <CTABand />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Growth · Performance · Revenue
            </div>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Turn Clicks Into <span className="gradient-text">Customers</span> With Performance-Driven Digital Marketing
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We help businesses generate qualified leads, increase sales, and scale revenue
              through SEO, Paid Advertising, Content Marketing, and Website Development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-gradient-brand px-6 text-brand-foreground shadow-elegant hover:opacity-95">
                <Link to="/contact">Book Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-foreground/15 px-6">
                <Link to="/contact">Get Free Proposal</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {["#7C3AED","#2563EB","#06B6D4","#0EA5E9"].map((c, i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background" style={{ background: c }} />
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                <span className="ml-1 font-medium text-foreground">4.9/5</span>
                <span>from 100+ brands</span>
              </div>
            </div>
          </div>
          <DashboardMock compact />
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <div className="border-y bg-surface/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4 sm:px-6 lg:px-8">
        {TRUST_METRICS.map((m) => (
          <div key={m.label} className="text-center">
            <div className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              <span className="gradient-text">{m.value}</span>
            </div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServicesGrid() {
  return (
    <Section>
      <SectionHeading
        eyebrow="What We Do"
        title="Full-stack growth services, built around your revenue."
        description="One team. Every channel. Every campaign engineered around measurable outcomes — not vanity metrics."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            to={s.to}
            className="group relative overflow-hidden rounded-3xl border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition group-hover:opacity-30" />
            <div className="relative">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-elegant">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Learn more <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function WhyCliqRush() {
  const features = [
    { icon: Target, t: "ROI-Focused Strategies", d: "Every plan starts and ends with the revenue number it has to move." },
    { icon: Eye, t: "Transparent Reporting", d: "Live dashboards and weekly reports. Always know what's working." },
    { icon: Users, t: "Dedicated Growth Team", d: "Strategist, ads, SEO, content and design — all in your corner." },
    { icon: LineChart, t: "Performance Tracking", d: "Server-side tracking and clean attribution for confident decisions." },
    { icon: Zap, t: "Custom Marketing Plans", d: "Built for your stage, ICP and economics — no copy-paste retainers." },
    { icon: MessageSquare, t: "Fast Communication", d: "Slack-speed responses. Real humans, not ticket queues." },
    { icon: Cpu, t: "Data-Driven Decisions", d: "Experiments, not opinions. Tested weekly, doubled-down monthly." },
    { icon: TrendingUp, t: "Long-Term Growth Focus", d: "We build compounding channels, not short-term spikes." },
  ];
  return (
    <section className="relative bg-surface">
      <Section>
        <SectionHeading
          eyebrow="Why CliqRush"
          title="An agency that thinks and operates like your in-house growth team."
          description="We trade fluff for fundamentals. The result: marketing that's accountable to revenue."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.t} className="rounded-2xl border bg-card p-6 shadow-card">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-semibold text-foreground">{f.t}</div>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}

function DashboardMock({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative ${compact ? "" : "mx-auto max-w-4xl"}`}>
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" />
      <div className="relative overflow-hidden rounded-3xl border bg-card p-5 shadow-elegant">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Growth Overview</div>
            <div className="mt-1 text-xl font-bold text-foreground">Last 90 days</div>
          </div>
          <div className="inline-flex items-center gap-1 rounded-full bg-[oklch(0.95_0.07_155)] px-2.5 py-1 text-xs font-semibold text-[oklch(0.45_0.15_155)]">
            <TrendingUp className="h-3.5 w-3.5" /> +218%
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { k: "Leads", v: "1,284", d: "+186%" },
            { k: "ROAS", v: "4.6x", d: "+62%" },
            { k: "Revenue", v: "₹1.42Cr", d: "+218%" },
          ].map((c) => (
            <div key={c.k} className="rounded-xl border bg-surface p-3">
              <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{c.k}</div>
              <div className="mt-1 text-lg font-bold text-foreground">{c.v}</div>
              <div className="text-xs font-semibold text-[oklch(0.55_0.16_155)]">{c.d}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border bg-gradient-to-b from-surface to-card p-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 font-medium"><BarChart3 className="h-3.5 w-3.5 text-brand" /> Qualified Leads</span>
            <span>Weekly</span>
          </div>
          <svg viewBox="0 0 320 110" className="mt-3 h-32 w-full">
            <defs>
              <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.546 0.225 263)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="oklch(0.546 0.225 263)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,90 C30,80 50,70 80,60 C110,50 130,55 160,40 C190,28 210,32 240,22 C270,14 295,18 320,8 L320,110 L0,110 Z" fill="url(#g1)" />
            <path d="M0,90 C30,80 50,70 80,60 C110,50 130,55 160,40 C190,28 210,32 240,22 C270,14 295,18 320,8" fill="none" stroke="oklch(0.546 0.225 263)" strokeWidth="2.5" />
          </svg>
          <div className="mt-2 grid grid-cols-7 text-center text-[10px] text-muted-foreground">
            {["W1","W2","W3","W4","W5","W6","W7"].map((w) => <div key={w}>{w}</div>)}
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {[
            { c: "Google Ads", v: "5.2x", k: "ROAS" },
            { c: "Meta Ads", v: "4.1x", k: "ROAS" },
          ].map((x) => (
            <div key={x.c} className="flex items-center justify-between rounded-xl border bg-surface p-3">
              <div>
                <div className="text-xs text-muted-foreground">{x.c}</div>
                <div className="text-sm font-semibold text-foreground">{x.v} {x.k}</div>
              </div>
              <div className="h-8 w-16 rounded-md bg-gradient-brand opacity-90" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessTimeline() {
  return (
    <Section>
      <SectionHeading
        eyebrow="The Process"
        title="A clear, proven path from first call to scaled growth."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROCESS.map((p, i) => (
          <div key={p.step} className="relative rounded-3xl border bg-card p-6 shadow-card">
            <div className="absolute -top-4 left-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-3 py-1 text-xs font-bold text-brand-foreground shadow-elegant">
              Step {p.step}
            </div>
            <h3 className="mt-3 text-lg font-bold text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand">
              <Clock className="h-3.5 w-3.5" /> Phase {i + 1} of 6
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CaseStudiesPreview() {
  return (
    <section className="relative bg-surface">
      <Section>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Proof, not promises"
            title="Results across industries, channels, and stages."
            description="A snapshot of recent client work."
            center={false}
          />
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/case-studies">View All Case Studies <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CASE_STUDIES.slice(0, 3).map((c) => (
            <article key={c.slug} className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="relative h-44 overflow-hidden bg-gradient-brand">
                <div className="absolute inset-0 bg-gradient-mesh opacity-50 mix-blend-overlay" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <div className="text-xs font-medium opacity-80">{c.industry}</div>
                    <div className="text-lg font-bold">{c.client}</div>
                  </div>
                  <div className="rounded-full bg-white/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur">{c.tag}</div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="grid grid-cols-2 gap-3">
                  {c.results.slice(0, 4).map((r) => (
                    <div key={r.label} className="rounded-xl bg-surface p-3">
                      <div className="text-lg font-bold text-foreground"><span className="gradient-text">{r.value}</span></div>
                      <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{r.label}</div>
                    </div>
                  ))}
                </div>
                <Link to="/case-studies" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Read case study <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </section>
  );
}

function Testimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Loved by founders & marketers"
        title="What clients say about working with CliqRush."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="flex flex-col rounded-3xl border bg-card p-6 shadow-card">
            <div className="flex items-center gap-1">
              {[...Array(t.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
            </div>
            <blockquote className="mt-4 flex-1 text-sm text-foreground/90">"{t.quote}"</blockquote>
            <figcaption className="mt-5 border-t pt-4">
              <div className="text-sm font-semibold text-foreground">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role} · {t.company}</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-brand">{t.industry}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

function AuditLead() {
  return (
    <section className="relative">
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
              Free Marketing Audit
            </div>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Get a Free Digital Marketing Audit worth ₹25,000.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A senior strategist will review your website, SEO, ads and funnel — and send a custom growth plan within 48 hours.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Technical SEO + on-page review",
                "Paid ads account audit (Google + Meta)",
                "Funnel & conversion teardown",
                "Competitor benchmarking",
                "90-day growth roadmap",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-5 w-5 text-brand" /> {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold hover:border-brand hover:text-brand">
                <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
          <LeadForm />
        </div>
      </Section>
    </section>
  );
}
