import React, { useState } from "react";
import { FaYoutube, FaPlay } from "react-icons/fa";

const YT_CHANNEL = "https://www.youtube.com/@slaydevil80";

const videos = [
  {
    id: "wXneSawIPHM",
    title: "Fight Against Uzu Gamer",
    desc: "An epic showdown — watch SlayDevil go head-to-head in an intense clutch battle.",
    tag: "FEATURED",
    tagColor: "gold",
  },
  {
    id: "LBRSP97EdBk",
    title: "Realme GT 6T 60 FPS Gameplay",
    desc: "Buttery smooth 60 FPS gameplay on the Realme GT 6T — insane performance.",
    tag: "GAMEPLAY",
    tagColor: "purple",
  },
  {
    id: "8d77WmOShIU",
    title: "Realme GT 6T 60 FPS Gameplay #2",
    desc: "More 60 FPS action — aggressive plays and insane reflexes on display.",
    tag: "GAMEPLAY",
    tagColor: "purple",
  },
  {
    id: "kNWq33TqXC4",
    title: "Ultimate Clutches & Gameplay",
    desc: "The most clutch moments ever recorded — 1v4s, headshots, and nerves of steel.",
    tag: "CLUTCH",
    tagColor: "cyan",
  },
  {
    id: "VjARewM21qY",
    title: "BGMI Update 4.4 Gameplay",
    desc: "First look at the 4.4 update — new mechanics, new meta, same deadly SlayDevil.",
    tag: "UPDATE",
    tagColor: "pink",
  },
  {
    id: "2ZXI12uqrk8",
    title: "Spider-Man Brand New Day Event",
    desc: "Swinging into the Spider-Man BGMI event — exclusive event gameplay highlights.",
    tag: "EVENT",
    tagColor: "cyan",
  },
];

const tagStyles = {
  gold:   { bg: "rgba(245,166,35,0.12)",  border: "rgba(245,166,35,0.4)",  color: "#f5a623" },
  purple: { bg: "rgba(155,54,234,0.12)",  border: "rgba(155,54,234,0.4)",  color: "#9b36ea" },
  cyan:   { bg: "rgba(0,229,255,0.12)",   border: "rgba(0,229,255,0.4)",   color: "#00e5ff" },
  pink:   { bg: "rgba(255,45,120,0.12)",  border: "rgba(255,45,120,0.4)",  color: "#ff2d78" },
};

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [playMain, setPlayMain] = useState(false);

  const handleCardClick = (v) => {
    setActiveVideo(v);
    setPlayMain(false);
    // Smooth scroll to top of section
    document.getElementById("videos").scrollIntoView({ behavior: "smooth" });
  };

  const ts = tagStyles[activeVideo.tagColor] || tagStyles.purple;

  return (
    <section id="videos">
      <div className="section-header">
        <p className="section-eyebrow">@slaydevil80 on YouTube</p>
        <h2 className="section-title">🎮 Watch My <span>Videos</span></h2>
        <div className="section-divider" />
      </div>

      <div className="videos-inner">

        {/* === MAIN FEATURED PLAYER === */}
        <div className="video-main">
          {playMain ? (
            <iframe
              key={activeVideo.id}
              src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div
              className="video-thumb-preview"
              onClick={() => setPlayMain(true)}
              style={{
                backgroundImage: `url(https://i.ytimg.com/vi/${activeVideo.id}/hqdefault.jpg)`,
              }}
            >
              <div className="vtp-overlay">
                <div className="vtp-play-btn"><FaPlay /></div>
                <p className="vtp-hint">Click to Play</p>
              </div>
            </div>
          )}
          <div className="video-caption">
            <div>
              <h3>{activeVideo.title}</h3>
              <p>{activeVideo.desc}</p>
            </div>
            <div style={{ display: "flex", gap: "0.7rem", alignItems: "center", flexWrap: "wrap" }}>
              <span
                className="video-tag"
                style={{
                  background: ts.bg,
                  border: `1px solid ${ts.border}`,
                  color: ts.color,
                }}
              >
                {activeVideo.tag}
              </span>
              <a
                href={`https://www.youtube.com/watch?v=${activeVideo.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="yt-open-btn"
              >
                ↗ Open on YouTube
              </a>
            </div>
          </div>
        </div>

        {/* === VIDEO CARDS GRID === */}
        <div className="vc-grid">
          {videos.map((v) => {
            const style = tagStyles[v.tagColor] || tagStyles.purple;
            const isActive = v.id === activeVideo.id;
            return (
              <div
                key={v.id}
                className={`vc-card ${isActive ? "vc-card--active" : ""}`}
                onClick={() => handleCardClick(v)}
              >
                <div className="vc-thumb-wrap">
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    className="vc-thumb"
                    loading="lazy"
                  />
                  <div className="vc-play-btn">
                    {isActive ? "▶ NOW PLAYING" : "▶"}
                  </div>
                </div>
                <div className="vc-info">
                  <span
                    className="vc-tag"
                    style={{
                      background: style.bg,
                      border: `1px solid ${style.border}`,
                      color: style.color,
                    }}
                  >
                    {v.tag}
                  </span>
                  <h3 className="vc-title">{v.title}</h3>
                  <p className="vc-desc">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* === CHANNEL CTA === */}
        <div className="yt-cta-block">
          <div className="yt-channel-info">
            <div className="yt-avatar">🎮</div>
            <div>
              <h3>SLAYDEVIL</h3>
              <p>@slaydevil80 · BGMI Pro Player · Content Creator · {videos.length} videos on site</p>
            </div>
          </div>
          <a
            href={YT_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="yt-subscribe-btn"
          >
            <span><FaYoutube /></span> View Full Channel & Subscribe
          </a>
        </div>

      </div>
    </section>
  );
};

export default Videos;
