"use client";

import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Stepper from "../components/layout/Stepper";
import PatientTable from "../components/table/PatientTable";

import { getPatients, getVitals } from "../services/patient";

interface Vital {
  id: number;
  patient: number;
  visit_date: string;
  height: number;
  weight: number;
  bmi: number;
}

export default function PatientsPage() {
  const [patients, setPatients] = useState<any[]>([]);
  const [vitals, setVitals] = useState<Vital[]>([]);
  const [loading, setLoading] = useState(true);
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  function unwrap(res: any) {
    if (Array.isArray(res)) return res;
    if (Array.isArray(res?.data)) return res.data;
    return [];
  }

  async function loadData() {
    try {
      const [patientsRes, vitalsRes] = await Promise.all([
        getPatients(),
        getVitals(),
      ]);

      setPatients(unwrap(patientsRes));
      setVitals(unwrap(vitalsRes));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // Latest vital per patient, optionally filtered by visit date
  const latestVitalByPatient = new Map<number, Vital>();

  const filteredVitals = dateFilter
    ? vitals.filter((v) => v.visit_date === dateFilter)
    : vitals;

  for (const v of filteredVitals) {
    const existing = latestVitalByPatient.get(v.patient);
    if (!existing || new Date(v.visit_date) > new Date(existing.visit_date)) {
      latestVitalByPatient.set(v.patient, v);
    }
  }

  const visiblePatients = dateFilter
    ? patients.filter((p) => latestVitalByPatient.has(p.id))
    : patients;

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto p-8">
        <Stepper current={5} />

        <div className="flex items-center justify-between mb-8">
          <h1
            className="text-3xl font-bold text-[#14232B]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Registered Patients
          </h1>

          <div>
            <label className="block mb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#5C7079]">
              Filter by Visit Date
            </label>
            <div className="flex gap-2">
              <input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="border border-[#DCE4E4] rounded-lg px-3 py-2 text-sm outline-none focus:border-[#1B4B91] focus:ring-2 focus:ring-[#1B4B91]/20"
              />
              {dateFilter && (
                <button
                  onClick={() => setDateFilter("")}
                  className="text-sm text-[#5C7079] hover:text-[#14232B] px-2"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {loading ? (
          <p className="text-[#5C7079]">Loading patients...</p>
        ) : (
          <PatientTable
            patients={visiblePatients}
            latestVitalByPatient={latestVitalByPatient}
          />
        )}
      </main>
    </>
  );
}