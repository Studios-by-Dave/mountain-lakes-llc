import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/service-detail";
import img from "@/assets/service-remodel.jpg";

export const Route = createFileRoute("/services/remodeling")({
  head: () => ({
    meta: [
      { title: "Home Remodeling — Kitchens, Baths & Additions | Mountain Lakes Construction" },
      { name: "description", content: "Whole-home remodels, kitchen and bath renovations, room additions and outdoor living upgrades in Shelby, Forest City and the WNC foothills." },
      { property: "og:title", content: "Remodeling & Additions" },
      { property: "og:description", content: "Kitchens, baths, additions and whole-home renovations." },
      { property: "og:url", content: "/services/remodeling" },
      { property: "og:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/services/remodeling" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Remodeling"
      title="Make the house you have feel like the one you wanted."
      subtitle="Kitchens, bathrooms, additions, basement build-outs and full-home renovations — done with the same care as new construction."
      image={img}
      intro={[
        "Remodeling is harder than new construction. Old houses have surprises behind every wall, and your family is still living there while we work. We plan for both.",
        "We over-communicate timelines, isolate work zones, and protect the parts of the house you still need to use. The result is a finished space that feels original — not bolted on.",
      ]}
      highlights={[
        "Whole-home renovations",
        "Kitchen and bath remodels",
        "Room additions and bump-outs",
        "Basement and attic finishing",
        "Outdoor living upgrades",
        "Structural changes and load-bearing wall removals",
      ]}
      process={[
        { t: "Walkthrough", d: "We look at the existing space and listen to the friction." },
        { t: "Design", d: "Plans, selections and a clear scope so there are no surprises." },
        { t: "Build", d: "Phased work that respects your daily routine." },
        { t: "Reveal", d: "Final cleanup, walkthrough and warranty." },
      ]}
    />
  ),
});