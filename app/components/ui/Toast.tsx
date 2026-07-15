"use client";

import { useEffect } from "react";

export type ToastType = "success" | "error";

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const isError = type === "error";

  return (
    <div
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      style={{ animation: "slideIn 0.25s ease-out" }}
      role="status"
    >
      <div
        className={`flex items-start gap-3 rounded-lg border px-4 py-3 shadow-lg max-w-sm bg-white ${
          isError ? "border-[#B54646]/30" : "border-[#1B4B91]/30"
        }`}
      >
        <span
          className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${
            isError ? "bg-[#B54646]" : "bg-[#1B4B91]"
          }`}
        >
          {isError ? "!" : "✓"}
        </span>

        <p className="text-sm text-[#14232B] leading-5">{message}</p>

        <button
          onClick={onClose}
          className="ml-auto text-[#9CAAAA] hover:text-[#5C7079] text-sm"
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
    </div>
  );
}