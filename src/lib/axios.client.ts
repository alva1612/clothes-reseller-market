import { useAuthStore } from "@/modules/auth/store/auth.store";
import axios from "axios";

export const coreApi = axios.create({
  baseURL: "http://localhost:3000/api/",
});

coreApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token.length > 0) config.headers.setAuthorization(`Bearer ${token}`);
  return config;
});
