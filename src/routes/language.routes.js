import { Router } from "express";
import { methods as languagesController } from "../controllers/languages.controller";

const router = Router();

router.get("/", languagesController.getLanguages);

/*
router.get("/", (req, res) => {
    res.send("Aguante Recing")
});*/

export default router;