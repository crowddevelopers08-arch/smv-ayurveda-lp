import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import StatsAndBookingRow from "../components/StatsAndBookingRow";
import TestimonialsSection from "../components/TestimonialsSection";
import TreatmentsSection from "../components/TreatmentsSection";
import AboutSection from "../components/AboutSection";
import WhyFamiliesHeader from "../components/WhyFamiliesHeader";
import ComparisonTable from "../components/ComparisonTable";
import IsThisForYouSection from "../components/IsThisForYouSection";
import GoogleReviewsSection from "../components/GoogleReviewsSection";
import WhyChooseHeader from "../components/WhyChooseHeader";
import VideoChecklistSection from "../components/VideoChecklistSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <TopBar />
      <Hero />
      <StatsAndBookingRow />
      <TestimonialsSection />
      <TreatmentsSection />
      <AboutSection />
      <WhyFamiliesHeader />
      <ComparisonTable />
      <IsThisForYouSection />
      <GoogleReviewsSection />
      <WhyChooseHeader />
      <VideoChecklistSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
