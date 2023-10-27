import { z } from "zod";

export const searchSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "Digite algo valido" })
    .refine((value) => !/^\s*$/.test(value), { message: "Digite algo valido" }),
});
