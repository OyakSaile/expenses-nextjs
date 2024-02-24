import { ArrowDownCircleIcon, ArrowUpCircleIcon } from "lucide-react";
import { CardSummary } from "../CardSummary";

export const Summary = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 items-center mt-8">
      <CardSummary.Root>
        <CardSummary.Header title="Entradas">
          <ArrowUpCircleIcon className="text-green-300" />
        </CardSummary.Header>

        <p className="text-2xl font-bold mt-2">R$ 1.000</p>
      </CardSummary.Root>

      <CardSummary.Root>
        <CardSummary.Header title="Saídas">
          <ArrowDownCircleIcon className="text-red-300" />
        </CardSummary.Header>

        <p className="text-2xl font-bold mt-2">- R$ 500</p>
      </CardSummary.Root>

      <CardSummary.Root>
        <CardSummary.Header title="Total" />

        <p className="text-2xl font-bold mt-2">R$ 500</p>
      </CardSummary.Root>
    </div>
  );
};
