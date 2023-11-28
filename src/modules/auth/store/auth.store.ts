import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface RegistrationState {
  accessToken: string;
}

interface RegistrationActions {
  setAccessToken: (token: string) => void;
}

type RegistrationStore = RegistrationState & RegistrationActions;

const authStoreAPI: StateCreator<
  RegistrationStore,
  [["zustand/devtools", never], ["zustand/immer", never]],
  []
> = (set, get) => ({
  accessToken: "",

  setAccessToken: (accessToken: string) => {
    set({ accessToken });
  },
});

export const useAuthStore = create<RegistrationStore>()(
  devtools(immer(authStoreAPI))
);
