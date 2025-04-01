
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BarChart4, TrendingUp, Layers, Activity } from 'lucide-react';

const marketData = [
  {
    protocol: "Pancake Swap",
    yield: "11.3% APY",
    type: "DEX",
    tvl: "$1.2B",
    icon: <Layers className="h-5 w-5 text-[#D8A032]" />
  },
  {
    protocol: "Liquidswap",
    yield: "7.2% APY",
    type: "AMM",
    tvl: "$580M",
    icon: <Activity className="h-5 w-5 text-defi-accent" />
  },
  {
    protocol: "Tsunami Finance",
    yield: "8.5% APY",
    type: "Lending",
    tvl: "$320M",
    icon: <TrendingUp className="h-5 w-5 text-defi-success" />
  },
  {
    protocol: "Pontem Yield",
    yield: "9.1% APY",
    type: "Aggregator",
    tvl: "$450M",
    icon: <BarChart4 className="h-5 w-5 text-defi-warning" />
  }
];

const Market = () => {
  return (
    <div className="min-h-screen flex flex-col bg-defi-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-defi-accent/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-defi-success/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 flex-1">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center mt-4 md:mt-10">
            <div className="defi-card max-w-4xl w-full mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-1">Market Overview</h2>
                <p className="text-white/60">Top yield opportunities on Aptos DeFi protocols</p>
              </div>

              <div className="stats-grid mt-6">
                {marketData.map((protocol, index) => (
                  <div 
                    key={index} 
                    className="stat-item" 
                    style={{ "--delay": index + 1 } as React.CSSProperties}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-white/60">{protocol.protocol}</span>
                      <div className="p-1.5 rounded-full bg-white/5">
                        {protocol.icon}
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-2xl font-semibold text-white">{protocol.yield}</div>
                        <div className="text-xs text-white/60">{protocol.type}</div>
                        <div className="text-xs text-white/80">TVL: {protocol.tvl}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <button className="optimize-button flex items-center gap-2">
                  <span>Analyze Opportunities</span>
                </button>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Market;
