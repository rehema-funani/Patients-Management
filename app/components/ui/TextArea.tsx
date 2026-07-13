import { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function TextArea({
  label,
  ...props
}: Props) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">
        {label}
      </label>

      <textarea
        {...props}
        rows={5}
        className="w-full border rounded-lg px-4 py-3"
      />
    </div>
  );
}