import React, { useState, useRef } from 'react';

export default function GlassCard({
  children,
  className = "",
  glowColor = "emerald", // 'emerald' | 'cyan' | 'purple'
  tiltDegree = 12,
  onClick
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -tiltDegree;
    const rotateY = ((x - centerX) / centerX) * tiltDegree;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTransform({ rotateX, rotateY, glareX, glareY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  const glowStyles = {
    emerald: "hover:border-emerald-500/40 hover:shadow-[0_15px_35px_rgba(16,185,129,0.18)]",
    cyan: "hover:border-cyan-500/40 hover:shadow-[0_15px_35px_rgba(6,182,212,0.18)]",
    purple: "hover:border-purple-500/40 hover:shadow-[0_15px_35px_rgba(168,85,247,0.18)]",
  }[glowColor] || "hover:border-emerald-500/40";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className={`relative rounded-2xl glass-card transition-all overflow-hidden ${glowStyles} ${className}`}
    >
      {/* Glare effect */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(circle at ${transform.glareX}% ${transform.glareY}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}
