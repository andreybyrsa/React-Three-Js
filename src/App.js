import React from 'react';

import Header from './components/Header/Header';
import IntroSection from './components/IntroSection/IntroSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import GameSection from './components/GameSection/GameSection';
import FooterSection from "./components/FooterSection/FooterSection";

import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <IntroSection />
      <BenefitsSection />
      <GameSection />
      <FooterSection />
    </div>
  );
}

export default App;
