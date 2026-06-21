import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/mlc-logo.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/service-area", label: "Service Area" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Mountain Lakes Construction LLC" width={48} height={48} className="h-12 w-12 rounded-full ring-1 ring-border" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-base font-semibold text-foreground">Mountain Lakes</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-secondary">Construction LLC</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+18005551234" className="hidden xl:inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary">
            <Phone className="h-4 w-4" /> (800) 555-1234
          </a>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90">
            Free Estimate
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-foreground/80 hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 inline-flex justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">
              Request Free Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}