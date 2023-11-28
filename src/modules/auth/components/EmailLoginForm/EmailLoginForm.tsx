import { Button, Title } from "@/modules/ui/components";
import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import { FormProvider, useForm } from "react-hook-form";
import { EmailLogin } from "../../services";
import { useCallback } from "react";
import { TextInput } from "@/modules/forms/components/TextInput";
import { useLoginStore } from "../../store/login.store";

export const EmailLoginForm = () => {
  const form = useForm();

  const formData = useLoginStore((state) => state.form);
  const setFormData = useLoginStore((state) => state.setFormData);

  const loginMutation = useMutation({
    mutationFn: () => EmailLogin(formData),
    mutationKey: ["register"],
  });

  const onSubmit = useCallback(() => {
    loginMutation.mutate();
  }, [loginMutation]);
  return (
    <div
      className={clsx(
        "w-full h-fit",
        "bg-white border border-solid border-gray-200",
        "p-8 pt-6 pb-10 rounded-md"
      )}
    >
      <Title text="Inicia sesión" />
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
            </div>
          </div>
          <Button label="Iniciar sesión" />
        </FormProvider>
      </form>
    </div>
  );
};