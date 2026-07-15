"use client";

import Link from "next/link";
import { calculateAge } from "../../utils/age";
import { bmiStatus } from "../../utils/bmi";

interface Patient {
  id: number;
  unique: string;
  firstname: string;
  lastname: string;
  dob: string;
  gender: string;
  reg_date: string;
}

interface Vital {
  id: number;
  patient: number;
  visit_date: string;
  bmi: number;
}

interface Props {
  patients: Patient[];
  latestVitalByPatient: Map<number, Vital>;
}

const statusStyles: Record<string, string> = {
  Underweight: "bg-[#3B76A6]/10 text-[#3B76A6]",
  Normal: "bg-[#3F8F5F]/10 text-[#3F8F5F]",
  Overweight: "bg-[#C87F1B]/10 text-[#C87F1B]",
};

export default function PatientTable({ patients, latestVitalByPatient }: Props) {
  if (patients.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-[#DCE4E4] text-center py-12 text-[#5C7079] text-sm">
        No patients match this filter.
      </div>
    );
  }

  return (
    <>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-xl border border-[#DCE4E4]">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-[#DCE4E4]">
              {["Patient ID", "Name", "Age", "Gender", "Last BMI Status", "Registered", ""].map((h) => (
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
            {patients.map((patient, i) => {
              const vital = latestVitalByPatient.get(patient.id);
              const status = vital ? bmiStatus(vital.bmi) : null;

              return (
                <tr
                  key={patient.id}
                  className={`hover:bg-[#1B4B91]/[0.03] transition-colors ${
                    i !== patients.length - 1 ? "border-b border-[#DCE4E4]" : ""
                  }`}
                >
                  <td className="px-5 py-4">
                    <span className="text-[#14232B] text-sm" style={{ fontFamily: "var(--font-mono)" }}>
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
                    {calculateAge(patient.dob)}
                  </td>

                  <td className="px-5 py-4 text-sm text-[#5C7079]">
                    {patient.gender}
                  </td>

                  <td className="px-5 py-4">
                    {status ? (
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles[status]}`}>
                        {status}
                      </span>
                    ) : (
                      <span className="text-xs text-[#9CAAAA]">No vitals yet</span>
                    )}
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
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile card list */}
      <div className="md:hidden flex flex-col gap-3">
        {patients.map((patient) => {
          const vital = latestVitalByPatient.get(patient.id);
          const status = vital ? bmiStatus(vital.bmi) : null;

          return (
            <div
              key={patient.id}
              className="bg-white rounded-xl border border-[#DCE4E4] p-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 shrink-0 rounded-full bg-[#1B4B91]/10 text-[#1B4B91] flex items-center justify-center text-sm font-semibold">
                  {patient.firstname[0]}
                  {patient.lastname[0]}
                </span>
                <div className="min-w-0">
                  <p className="font-medium text-[#14232B] text-sm truncate">
                    {patient.firstname} {patient.lastname}
                  </p>
                  <p
                    className="text-xs text-[#5C7079]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    ID: {patient.unique}
                  </p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-y-2 text-xs">
                <div>
                  <span className="text-[#9CAAAA] uppercase tracking-wide">Age</span>
                  <p className="text-[#14232B]">{calculateAge(patient.dob)}</p>
                </div>
                <div>
                  <span className="text-[#9CAAAA] uppercase tracking-wide">Gender</span>
                  <p className="text-[#14232B]">{patient.gender}</p>
                </div>
                <div>
                  <span className="text-[#9CAAAA] uppercase tracking-wide">Registered</span>
                  <p className="text-[#14232B]" style={{ fontFamily: "var(--font-mono)" }}>
                    {patient.reg_date}
                  </p>
                </div>
                <div>
                  <span className="text-[#9CAAAA] uppercase tracking-wide">BMI Status</span>
                  {status ? (
                    <span className={`inline-block mt-0.5 text-xs font-semibold px-2 py-0.5 rounded-full ${statusStyles[status]}`}>
                      {status}
                    </span>
                  ) : (
                    <p className="text-[#9CAAAA]">No vitals yet</p>
                  )}
                </div>
              </div>

              <Link
                href={`/vitals?patient=${patient.id}`}
                className="mt-3 block text-center text-[#1B4B91] font-semibold text-sm border border-[#1B4B91]/30 rounded-lg py-2 hover:bg-[#1B4B91]/5"
              >
                Continue →
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}