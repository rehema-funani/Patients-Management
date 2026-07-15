import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...props }: Props) {
  return (
    <div>
      <label className="block mb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#5C7079]">
        {label}
      </label>

      <input
        autoComplete="off"
        {...props}
        style={{ fontFamily: "var(--font-mono)" }}
        className="w-full bg-white border border-[#DCE4E4] rounded-lg px-4 py-3 text-[#14232B] outline-none transition-colors focus:border-[#0E7C7B] focus:ring-2 focus:ring-[#0E7C7B]/20focus:border-[#1B4B91] focus:ring-2 focus:ring-[#1B4B91]/20 disabled:bg-[#F6F8F8] disabled:text-[#9CAAAA]"
      />
    </div>
  );
}