import React from "react";

const Stats = () => {
  const stats = [
    { number: "76", label: "Player Level" },
    { number: "300%", label: "Gyro Sensitivity" },
    { number: "4K+", label: "Total Kills" },
    { number: "TOP 10", label: "Rank Tier" },
  ];

  return (
    <div className="stats-strip">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
