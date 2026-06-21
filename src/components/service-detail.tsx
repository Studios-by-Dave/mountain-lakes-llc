import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CTABand, PageHero, Section, SectionHeading } from "@/components/section";

export function ServiceDetail({
  eyebrow,
  title,
  subtitle,
  image,
  intro,
  highlights,
  process,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  intro: string[];
  highlights: string[];
  process: { t: string; d: string }[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} image={image} />
      <Section>
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5 text-foreground/85 text-lg">
            {intro.map((p, i) => <p key={i}>{p}</p>)}
            <Link to="/contact" className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Request a Free Estimate
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
            <div className="text-xs uppercase tracking-[0.22em] text-secondary font-semibold">What's included</div>
            <ul className="mt-5 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex gap-3 text-foreground/85">
                  <Check className="h-5 w-5 mt-0.5 text-secondary shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <section className="bg-muted/60 border-y border-border">
        <div className="container-page py-20">
          <SectionHeading eyebrow="Our process" title="What working with us looks like." />
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {process.map((s, i) => (
              <li key={s.t} className="rounded-xl border border-border bg-card p-6">
                <div className="font-display text-sm tracking-widest text-secondary">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-3 font-display text-xl text-foreground">{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CTABand />
    </>
  );
}