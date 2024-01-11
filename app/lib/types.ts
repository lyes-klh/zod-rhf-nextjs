import { z } from "zod";

export const FormSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email(),
    password: z.string().min(8, "Password should have more than 8 caracters"),
    confirmPassword: z.string(),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "Passwords does not match",
    path: ["confirmPassword"],
  });

export type FormValues = z.infer<typeof FormSchema>;
