import React from 'react';

import './GameSection.scss';

function GameSection() {
  return (
    <div className="game-content-wrapper">
      <div className="game-section">

        <div className="game-section__game-content">
          <div className="game-section__game-3d-model"></div>
          <div className="game-section__game-info">
            <div className="game-section__title">Демо-режим</div>
            <div className="game-section__description">
              Вы можете испытать наше расширение в демо-режиме.
              Сделайте предположение и нажмите на одну из кнопок:
            </div>
            <div className="game-section__game-controls">
              <button className="game-section__game-button">Player</button>
              <button className="game-section__game-button">Banker</button>
            </div>
          </div>
        </div>

        <div className="game-section__game-results"></div>

      </div>
    </div>
  );
}

export default GameSection;
