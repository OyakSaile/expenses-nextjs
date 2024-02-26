import { TransactionTypeEnum } from "@/common/enums/transactions/transactionTypeEnum";

export interface CreateTransactionsDTO {
  amount: number;
  description?: string;
  category: string;
  title: string;
  date: Date;
  type: TransactionTypeEnum;
}
