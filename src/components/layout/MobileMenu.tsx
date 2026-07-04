"use client";

import { useEffect, useState } from "react";

type NavItem = { label: string; href: string };

type Props = {
  navItems: NavItem[];
  presentationHref: string;
  presentationLabel: string;
  presentationAria: string;
  ctaLabel: string;
  navAria: string;
  openLabel: string;
  closeLabel: string;
};

export function MobileMenu({
  navItems,
  presentationHref,
  presentationLabel,
  presentationAria,
  ctaLabel,
  navAria,
  openLabel,
  closeLabel,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? closeLabel : openLabel}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-800 transition-colors hover:bg-zinc-50"
      >
        {open ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 top-[78px] z-40 bg-zinc-900/30 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu-panel"
            className="fixed inset-x-0 top-[78px] z-50 border-b border-zinc-200 bg-white shadow-lg"
          >
            <nav aria-label={navAria} className="px-5 py-4">
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-zinc-100 py-3 text-base font-medium text-zinc-800 transition-colors hover:text-zinc-950"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={presentationHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={presentationAria}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  {presentationLabel}
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-zinc-950 px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-zinc-800"
                >
                  {ctaLabel}
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
