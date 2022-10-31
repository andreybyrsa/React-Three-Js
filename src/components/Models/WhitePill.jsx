import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function WhitePill(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/WhitePill/WhitePill.gltf');

  useFrame(() => {
    group.current.rotation.y += 0.02;
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.WhitePill.geometry} material={materials['Material.005']} position={[0, .18, 0]} rotation={[-Math.PI, 0.17, -Math.PI]} scale={0.75}>
        <meshStandardMaterial color="white"/>
        <mesh geometry={nodes.MovingBlock1.geometry} material={materials['Material.004']} position={[0, 1.94, -0.02]} rotation={[-2.68, -0.87, 1.99]} scale={0.83}>
          <meshStandardMaterial color="#888888"/>
        </mesh>
      </mesh>
    </group>
  )
}

useGLTF.preload('/WhitePill/WhitePill.gltf');
