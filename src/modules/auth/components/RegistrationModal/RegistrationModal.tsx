"use client";

import { EmailRegistrationForm } from "../EmailRegistrationForm";
import { ModalKey } from "@/modules/modals/state/modal.store";
import { DefaultModal } from "@/modules/modals/components/DefaultModal";

const modalKey: ModalKey = "registration";
export const RegistrationModal = () => {
  return (
    <DefaultModal modalKey={modalKey}>
      <EmailRegistrationForm />
    </DefaultModal>
  );
};
