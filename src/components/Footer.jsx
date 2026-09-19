import React, { useState } from "react";

const BGMI_ID = "5320842209";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(BGMI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer id="socials" className="footer">
      <div className="footer-inner">
        <div className="footer-logo">SLAY シ DEVIL</div>
        <p className="footer-tagline">
          BGMI Pro Player · Level 76 · Character ID: <strong>{BGMI_ID}</strong>
        </p>

        {/* Footer BGMI ID Card */}
        <div className="footer-bgmi-card">
          <span>🎮 Send Friend Request in BGMI: <strong>{BGMI_ID}</strong></span>
          <button
            className={`footer-copy-btn ${copied ? "footer-copy-btn--copied" : ""}`}
            onClick={handleCopyId}
          >
            {copied ? "✅ ID Copied!" : "📋 Copy BGMI ID"}
          </button>
        </div>

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
            href="https://www.youtube.com/@slaydevil80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon">🎮</span>
            Slay Army
          </a>
        </div>

        <div className="footer-divider" />
        <p className="footer-copy">
          © {new Date().getFullYear()} SLAY シ DEVIL. All rights reserved. &nbsp;|&nbsp; BGMI Character ID: {BGMI_ID} 🎮
        </p>
      </div>
    </footer>
  );
};

export default Footer;
