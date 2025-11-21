import Education from "../models/education.model.js";
import extend from "lodash/extend.js";

export const createEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).json({
      message: "Education added successfully",
      education,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getEducations = async (req, res) => {
  try {
    const educations = await Education.find();
    res.json(educations);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const educationById = async (req, res, next, id) => {
  try {
    const education = await Education.findById(id);
    if (!education)
      return res.status(404).json({ error: "Education not found" });

    req.education = education;
    next();
  } catch (err) {
    res.status(400).json({ error: "Could not fetch education" });
  }
};

export const updateEducation = async (req, res) => {
  try {
    let education = extend(req.education, req.body);
    await education.save();
    res.json({
      message: "Education updated",
      education,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteEducation = async (req, res) => {
  try {
    await req.education.deleteOne();
    res.json({ message: "Education deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
export default {createEducation, getEducations, educationById, updateEducation, deleteEducation};