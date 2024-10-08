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
    .array(
      z
        .string()
        .nonempty({ message: "Cada tag não pode ser vazia." })
        .refine((value) => !/^\s*$/.test(value), {
          message: "Cada tag não pode ter apenas espaços.",
        }),
    )
    .nonempty({ message: "A lista de tags não pode estar vazia." }),
  links: z.array(z.string()).optional(),
});
