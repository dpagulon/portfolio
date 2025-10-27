import express from "express";
import projectCtrl from "../controllers/project.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();
router.route("/")
  .post(authCtrl.requireSignin, projectCtrl.createProject)
  .get(projectCtrl.getProjects);
router.route("/:projectId")
  .get(projectCtrl.getProjectById)
  .put(authCtrl.requireSignin, projectCtrl.updateProject)
  .delete(authCtrl.requireSignin, projectCtrl.deleteProject);
router.param("projectId", projectCtrl.getProjectById);

export default router;
