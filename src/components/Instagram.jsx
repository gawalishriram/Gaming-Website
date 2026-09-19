import React, { useState } from "react";

const IG_HANDLE = "ig_slaydevil_07";
const IG_PROFILE_URL = "https://www.instagram.com/ig_slaydevil_07/";
const IG_REELS_URL = "https://www.instagram.com/ig_slaydevil_07/reels/";

// Curated playable reel clips from SlayDevil
const reelItems = [
  {
    id: "wXneSawIPHM",
    title: "1v4 Intense Clutch Battle",
    desc: "Lightning reflex headshots and 1v4 squad clutch in tight zone.",
    tag: "1v4 CLUTCH",
    color: "#ff2d78",
    views: "28.4K",
  },
  {
    id: "kNWq33TqXC4",
    title: "Insane Reflexes & Spray Transfers",
    desc: "Unreal 300% gyroscope recoil control and instant flick shots.",
    tag: "GYRO SHOWCASE",
    color: "#00e5ff",
    views: "34.1K",
  },
  {
    id: "LBRSP97EdBk",
    title: "Realme GT 6T 60 FPS Domination",
    desc: "Buttery smooth aggressive rush gameplay on Realme GT 6T.",
    tag: "60 FPS RUSH",
    color: "#f5a623",
    views: "42.8K",
  },
  {
    id: "8d77WmOShIU",
    title: "Aggressive Plays & Squad Wipe",
    desc: "Pure aggression — wipe down entire enemy squads in seconds.",
    tag: "SQUAD WIPE",
    color: "#9b36ea",
    views: "19.6K",
  },
  {
    id: "VjARewM21qY",
    title: "BGMI Update 4.4 Event Clutch",
    desc: "Dominating new event mechanics with 4-finger claw mastery.",
    tag: "EVENT META",
    color: "#ff2d78",
    views: "25.3K",
  },
  {
    id: "2ZXI12uqrk8",
    title: "Spider-Man Brand New Day Action",
    desc: "Web swinging surprise attacks and aerial headshots.",
    tag: "EVENT HIGHLIGHT",
    color: "#00e5ff",
    views: "38.9K",
  },
];

const Instagram = () => {
  const [activeReel, setActiveReel] = useState(reelItems[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSelectReel = (item) => {
    setActiveReel(item);
    setIsPlaying(true);
    const playerEl = document.getElementById("reel-player-anchor");
    if (playerEl) {
      playerEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="instagram" className="ig-section">
      <div className="section-header">
        <p className="section-eyebrow">Watch Reels & Follow</p>
        <h2 className="section-title">📸 <span>Instagram Reels</span></h2>
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
            <p className="ig-bio">BGMI Creator · 4-Finger Claw · 300% Full Gyro 🎮</p>
          </div>
        </div>
        <div className="ig-profile-stats">
          <div className="ig-stat">
            <span className="ig-stat-num">132</span>
            <span className="ig-stat-lbl">Posts</span>
          </div>
          <div className="ig-stat">
            <span className="ig-stat-num">307</span>
            <span className="ig-stat-lbl">Followers</span>
          </div>
          <div className="ig-stat">
            <span className="ig-stat-num">32</span>
            <span className="ig-stat-lbl">Following</span>
          </div>
        </div>
        <a
          href={IG_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ig-follow-btn"
        >
          Follow on Instagram ↗
        </a>
      </div>

      {/* ── On-Site Interactive Reel Player ── */}
      <div id="reel-player-anchor" className="reel-showcase-container">
        <div className="reel-showcase-header">
          <div className="rsh-badge">
            <span className="dot-live" /> LIVE REEL PREVIEW
          </div>
          <a
            href={IG_REELS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rsh-redirect-link"
          >
            Watch on Instagram Reels ↗
          </a>
        </div>

        <div className="reel-player-card">
          <div className="reel-phone-frame">
            {isPlaying ? (
              <iframe
                key={activeReel.id}
                src={`https://www.youtube.com/embed/${activeReel.id}?autoplay=1&rel=0&modestbranding=1`}
                title={activeReel.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="reel-iframe"
              />
            ) : (
              <div
                className="reel-thumb-preview"
                onClick={() => setIsPlaying(true)}
                style={{
                  backgroundImage: `url(https://i.ytimg.com/vi/${activeReel.id}/hqdefault.jpg)`,
                }}
              >
                <div className="reel-overlay">
                  <div className="reel-play-icon">▶</div>
                  <p className="reel-tap-hint">Tap to Play Reel</p>
                </div>
              </div>
            )}

            {/* Reel floating badge & Instagram redirect button */}
            <div className="reel-meta-overlay">
              <span className="reel-tag-badge" style={{ borderColor: activeReel.color, color: activeReel.color }}>
                {activeReel.tag}
              </span>
              <h4 className="reel-current-title">{activeReel.title}</h4>
              <p className="reel-current-desc">{activeReel.desc}</p>
              <a
                href={IG_REELS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="reel-ig-direct-btn"
              >
                <span>📸</span> Open in Instagram Reels ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Reels Selection Grid ── */}
      <div className="ig-reels-label">
        <span>🎬 Select Reel to Play</span>
        <a href={IG_REELS_URL} target="_blank" rel="noopener noreferrer" className="see-more-link">
          See All 130+ Reels on Instagram →
        </a>
      </div>

      <div className="ig-reels-grid">
        {reelItems.map((r) => {
          const isCurrent = r.id === activeReel.id;
          return (
            <div
              key={r.id}
              className={`ig-reel-card ${isCurrent ? "ig-reel-card--active" : ""}`}
              onClick={() => handleSelectReel(r)}
              style={{ "--reel-color": r.color }}
            >
              <div className="ig-reel-bg">
                <img
                  src={`https://i.ytimg.com/vi/${r.id}/hqdefault.jpg`}
                  alt={r.title}
                  className="ig-reel-thumb"
                  loading="lazy"
                />
                <div className="ig-reel-overlay-card">
                  <div className="ig-reel-play-btn">
                    {isCurrent && isPlaying ? "⏸ PLAYING" : "▶ WATCH"}
                  </div>
                  <span className="ig-reel-views">👁️ {r.views}</span>
                </div>
              </div>
              <div className="ig-reel-info">
                <span className="ig-reel-badge" style={{ color: r.color, borderColor: r.color }}>
                  {r.tag}
                </span>
                <span className="ig-reel-title">{r.title}</span>
                <span className="ig-reel-desc">{r.desc}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Prominent "Want More Reels? Redirect to Instagram" Banner ── */}
      <div className="ig-more-reels-banner">
        <div className="imr-glow" />
        <div className="imr-content">
          <div className="imr-badge">🔥 130+ REELS AVAILABLE</div>
          <h3>Want to Watch More BGMI Reels?</h3>
          <p>
            Catch daily 1v4 clutches, gyroscope tips, squad wipes & behind-the-scenes clips posted regularly on Instagram!
          </p>
          <a
            href={IG_REELS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="imr-cta-btn"
          >
            <span className="imr-btn-icon">📸</span>
            Watch More Reels on Instagram (@{IG_HANDLE}) ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Instagram;

