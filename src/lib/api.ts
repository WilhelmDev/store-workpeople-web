import { getUserToken } from "@/services/localstorage.service";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const baseApi = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

// Interceptor para añadir el token a cada solicitud
baseApi.interceptors.request.use((config) => {
  const token = getUserToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

