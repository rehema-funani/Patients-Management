interface Props {
  current: number;
}

const steps = [
  "Register",
  "Vitals",
  "Assessment",
  "Review",
  "Patients",
];

export default function Stepper({ current }: Props) {
  return (
    <div className="flex justify-center items-center py-8 gap-4">

      {steps.map((step, index) => {

        const active = index + 1 <= current;

        return (
          <div
            key={step}
            className="flex items-center"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                active
                  ? "bg-blue-600"
                  : "bg-slate-300"
              }`}
            >
              {index + 1}
            </div>

            <span className="ml-2 mr-4 text-sm">
              {step}
            </span>

            {index !== steps.length - 1 && (
              <div className="w-10 h-[2px] bg-slate-300" />
            )}
          </div>
        );
      })}
    </div>
  );
}