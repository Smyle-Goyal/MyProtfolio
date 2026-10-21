import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: 'Sending message...' });

    setTimeout(() => {
      setStatus({
        state: 'success',
        message: `Thank you, ${formData.name}! Your message has been recorded. Smyle will get in touch with you shortly.`
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setStatus({ state: 'idle', message: '' });
      }, 5000);
    }, 1200);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-heading">Let's build something exceptional together.</h3>
            <p className="contact-desc">
              If you are a recruiter or engineering leader seeking a dedicated developer specialized in AI/ML, graph intelligence, and full-stack systems, feel free to reach out. I am open to discussing software engineering and AI internship or full-time opportunities.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <path d="M22 6l-10 7L2 6"/>
                  </svg>
                </div>
                <div className="contact-method-text">
                  <span className="contact-label">Email</span>
                  <a href="mailto:goyalsmyle08@gmail.com" className="contact-val">
                    goyalsmyle08@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-method-text">
                  <span className="contact-label">Phone</span>
                  <span className="contact-val">+91 8847352699</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-method-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-val">Chandigarh / Ludhiana, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Opportunity / Collaboration"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
                disabled={status.state === 'loading'}
              >
                {status.state === 'loading' ? 'Sending...' : 'Send Message'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
              
              {status.state === 'success' && (
                <div className="form-status success">
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
