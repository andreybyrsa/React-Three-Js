import React from 'react';

import './IntroSection.scss';

function IntroSection() {
  return (
    <div className="content-wrapper">
      <div className="intro-section">
        <div className="intro-section__3d-model"></div>
        <div className="intro-section__info">
          <div className="intro-section__info-title">
            <span style={{color: "#2f55d4"}}>BaccaratHelper</span> - веб расширение
          </div>
          <div className="intro-section__info-description">
            Веб расширение для игры в Baccarat с применением математического анализа.
          </div>
          <button className="intro-section__add-button">Добавить</button>
          <div className="intro-section__info-description">Для Chrome</div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
