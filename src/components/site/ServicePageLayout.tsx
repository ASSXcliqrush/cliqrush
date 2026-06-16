import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";
import { CTABand } from "@/components/site/CTABand";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceFeature { icon: LucideIcon; title: string; desc: string }

export function ServicePageLayout({
  eyebrow, title, description, features, faqs, formTitle = "Talk to a growth strategist",
  formDescription = "Tell us your goals. We'll send a tailored proposal within 48 hours.",
  extra,
}: {
  eyebrow: string;
  title: string;
  description: string;
  features: ServiceFeature[];
  faqs?: { q: string; a: string }[];
  formTitle?: string;
  formDescription?: string;
  extra?: ReactNode;
}) {
  return (
    <SiteLayout>
      <PageHero eyebrow={eyebrow} title={title} description={description}>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full bg-gradient-brand text-brand-foreground shadow-elegant">
            <Link to="/contact">Book Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/contact">Get Free Proposal</Link>
          </Button>
        </div>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="What's included" title={`Everything you need to win at ${eyebrow.toLowerCase()}.`} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-3xl border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-brand text-brand-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {extra}

      <CTABand />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="FAQs" title="Common questions." center={false} />
            <div className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                {(faqs ?? defaultFaqs).map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <LeadForm title={formTitle} description={formDescription} cta="Send Inquiry"
            fields={["name", "company", "website", "phone", "email", "budget"]} />
        </div>
      </Section>
    </SiteLayout>
  );
}

const defaultFaqs = [
  { q: "How quickly will I see results?", a: "Paid channels show signal within 2–4 weeks. SEO and content typically compound from month 3 onwards. We share a 90-day plan with milestones." },
  { q: "What's the typical engagement?", a: "Most engagements are 6–12 month retainers, with monthly reviews. We're outcomes-focused, not hours-focused." },
  { q: "Do you work with my industry?", a: "We work across e-commerce, SaaS, fintech, healthcare, real estate, services and local businesses. Ask us about your niche." },
  { q: "How do you report performance?", a: "Live dashboards plus weekly + monthly reports. Every metric tied back to leads, pipeline and revenue." },
];

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-foreground"><Check className="mt-0.5 h-5 w-5 text-brand" /> {i}</li>
      ))}
    </ul>
  );
}
