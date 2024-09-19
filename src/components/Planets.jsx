import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

// Sol
function Sun({ setSunPosition }) {
  const { scene } = useGLTF("/Sun/scene.gltf");
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const scale = 5 + Math.sin(elapsed * 2) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);
    const sunPosition = meshRef.current.position;
    setSunPosition(sunPosition);
  });

  return <primitive ref={meshRef} object={scene} />;
}

// Função genérica para planetas
function Planet({
  sunPosition,
  modelPath,
  distance,
  speed,
  scale,
  onClick,
  isPaused,
  isFocused,
  orbitOffset = { x: 0, y: 0, z: 0 } // Adiciona o parâmetro para controlar a órbita
}) {
  const { scene } = useGLTF(modelPath);
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (isPaused) return; // Pausa a rotação se isPaused for true
    const elapsed = clock.getElapsedTime();
    if (meshRef.current && sunPosition) {
      //Movimento da órbita dos planetas baseado no centro do Sol
      meshRef.current.position.x =
        sunPosition.x + Math.cos(elapsed * speed) * distance + orbitOffset.x;
        meshRef.current.position.y = sunPosition.y + orbitOffset.y; // Aplica a órbita Y
      meshRef.current.position.z =
        sunPosition.z + Math.sin(elapsed * speed) * distance + orbitOffset.z;
      //condição extra caso o planeta esteja focado, aplicar rotação contínua nos eixos
      if (isFocused) {
        meshRef.current.rotation.x += 0.2; // Ajuste a velocidade da rotação conforme necessário
        meshRef.current.rotation.y += 0.2; // Rotação também no eixo Y para maior interatividade
      }
    }
  });

  return (
    <>
      <primitive
        ref={meshRef}
        object={scene}
        scale={scale}
        onClick={() => onClick(meshRef.current.position)} // Retorna a posição ao clicar
      />
      {isFocused && (
        <OrbitControls
          enablePan={true}
          enableRotate={false}
          maxPolarAngle={Math.PI * 2}
          minDistance={35} // Ajuste para um valor seguro
          maxDistance={100} // Ajuste para controlar o máximo de afastamento
          target={meshRef.current.position} // Centraliza o controle no planeta
        />
      )}
    </>
  );
}

// Mercúrio
function Mercury({ sunPosition, onClick, isPaused, isFocused }) {
  return (
    <Planet
      sunPosition={sunPosition}
      modelPath="/Mercury/scene_mercury.gltf"
      distance={150}
      speed={2.0}
      scale={[0.5, 0.5, 0.5]}
      onClick={onClick}
      isPaused={isPaused}
      isFocused={isFocused}
    />
  );
}

// Vênus
function Venus({ sunPosition, onClick, isPaused, isFocused }) {
  return (
    <Planet
      sunPosition={sunPosition}
      modelPath="/Venus/scene_venus.gltf"
      distance={180}
      speed={1.7}
      scale={[0.8, 0.8, 0.8]}
      onClick={onClick}
      isPaused={isPaused}
      isFocused={isFocused}
    />
  );
}

// Terra
function Earth({ sunPosition, onClick, isPaused, isFocused }) {
  return (
    <Planet
      sunPosition={sunPosition}
      modelPath="/Earth/Planet_Earth.gltf"
      distance={210}
      speed={0.8}
      scale={[15, 15, 15]}
      onClick={onClick}
      isPaused={isPaused}
      isFocused={isFocused}
    />
  );
}

// Marte
function Mars({ sunPosition, onClick, isPaused, isFocused }) {
  return (
    <Planet
      sunPosition={sunPosition}
      modelPath="/Mars/scene_mars.gltf"
      distance={250}
      speed={0.5}
      scale={[0.7, 0.7, 0.7]}
      onClick={onClick}
      isPaused={isPaused}
      isFocused={isFocused}
    />
  );
}

// Júpiter
function Jupiter({ sunPosition, onClick, isPaused, isFocused }) {
  const adjustedScale = isFocused ? [0.15, 0.15, 0.15] : [0.35, 0.35, 0.35]; // Reduz escala quando focado
  return (
    <Planet
      sunPosition={sunPosition}
      modelPath="/Jupiter/scene_jupiter.gltf"
      distance={300}
      speed={0.2}
      scale={adjustedScale} // Use a escala ajustada
      onClick={onClick}
      isPaused={isPaused}
      isFocused={isFocused}
    />
  );
}

// Saturno
function Saturn({ sunPosition, onClick, isPaused, isFocused }) {
  return (
    <Planet
      sunPosition={sunPosition}
      modelPath="/Saturn/Planet_Saturn.gltf"
      distance={400}
      speed={0.1}
      scale={[35, 35, 35]}
      onClick={onClick}
      isPaused={isPaused}
      isFocused={isFocused}
      orbitOffset={{ x: 50, y:70 ,z: 30 }} // Adiciona a mudança de órbita
    />
  );
}

// Urano
function Uranus({ sunPosition, onClick, isPaused, isFocused }) {
  return (
    <Planet
      sunPosition={sunPosition}
      modelPath="/Uranus/Planet_Uranus.gltf"
      distance={430}
      speed={0.05}
      scale={[25, 25, 25]}
      onClick={onClick}
      isPaused={isPaused}
      isFocused={isFocused}
    />
  );
}

// Netuno
function Neptune({ sunPosition, onClick, isPaused, isFocused }) {
  return (
    <Planet
      sunPosition={sunPosition}
      modelPath="/Neptune/scene_neptune.gltf"
      distance={470}
      speed={0.05}
      scale={[10, 10, 10]}
      onClick={onClick}
      isPaused={isPaused}
      isFocused={isFocused}
    />
  );
}

export { Sun, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune };
