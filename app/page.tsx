import Navbar from "./components/layout/Navbar";
import RegistrationForm from "./components/forms/RegistrationForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      <section className="max-w-7xl mx-auto py-10 px-6">
        <RegistrationForm />
      </section>

    </main>
  );
}