import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/service-detail";
import img from "@/assets/service-pools.jpg";

export const Route = createFileRoute("/services/pools")({
  head: () => ({
    meta: [
      { title: "Pool Builder — Rutherford & Cleveland County NC | Mountain Lakes Construction" },
      { name: "description", content: "Custom in-ground pools, surrounding hardscape, patios and outdoor living in Shelby, Forest City and Western North Carolina." },
      { property: "og:title", content: "Custom Pools & Hardscape" },
      { property: "og:description", content: "In-ground pools and full backyard transformations across WNC." },
      { property: "og:url", content: "/services/pools" },
      { property: "og:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/services/pools" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Pools & hardscape"
      title="A backyard you'll actually want to spend every weekend in."
      subtitle="Custom-shape in-ground pools paired with stone patios, fire features and outdoor kitchens — designed as one complete space."
      image={img}
      intro={[
        "We treat the pool, the patio, the planting and the lighting as one project, not four — because that's how the finished space actually feels.",
        "Our crews handle excavation, structural shell, plumbing, mechanical, surrounding hardscape and outdoor electrical, so you have one team accountable from dig day to first swim.",
      ]}
      highlights={[
        "Custom-shape in-ground concrete pools",
        "Stone, paver and concrete pool decks",
        "Outdoor kitchens, fire pits and pergolas",
        "Retaining walls and grading for sloped sites",
        "Pool lighting, water features and automation",
        "Permits and inspections handled in-house",
      ]}
      process={[
        { t: "Concept", d: "We design the pool and surrounding space together, not separately." },
        { t: "Permits & dig", d: "Engineering, permits and excavation tuned to your lot." },
        { t: "Build", d: "Shell, mechanical, hardscape and finishes — all by our team." },
        { t: "First swim", d: "Startup, water chemistry training and a clean handoff." },
      ]}
    />
  ),
});