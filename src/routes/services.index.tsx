import { createFileRoute, Link } from "@tanstack/react-router";
import { CTABand, PageHero, Section, SectionHeading } from "@/components/section";
import decks from "@/assets/service-decks.jpg";
import pools from "@/assets/service-pools.jpg";
import aframe from "@/assets/service-aframe.jpg";
import remodel from "@/assets/service-remodel.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Custom Builds, Decks, Pools & Remodeling | Mountain Lakes Construction" },
      { name: "description", content: "Custom new construction, A-frame builds, deck construction, in-ground pools and whole-home remodeling in Shelby, Forest City and Western NC." },
      { property: "og:title", content: "Services — Mountain Lakes Construction" },
      { property: "og:description", content: "What we build across the Carolina foothills." },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: aframe },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

const services = [
  { slug: "a-frame", title: "A-Frame Construction", img: aframe, blurb: "Our specialty. Distinctive geometry, engineered for the Carolina mountains — from compact cabins to multi-bedroom vacation homes." },
  { slug: "decks", title: "Custom Decks", img: decks, blurb: "Multi-level, covered, screened, composite or hardwood. Built for lake views, hillsides and family gatherings." },
  { slug: "pools", title: "Pools & Hardscape", img: pools, blurb: "In-ground custom-shape pools, surrounding patios, fire features, retaining walls and outdoor kitchens." },
  { slug: "remodeling", title: "Remodeling & Additions", img: remodel, blurb: "Kitchens, bathrooms, room additions, outdoor living and whole-home renovations done right the first time." },
];

function ServicesIndex() {
  return (
    <>
      <PageHero eyebrow="Services" title="One team. Every part of your project." subtitle="From the foundation up to the finishing nail — and the outdoor spaces around it — we design and build it all." image={aframe} />
      <Section>
        <div className="container-page grid gap-16">
          {services.map((s, i) => (
            <article key={s.slug} className="grid gap-8 md:grid-cols-2 md:items-center">
              <img src={s.img} alt={s.title} loading="lazy" className={`aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)] ${i % 2 ? "md:order-2" : ""}`} />
              <div>
                <SectionHeading eyebrow={`0${i + 1}`} title={s.title} intro={s.blurb} />
                <a href={`/services/${s.slug}`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80">
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}