document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Page Loader
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
    }, 400); // Small delay to guarantee visual render
  });

  // 2. Custom Cursor Trad('cursor-dot');
  const cursorCircle = document.getElementById('cursor-circle');
  let mouseX = 0, mouseY = 0;
  let circleX = 0, circleY = 0;
  
  // Check if device supports hover events (not touch)
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (!isTouchDevice) {
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update custom variables for background spotlight glow tracking
      const pctX = (e.clientX / window.innerWidth) * 100;
      const pctY = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${pctX}%`);
      document.documentElement.style.setProperty('--mouse-y', `${pctY}%`);
      
      // Instantly position the dot
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    // Animate the circle trailing behind (lerp interpolation)
    const animateCircle = () => {
      const ease = 0.15;
      circleX += (mouseX - circleX) * ease;
      circleY += (mouseY - circleY) * ease;
      
      cursorCircle.style.left = `${circleX}px`;
      cursorCircle.style.top = `${circleY}px`;
      
      requestAnimationFrame(animateCircle);
    };
    animateCircle();

    // Hover scale effects on interactive elements
    const hoverables = document.querySelectorAll('a, button, input, textarea, .project-card, .skill-card, .stat-card, .timeline-content');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorDot.style.width = '12px';
        cursorDot.style.height = '12px';
        cursorDot.style.backgroundColor = 'var(--accent-cyan)';
        cursorCircle.style.width = '60px';
        cursorCircle.style.height = '60px';
        cursorCircle.style.borderColor = 'rgba(6, 182, 212, 0.8)';
      });
      el.addEventListener('mouseleave', () => {
        cursorDot.style.width = '8px';
        cursorDot.style.height = '8px';
        cursorDot.style.backgroundColor = 'var(--accent-cyan)';
        cursorCircle.style.width = '40px';
        cursorCircle.style.height = '40px';
        cursorCircle.style.borderColor = 'rgba(99, 102, 241, 0.4)';
      });
    });
  } else {
    // Hide cursor elements on mobile/tablet
    if (cursorDot) cursorDot.style.display = 'none';
    if (cursorCircle) cursorCircle.style.display = 'none';
  }

  // 3. Dynamic Canvas Favicon Generator (Initials SG)
  const generateFavicon = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    // Draw background rounded box
    const grad = ctx.createLinearGradient(0, 0, 64, 64);
    grad.addColorStop(0, '#6366F1'); // Indigo
    grad.addColorStop(1, '#3B82F6'); // Blue
    ctx.fillStyle = grad;
    
    // Rounded rectangle function
    ctx.beginPath();
    ctx.roundRect(0, 0, 64, 64, 16);
    ctx.fill();

    // Draw initials
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 30px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('SG', 32, 32);

    // Set page favicon
    const link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = canvas.toDataURL('image/png');
    document.getElementsByTagName('head')[0].appendChild(link);
  };
  generateFavicon();

  // 4. Mobile Navigation Menu Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // 5. Scroll Progress Bar
  const progressBar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const scrollPercent = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    }
  });

  // 6. Intersection Observer for Scroll Reveal & Skill Progress Activation
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Trigger skill progress animations inside card if it's active
        const progressBars = entry.target.querySelectorAll('.skill-progress-bar');
        if (progressBars.length > 0) {
          progressBars.forEach(bar => {
            const percent = bar.getAttribute('data-percent');
            bar.style.width = percent;
          });
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(reveal => {
    revealObserver.observe(reveal);
  });

  // 7. Project Category Filtering Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active button style
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'grid';
          // Force a reflow to trigger CSS animations smoothly
          void card.offsetWidth;
          card.style.opacity = '1';
          card.style.transform = 'translateY(0) scale(1)';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.98)';
          // Delay display-none until the opacity transition finishes
          setTimeout(() => {
            if (btn.getAttribute('data-filter') !== 'all' && !categories.includes(btn.getAttribute('data-filter'))) {
              card.style.display = 'none';
            }
          }, 400);
        }
      });
    });
  });

  // 8. Back To Top Visibility & Action
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 9. Contact Form Simulation/Feedback
  const contactForm = document.getElementById('portfolio-contact-form');
  const formStatus = document.getElementById('form-status');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Mimic API submit process
    formStatus.style.display = 'block';
    formStatus.className = 'form-status';
    formStatus.textContent = 'Sending message...';
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    
    setTimeout(() => {
      formStatus.className = 'form-status success';
      formStatus.textContent = `Thank you, ${document.getElementById('name').value}! Your message has been sent successfully. Smyle will get in touch with you shortly.`;
      
      // Reset form
      contactForm.reset();
      submitBtn.disabled = false;
      
      // Fade status message out after 5 seconds
      setTimeout(() => {
        formStatus.style.display = 'none';
      }, 5000);
    }, 1500);
  });

  // 10. Print Resume Action
  const downloadResumeBtn = document.getElementById('download-resume-btn');
  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  }
});
