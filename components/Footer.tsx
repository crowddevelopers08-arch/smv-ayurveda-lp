import Image from "next/image";
import ContactColumn from "./ContactColumn";

export default function Footer() {
  return (
    <footer className="mt-10 w-full bg-[#ffe9fc] px-4 pt-10">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-10 pb-10 md:grid-cols-3">
        <div>
          <Image
            src="/images/Shri-mauli-ayurveda.png"
            alt="Shri Mauli Vishwa Ayurveda"
            width={300}
            height={150}
            className="h-auto w-[60%]"
          />
          <p className="mt-4 w-[90%] text-[16px] leading-[26px] text-brand">
            Shri Mauli Vishwa Ayurveda (SMVA) offers root-cause, hormone-free fertility care
            rooted in Ayurveda. With 300+ success stories and 20+ years of experience, we help
            couples conceive naturally—treating both body and mind with personalized, holistic
            care.
          </p>
        </div>

        <ContactColumn
          title="Contact Info - Pune"
          dividerWidth="w-[61%]"
          address="Flat No. 106, 1st Floor, Saisparsh Apartment, 1005, Sadashiv Peth, Near Perugate, Pune, Maharashtra 411030"
          notes={["Calling Time - 10 AM to 9 PM"]}
          mapTitle="SMVA Pune location"
          mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.373022505407!2d73.8459750751915!3d18.512037982579876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c073e6f01c49%3A0xca8a29cf73254488!2sShri%20Maulivishwa%20Ayurveda%20Research%20Center%20%7C%20Ayurvedic%20PCOD%20%26%20Infertility%20Treatment%20in%20Pune!5e0!3m2!1sen!2sin!4v1745222253112!5m2!1sen!2sin"
        />

        <ContactColumn
          title="Contact Info - Mumbai"
          dividerWidth="w-[71%]"
          address="Palkar Polyclinic, Senapati Bapat Square, Ranade Road, Dadar(West)"
          notes={["Every 2nd Sunday Of The Month", "Calling Time - 10 AM to 9 PM"]}
          mapTitle="SMVA Mumbai location"
          mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7916271273893!2d72.83921367520422!3d19.02890148216606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cecf74d3536d%3A0xadc9971f08a548d0!2sPalkars%20Polyclinic!5e0!3m2!1sen!2sin!4v1745299649039!5m2!1sen!2sin"
        />
      </div>
    </footer>
  );
}
