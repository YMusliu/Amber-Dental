import { SectionContainer } from "@/components/ui/SectionContainer";

const values = ["We value privacy", "Hygiene first", "Comfort by design", "Transparent guidance"];

export function ValuesSection() {
  return (
    <section className="bg-stone-50 py-20">
      <SectionContainer className="space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Values
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            At Amber Dental, your care experience comes first.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article
              key={value}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <p className="text-base font-semibold text-zinc-900">{value}</p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
