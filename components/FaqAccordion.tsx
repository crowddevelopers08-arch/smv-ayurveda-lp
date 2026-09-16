"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How long does it take to see results?",
    a: "Every body is different—some conceive within 3 months, others may take longer depending on the healing response.",
  },
  {
    q: "Is this just for women?",
    a: "Not at all. We offer complete Ayurvedic fertility support for both men and women.",
  },
  {
    q: "Will I need to follow a strict lifestyle?",
    a: "We treat many post-IVF patients with success. In fact, Ayurvedic care can also improve IVF outcomes.",
  },
  {
    q: "What if I’ve tried IVF already?",
    a: "Only what aligns with your body’s healing. We’ll guide you with a realistic, dosha-based plan.",
  },
  {
    q: "Is this safe?",
    a: "Yes. All herbs and therapies are time-tested, non-invasive, and side-effect free.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-4">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-2 border-black">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 font-sen text-[18px] font-bold leading-[50px] text-[#272727] sm:text-[20px]"
            >
              <span className="text-left">{item.q}</span>
              <span className="shrink-0 text-2xl leading-none">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div className="border-t border-black/10 px-5 py-4">
                <p className="font-sen text-[19px] font-light leading-[26px] text-black">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
