import express from "express";
import contactCtrl from "../controllers/contact.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();
router.route("/")
  .get(authCtrl.requireSignin, contactCtrl.getContacts) 
  .post(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.createContact); 
router.route("/:contactId")
  .get(authCtrl.requireSignin, contactCtrl.getContactById)
  .put(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.updateContact)
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.deleteContact); 
router.param("contactId", contactCtrl.getContactById);

export default router;
