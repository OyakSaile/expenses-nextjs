"use client";
import { Button } from "@/common/components/ui/Button";
import { Input } from "@/common/components/ui/Input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  LoginSchema,
  loginSchemaValidation,
} from "../../validations/loginSchema";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: loginSchemaValidation,
    mode: "onSubmit",
  });

  const handleLogin = (data: LoginSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="grid grid-cols-1 gap-8 mt-8"
    >
      <Input
        {...register("email")}
        label="E-mail"
        type="email"
        error={errors.email?.message}
      />

      <Input
        {...register("password")}
        label="Senha"
        type="password"
        error={errors.password?.message}
      />

      <Link href="#">Esqueceu sua senha?</Link>
      <Button>Entrar</Button>
    </form>
  );
};
