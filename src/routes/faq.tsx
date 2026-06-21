import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { CTABand, PageHero, Section } from "@/components/section";
import hero from "@/assets/portfolio-1.jpg";

const faqs = [
  { q: "What's the typical timeline for a custom home or A-frame?", a: "From signed contract to move-in, most custom homes run 9–14 months depending on permits, weather, and finish selections. A-frames trend toward the shorter end. We give you a detailed schedule before we break ground." },
  { q: "Do you handle permits and inspections?", a: "Yes. As your licensed general contractor we pull all required permits, schedule inspections, and stay on site during them. You don't have to call the county yourself." },
  { q: "How do estimates and pricing work?", a: "Our initial estimate is free. After a site visit and scope conversation we provide a written, line-item estimate — no vague allowances. For new construction we typically work cost-plus or fixed-price depending on the project." },
  { q: "What materials do you use?", a: "We use brand-name structural materials (engineered lumber, code-rated fasteners, name-brand decking and roofing) and we walk you through finish selections so you understand the trade-offs between cost, durability and aesthetics." },
  { q: "Do you offer financing?", a: "We don't finance directly, but we work alongside several local lenders and construction-loan specialists in Cleveland and Rutherford counties. We're happy to introduce you." },
  { q: "Are you licensed and insured?", a: "Yes — licensed general contractor in North Carolina, fully insured (general liability and workers comp). Documentation available on request." },
  { q: "How far do you travel?", a: "Our two offices cover Cleveland, Rutherford, Polk, McDowell, Burke and Henderson counties. For the right project we'll travel further into Western NC." },
  { q: "What kind of warranty do you offer?", a: "Every project includes a written workmanship warranty in addition to any manufacturer warranties on materials and appliances." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Timelines, Permits, Pricing | Mountain Lakes Construction" },
      { name: "description", content: "Answers to common questions about custom construction, A-frames, decks, pools and remodels — timelines, permits, materials, financing and more." },
      { property: "og:title", content: "FAQ — Mountain Lakes Construction" },
      { property: "og:description", content: "Timelines, permits, materials, financing — answered." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQ,
});

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero eyebrow="FAQ" title="Common questions, honest answers." subtitle="If you don't see your question here, give us a call — we'd rather talk it through than guess." image={hero} />
      <Section>
        <div className="container-page max-w-3xl">
          <div className="divide-y divide-border rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-lg text-foreground">{f.q}</span>
                    {isOpen ? <Minus className="h-5 w-5 text-primary shrink-0" /> : <Plus className="h-5 w-5 text-primary shrink-0" />}
                  </button>
                  {isOpen && <div className="px-6 pb-6 text-foreground/80">{f.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}