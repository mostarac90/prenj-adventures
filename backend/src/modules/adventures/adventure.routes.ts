import { Router } from "express";
import * as adventureController from "./adventure.controller.js";

import { validateRequest } from
  "../../middleware/validateRequest.js";

import {
  createAdventureSchema,
  updateAdventureSchema
} from "./adventure.schema.js";

const router = Router();

router.get("/", adventureController.getAdventures);
router.get("/slug/:slug", adventureController.getAdventureBySlug);
router.get("/:id", adventureController.getAdventureById);
router.post("/", validateRequest(createAdventureSchema), adventureController.createAdventure);
router.patch("/:id", validateRequest(updateAdventureSchema), adventureController.updateAdventure);
router.delete("/:id", adventureController.deleteAdventure);

export default router;
