import { StateCreator } from "zustand";
import { RegistrationStore } from ".";
import { AuthStore } from "./auth.store";

interface FormData {
  email: string;
  password: string;
}
interface LoginState {
  form: { emailLogin: FormData };
}

interface LoginActions {
  setEmailLoginFormData: (
    data: Partial<Record<keyof FormData, FormData[keyof FormData]>>
  ) => void;
}

export type LoginStore = LoginState & LoginActions;

export const loginSlice: StateCreator<
  LoginStore & RegistrationStore & AuthStore,
  [["zustand/devtools", never], ["zustand/immer", never]],
  [],
  LoginStore
> = (set, get) => ({
  form: {
    emailLogin: {
      email: "",
      password: "",
    },
  },
  setEmailLoginFormData: (data) => {
    const current = get().form.emailLogin;
    set(
      (state) => {
        state.form.emailLogin = { ...current, ...data };
      },
      false,
      `setEmailLoginFormData - ${Object.keys(data).join(", ")}`
    );
  },
});

// export const useLoginStore = create<LoginStore>()(
//   devtools(immer(loginStoreAPI))
// );
