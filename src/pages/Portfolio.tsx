
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DollarSign, Wallet } from 'lucide-react';

const portfolioData = [
  {
    asset: "APT",
    amount: 500,
    value: "$5,000",
    change: "+2.5%",
    isPositive: true
  },
  {
    asset: "USDC",
    amount: 5000,
    value: "$5,000",
    change: "0%",
    isPositive: true
  },
  {
    asset: "CAKE",
    amount: 100,
    value: "$200",
    change: "-1.2%",
    isPositive: false
  },
  {
    asset: "MOVE",
    amount: 50,
    value: "$150",
    change: "+5.3%",
    isPositive: true
  }
];

const Portfolio = () => {
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
                <h2 className="text-2xl font-bold text-white mb-1">Your Portfolio</h2>
                <p className="text-white/60">Track your assets and performance on Aptos</p>
              </div>

              <div className="stats-grid mt-6">
                {portfolioData.map((asset, index) => (
                  <div 
                    key={index} 
                    className="stat-item" 
                    style={{ "--delay": index + 1 } as React.CSSProperties}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-white/60">{asset.asset}</span>
                      <div className="p-1.5 rounded-full bg-white/5">
                        {asset.asset === 'APT' ? (
                          <Wallet className="h-5 w-5 text-defi-accent" />
                        ) : (
                          <DollarSign className="h-5 w-5 text-defi-success" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-2xl font-semibold text-white">{asset.amount} {asset.asset}</div>
                        <div className="text-base text-white/80">{asset.value}</div>
                        <div className={`text-xs ${asset.isPositive ? 'text-defi-success' : 'text-defi-error'}`}>
                          {asset.change} this week
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <button className="optimize-button flex items-center gap-2">
                  <span>Rebalance Portfolio</span>
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

export default Portfolio;
