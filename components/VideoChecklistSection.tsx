const CHECKLIST = [
  "Only Ayurvedic fertility clinic with 28+ years focused expertise",
  "Equal focus on male and female fertility",
  "No hormones, no false hopes",
  "Personalized detox, diet & therapy plans",
  "Consulted and designed by Ayurvedic fertility specialists",
  "Emotional + physical healing in one protocol",
];

export default function VideoChecklistSection() {
  return (
    <section className="mx-auto mb-10 mt-8 grid max-w-[1300px] grid-cols-1 items-center gap-8 px-4 lg:grid-cols-2">
      <div className="aspect-video w-full overflow-hidden rounded-[26px]">
        <iframe
          src="https://www.youtube.com/embed/BtkBEsShj-0"
          title="Why Choose SMVA"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>

      <div>
        <ul className="flex flex-col gap-4">
          {CHECKLIST.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" className="mt-0.5 h-6 w-6 shrink-0">
                <circle cx="12" cy="12" r="10" fill="white" stroke="#BD1F67" strokeWidth="2" />
                <path
                  d="M7.5 12.5l3 3 6-6.5"
                  fill="none"
                  stroke="#BD1F67"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[16px] leading-[26px] text-black sm:text-[19px]">{item}</span>
            </li>
          ))}
        </ul>
        <a
          href="#book"
          className="mt-7 block w-full rounded-[11px] bg-brand px-6 py-4 text-center text-[15px] font-medium capitalize text-white sm:text-[18px]"
        >
          Start Your Journey to Parenthood
        </a>
      </div>
    </section>
  );
}
