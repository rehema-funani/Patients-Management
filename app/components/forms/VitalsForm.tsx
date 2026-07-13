"use client";

import { useMemo, useState } from "react";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function VitalsForm() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const bmi = useMemo(() => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w) return "";

    return (w / Math.pow(h / 100, 2)).toFixed(2);
  }, [height, weight]);

  const bmiStatus = useMemo(() => {
    if (!bmi) return "";

    const value = parseFloat(bmi);

    if (value < 18.5) return "Underweight";
    if (value < 25) return "Normal";

    return "Overweight";
  }, [bmi]);

  return (
    <div className="grid lg:grid-cols-2 gap-8">

      {/* Form */}

      <Card>

        <h2 className="text-2xl font-bold">
          Patient Vitals
        </h2>

        <p className="text-slate-500 mt-2 mb-8">
          Record patient vital measurements.
        </p>

        <form className="space-y-5">

          <Input
            label="Visit Date"
            type="date"
          />

          <Input
            label="Height (CM)"
            type="number"
            placeholder="170"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <Input
            label="Weight (KG)"
            type="number"
            placeholder="65"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <Input
            label="BMI"
            value={bmi}
            readOnly
          />

          <Button>
            Save & Continue →
          </Button>

        </form>

      </Card>

      {/* BMI Information */}

      <Card>

        <h2 className="text-2xl font-bold mb-6">
          BMI Information
        </h2>

        <div className="space-y-5">

          <div className="rounded-lg bg-blue-50 p-4">
            <h3 className="font-semibold text-blue-700">
              Underweight
            </h3>

            <p>BMI less than 18.5</p>
          </div>

          <div className="rounded-lg bg-green-50 p-4">
            <h3 className="font-semibold text-green-700">
              Normal
            </h3>

            <p>BMI between 18.5 and 24.9</p>
          </div>

          <div className="rounded-lg bg-red-50 p-4">
            <h3 className="font-semibold text-red-700">
              Overweight
            </h3>

            <p>BMI greater than or equal to 25</p>
          </div>

          {bmi && (
            <div className="mt-8 rounded-lg bg-slate-100 p-5">

              <h3 className="font-bold text-lg">
                Current BMI
              </h3>

              <p className="text-3xl font-bold text-blue-600 mt-2">
                {bmi}
              </p>

              <p className="mt-2 text-slate-600">
                Status: <strong>{bmiStatus}</strong>
              </p>

            </div>
          )}

        </div>

      </Card>

    </div>
  );
}