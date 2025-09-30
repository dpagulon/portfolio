import React from 'react';

export default function Contact() {
    
  return (
    <div style={styles.container}>
      <h1>Contact Me</h1>

      {/* Contact Panel */}
      <div style={styles.contactPanel}>
        <p><strong>Name:</strong> Daniel Simon Pagulong</p>
        <p><strong>Email:</strong> dpagulon27@gmail.com</p>
        <p><strong>Phone:</strong> +1 (416) 884-9487</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/daniel-pagulong-66593a387/" target="_blank" rel="noopener noreferrer">linkedin.com/in/danielpagulong</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/dpagulon" target="_blank" rel="noopener noreferrer">github.com/dpagulon</a></p>
      </div>

      {/* Message Form */}
      <form style={styles.form}>
        <h2>Send Me a Message</h2>

        <div style={styles.formGroup}>
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="lastName" placeholder="Last Name" />
        </div>

        <div style={styles.formGroup}>
          <input type="text" name="contactNumber" placeholder="Contact Number" />
          <input type="email" name="email" placeholder="Email Address" />
        </div>

        <div style={styles.formGroup}>
          <textarea name="message" placeholder="Your Message" rows="5" />
        </div>
        
        <button type="button" style={styles.submitButton}>Send Message</button>
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
