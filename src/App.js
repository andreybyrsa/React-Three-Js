import React from 'react';

import Header from './components/Header/Header';
import IntroSection from './components/IntroSection/IntroSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';

import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <IntroSection />
      <BenefitsSection />
    </div>
  );
}

export default App;
