"use client";

import { useRef } from "react";

export default function Carousel({ children, fullWidth = false }: { children: React.ReactNode; fullWidth?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  }

  return (
    <div className={`relative mx-auto w-full ${fullWidth ? "max-w-none" : "max-w-[1180px]"}`}>
      <button
        type="button"
        aria-label="Previous"
        onClick={() => scroll(-1)}
        className="absolute left-[10px] top-1/2 z-10 hidden h-[46px] w-[46px] -translate-y-1/2 place-items-center rounded-lg bg-white text-brand shadow-[0_12px_32px_rgba(0,0,0,0.16)] transition hover:scale-105 hover:bg-brand hover:text-white sm:grid"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-[22px] overflow-x-auto scroll-smooth px-1.5 py-3 pb-[30px]"
      >
        {children}
      </div>

      <button
        type="button"
        aria-label="Next"
        onClick={() => scroll(1)}
        className="absolute right-[10px] top-1/2 z-10 hidden h-[46px] w-[46px] -translate-y-1/2 place-items-center rounded-lg bg-white text-brand shadow-[0_12px_32px_rgba(0,0,0,0.16)] transition hover:scale-105 hover:bg-brand hover:text-white sm:grid"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
