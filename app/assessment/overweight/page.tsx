import Navbar from "../../components/layout/Navbar";
import Stepper from "../../components/layout/Stepper";
import OverweightAssessmentForm from "../../components/forms/OverweightAssessmentForm";

export default function OverweightPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="max-w-7xl mx-auto py-10 px-6">
        <Stepper current={3} />
        <OverweightAssessmentForm />
      </section>
    </main>
  );
}