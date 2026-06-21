import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/service-detail";
import img from "@/assets/service-aframe.jpg";

export const Route = createFileRoute("/services/a-frame")({
  head: () => ({
    meta: [
      { title: "A-Frame Construction in Western NC | Mountain Lakes Construction" },
      { name: "description", content: "Custom A-frame cabin and vacation home builds across Shelby, Forest City and the Carolina mountains. Engineered for the terrain and built to last." },
      { property: "og:title", content: "A-Frame Construction — Mountain Lakes Construction" },
      { property: "og:description", content: "Distinctive A-frame architecture, engineered and built for the Carolina foothills." },
      { property: "og:url", content: "/services/a-frame" },
      { property: "og:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/services/a-frame" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Specialty"
      title="A-frame construction, done with real expertise."
      subtitle="From compact off-grid cabins to multi-level lake homes, A-frames are our favorite kind of build — and a niche skill few WNC builders specialize in."
      image={img}
      intro={[
        "An A-frame is one of the hardest looking buildings to get right. The geometry has to be exact, the load paths have to be engineered for snow and wind, and the finish details — especially the window walls — separate a great cabin from a leaky one.",
        "We've made A-frames a deliberate specialty. We'll work from your sketch, a Pinterest board, or a full architect's plan, and we'll engineer it for the realities of building on Carolina hillsides and lakefronts.",
      ]}
      highlights={[
        "Custom A-frame design or build-to-plan",
        "Compact cabins, vacation rentals and full-time residences",
        "Engineered for WNC wind, snow and slope conditions",
        "Floor-to-ceiling window walls and lofted interiors",
        "Site work, foundations, septic and well coordination",
        "Finish packages from rustic to modern minimalist",
      ]}
      process={[
        { t: "Site & vision", d: "We walk the land, talk through how you'll use the space, and confirm feasibility." },
        { t: "Design & engineer", d: "Floor plans, elevations and structural engineering tuned to the site." },
        { t: "Permits & build", d: "We handle permitting, foundations, framing and finishes in-house." },
        { t: "Walkthrough", d: "Final punch list, warranty docs, and a home you're proud of." },
      ]}
    />
  ),
});