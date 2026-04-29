import { Router } from "express";
import {getProjects,createProject,getProjectById,updateProject,deleteProject} from "../controllers/project.controller";
import {protect} from "../middleware/auth.middleware";

const router = Router();


// PUBLIC
router.get("/",getProjects);
router.get("/:slug",getProjectById);


// PROTECTED
router.post("/",protect,createProject);
router.put("/:slug",protect,updateProject);
router.delete("/:slug",protect,deleteProject);

export default router;