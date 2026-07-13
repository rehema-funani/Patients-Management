import {
  FaIdCard,
  FaHeartbeat,
  FaClipboardCheck,
  FaUserCheck,
} from "react-icons/fa";

import Image from "next/image";

export default function WelcomeCard() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border shadow-sm p-8 flex flex-col justify-center">

      <div className="flex justify-center">
        <Image
          src="/doctor.svg"
          width={250}
          height={250}
          alt="Doctor"
        />
      </div>

      <h2 className="text-3xl font-bold text-center text-slate-800 mt-6">
        Welcome to MediCare
      </h2>

      <p className="text-slate-500 text-center mt-3 leading-7">
        Register patients, capture their vital signs,
        and perform health assessments with ease.
      </p>

      <div className="space-y-5 mt-10">

        <Feature
          icon={<FaIdCard />}
          text="Unique Patient ID"
        />

        <Feature
          icon={<FaHeartbeat />}
          text="Track Vitals & BMI"
        />

        <Feature
          icon={<FaClipboardCheck />}
          text="Health Assessments"
        />

        <Feature
          icon={<FaUserCheck />}
          text="Monitor Patient Status"
        />

      </div>

    </div>
  );
}

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
        {icon}
      </div>

      <span className="font-medium text-slate-700">
        {text}
      </span>
    </div>
  );
}