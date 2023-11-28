import { coreApi } from "@/lib/axios.client";

interface Body {
  email: string;
  password: string;
}

export const EmailLogin = async (data: Body) => {
  const res = await coreApi.post("auth/login", data);
  return res;
};
