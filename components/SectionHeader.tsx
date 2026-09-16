export default function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
}) {
  return (
    <div className="mx-auto mb-8 max-w-[760px] text-center">
      <span className="mb-3 inline-flex items-center gap-2 rounded-lg bg-brand/10 px-4 py-2 text-[14px] font-bold uppercase tracking-[0.08em] text-brand sm:text-[16px]">
        {eyebrow}
      </span>
      <h2 className="text-[26px] font-medium leading-[1.1] text-[#171717] sm:text-[35px]">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-[580px] text-[15px] leading-[1.6] text-[#666] sm:text-[17px]">
        {body}
      </p>
    </div>
  );
}
