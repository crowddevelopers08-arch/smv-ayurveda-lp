import Link from "next/link";
import Script from "next/script";
import TopBar from "../../components/TopBar";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fff7fa]">
  

      {/* Event snippet for Submit lead New | 26/926 conversion page */}
      <Script id="google-ads-conversion-submit-lead-new" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-18173474730/9WlhCKfr_IUdEKrv5NlD'
          });
        `}
      </Script>

      <header className="relative z-10 border-b border-brand/10 bg-white shadow-[0_3px_16px_rgba(0,0,0,0.04)]">
        <TopBar />
      </header>
      <section className="flex min-h-[calc(100vh-130px)] items-center justify-center px-4 py-12 sm:px-7">
        <div className="w-full max-w-[680px] rounded-[28px] bg-white px-6 py-12 text-center shadow-[0_18px_60px_rgba(239,52,106,0.14)] ring-1 ring-brand/10 sm:px-14 sm:py-16">
          <div className="mx-auto mb-7 grid h-20 w-20 place-items-center rounded-full bg-brand text-white shadow-[0_10px_24px_rgba(239,52,106,0.25)]">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-10 w-10 fill-none stroke-current stroke-[2.5]">
              <path d="m5 12 4.2 4.2L19 6.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="mb-3 text-[14px] font-bold uppercase tracking-[0.14em] text-brand">Request received</p>
          <h1 className="font-mukta text-[35px] font-semibold leading-tight text-[#171717] sm:text-[48px]">
            Thank You!
          </h1>
          <p className="mx-auto mt-5 max-w-[510px] text-[17px] leading-8 text-[#555] sm:text-[19px]">
            Your consultation request has been received. Our fertility-care team will call you shortly.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-[11px] bg-brand px-7 py-4 font-poppins text-[16px] font-semibold text-white transition hover:bg-brand-dark"
            >
              Back to Home
            </Link>
            <a
              href="tel:+919689471315"
              className="inline-flex items-center justify-center rounded-[11px] border-2 border-brand px-7 py-4 font-poppins text-[16px] font-semibold text-brand transition hover:bg-brand hover:text-white"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
