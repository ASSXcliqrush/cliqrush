import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Sparkles } from "lucide-react";

type Field = "name" | "company" | "website" | "phone" | "email" | "budget" | "service" | "message";

export function LeadForm({
  title = "Get a Free Digital Marketing Audit",
  description = "Tell us about your business. We'll review your funnel and send back a custom growth plan within 48 hours.",
  cta = "Request Free Audit",
  fields = ["name", "company", "website", "phone", "email", "budget"] as Field[],
  variant = "card",
}: {
  title?: string;
  description?: string;
  cta?: string;
  fields?: Field[];
  variant?: "card" | "plain";
}) {
  const [sent, setSent] = useState(false);

  const labelMap: Record<Field, string> = {
    name: "Your Name",
    company: "Company",
    website: "Website",
    phone: "Phone",
    email: "Work Email",
    budget: "Monthly Marketing Budget",
    service: "Service Interested In",
    message: "Tell us about your project",
  };

  const wrapper =
    variant === "card"
      ? "rounded-3xl border bg-card p-6 shadow-card sm:p-8"
      : "";

  return (
    <div className={wrapper}>
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand">
        <Sparkles className="h-4 w-4" /> Free Audit · No Obligation
      </div>
      <h3 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>

      {sent ? (
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-surface p-5">
          <CheckCircle2 className="mt-0.5 h-6 w-6 text-[oklch(0.7_0.17_155)]" />
          <div>
            <div className="font-semibold text-foreground">Thanks — we got your details.</div>
            <p className="text-sm text-muted-foreground">A growth strategist will reach out within one business day.</p>
          </div>
        </div>
      ) : (
        <form
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          {fields.map((f) => (
            <div key={f} className={f === "message" ? "sm:col-span-2" : ""}>
              <Label className="text-xs font-medium text-foreground/80" htmlFor={f}>{labelMap[f]}</Label>
              {f === "message" ? (
                <Textarea id={f} required className="mt-1.5" rows={4} placeholder="A few lines about your goals..." />
              ) : f === "budget" ? (
                <select id={f} required className="mt-1.5 flex h-10 w-full rounded-md border bg-background px-3 text-sm">
                  <option value="">Select a range</option>
                  <option>Under ₹50,000</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>₹1,00,000 – ₹3,00,000</option>
                  <option>₹3,00,000 – ₹10,00,000</option>
                  <option>₹10,00,000+</option>
                </select>
              ) : f === "service" ? (
                <select id={f} required className="mt-1.5 flex h-10 w-full rounded-md border bg-background px-3 text-sm">
                  <option value="">Select a service</option>
                  <option>SEO</option><option>Performance Marketing</option><option>Website Development</option>
                  <option>Content Marketing</option><option>Video Creation</option><option>Social Media Marketing</option>
                </select>
              ) : (
                <Input id={f} required type={f === "email" ? "email" : f === "phone" ? "tel" : "text"} className="mt-1.5" />
              )}
            </div>
          ))}
          <div className="sm:col-span-2">
            <Button type="submit" className="w-full bg-gradient-brand text-brand-foreground shadow-elegant hover:opacity-95">
              {cta}
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">We respect your privacy. No spam, ever.</p>
          </div>
        </form>
      )}
    </div>
  );
}
