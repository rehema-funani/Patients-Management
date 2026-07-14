import api from "./api";
export async function addVitals(data: {
  patient: number;
  visit_date: string;
  height: number;
  weight: number;
  bmi: number;
  systolic: number;
  diastolic: number;
  pulse: number;
  temperature: number;
  respiratory_rate: number;
  spo2: number;
}) {
  const response = await api.post("/vital/create", data);

  return response.data;
}