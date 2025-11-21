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
      const token = localStorage.getItem("token"); // if route is protected
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
    <form onSubmit={handleSubmit}>
      <h2>Contact Me</h2>
      {status && <p style={{ color: status.success ? "green" : "red" }}>{status.message}</p>}
      <input type="text" name="firstName" placeholder="First Name" value={contact.firstName} onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Last Name" value={contact.lastName} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={contact.email} onChange={handleChange} required />
      <input type="text" name="contactNumber" placeholder="Contact Number" value={contact.contactNumber} onChange={handleChange} required />
      <textarea name="message" placeholder="Your Message" value={contact.message} onChange={handleChange} required />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
