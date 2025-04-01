
import React from 'react';
import { TrendingUp, DollarSign, BarChart4, Shield } from 'lucide-react';

const stats = [
  {
    title: "Current Yield",
    value: "6.5%",
    change: "+0.5%",
    isPositive: true,
    icon: <TrendingUp className="h-5 w-5 text-defi-success" />,
    delay: 1
  },
  {
    title: "Portfolio Value",
    value: "$10,000",
    change: "+$320",
    isPositive: true,
    icon: <DollarSign className="h-5 w-5 text-defi-accent" />,
    delay: 2
  },
  {
    title: "Risk Level",
    value: "Low",
    info: "Volatility: 5.2%",
    icon: <Shield className="h-5 w-5 text-defi-success" />,
    delay: 3
  },
  {
    title: "Yield Opportunity",
    value: "High",
    info: "3 new protocols",
    icon: <BarChart4 className="h-5 w-5 text-defi-warning" />,
    delay: 4
  }
];

const StatsGrid: React.FC = () => {
  return (
    <div className="stats-grid mt-6">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="stat-item" 
          style={{ "--delay": stat.delay } as React.CSSProperties}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white/60">{stat.title}</span>
            <div className="p-1.5 rounded-full bg-white/5">{stat.icon}</div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-2xl font-semibold text-white">{stat.value}</div>
              {stat.change && (
                <div className={`text-xs ${stat.isPositive ? 'text-defi-success' : 'text-defi-error'}`}>
                  {stat.change} this week
                </div>
              )}
              {stat.info && (
                <div className="text-xs text-white/60">{stat.info}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
