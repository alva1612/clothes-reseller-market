import { coreApi } from "@/lib/axios.client";
import { AxiosResponse } from "axios";

interface Body {
  email: string;
  password: string;
}

interface Response {
  access_token: string;
}

export const EmailLogin = async (
  data: Body
): Promise<AxiosResponse<Response>> => {
  const res = await coreApi.post<Response>("auth/login", data);
  return res;
};
