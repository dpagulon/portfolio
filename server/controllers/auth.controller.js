import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";
import config from "../../config/config.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "User not found" });
    if (!user.authenticate(password)) return res.status(401).json({ error: "Email and password don't match." });

    const token = jwt.sign({ _id: user._id }, config.jwtSecret, { expiresIn: "1d" });
    res.cookie("t", token, { expire: new Date() + 9999 });
    res.json({ token, user: { _id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(401).json({ error: "Could not sign in" });
  }
};

export const signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Signed out successfully." });
};

export const requireSignin = expressjwt({
  secret: config.jwtSecret,
  algorithms: ["HS256"],
  requestProperty: "auth",
});

export const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authorized) return res.status(403).json({ error: "User is not authorized" });
  next();
};

export default { signin, signout, requireSignin, hasAuthorization };
