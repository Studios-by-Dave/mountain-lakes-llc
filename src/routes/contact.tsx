import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTABand, PageHero, Section } from "@/components/section";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import hero from "@/assets/portfolio-2.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Free Estimate | Mountain Lakes Construction LLC" },
      { name: "description", content: "Request a free estimate for custom construction, A-frames, decks, pools or remodeling in Shelby, Forest City and across Western NC." },
      { property: "og:title", content: "Contact Mountain Lakes Construction" },
      { property: "og:description", content: "Request your free estimate today." },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero eyebrow="Free estimate" title="Tell us about your project." subtitle="Send the details below and one of our owners will reach out within one business day to set up a site visit." image={hero} />
      <Section>
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-2xl border border-border bg-card p-7 md:p-9 shadow-[var(--shadow-card)]"
          >
            {submitted ? (
              <div className="text-center py-16">
                <div className="font-display text-3xl text-foreground">Thanks — we got it.</div>
                <p className="mt-3 text-muted-foreground">We'll be in touch within one business day. For anything urgent, give us a call.</p>
              </div>
            ) : (
              <div className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Project location (city)" name="city" required />
                  <SelectField label="Project type" name="type" options={["Custom new construction", "A-frame build", "Deck", "Pool / hardscape", "Remodel / addition", "Other"]} />
                </div>
                <SelectField label="Estimated budget" name="budget" options={["Under $50k", "$50k – $150k", "$150k – $500k", "$500k+", "Not sure yet"]} />
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Tell us about your project</label>
                  <textarea name="message" rows={5} required className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30" placeholder="Lot location, timing, style references, anything you'd like us to know..." />
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
                  Request my free estimate <Send className="h-4 w-4" />
                </button>
                <p className="text-xs text-muted-foreground">We respect your privacy. Your info is only used to respond to your inquiry.</p>
              </div>
            )}
          </form>

          <aside className="space-y-6">
            <ContactCard icon={Phone} title="Call Jacob" lines={["(828) 755-7551", "Mon – Fri, 8am – 6pm ET"]} href="tel:+18287557551" />
            <ContactCard icon={Mail} title="Email" lines={["info@mountainlakesconstruction.com"]} href="mailto:info@mountainlakesconstruction.com" />
            <ContactCard icon={MapPin} title="Shelby Office" lines={["Shelby, NC 28150", "Cleveland County"]} />
            <ContactCard icon={MapPin} title="Forest City Office" lines={["Forest City, NC 28043", "Rutherford County"]} />
          </aside>
        </div>
      </Section>
      <CTABand />
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      <input type={type} name={name} required={required} className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30" />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      <select name={name} className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function ContactCard({ icon: Icon, title, lines, href }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: string[]; href?: string }) {
  const inner = (
    <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)] hover:border-primary/40 transition">
      <div className="flex items-center gap-3 text-secondary">
        <Icon className="h-5 w-5" />
        <span className="text-xs uppercase tracking-[0.2em] font-semibold">{title}</span>
      </div>
      <div className="mt-2 text-foreground/85 text-sm leading-relaxed">
        {lines.map((l) => <div key={l}>{l}</div>)}
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : inner;
}