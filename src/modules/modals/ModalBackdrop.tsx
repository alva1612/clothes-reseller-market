import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

export const ModalBackdrop: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={clsx(
        "bg-black bg-opacity-50",
        "fixed top-0 bottom-0 left-0 right-0",
        "flex items-center justify-center",
        "p-4",
        "w-screen h-screen",
        "z-30"
      )}
    >
      {children}
    </div>
  );
};
