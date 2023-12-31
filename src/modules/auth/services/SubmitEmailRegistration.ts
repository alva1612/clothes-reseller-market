import { coreApi } from "@/lib/axios.client";

interface Body {
  email: string;
  password: string;
  confirmPassword: string;
}

export const SubmitEmailRegistration = async (data: Body) => {
  const res = await coreApi.post("auth/register", data);
  return res;
};
