export default function Education() {
  const educationData = [
    {
      institution: 'Centennial College',
      degree: 'Software Engineering Technology Diploma',
      year: 'Sept. 2024 - Current',
    },
    
    {
      institution: 'Centennial College',
      degree: 'Motive Power Technician Diploma',
      year: 'Sept. 2020 - May 2022',
    },
    {
      institution: 'Jean Vanier Catholic Secondary School',
      degree: 'Ontario Secondary School Diploma',
      year: 'Sept. 2016 - Jun. 2020',
    }
  ];

  return (
    <div style={styles.container}>
      <h1>Education & Qualifications</h1>
      <div style={styles.educationList}>
        {educationData.map((edu, index) => (
          <div key={index} style={styles.educationCard}>
            <h3>{edu.degree}</h3>
            <p style={styles.institution}>{edu.institution}</p>
            <p style={styles.year}>{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '50px 20px',
    textAlign: 'center'
  },
  educationList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    marginTop: '30px'
  },
  educationCard: {
    border: '1px solid #ddd',
    padding: '20px'
  },
  institution: {
    fontStyle: 'italic',
    margin: '5px 0'
  }
};