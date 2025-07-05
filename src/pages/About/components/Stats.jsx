import React from "react";
import { stats } from "../../../utils/stats";

const Stats = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Codeket by the Numbers</h2>
        <p className="text-lg max-w-2xl mx-auto text-base-content/80">
          Our achievements reflect our dedication to excellence and client success.
        </p>
      </div>

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
