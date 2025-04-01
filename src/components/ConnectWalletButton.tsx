
import React, { useState } from 'react';
import { Wallet } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const ConnectWalletButton: React.FC = () => {
  const [connected, setConnected] = useState(false);
  const walletAddress = "0x123...abc";

  const handleConnect = () => {
    setConnected(true);
    toast({
      title: "Wallet Connected",
      description: `Successfully connected to ${walletAddress}`,
    });
  };

  return (
    <button 
      className="glass-button flex items-center gap-2 opacity-0 animate-fade-in" 
      style={{ animationDelay: '300ms' }}
      onClick={handleConnect}
    >
      <Wallet className="h-4 w-4" />
      <span>{connected ? walletAddress : "Connect Wallet"}</span>
    </button>
  );
};

export default ConnectWalletButton;
