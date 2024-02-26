import { fetchWrapper } from "@/common/lib/fetchWrapper";
import { CreateTransactionsDTO } from "@/common/dtos/transactions/createTransaction.dto";
import { useCallback } from "react";

export function useCreateTransaction() {
  const createTransaction = useCallback(
    async (props: CreateTransactionsDTO) => {
      await fetchWrapper("http://localhost:3333/transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON?.stringify(props),
        next: {
          revalidate: 60 * 10, // 10 minutes
        },
      });
      return createTransaction;
    },
    []
  );

  return { createTransaction };
}
