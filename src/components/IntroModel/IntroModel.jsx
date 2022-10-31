import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Ethereum } from '../Models/Ethereum';
import { WhitePill } from "../Models/WhitePill";
import { BluePill } from "../Models/BluePill";

import './IntroModel.scss';

function IntroModel() {
  return (
    <div className="intro-model-wrapper">

      <div className="model__white-pill">
        <Canvas style={{width: '250px', height: '250px',}}  camera={{position: [0, 1, 5], zoom: 3.5}}>
          <ambientLight intensity={0.7}/>
          <spotLight intensity={10} angle={0.1} penumbra={1} position={[0, 10, -5]}/>
          <Suspense fallback={null}>
            <WhitePill />
          </Suspense>
        </Canvas>
      </div>

      <div className="model__ethereum">
        <Canvas style={{width: '110px', height: '150px',}} camera={{position: [0, 1, 5], zoom: 5}}>
          <ambientLight intensity={0.6}/>
          <spotLight intensity={10} angle={0.1} penumbra={1} position={[0, 10, -5]}/>
          <Suspense fallback={null}>
            <Ethereum />
          </Suspense>
        </Canvas>
      </div>

      <div className="model__blue-pill">
        <Canvas style={{width: '250px', height: '250px',}}  camera={{position: [0, 1, 5], zoom: 3.5}}>
          <ambientLight intensity={0.8}/>
          <spotLight intensity={10} angle={0.1} penumbra={1} position={[0, 10, -5]}/>
          <Suspense fallback={null}>
            <BluePill />
          </Suspense>
        </Canvas>
      </div>

    </div>

  );
}

export default IntroModel;
