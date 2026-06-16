import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { CASE_STUDIES } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Real Growth Results | CliqRush" },
      { name: "description", content: "Real client results across SEO, paid ads, content and web. Leads, revenue and ROAS — measured and reported." },
      { property: "og:title", content: "CliqRush Case Studies" },
      { property: "og:description", content: "Proof, not promises. Real results from real clients." },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Case Studies"
        title="Real growth. Real numbers. Real revenue."
        description="A selection of recent client work across industries — from D2C to fintech to B2B SaaS."
      />
      <Section>
        <div className="grid gap-8">
          {CASE_STUDIES.map((c) => (
            <article key={c.slug} className="overflow-hidden rounded-3xl border bg-card shadow-card">
              <div className="grid lg:grid-cols-[1fr_1.2fr]">
                <div className="relative min-h-[260px] bg-gradient-brand p-8 text-brand-foreground">
                  <div className="absolute inset-0 bg-gradient-mesh opacity-40 mix-blend-overlay" />
                  <div className="relative">
                    <div className="inline-flex items-center rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur">{c.tag}</div>
                    <h3 className="mt-4 text-2xl font-bold sm:text-3xl">{c.client}</h3>
                    <div className="text-sm opacity-85">{c.industry}</div>
                    <div className="mt-8 grid grid-cols-2 gap-3">
                      {c.results.map((r) => (
                        <div key={r.label} className="rounded-xl bg-white/10 p-3 backdrop-blur">
                          <div className="text-xl font-bold">{r.value}</div>
                          <div className="text-[11px] font-medium uppercase tracking-wider opacity-85">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand">Challenge</div>
                  <p className="mt-2 text-foreground">{c.challenge}</p>
                  <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand">Strategy</div>
                  <p className="mt-2 text-foreground">{c.strategy}</p>
                  <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand">Results</div>
                  <p className="mt-2 text-muted-foreground">{c.results.map(r => `${r.value} ${r.label}`).join(" · ")}</p>
                  <svg viewBox="0 0 320 80" className="mt-6 h-20 w-full">
                    <defs>
                      <linearGradient id={`g-${c.slug}`} x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.546 0.225 263)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="oklch(0.546 0.225 263)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,70 C40,60 80,45 120,40 C160,35 200,25 240,18 C270,12 300,8 320,4 L320,80 L0,80 Z" fill={`url(#g-${c.slug})`} />
                    <path d="M0,70 C40,60 80,45 120,40 C160,35 200,25 240,18 C270,12 300,8 320,4" fill="none" stroke="oklch(0.546 0.225 263)" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CTABand title="Want results like these for your business?" description="Book a free strategy call and we'll show you a custom roadmap." />
    </SiteLayout>
  );
}
