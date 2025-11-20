import React, { useState } from "react";

const EducationForm = () => {
  const [education, setEducation] = useState({
    degree: "",
    institution: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Education Data:", education);
    alert("Education Added!");
    setEducation({ degree: "", institution: "", year: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Education / Qualification</h2>
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={education.degree}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="text"
        name="institution"
        placeholder="Institution"
        value={education.institution}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="text"
        name="year"
        placeholder="Year of Completion"
        value={education.year}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Add Education</button>
    </form>
  );
};

export default EducationForm;
