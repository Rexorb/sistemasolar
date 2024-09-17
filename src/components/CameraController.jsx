import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

function CameraController({ focusedPlanet }) {
  const { camera } = useThree();

  useFrame(() => {
    if (focusedPlanet) {
      camera.position.lerp(
        new THREE.Vector3(focusedPlanet.x, focusedPlanet.y + 50, focusedPlanet.z + 100),
        0.05
      );
      camera.lookAt(focusedPlanet);
      return (
         <button
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            zIndex: 1,
            padding: "10px",
            fontSize: "16px",
          }}
          
        >
          Voltar
        </button>
          )
    }

  });

  return null;
}

export default CameraController;
