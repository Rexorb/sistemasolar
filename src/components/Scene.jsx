import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import GalaxyBackground from './GalaxyBackground';
import { Sun, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune } from './Planets';

function Orbit({ sunPosition, distance }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x = Math.PI / 2; // Garante que a órbita esteja plana no eixo X-Z
  });

  return (
    <group ref={ref} position={sunPosition}>
      <mesh>
        <ringGeometry args={[distance - 0.1, distance, 64]} />
        <meshBasicMaterial color="red" side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function Scene() {
  const [sunPosition, setSunPosition] = useState([0, 0, 0]);

  return (
    <Canvas camera={{ position: [0, 100, 100], fov: 100 }}>
      <pointLight position={sunPosition} intensity={1.5} />
      <ambientLight intensity={0.2} />
      <GalaxyBackground />
      <Sun setSunPosition={setSunPosition} />
      
      {/* Orbita e Planetas */}
      <Orbit sunPosition={sunPosition} distance={5} />
      <Mercury sunPosition={sunPosition} distance={5} speed={4.15} />
      
      <Orbit sunPosition={sunPosition} distance={8} />
      <Venus sunPosition={sunPosition} distance={8} speed={3.0} />
      
      <Orbit sunPosition={sunPosition} distance={11} />
      <Earth sunPosition={sunPosition} distance={11} speed={2.6} />
      
      <Orbit sunPosition={sunPosition} distance={15} />
      <Mars sunPosition={sunPosition} distance={15} speed={2.0} />

      <Orbit sunPosition={sunPosition} distance={15} />
      <Jupiter sunPosition={sunPosition} distance={15} speed={2.0} />

      <Orbit sunPosition={sunPosition} distance={15} />
      <Saturn sunPosition={sunPosition} distance={15} speed={2.0} />

      <Orbit sunPosition={sunPosition} distance={15} />
      <Uranus sunPosition={sunPosition} distance={15} speed={2.0} />

      <Orbit sunPosition={sunPosition} distance={15} />
      <Neptune sunPosition={sunPosition} distance={15} speed={2.0} />
      
      <OrbitControls />
    </Canvas>
  );
}

export default Scene;
