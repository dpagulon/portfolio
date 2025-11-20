import React, { useState } from "react";

const ProjectForm = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Data:", project);
    alert("Project Added!");
    setProject({ title: "", description: "", link: "" });
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
      <br />
      <textarea
        name="description"
        placeholder="Project Description"
        value={project.description}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="url"
        name="link"
        placeholder="Project Link"
        value={project.link}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;
