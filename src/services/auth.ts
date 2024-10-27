import {LoginRequest, LoginResponse} from "@/types/auth";
import axios from "axios";

export const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
    const {data} = await axios.post<LoginResponse>('/login', credentials);

    return data;
}