import { ModalKey } from "@/modules/modals/state/modal.store";
import { EmailLoginForm } from "../EmailLoginForm";
import { DefaultModal } from "@/modules/modals/components/DefaultModal";

const modalKey: ModalKey = "login";
export const LoginModal = () => {
  return (
    <DefaultModal modalKey={modalKey}>
      <EmailLoginForm />
    </DefaultModal>
  );
};
