import clsx from "clsx";
import { FC } from "react";

interface TitleProps {
  className?: string;
  text: string;
}

export const Title: FC<TitleProps> = ({ text, className }) => {
  return (
    <h1 className={clsx("text-xl font-bold", "my-2", className)}>{text}</h1>
  );
};
