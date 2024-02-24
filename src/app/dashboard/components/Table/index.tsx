import { Edit2, Trash2 } from "lucide-react";

export const Table = () => {
  return (
    <div className="container mx-auto max-h-[700px] overflow-y-scroll mt-8 grid grid-cols-1 gap-4">
      {Array.from({ length: 2 }).map((_, index) => {
        return (
          <div
            key={index}
            className="border p-2 md:p-8 grid grid-cols-1 lg:grid-cols-5"
          >
            <p>Mercado</p>
            <p className="text-green-300">R$ 12,000</p>
            <p>Lanche</p>
            <p>24/04/2024</p>
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
