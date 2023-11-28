"use client";

import { FC, PropsWithChildren, useCallback } from "react";
import { ModalKey, useModalStore } from "@/modules/modals/state/modal.store";
import { ModalBackdrop } from "@/modules/modals/components/ModalBackdrop";

interface DefaultModalProps {
  modalKey: ModalKey;
}
export const DefaultModal: FC<PropsWithChildren<DefaultModalProps>> = ({
  children,
  modalKey,
}) => {
  const toggleModal = useModalStore((state) => state.toggleModal);

  const handleBackdropClick = useCallback(() => {
    toggleModal(modalKey);
  }, [toggleModal, modalKey]);

  return (
    <ModalBackdrop onBackdropClick={handleBackdropClick}>
      {children}
    </ModalBackdrop>
  );
};
