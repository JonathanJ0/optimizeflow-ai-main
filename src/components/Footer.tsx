
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 py-6 opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/60">
            Built for the Move AI Hackathon
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://aptosfoundation.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Aptos Foundation
            </a>
            <a 
              href="https://aptos.dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Move AI Agent Kit
            </a>
            <a 
              href="https://aptos.dev/docs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Aptos Dev Docs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
