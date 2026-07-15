"use client";

import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Stepper from "../components/layout/Stepper";
import PatientTable from "../components/table/PatientTable";

import { getPatients } from "../services/patient";

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPatients();
  }, []);

  async function loadPatients() {
    try {
      const response = await getPatients();

      setPatients(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto p-8">

        <Stepper current={5} />

        <h1 className="text-3xl font-bold mb-8">
          Registered Patients
        </h1>

        {loading ? (
          <p>Loading patients...</p>
        ) : (
          <PatientTable patients={patients} />
        )}

      </main>
    </>
  );
}