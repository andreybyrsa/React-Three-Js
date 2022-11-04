import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Ethereum } from '../Models/Ethereum';
import { KeyLight, FillLight, RimLight } from '../Models/Light';

import './IntroModel.scss';

function IntroModel() {
  return (
    <div className="intro-model-wrapper">

      <div className="model-ethereum">
        <Canvas camera={{position: [0, 1, 5], zoom: 3.5}}>
          <FillLight brightness={2} color={"#2690ff"} />
          <RimLight brightness={54} color={"#ffffff"} />
          <KeyLight brightness={1} color={"#b560ff"} />
          <Suspense fallback={null}>
            <Ethereum />
          </Suspense>
        </Canvas>
      </div>

    </div>

  );
}

export default IntroModel;
