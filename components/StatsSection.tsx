const STATS = [
  { num: "28+", label: "Years Experience" },
  { num: "2000+", label: "Conceptions" },
  { num: "20k+", label: "Happy Patients" },
  { num: "4.7/5", label: "Google Rating", stars: true },
];

export default function StatsSection() {
  return (
    <div className="mx-auto w-full max-w-[700px] flex-1 lg:flex lg:h-full lg:flex-col">
      <h2 className="mb-7 shrink-0 text-center font-mukta text-[26px] font-semibold leading-[1.1] tracking-[-0.5px] text-[#121212] sm:text-[32px]">
        Proven Success in <br />
        Fertility Care
      </h2>
      <div className="grid grid-cols-2 gap-3 lg:min-h-0 lg:flex-1 lg:auto-rows-fr">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center justify-center rounded-[20px] border border-[#eee] bg-[#fcfcfc] px-5 py-7 text-center transition hover:scale-[1.02] hover:border-brand hover:bg-white hover:shadow-[0_15px_30px_rgba(239,52,106,0.1)]"
          >
            <span className="mb-2 block font-mukta text-[28px] font-extrabold leading-none text-brand sm:text-[38px]">
              {s.num}
            </span>
            <span className="text-[13px] font-semibold uppercase leading-[1.3] tracking-[0.5px] text-[#444] sm:text-[15px]">
              {s.label}
            </span>
            {s.stars && <div className="mt-1 tracking-[2px] text-[#ffb800]">★★★★★</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
