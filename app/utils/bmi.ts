export function calculateBMI(
  weight: number,
  height: number
) {
  if (!weight || !height) return 0;

  const heightMeters = height / 100;

  return Number(
    (
      weight /
      (heightMeters * heightMeters)
    ).toFixed(1)
  );
}

export function bmiStatus(bmi: number) {
  if (bmi < 18.5) return "Underweight";

  if (bmi < 25) return "Normal";

  return "Overweight";
}