"use client";
import { useModalStore } from "../state/modal.store";
import { RegistrationModal } from "@/modules/auth/components/RegistrationModal";

export const RootModals = () => {
  const modalState = useModalStore();
  return <>{modalState.registration.show && <RegistrationModal />}</>;
};
