"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const NEED_HELP_OPTIONS = [
  "Failed IUI/IVF Treatments",
  "Low AMH Levels",
  "Low Sperm Count",
  "PCOS/PCOD Management",
  "Gynecological Health Issues",
  "Recurrent Miscarriages",
  "Male Fertility Challenges",
];

export default function CallbackForm() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "smv-lp-leads",
          source: "smvayurvedaconsultation",
          name: formData.get("your-name"),
          phone: formData.get("your-phone"),
          concern: formData.get("need-help-with"),
          pageUrl: window.location.href,
          rating: "",
          callback: "",
        }),
      });

      const result = (await response.json()) as { success?: boolean; error?: string };
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to submit your request. Please try again.");
      }

      router.push("/thank-you");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to submit your request. Please try again.",
      );
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[860px] rounded-2xl bg-white p-6 font-mukta text-[#222] sm:p-[28px]"
    >
      <div className="mb-[18px] flex flex-col gap-[7px]">
        <label htmlFor="your-name" className="block text-[17px] font-semibold text-[#222]">
          Full Name
        </label>
        <input
          id="your-name"
          name="your-name"
          type="text"
          required
          placeholder="Enter your full name"
          className="block h-[52px] w-full rounded-[9px] border-[1.5px] border-[#d9d9d9] bg-white px-[18px] text-[16px] font-medium text-[#222] outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
        />
      </div>

      <div className="mb-[18px] flex flex-col gap-[7px]">
        <label htmlFor="your-phone" className="block text-[17px] font-semibold text-[#222]">
          Phone Number
        </label>
        <input
          id="your-phone"
          name="your-phone"
          type="tel"
          required
          maxLength={10}
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
          placeholder="Enter your phone number"
          className="block h-[52px] w-full rounded-[9px] border-[1.5px] border-[#d9d9d9] bg-white px-[18px] text-[16px] font-medium text-[#222] outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
        />
      </div>

      <div className="mb-[18px] flex flex-col gap-[7px]">
        <label htmlFor="need-help-with" className="block text-[17px] font-semibold text-[#222]">
          Need Help With
        </label>
        <select
          id="need-help-with"
          name="need-help-with"
          required
          defaultValue=""
          className="block h-[52px] w-full appearance-none rounded-[9px] border-[1.5px] border-[#d9d9d9] bg-white bg-[right_18px_center] bg-no-repeat px-[18px] pr-[52px] text-[16px] font-medium text-[#222] outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23EF346A' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
            backgroundSize: "14px 14px",
          }}
        >
          <option value="">Select an option</option>
          {NEED_HELP_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="block w-full rounded-[9px] border-2 border-brand bg-brand py-[15px] text-[16px] font-bold uppercase tracking-[0.4px] text-white transition-colors hover:bg-white hover:text-brand disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Request A Call Back"}
      </button>
      {error && <p className="mt-3 text-center text-[14px] font-medium text-red-600">{error}</p>}
    </form>
  );
}
