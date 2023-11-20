"use client";

import { ModalBackdrop } from "@/modules/modals/ModalBackdrop";
import { EmailRegistrationForm } from "../EmailRegistrationForm";
import { ModalKey, useModalStore } from "@/modules/modals/state/modal.store";
import { useCallback } from "react";

const modalKey: ModalKey = "registration";
export const RegistrationModal = () => {
  const toggleModal = useModalStore((state) => state.toggleModal);

  const handleBackdropClick = useCallback(() => {
    toggleModal(modalKey);
  }, [toggleModal]);
  return (
    <ModalBackdrop onBackdropClick={handleBackdropClick}>
      <EmailRegistrationForm />
    </ModalBackdrop>
  );
};
