import { SectionContainer } from "@/components/ui/SectionContainer";

const pageLinks = ["Home", "About", "Services", "Pricing", "Team", "Contact", "Blog"];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-16">
      <SectionContainer className="space-y-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <p className="text-lg font-semibold tracking-tight text-zinc-900">
              Amber Dental
            </p>
            <p className="text-sm leading-6 text-zinc-600">
              Personalized dental care with modern diagnostics and a calm
              clinic environment.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Pages
            </p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-zinc-700">
              {pageLinks.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Contact
            </p>
            <p className="text-sm text-zinc-700">hello@amberdental.com</p>
            <p className="text-sm text-zinc-700">+1 (800) 234-8891</p>
            <p className="text-sm text-zinc-700">
              123 Care Avenue, Suite 200, New York
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Newsletter
            </p>
            <p className="text-sm text-zinc-700">
              Join our monthly oral-health tips and clinic updates.
            </p>
            <button className="rounded-full border border-zinc-900 bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(24,24,27,0.12)]">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-5 text-sm text-zinc-500">
          <p>2026 Amber Dental. All rights reserved.</p>
        </div>
      </SectionContainer>
    </footer>
  );
}
