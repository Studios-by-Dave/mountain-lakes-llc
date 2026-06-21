import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/mlc-logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[color:var(--ink)] text-[color:var(--primary-foreground)]">
      <div className="container-page py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="" width={56} height={56} className="h-14 w-14 rounded-full ring-1 ring-white/20" />
            <div>
              <div className="font-display text-lg">Mountain Lakes</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/60">Construction LLC</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/70 max-w-xs">
            Custom craftsmanship rooted in the Carolina foothills. Building your vision — from lakefront A-frames to family remodels.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {[
              ["/about", "About"],
              ["/services", "Services"],
              ["/portfolio", "Portfolio"],
              ["/service-area", "Service Area"],
              ["/testimonials", "Reviews"],
              ["/faq", "FAQ"],
            ].map(([to, label]) => (
              <li key={to}><Link to={to} className="hover:text-white">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Visit</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--primary-glow)]" /><span>Shelby, NC<br/>Cleveland County</span></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--primary-glow)]" /><span>Forest City, NC<br/>Rutherford County</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-[color:var(--primary-glow)]" /><a href="tel:+18005551234" className="hover:text-white">(800) 555-1234</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-[color:var(--primary-glow)]" /><a href="mailto:info@mountainlakesconstruction.com" className="hover:text-white break-all">info@mountainlakesconstruction.com</a></li>
          </ul>
          <Link to="/contact" className="mt-5 inline-flex items-center justify-center rounded-md bg-[color:var(--primary-glow)] px-4 py-2.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-white">
            Get Your Free Estimate
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Mountain Lakes Construction LLC. All rights reserved.</p>
          <p>Licensed & insured general contractor — North Carolina.</p>
        </div>
      </div>
    </footer>
  );
}