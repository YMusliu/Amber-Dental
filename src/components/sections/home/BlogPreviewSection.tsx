import { SectionContainer } from "@/components/ui/SectionContainer";

const posts = [
  {
    title: "Choosing a digital toothbrush for patients",
    excerpt: "Features that matter for home care—and what to recommend.",
  },
  {
    title: "Digital imaging in the practice",
    excerpt: "What partners should know about scans, files, and lab handoff.",
  },
  {
    title: "When clear aligners fit the plan",
    excerpt: "Signs Orthobox-style workflows suit your orthodontic cases.",
  },
];

export function BlogPreviewSection() {
  return (
    <section id="blog" className="bg-stone-50 py-24">
      <SectionContainer className="space-y-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Blog
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Notes from Amber Lab.
            </h2>
          </div>
          <a href="#blog" className="text-sm font-medium text-zinc-800">
            View all posts
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="min-w-0 rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {post.excerpt}
              </p>
              <a href="#blog" className="mt-4 inline-block text-sm font-medium text-zinc-900">
                Read article
              </a>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
