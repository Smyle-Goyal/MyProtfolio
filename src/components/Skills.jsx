import React from 'react';

export default function Skills() {
  const categories = [
    {
      title: 'Programming Languages',
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6M12 2l-4 20"/>
        </svg>
      ),
      skills: [
        { name: 'Python', level: '95%' },
        { name: 'C++ / C', level: '90%' },
        { name: 'JavaScript', level: '88%' },
        { name: 'Java & SQL', level: '85%' },
      ],
    },
    {
      title: 'Web & APIs',
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      skills: [
        { name: 'React.js & Node.js', level: '92%' },
        { name: 'FastAPI & Express.js', level: '90%' },
        { name: 'REST APIs & WebSockets', level: '90%' },
        { name: 'Tailwind CSS', level: '88%' },
      ],
    },
    {
      title: 'AI & Agentic AI',
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <path d="M8 21h8M12 17v4"/>
        </svg>
      ),
      skills: [
        { name: 'LangGraph & LangChain', level: '92%' },
        { name: 'LLM Applications & RAG', level: '92%' },
        { name: 'Prompt Engineering', level: '95%' },
        { name: 'AI Agents & NLP Pipelines', level: '90%' },
      ],
    },
    {
      title: 'Databases & Tools',
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
        </svg>
      ),
      skills: [
        { name: 'Neo4j & Qdrant', level: '90%' },
        { name: 'SQL & PostgreSQL', level: '88%' },
        { name: 'MongoDB', level: '82%' },
        { name: 'Docker, GCP & Git', level: '85%' },
      ],
    },
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>
        
        <div className="skills-grid">
          {categories.map((cat, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-header">
                <div className="skill-icon">{cat.icon}</div>
                <h3 className="skill-title">{cat.title}</h3>
              </div>
              <div className="skill-list">
                {cat.skills.map((skill, sIdx) => (
                  <div className="skill-item" key={sIdx}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}</span>
                    </div>
                    <div className="skill-progress-bg">
                      <div
                        className="skill-progress-bar"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
