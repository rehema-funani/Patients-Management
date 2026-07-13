import api from "./api";

export async function addVisit(data: any) {
  const token = localStorage.getItem("token");

  return api.post("/visits/add", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getVisits(date: string) {
  const token = localStorage.getItem("token");

  return api.post(
    "/visits/view",
    {
      visit_date: date,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}