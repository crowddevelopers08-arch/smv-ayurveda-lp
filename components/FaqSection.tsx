import FaqAccordion from "./FaqAccordion";

export default function FaqSection() {
  return (
    <section className="mx-auto mt-10 max-w-[1300px] px-4">
      <h2 className="mb-8 text-center font-mukta text-[24px] font-semibold text-[#292929] sm:text-[36px]">
        FAQs
      </h2>
      <FaqAccordion />
    </section>
  );
}
