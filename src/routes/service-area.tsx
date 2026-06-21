import { createFileRoute } from "@tanstack/react-router";
import { CTABand, PageHero, Section, SectionHeading } from "@/components/section";
import { MapPin } from "lucide-react";
import hero from "@/assets/portfolio-2.jpg";

export const Route = createFileRoute("/service-area")({
  head: () => ({
    meta: [
      { title: "Service Area — Shelby, Forest City & Western NC | Mountain Lakes Construction" },
      { name: "description", content: "Mountain Lakes Construction serves Shelby, Forest City and the surrounding foothills counties — Cleveland, Rutherford, Polk, McDowell, Burke and Henderson." },
      { property: "og:title", content: "Service Area" },
      { property: "og:description", content: "Where we build across Western North Carolina." },
      { property: "og:url", content: "/service-area" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/service-area" }],
  }),
  component: ServiceArea,
});

const counties = [
  { name: "Cleveland County", cities: ["Shelby", "Kings Mountain", "Boiling Springs", "Lawndale"] },
  { name: "Rutherford County", cities: ["Forest City", "Rutherfordton", "Lake Lure", "Chimney Rock"] },
  { name: "Polk County", cities: ["Tryon", "Columbus", "Saluda"] },
  { name: "McDowell County", cities: ["Marion", "Old Fort", "Lake James area"] },
  { name: "Burke County", cities: ["Morganton", "Glen Alpine"] },
  { name: "Henderson County", cities: ["Hendersonville", "Flat Rock", "Mills River"] },
];

function ServiceArea() {
  return (
    <>
      <PageHero eyebrow="Service area" title="Two offices. One region we know by heart." subtitle="From our Shelby and Forest City locations, we build across the Carolina foothills and surrounding Western NC mountain communities." image={hero} />
      <Section>
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading eyebrow="Our offices" title="Local roots in two counties." />
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 text-secondary">
                <MapPin className="h-5 w-5" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold">Shelby Office</span>
              </div>
              <p className="mt-2 text-foreground/85">Serving Cleveland County, Kings Mountain, Boiling Springs and the western reach of the foothills.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 text-secondary">
                <MapPin className="h-5 w-5" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold">Forest City Office</span>
              </div>
              <p className="mt-2 text-foreground/85">Serving Rutherford County, Lake Lure, Tryon and the surrounding mountain communities.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <iframe
              title="Mountain Lakes Construction service area map"
              src="https://www.google.com/maps?q=Shelby+NC+to+Forest+City+NC&output=embed"
              className="h-[460px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </Section>
      <section className="bg-muted/60 border-y border-border">
        <div className="container-page py-20">
          <SectionHeading eyebrow="Counties served" title="Where we build." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {counties.map((c) => (
              <div key={c.name} className="rounded-xl border border-border bg-card p-6">
                <div className="font-display text-xl text-foreground">{c.name}</div>
                <ul className="mt-3 text-sm text-muted-foreground space-y-1">
                  {c.cities.map((city) => <li key={city}>· {city}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">Not sure if we cover your location? <a href="/contact" className="text-primary font-medium hover:underline">Ask us</a> — we travel for the right project.</p>
        </div>
      </section>
      <CTABand />
    </>
  );
}