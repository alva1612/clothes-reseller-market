import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}
interface RegistrationState {
  form: FormData;
}

interface RegistrationActions {
  setFormData: (
    data: Partial<Record<keyof FormData, FormData[keyof FormData]>>
  ) => void;
}

type RegistrationStore = RegistrationState & RegistrationActions;

const registrationStoreAPI: StateCreator<
  RegistrationStore,
  [],
  [["zustand/immer", never]]
> = (set, get) => ({
  form: {
    confirmPassword: "",
    email: "",
    password: "",
  },

  setFormData: (data) => {
    console.log({ data });
    const current = get().form;
    set({ form: { ...current, ...data } });
  },
});

export const useRegistrationStore = create<RegistrationStore>()(
  devtools(immer(registrationStoreAPI))
);
