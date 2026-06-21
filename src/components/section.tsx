import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[color:var(--ink)] text-white">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-55"
          aria-hidden
        />
      )}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden />
      <div className="container-page relative py-24 md:py-32">
        {eyebrow && (
          <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--primary-glow)] mb-4">{eyebrow}</div>
        )}
        <h1 className="text-balance text-4xl md:text-6xl font-display font-medium leading-[1.05] max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-white/80">{subtitle}</p>}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`py-20 md:py-28 ${className}`}>{children}</section>;
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <div className="text-xs uppercase tracking-[0.22em] text-secondary font-semibold mb-3">{eyebrow}</div>}
      <h2 className="text-balance text-3xl md:text-4xl font-display text-foreground">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function CTABand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-page py-16 md:py-20 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h3 className="font-display text-3xl md:text-4xl text-balance">Ready to build something that lasts?</h3>
          <p className="mt-2 text-primary-foreground/85 max-w-xl">Tell us about your project. We'll walk your site, talk through your vision, and send you a clear, honest estimate.</p>
        </div>
        <a href="/contact" className="inline-flex justify-center items-center rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-primary hover:bg-white/90 shadow-sm">
          Request a Free Estimate
        </a>
      </div>
    </section>
  );
}