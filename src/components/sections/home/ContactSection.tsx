import { SectionContainer } from "@/components/ui/SectionContainer";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20">
      <SectionContainer>
        <div className="grid gap-8 rounded-3xl border border-zinc-200 bg-stone-50 p-6 sm:p-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Get in touch and book a consultation.
            </h2>
            <form className="grid gap-3 sm:grid-cols-2">
              <input className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm" placeholder="Full Name" />
              <input className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm" placeholder="Phone" />
              <input className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm sm:col-span-2" placeholder="Email" />
              <textarea className="min-h-28 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm sm:col-span-2" placeholder="How can we help you?" />
              <button className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white sm:col-span-2 sm:w-fit">
                Send Request
              </button>
            </form>
          </div>
          <aside className="space-y-4 border-t border-zinc-200 pt-6 text-sm text-zinc-700 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <p className="font-semibold text-zinc-900">Our email</p>
            <p>hello@amberdental.com</p>
            <p className="font-semibold text-zinc-900">Phone</p>
            <p>+1 (800) 234-8891</p>
            <p className="font-semibold text-zinc-900">Visit us</p>
            <p>123 Care Avenue, Suite 200, New York, USA</p>
          </aside>
        </div>
      </SectionContainer>
    </section>
  );
}
