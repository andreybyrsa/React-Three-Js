import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Coin } from '../Models/Coin';

import { KeyLight, FillLight, RimLight } from '../Models/Light';

import './GameModel.scss';

function GameModel({
  value, start,
}) {
  return (
    <div className="game-model-wrapper">

      <div className="model-coin">
        <Canvas camera={{position: [0, 0, 5], zoom: 3.5}}>
          <FillLight brightness={2} color={"#2690ff"} />
          <RimLight brightness={54} color={"#ffffff"} />
          <KeyLight brightness={1} color={"#b560ff"} />
          <Suspense fallback={null}>
            <Coin value={value} startRotation={start} />
          </Suspense>
        </Canvas>
      </div>

    </div>

  );
}

export default GameModel;
