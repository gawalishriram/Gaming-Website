import React from "react";

const particles = Array.from({ length: 18 }, (_, i) => ({
  left: `${Math.random() * 100}%`,
  dur: `${4 + Math.random() * 6}s`,
  delay: `${Math.random() * 5}s`,
  color: i % 3 === 0 ? "#f5a623" : i % 3 === 1 ? "#9b36ea" : "#00e5ff",
  size: `${2 + Math.random() * 4}px`,
}));

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Floating Particles */}
      <div className="hero-particles">
        {particles.map((p, i) => (
          <span
            key={i}
            style={{
              left: p.left,
              bottom: 0,
              "--dur": p.dur,
              "--delay": p.delay,
              background: p.color,
              width: p.size,
              height: p.size,
              boxShadow: `0 0 8px ${p.color}`,
            }}
          />
        ))}
      </div>

      <div className="hero-badge">🎮 BGMI Pro Player · Content Creator</div>

      <h1>
        <span className="name-white">SLAY </span>
        <span className="name-gold">シ DEVIL</span>
      </h1>

      <p className="hero-tagline">
        Level 76 &nbsp;·&nbsp; Unique Destiny &nbsp;·&nbsp; Conqueror &nbsp;·&nbsp; 4-Finger Claw
      </p>

      <p className="hero-desc">
        Welcome to the official hub. Watch intense BGMI gameplay, copy the pro sensitivity setup, and follow the journey on YouTube & Instagram.
      </p>

      <div className="hero-btns">
        <a href="#videos"    className="btn-primary">🎬 Watch Gameplay</a>
        <a href="#instagram" className="btn-outline">📸 Follow on Instagram</a>
      </div>

      <div className="scroll-hint">Scroll Down</div>
    </section>
  );
};

export default Hero;
