import express from "express";
import educationCtrl from "../controllers/education.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();
router.route("/")
  .get(authCtrl.requireSignin, educationCtrl.getEducations)
  .post(authCtrl.requireSignin, authCtrl.isAdmin, educationCtrl.createEducation);
router.route("/:educationId")
  .get(authCtrl.requireSignin, educationCtrl.educationById)
  .put(authCtrl.requireSignin, authCtrl.isAdmin, educationCtrl.updateEducation)
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, educationCtrl.deleteEducation);
router.param("educationId", educationCtrl.educationById);

export default router;
