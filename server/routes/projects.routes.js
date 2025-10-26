import express from "express";
import projectController from "../controllers/project.controller.js";

const router = express.Router();

router.post("/", projectController.createProject);
router.get("/", projectController.getProjects);
router.get("/:projectId", projectController.readProject);
router.put("/:projectId", projectController.updateProject);
router.delete("/:projectId", projectController.deleteProject);

router.param("projectId", projectController.getProjectById);

export default router;
