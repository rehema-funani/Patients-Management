"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import Navbar from "../components/layout/Navbar";
import Stepper from "../components/layout/Stepper";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import { calculateBMI } from "../utils/bmi";
import { addVitals } from "../services/patient";

export default function VitalsPage() {
  const router = useRouter();
  const search = useSearchParams();

  const patientId = Number(search.get("patient"));

  const [visitDate, setVisitDate] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const bmi = calculateBMI(
    Number(weight),
    Number(height)
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await addVitals({
        patient: patientId,
        visit_date: visitDate,
        height: Number(height),
        weight: Number(weight),
        bmi,
      });

      const vitalId = response.data.id;

      if (bmi <= 25) {
        router.push(
          `/assessment/general?patient=${patientId}&vital=${vitalId}&bmi=${bmi}`
        );
      } else {
        router.push(
          `/assessment/overweight?patient=${patientId}&vital=${vitalId}&bmi=${bmi}`
        );
      }

    } catch (err) {
      console.error(err);
      alert("Failed to save vitals.");
    }
  }

  return (
    <>
      <Navbar />

      <main className="max-w-3xl mx-auto p-8">

        <Stepper current={3} />

        <Card>

          <h2 className="text-2xl font-bold mb-6">
            Patient Vitals
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <Input
              label="Visit Date"
              type="date"
              value={visitDate}
              onChange={(e) => setVisitDate(e.target.value)}
              required
            />

            <Input
              label="Height (cm)"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />

            <Input
              label="Weight (kg)"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />

            <Input
              label="BMI"
              value={bmi || ""}
              readOnly
            />

            <Button type="submit">
              Continue →
            </Button>

          </form>

        </Card>

      </main>
    </>
  );
}