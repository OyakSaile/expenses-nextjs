import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const createTransactionSchema = z.object({
  description: z.string().optional(),
  category: z.string().min(1, {
    message: "A categoria deve ter pelo menos 1 caractere",
  }),
  title: z.string().min(1, {
    message: "O título deve ter pelo menos 1 caractere",
  }),
  date: z.date().optional(),
  type: z.enum(["INCOME", "EXPENSE"], {
    errorMap: () => ({ message: "Valor inválido" }),
  }),
  amount: z.string().refine((val) => parseFloat(val) > 0, {}),
});

export const createTransactionSchemaValidation = zodResolver(
  createTransactionSchema
);
