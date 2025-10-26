import User from "../models/user.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

const create = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    return res.status(201).json({
      message: "User successfully signed up!",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        created: user.created,
      },
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const list = async (req, res) => {
  try {
    const users = await User.find().select("name email created updated");
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const userByID = async (req, res, next, id) => {
  try {
    const user = await User.findById(id);
    if (!user)
      return res.status(404).json({
        error: "User not found",
      });
    req.user = user;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve user",
    });
  }
};

const read = (req, res) => {
  const user = req.user.toObject();
  delete user.hashed_password;
  delete user.salt;
  return res.json(user);
};

const update = async (req, res) => {
  try {
    let user = req.user;
    user = extend(user, req.body);
    user.updated = Date.now();
    await user.save();
    const updatedUser = user.toObject();
    delete updatedUser.hashed_password;
    delete updatedUser.salt;
    res.json(updatedUser);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const remove = async (req, res) => {
  try {
    const user = req.user;
    const deletedUser = await user.deleteOne();
    const userObj = deletedUser.toObject();
    delete userObj.hashed_password;
    delete userObj.salt;
    res.json({
      message: "User deleted successfully",
      deletedUser: userObj,
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default { create, userByID, read, list, update, remove };
