import React from 'react';
import webApp from './assets/webapp.jpeg';
import database from './assets/database.jpg';
import program from './assets/prog.jpg';
export default function Services() {
    const services = [
    { title: 'Web Application Design', description: 'Build Responsive websites', image: webApp },
    { title: 'Database Management', description: 'Store, organize & retrieve data', image: database },
    { title: 'General Programming', description: 'Create scripts & automation', image: program },
  ];

  return (
    <div style={styles.container}>
      <h1>Services I Offer</h1>
      <div style={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index}>
            <img src={service.image} alt={service.title} style={styles.image} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
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
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '30px',
  },
  image: {
    width: '150px',
    height: '150px',
  },
};