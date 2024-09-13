import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

// Sol
function Sun({ setSunPosition }) {
  const { scene } = useGLTF('/Sun/scene.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const scale = 0.5 + Math.sin(elapsed * 2) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);

    // Define a posição do Sol
    const sunPosition = meshRef.current.position;
    setSunPosition(sunPosition);
  });

  return <primitive ref={meshRef} object={scene} />;
}

// Mercúrio
function Mercury({ sunPosition }) {
  const { scene } = useGLTF('/Mercury/scene_mercury.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const distance = 20;
    const speed = 4.15;

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
    const distance = 40;
    const speed = 3.0;

    meshRef.current.position.x = sunPosition.x + Math.cos(elapsed * speed) * distance;
    meshRef.current.position.z = sunPosition.z + Math.sin(elapsed * speed) * distance;
  });

  return <primitive ref={meshRef} object={scene} scale={[0.5, 0.5, 0.5]} />;
}

// Terra
function Earth({ sunPosition }) {
  const { scene } = useGLTF('/Earth/scene_earth.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const distance = 45;
    const speed = 2.6;

    meshRef.current.position.x = sunPosition.x + Math.cos(elapsed * speed) * distance;
    meshRef.current.position.z = sunPosition.z + Math.sin(elapsed * speed) * distance;
  });

  return <primitive ref={meshRef} object={scene} scale={[0.07, 0.07, 0.07]} />;
}

// Marte
function Mars({ sunPosition }) {
  const { scene } = useGLTF('/Mars/scene_mars.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const distance = 50;
    const speed = 2.0;

    meshRef.current.position.x = sunPosition.x + Math.cos(elapsed * speed) * distance;
    meshRef.current.position.z = sunPosition.z + Math.sin(elapsed * speed) * distance;
  });

  return <primitive ref={meshRef} object={scene} scale={[0.5, 0.5, 0.5]} />;
}

// Júpiter
function Jupiter({ sunPosition }) {
  const { scene } = useGLTF('/Jupiter/scene_jupiter.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const distance = 62;
    const speed = 1.5;

    meshRef.current.position.x = sunPosition.x + Math.cos(elapsed * speed) * distance;
    meshRef.current.position.z = sunPosition.z + Math.sin(elapsed * speed) * distance;
  });

  return <primitive ref={meshRef} object={scene} scale={[0.05, 0.05, 0.05]} />;
}

// Saturno
function Saturn({ sunPosition }) {
  const { scene } = useGLTF('/Saturn/scene_saturn.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const distance = 72.2;
    const speed = 1.2;

    meshRef.current.position.x = sunPosition.x + Math.cos(elapsed * speed) * distance;
    meshRef.current.position.z = sunPosition.z + Math.sin(elapsed * speed) * distance;
  });

  return <primitive ref={meshRef} object={scene} scale={[0.5, 0.5, 0.5]} />;
}

// Urano
function Uranus({ sunPosition }) {
  const { scene } = useGLTF('/Uranus/scene_uranus.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const distance = 78;
    const speed = 1.0;

    meshRef.current.position.x = sunPosition.x + Math.cos(elapsed * speed) * distance;
    meshRef.current.position.z = sunPosition.z + Math.sin(elapsed * speed) * distance;
  });

  return <primitive ref={meshRef} object={scene} scale={[0.02, 0.02, 0.02]} />;
}

// Netuno
function Neptune({ sunPosition }) {
  const { scene } = useGLTF('/Neptune/scene_neptune.gltf');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const distance = 99;
    const speed = 0.8;

    meshRef.current.position.x = sunPosition.x + Math.cos(elapsed * speed) * distance;
    meshRef.current.position.z = sunPosition.z + Math.sin(elapsed * speed) * distance;
  });

  return <primitive ref={meshRef} object={scene} scale={[0.05, 0.05, 0.05]} />;
}

export { Sun, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune };
