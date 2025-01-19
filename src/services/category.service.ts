import { ResponseApi } from "@/interfaces/api";
import { Category, CategoryPayload } from "@/interfaces/category";
import { baseApi } from "@/lib/api"

export const getCategories = async () => {
  try {
    const { data } = await baseApi.get<ResponseApi<Category[]>>("/categories");
    return data.data;
  } catch (error) {
    throw error
  }
}

export const createCategory = async (payload: CategoryPayload) => {
  try {
    const { data } = await baseApi.post<ResponseApi<Category>>("/categories/create", payload);
    return data.data;
  } catch (error) {
    throw error
  }
}