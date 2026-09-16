import { PhoneIcon, MapPinIcon } from "./icons";

export default function ContactColumn({
  title,
  dividerWidth,
  address,
  notes,
  mapSrc,
  mapTitle,
}: {
  title: string;
  dividerWidth: string;
  address: string;
  notes: string[];
  mapSrc: string;
  mapTitle: string;
}) {
  return (
    <div>
      <h2 className="font-mukta text-[24px] font-semibold leading-[1.4] text-brand sm:text-[28px]">
        {title}
      </h2>
      <div className={`my-3 h-px bg-brand ${dividerWidth}`} />
      <ul className="flex flex-col gap-2 text-[16px] leading-[26px] text-brand">
        <li>
          <a href="tel:+919689471315" className="flex items-center gap-2">
            <PhoneIcon /> +91 9689471315
          </a>
        </li>
        <li>
          <a href="tel:+917083880320" className="flex items-center gap-2">
            <PhoneIcon /> +91 7083880320
          </a>
        </li>
        <li className="flex items-start gap-2">
          <MapPinIcon />
          {address}
        </li>
      </ul>
      {notes.map((note) => (
        <div key={note} className="mt-3 flex items-center gap-3">
          <span className="h-px flex-1 bg-brand/60" />
          <span className="whitespace-nowrap text-[15px] font-semibold text-brand sm:text-[18px]">
            {note}
          </span>
          <span className="h-px flex-1 bg-brand/60" />
        </div>
      ))}
      <iframe
        title={mapTitle}
        src={mapSrc}
        width="400"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        className="mt-4 w-full max-w-[400px] rounded"
      />
    </div>
  );
}
