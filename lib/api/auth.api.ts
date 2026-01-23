import api from "@/lib/axios";

interface IAdminLoginArgs {
    email: string;
    password: string;
}
async function adminLogin(payload: IAdminLoginArgs) {
    const { data } = await api.post("/api/v1/auth/login", payload);
    return data;
}

export interface IUser {
    id: string;
    email: string;
    name: string;
    role?: string;
}
async function getMe(): Promise<IUser> {
    const { data } = await api.get("/api/v1/auth/me");
    return data;
}


export {
    adminLogin,
    getMe,
}