
import React from 'react';
import StatsGrid from './StatsGrid';
import AICard from './AICard';

const DashboardCard: React.FC = () => {
  return (
    <div className="defi-card max-w-4xl w-full mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-1">Your Yield Overview</h2>
        <p className="text-white/60">AI-driven insights for maximizing your DeFi returns</p>
      </div>

      <StatsGrid />
      <AICard />
    </div>
  );
};

export default DashboardCard;
