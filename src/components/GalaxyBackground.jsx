import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function GalaxyBackground() {
const { scene } = useGLTF('/scene_galaxy.gltf');
  const meshRef = useRef();
  console.log(scene);

  // Rotaciona a galáxia lentamente
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0005;
      meshRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <primitive ref={meshRef} object={scene} scale={[500,500,500]} />


  );
}

export default GalaxyBackground;
