"use client";
import { LoginModal } from "@/modules/auth/components/LoginModal";
import { useModalStore } from "../state/modal.store";
import { RegistrationModal } from "@/modules/auth/components/RegistrationModal";

export const RootModals = () => {
  const modalState = useModalStore();
  return (
    <>
      {modalState.registration.show && <RegistrationModal />}
      <>{modalState.login.show && <LoginModal />}</>
    </>
  );
};
