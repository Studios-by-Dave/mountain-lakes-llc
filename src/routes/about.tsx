import { createFileRoute, Link } from "@tanstack/react-router";
import { CTABand, PageHero, Section, SectionHeading } from "@/components/section";
import hero from "@/assets/portfolio-1.jpg";
import { Award, HardHat, Handshake, Mountain } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mountain Lakes Construction LLC" },
      { name: "description", content: "Locally rooted in Shelby and Forest City, NC — meet the team building custom homes, decks, pools and remodels across the Carolina foothills." },
      { property: "og:title", content: "About Mountain Lakes Construction" },
      { property: "og:description", content: "Local custom builder serving Shelby, Forest City and Western North Carolina." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="A local builder you'd be proud to introduce to your neighbors." subtitle="Mountain Lakes Construction is a family-run general contractor serving Shelby, Forest City and the surrounding Western North Carolina foothills." image={hero} />
      <Section>
        <div className="container-page grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Our story" title="Built in these mountains, for the people who live in them." />
            <div className="mt-6 space-y-5 text-foreground/85">
              <p>We started Mountain Lakes Construction because we love this part of North Carolina — the lakes, the ridgelines, the small-town craftsmanship — and we wanted to build the kind of homes and outdoor spaces that fit it.</p>
              <p>Today we run two offices in Shelby and Forest City, with crews that have grown up in Cleveland and Rutherford counties. We take on a deliberately small number of projects each year so every client gets our principals on site, not just on the contract.</p>
              <p>From custom A-frames overlooking the lake to a kitchen you've been dreaming about for a decade — we'd love to build it with you.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: Mountain, t: "Foothills natives", d: "Born, raised and building here." },
              { icon: HardHat, t: "In-house crews", d: "Not a subcontracted shell." },
              { icon: Handshake, t: "Direct communication", d: "Talk to the owners, not a salesperson." },
              { icon: Award, t: "Workmanship warranty", d: "Backed in writing on every build." },
            ].map((v) => (
              <div key={v.t} className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                <v.icon className="h-6 w-6 text-secondary" />
                <div className="mt-3 font-semibold text-foreground">{v.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <section className="bg-muted/60 border-y border-border">
        <div className="container-page py-20 grid gap-8 md:grid-cols-3 text-center">
          {[
            ["20+", "Years building locally"],
            ["150+", "Custom projects delivered"],
            ["2", "Office locations serving WNC"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-5xl text-primary">{n}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>
      <Section>
        <div className="container-page">
          <SectionHeading eyebrow="How we work" title="A simple, transparent process." />
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Discovery", "We meet on site, walk the property, and listen to what you actually want."],
              ["02", "Design", "We refine a plan, scope, and a real budget — no vague allowances."],
              ["03", "Build", "Our crews handle permits, materials, and daily updates while we build."],
              ["04", "Handoff", "Final walkthrough, warranty docs, and a relationship that doesn't end."],
            ].map(([n, t, d]) => (
              <li key={n} className="rounded-xl border border-border bg-card p-6">
                <div className="font-display text-sm tracking-widest text-secondary">{n}</div>
                <div className="mt-3 font-display text-xl text-foreground">{t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Start your project</Link>
          </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}