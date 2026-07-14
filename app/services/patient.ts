import api from "./api";

/* ===========================
   PATIENTS
=========================== */

export async function registerPatient(data: {
  unique: string;
  reg_date: string;
  firstname: string;
  lastname: string;
  dob: string;
  gender: string;
}) {
  const response = await api.post("/patients/create", data);

  return response.data;
}

export async function getPatients() {
  const response = await api.get("/patients/view");

  return response.data;
}

export async function getPatient(id: number) {
  const response = await api.get(`/patients/show/${id}`);

  return response.data;
}

export async function updatePatient(
  id: number,
  data: {
    unique: string;
    reg_date: string;
    firstname: string;
    lastname: string;
    dob: string;
    gender: string;
  }
) {
  const response = await api.put(`/patients/update/${id}`, data);

  return response.data;
}

export async function deletePatient(id: number) {
  const response = await api.delete(`/patients/delete/${id}`);

  return response.data;
}

/* ===========================
   VITALS
=========================== */

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

/* ===========================
   VISITS
=========================== */

export async function addVisit(data: {
  patient: number;
  vital: number;
  visit_date: string;
  general_health: string;
  on_diet: string;
  on_drugs: string;
  comments: string;
}) {
  const response = await api.post("/visits/create", data);

  return response.data;
}