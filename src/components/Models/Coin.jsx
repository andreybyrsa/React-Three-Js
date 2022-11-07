import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Coin({
  value, startRotation,
}) {
  const { nodes } = useGLTF('/Coin/Coin.gltf');
  const group = useRef();

  useFrame(() => {
    group.current.rotation.y = startRotation;
    if (startRotation >= value) {
      return;
    }
    startRotation += 0.3;
  }, []);
  return (
    <group classname="coin" ref={group} dispose={null}>
      <mesh geometry={nodes.Coin.geometry} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="white"/>
        <mesh geometry={nodes.Icon.geometry} rotation={[0, -Math.PI / 4, 0]} scale={[0.07, 0.14, 0.07]}>
          <meshStandardMaterial color="#000000"/>
        </mesh>
      </mesh>
    </group>
  )
}

useGLTF.preload('/Coin/Coin.gltf');
