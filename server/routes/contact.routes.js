import express from "express";
import contactController from "../controllers/contact.controller.js";

const router = express.Router();
router.post("/", contactController.createContact);
router.get("/", contactController.getContacts);
router.get("/:contactId", contactController.readContact);
router.put("/:contactId", contactController.updateContact);
router.delete("/:contactId", contactController.deleteContact);

router.param("contactId", contactController.getContactById);

export default router;
