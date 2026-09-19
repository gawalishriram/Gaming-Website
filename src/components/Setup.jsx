import React from "react";

const Setup = () => {
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

        {/* Sensitivity Screenshots */}
        <div className="section-header">
          <p className="section-eyebrow">In-Game Configuration</p>
          <h3 className="section-title" style={{fontSize:"2rem"}}>Sensitivity <span>Settings</span></h3>
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
