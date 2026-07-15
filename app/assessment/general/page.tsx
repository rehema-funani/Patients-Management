import Navbar from "../../components/layout/Navbar";
import Stepper from "../../components/layout/Stepper";
import GeneralAssessmentForm from "../../components/forms/GeneralAssessmentForm";

export default function GeneralAssessmentPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="max-w-7xl mx-auto py-10 px-6">
        <Stepper current={3} />
        <GeneralAssessmentForm />
      </section>
    </main>
  );
}