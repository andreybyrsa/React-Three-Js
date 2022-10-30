import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Ethereum } from '../Models/Ethereum';
import { WhitePill } from '../Models/WhitePill';
import { BluePill } from '../Models/BluePill';

import './IntroModel.scss';

function IntroModel() {
  return (
    <div className="intro-model-wrapper">

      <div className="model__white-pill">
        <Canvas style={{width: '275px', height: '250px',}}  camera={{position: [0, 1, 5], zoom: 3}}>
          <ambientLight intensity={0.3}/>
          <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 2]}/>
          <Suspense fallback={null}>
            <WhitePill />
          </Suspense>
        </Canvas>
      </div>

      <div className="model__ethereum">
        <Canvas style={{width: '100px', height: '120px',}} camera={{position: [0, 1, 5], zoom: 5}}>
          <ambientLight intensity={0.3}/>
          <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 2]}/>
          <Suspense fallback={null}>
            <Ethereum />
          </Suspense>
        </Canvas>
      </div>

      <div className="model__blue-pill">
        <Canvas style={{width: '275px', height: '250px',}}  camera={{position: [0, 1, 5], zoom: 3}}>
          <ambientLight intensity={0.3}/>
          <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 2]}/>
          <Suspense fallback={null}>
            <BluePill />
          </Suspense>
        </Canvas>
      </div>

    </div>

  );
}

export default IntroModel;
