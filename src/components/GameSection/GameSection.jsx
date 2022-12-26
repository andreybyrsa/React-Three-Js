import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import GameModel from '../GameModel/GameModel';
import Modal from '../Modal/Modal';

import './GameSection.scss';

function GameSection() {
  const [results, setResults] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [slider, setSlider] = useState(false);
  const [disable, setDisable] = useState(false);
  const [flipValue, setFlipValue] = useState(0);
  const [startValue, setStartValue] = useState(0);
  const resultsRef = useRef();
  resultsRef.current = results;

  const getPercents = (value) => {
    const currentArray = resultsRef.current;
    let playerCounter = 0;
    for (let i = 0; i < currentArray.length; i++) {
      if (currentArray[i] === 2) {
        playerCounter++;
      }
    }
    let playerPercent = Math.floor((playerCounter / currentArray.length) * 100);
    let bankerPercent = 100 - playerPercent;
    if (value === 'player') {
      return playerPercent;
    }
    return bankerPercent;
  }

  useEffect(() => {
    const resultsArray = [];
    for (let i = 0; i < 25; i++ ) {
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
    if (currentArray.length > 25) {
      for (let i = 1; i < currentArray.length; i++) {
        if (currentArray[i] !== currentArray[i - 1]) {
          column += 1
        }
      }

      for (let i = 25; i < currentArray.length; i++) {
        result.className = (currentArray[i] === 1) ? 'circle-1' : 'circle-2';
        if (currentArray[i] === currentArray[i - 1]) {
          document.getElementById(`result-${column}`).insertAdjacentElement('beforeend', result);
        } else {
          column += 1;
          document.getElementById(`result-${column}`).insertAdjacentElement('beforeend', result);
        }
      }
    }

    if (currentArray.length === 25) {
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

  const makeResult = (value, lastRotateValue) => {
    setResults([...resultsRef.current, value]);
    setToggle(true);
    setSlider(false);
    setDisable(false);
    setStartValue(lastRotateValue);
  }

  const startGame = () => {
    setToggle(false);
    setSlider(true);
    setDisable(true);
    let rotateValue;
    const randomValue = Math.floor(Math.random() * 2) + 1;
    if (randomValue === 1) {
      setStartValue(0);
      rotateValue = Math.PI * 5;
      setFlipValue(rotateValue);
    } else {
      setStartValue(0);
      rotateValue = Math.PI * 4;
      setFlipValue(rotateValue);
    }
    setTimeout(() => makeResult(randomValue, rotateValue), 1500);
  }

  let activateSlider = false;
  window.addEventListener('scroll', () => {
    if (window.innerWidth > 760 && window.pageYOffset > 1100) {
      setToggle(true);
      activateSlider = true;
    } else if (window.innerWidth < 760 && window.pageYOffset > 1900) {
      setToggle(true);
      activateSlider = true;
    } else {
      setToggle(false);
      if (activateSlider) {
        setSlider(true);
      }
    }
  })

  return (
    <div className="game-content-wrapper">
      <div className="game-section">
        <Modal active={toggle} slider={slider} player={getPercents('player')} banker={getPercents('banker')} />
        <div className="game-section__game-content">
          <div className="game-section__game-info mobile">
            <div className="game-section__title">Демо-режим</div>
            <div className="game-section__description">
              Вы можете испытать наше расширение в демо-режиме.
              Сделайте предположение и нажмите на одну из кнопок:
            </div>
            <div className="game-section__game-controls">
              <button disabled={disable} onClick={startGame} className="game-section__game-button">Player</button>
              <button disabled={disable} onClick={startGame} className="game-section__game-button">Banker</button>
            </div>
          </div>
          <div className="game-section__game-3d-model">
            <GameModel value={flipValue} start={startValue} />
          </div>
          <div className="game-section__game-info hide">
            <div className="game-section__title">Демо-режим</div>
            <div className="game-section__description">
              Вы можете испытать наше расширение в демо-режиме.
              Сделайте предположение и нажмите на одну из кнопок:
            </div>
            <div className="game-section__game-controls">
              <button disabled={disable} onClick={startGame} className="game-section__game-button">Player</button>
              <button disabled={disable} onClick={startGame} className="game-section__game-button">Banker</button>
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
