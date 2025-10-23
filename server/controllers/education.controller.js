import Education from "../models/education.model.js";
import errorHandler from "./error.controller.js";

 const createEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).json(education);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err), });
  }
};

 const getEducations = async (req, res) => {
  try {
    const educations = await Education.find();
    res.json(educations);
  } catch (err) {
    res.status(500).json({ error: errorHandler.getErrorMessage(err), });
  }
};

 const getEducationById = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) return res.status(404).json({ error: "Education not found" });
    res.json(education);
  } catch (err) {
    res.status(500).json({ error: errorHandler.getErrorMessage(err), });
  }
};

 const updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(education);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err), });
  }
};

 const deleteEducation = async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.json({ message: "Education deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: errorHandler.getErrorMessage(err), });
  }
};
export default { createEducation, getEducations, getEducationById, deleteEducation, updateEducation };
