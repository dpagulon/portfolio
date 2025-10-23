import Project from "../models/project.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

const createProject = async (req, res) => {
  const project = new Project(req.body);
  try {
    await project.save();
    return res.status(200).json({
      message: "Successful!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const getProjects = async (req, res) => {
  try {
    let projects = await Project.find().select("title firstname lastname email completion description");
    res.json(projects);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const getProjectById = async (req, res, next, id) => {
  try {
    let project = await Project.findById(id);
    if (!project)
      return res.status(400).json({
        error: "Project not found",
      });
    req.profile = project;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve project",
    });
  }
};
const updateProject = async (req, res) => {
  try {
    let project = req.profile;
    project = extend(project, req.body);
    project.updated = Date.now();
    await project.save();
    project.hashed_password = undefined;
    project.salt = undefined;
    res.json(project);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const deleteProject = async (req, res) => {
  try {
    let project = req.profile;
    let deletedProject = await project.deleteOne();
    deletedProject.hashed_password = undefined;
    deletedProject.salt = undefined;
    res.json(deletedProject);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default { createProject, getProjectById, getProjects, deleteProject, updateProject };
