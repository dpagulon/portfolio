import React from 'react';
import project1Image from './assets/project1.png';
import project2Image from './assets/project2.png';
import project3Image from './assets/project3.png';

export default function Project() {
  const projects = [
    {
      title: 'College Evaluation Form', image: project1Image,
      description: 'An assignment that involved developing a short evaluation form. Complete with  textboxes, buttons, dropdowns, lists, and a comment section.',
    },
    {
      title: 'Pacific Trails Resort', image: project2Image,
      description: 'The basics of web design were taught through this lab assignment for the duration of the semester. Building it from start to finish.',
    },
    {
      title: 'Dash Transit', image: project3Image,
      description: 'For a final project, I designed a web page of my choice. Filled with creative styling, different viewpoints, and working links, pages and images.',
    },
  ];

  return (
    <div style={styles.container}>
      <h1>My Projects</h1>
      <div style={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index}>
            <img src={project.image} alt={project.title} style={styles.projectImage} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '50px 20px',
    textAlign: 'center',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '30px',
  },
  projectImage: {
    width: '100%',
    height: '150px',
    marginBottom: '15px',
  },
};
