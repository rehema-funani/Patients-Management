"use client";

import Card from "../ui/Card";
import Input from "../ui/Input";
import Select from "../ui/Select";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";

export default function GeneralAssessmentForm() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">

      <Card>

        <h2 className="text-2xl font-bold">
          General Assessment
        </h2>

        <p className="text-slate-500 mt-2 mb-8">
          Complete the patient's general health assessment.
        </p>

        <form className="space-y-5">

          <Input
            label="Visit Date"
            type="date"
          />

          <Input
            label="Diagnosis"
            placeholder="Enter diagnosis"
          />

          <TextArea
            label="Treatment"
            placeholder="Enter treatment plan"
          />

          <Select
            label="General Health"
            options={[
              "Excellent",
              "Good",
              "Fair",
              "Poor",
            ]}
          />

          <Select
            label="Currently on Diet?"
            options={[
              "Yes",
              "No",
            ]}
          />

          <Select
            label="Currently using any drugs?"
            options={[
              "Yes",
              "No",
            ]}
          />

          <TextArea
            label="Comments"
            placeholder="Enter any additional comments..."
          />

          <Button>
            Save & Continue →
          </Button>

        </form>

      </Card>

      <Card>

        <h2 className="text-2xl font-bold mb-6">
          Assessment Information
        </h2>

        <div className="space-y-5">

          <div className="rounded-lg bg-green-50 p-4">
            <h3 className="font-semibold text-green-700">
              General Health
            </h3>

            <p>
              Record the patient's overall health condition.
            </p>
          </div>

          <div className="rounded-lg bg-blue-50 p-4">
            <h3 className="font-semibold text-blue-700">
              Drug Usage
            </h3>

            <p>
              Indicate whether the patient is currently using any medication.
            </p>
          </div>

          <div className="rounded-lg bg-yellow-50 p-4">
            <h3 className="font-semibold text-yellow-700">
              Diagnosis & Treatment
            </h3>

            <p>
              Record the patient's diagnosis and prescribed treatment.
            </p>
          </div>

          <div className="rounded-lg bg-slate-100 p-4">
            <h3 className="font-semibold">
              Notes
            </h3>

            <p>
              Comments help clinicians during future visits.
            </p>
          </div>

        </div>

      </Card>

    </div>
  );
}