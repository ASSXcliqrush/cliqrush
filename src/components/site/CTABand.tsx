import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site-data";

export function CTABand({
  title = "Ready to turn clicks into customers?",
  description = "Book a free 30-minute strategy call. We'll review your funnel and share a custom growth plan — no obligation.",
}: { title?: string; description?: string }) {
  return (
    <section className="relative mx-auto my-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 text-brand-foreground shadow-elegant sm:p-14">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40 mix-blend-overlay" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="text-balance text-3xl font-bold sm:text-4xl">{title}</h3>
            <p className="mt-3 max-w-xl text-white/85">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button asChild size="lg" className="rounded-full bg-white text-brand hover:bg-white/90">
              <Link to="/contact">Book Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20">
              <a href={`tel:${CONTACT.phone}`}><Phone className="mr-2 h-4 w-4" /> Call Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
