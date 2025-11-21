import React, { useState } from "react";

const ProjectForm = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // required for protected route
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(project),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: "Project added successfully!" });
        setProject({ title: "", description: "", imageUrl: "" });
      } else {
        setStatus({ success: false, message: data.error || "Failed to add project." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ success: false, message: "Failed to add project." });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Project</h2>
      {status && (
        <p style={{ color: status.success ? "green" : "red" }}>
          {status.message}
        </p>
      )}
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
        type="text"
        name="imageUrl"
        placeholder="Project Image URL"
        value={project.imageUrl}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;
