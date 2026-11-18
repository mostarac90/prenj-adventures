import type { Request, Response } from "express";
import * as adventureService from "./adventure.service.js";

type IdParams = { id: string };
type SlugParams = { slug: string };

export const getAdventures = async (req: Request, res: Response) => {
  const adventures = await adventureService.getAdventures();
  res.status(200).json(adventures);
};

export const getAdventureById = async (req: Request<IdParams>, res: Response) => {
  const { id } = req.params;
  const adventure = await adventureService.getAdventureById(id);
  res.status(200).json(adventure);
};

export const getAdventureBySlug = async (req: Request<SlugParams>, res: Response) => {
  const { slug } = req.params;
  const adventure = await adventureService.getAdventureBySlug(slug);
  res.status(200).json(adventure);
};

export const createAdventure = async (req: Request, res: Response) => {
  const adventure = await adventureService.createAdventure(req.body);
  res.status(201).json(adventure);
};

export const updateAdventure = async (req: Request<IdParams>, res: Response) => {
  const { id } = req.params;
  const adventure = await adventureService.updateAdventure(id, req.body);
  res.status(200).json(adventure);
};

export const deleteAdventure = async (req: Request<IdParams>, res: Response) => {
  const { id } = req.params;
  await adventureService.deleteAdventure(id);
  res.status(204).send();
};