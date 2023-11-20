import { TextInput } from "@/modules/forms/components/TextInput";
import { Button, Title } from "@/modules/ui/components";
import clsx from "clsx";
import { FormProvider, useForm } from "react-hook-form";

export const EmailRegistrationForm = () => {
  const form = useForm();

  return (
    <>
      <div
        className={clsx(
          "w-full h-fit",
          "bg-white border border-solid border-gray-200",
          "p-8 pt-6 pb-10 rounded-md"
        )}
      >
        <Title text="Crea tu cuenta" />
        <form className="flex flex-col gap-3">
          <FormProvider {...form}>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-bold">
                Correo
              </label>
              <TextInput fieldKey="email" placeholder="Ingrese su correo" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="font-bold">
                Contraseña
              </label>
              <div className="flex flex-col gap-2">
                <TextInput
                  fieldKey="password"
                  placeholder="Ingrese su contraseña"
                />
                <TextInput
                  fieldKey="confirmPassword"
                  placeholder="Confirme su contraseña"
                />
              </div>
            </div>
            <Button label="Registrar" />
          </FormProvider>
        </form>
        <p className={clsx("mt-4", "text-xs text-center")}>
          Al crear una cuenta acepto los{" "}
          <a className="font-bold">términos y condiciones</a>
        </p>
      </div>
    </>
  );
};
