import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/service-detail";
import img from "@/assets/service-decks.jpg";

export const Route = createFileRoute("/services/decks")({
  head: () => ({
    meta: [
      { title: "Custom Deck Builder — Shelby & Forest City NC | Mountain Lakes Construction" },
      { name: "description", content: "Custom multi-level, covered, composite and hardwood decks built across Western North Carolina. Engineered for lake views, hillsides and family gatherings." },
      { property: "og:title", content: "Custom Deck Construction" },
      { property: "og:description", content: "Multi-level, covered, composite or hardwood — decks built for the foothills." },
      { property: "og:url", content: "/services/decks" },
      { property: "og:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/services/decks" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Outdoor living"
      title="Decks built for the way you actually live outside."
      subtitle="Composite, hardwood, multi-level, covered or screened — we design and build decks that match your house, your slope and your views."
      image={img}
      intro={[
        "A good deck disappears into the way you use your house. A great deck pulls you outside on every clear evening. We build both — but we'd rather build the second.",
        "Whether you need a single-level entertaining deck on a flat lot or a tiered structure cantilevered over a hillside, we engineer for the conditions and finish for the long haul.",
      ]}
      highlights={[
        "Composite (Trex, TimberTech) and hardwood decking",
        "Multi-level, wrap-around and cantilevered designs",
        "Covered, screened and three-season porches",
        "Cable, glass and traditional railing systems",
        "Integrated lighting, outlets and gas runs",
        "Permits, footings and engineered framing",
      ]}
      process={[
        { t: "Site visit", d: "We measure, photograph and talk through how you want to use it." },
        { t: "Design & quote", d: "Material options, dimensions and a fixed-scope estimate." },
        { t: "Build", d: "Footings, framing and decking — with daily communication." },
        { t: "Walkthrough", d: "Final finish, sealing and a workmanship warranty." },
      ]}
    />
  ),
});