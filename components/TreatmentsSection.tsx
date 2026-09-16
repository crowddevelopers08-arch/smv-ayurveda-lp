import Carousel from "./Carousel";
import SectionHeader from "./SectionHeader";

const TREATMENTS = [
  {
    img: "/images/Failed-IUI_IVF-Treatments.jpg",
    tag: "Specialized Care",
    title: "Failed IUI/IVF Treatments",
    body: "Supportive care focused on improving reproductive health naturally.",
  },
  {
    img: "/images/Low-AMH-Levels.jpg",
    tag: "Diagnostic",
    title: "Low AMH Levels",
    body: "Personalized guidance for ovarian health and fertility support.",
  },
  {
    img: "/images/Low-Sperm-Count.jpg",
    tag: "Male Fertility",
    title: "Low Sperm Count",
    body: "Natural care plans for male reproductive wellness.",
  },
  {
    img: "/images/PCOS_PCOD-Management.jpg",
    tag: "Hormonal",
    title: "PCOS/PCOD Management",
    body: "Holistic support for cycle regulation and hormonal balance.",
  },
  {
    img: "/images/Endometriosis.jpg",
    tag: "Women's Health",
    title: "Endometriosis",
    body: "Holistic Ayurvedic support for menstrual comfort and reproductive wellness.",
  },
  {
    img: "/images/Gynecological-Health-Issues.jpg",
    tag: "Wellness",
    title: "Gynecological Health",
    body: "Care for women's health concerns through Ayurvedic support.",
  },
  {
    img: "/images/Recurrent-Miscarriages.jpg",
    tag: "Clinical",
    title: "Recurrent Miscarriages",
    body: "Gentle support for reproductive strength and overall wellness.",
  },
  {
    img: "/images/Male-Fertility-Challenges.jpg",
    tag: "Comprehensive",
    title: "Male Fertility Challenges",
    body: "Dedicated care for improving male fertility and vitality.",
  },
];

export default function TreatmentsSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#fff7fa] px-7 py-14 sm:py-[70px]">
      <SectionHeader
        eyebrow="Fertility Care"
        title="We Can Assist You With"
        body="Personalized Ayurvedic care for fertility, hormonal balance, and reproductive wellness."
      />

      <Carousel fullWidth>
        {TREATMENTS.map((t) => (
          <div
            key={t.title}
            className="relative flex min-h-[440px] flex-[0_0_clamp(280px,32vw,380px)] snap-start flex-col justify-end overflow-hidden rounded-lg bg-cover bg-center transition hover:-translate-y-1.5"
            style={{ backgroundImage: `url(${t.img})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/80" />
            <div className="relative border-t border-white/20 bg-white/10 p-5 backdrop-blur-md">
              <span className="mb-2 inline-block rounded-lg bg-gradient-to-br from-brand to-brand-dark px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                {t.tag}
              </span>
              <h3 className="text-[22px] font-bold text-white drop-shadow sm:text-[26px]">
                {t.title}
              </h3>
              <p className="mt-2 text-[15px] text-white/86">{t.body}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
