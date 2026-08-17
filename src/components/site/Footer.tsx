import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { CONTACT, SERVICES } from "@/lib/site-data";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[oklch(0.16_0.03_265)] text-white">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="rounded-xl bg-white/95 p-3 inline-block">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-sm text-white/70">
              CliqRush is a performance-driven digital marketing agency helping
              businesses generate more leads, customers, and revenue.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/80">
              <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4 text-brand-cyan" /> {CONTACT.phoneDisplay}</a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4 text-brand-cyan" /> {CONTACT.email}</a>
              <a href={CONTACT.gmb} target="_blank" rel="noreferrer" className="flex items-start gap-2 hover:text-white"><MapPin className="mt-0.5 h-4 w-4 text-brand-cyan" /> {CONTACT.address}</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {SERVICES.map((s) => (
                <li key={s.slug}><Link to={s.to} className="hover:text-white">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Get growth insights</h4>
            <p className="mt-4 text-sm text-white/70">Tactics, teardowns and case studies. One email a week. No fluff.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" required placeholder="you@company.com" className="bg-white/10 text-white placeholder:text-white/40 border-white/20" />
              <Button type="submit" className="bg-gradient-brand text-brand-foreground"><ArrowRight className="h-4 w-4" /></Button>
            </form>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Twitter, Youtube].map((I, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/70 hover:border-brand-cyan hover:text-white">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} CliqRush Digital. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
