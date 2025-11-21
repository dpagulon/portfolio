import express from "express";
import projectCtrl from "../controllers/project.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();
router.route("/")
  .get(authCtrl.requireSignin, projectCtrl.getProjects)
  .post(authCtrl.requireSignin, authCtrl.isAdmin, projectCtrl.createProject);
router.route("/:projectId")
  .get(authCtrl.requireSignin, projectCtrl.projectById)
  .put(authCtrl.requireSignin, authCtrl.isAdmin, projectCtrl.updateProject)
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, projectCtrl.deleteProject);
router.param("projectId", projectCtrl.projectById);

export default router;
