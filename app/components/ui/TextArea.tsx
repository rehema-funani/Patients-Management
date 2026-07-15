import { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function TextArea({ label, ...props }: Props) {
  return (
    <div>
      <label className="block mb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#5C7079]">
        {label}
      </label>

      <textarea
        rows={4}
        {...props}
        className="w-full bg-white border border-[#DCE4E4] rounded-lg px-4 py-3 text-[#14232B] outline-none transition-colors
         focus:border-[#1B4B91] focus:ring-2 focus:ring-[#1B4B91]/20 resize-none"
      />
    </div>
  );
}