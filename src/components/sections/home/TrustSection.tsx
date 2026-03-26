import { SectionContainer } from "@/components/ui/SectionContainer";

const trustItems = [
  { label: "Patients cared for", value: "4,000+" },
  { label: "Average visit rating", value: "4.9 / 5" },
  { label: "Years serving community", value: "12+" },
];

export function TrustSection() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50 py-14">
      <SectionContainer>
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
          {trustItems.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="text-2xl font-semibold tracking-tight text-zinc-900">
                {item.value}
              </p>
              <p className="text-sm text-zinc-600">{item.label}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
