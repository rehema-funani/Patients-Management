import { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`w-full bg-[#1B4B91] hover:bg-[#123868] text-white font-semibold py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B4B91]/30 disabled:opacity-50 disabled:cursor-not-allowed ${className ?? ""}`}
    >
      {children}
    </button>
  );
}