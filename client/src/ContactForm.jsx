import React, { useState } from "react";

const ContactForm = () => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Data:", contact);
    alert("Message Sent!");
    setContact({
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Me</h2>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={contact.firstName}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={contact.lastName}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={contact.email}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="text"
        name="contactNumber"
        placeholder="Contact Number"
        value={contact.contactNumber}
        onChange={handleChange}
        required
      />
      <br />
      <textarea
        name="message"
        placeholder="Your Message"
        value={contact.message}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
