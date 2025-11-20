
import React, { useState } from "react";

const EducationForm = () => {
  const [education, setEducation] = useState({
    degree: "",
    university: "",
    year: "",
  });

  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Education Data:", education);
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
      <input
        type="text"
        name="university"
        placeholder="University"
        value={education.university}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="year"
        placeholder="Year of Graduation"
        value={education.year}
        onChange={handleChange}
        required
      />
      <button type="submit">Save Education</button>
    </form>
  );
};

export default EducationForm;
