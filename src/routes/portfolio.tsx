import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { CTABand, PageHero, Section } from "@/components/section";
import decks from "@/assets/service-decks.jpg";
import pools from "@/assets/service-pools.jpg";
import aframe from "@/assets/service-aframe.jpg";
import remodel from "@/assets/service-remodel.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import hero from "@/assets/hero-aframe-lake.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Custom Builds & Remodels | Mountain Lakes Construction" },
      { name: "description", content: "A gallery of recent custom homes, A-frame cabins, decks, pools and remodels across Shelby, Forest City and Western North Carolina." },
      { property: "og:title", content: "Portfolio — Mountain Lakes Construction" },
      { property: "og:description", content: "Recent projects from across the Carolina foothills." },
      { property: "og:url", content: "/portfolio" },
      { property: "og:image", content: p1 },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const projects = [
  { img: hero, t: "Misty Lake A-Frame", c: "Forest City, NC", cat: "A-Frame" },
  { img: aframe, t: "Pine Ridge Cabin", c: "Lake Lure, NC", cat: "A-Frame" },
  { img: decks, t: "Sunset View Deck", c: "Shelby, NC", cat: "Decks" },
  { img: p2, t: "Covered Outdoor Living", c: "Tryon, NC", cat: "Decks" },
  { img: pools, t: "Hillside Pool & Hardscape", c: "Rutherfordton, NC", cat: "Pools" },
  { img: remodel, t: "Modern Farmhouse Kitchen", c: "Shelby, NC", cat: "Remodel" },
  { img: p3, t: "Spa Master Bath", c: "Forest City, NC", cat: "Remodel" },
  { img: p1, t: "Mountain Custom Home", c: "Cleveland County, NC", cat: "New Build" },
] as const;

const cats = ["All", "A-Frame", "Decks", "Pools", "Remodel", "New Build"] as const;

function Portfolio() {
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const filtered = useMemo(() => active === "All" ? projects : projects.filter(p => p.cat === active), [active]);
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Projects from across the Carolina foothills." subtitle="A selection of recent custom builds, outdoor spaces and renovations." image={p1} />
      <Section>
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${active === c ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground/70 hover:border-primary hover:text-primary"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <figure key={p.t} className="group overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="p-5">
                  <div className="text-xs uppercase tracking-wider text-secondary font-semibold">{p.cat} · {p.c}</div>
                  <div className="mt-1 font-display text-xl text-foreground">{p.t}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}