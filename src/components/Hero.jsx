import React, { useState } from "react";
import { FaPlayCircle, FaCog, FaInstagram } from "react-icons/fa";

const particles = Array.from({ length: 18 }, (_, i) => ({
  left: `${Math.random() * 100}%`,
  dur: `${4 + Math.random() * 6}s`,
  delay: `${Math.random() * 5}s`,
  color: i % 3 === 0 ? "#f5a623" : i % 3 === 1 ? "#9b36ea" : "#00e5ff",
  size: `${2 + Math.random() * 4}px`,
}));

const BGMI_ID = "5320842209";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(BGMI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

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

      {/* BGMI Character ID Badge & Copy Action */}
      <div className="hero-bgmi-id-card">
        <span className="hbi-label">🎮 BGMI ID:</span>
        <span className="hbi-num">{BGMI_ID}</span>
        <button
          className={`hbi-copy-btn ${copied ? "hbi-copy-btn--copied" : ""}`}
          onClick={handleCopyId}
          title="Click to copy BGMI ID for friend request"
        >
          {copied ? "✅ ID Copied!" : "📋 Copy ID"}
        </button>
      </div>

      <p className="hero-desc">
        Welcome to the official hub. Send a friend request in BGMI, watch intense gameplay, copy the pro sensitivity setup, and follow on socials.
      </p>

      <div className="hero-btns">
        <a href="#videos"    className="btn-primary"><FaPlayCircle /> Watch Gameplay</a>
        <a href="#setup"     className="btn-outline"><FaCog /> View Controls & Sens</a>
        <a href="#instagram" className="btn-outline"><FaInstagram /> Instagram Reels</a>
      </div>

      <div className="scroll-hint">Scroll Down</div>
    </section>
  );
};

export default Hero;
