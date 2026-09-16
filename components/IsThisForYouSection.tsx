import SectionHeader from "./SectionHeader";
import { CheckIcon } from "./icons";

const FIT_CARDS = [
  "Tried IUI/IVF with no results",
  "Reports are “normal” but still no pregnancy",
  "PCOS, thyroid, irregular periods or hormonal issues",
  "“Unexplained infertility” with no clear direction",
  "You’re tired, stressed, and confused",
  "You want to heal naturally — not just stimulate",
  "You want your partner involved in care",
];

export default function IsThisForYouSection() {
  return (
    <section className="mx-auto mt-10 max-w-[1300px] px-4 py-4">
      <SectionHeader
        eyebrow="Is This For You?"
        title={
          <>
            If You Say <span className="font-bold text-brand">&ldquo;Yes&rdquo;</span> To 2 Or More
          </>
        }
        body="Ayurveda could be your next step toward natural fertility, hormonal balance, and deeper healing."
      />

      <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2">
        {FIT_CARDS.map((text) => (
          <div
            key={text}
            className="relative min-h-[118px] rounded-lg border border-brand/15 bg-gradient-to-b from-white to-[#fff7fa] py-6 pl-[82px] pr-6 transition hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)]"
          >
            <span className="absolute left-6 top-1/2 grid h-[38px] w-[38px] -translate-y-1/2 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-dark">
              <CheckIcon />
            </span>
            <p className="text-[16px] font-semibold leading-[1.35] text-[#171717] sm:text-[18px]">
              {text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-[22px] rounded-lg bg-gradient-to-br from-brand to-brand-dark px-6 py-10 text-center shadow-[0_18px_45px_rgba(239,52,106,0.24)]">
        <h3 className="text-[22px] font-bold text-white sm:text-[30px]">
          Ayurveda Could Be Your Next Step
        </h3>
        <p className="mt-2 text-[16px] text-white/88">
          A gentle, root-cause focused approach designed to support both partners naturally.
        </p>
      </div>
    </section>
  );
}
