import Image from "next/image";

const services = [
  {
    title: "Braces",
    description:
      "Straighten your smile with modern orthodontic treatment planned for comfort and long-term results.",
    icon: "🦷",
    featured: false,
  },
  {
    title: "Cavities",
    description:
      "Gentle restorative care using precise diagnostics and durable materials for healthy function.",
    icon: "🦷",
    featured: true,
  },
  {
    title: "Crowns",
    description:
      "Natural-looking crowns designed to restore strength, structure, and confidence in your smile.",
    icon: "🦷",
    featured: false,
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#eef5f7] pt-8 md:pt-12"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-b from-[#8ea4d8] via-[#aab8dc] to-[#d7dde8] shadow-[0_18px_60px_rgba(15,23,42,0.10)]">
          <div className="absolute inset-0 bg-black/5" />

          <div className="relative min-h-[540px] md:min-h-[620px]">
            <Image
              src="/images/dental-hero.jpg"
              alt="Amber Dental happy patient"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute left-6 right-6 bottom-6 grid gap-4 md:left-10 md:right-10 md:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr]">
            <div className="flex min-h-[220px] flex-col justify-between rounded-[28px] bg-[#2f66dc] p-6 text-white shadow-[0_10px_30px_rgba(47,102,220,0.28)] md:p-8">
              <p className="max-w-[260px] text-lg leading-8 md:text-[19px]">
                Since 2012 we offer high quality dental care with a calm,
                modern experience for every smile.
              </p>

              <button className="mt-6 w-fit rounded-full border border-white/70 px-8 py-4 text-lg font-medium text-white transition hover:bg-white hover:text-[#2f66dc]">
                Book today
              </button>
            </div>

            <div className="relative h-[220px] overflow-hidden rounded-[24px] shadow-[0_12px_30px_rgba(15,23,42,0.14)]">
              <Image
                src="/images/dental-hero.jpg"
                alt="Amber Dental patient"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[220px] overflow-hidden rounded-[24px] shadow-[0_12px_30px_rgba(15,23,42,0.14)]">
              <Image
                src="/images/dental-hero.jpg"
                alt="Amber Dental smiling patient"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[220px] overflow-hidden rounded-[24px] shadow-[0_12px_30px_rgba(15,23,42,0.14)]">
              <Image
                src="/images/dental-hero.jpg"
                alt="Amber Dental client"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />

      <div className="relative z-10 bg-white pt-20 pb-24 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[820px] text-center">
            <div className="inline-flex rounded-full border border-[#2f66dc] px-6 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#2f66dc]">
              Expertise
            </div>

            <h2 className="mt-8 text-5xl font-semibold leading-tight tracking-[-0.04em] text-[#111111] md:text-7xl">
              Things <span className="text-[#2f66dc]">we</span> can do for you
            </h2>

            <p className="mt-6 text-xl leading-9 text-[#202020] md:text-[22px]">
              Personalized treatments designed to restore comfort, confidence,
              and long-term oral health.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className={`group relative min-h-[430px] overflow-hidden rounded-[30px] border p-8 transition duration-300 ease-out hover:-translate-y-1 ${
                  service.featured
                    ? "border-[#2f66dc] bg-[#2f66dc] text-white shadow-[0_18px_40px_rgba(47,102,220,0.25)]"
                    : "border-[#e4ecef] bg-[#f5f8f9] text-[#111111] shadow-[0_10px_24px_rgba(15,23,42,0.05)] hover:border-[#2f66dc] hover:bg-[#2f66dc] hover:text-white hover:shadow-[0_18px_40px_rgba(47,102,220,0.22)]"
                }`}
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full text-3xl transition duration-300 ${
                    service.featured
                      ? "bg-white text-[#2f66dc]"
                      : "bg-[#2f66dc] text-white group-hover:scale-105 group-hover:bg-white group-hover:text-[#2f66dc]"
                  }`}
                >
                  {service.icon}
                </div>

                <div className="mt-24">
                  <h3 className="text-5xl font-semibold tracking-[-0.04em]">
                    {service.title}
                  </h3>
                </div>

                <div
                  className={`pointer-events-none absolute inset-x-8 bottom-8 transition duration-300 ${
                    service.featured
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  }`}
                >
                  <p className="max-w-[290px] text-[20px] leading-9">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center gap-4 text-[19px] font-medium">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full ${
                        service.featured
                          ? "bg-white text-[#2f66dc]"
                          : "bg-white text-[#2f66dc]"
                      }`}
                    >
                      ›
                    </span>
                    <span>Learn more</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
