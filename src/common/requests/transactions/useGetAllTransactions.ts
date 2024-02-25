import { fetchWrapper } from "@/common/core/fetchWrapper";
import { ListAllTransactionsDTO } from "@/common/dtos/transaction/listAllTransaction.dto";

export const useGetAllTransactions = async () => {
  const data = await fetchWrapper<ListAllTransactionsDTO[]>(
    "http://localhost:3333/transaction",
    {
      next: {
        revalidate: 60 * 10, // 10 minutes
      },
    }
  );

  return data;
};
