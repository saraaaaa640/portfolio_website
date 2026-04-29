import { Router } from "express";
import {getSkills,createSkill,updateSkill,deleteSkill} from "../controllers/skill.controller";

import { protect } from "../middleware/auth.middleware";

const router = Router();


// PUBLIC
router.get("/", getSkills);


// ADMIN ONLY
router.post("/", protect, createSkill);

router.put("/:id", protect, updateSkill);

router.delete("/:id", protect, deleteSkill);

export default router;