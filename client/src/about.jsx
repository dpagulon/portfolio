import React from 'react';
import profileImage from './assets/profile.jpg';

export default function About() {
  return (
    <div style={styles.container}>
      <h1>About Me</h1>

      {/* Profile Image */}
      <img src={profileImage} alt="" style={styles.image} />
      
      {/* Short Paragraph */}
      <p>
        Hello! My name is Daniel Simon Pagulong. I am currently attending my third semester of the Software Engineering Technology program at Centennial College. I enjoy problem-solving and  learning new technologies to improve my skills and expand my knowledge. In this portfolio, you can explore my past projects, level of education, and contact information.
      </p>

      {/* Resume Link */}
      <p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          View My Resume
        </a>
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  image: {
    width: '180px',
    height: '180px',
    margin: '20px 0',
    objectFit: 'cover',
  },
};
