import api from "./api";

export async function registerPatient(data: {
  unique: string;
  reg_date: string;
  firstname: string;
  lastname: string;
  dob: string;
  gender: string;
}) {
  const token = localStorage.getItem("token");

  const response = await api.post(
    "/patients/register",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

export async function getPatients() {
  const token = localStorage.getItem("token");

  const response = await api.get("/patients/view", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getPatient(id: number) {
  const token = localStorage.getItem("token");

  const response = await api.get(`/patients/show/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
export async function addVitals(data: {
  visit_date: string;
  height: number;
  weight: number;
  bmi: number;
  patient_id: number;
}) {
  const token = localStorage.getItem("token");

  const response = await api.post(
    "/vital/add",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}
export async function addVisit(data: {
  general_health: string;
  on_diet: string;
  on_drugs: string;
  comments: string;
  visit_date: string;
  patient_id: number;
  vital_id: number;
}) {
  const token = localStorage.getItem("token");

  const response = await api.post(
    "/visits/add",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}
