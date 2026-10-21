import React from 'react';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Biography</span>
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="about-grid">
          <div className="about-content">
            <h3>Engineering Intelligent, Scalable & Secure Software Solutions</h3>
            <p className="about-text">
              I am a Computer Science Engineering undergraduate specializing in Artificial Intelligence and Machine Learning at Chandigarh University. With a strong theoretical and practical foundation in Data Structures & Algorithms, Object-Oriented Programming, and Database Management Systems, I focus on building resilient software architectures from backend pipelines to intuitive user interfaces.
            </p>
            <p className="about-text">
              My engineering experience spans developing end-to-end cyber-fraud intelligence platforms (Drishti) utilizing Neo4j graph networks and Agentic AI, building autonomous multi-agent research tools with LangGraph and RAG (AURA), and designing browser-based security systems with TensorFlow. I am driven to tackle challenging problems with secure, efficient, and clean code.
            </p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-num gradient-text">350+</span>
              <span className="stat-label">DSA Solved</span>
            </div>
            <div className="stat-card">
              <span className="stat-num gradient-text">1659</span>
              <span className="stat-label">LeetCode Rating</span>
            </div>
            <div className="stat-card">
              <span className="stat-num gradient-text">2×</span>
              <span className="stat-label">SIH Internal Winner</span>
            </div>
            <div className="stat-card">
              <span className="stat-num gradient-text">8.51</span>
              <span className="stat-label">Current CGPA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
