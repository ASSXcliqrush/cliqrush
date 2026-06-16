import { MessageCircle, Phone, Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/site-data";

export function FloatingCTA() {
  const waUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi CliqRush, I'd like to discuss a project.")}`;
  return (
    <>
      {/* Desktop floating buttons */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 md:flex">
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-3 text-sm font-semibold text-brand-foreground shadow-elegant transition hover:scale-[1.02]"
        >
          <Calendar className="h-4 w-4" /> Free Consultation
        </Link>
        <a
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.72_0.18_150)] text-white shadow-elegant transition hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-px border-t bg-background/95 backdrop-blur md:hidden">
        <a href={`tel:${CONTACT.phone}`} className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-foreground">
          <Phone className="h-5 w-5 text-brand" /> Call Now
        </a>
        <a href={waUrl} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-foreground">
          <MessageCircle className="h-5 w-5 text-[oklch(0.65_0.18_150)]" /> WhatsApp
        </a>
        <Link to="/contact" className="flex flex-col items-center justify-center gap-1 bg-gradient-brand py-3 text-xs font-semibold text-brand-foreground">
          <Calendar className="h-5 w-5" /> Get Proposal
        </Link>
      </div>
      {/* spacer for mobile bar */}
      <div className="h-16 md:hidden" />
    </>
  );
}
