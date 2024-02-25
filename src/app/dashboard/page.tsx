import { useGetAllTransactions } from "@/common/requests/transactions/useGetAllTransactions";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Table } from "./components/Table";
import { Modal } from "@/common/components/ui/Modal";
import { CreateTransactionModal } from "./components/Modals/CreateTransaction";

export default async function Dashboard() {
  const transactions = await useGetAllTransactions();

  return (
    <div className="w-full min-h-screen p-4 bg-black text-white">
      <Header />
      <Summary />
      <Table transactions={transactions} />
      <CreateTransactionModal open={true} />
    </div>
  );
}
