import React, { useEffect } from "react";

const IG_HANDLE = "ig_slaydevil_07";
const IG_URL = "https://www.instagram.com/ig_slaydevil_07/";

// Reel/Post cards — click opens Instagram profile
const reelCards = [
  { emoji: "🎮", label: "BGMI Clutch Reel",        desc: "1v4 clutch highlights",           color: "#9b36ea" },
  { emoji: "🔥", label: "Fire Gameplay Montage",   desc: "Best kills of the week",          color: "#f5a623" },
  { emoji: "⚡", label: "Gyroscope Master",         desc: "Gyro sensitivity showcase",       color: "#00e5ff" },
  { emoji: "💀", label: "Squad Wipe Compilation",  desc: "Full squad elimination plays",    color: "#ff2d78" },
  { emoji: "🏆", label: "Conqueror Push",           desc: "Ranked conqueror journey",        color: "#f5a623" },
  { emoji: "🕷️", label: "Spider-Man Event",         desc: "Spider-Man BGMI event gameplay",  color: "#9b36ea" },
];

const Instagram = () => {
  // Re-process any blockquote embeds when component mounts
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section id="instagram" className="ig-section">
      <div className="section-header">
        <p className="section-eyebrow">Follow & Watch Reels</p>
        <h2 className="section-title">📸 <span>Instagram</span></h2>
        <div className="section-divider" />
      </div>

      {/* ── Profile Banner ── */}
      <div className="ig-profile-banner">
        <div className="ig-profile-left">
          <div className="ig-avatar-ring">
            <div className="ig-avatar-inner">👿</div>
          </div>
          <div className="ig-profile-text">
            <h3>SlayDevil 👿</h3>
            <p className="ig-handle">@{IG_HANDLE}</p>
            <p className="ig-bio">BGMI Pro Player · Content Creator · 4-Finger Claw 🎮</p>
          </div>
        </div>
        <div className="ig-profile-stats">
          <div className="ig-stat">
            <span className="ig-stat-num">132</span>
            <span className="ig-stat-lbl">Posts</span>
          </div>
          <div className="ig-stat">
            <span className="ig-stat-num">306</span>
            <span className="ig-stat-lbl">Followers</span>
          </div>
          <div className="ig-stat">
            <span className="ig-stat-num">32</span>
            <span className="ig-stat-lbl">Following</span>
          </div>
        </div>
        <a
          href={IG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ig-follow-btn"
        >
          Follow on Instagram
        </a>
      </div>

      {/* ── Official Embedded Post (Instagram oEmbed) ── */}
      <div className="ig-embed-wrap">
        <div className="ig-embed-label">
          <span>📌 Latest from Instagram</span>
          <a href={IG_URL} target="_blank" rel="noopener noreferrer">View Profile →</a>
        </div>
        <div className="ig-embed-container">
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink={`https://www.instagram.com/${IG_HANDLE}/`}
            data-instgrm-version="14"
            style={{
              background: "#111122",
              border: "1px solid rgba(155,54,234,0.35)",
              borderRadius: "16px",
              maxWidth: "540px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <div style={{ padding: "16px" }}>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "linear-gradient(135deg,#f5a623,#9b36ea)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Orbitron,sans-serif",
                  fontWeight: 900,
                  fontSize: "1.2rem",
                  display: "block",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                @{IG_HANDLE} on Instagram →
              </a>
            </div>
          </blockquote>
        </div>
      </div>

      {/* ── Reels / Post Cards Grid ── */}
      <div className="ig-reels-label">
        <span>🎬 Reel Highlights</span>
        <a href={`${IG_URL}reels/`} target="_blank" rel="noopener noreferrer">See All Reels →</a>
      </div>
      <div className="ig-reels-grid">
        {reelCards.map((r, i) => (
          <a
            key={i}
            className="ig-reel-card"
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--reel-color": r.color }}
          >
            <div className="ig-reel-bg">
              <span className="ig-reel-emoji">{r.emoji}</span>
              <div className="ig-reel-play">▶</div>
            </div>
            <div className="ig-reel-info">
              <span className="ig-reel-title">{r.label}</span>
              <span className="ig-reel-desc">{r.desc}</span>
            </div>
          </a>
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <div className="ig-cta">
        <p>Watch all gameplay reels, highlights & behind-the-scenes on Instagram!</p>
        <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="ig-cta-btn">
          <span className="ig-cta-icon">📸</span>
          Follow @{IG_HANDLE}
        </a>
      </div>
    </section>
  );
};

export default Instagram;
