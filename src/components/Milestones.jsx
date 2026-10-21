import React from 'react';

export default function Milestones() {
  const milestones = [
    {
      title: '2× Smart India Hackathon (SIH) Internal Round Winner',
      organization: 'Chandigarh University',
      date: '2025 & 2026',
      description: 'Won the university-wide internal selection rounds for Smart India Hackathon consecutively for both 2025 and 2026 editions, designing and presenting innovative technical software solutions to senior panels.'
    },
    {
      title: 'Finalist – IBM National Hackathon 2026',
      organization: 'IBM India',
      date: '2026',
      description: 'Selected as a national finalist in the IBM National Hackathon 2026, building and pitching advanced AI solutions against top student engineering teams across the country.'
    },
    {
      title: 'Finalist – Zinnovatio 3.0',
      organization: 'National Level Hackathons',
      date: '2025',
      description: 'Reached the grand finals of Zinnovatio 3.0 and actively represented Chandigarh University across multiple national-tier competitive development hackathons.'
    },
    {
      title: 'Competitive Programming & Algorithmic Milestones',
      organization: 'LeetCode Platform',
      date: 'Continuous',
      description: 'Solved 350+ Data Structures & Algorithms (DSA) problems and attained an official contest rating of 1659 on LeetCode, with focused mastery over graphs, dynamic programming, and trees.'
    }
  ];

  const certifications = [
    {
      icon: '🤖',
      title: 'Agentic AI Course',
      issuer: 'Udemy',
      date: 'May 2026',
      description: 'Advanced mastery of LangGraph, LangChain, state graphs, multi-agent collaboration frameworks, and autonomous RAG systems.'
    },
    {
      icon: '🌐',
      title: 'Complete Web Development Bootcamp',
      issuer: 'Udemy',
      date: 'Jan 2026',
      description: 'Full-stack engineering certification covering modern React, Node.js, Express, RESTful APIs, databases, and deployment.'
    },
    {
      icon: '🧠',
      title: 'Foundations of AI and Machine Learning',
      issuer: 'Microsoft',
      date: 'March 2025',
      description: 'Comprehensive study of standard machine learning methodologies, computer vision, and neural network foundations.'
    }
  ];

  return (
    <section className="section" id="timeline">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Timeline</span>
          <h2 className="section-title">Milestones & Achievements</h2>
        </div>

        <div className="timeline">
          {milestones.map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <span className="timeline-subtitle">{item.organization}</span>
                  </div>
                  <span className="timeline-date">{item.date}</span>
                </div>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="section-header" style={{ marginTop: '5.5rem', marginBottom: '2.5rem' }}>
          <span className="section-subtitle">Credentials</span>
          <h3 style={{ fontSize: '1.75rem' }}>Certifications & Training</h3>
        </div>
        
        <div className="achievements-grid">
          {certifications.map((cert, idx) => (
            <div className="achievement-card" key={idx}>
              <div className="achievement-icon">{cert.icon}</div>
              <h4 className="achievement-title">{cert.title}</h4>
              <span className="achievement-subtitle">{cert.issuer} • {cert.date}</span>
              <p className="achievement-desc">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
