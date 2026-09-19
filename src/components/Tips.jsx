import React from "react";

const tips = [
  { icon: "🎯", title: "Always Use Gyroscope", desc: "Set Gyroscope to Always On at 300% TPP/FPP for lightning-fast micro-adjustments. It gives you a massive edge in close-range fights." },
  { icon: "🔭", title: "Scope Sensitivity", desc: "Keep 6x at 12% and 8x at 10% for stable long-range shots. Lower sensitivity on high magnification means accurate, controlled sprays." },
  { icon: "🖐️", title: "4-Finger Claw Setup", desc: "Use thumb, index, and both ring fingers to control movement, aim, shoot, and crouch simultaneously — the key to fast, smooth plays." },
  { icon: "⚡", title: "Aggressive Peeking", desc: "Use Scope On gyroscope mode for instant snap-peeking around corners. Keeps aim steady while maintaining top-speed movement." },
  { icon: "🧠", title: "Map Awareness", desc: "Always track the zone, know hot-drop locations, and use the minimap constantly. Game sense beats raw aim in most end-game scenarios." },
  { icon: "🎮", title: "Custom HUD Layout", desc: "Adjust HUD buttons to match your 4-finger claw style. Place Fire, Aim, Jump and Crouch in easy reach to minimize reaction time." },
];

const Tips = () => (
  <section id="tips">
    <div className="section-header">
      <p className="section-eyebrow">From The Pro</p>
      <h2 className="section-title">💡 Pro <span>Tips</span></h2>
      <div className="section-divider" />
    </div>
    <div className="tips-grid">
      {tips.map((t, i) => (
        <div className="tip-card" key={i}>
          <span className="tip-num">{String(i + 1).padStart(2, "0")}</span>
          <div className="tip-icon">{t.icon}</div>
          <h3>{t.title}</h3>
          <p>{t.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Tips;
