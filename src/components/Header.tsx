
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ConnectWalletButton from './ConnectWalletButton';
import { TrendingUp } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/10';
  };

  return (
    <header className="w-full py-6 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="rounded-full bg-defi-accent/20 p-2">
              <TrendingUp className="h-6 w-6 text-defi-accent" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight gradient-text">YieldMaster AI</h1>
              <p className="text-sm text-white/60">Optimize Your DeFi Yields on Aptos</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-1">
              <Link to="/" className={`nav-link ${isActive('/')}`}>Dashboard</Link>
              <Link to="/portfolio" className={`nav-link ${isActive('/portfolio')}`}>Portfolio</Link>
              <Link to="/market" className={`nav-link ${isActive('/market')}`}>Market</Link>
            </nav>
            <ConnectWalletButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
