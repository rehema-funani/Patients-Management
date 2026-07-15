"use client";

import Link from "next/link";

interface Patient {
  id: number;
  unique: string;
  firstname: string;
  lastname: string;
  dob: string;
  gender: string;
  reg_date: string;
}

interface Props {
  patients: Patient[];
}

export default function PatientTable({ patients }: Props) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-[#DCE4E4]">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-[#DCE4E4]">
            {["Patient ID", "Name", "Gender", "DOB", "Registered", ""].map((h) => (
              <th
                key={h}
                className="text-left px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#5C7079]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {patients.map((patient, i) => (
            <tr
              key={patient.id}
              className={`hover:bg-[#1B4B91]/[0.03] transition-colors ${
                i !== patients.length - 1 ? "border-b border-[#DCE4E4]" : ""
              }`}
            >
              <td className="px-5 py-4">
                <span
                  className="text-[#14232B] text-sm"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {patient.unique}
                </span>
              </td>

              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-[#1B4B91]/10 text-[#1B4B91] flex items-center justify-center text-xs font-semibold">
                    {patient.firstname[0]}
                    {patient.lastname[0]}
                  </span>
                  <span className="font-medium text-[#14232B] text-sm">
                    {patient.firstname} {patient.lastname}
                  </span>
                </div>
              </td>

              <td className="px-5 py-4 text-sm text-[#5C7079]">
                {patient.gender}
              </td>

              <td className="px-5 py-4 text-sm text-[#5C7079]" style={{ fontFamily: "var(--font-mono)" }}>
                {patient.dob}
              </td>

              <td className="px-5 py-4 text-sm text-[#5C7079]" style={{ fontFamily: "var(--font-mono)" }}>
                {patient.reg_date}
              </td>

              <td className="px-5 py-4">
                <Link
                  href={`/vitals?patient=${patient.id}`}
                  className="text-[#1B4B91] font-semibold text-sm hover:underline"
                >
                  Continue →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {patients.length === 0 && (
        <div className="text-center py-12 text-[#5C7079] text-sm">
          No patients registered yet.
        </div>
      )}
    </div>
  );
}