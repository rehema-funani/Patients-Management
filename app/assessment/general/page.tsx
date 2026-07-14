"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Navbar from "../../components/layout/Navbar";
import Stepper from "../../components/layout/Stepper";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import TextArea from "../../components/ui/TextArea";
import Button from "../../components/ui/Button";

import { addVisit } from "../../services/patient";

export default function GeneralAssessmentPage() {
  const router = useRouter();
  const params = useSearchParams();

  const patientId = Number(params.get("patient"));
  const vitalId = Number(params.get("vital"));
  const bmi = Number(params.get("bmi"));

  const [visitDate, setVisitDate] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");
  const [generalHealth, setGeneralHealth] = useState("");
  const [onDiet, setOnDiet] = useState("");
  const [onDrugs, setOnDrugs] = useState("");
  const [comments, setComments] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await addVisit({
        patient: patientId,
        vital: vitalId,
        visit_date: visitDate,
        diagnosis,
        treatment,
        general_health: generalHealth,
        on_diet: onDiet,
        on_drugs: onDrugs,
        comments,
      });

      if (bmi >= 25) {
        router.push(`/assessment/overweight?patient=${patientId}`);
      } else {
        router.push("/patients");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Navbar />

      <main className="max-w-3xl mx-auto p-8">
        <Stepper current={4} />

        <Card>
          <h2 className="text-2xl font-bold mb-8">
            General Assessment
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
            />

            <Input
              label="Diagnosis"
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
            />

            <TextArea
              label="Treatment"
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
            />

            <Select
              label="General Health"
              value={generalHealth}
              onChange={(e) => setGeneralHealth(e.target.value)}
              options={[
                "Excellent",
                "Good",
                "Fair",
                "Poor",
              ]}
            />

            <Select
              label="Currently on Diet?"
              value={onDiet}
              onChange={(e) => setOnDiet(e.target.value)}
              options={[
                "Yes",
                "No",
              ]}
            />

            <Select
              label="Currently on Drugs?"
              value={onDrugs}
              onChange={(e) => setOnDrugs(e.target.value)}
              options={[
                "Yes",
                "No",
              ]}
            />

            <TextArea
              label="Comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />

            <Button type="submit">
              Finish Assessment
            </Button>
          </form>
        </Card>
      </main>
    </>
  );
}