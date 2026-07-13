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

export default function PatientTable({
  patients,
}: Props) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">

      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="text-left p-4">
              Patient ID
            </th>

            <th className="text-left p-4">
              Name
            </th>

            <th className="text-left p-4">
              Gender
            </th>

            <th className="text-left p-4">
              DOB
            </th>

            <th className="text-left p-4">
              Registered
            </th>

            <th className="text-left p-4">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {patients.map((patient) => (

            <tr
              key={patient.id}
              className="border-t"
            >

              <td className="p-4">
                {patient.unique}
              </td>

              <td className="p-4">
                {patient.firstname} {patient.lastname}
              </td>

              <td className="p-4">
                {patient.gender}
              </td>

              <td className="p-4">
                {patient.dob}
              </td>

              <td className="p-4">
                {patient.reg_date}
              </td>

              <td className="p-4">

                <Link
                  href={`/vitals?patient=${patient.id}`}
                  className="text-blue-600 font-medium"
                >
                  Continue →
                </Link>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}