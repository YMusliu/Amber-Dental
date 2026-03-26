import { SectionContainer } from "@/components/ui/SectionContainer";

const benefits = [
  { title: "Trusted Care", text: "Thousands of patients served with consistency." },
  { title: "Certified Team", text: "Clinicians with advanced clinical training." },
  { title: "Hygiene First", text: "Strict sterilization and safety protocols." },
  { title: "Proven Results", text: "Clear treatment plans focused on outcomes." },
];

export function ExpertiseSection() {
  return (
    <section className="bg-stone-50 py-24">
      <SectionContainer className="space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Expertise
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            Everything you expect from a modern dental clinic.
          </h2>
          <p className="text-zinc-600">
            A premium standard of care built on clinical quality, transparent
            communication, and comfort from first visit to follow-up.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-zinc-200/80 bg-white p-7 shadow-[0_1px_2px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.06)]"
            >
              <div className="mb-4 h-10 w-10 rounded-xl border border-amber-100 bg-amber-50" />
              <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{item.text}</p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
