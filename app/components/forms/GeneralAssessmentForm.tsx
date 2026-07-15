"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Card from "../ui/Card";
import Input from "../ui/Input";
import Select from "../ui/Select";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";

import { addVisit } from "../../services/patient";

export default function GeneralAssessmentForm() {
  const router = useRouter();
  const params = useSearchParams();

  const patientId = Number(params.get("patient"));
  const bmi = Number(params.get("bmi"));

  const [visitDate, setVisitDate] = useState("");
  const [generalHealth, setGeneralHealth] = useState("");
  const [onDrugs, setOnDrugs] = useState("");
  const [comments, setComments] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await addVisit({
        patient: patientId,
        visit_date: visitDate,
        general_health: generalHealth,
        on_drugs: onDrugs,
        comments,
      });

      router.push("/patients");
    } catch (err) {
      console.error(err);
      alert("Failed to save assessment.");
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card>
        <h2 className="text-2xl font-bold">
          General Assessment
        </h2>

        <p className="text-slate-500 mt-2 mb-8">
          Complete the patient's general assessment.
        </p>

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

          <Select
            label="General Health"
            value={generalHealth}
            onChange={(e) => setGeneralHealth(e.target.value)}
            options={[
              "Good",
              "Poor",
            ]}
            required
          />

          <Select
            label="Are you currently using any drugs?"
            value={onDrugs}
            onChange={(e) => setOnDrugs(e.target.value)}
            options={[
              "Yes",
              "No",
            ]}
            required
          />

          <TextArea
            label="Comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Enter comments..."
            required
          />

          <Button type="submit">
            Finish Assessment
          </Button>
        </form>
      </Card>

      <Card>
        <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
          Assessment Information
        </h2>

        <div className="mt-6 space-y-3">
          {[
            { title: "General Health", desc: "Record whether the patient's health is Good or Poor.", icon: "❤" },
            { title: "Drug Usage", desc: "Record whether the patient is currently using any drugs.", icon: "℞" },
            { title: "Comments", desc: "Add any additional observations from this visit.", icon: "✎" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-lg border border-[#DCE4E4] p-4 hover:border-[#1B4B91]/40 transition-colors"
            >
              <span className="shrink-0 w-9 h-9 rounded-full bg-[#1B4B91]/10 text-[#1B4B91] flex items-center justify-center text-sm font-semibold">
                {item.icon}
              </span>
              <div>
                <h3 className="font-semibold text-[#14232B] text-sm">{item.title}</h3>
                <p className="text-sm text-[#5C7079] mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}