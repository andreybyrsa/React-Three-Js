import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

export function Ethereum(props) {
  const group = useRef();
  const { nodes } = useGLTF('/Ethereum/Ethereum.gltf');
  useFrame(() => {
    group.current.rotation.y += 0.02;
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Ethereum.geometry} position={[0, 0, 0]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={[0.72, 0.05, 0.72]}>
        <meshStandardMaterial color="white"/>
        <mesh geometry={nodes.Edge.geometry} >
          <meshStandardMaterial color="#d4d4d4"/>
        </mesh>
      </mesh>
    </group>
  )
}

useGLTF.preload('/Ethereum/Ethereum.gltf');
