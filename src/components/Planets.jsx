import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

// Sol
function Sun({ setSunPosition }) {
  const { scene } = useGLTF('/Sun/scene.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const scale = 5 + Math.sin(elapsed * 2) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);

    // Define a posição do Sol
    const sunPosition = meshRef.current.position;
    setSunPosition(sunPosition);
  });

  return <primitive ref={meshRef} object={scene}   />;
}

// Mercúrio
function Mercury({ sunPosition }) {
  const { scene } = useGLTF('/Mercury/scene_mercury.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const distance = 150;
    const speed = 2.0;

    meshRef.current.position.x = sunPosition.x + Math.cos(elapsed * speed) * distance;
    meshRef.current.position.z = sunPosition.z + Math.sin(elapsed * speed) * distance;
  });

  return <primitive ref={meshRef} object={scene} scale={[0.5, 0.5, 0.5]} />;
}

// Vênus
function Venus({ sunPosition }) {
  const { scene } = useGLTF('/Venus/scene_venus.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const distance = 180;
    const speed = 1.7;

    meshRef.current.position.x = sunPosition.x + Math.cos(elapsed * speed) * distance;
    meshRef.current.position.z = sunPosition.z + Math.sin(elapsed * speed) * distance;
  });

  return <primitive ref={meshRef} object={scene} scale={[0.8, 0.8, 0.8]} />;
}

// Terra
function Earth({ sunPosition }) {
  const { scene } = useGLTF('/Earth/Planet_Earth.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const distance = 210;
    const speed = 0.8;

    meshRef.current.position.x = sunPosition.x + Math.cos(elapsed * speed) * distance;
    meshRef.current.position.z = sunPosition.z + Math.sin(elapsed * speed) * distance;
  });

  return <primitive ref={meshRef} object={scene} scale={[15, 15, 15]} />;
}

// Marte
function Mars({ sunPosition }) {
  const { scene } = useGLTF('/Mars/scene_mars.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const distance = 250;
    const speed = 0.5;

    meshRef.current.position.x = sunPosition.x + Math.cos(elapsed * speed) * distance;
    meshRef.current.position.z = sunPosition.z + Math.sin(elapsed * speed) * distance;
  });

  return <primitive ref={meshRef} object={scene} scale={[0.7, 0.7, 0.7]} />;
}

// Júpiter
function Jupiter({ sunPosition }) {
  const { scene } = useGLTF('/Jupiter/scene_jupiter.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const distance = 300;
    const speed = 0.2;

    meshRef.current.position.x = sunPosition.x + Math.cos(elapsed * speed) * distance;
    meshRef.current.position.z = sunPosition.z + Math.sin(elapsed * speed) * distance;
  });

  return <primitive ref={meshRef} object={scene} scale={[0.35, 0.35, 0.35]} />;
}

// Saturno
function Saturn({ sunPosition }) {
  const { scene } = useGLTF('/Saturn/Planet_Saturn.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const distance = 400;
    const speed = 0.1;

    meshRef.current.position.x = sunPosition.x + Math.cos(elapsed * speed) * distance;
    meshRef.current.position.z = sunPosition.z + Math.sin(elapsed * speed) * distance;
  });

  return <primitive ref={meshRef} object={scene} scale={[35, 35, 35]} />;
}

// Urano
function Uranus({ sunPosition }) {
  const { scene } = useGLTF('/Uranus/Planet_Uranus.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const distance = 430;
    const speed = 0.05;
    //meshRef.current.position.y = sunPosition.y + Math.cos(elapsed * speed) * distance;
    meshRef.current.position.x = sunPosition.x + Math.cos(elapsed * speed) * distance;
    meshRef.current.position.z = sunPosition.z + Math.sin(elapsed * speed) * distance;
  });

  return <primitive ref={meshRef} object={scene} scale={[25, 25, 25]} />;
}

// Netuno
function Neptune({ sunPosition }) {
  const { scene } = useGLTF('/Neptune/scene_neptune.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const distance = 30;
    const speed = 0.05;

    meshRef.current.position.x = sunPosition.x + Math.cos(elapsed * speed) * distance;
    meshRef.current.position.z = sunPosition.z + Math.sin(elapsed * speed) * distance;
  });

  return <primitive ref={meshRef} object={scene} scale={[10, 10, 10]} />;
}

export { Sun, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune };
