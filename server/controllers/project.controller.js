import Project from "../models/project.model.js";
import extend from "lodash/extend.js";

export const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json({
      message: "Project created successfully",
      project,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const projectById = async (req, res, next, id) => {
  try {
    const project = await Project.findById(id);
    if (!project)
      return res.status(404).json({ error: "Project not found" });

    req.project = project;
    next();
  } catch (err) {
    res.status(400).json({ error: "Could not retrieve project" });
  }
};

export const updateProject = async (req, res) => {
  try {
    let project = extend(req.project, req.body);
    await project.save();
    res.json({
      message: "Project updated successfully",
      project,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    await req.project.deleteOne();
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
export default {createProject, getProjects, projectById, updateProject, deleteProject};