import React from 'react';

export default function Education() {
  const educationItems = [
    {
      degree: 'Bachelor of Engineering in Computer Science Engineering (AI & ML)',
      institution: 'Chandigarh University, Mohali',
      location: 'Chandigarh, Punjab',
      duration: '2024 – 2028',
      score: 'Current CGPA: 8.51 / 10.0',
      details: 'Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Web Development, Operating Systems.'
    },
    {
      degree: 'Senior Secondary (Class XII - PCM)',
      institution: 'Guru Ram Dass Academy, Ludhiana',
      location: 'Ludhiana, Punjab',
      duration: 'Graduated May 2024',
      score: 'Percentage: 82.4%',
      details: 'Physics, Chemistry, and Mathematics stream.'
    },
    {
      degree: 'Secondary Education (Class X)',
      institution: 'Guru Ram Dass Academy, Ludhiana',
      location: 'Ludhiana, Punjab',
      duration: 'Graduated May 2022',
      score: 'Percentage: 94.6%',
      details: 'Foundational secondary school education with distinction.'
    }
  ];

  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Academic Background</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="timeline">
          {educationItems.map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{item.degree}</h3>
                    <span className="timeline-subtitle">{item.institution}</span>
                  </div>
                  <span className="timeline-date">{item.duration}</span>
                </div>
                <p className="timeline-desc">
                  <strong>{item.score}</strong>
                  <br />
                  <span style={{ display: 'block', marginTop: '0.4rem' }}>{item.details}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
