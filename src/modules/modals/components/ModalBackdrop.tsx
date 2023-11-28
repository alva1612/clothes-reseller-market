import clsx from "clsx";
import { FC, MouseEvent, PropsWithChildren, useCallback } from "react";

interface ModalBackdropProps {
  onBackdropClick?: () => void;
}

export const ModalBackdrop: FC<PropsWithChildren<ModalBackdropProps>> = ({
  children,
  onBackdropClick,
}) => {
  const handleBackdropClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      onBackdropClick && onBackdropClick();
    },
    [onBackdropClick]
  );
  const handleContentClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

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
      onClick={handleBackdropClick}
    >
      <div className={clsx("w-full")} onClick={handleContentClick}>
        {children}
      </div>
    </div>
  );
};
