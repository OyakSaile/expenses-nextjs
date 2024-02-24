import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Table } from "./components/Table";

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen p-4 bg-black text-white">
      <Header />
      <Summary />
      <Table />
    </div>
  );
}
