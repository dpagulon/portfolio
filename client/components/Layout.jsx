import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.png';

export default function Layout() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
      <img 
        src={logo} 
        alt="Logo" 
        style={{ width: '100px', height: '100px', marginRight: '20px', borderRadius: '50%' }} 
      />
      <div>
        <h1>My Portfolio</h1>
        <nav>
          <Link to="/">Home</Link> |{' '}
          <Link to="/about">About</Link> |{' '}
          <Link to="/education">Education</Link> |{' '}
          <Link to="/project">Project</Link> |{' '}
          <Link to="/services">Services</Link> |{' '}
          <Link to="/contact">Contact</Link> |{' '}
          <Link to="/signin">Sign In</Link> |{' '}
          <Link to="/signup">Sign Up</Link>
        </nav>
        <hr />
      </div>
    </div>
  );
}
