import CallbackForm from "./CallbackForm";

export default function BookConsultation() {
  return (
    <div id="book" className="w-full flex-1 lg:h-full">
      <h2 className="mb-6 text-center font-mukta text-[26px] font-semibold text-[#111010] sm:text-[31px]">
        Book Your 1:1 Consultation
      </h2>
      <div className="rounded-2xl bg-white ">
        <CallbackForm />
      </div>
    </div>
  );
}
