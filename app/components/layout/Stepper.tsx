interface Props {
  current: number;
}

const steps = ["Register", "Vitals", "Assessment", "Review", "Patients"];

export default function Stepper({ current }: Props) {
  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-6">
      <div className="relative flex items-center justify-between">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#DCE4E4]" />
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#1B4B91] transition-all duration-500"
          style={{ width: `${(Math.max(current - 1, 0) / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step, index) => {
          const stepNum = index + 1;
          const done = stepNum < current;
          const active = stepNum === current;

          return (
            <div key={step} className="relative z-10 flex flex-col items-center gap-2">
              <div
                className={`relative w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold border-2 transition-all ${
                  done
                    ? "bg-[#1B4B91] border-[#1B4B91] text-white"
                    : active
                    ? "bg-white border-[#1B4B91] text-[#1B4B91]"
                    : "bg-white border-[#DCE4E4] text-[#9CAAAA]"
                }`}
              >
                {done ? "✓" : stepNum}
                {active && (
                  <span className="absolute inset-0 rounded-full bg-[#1B4B91]/30 animate-ping" />
                )}
              </div>

              <span
                className={`text-[10px] font-semibold uppercase tracking-[0.08em] ${
                  active ? "text-[#1B4B91]" : done ? "text-[#14232B]" : "text-[#9CAAAA]"
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}