import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to my Portfolio!</h1>
        {/* Welcome message */}
        <p>This is a place where I showcase my projects and skills in software.</p>

        {/* Buttons to other pages*/}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        <Link to="/about">
          <button style={buttonStyle}>About Me</button>
        </Link>
        <Link to="/services">
          <button style={buttonStyle}>Services</button>
        </Link>
        <Link to="/project">
          <button style={buttonStyle}>My Projects</button>
        </Link>
        <Link to="/contact">
          <button style={buttonStyle}>Contact Info</button>
        </Link>
      </div>
      {/* Mission Statement */}
        <p>My mission is to create applications that is accessible and break the boundaries of creativity in tech.</p>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};
