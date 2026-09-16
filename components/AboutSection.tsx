export default function AboutSection() {
  return (
    <section className="mx-auto mt-8 max-w-[1300px] px-4 py-4 text-center sm:mt-[50px]">
      <h2 className=" font-mukta text-[24px] font-semibold text-[#222] sm:text-[40px]">
        Bringing Parenthood Closer
      </h2>
      <div className="my-4 flex items-center justify-center text-[#ffb7e3] sm:my-6">
        <span className="flex w-[30px] shrink-0 items-center justify-between">
          <span className="h-[px] w-[5px] rounded-full bg-current" />
          <span className="h-[5px] w-[5px] rounded-full bg-current" />
        </span>
        <span className="ml-5 h-[3px] w-[72px] bg-current sm:w-[94px]" />
        <svg viewBox="0 0 24 24" className="mx-2 h-[24px] w-[24px] sm:h-[34px] sm:w-[34px]">
          <path
            d="M12 20s-7-4.5-9.5-9C.8 7.3 2.5 4 6 4c2 0 3.5 1.2 4 2.5.5-1.3 2-2.5 4-2.5 3.5 0 5.2 3.3 3.5 7-2.5 4.5-9.5 9-9.5 9z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        <span className="h-[3px] w-[72px] bg-current sm:w-[94px]" />
        <span className="ml-5 flex w-[30px] shrink-0 items-center justify-between">
          <span className="h-[5px] w-[5px] rounded-full bg-current" />
          <span className="h-[5px] w-[5px] rounded-full bg-current" />
        </span>
      </div>
      <p className="mx-auto max-w-[1160px] text-[15px] leading-[28px] tracking-[0.6px] text-[#0f0f0f] sm:text-[20px]">
        Longing to hear the words &ldquo;you&rsquo;re pregnant&rdquo;? To see two pink lines that
        shift your entire world? <strong>At Shri Mauli Vishwa Ayurveda</strong>, we don&apos;t
        just understand that longing—we honour it. Because here, fertility isn&apos;t a checkbox.
        It&apos;s a deeply personal journey back to balance, clarity, and hope. Whether
        you&apos;re just starting to try or have spent years with no clear answers, we meet you
        with care that&apos;s both gentle and precise. Our Ayurvedic fertility program goes
        deeper—treating what&apos;s silently holding your body back. From PCOS and thyroid to
        hormonal shifts, stress, or irregular cycles—every protocol is designed for your body,
        your story. This isn&apos;t just a clinic. It&apos;s a space where every practitioner,
        every protocol, and every step is rooted in one shared goal—your pregnancy.
      </p>
      <a
        href="#book"
        className="mt-6 inline-block rounded-[11px] bg-brand px-6 py-4 text-[15px] font-medium capitalize text-white sm:text-[18px]"
      >
        Start Your Journey to Parenthood
      </a>
    </section>
  );
}
