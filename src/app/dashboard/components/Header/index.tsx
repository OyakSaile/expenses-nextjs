import { Button } from "@/common/components/ui/Button";

export const Header = () => {
  return (
    <header className="container mx-auto flex justify-between md:items-center gap-8 md:gap-0 flex-col md:flex-row">
      <div>
        <h1 className="text-2xl">MinimaGastos</h1>
      </div>

      <div>
        <Button variation="secondary" size="md">
          Nova transação
        </Button>
      </div>
    </header>
  );
};
