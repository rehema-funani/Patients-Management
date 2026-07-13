import axios from "axios";

const api = axios.create({
    baseURL: "https://patientvisitapis.intellisoftkenya.com/api",
    headers: {
        Accept: "application/json",
    },
});

export default api;