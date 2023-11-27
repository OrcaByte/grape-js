import { z } from 'zod';

export const createSchema = z.object({
  name: z.string(),
  id: z.string().optional(),
  description: z.string().optional(),
  content: z.string().optional(),
});

export type ICreate = z.infer<typeof createSchema>;
