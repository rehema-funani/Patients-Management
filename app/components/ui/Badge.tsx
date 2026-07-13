interface Props {
  status: "Normal" | "Underweight" | "Overweight";
}

export default function Badge({ status }: Props) {
  const colors = {
    Normal: "bg-green-100 text-green-700",
    Underweight: "bg-blue-100 text-blue-700",
    Overweight: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[status]}`}
    >
      {status}
    </span>
  );
}