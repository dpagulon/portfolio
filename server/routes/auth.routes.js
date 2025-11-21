import express from "express";
import authCtrl from "../controllers/auth.controller.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import config from "../../config/config.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body); 
    await user.save();

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      config.jwtSecret,
      { expiresIn: "1d" }
    );

    res.status(201).json({
      message: "Signup successful!",
      token, 
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.post("/signin", authCtrl.signin);
router.get("/signout", authCtrl.signout);
router.get("/protected", authCtrl.requireSignin, (req, res) => {
  res.json({ message: "You have access to protected content." });
});

export default router;
