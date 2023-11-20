import clsx from "clsx";
import { FC } from "react";

interface ButtonProps {
  className?: string;
  label: string;
}

export const Button: FC<ButtonProps> = ({ className, label }) => {
  return (
    <button
      className={clsx(
        "text-white font-bold",
        "p-2 mt-1",
        "border-solid border border-gray-500 bg-black",
        "rounded-md",
        className
      )}
    >
      {label}
    </button>
  );
};
