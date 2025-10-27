import Education from "../models/education.model.js";
import extend from "lodash/extend.js";

const createEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.json({ message: "Education created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getEducations = async (req, res) => {
  try {
    const educations = await Education.find().select("title firstname lastname email completion description");
    res.json(educations);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getEducationById = async (req, res, next, id) => {
  try {
    const education = await Education.findById(id);
    if (!education) return res.status(404).json({ error: "Education not found" });
    req.profile = education;
    next();
  } catch (err) {
    res.status(400).json({ error: "Could not retrieve education" });
  }
};

const updateEducation = async (req, res) => {
  try {
    let education = extend(req.profile, req.body);
    await education.save();
    res.json(education);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteEducation = async (req, res) => {
  try {
    const deletedEducation = await req.profile.deleteOne();
    res.json({ message: "Education deleted successfully", deletedEducation });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default {createEducation, getEducations, getEducationById, updateEducation, deleteEducation};
