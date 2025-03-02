import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters" }),
});
export const signupSchema = z.object({
  name: z.string().min(3, { message: "Name must be alteast 3 characters" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters" }),
});
