import { PiggyBank } from "lucide-react";
import { FormLogin } from "./components/FormLogin";
import { Button } from "@/components/ui/Button";

export default function Login() {
  return (
    <div className="w-full min-h-screen  grid-cols-1 lg:grid-cols-2 flex justify-center  lg:grid items-center">
      <div className="p-8 lg:p-24 w-full h-full">
        <h2 className="flex items-center gap-2 text-gray-700">
          <PiggyBank />
          Minima Gastos
        </h2>

        <h3 className="text-black text-2xl mt-12">Bem-vindo novamente!</h3>
        <p className="text-sm text-gray-500">Por favor, entre com sua conta.</p>

        <FormLogin />

      </div>

      <div className="p-4 hidden lg:flex h-full w-full">
        <div className="bg-black w-full h-full relative rounded-md space-y-4 p-8">
          <h3 className="text-white text-6xl pulse">Organize seus gastos!</h3>
          <h3 className="text-white text-5xl pulse">Sem distrações</h3>
          <h3 className="text-white text-4xl pulse">Minimalista</h3>
          <h3 className="text-white text-sm pulse absolute bottom-4 right-4 gap-2 flex items-center">
            Desenvolvido por:
            <a
              className="underline text-primary shadow"
              href="https://www.linkedin.com/in/kayoeliasgverdan/"
              target="_blank"
            >
              Kayo Elias
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}
