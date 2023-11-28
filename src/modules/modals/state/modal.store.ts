import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type ModalKey = "registration" | "login";

type ModalState = {
  [K in ModalKey]: { show: boolean };
};

interface ModalActions {
  toggleModal: (modalKey: ModalKey) => void;
}

type ModalStore = ModalActions & ModalState;

const modalStoreAPI: StateCreator<ModalStore> = (set, get) => ({
  registration: {
    show: false,
  },
  login: {
    show: false,
  },
  toggleModal: (key) => {
    const currentModal = get()[key];
    currentModal.show = !currentModal.show;
    set({ [key]: currentModal });
  },
});

export const useModalStore = create<ModalStore>()(
  devtools(immer(modalStoreAPI))
);
