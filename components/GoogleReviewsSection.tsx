import Image from "next/image";
import Carousel from "./Carousel";
import SectionHeader from "./SectionHeader";

const REVIEWS = [
  {
    initials: "RK",
    name: "Rohit Khandagale",
    body: "Genuine treatment and suggestions. Making us believe again that Ayurveda can treat you really very well. Dr. Nagare makes sure that his patients are not afraid of the treatment and are comfortable without hiding any truth.",
  },
  {
    initials: "KB",
    name: "Kadam Bhakti",
    body: "It was a very good and happy experience. All the staff members are very cooperative and calm with the patient. Good doctor. He is simple and gentle in his behavior and gives sufficient time to each patient.",
  },
  {
    initials: "AN",
    name: "Aditya Nandiwadekar",
    body: "Overall experience is good. We got positive result from the 1st appointment. Healthy diet supported us for a positive response. The staff behavior is very kind and supportive during visit as well as on call.",
  },
  {
    initials: "AL",
    name: "Adwait Lule",
    body: "Overall experience was really good. Dr. Nagare Sir is super cooperative and handles the patient very politely. The result of medicine was very effective. The staff and assistant doctor are also very cooperative.",
  },
  {
    initials: "VP",
    name: "Vrushali Patil",
    body: "I was trying for pregnancy for 5 years and had visited many allopathic doctors but was not able to conceive. After visiting Dr. Vinesh Nagare, a miracle happened and within 5 months of treatment I conceived.",
  },
  {
    initials: "PL",
    name: "Pratiksha Latey",
    body: "Genuine doctor and very knowledgeable. The doctor explains everything in detail and knows how the medicines work. The treatment was effective for me, and the team is also very genuine and helpful.",
  },
];

export default function GoogleReviewsSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#fff7fa] px-4 py-14 sm:py-[70px]">
      <SectionHeader
        eyebrow="Google Reviews"
        title="What Our Patients Say"
        body="Real experiences shared by patients who trusted Shri Maulivishva Ayurveda for their healing journey."
      />

      <Carousel>
        {REVIEWS.map((r) => (
          <div
            key={r.name}
            className="flex min-h-[360px] flex-[0_0_clamp(280px,32vw,380px)] snap-start flex-col rounded-lg border border-brand/15 bg-gradient-to-b from-white to-[#fff7fa] p-[26px] transition hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2 rounded-full bg-white px-2.5 py-1 text-[13px] font-bold text-[#444] shadow-sm">
                <Image
                  src="/images/Google__G__logo.svg_.png"
                  alt="Google logo"
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px]"
                />
                Google Review
              </span>
              <span className="text-[18px] tracking-[1px] text-[#f7b500]">★★★★★</span>
            </div>
            <p className="flex-1 text-[15.5px] leading-[1.72] text-[#555]">{r.body}</p>
            <div className="mt-5 flex items-center gap-3 border-t border-black/5 pt-4">
              <span className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-md bg-gradient-to-br from-brand to-brand-dark text-[17px] font-bold text-white">
                {r.initials}
              </span>
              <div>
                <div className="text-[17px] font-bold text-[#171717]">{r.name}</div>
                <div className="text-[13px] font-semibold text-brand">Patient</div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
