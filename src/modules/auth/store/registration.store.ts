import { StateCreator } from "zustand";
import { LoginStore } from "./login.store";
import { AuthStore } from "./auth.store";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}
interface RegistrationState {
  form: { emailRegistration: FormData };
}

interface RegistrationActions {
  setEmailRegistrationFormData: (
    data: Partial<Record<keyof FormData, FormData[keyof FormData]>>
  ) => void;
}

export type RegistrationStore = RegistrationState & RegistrationActions;

export const registrationSlice: StateCreator<
  RegistrationStore & LoginStore & AuthStore,
  [["zustand/devtools", never], ["zustand/immer", never]],
  [],
  RegistrationStore
> = (set, get) => ({
  form: {
    emailRegistration: {
      confirmPassword: "",
      email: "",
      password: "",
    },
  },

  setEmailRegistrationFormData: (data) => {
    console.log({ data });
    const current = get().form.emailRegistration;
    set(
      // { form: { emailRegistration:{ ...current, ...data }} },
      (state) => {
        state.form.emailRegistration = { ...current, ...data };
      },
      false,
      `setEmailRegistrationFormData - ${Object.keys(data).join(", ")}`
    );
  },
});

// export const useRegistrationStore = create<RegistrationStore>()(
//   devtools(immer(registrationStoreAPI))
// );
