"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Extra wait after the block enters the viewport (ms). */
  delayMs?: number;
};

export function Reveal({ children, className = "", delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    let delayTimer: ReturnType<typeof setTimeout> | undefined;
    const fallbackTimer = window.setTimeout(() => setVisible(true), 2500);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        window.clearTimeout(fallbackTimer);
        io.disconnect();
        if (delayMs > 0) {
          delayTimer = setTimeout(() => setVisible(true), delayMs);
        } else {
          setVisible(true);
        }
      },
      { rootMargin: "0px 0px 0px 0px", threshold: 0.01 }
    );

    io.observe(node);
    return () => {
      window.clearTimeout(fallbackTimer);
      io.disconnect();
      if (delayTimer) clearTimeout(delayTimer);
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={[
        className,
        "motion-safe:transition-[opacity,transform] motion-safe:duration-[720ms] motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
        visible
          ? "translate-y-0 opacity-100"
          : "motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-safe:translate-y-8 motion-safe:opacity-0",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
