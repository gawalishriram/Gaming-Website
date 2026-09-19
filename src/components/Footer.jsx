import React from "react";

const Footer = () => (
  <footer id="socials" className="footer">
    <div className="footer-inner">
      <div className="footer-logo">SLAY シ DEVIL</div>
      <p className="footer-tagline">BGMI Pro Player · Content Creator · Level 76</p>

      <div className="social-cards">
        <a
          className="social-card instagram"
          href="https://www.instagram.com/ig_slaydevil_07/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="social-icon">📸</span>
          @ig_slaydevil_07
        </a>
        <a
          className="social-card youtube"
          href="https://www.youtube.com/@slaydevil80"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="social-icon">▶</span>
          @slaydevil80
        </a>
        <a
          className="social-card discord"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="social-icon">💬</span>
          Join Discord
        </a>
      </div>

      <div className="footer-divider" />
      <p className="footer-copy">
        © {new Date().getFullYear()} SLAY シ DEVIL. All rights reserved. &nbsp;|&nbsp; Made for the battleground. 🎮
      </p>
    </div>
  </footer>
);

export default Footer;
