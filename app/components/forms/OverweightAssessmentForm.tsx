"use client";

import Card from "../ui/Card";
import Input from "../ui/Input";
import Select from "../ui/Select";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";

export default function OverweightAssessmentForm() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">

      <Card>

        <h2 className="text-2xl font-bold">
          Overweight Assessment
        </h2>

        <p className="text-slate-500 mt-2 mb-8">
          Complete the patient's overweight assessment.
        </p>

        <form className="space-y-5">

          <Input
            label="Visit Date"
            type="date"
          />

          <Select
            label="General Health"
            options={["Good", "Poor"]}
          />

          <Select
            label="Have you ever been on a diet to lose weight?"
            options={["Yes", "No"]}
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
          Assessment Guide
        </h2>

        <div className="space-y-5">

          <div className="rounded-lg bg-red-50 p-4">
            <h3 className="font-semibold text-red-700">
              Diet History
            </h3>

            <p>
              Record whether the patient has previously attempted weight loss.
            </p>
          </div>

          <div className="rounded-lg bg-orange-50 p-4">
            <h3 className="font-semibold text-orange-700">
              General Health
            </h3>

            <p>
              Assess the patient's current health status.
            </p>
          </div>

          <div className="rounded-lg bg-slate-100 p-4">
            <h3 className="font-semibold">
              Clinical Notes
            </h3>

            <p>
              These comments may assist future consultations.
            </p>
          </div>

        </div>

      </Card>

    </div>
  );
}