import api from "./api";

export async function login(email: string, password: string) {
    const response = await api.post("/user/signin", {
        email,
        password,
    });

    const token = response.data.data.access_token;

    localStorage.setItem("token", token);

    return response.data;
}