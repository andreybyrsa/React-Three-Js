import React, { useRef, useState } from 'react';

import Header from './components/Header/Header';
import IntroSection from './components/IntroSection/IntroSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import GameSection from './components/GameSection/GameSection';
import FooterSection from "./components/FooterSection/FooterSection";

import './App.css';

function App() {
  const page = useRef();
  const [pageHeight, setPageHeight] = useState(1);
  const [scrollHeight, setScrollHeight] = useState(0);
  window.addEventListener('scroll', () => {
    setPageHeight(page.current.scrollHeight - 1000);
    setScrollHeight(window.pageYOffset);
    console.log(pageHeight);
    console.log(scrollHeight);
  })
  return (
    <div ref={page} className="page-wrapper">
      <Header pageHeight={pageHeight} scrollHeight={scrollHeight}/>
      <IntroSection />
      <BenefitsSection />
      <GameSection />
      <FooterSection />
    </div>
  );
}

export default App;
