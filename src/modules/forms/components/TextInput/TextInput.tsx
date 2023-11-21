import clsx from "clsx";
import {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  useCallback,
} from "react";
import { useFormContext } from "react-hook-form";

interface TextInputProps {
  className?: string;
  fieldKey: string;
}

export const TextInput: FC<
  TextInputProps &
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ className, fieldKey, onChange, ...rest }) => {
  const { register } = useFormContext();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e);
    },
    [onChange]
  );

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
        onChange={handleChange}
      />
    </>
  );
};
