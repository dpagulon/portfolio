import React, { useState } from "react";

const EducationForm = () => {
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
    <form onSubmit={handleSubmit}>
      <h2>Add Education</h2>
      <input type="text" name="degree" placeholder="Degree" value={education.degree} onChange={handleChange} required />
      <input type="text" name="institution" placeholder="Institution" value={education.institution} onChange={handleChange} required />
      <input type="text" name="year" placeholder="Year" value={education.year} onChange={handleChange} required />
      <button type="submit">Add Education</button>
    </form>
  );
};

export default EducationForm;
