import StatsSection from "./StatsSection";
import BookConsultation from "./BookConsultation";

export default function StatsAndBookingRow() {
  return (
    <section className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-10 px-4 py-8 lg:grid-cols-2 lg:items-stretch lg:gap-6">
      <StatsSection />
      <BookConsultation />
    </section>
  );
}
