import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface FormData {
  email: string;
  password: string;
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

const loginStoreAPI: StateCreator<
  RegistrationStore,
  [["zustand/devtools", never], ["zustand/immer", never]],
  []
> = (set, get) => ({
  form: {
    email: "",
    password: "",
  },

  setFormData: (data) => {
    console.log({ data });
    const current = get().form;
    set(
      { form: { ...current, ...data } },
      false,
      `setFormData - ${Object.keys(data).join(", ")}`
    );
  },
});

export const useLoginStore = create<RegistrationStore>()(
  devtools(immer(loginStoreAPI))
);
