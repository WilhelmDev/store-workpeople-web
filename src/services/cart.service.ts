import { ResponseApi } from "@/interfaces/api";
import { Cart } from "@/interfaces/cart";
import { baseApi } from "@/lib/api"

export const getCartUser = async () => {
  try {
    const { data } = await baseApi.get<ResponseApi<Cart>>("/cart");
    return data.data;
  } catch (error) {
    throw error
  }
}

export const addToCart = async (productId: number, quantity: number) => {
  try {
    const { data } = await baseApi.post<ResponseApi<Cart>>("/cart/add", { productId, quantity });
    return data.data;
  } catch (error) {
    throw error
  }
}