import { Button } from "@/common/components/ui/Button";
import { Input } from "@/common/components/ui/Input";
import Link from "next/link";

export const FormLogin = () => {
  return (
    <form action="" className="grid grid-cols-1 gap-8 mt-8">
      <Input label="E-mail" type="email" />
      <Input label="Senha" type="password" />
      <div className="">
        <Link href="#">Esqueceu sua senha?</Link>
      </div>
      <Button>Entrar</Button>
    </form>
  );
};
