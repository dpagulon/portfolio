import express from "express";
import educationCtrl from "../controllers/education.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();
router.route("/")
  .post(authCtrl.requireSignin, educationCtrl.createEducation)
  .get(educationCtrl.getEducations);
router.route("/:educationId")
  .get(educationCtrl.getEducationById)
  .put(authCtrl.requireSignin, educationCtrl.updateEducation)
  .delete(authCtrl.requireSignin, educationCtrl.deleteEducation);
router.param("educationId", educationCtrl.getEducationById);

export default router;
