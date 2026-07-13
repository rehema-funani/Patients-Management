import { SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
}

export default function Select({
  label,
  options,
  ...props
}: Props) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">
        {label}
      </label>

      <select
        {...props}
        className="w-full border rounded-lg px-4 py-3"
      >
        <option>Select</option>

        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}