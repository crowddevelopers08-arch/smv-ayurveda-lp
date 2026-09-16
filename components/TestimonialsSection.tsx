import Carousel from "./Carousel";
import SectionHeader from "./SectionHeader";

const TESTIMONIAL_VIDEOS = [
  {
    id: "cGGLUnFD0Sw",
    tag: "Patient Story",
    title: "Real Patient Experience",
    body: "Watch a real patient share their experience and care journey with SMV Ayurveda.",
  },
  {
    id: "5xI1nYsl95E",
    tag: "Patient Review",
    title: "Real Treatment Experience",
    body: "Watch another patient story about natural care and treatment experience.",
  },
  {
    id: "ibFIkCtrHjM",
    tag: "PCOD / PCOS",
    title: "PCOD/PCOS Care Insights",
    body: "Understand natural Ayurvedic support for PCOD, PCOS, and hormonal wellness.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#fff7fa] px-4 py-14 sm:py-[70px]">
      <SectionHeader
        eyebrow="Testimonials"
        title="Real Stories, Real Healing Journeys"
        body="Watch patient experiences, fertility care stories, and wellness insights from SMV Ayurveda."
      />

      <Carousel>
        {TESTIMONIAL_VIDEOS.map((v) => (
          <div
            key={v.id}
            className="flex-[0_0_clamp(280px,32vw,380px)] snap-start overflow-hidden rounded-lg border border-brand/10 bg-white shadow-[0_14px_36px_rgba(0,0,0,0.1)] transition hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)]"
          >
            <div className="relative aspect-[9/16] w-full bg-gradient-to-br from-brand/10 to-[#fff7fa]">
              <iframe
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <div className="bg-gradient-to-b from-white to-[#fff7fa] p-5">
              <span className="mb-3 inline-block rounded-lg bg-gradient-to-br from-brand to-brand-dark px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_24px_rgba(239,52,106,0.3)]">
                {v.tag}
              </span>
              <h3 className="text-[20px] font-bold leading-[1.25] text-[#171717]">{v.title}</h3>
              <p className="mt-2.5 text-[15px] leading-[1.55] text-[#666]">{v.body}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
