import { SectionContainer } from "@/components/ui/SectionContainer";

const team = [
  {
    name: "Dr. Elena Park",
    role: "Clinical director",
    bio: "Oversees case standards and partner communication for complex restorations.",
  },
  {
    name: "Dr. Marcus Hale",
    role: "Technical lead, fixed",
    bio: "Crowns, implants, and full-arch workflows from scan to finish.",
  },
  {
    name: "Nina Brooks",
    role: "Partner coordination",
    bio: "Keeps cases, shipments, and timelines aligned for every practice.",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-white py-24">
      <SectionContainer className="space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Team
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            The people behind your lab partnership.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="min-w-0 rounded-2xl border border-zinc-200/80 bg-stone-50/60 p-7 shadow-[0_1px_2px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.06)]"
            >
              <div className="mb-5 h-20 w-20 rounded-2xl border border-amber-100 bg-amber-50" />
              <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                {member.name}
              </h3>
              <p className="text-sm text-zinc-600">{member.role}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{member.bio}</p>
            </article>
          ))}
        </div>
        <a
          href="#team"
          className="inline-block rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900"
        >
          View full team
        </a>
      </SectionContainer>
    </section>
  );
}
