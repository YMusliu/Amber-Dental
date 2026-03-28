import { SectionContainer } from "@/components/ui/SectionContainer";

const testimonials = [
  {
    quote:
      "Orthobox flows cleanly from STL/OBJ through review and production—with updates we can plan around.",
    name: "Partner orthodontic practice",
    role: "Orthodontics, Kosovo",
  },
  {
    quote:
      "Our zirconia scans return with the fit and characterization we need chairside.",
    name: "Partner restorative clinic",
    role: "Fixed prosthodontics",
  },
  {
    quote:
      "DHL, clear timelines, and invoicing that fits a licensed office—straightforward end to end.",
    name: "Partner dental clinic",
    role: "Practice administration",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-stone-50 py-24">
      <SectionContainer className="space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Recommendations
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            Clinics and orthodontists who rely on Amber Lab.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="min-w-0 rounded-2xl border border-zinc-200/80 bg-white p-7 shadow-[0_1px_2px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.06)]"
            >
              <blockquote className="text-sm leading-7 text-zinc-700 sm:text-base">
                "{item.quote}"
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium text-zinc-900">
                {item.name}
              </figcaption>
              <p className="text-xs text-zinc-500">{item.role}</p>
            </figure>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
