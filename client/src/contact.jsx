import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div style={styles.container}>
      <h1>Contact Me</h1>

      <div style={styles.contactPanel}>
        <p><strong>Name:</strong> Daniel Simon Pagulong</p>
        <p><strong>Email:</strong> dpagulon27@gmail.com</p>
        <p><strong>Phone:</strong> +1 (416) 884-9487</p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/daniel-pagulong-66593a387/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/danielpagulong
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/dpagulon" target="_blank" rel="noopener noreferrer">
            github.com/dpagulon
          </a>
        </p>
      </div>

      <ContactForm />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "50px 20px",
    textAlign: "center",
  },
  contactPanel: {
    border: "1px solid #ddd",
    padding: "30px",
    boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
    lineHeight: "1.8",
    marginBottom: "40px",
    borderRadius: "10px"
  }
};
