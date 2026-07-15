import { FaIdCard, FaHeartbeat, FaClipboardCheck, FaUserCheck } from "react-icons/fa";

export default function WelcomeCard() {
  return (
    <div className="bg-white rounded-xl border border-[#DCE4E4] p-8 flex flex-col justify-center">

      <div className="flex justify-center">
        <svg width="220" height="90" viewBox="0 0 220 90" fill="none">
          <circle cx="110" cy="45" r="44" fill="#1B4B91" fillOpacity="0.06" />
          <path
            d="M10 45 H70 L82 20 L96 68 L108 32 L118 45 H210"
            stroke="#1B4B91"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="118" cy="45" r="4" fill="#1B4B91" />
        </svg>
      </div>

      <h2
        className="text-3xl font-semibold text-center text-[#14232B] mt-6"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Welcome to MediCare
      </h2>

      <p className="text-[#5C7079] text-center mt-3 leading-7">
        Register patients, capture their vital signs,
        and perform health assessments with ease.
      </p>

      <div className="mt-10 space-y-3">
        <Feature icon={<FaIdCard />} text="Unique Patient ID" />
        <Feature icon={<FaHeartbeat />} text="Track Vitals & BMI" />
        <Feature icon={<FaClipboardCheck />} text="Health Assessments" />
        <Feature icon={<FaUserCheck />} text="Monitor Patient Status" />
      </div>

    </div>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-[#DCE4E4] px-4 py-3 hover:border-[#1B4B91]/40 transition-colors">
      <div className="w-9 h-9 shrink-0 rounded-full bg-[#1B4B91]/10 text-[#1B4B91] flex items-center justify-center text-sm">
        {icon}
      </div>
      <span className="font-medium text-[#14232B] text-sm">
        {text}
      </span>
    </div>
  );
}