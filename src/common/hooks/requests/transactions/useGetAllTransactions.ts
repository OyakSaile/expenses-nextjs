import { fetchWrapper } from "@/common/lib/fetchWrapper";
import { ListAllTransactionsDTO } from "@/common/dtos/transactions/listAllTransaction.dto";

export const useGetAllTransactions = async () => {
  const data = await fetchWrapper<ListAllTransactionsDTO[]>(
    "http://localhost:3333/transaction",
    {
      next: {
        revalidate: 60 * 10, // 1 minute
        tags: ["get-transactions"],
      },
    }
  );

  return data;
};
