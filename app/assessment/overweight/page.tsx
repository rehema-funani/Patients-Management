import { Suspense } from "react";

import Navbar from "../../components/layout/Navbar";
import Stepper from "../../components/layout/Stepper";
import OverweightAssessmentForm from "../../components/forms/OverweightAssessmentForm";

export default function OverweightPage() {
  return (
    <main className="min-h-screen bg-[#F6F8F8]">
      <Navbar />

      <section className="max-w-7xl mx-auto py-10 px-6">
        <Stepper current={3} />
        <Suspense fallback={<div className="text-center py-12 text-[#5C7079]">Loading...</div>}>
          <OverweightAssessmentForm />
        </Suspense>
      </section>
    </main>
  );
}