import React, { useState } from "react";

const EducationForm = ({ onAddEducation }) => {
  const [education, setEducation] = useState({ degree: "", institution: "", year: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/education", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(education),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Education added!");
        if (onAddEducation) onAddEducation(education);
        setEducation({ degree: "", institution: "", year: "" });
      } else {
        alert(data.error || "Failed to add education.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to add education.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Add Education</h2>
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={education.degree}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="text"
        name="institution"
        placeholder="Institution"
        value={education.institution}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="text"
        name="year"
        placeholder="Year"
        value={education.year}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Add Education</button>
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
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s",
  },
};

export default EducationForm;
