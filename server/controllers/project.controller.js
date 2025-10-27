import Project from "../models/project.model.js";
import extend from "lodash/extend.js";

const createProject = async (req, res) => {
  const project = new Project(req.body);
  try {
    await project.save();
    res.json({ message: "Project created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().select("title firstname lastname email completion description");
    res.json(projects);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getProjectById = async (req, res, next, id) => {
  try {
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    req.profile = project;
    next();
  } catch (err) {
    res.status(400).json({ error: "Could not retrieve project" });
  }
};

const updateProject = async (req, res) => {
  try {
    let project = extend(req.profile, req.body);
    await project.save();
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const deletedProject = await req.profile.deleteOne();
    res.json({ message: "Project deleted successfully", deletedProject });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default {createProject, getProjects, getProjectById, updateProject, deleteProject};
