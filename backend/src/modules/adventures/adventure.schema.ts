import { z } from "zod";


export const createAdventureSchema = z.object({
  title: z.string().min(5).max(120),
  description: z.string().min(1).max(5000).trim(),
  isPublished: z.boolean().optional(),
  distaince: z.number().min(0).optional(),
  imageUrl: z.boolean().optional().default(false),
  category: z.enum(["Hiking", "trail-running", "expedition", "Skiing"]).optional(),
  difficulty: z.enum(["easy", "moderate", "hard", "extreme"]).optional()
});

export const updateAdventureSchema =
  createAdventureSchema.partial();

export type CreateAdventureDto =
  z.infer<typeof createAdventureSchema>;

export type UpdateAdventureDto =
  z.infer<typeof updateAdventureSchema>;