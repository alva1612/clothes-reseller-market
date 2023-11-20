"use client";

import { ModalBackdrop } from "@/modules/modals/ModalBackdrop";
import { EmailRegistrationForm } from "../EmailRegistrationForm";

export const RegistrationModal = () => {
  return (
    <ModalBackdrop>
      <EmailRegistrationForm />
    </ModalBackdrop>
  );
};
