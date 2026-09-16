export default function Hero() {
  return (
    <section
      className="relative mb-10 flex min-h-[400px] w-full items-center bg-[#ffe9fc] bg-[position:top_center] bg-no-repeat sm:h-[600px]"
      style={{ backgroundImage: "url('/images/bg2.gif')" }}
    >
      <div className="mx-auto w-full max-w-[1300px] px-4 py-10 text-center">
        <h1 className="font-mukta text-[30px] font-medium leading-[1.15] text-brand sm:text-[52px] sm:leading-[62px]">
          Conceive Naturally at Pune&apos;s <br className="hidden sm:block" />
          Best Ayurveda Fertility Clinic
        </h1>
        <p className="mx-auto mt-5 max-w-[720px] text-[17px] capitalize leading-[28px] text-brand sm:mt-[60px] sm:max-w-[860px] sm:text-[23px] sm:leading-[45px]">
          Struggling with infertility? Our holistic Ayurvedic treatments are designed to enhance
          your fertility naturally, offering personalized care to help you on your journey to
          parenthood
        </p>
        <a
          href="#book"
          className="mt-7 inline-flex items-center justify-center rounded-[11px] bg-brand px-6 py-4 font-poppins text-[15px] font-medium capitalize text-white sm:h-[84px] sm:px-16 sm:py-0 sm:text-[20px] sm:font-semibold"
        >
          Start Your Journey to Parenthood
        </a>
      </div>
      <svg
        className="absolute bottom-0 left-0 h-[24px] w-full text-white sm:h-[50px]"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path d="M0,6L1000,100V100H0Z" fill="currentColor" />
      </svg>
    </section>
  );
}
