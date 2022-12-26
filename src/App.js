import React, { useRef, useState } from 'react';

import Header from './components/Header/Header';
import IntroSection from './components/IntroSection/IntroSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import GameRules from './components/GameRules/GameRules';
import GameSection from './components/GameSection/GameSection';
import FooterSection from './components/FooterSection/FooterSection';

import './App.css';

function App() {
  const page = useRef();
  const [pageHeight, setPageHeight] = useState(1);
  const [scrollHeight, setScrollHeight] = useState(0);
  window.addEventListener('scroll', () => {
    setPageHeight(page.current.clientHeight - 900);
    setScrollHeight(window.scrollY);
  })
  return (
    <div ref={page} className="page-wrapper">
      <Header pageHeight={pageHeight} scrollHeight={scrollHeight}/>
      <IntroSection />
      <BenefitsSection />
      <GameRules />
      <GameSection />
      <FooterSection />
    </div>
  );
}

export default App;
