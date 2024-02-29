"use client";
import { Button } from "@/components/ui/Button";
import { CreateTransactionModal } from "../Modals/CreateTransaction";
import { useState } from "react";

export const Header = () => {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  const handleToggleTransactionModal = () => {
    setIsTransactionModalOpen((prev) => !prev);
  };
  return (
    <>
      <header className="container mx-auto flex justify-between md:items-center gap-8 md:gap-0 flex-col md:flex-row">
        <div>
          <h1 className="text-2xl">MinimaGastos</h1>
        </div>

        <div>
          <Button
            onClick={handleToggleTransactionModal}
            variation="secondary"
            size="md"
            type="button"
          >
            Nova transação
          </Button>
        </div>
      </header>

      <CreateTransactionModal
        onClose={() => setIsTransactionModalOpen(true)}
        open={isTransactionModalOpen}
      />
    </>
  );
};
