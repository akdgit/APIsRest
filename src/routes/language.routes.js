import { Router } from "express";
import { methods as languagesController } from "../controllers/languages.controller";

const router = Router();

router.get("/", languagesController.getLanguages);
router.get("/:id", languagesController.getLanguage);
router.post("/", languagesController.addLanguage);
router.delete("/:id", languagesController.deleteLanguage);
router.put("/:id", languagesController.updateLanguage);

/*
router.get("/", (req, res) => {
    res.send("Aguante Recing")
});*/

export default router;