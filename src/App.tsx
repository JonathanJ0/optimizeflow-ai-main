import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletProvider } from '@aptos-labs/wallet-adapter-react';
import { PetraWallet } from "petra-plugin-wallet-adapter"; // Example wallet
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Market from "./pages/Market";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Configure supported wallets
const wallets = [new PetraWallet()]; // Add more wallets (e.g., Martian) if needed

const App = () => (
  <WalletProvider wallets={walts} autoConnect={false}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/market" element={<Market />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </WalletProvider>
);

export default App;