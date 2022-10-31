import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";

export function Ethereum(props) {
  const group = useRef();
  const { nodes } = useGLTF('/Ethereum/Ethereum.gltf');

  useFrame(() => {
    group.current.rotation.y += 0.02;
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Ethereum" geometry={nodes.Ethereum.geometry} position={[0, -0.1, 0]} scale={[0.51, 0.01, 0.51]}>
          <meshStandardMaterial color="white"/>
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/Ethereum/Ethereum.gltf');
