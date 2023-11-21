import { coreApi } from "@/lib/axios.client";
import { TextInput } from "@/modules/forms/components/TextInput";
import { Button, Title } from "@/modules/ui/components";
import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useRegistrationStore } from "../../store";

export const EmailRegistrationForm = () => {
  const form = useForm();

  const formData = useRegistrationStore((state) => state.form);
  const setFormData = useRegistrationStore((state) => state.setFormData);

  const registerMutation = useMutation({
    mutationFn: async () => {
      console.log(formData);
      coreApi.post("auth/register", formData);
    },
    mutationKey: ["register"],
  });

  const onSubmit = useCallback(() => {
    registerMutation.mutate();
  }, [registerMutation]);

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
        <form
          className="flex flex-col gap-3"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormProvider {...form}>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-bold">
                Correo
              </label>
              <TextInput
                fieldKey="email"
                placeholder="Ingrese su correo"
                onChange={(e) => setFormData({ email: e.currentTarget.value })}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="font-bold">
                Contraseña
              </label>
              <div className="flex flex-col gap-2">
                <TextInput
                  fieldKey="password"
                  placeholder="Ingrese su contraseña"
                  onChange={(e) =>
                    setFormData({ password: e.currentTarget.value })
                  }
                />
                <TextInput
                  fieldKey="confirmPassword"
                  placeholder="Confirme su contraseña"
                  onChange={(e) =>
                    setFormData({ confirmPassword: e.currentTarget.value })
                  }
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
