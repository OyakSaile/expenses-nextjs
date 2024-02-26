"use client";
import { createTransactionSchemaValidation } from "@/app/dashboard/validations/createTransactionSchema";
import { Button } from "@/common/components/ui/Button";
import { Input } from "@/common/components/ui/Input";
import { Modal, ModalProps } from "@/common/components/ui/Modal";
import { CreateTransactionsDTO } from "@/common/dtos/transactions/createTransaction.dto";
import { TransactionTypeEnum } from "@/common/enums/transactions/transactionTypeEnum";
import { useCreateTransaction } from "@/common/hooks/requests/transactions/useCreateTransaction";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";

interface CreateTransactionModalProps extends ModalProps {}

export const CreateTransactionModal = ({
  ...rest
}: CreateTransactionModalProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CreateTransactionsDTO>({
    resolver: createTransactionSchemaValidation,
  });

  const { createTransaction } = useCreateTransaction();

  const handleCreateTransaction = async (data: CreateTransactionsDTO) => {
    rest?.onClose();

    createTransaction({
      ...data,
      amount: Number(data.amount),
    });
  };

  const selectedType = watch("type");

  return (
    <Modal {...rest}>
      <form
        onSubmit={handleSubmit(handleCreateTransaction)}
        className="bg-white min-h-[500px] w-[500px] rounded-md flex flex-col p-8 justify-between max-h-[90vh] overflow-y-auto"
      >
        <div>
          <h1 className="text-center text-2xl">Criar nova transação</h1>
          <h2 className="text-center text-xl"></h2>
        </div>
        <form className="grid grid-cols-1 gap-4">
          <Input
            {...register("title")}
            error={errors?.title?.message}
            label="Título"
            placeholder="Digite um título para a transação"
          />
          <Input
            error={errors?.category?.message}
            {...register("category")}
            label="Categoria"
            placeholder="Digite o nome da categoria"
          />
          <Input
            error={errors?.category?.message}
            {...register("amount")}
            label="Valor"
            placeholder="Digite o valor da transação"
          />
          <Input
            error={errors?.description?.message}
            {...register("description")}
            label="Descrição"
            placeholder="Digite o nome da transação"
          />
          <div className="flex my-4 gap-8">
            <Button
              {...register("type")}
              type="button"
              variation={
                selectedType === TransactionTypeEnum.INCOME
                  ? "primary"
                  : "tertiary"
              }
              className="flex gap-4 items-center justify-center"
              onClick={() => setValue("type", TransactionTypeEnum.INCOME)}
            >
              Entrada <ArrowUpCircleIcon className="text-green-300" />
            </Button>
            <Button
              variation={
                selectedType === TransactionTypeEnum.EXPENSE
                  ? "primary"
                  : "tertiary"
              }
              type="button"
              className="flex gap-4 items-center justify-center"
              onClick={() => setValue("type", TransactionTypeEnum.EXPENSE)}
            >
              Saída <ArrowDownCircleIcon className="text-red-300" />
            </Button>
          </div>
        </form>

        <Button type="submit">Criar Transação</Button>
      </form>
    </Modal>
  );
};
