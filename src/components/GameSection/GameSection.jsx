import React, { useEffect, useRef, useState } from 'react';
import GameModel from '../GameModel/GameModel';

import './GameSection.scss';

function GameSection() {

  const [results, setResults] = useState([]);
  const resultsRef = useRef();
  resultsRef.current = results;

  useEffect(() => {
    const resultsArray = [];
    for (let i = 0; i < 50; i++ ) {
      const randomValue = Math.floor(Math.random() * 2) + 1;
      resultsArray.push(randomValue);
    }
    setResults(resultsArray);
  }, []);

  useEffect(() => {
    const currentArray = resultsRef.current;
    let column = 1;

    let result = document.createElement('div');
    result.innerHTML = '⬤';
    result.className = (currentArray[0] === 1) ? 'circle-1' : 'circle-2';
    if (currentArray.length > 50) {
      for (let i = 1; i < currentArray.length; i++) {
        if (currentArray[i] !== currentArray[i - 1]) {
          column += 1
        }
      }

      for (let i = 50; i < currentArray.length; i++) {
        console.log(currentArray);
        result.className = (currentArray[i] === 1) ? 'circle-1' : 'circle-2';
        if (currentArray[i] === currentArray[i - 1]) {
          document.getElementById(`result-${column}`).insertAdjacentElement('beforeend', result);
        } else {
          column += 1;
          document.getElementById(`result-${column}`).insertAdjacentElement('beforeend', result);
        }
      }
    }

    if (currentArray.length === 50) {
      let result = document.createElement('div');
      result.innerHTML = '⬤';
      result.className = (currentArray[0] === 1) ? 'circle-1' : 'circle-2';
      document.getElementById(`result-${column}`).insertAdjacentElement('beforeend', result);
      for (let i = 1; i < currentArray.length; i++) {
        let innerResult = document.createElement('div');
        innerResult.innerHTML = '⬤';
        innerResult.className = (currentArray[i] === 1) ? 'circle-1' : 'circle-2';
        if (currentArray[i] === currentArray[i - 1]) {
          document.getElementById(`result-${column}`).insertAdjacentElement('beforeend', innerResult);
        } else {
          column += 1;
          document.getElementById(`result-${column}`).insertAdjacentElement('beforeend', innerResult);
        }
      }
    }
  }, [results])

  const startGame = () => {
    const randomValue = Math.floor(Math.random() * 2) + 1;
    setResults([...resultsRef.current, randomValue]);
  }

  return (
    <div className="game-content-wrapper">
      <div className="game-section">

        <div className="game-section__game-content">
          <div className="game-section__game-info mobile">
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
          <div className="game-section__game-3d-model">
            <GameModel />
          </div>
          <div className="game-section__game-info hide">
            <div className="game-section__title">Демо-режим</div>
            <div className="game-section__description">
              Вы можете испытать наше расширение в демо-режиме.
              Сделайте предположение и нажмите на одну из кнопок:
            </div>
            <div className="game-section__game-controls">
              <button onClick={startGame} className="game-section__game-button">Player</button>
              <button onClick={startGame} className="game-section__game-button">Banker</button>
            </div>
          </div>
        </div>

        <div className="game-section__game-results">
          {results.map((elem, index) => {
            return <div key={index} id={`result-${index + 1}`} className="game-section__result"></div>
          })}
        </div>

      </div>
    </div>
  );
}

export default GameSection;
