import api from "./api";

export async function addVital(data:any){

const token=localStorage.getItem("token");

return api.post(
"/vital/add",
data,
{
headers:{
Authorization:`Bearer ${token}`
}
}
);

}