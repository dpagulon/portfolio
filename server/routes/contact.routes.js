import express from "express";
import contactCtrl from "../controllers/contact.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();
router.route("/")
  .post(authCtrl.requireSignin, contactCtrl.createContact)
  .get(contactCtrl.getContacts);
router.route("/:contactId")
  .get(contactCtrl.getContactById)
  .put(authCtrl.requireSignin, contactCtrl.updateContact)
  .delete(authCtrl.requireSignin, contactCtrl.deleteContact);
router.param("contactId", contactCtrl.getContactById);

export default router;
