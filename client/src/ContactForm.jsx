import React, { useState } from "react";

const ContactForm = () => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(contact),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setContact({
          firstName: "",
          lastName: "",
          email: "",
          contactNumber: "",
          message: "",
        });
      } else {
        setStatus({ success: false, message: data.error || "Failed to send message." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ success: false, message: "Failed to send message." });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Contact Me</h2>

      {status && (
        <p style={{ color: status.success ? "green" : "red", textAlign: "center" }}>
          {status.message}
        </p>
      )}

      <div style={styles.row}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={contact.firstName}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={contact.lastName}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.row}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={contact.contactNumber}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <textarea
        name="message"
        placeholder="Your Message"
        value={contact.message}
        onChange={handleChange}
        required
        style={{ ...styles.input, minHeight: "120px", resize: "vertical" }}
      />

      <button type="submit" style={styles.button}>Send Message</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "25px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    backgroundColor: "#000000",
  },

  heading: {
    textAlign: "center",
    marginBottom: "10px",
  },

  row: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
  },

  button: {
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default ContactForm;
