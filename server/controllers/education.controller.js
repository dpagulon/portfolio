import Education from "../models/education.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

const createEducation = async (req, res) => {
  const education = new Education(req.body);
  try {
    await education.save();
    return res.status(200).json({
      message: "Successful!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const getEducations = async (req, res) => {
  try {
    let education = await Education.find().select("title firstname lastname email completion description");
    res.json(education);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const getEducationById = async (req, res, next, id) => {
  try {
    let education = await Education.findById(id);
    if (!education)
      return res.status(400).json({
        error: "Education not found",
      });
    req.profile = education;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve education",
    });
  }
};
const updateEducation = async (req, res) => {
  try {
    let education = req.profile;
    education = extend(education, req.body);
    education.updated = Date.now();
    await education.save();
    education.hashed_password = undefined;
    education.salt = undefined;
    res.json(education);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const deleteEducation = async (req, res) => {
  try {
    let education = req.profile;
    let deletedEducation = await education.deleteOne();
    deletedEducation.hashed_password = undefined;
    deletedEducation.salt = undefined;
    res.json(deletedEducation);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default { createEducation, getEducations, getEducationById, deleteEducation, updateEducation };
