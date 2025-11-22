import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <style>{`
        * {
          scrollbar-width: thin;
          scrollbar-color: #00d4ff #1a1a2e;
        }
        
        *::-webkit-scrollbar {
          width: 8px;
        }
        
        *::-webkit-scrollbar-track {
          background: #1a1a2e;
        }
        
        *::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00d4ff 0%, #b537f2 100%);
          border-radius: 4px;
        }
        
        *::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #00b8e6 0%, #9d2dd4 100%);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
      
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
}
