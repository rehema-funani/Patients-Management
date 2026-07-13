import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg",
        className
      )}
    >
      {children}
    </button>
  );
}