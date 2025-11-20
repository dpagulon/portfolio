
import React, { useState } from "react";

const ProjectForm = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    link: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Data:", project);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Project</h2>
      <input
        type="text"
        name="title"
        placeholder="Project Title"
        value={project.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Project Description"
        value={project.description}
        onChange={handleChange}
        required
      ></textarea>
      <input
        type="url"
        name="link"
        placeholder="Project Link"
        value={project.link}
        onChange={handleChange}
      />
      <button type="submit">Save Project</button>
    </form>
  );
};

export default ProjectForm;
