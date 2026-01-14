import z from "zod";

export const noteSchema = z.object({
  id: z.number(),
  from: z.string(),
  message: z.string(),
  created_at: z.string(),
});

export type Note = z.infer<typeof noteSchema>;

export type Notes = Note[];
