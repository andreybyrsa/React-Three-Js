import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Ethereum } from "../Models/Ethereum";

import './IntroModel.scss';

function KeyLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
    />
  );
}

function FillLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={brightness}
      color={color}
      position={[2, 1, 4]}
      lookAt={[0, 0, 0]}
      penumbra={2}
    />
  );
}

function RimLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[1, 4, -2]}
      rotation={[0, 180, 0]}
    />
  );
}

function IntroModel() {
  return (
    <div className="intro-model-wrapper">

      {/*<div className="model__white-pill">*/}
      {/*  <Canvas style={{width: '250px', height: '250px',}}  camera={{position: [0, 1, 5], zoom: 3.5}}>*/}
      {/*    <ambientLight intensity={0.7}/>*/}
      {/*    <spotLight intensity={10} angle={0.1} penumbra={1} position={[0, 10, -5]}/>*/}
      {/*    <Suspense fallback={null}>*/}
      {/*      <WhitePill />*/}
      {/*    </Suspense>*/}
      {/*  </Canvas>*/}
      {/*</div>*/}

      {/*<div className="model__ethereum">*/}
      {/*  <Canvas style={{width: '110px', height: '150px',}} camera={{position: [0, 1, 5], zoom: 5}}>*/}
      {/*    <ambientLight intensity={0.6}/>*/}
      {/*    <spotLight intensity={10} angle={0.1} penumbra={1} position={[0, 10, -5]}/>*/}
      {/*    <Suspense fallback={null}>*/}
      {/*      <Ethereum />*/}
      {/*    </Suspense>*/}
      {/*  </Canvas>*/}
      {/*</div>*/}

      {/*<div className="model__blue-pill">*/}
      {/*  <Canvas style={{width: '250px', height: '250px',}}  camera={{position: [0, 1, 5], zoom: 3.5}}>*/}
      {/*    <ambientLight intensity={0.8}/>*/}
      {/*    <spotLight intensity={10} angle={0.1} penumbra={1} position={[0, 10, -5]}/>*/}
      {/*    <Suspense fallback={null}>*/}
      {/*      <BluePill />*/}
      {/*    </Suspense>*/}
      {/*  </Canvas>*/}
      {/*</div>*/}

      <div className="model__ethereum">
        <Canvas style={{width: '400px', height: '450px',}} camera={{position: [0, 1, 5], zoom: 3.5}}>
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
