import { SectionContainer } from "@/components/ui/SectionContainer";

const testimonials = [
  {
    quote:
      "The entire visit felt calm and clear. The team explained each step and made me feel completely at ease.",
    name: "Maya L.",
    role: "Long-term patient",
  },
  {
    quote:
      "I appreciated the thoughtful treatment plan and the way they focused on prevention, not pressure.",
    name: "Jordan T.",
    role: "New patient",
  },
  {
    quote:
      "From consultation to treatment, every detail felt organized and professional. I finally enjoy dental visits.",
    name: "Sofia R.",
    role: "Cosmetic dentistry patient",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-stone-50 py-24">
      <SectionContainer className="space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Testimonials
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            Trusted by families and professionals across the city.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-2xl border border-zinc-200/80 bg-white p-7 shadow-[0_1px_2px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.06)]"
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
