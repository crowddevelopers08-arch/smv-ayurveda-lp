import Image from "next/image";

export default function TopBar() {
  return (
    <div className="mx-auto flex w-full max-w-[1300px] flex-wrap items-center justify-between gap-4 px-4 py-0 max-[327px]:flex-nowrap max-[327px]:gap-2 max-[327px]:px-3">
      <Image
        src="/images/Shri-mauli-ayurveda-logo-e1778050922237.jpg"
        alt="Shri Mauli Vishwa Ayurveda"
        width={253}
        height={130}
        priority
        className="h-auto w-[180px] max-[327px]:w-[145px] sm:w-[220px]"
      />
      <a
        href="tel:+919689471315"
        aria-label="Call Shri Mauli Vishwa Ayurveda"
        className="inline-flex items-center gap-2 rounded-[11px] bg-brand px-5 py-3 font-sen text-[18px] font-light text-white max-[327px]:gap-1.5 max-[327px]:px-3 sm:text-[22px]"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="hidden h-5 w-5 fill-none stroke-current stroke-2 max-[399px]:block"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
        <span className="max-[399px]:hidden">+91 9689471315</span>
        <span className="hidden max-[399px]:inline">Call</span>
      </a>
    </div>
  );
}
