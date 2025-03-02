import { z } from "zod";

export const ticketSchema = z.object({
  title: z.string().min(3, { message: "Title too short" }),
  description: z.string(),
});
