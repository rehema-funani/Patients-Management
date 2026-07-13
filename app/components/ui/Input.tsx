import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...props }: Props) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        {...props}
        className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}