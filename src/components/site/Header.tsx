import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Calendar, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { SERVICES, CONTACT } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "glass shadow-soft" : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 lg:gap-8 lg:px-8 lg:py-6">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-brand" activeProps={{ className: "text-brand" }}>Home</Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-brand">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-2 gap-1 rounded-2xl border bg-card p-3 shadow-elegant">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to={s.to}
                      className="group flex items-start gap-3 rounded-xl p-3 hover:bg-surface"
                    >
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-brand text-brand-foreground">
                        <s.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-foreground group-hover:text-brand">{s.title}</div>
                        <div className="truncate text-xs text-muted-foreground">{s.tagline}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/case-studies" className="text-sm font-medium text-foreground/80 hover:text-brand">Case Studies</Link>
          <Link to="/blog" className="text-sm font-medium text-foreground/80 hover:text-brand">Blog</Link>
          <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-brand">About</Link>
          <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-brand">Contact</Link>
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium text-foreground hover:border-brand hover:text-brand">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <Button asChild className="rounded-full bg-gradient-brand text-brand-foreground shadow-elegant hover:opacity-95">
            <Link to="/contact"><Calendar className="mr-2 h-4 w-4" /> Book Free Consultation</Link>
          </Button>
        </div>
        <button
          aria-label="Menu"
          className="grid h-10 w-10 place-items-center rounded-xl border lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-background lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {[
              { to: "/", label: "Home" },
              ...SERVICES.map((s) => ({ to: s.to, label: s.title })),
              { to: "/case-studies", label: "Case Studies" },
              { to: "/blog", label: "Blog" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to + l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-surface"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Button asChild className="flex-1 bg-gradient-brand text-brand-foreground">
                <Link to="/contact" onClick={() => setOpen(false)}>Book Free Call</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
