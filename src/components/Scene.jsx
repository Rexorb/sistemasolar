import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GalaxyBackground from "./GalaxyBackground";
import {
  Sun,
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
} from "./Planets";
import CameraController from "./CameraController"; // Importe o novo componente

function Scene() {
  const [sunPosition, setSunPosition] = useState([0, 0, 0]);
  const [focusedPlanet, setFocusedPlanet] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState(null); // Estado para planeta selecionado

  // Função para mover a câmera para o planeta clicado
  const handlePlanetClick = (planetPosition, planetName) => {
    setFocusedPlanet(planetPosition);
    setSelectedPlanet(planetName); // Salva o nome do planeta selecionado
    setIsPaused(true); // Pausar a rotação dos planetas
  };

  // Função para resetar o foco
  const resetFocus = () => {
    setFocusedPlanet(null); // Remove o planeta focado
    setIsPaused(false); // Retoma a rotação dos planetas
    setSelectedPlanet(null); // Limpa o estado do planeta selecionado
  };

  return (
    <>
      <Canvas camera={{ position: [0, 300, 300], fov: 80 }}>
        <pointLight position={sunPosition} intensity={1.5} />
        <ambientLight intensity={0.2} />
        <GalaxyBackground />
        <Sun setSunPosition={setSunPosition} />

        {/* Planetas */}
        <Mercury
          sunPosition={sunPosition}
          isPaused={isPaused}
          onClick={(pos) => handlePlanetClick(pos, "Mercury")}
          isFocused={selectedPlanet === "Mercury"}
        />
        <Venus
          sunPosition={sunPosition}
          isPaused={isPaused}
          onClick={(pos) => handlePlanetClick(pos, "Venus")}
          isFocused={selectedPlanet === "Venus"}
        />
        <Earth
          sunPosition={sunPosition}
          isPaused={isPaused}
          onClick={(pos) => handlePlanetClick(pos, "Earth")}
          isFocused={selectedPlanet === "Earth"}
        />
        <Mars
          sunPosition={sunPosition}
          isPaused={isPaused}
          onClick={(pos) => handlePlanetClick(pos, "Mars")}
          isFocused={selectedPlanet === "Mars"}
        />
        <Jupiter
          sunPosition={sunPosition}
          isPaused={isPaused}
          onClick={(pos) => handlePlanetClick(pos, "Jupiter")}
          isFocused={selectedPlanet === "Jupiter"}
        />
        <Saturn
          sunPosition={sunPosition}
          isPaused={isPaused}
          onClick={(pos) => handlePlanetClick(pos, "Saturn")}
          isFocused={selectedPlanet === "Saturn"}
        />
        <Uranus
          sunPosition={sunPosition}
          isPaused={isPaused}
          onClick={(pos) => handlePlanetClick(pos, "Uranus")}
          isFocused={selectedPlanet === "Uranus"}
        />
        <Neptune
          sunPosition={sunPosition}
          isPaused={isPaused}
          onClick={(pos) => handlePlanetClick(pos, "Neptune")}
          isFocused={selectedPlanet === "Neptune"}
        />

        {/* Controlador de câmera */}
        <CameraController focusedPlanet={focusedPlanet} />

        {/* Controle de órbita geral */}
        <OrbitControls
          minDistance={150}
          maxDistance={400}
          maxPolarAngle={Math.PI * 2}
          enablePan={false}
        />
      </Canvas>

      {/* Botão de reset */}
      {focusedPlanet && (
        <button 
          style={{ position: "absolute", bottom: "10px", left: "10px" }} 
          onClick={resetFocus}
        >
          Voltar
        </button>
      )}
    </>
  );
}

export default Scene;
