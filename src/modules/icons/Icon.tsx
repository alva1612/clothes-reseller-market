import clsx from "clsx";
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import styles from "./icon.module.scss";

type IconType = "wishlist-reg" | "wishlist-full";
const IconLibrary: Record<IconType, ReactNode> = {
  "wishlist-reg": <FaRegHeart />,
  "wishlist-full": <FaHeart />,
} as const;

interface IconProps {
  type: IconType;
  containerProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}

export const Icon: FC<IconProps> = ({ type, containerProps }) => {
  return (
    <>
      <div
        {...containerProps}
        className={clsx(
          styles.icon,
          "flex items-center justify-center",
          containerProps?.className
        )}
      >
        {IconLibrary[type]}
      </div>
    </>
  );
};
