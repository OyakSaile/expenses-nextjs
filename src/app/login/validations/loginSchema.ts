import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "O e-mail não pode ser vazio",
    })
    .email({
      message: "O e-mail não é válido",
    }),
  password: z.string().min(1, {
    message: "A senha não pode ser vazia",
  }),
});

export const loginSchemaValidation = zodResolver(loginSchema);
export type LoginSchema = z.infer<typeof loginSchema>;
