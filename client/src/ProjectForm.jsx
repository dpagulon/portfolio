import React, { useState } from "react";

const ProjectForm = ({ onAddProject }) => {
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
      const token = localStorage.getItem("token");
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
        if (onAddProject) onAddProject(project);
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
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Add Project</h2>
      {status && (
        <p style={{ color: status.success ? "green" : "red", textAlign: "center" }}>
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
        style={styles.input}
      />
      <textarea
        name="description"
        placeholder="Project Description"
        value={project.description}
        onChange={handleChange}
        required
        style={{ ...styles.input, height: "80px" }}
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="Project Image URL"
        value={project.imageUrl}
        onChange={handleChange}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Add Project</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: "500px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    backgroundColor: "#000000",
  },
  heading: {
    textAlign: "center",
    marginBottom: "10px",
    color: "#333",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s",
  },
};

export default ProjectForm;
