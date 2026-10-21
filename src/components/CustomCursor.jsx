import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    let currentPos = { x: -100, y: -100 };
    let currentTrail = { x: -100, y: -100 };
    let animId;

    const handleMouseMove = (e) => {
      currentPos = { x: e.clientX, y: e.clientY };
      setPosition(currentPos);

      const pctX = (e.clientX / window.innerWidth) * 100;
      const pctY = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${pctX}%`);
      document.documentElement.style.setProperty('--mouse-y', `${pctY}%`);
    };

    const animate = () => {
      currentTrail.x += (currentPos.x - currentTrail.x) * 0.15;
      currentTrail.y += (currentPos.y - currentTrail.y) * 0.15;
      setTrail({ x: currentTrail.x, y: currentTrail.y });
      animId = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, textarea, .project-card, .skill-card, .stat-card, .timeline-content, .hero-highlight-pill')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? '12px' : '8px',
          height: isHovered ? '12px' : '8px',
        }}
      />
      <div
        className="custom-cursor-circle"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          width: isHovered ? '56px' : '38px',
          height: isHovered ? '56px' : '38px',
          borderColor: isHovered ? 'rgba(6, 182, 212, 0.75)' : 'rgba(99, 102, 241, 0.4)',
        }}
      />
    </>
  );
}
