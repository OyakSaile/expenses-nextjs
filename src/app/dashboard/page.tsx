import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Table } from "./components/Table";
import { useGetAllTransactions } from "@/common/hooks/requests/transactions/useGetAllTransactions";

export default async function Dashboard() {
  const transactions = await useGetAllTransactions();

  return (
    <div className="w-full min-h-screen p-4 bg-black text-white">
      <Header />
      <Summary />
      <Table transactions={transactions} />
    </div>
  );
}
