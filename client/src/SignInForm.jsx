import React, { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus({ success: true, message: "Login successful!" });
        localStorage.setItem("jwt", JSON.stringify(data));
        setFormData({ email: "", password: "" });
      } else {
        setStatus({ success: false, message: data.error || "Login failed." });
      }
    } catch (err) {
      setStatus({ success: false, message: "Login failed." });
    }
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#000000"
  };

  const inputStyle = {
    width: "95%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const statusStyle = (success) => ({
    color: success ? "green" : "red",
    marginBottom: "10px",
    textAlign: "center",
  });

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Sign In</h2>
      {status && <p style={statusStyle(status.success)}>{status.message}</p>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Sign In
      </button>
    </form>
  );
};

export default SignIn;
