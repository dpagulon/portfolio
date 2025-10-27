import express from "express";
import { signin, signout, requireSignin } from "../controllers/auth.controller.js";

const router = express.Router();
router.route("/auth/signin").post(signin);
router.route("/auth/signout").get(requireSignin, signout);

export default router;
