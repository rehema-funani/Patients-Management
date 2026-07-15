"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHospital, FaBars, FaTimes } from "react-icons/fa";
import clsx from "clsx";

const links = [
  { href: "/", label: "Register Patient" },
  { href: "/vitals", label: "Vitals" },
  { href: "/patients", label: "Patients" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[#DCE4E4]">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-[#1B4B91] flex items-center justify-center">
            <FaHospital className="text-white text-sm" />
          </span>
          <span
            className="text-xl text-[#14232B]"
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600 }}
          >
            MediCare
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors",
                  isActive ? "text-[#1B4B91]" : "text-[#5C7079] hover:text-[#14232B]"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-3 right-3 -bottom-[1px] h-[2px] bg-[#1B4B91] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 flex items-center justify-center text-[#14232B]"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-[#DCE4E4] bg-white px-6 py-3 flex flex-col gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors",
                  isActive
                    ? "bg-[#1B4B91]/10 text-[#1B4B91]"
                    : "text-[#5C7079] hover:bg-[#F6F8F8] hover:text-[#14232B]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}