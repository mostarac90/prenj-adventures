import { Adventure, type IAdventure } from "./adventure.model.js";

export type CreateAdventureInput = Omit<
  IAdventure,
  "isPublished"
> & {
  isPublished?: boolean;
};

export const createAdventure = async (adventureData: CreateAdventureInput) => {
  return Adventure.create(adventureData);
};

export const getAdventures = async () => {
  return Adventure.find().sort({ createdAt: -1 }).lean();
};

export const deleteAdventure = async (id: string) => {
  return Adventure.findByIdAndDelete(id);
};

export const updateAdventure = async (
  id: string,
  updateData: Partial<IAdventure>
) => {
  return Adventure.findByIdAndUpdate(
    id,
    updateData,
    { new: true,
      runValidators: true
     }
  );
};

export const getAdventureById = async (id: string) => {
  return Adventure.findById(id);
};

export const getAdventureBySlug = async (slug: string) => {
  return Adventure.findOne({ slug });
};