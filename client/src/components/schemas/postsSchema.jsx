import { z } from "zod";

export const postsSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "O título não pode ser vazio." })
    .refine((value) => !/^\s*$/.test(value), {
      message: "O título não pode ter apenas espaços.",
    }),
  banner: z
    .string()
    .nonempty({ message: "O link do banner não pode ser vazio." })
    .refine((value) => !/^\s*$/.test(value), {
      message: "O link do banner não pode ter apenas espaços.",
    }),
  text: z
    .string()
    .nonempty({ message: "O texto não pode ser vazio." })
    .refine((value) => !/^\s*$/.test(value), {
      message: "O texto não pode ter apenas espaços.",
    }),
  tags: z
    .string()
    .nonempty({ message: "As tags não pode ser vazio." })
    .refine((value) => !/^\s*$/.test(value), {
      message: "As tags não pode ter apenas espaços.",
    }),
});
