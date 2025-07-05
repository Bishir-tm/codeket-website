import React from "react";

const stats = [
  { value: "100%", label: "Client Satisfaction", icon: "🌟" },
  { value: "< 1 Week", label: "Average Onboarding Time", icon: "⏱️" },
  { value: "3", label: "Core Products", icon: "📦" },
  { value: "50+", label: "Businesses Served", icon: "🏢" },
];

const Stats = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
        {stats.map((stat, index) => (
          <div key={index} className="stat place-items-center">
            <div className="stat-figure text-primary">
              <div className="text-5xl">{stat.icon}</div>
            </div>
            <div className="stat-value text-primary">{stat.value}</div>
            <div className="stat-title">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
