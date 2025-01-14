import { ResponseApi } from "@/interfaces/api";
import { AuthUser } from "@/interfaces/auth";
import { baseApi } from "@/lib/api"
import axios from "axios";

export const login = async (email: string, password: string) => {
  try {
    const { data } = await baseApi.post<ResponseApi<AuthUser>>("/auth/login", { email, password });
    return data.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error response:', error.response);
      console.error('Error request:', error.request);
      console.error('Error config:', error.config);
    } else {
      console.error('Unexpected error:', error);
    }
    console.log(error)
    throw error
  }
}