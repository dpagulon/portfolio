import User from "../models/user.model.js";
import extend from "lodash/extend.js";

export const create = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const list = async (req, res) => {
  try {
    const users = await User.find().select("name email created updated");
    res.json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const userByID = async (req, res, next, id) => {
  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    req.profile = user;
    next();
  } catch (err) {
    res.status(400).json({ error: "Could not retrieve user" });
  }
};

export const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  res.json(req.profile);
};

export const update = async (req, res) => {
  try {
    let user = extend(req.profile, req.body);
    user.updated = Date.now();
    await user.save();
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    const deletedUser = await req.profile.deleteOne();
    res.json({ message: "User deleted successfully", deletedUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default { create, list, userByID, read, update, remove };
