"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import Card from "../ui/Card";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import WelcomeCard from "../WelcomeCard";

import { registerPatient } from "@/app/services/patient";

export default function RegistrationForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    unique: "",
    reg_date: "",
    firstname: "",
    lastname: "",
    dob: "",
    gender: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log("Submitting:", form);

    try {
      setLoading(true);

      const response = await registerPatient(form);

      console.log("API Success:", response);

      alert("Patient registered successfully!");

      router.push("/patients");
    } catch (error) {
      console.error("API Error:", error);

      if (axios.isAxiosError(error)) {
        console.log("Status:", error.response?.status);
        console.log("Data:", error.response?.data);

        alert(
          JSON.stringify(error.response?.data ?? "Unknown server error")
        );
      } else {
        alert("Failed to register patient.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">

      <Card>

        <h2 className="text-2xl font-bold text-slate-800">
          Patient Registration
        </h2>

        <p className="text-slate-500 mt-2 mb-8">
          Register a new patient to get started
        </p>

        <form
          className="space-y-5"
          onSubmit={handleSubmit}
        >

          <Input
            label="Patient ID"
            name="unique"
            value={form.unique}
            onChange={handleChange}
            placeholder="Enter unique patient ID"
            required
          />

          <Input
            label="Registration Date"
            type="date"
            name="reg_date"
            value={form.reg_date}
            onChange={handleChange}
            required
          />

          <div className="grid md:grid-cols-2 gap-4">

            <Input
              label="First Name"
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
              placeholder="Enter first name"
              required
            />

            <Input
              label="Last Name"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
              placeholder="Enter last name"
              required
            />

          </div>

          <div className="grid md:grid-cols-2 gap-4">

            <Input
              label="Date of Birth"
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
            />

            <Select
              label="Gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
              options={[
                "Male",
                "Female",
              ]}
            />

          </div>

          <Button
            type="submit"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save & Continue →"}
          </Button>

        </form>

      </Card>

      <WelcomeCard />

    </div>
  );
}