import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { LoginStore, loginSlice } from "./login.store";
import { RegistrationStore, registrationSlice } from "./registration.store";
import { EmailLogin } from "../services";

interface AuthState {
  accessToken: string;
}

interface AuthActions {
  setAccessToken: (token: string) => void;
  login: () => Promise<void>;
  register: () => Promise<void>;
}

export type AuthStore = AuthState & AuthActions;

const authSlice: StateCreator<
  LoginStore & RegistrationStore & AuthStore,
  [["zustand/devtools", never], ["zustand/immer", never]],
  [],
  AuthStore
> = (set, get) => ({
  accessToken: "",
  setAccessToken: (accessToken: string) => {
    set({ accessToken });
  },
  login: async () => {
    const formData = get().form.emailLogin;
    const resLogin = await EmailLogin(formData);
    if (resLogin.status !== 200) {
      console.log("erorr");
      return;
    }
    set({ accessToken: resLogin.data.access_token });
  },
  register: async () => {},
});

export const useAuthStore = create<
  AuthStore & LoginStore & RegistrationStore
>()(
  devtools(
    immer((...a) => ({
      ...authSlice(...a),
      ...loginSlice(...a),
      ...registrationSlice(...a),
      form: {
        emailLogin: loginSlice(...a).form.emailLogin,
        emailRegistration: registrationSlice(...a).form.emailRegistration,
      },
    }))
  )
);
