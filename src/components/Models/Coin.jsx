import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Coin(props) {
  const { nodes } = useGLTF('/Coin/Coin.gltf');
  const group = useRef();
  useFrame(() => {
    group.current.rotation.y += 0.02;
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
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
