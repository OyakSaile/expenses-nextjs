import { ListAllTransactionsDTO } from "@/common/dtos/transactions/listAllTransaction.dto";
import { TransactionTypeEnum } from "@/common/enums/transactions/transactionTypeEnum";
import { formatDate } from "@/common/helpers/formatDate";
import { FormatToCurrency } from "@/common/helpers/formatToCurrency";
import { Edit2, Trash2 } from "lucide-react";

interface TableProps {
  transactions: ListAllTransactionsDTO[];
}

export const Table = ({ transactions }: TableProps) => {
  return (
    <div className="container mx-auto max-h-[700px] overflow-y-scroll mt-8 grid grid-cols-1 gap-4">
      {transactions.length &&
        transactions?.map((item, index) => {
          return (
            <div
              key={index}
              className="border p-2 md:p-8 grid grid-cols-1 lg:grid-cols-5"
            >
              <p>{item?.title}</p>
              <p
                className={
                  item.type === TransactionTypeEnum.INCOME
                    ? "text-green-300"
                    : "text-red-300"
                }
              >
                {item.type !== TransactionTypeEnum.INCOME && <span>-</span>}{" "}
                {FormatToCurrency(item?.amount)}
              </p>
              <p>{item?.category}</p>
              <p>{item?.date && formatDate(item?.date)}</p>
              <div className="flex gap-2 items-center self-end text-right justify-end">
                <Edit2 className="cursor-pointer" size={18} />
                <Trash2 className="cursor-pointer text-red-200" size={18} />
              </div>
            </div>
          );
        })}
    </div>
  );
};
