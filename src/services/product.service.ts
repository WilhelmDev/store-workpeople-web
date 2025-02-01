import { ResponseApi } from "@/interfaces/api";
import { baseApi } from "@/lib/api"
import { Product, ProductPayload } from "@/interfaces/product";

export const createProduct = async (payload: ProductPayload) => {
  try {
    const {image, ...product} = payload;
    const { data } = await baseApi.post<ResponseApi<Product>>("/products/create", {
      ...product,
      images: [image],
    });
    return data.data;
  } catch (error) {
    throw error
  }
}

export const getProducts = async () => {
  try {
    const { data } = await baseApi.get<ResponseApi<Product[]>>("/products/all");
    return data.data;
  } catch (error) {
    throw error;
  }
}