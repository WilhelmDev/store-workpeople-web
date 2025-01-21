import { ResponseApi } from "@/interfaces/api";
import { AuthUser } from "@/interfaces/auth";
import { baseApi } from "@/lib/api"

export const login = async (email: string, password: string) => {
  try {
    const { data } = await baseApi.post<ResponseApi<AuthUser>>("/auth/login", { email, password });
    return data.data
  } catch (error) {
    throw error
  }
}