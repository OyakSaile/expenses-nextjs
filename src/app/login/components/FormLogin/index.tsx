"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  LoginSchema,
  loginSchemaValidation,
} from "../../validations/loginSchema";
import { useSignIn } from "@/common/hooks/requests/sigin/useSign";
import { Label } from "@/components/ui/label";

export const FormLogin = () => {
  const { signIn } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: loginSchemaValidation,
    mode: "onSubmit",
  });

  const handleLogin = async (data: LoginSchema) => {
    try {
      await signIn(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="grid grid-cols-1 gap-8 mt-8"
    >
      <div className="space-y-2">
        <Label htmlFor="email">Seu e-mail</Label>
        <Input
          id="email"
          {...register("email")}
          type="email"
          // error={errors.email?.message}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Sua senha</Label>
        <Input
          id="password"
          {...register("password")}
          type="password"
          // error={errors.password?.message}
        />
      </div>

      <Link href="#">Esqueceu sua senha?</Link>

      <Button size="lg">Entrar</Button>
    </form>
  );
};
