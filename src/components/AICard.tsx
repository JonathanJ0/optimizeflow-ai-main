
import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

// Array of AI suggestions for the optimize button
const aiSuggestions = [
  "Move 10% of assets to Aptos DEX for 8% APY with lower impermanent loss risk.",
  "Stake 5% in Liquidswap Protocol for 7.2% APY and boosted rewards for the next 30 days.",
  "Rebalance 15% of stablecoins to Pontem's yield aggregator for 9.1% APY.",
  "Leverage Tsunami Finance's new lending pool for 8.5% APY on your USDC holdings.",
  "Shift 20% to Pancake Swap on Aptos for 11.3% APY through their farm staking program."
];

const AICard: React.FC = () => {
  const [currentSuggestion, setCurrentSuggestion] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleOptimize = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSuggestion((prev) => (prev + 1) % aiSuggestions.length);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="ai-card mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '500ms' }}>
      <div className="flex items-center space-x-2 mb-3">
        <div className="ai-tag">
          <Sparkles className="h-3 w-3 mr-1" />
          <span>AI Suggestion</span>
        </div>
      </div>
      
      <div className="min-h-24">
        <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <h3 className="text-lg font-medium mb-2 text-white">Yield Optimization Strategy:</h3>
          <p className="text-white/80 mb-4">
            {aiSuggestions[currentSuggestion]}
          </p>
        </div>
      </div>
      
      <div className="flex justify-center mt-6">
        <button 
          onClick={handleOptimize} 
          className="optimize-button flex items-center gap-2"
        >
          <span>Optimize Now</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AICard;
