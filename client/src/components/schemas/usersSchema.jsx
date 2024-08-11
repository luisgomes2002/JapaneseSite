import { z } from "zod";

export const usersSchema = z.object({
  name: z
    .string()
    .optional()
    .refine((value) => !/^\s*$/.test(value), {
      message: "O Nome não pode ter apenas espaços.",
    }),
  username: z
    .string()
    .optional()
    .refine((value) => !/^\s*$/.test(value), {
      message: "O username não pode ter apenas espaços.",
    }),
  email: z
    .string()
    .email({ message: "E-mail inválido" })
    .toLowerCase()
    .optional()
    .refine((value) => !/^\s*$/.test(value), {
      message: "O email não pode ter apenas espaços.",
    }),
  password: z.string().refine((value) => !/^\s*$/.test(value), {
    message: "O password não pode ter apenas espaços.",
  }),
  newPassword: z.string().refine((value) => !/^\s*$/.test(value), {
    message: "O novo password não pode ter apenas espaços.",
  }),
  avatar: z
    .string()
    .optional()
    .refine((value) => !/^\s*$/.test(value), {
      message: "O icon não pode ter apenas espaços.",
    }),
  background: z
    .string()
    .optional()
    .refine((value) => !/^\s*$/.test(value), {
      message: "O Background não pode ter apenas espaços.",
    }),
  about: z
    .string()
    .optional()
    .refine((value) => !/^\s*$/.test(value), {
      message: "O texto não pode ter apenas espaços.",
    }),
});
