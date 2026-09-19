import React, { useState } from "react";

const Setup = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section id="setup">
      <div className="section-header">
        <p className="section-eyebrow">Pro Player Configuration</p>
        <h2 className="section-title">⚙️ My <span>Setup</span></h2>
        <div className="section-divider" />
      </div>

      <div className="setup-inner">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-img-wrap">
            <img src="/images/profile.jpg" alt="SLAY シ DEVIL profile" />
          </div>
          <div className="profile-info">
            <div>
              <div className="profile-name">
                <span>SLAY シ DEVIL</span>
              </div>
              <span className="profile-rank">⭐ Unique Destiny</span>
            </div>
            <div className="profile-stats">
              <div className="pstat">
                <div className="pstat-val">76</div>
                <div className="pstat-lbl">Level</div>
              </div>
              <div className="pstat">
                <div className="pstat-val">Lv.5</div>
                <div className="pstat-lbl">Crew Rank</div>
              </div>
              <div className="pstat">
                <div className="pstat-val">4F</div>
                <div className="pstat-lbl">Claw Style</div>
              </div>
              <div className="pstat">
                <div className="pstat-val">Always</div>
                <div className="pstat-lbl">Gyroscope</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BGMI 4-Finger Claw Controls Layout ── */}
        <div className="section-header" style={{ marginTop: "3.5rem" }}>
          <p className="section-eyebrow">Battleground HUD Setup</p>
          <h3 className="section-title" style={{ fontSize: "2rem" }}>
            4-Finger Claw <span>Controls Layout</span>
          </h3>
          <div className="section-divider" />
        </div>

        <div className="controls-showcase">
          <div className="controls-header-bar">
            <div className="controls-tag-badge">
              <span className="dot-live" /> Classic Mode TPP · Layout 1
            </div>
            <div className="controls-claw-badge">
              🖐️ 4-Finger Claw · Master HUD
            </div>
          </div>

          <div
            className="controls-img-wrap"
            onClick={() => setLightboxOpen(true)}
            title="Click to zoom controls layout"
          >
            <img
              src="/images/controls.jpg"
              alt="SLAYDEVIL BGMI 4-Finger Claw Controls HUD Layout"
              className="controls-img"
              loading="lazy"
            />
            <div className="controls-overlay-hint">
              <span>🔍 Click to View Fullscreen / Enlarge HUD</span>
            </div>
          </div>

          <div className="controls-breakdown-grid">
            <div className="cb-card left-hand">
              <div className="cb-icon">👈</div>
              <div>
                <h4>Left Hand (Movement & Fire)</h4>
                <ul>
                  <li><strong>Index Finger:</strong> Primary Left Fire Button (Top-Left)</li>
                  <li><strong>Thumb:</strong> Joystick, Sprint Lock, Backpack & Meds</li>
                </ul>
              </div>
            </div>

            <div className="cb-card right-hand">
              <div className="cb-icon">👉</div>
              <div>
                <h4>Right Hand (Aim, ADS & Action)</h4>
                <ul>
                  <li><strong>Index Finger:</strong> Scope (ADS), Left/Right Lean (Peek)</li>
                  <li><strong>Thumb:</strong> Crouch, Prone, Jump, Reload & FPP Switch</li>
                </ul>
              </div>
            </div>

            <div className="cb-card gyro-card">
              <div className="cb-icon">⚡</div>
              <div>
                <h4>Full Gyroscope Integration</h4>
                <p>
                  300% Always On Gyro for instant target tracking, lightning recoil control, and seamless 1v4 spray transfers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls Lightbox Modal */}
        {lightboxOpen && (
          <div className="controls-modal-backdrop" onClick={() => setLightboxOpen(false)}>
            <div className="controls-modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="controls-modal-close"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
              <div className="controls-modal-header">
                <h3>🎮 BGMI Controls Layout (Classic Mode TPP - Layout 1)</h3>
                <p>4-Finger Claw Setup by SLAYDEVIL</p>
              </div>
              <div className="controls-modal-img-wrap">
                <img
                  src="/images/controls.jpg"
                  alt="SLAYDEVIL BGMI Controls Fullscreen"
                  className="controls-modal-img"
                />
              </div>
            </div>
          </div>
        )}

        {/* Sensitivity Screenshots */}
        <div className="section-header" style={{ marginTop: "4rem" }}>
          <p className="section-eyebrow">In-Game Configuration</p>
          <h3 className="section-title" style={{ fontSize: "2rem" }}>
            Sensitivity <span>Settings</span>
          </h3>
          <div className="section-divider" />
        </div>

        <div className="sens-grid">
          <div className="sens-card">
            <img src="/images/sensitivity1.jpg" alt="Camera Sensitivity Free Look" />
            <div className="sens-card-footer">
              <span className="sens-card-label">Camera Sensitivity (Free Look)</span>
              <span className="sens-badge cam">Camera</span>
            </div>
          </div>
          <div className="sens-card">
            <img src="/images/gyroscope.jpg" alt="Gyroscope Sensitivity" />
            <div className="sens-card-footer">
              <span className="sens-card-label">Gyroscope — Always On</span>
              <span className="sens-badge gyro">Gyro</span>
            </div>
          </div>
          <div className="sens-card">
            <img src="/images/lens1.jpg" alt="Lens Camera Sensitivity" />
            <div className="sens-card-footer">
              <span className="sens-card-label">Camera Sensitivity (Lens)</span>
              <span className="sens-badge lens">Lens</span>
            </div>
          </div>
          <div className="sens-card">
            <img src="/images/lens2.jpg" alt="Advanced Sensitivity" />
            <div className="sens-card-footer">
              <span className="sens-card-label">Camera Sensitivity (Advanced)</span>
              <span className="sens-badge lens">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Setup;
