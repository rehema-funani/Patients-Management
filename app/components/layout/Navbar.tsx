"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHospital } from "react-icons/fa";
import clsx from "clsx";

const links = [
  { href: "/", label: "Register Patient" },
  { href: "/vitals", label: "Vitals" },
  { href: "/assessment/overweight", label: "Overweight Assessment" },
  { href: "/assessment/general", label: "General Assessment" },
  { href: "/patients", label: "Patients" },
];

export default function Navbar() {
  const pathname = usePathname();

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
      </div>
    </nav>
  );
}