import clsx from "clsx";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface TextInputProps {
  className?: string;
  fieldKey: string;
}

export const TextInput: FC<
  TextInputProps &
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ className, fieldKey, ...rest }) => {
  const { register } = useFormContext();
  return (
    <>
      <input
        className={clsx(
          "p-4 text-sm bg-white text-black border-solid border border-stone-300 rounded-md",
          "focus:outline-black",
          className
        )}
        {...rest}
        {...register(fieldKey)}
      />
    </>
  );
};
