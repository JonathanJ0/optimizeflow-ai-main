
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardCard from '../components/DashboardCard';

const Index = () => {
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
            <DashboardCard />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
