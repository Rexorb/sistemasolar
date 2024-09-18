import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function CameraController({ focusedPlanet, planetName }) {
  const { camera } = useThree();

  useFrame(() => {
    if (focusedPlanet) {
      if (planetName === "Jupiter") {
        camera.position.lerp(
          new THREE.Vector3(
            focusedPlanet.x,
            focusedPlanet.y + 50,
            focusedPlanet.z + 490 // Aumente a distância da câmera
          ),
          0
        );
      } else {
        camera.position.lerp(
          new THREE.Vector3(
            focusedPlanet.x,
            focusedPlanet.y + 50,
            focusedPlanet.z + 100
          ),
          0
        );
      }
      camera.lookAt(focusedPlanet);
    }
  });

  return null;
}

export default CameraController;
