import express from "express";
import educationController from "../controllers/education.controller.js";

const router = express.Router();

router.post("/", educationController.createEducation);
router.get("/", educationController.getEducations);
router.get("/:educationId", educationController.readEducation);
router.put("/:educationId", educationController.updateEducation);
router.delete("/:educationId", educationController.deleteEducation);

router.param("educationId", educationController.getEducationById);

export default router;
