import Education from "../models/education.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

const createEducation = async (req, res) => {
  const education = new Education(req.body);
  try {
    await education.save();
    return res.status(201).json({
      message: "Education created successfully!",
      education,
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const getEducations = async (req, res) => {
  try {
    const educations = await Education.find().select(
      "title firstname lastname email completion description"
    );
    res.json(educations);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const getEducationById = async (req, res, next, id) => {
  try {
    const education = await Education.findById(id);
    if (!education)
      return res.status(404).json({
        error: "Education not found",
      });
    req.education = education;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve education",
    });
  }
};

const readEducation = (req, res) => {
  return res.json(req.education);
};

const updateEducation = async (req, res) => {
  try {
    let education = req.education;
    education = extend(education, req.body);
    education.updated = Date.now();
    await education.save();
    res.json(education);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const deleteEducation = async (req, res) => {
  try {
    const education = req.education;
    const deletedEducation = await education.deleteOne();
    res.json({
      message: "Education deleted successfully",
      deletedEducation,
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default {
  createEducation, getEducations, getEducationById, readEducation, updateEducation, deleteEducation
};
