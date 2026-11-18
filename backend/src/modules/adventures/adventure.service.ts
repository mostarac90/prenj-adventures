import { AppError } from "../../utils/AppError.js";
import * as adventureRepository from "./adventure.repository.js";

import type {
  CreateAdventureInput,
  UpdateAdventureInput
} from "./adventure.repository.js";

 export const createAdventure = async (adventureData: CreateAdventureInput) => {
   return adventureRepository.createAdventure(adventureData);
 };

 export const getAdventures = async () => {
   return adventureRepository.getAdventures();
 };

 export const deleteAdventure = async (id: string) => {
   return adventureRepository.deleteAdventure(id);
 };

 export const updateAdventure = async (id: string, updateData: Partial<UpdateAdventureInput>) => {
   return adventureRepository.updateAdventure(id, updateData);
 };

 export const getAdventureById = async (id: string) => {
   var adventure = await adventureRepository.getAdventureById(id);
   
   if(!adventure) {
     throw new AppError("Adventure not found", 404);
   }
   return adventure;
 };

 export const getAdventureBySlug = async (slug: string) => {
   var adventure = await adventureRepository.getAdventureBySlug(slug);
   
   if(!adventure) {
     throw new AppError("Adventure not found", 404);
   }
   return adventure;
 };