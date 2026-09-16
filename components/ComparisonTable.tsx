const COMPARISON_ROWS = [
  ["Approach", "Symptom-focused", "Root-cause based: mind, body, system as one"],
  ["Personalisation", "Standardised protocols", "Tailored to your dosha + condition"],
  ["Hormonal Load", "High (injections, artificial stimulation)", "None. Natural rebalancing"],
  ["Emotional Focus", "Often neglected", "Core part of our approach"],
  ["Male Partner Focus", "Often ignored", "Equal partner focus"],
  ["Success Rates", "20-30% avg", "60-80% in our treated cases"],
  ["Cost", "₹1.5L-5L per IVF cycle", "Fraction of cost"],
  ["After-effects", "Bloating, mood swings, failed cycles", "Detox, long-term wellness"],
];

export default function ComparisonTable() {
  return (
    <section className="mx-auto mt-8 max-w-[1000px] px-4">
      <div className="mx-auto max-w-[1000px] overflow-x-auto rounded-[10px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
        <table className="w-full min-w-[560px] border-collapse font-poppins text-[14px]">
          <thead>
            <tr>
              <th className="bg-[#cd4198] px-5 py-[25px] text-left text-[13px] font-semibold uppercase tracking-[1px] text-white">
                Aspect
              </th>
              <th className="bg-[#cd4198] px-5 py-[25px] text-left text-[13px] font-semibold uppercase tracking-[1px] text-white">
                Conventional Fertility (IVF / IUI / Hormones)
              </th>
              <th className="bg-[#cd4198] px-5 py-[25px] text-left text-[13px] font-semibold uppercase tracking-[1px] text-white">
                Ayurvedic Fertility at SMVA
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 1 ? "bg-[#fbeaf3]" : "bg-white"}>
                <td className="px-5 py-6 font-semibold text-[#cd4198]">{row[0]}</td>
                <td className="px-5 py-4 text-[#333]">{row[1]}</td>
                <td className="px-5 py-4 text-[#333]">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
