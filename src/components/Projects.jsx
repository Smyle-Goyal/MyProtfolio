import React, { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'drishti',
      title: 'DRISHTI',
      subtitle: 'Predictive Cyber-Fraud & Cash-Out Intelligence Platform',
      timeline: 'Sep 2026 – Present',
      categories: ['ai-ml', 'full-stack', 'security'],
      badge: 'Agentic AI & Graph Intelligence',
      icon: '🔍',
      tech: ['React', 'Spring Boot', 'Python', 'NLP', 'Machine Learning', 'Neo4j', 'RAG', 'Agentic AI'],
      summary: 'An end-to-end AI-powered cybercrime investigation platform connecting fragmented complaint, financial, identity, and location data to support cybercrime investigations and predict likely cash-out locations.',
      details: [
        {
          label: 'Problem:',
          value: 'Modern cyber-fraud syndicates rapidly move stolen funds across multi-layered bank accounts and mule networks, overwhelming law enforcement with fragmented evidence.'
        },
        {
          label: 'Solution:',
          value: 'Engineered an intelligence system integrating Neo4j knowledge graphs, automated NLP entity extraction, and Agentic AI to uncover hidden connections and flag cash-out vectors.'
        },
        {
          label: 'Key Features:',
          value: 'NLP-based entity extraction, connected evidence graph across accounts and transactions, tool-calling Agentic AI with RAG, and interactive profile & transaction timeline dashboard.'
        },
        {
          label: 'Technical Contribution:',
          value: 'Developed the graph-based intelligence layer in Neo4j, integrated RAG and Agentic AI for explainable contextual reasoning, and built full-stack dashboard modules in React and Spring Boot.'
        },
        {
          label: 'Outcome:',
          value: 'Evidence-backed investigation summaries with transparent reasoning paths, accelerating multi-case intelligence analysis from hours to seconds.'
        }
      ],
      github: 'https://github.com/Smyle'
    },
    {
      id: 'aura',
      title: 'AURA',
      subtitle: 'Autonomous Unified Research Assistant',
      timeline: 'May 2026',
      categories: ['ai-ml', 'full-stack'],
      badge: 'Agentic AI & Research Copilot',
      icon: '🧬',
      tech: ['Python', 'FastAPI', 'React', 'LangChain', 'LangGraph', 'Gemini API', 'Qdrant'],
      summary: 'An AI-powered research copilot designed to autonomously analyze academic papers, conduct comparative literature synthesis, and identify unaddressed research gaps.',
      details: [
        {
          label: 'Problem:',
          value: 'Manual literature review across dozens of dense research publications is slow, prone to oversight, and computationally challenging for standard LLMs.'
        },
        {
          label: 'Solution:',
          value: 'Architected an event-driven multi-agent platform using LangGraph to automate paper retrieval, multi-paper semantic comparison, and hypothesis generation.'
        },
        {
          label: 'Key Features:',
          value: 'RAG copilot, semantic search across methodologies and datasets, automated evidence retrieval workflows via LangGraph, and a citation-backed gap identification engine.'
        },
        {
          label: 'Technical Contribution:',
          value: 'Engineered the multi-agent state machines with LangGraph, built semantic vector search using Qdrant, and designed automated research synthesis pipelines.'
        },
        {
          label: 'Outcome:',
          value: 'Autonomous generation of structured gap analyses and comprehensive literature reviews with rigorous citation tracking.'
        }
      ],
      github: 'https://github.com/Smyle'
    },
    {
      id: 'concentria',
      title: 'Concentria',
      subtitle: 'Real-Time AI Phishing Detection System',
      timeline: 'June 2025',
      categories: ['ai-ml', 'security'],
      badge: 'Deep Learning & Browser Security',
      icon: '🛡️',
      tech: ['Python', 'TensorFlow', 'Node.js', 'MongoDB', 'Browser APIs'],
      summary: 'A browser-based security platform designed to detect malicious phishing websites and suspicious activities in real-time using deep learning and graph-based threat analysis.',
      details: [
        {
          label: 'Problem:',
          value: 'Static domain blacklists fail against zero-day phishing attacks that deploy disposable domains and obfuscated web forms.'
        },
        {
          label: 'Solution:',
          value: 'Built a client-side browser defense running deep neural networks that evaluate DOM structural properties, certificate metadata, and URL patterns on page load.'
        },
        {
          label: 'Key Features:',
          value: 'Real-time threat alerts with minimal latency, neural network classification, privacy-focused consent management, and a centralized monitoring dashboard.'
        },
        {
          label: 'Technical Contribution:',
          value: 'Trained and quantized the TensorFlow threat classification model and implemented browser extension listeners and backend tracking in Node.js.'
        },
        {
          label: 'Outcome:',
          value: 'Proactive detection of zero-day phishing attempts with low client CPU overhead and full user consent and privacy controls.'
        }
      ],
      github: 'https://github.com/Smyle'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.categories.includes(activeFilter));

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Showcase</span>
          <h2 className="section-title">Selected Projects</h2>
        </div>
        
        {/* Filtering Options */}
        <div className="projects-filter">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${activeFilter === 'ai-ml' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ai-ml')}
          >
            AI / Agentic AI
          </button>
          <button
            className={`filter-btn ${activeFilter === 'full-stack' ? 'active' : ''}`}
            onClick={() => setActiveFilter('full-stack')}
          >
            Full-Stack
          </button>
          <button
            className={`filter-btn ${activeFilter === 'security' ? 'active' : ''}`}
            onClick={() => setActiveFilter('security')}
          >
            Security
          </button>
        </div>

        <div className="projects-list">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-media">
                <div className="project-backdrop-glow"></div>
                <div className="project-media-content">
                  <div className="project-logo-circle">{project.icon}</div>
                  <span className="project-category-badge">{project.badge}</span>
                </div>
              </div>
              
              <div className="project-info">
                <div className="project-name-row">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-timeline">{project.timeline}</span>
                </div>
                
                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span className="tech-tag" key={idx}>{t}</span>
                  ))}
                </div>
                
                <div className="project-summary-box">
                  <p><strong>{project.subtitle}</strong> — {project.summary}</p>
                </div>
                
                <div className="project-details">
                  {project.details.map((detail, dIdx) => (
                    <div className="detail-item" key={dIdx}>
                      <span className="detail-label">{detail.label}</span>
                      <span className="detail-val">{detail.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                    GitHub Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
