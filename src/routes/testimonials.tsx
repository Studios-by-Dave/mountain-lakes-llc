import { createFileRoute } from "@tanstack/react-router";
import { CTABand, PageHero, Section } from "@/components/section";
import { Star } from "lucide-react";
import hero from "@/assets/portfolio-3.jpg";
import a from "@/assets/service-aframe.jpg";
import b from "@/assets/service-decks.jpg";
import c from "@/assets/service-pools.jpg";
import d from "@/assets/service-remodel.jpg";
import e from "@/assets/portfolio-1.jpg";
import f from "@/assets/portfolio-2.jpg";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Reviews — Mountain Lakes Construction LLC" },
      { name: "description", content: "Reviews from homeowners across Western North Carolina who trusted Mountain Lakes Construction with their custom homes, decks, pools and remodels." },
      { property: "og:title", content: "Reviews — Mountain Lakes Construction" },
      { property: "og:description", content: "Hear from clients across the Carolina foothills." },
      { property: "og:url", content: "/testimonials" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

const reviews = [
  { name: "Karen & Mike R.", place: "Lake Lure, NC", text: "They built our lake A-frame exactly the way we imagined it. The craftsmanship is incredible and the communication was unreal — we always knew what was happening next.", img: a },
  { name: "Jason H.", place: "Shelby, NC", text: "We had three contractors quote our deck. Mountain Lakes was the only one who actually walked the slope and pointed out things the others missed. Finished product is rock-solid.", img: b },
  { name: "The Patterson Family", place: "Rutherfordton, NC", text: "Our pool and patio came out better than the renderings. They handled every inspection and we just had to pick finishes.", img: c },
  { name: "Linda M.", place: "Forest City, NC", text: "Whole-house remodel while we lived in it. They protected everything, cleaned up every single day, and finished on schedule. Cannot recommend them more.", img: d },
  { name: "Brett & Sara K.", place: "Tryon, NC", text: "From the first site walk you can tell they care about doing it right. Our covered porch is now the favorite room in the house.", img: f },
  { name: "Wayne T.", place: "Cleveland County, NC", text: "Custom new build, no surprises in the budget, no corners cut. Real builders.", img: e },
];

function Testimonials() {
  return (
    <>
      <PageHero eyebrow="Reviews" title="What our neighbors say." subtitle="Most of our work comes from referrals. These are some of the homeowners who sent them." image={hero} />
      <Section>
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="flex flex-col rounded-xl border border-border bg-card shadow-[var(--shadow-card)] overflow-hidden">
              <img src={r.img} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex gap-1 text-[color:var(--primary)]">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-3 text-foreground/85 italic">"{r.text}"</p>
                <div className="mt-5 pt-4 border-t border-border text-sm">
                  <div className="font-semibold text-foreground">{r.name}</div>
                  <div className="text-muted-foreground">{r.place}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="container-page mt-12 text-center">
          <a href="https://www.google.com/search?q=Mountain+Lakes+Construction+LLC+reviews" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Read more reviews on Google →</a>
        </div>
      </Section>
      <CTABand />
    </>
  );
}