import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CliqRush — Book a Free Strategy Call" },
      { name: "description", content: "Get in touch with CliqRush. Call, WhatsApp or book a free 30-minute strategy session." },
      { property: "og:title", content: "Contact CliqRush" },
      { property: "og:description", content: "Let's talk about growth. Free 30-min strategy call." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const waUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi CliqRush, I'd like to discuss a project.")}`;
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's build your next growth chapter."
        description="Book a free 30-minute strategy call. We'll review your business and share a custom growth plan — no obligation, no fluff."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="grid gap-4">
            <ContactCard icon={Phone} title="Call us" sub={CONTACT.phoneDisplay} href={`tel:${CONTACT.phone}`} />
            <ContactCard icon={MessageCircle} title="WhatsApp" sub="Chat with our team instantly" href={waUrl} />
            <ContactCard icon={Mail} title="Email" sub={CONTACT.email} href={`mailto:${CONTACT.email}`} />
            <ContactCard icon={MapPin} title="Office" sub={CONTACT.address} />
            <ContactCard icon={Clock} title="Hours" sub={CONTACT.hours} />
            <div className="overflow-hidden rounded-3xl border bg-card shadow-card">
              <iframe
                title="CliqRush office location"
                src="https://www.google.com/maps?q=Bengaluru&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>
          <LeadForm
            title="Send us a message"
            description="Share a few details and we'll get back within one business day."
            cta="Send Message"
            fields={["name", "company", "email", "phone", "service", "message"]}
          />
        </div>
      </Section>
    </SiteLayout>
  );
}

function ContactCard({ icon: Icon, title, sub, href }: { icon: any; title: string; sub: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border bg-card p-5 shadow-card transition hover:border-brand/40 hover:shadow-elegant">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-brand-foreground"><Icon className="h-5 w-5" /></div>
      <div className="min-w-0">
        <div className="font-semibold text-foreground">{title}</div>
        <div className="truncate text-sm text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner;
}
