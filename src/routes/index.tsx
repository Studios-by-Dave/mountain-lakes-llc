import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Hammer, Home as HomeIcon, ShieldCheck, Star, Trees, Waves } from "lucide-react";
import hero from "@/assets/hero-aframe-lake.jpg";
import decks from "@/assets/service-decks.jpg";
import pools from "@/assets/service-pools.jpg";
import aframe from "@/assets/service-aframe.jpg";
import remodel from "@/assets/service-remodel.jpg";
import { CTABand, Section, SectionHeading } from "@/components/section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mountain Lakes Construction LLC | Custom Homes, Decks & Pools — Shelby & Forest City, NC" },
      { name: "description", content: "Western North Carolina's specialist in custom A-frame builds, decks, pools and whole-home remodels. Serving Shelby, Forest City and the Carolina foothills." },
      { property: "og:title", content: "Mountain Lakes Construction LLC" },
      { property: "og:description", content: "Custom construction, A-frames, decks, pools & remodels across Western North Carolina." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Custom A-frame lake home in the Carolina foothills at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden />
        <div className="relative container-page py-28 md:py-40 text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-3 py-1 text-xs uppercase tracking-[0.2em]">
            <Trees className="h-3.5 w-3.5" /> Shelby · Forest City · Western NC
          </div>
          <h1 className="mt-6 max-w-3xl text-balance text-5xl md:text-7xl font-display leading-[1.02]">
            Building your vision in the Carolina foothills.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Custom new construction, A-frame cabins, decks, pools and whole-home remodels — designed and built by a local team that treats your home like it's our own.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[color:var(--primary-glow)] px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-white transition">
              Get a Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition">
              See Our Work
            </Link>
          </div>
          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-6 text-sm">
            <div><div className="font-display text-3xl">20+</div><div className="text-white/65">Years building local</div></div>
            <div><div className="font-display text-3xl">2</div><div className="text-white/65">Office locations</div></div>
            <div><div className="font-display text-3xl">100%</div><div className="text-white/65">Custom builds</div></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section>
        <div className="container-page">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="What we build"
              title="Craftsmanship across every corner of your property."
              intro="From the first sketch to the final walkthrough, our team manages the design and build of distinctive outdoor and indoor spaces."
            />
            <Link to="/services" className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { to: "/services/a-frame", title: "A-Frame Builds", text: "Distinctive cabins and vacation homes — our specialty.", img: aframe, icon: Compass },
              { to: "/services/decks", title: "Custom Decks", text: "Multi-level, covered, composite or hardwood.", img: decks, icon: HomeIcon },
              { to: "/services/pools", title: "Pools & Hardscape", text: "In-ground pools, patios, fire features and more.", img: pools, icon: Waves },
              { to: "/services/remodeling", title: "Remodeling", text: "Kitchens, baths, additions & whole-home renovations.", img: remodel, icon: Hammer },
            ].map((s) => (
              <a
                key={s.to}
                href={s.to}
                className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[color:var(--ink)] via-[color:var(--ink)]/70 to-transparent text-white">
                  <s.icon className="h-5 w-5 text-[color:var(--primary-glow)]" />
                  <h3 className="mt-2 font-display text-xl">{s.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{s.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Why us */}
      <section className="bg-muted/60 border-y border-border">
        <div className="container-page py-20 md:py-28 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why Mountain Lakes"
              title="True custom work. Local roots. Honest process."
              intro="We aren't a production builder. Every project is shaped by your site, your lifestyle, and the kind of craftsmanship that gets passed down."
            />
            <ul className="mt-8 space-y-5">
              {[
                ["Specialty A-frame expertise", "A niche we love — distinctive geometry done right."],
                ["Dual-location reach", "Two offices serving Cleveland & Rutherford counties and beyond."],
                ["Design through build", "One accountable team from first sketch to final punch list."],
                ["Licensed & insured in NC", "Permitting, inspections and warranties handled in-house."],
              ].map(([title, text]) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-semibold text-foreground">{title}</div>
                    <div className="text-muted-foreground text-sm mt-0.5">{text}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src={aframe} alt="Modern A-frame in the forest" loading="lazy" className="rounded-2xl shadow-[var(--shadow-elegant)] aspect-[4/3] object-cover" />
            <div className="hidden md:block absolute -bottom-8 -left-8 max-w-xs rounded-xl bg-card p-5 shadow-[var(--shadow-elegant)] border border-border">
              <div className="flex gap-1 text-[color:var(--primary)]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-2 text-sm text-foreground italic">"They built our lake A-frame exactly the way we imagined it. The craftsmanship is incredible."</p>
              <p className="mt-2 text-xs text-muted-foreground">— Karen & Mike, Lake Lure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <Section>
        <div className="container-page">
          <SectionHeading eyebrow="Recent work" title="A few of the places we've called a job site." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { img: aframe, t: "Lakeside A-Frame", c: "Forest City, NC" },
              { img: pools, t: "Hillside Pool & Patio", c: "Shelby, NC" },
              { img: remodel, t: "Modern Farmhouse Kitchen", c: "Rutherfordton, NC" },
            ].map((p) => (
              <div key={p.t} className="overflow-hidden rounded-xl border border-border bg-card">
                <img src={p.img} alt={p.t} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wider text-secondary font-semibold">{p.c}</div>
                  <div className="mt-1 font-display text-xl text-foreground">{p.t}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/portfolio" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80">
              View full portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
