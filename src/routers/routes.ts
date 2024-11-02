import { Router } from "express";
import * as PlayerController from "../controllers/players-crontroller";


const router = Router();

router.get("/players", PlayerController.getPlayers);
router.get("/players/:id", PlayerController.getPlayersById);
router.post("/players", PlayerController.postPlayer);
router.patch("/players/:id", PlayerController.updatePlayer);
router.delete("/players/:id", PlayerController.deletePlayer);

export default router;