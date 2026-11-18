import { Router } from "express";
import * as adventureController from "./adventure.controller.js";

const router = Router();

router.get("/", adventureController.getAdventures);
router.get("/slug/:slug", adventureController.getAdventureBySlug);
router.get("/:id", adventureController.getAdventureById);
router.post("/", adventureController.createAdventure);
router.patch("/:id", adventureController.updateAdventure);
router.delete("/:id", adventureController.deleteAdventure);

export default router;
