import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}
interface RegistrationState {
  form: FormData;
}

const registrationStoreAPI: StateCreator<RegistrationState> = (set, get) => ({
  form: {
    confirmPassword: "",
    email: "",
    password: "",
  },
});

export const useRegistrationStore = create<RegistrationState>()(
  devtools(registrationStoreAPI)
);
