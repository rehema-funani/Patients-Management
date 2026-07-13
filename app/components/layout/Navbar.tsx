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
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaHospital className="text-blue-600" />
          <span className="font-bold text-lg">MediCare</span>
        </div>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm font-medium hover:text-blue-600",
                pathname === link.href
                  ? "text-blue-600"
                  : "text-slate-600"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}