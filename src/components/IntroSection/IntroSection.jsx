import React from 'react';

import './IntroSection.scss';

function IntroSection() {
  return (
    <div className="content-wrapper">
      <div className="page-intro">
        <div className="page-intro__3d-model"></div>
        <div className="page-intro__info">
          <div className="page-intro__info-title">
            <span style={{color: "#2f55d4"}}>BaccaratHelper</span> - веб расширение
          </div>
          <div className="page-intro__info-description">
            Веб расширение для игры в Baccarat с применением математического анализа.
          </div>
          <button className="page-intro__add-button">Добавить</button>
          <div className="page-intro__info-description">Для Chrome</div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
