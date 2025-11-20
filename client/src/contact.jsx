import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Data:', formData);
    alert('Message sent successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      message: '',
    });
  };

  return (
    <div style={styles.container}>
      <h1>Contact Me</h1>

      <div style={styles.contactPanel}>
        <p><strong>Name:</strong> Daniel Simon Pagulong</p>
        <p><strong>Email:</strong> dpagulon27@gmail.com</p>
        <p><strong>Phone:</strong> +1 (416) 884-9487</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/daniel-pagulong-66593a387/" target="_blank" rel="noopener noreferrer">linkedin.com/in/danielpagulong</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/dpagulon" target="_blank" rel="noopener noreferrer">github.com/dpagulon</a></p>
      </div>

      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Send Me a Message</h2>

        <div style={styles.formGroup}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" style={styles.submitButton}>Send Message</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '50px 20px',
    textAlign: 'center',
  },
  contactPanel: {
    border: '1px solid #ddd',
    padding: '30px',
    boxShadow: '0px 3px 6px rgba(0,0,0,0.1)',
    lineHeight: '1.8',
    marginBottom: '40px',
  },
  form: {
    textAlign: 'left',
  },
  formGroup: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  submitButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
