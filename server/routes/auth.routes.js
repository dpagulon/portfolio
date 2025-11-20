/*
import express from "express";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();
router.route("/auth/signin").post(authCtrl.signin);
router.route("/auth/signout").get(authCtrl.signout);

export default router;
*/

import express from "express";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signin", authCtrl.signin);
router.get("/signout", authCtrl.signout);
router.get("/protected", authCtrl.requireSignin, (req, res) => {
  res.json({ message: "You have access to protected content." });
});

export default router;


