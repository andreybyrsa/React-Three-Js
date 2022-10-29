import React from 'react';

import Header from './components/Header/Header';
import IntroSection from './components/IntroSection/IntroSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import GameSection from './components/GameSection/GameSection';

import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <IntroSection />
      <BenefitsSection />
      <GameSection />
    </div>
  );
}

export default App;
