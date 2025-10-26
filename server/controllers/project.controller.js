import Project from "../models/project.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

const createProject = async (req, res) => {
  const project = new Project(req.body);
  try {
    await project.save();
    return res.status(201).json({
      message: "Project created successfully!",
      project,
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().select(
      "title firstname lastname email completion description"
    );
    res.json(projects);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const getProjectById = async (req, res, next, id) => {
  try {
    const project = await Project.findById(id);
    if (!project)
      return res.status(404).json({
        error: "Project not found",
      });
    req.project = project;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve project",
    });
  }
};

const readProject = (req, res) => {
  return res.json(req.project);
};

const updateProject = async (req, res) => {
  try {
    let project = req.project;
    project = extend(project, req.body);
    project.updated = Date.now();
    await project.save();
    res.json(project);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = req.project;
    const deletedProject = await project.deleteOne();
    res.json({
      message: "Project deleted successfully",
      deletedProject,
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default {
  createProject, getProjects, getProjectById, readProject, updateProject, deleteProject
};
