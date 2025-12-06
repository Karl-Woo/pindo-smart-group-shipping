import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import UserFeatures from './components/UserFeatures';
import HowItWorks from './components/HowItWorks';
import MerchantFeatures from './components/MerchantFeatures';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <UserFeatures />
        <HowItWorks />
        <MerchantFeatures />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;