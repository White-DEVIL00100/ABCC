import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import Lighting from "./Lighting";
import ConstructionEquipment from "./ConstructionEquipment";
import Building from "./Building";
import Camera from "./Camera";

export default function Scene() {
  const sceneRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    // Gentle scene rotation
    if (sceneRef.current) {
      sceneRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={sceneRef}>
      <Camera />
      <Lighting />
      
      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshLambertMaterial color="#1a1a1a" />
      </mesh>

      {/* Construction Equipment */}
      <ConstructionEquipment position={[-5, 0, 2]} />
      <ConstructionEquipment position={[5, 0, -2]} rotation={[0, Math.PI, 0]} />
      
      {/* Buildings */}
      <Building position={[-8, 0, -5]} />
      <Building position={[8, 0, -5]} scale={[1.2, 0.8, 1]} />
      <Building position={[0, 0, -8]} scale={[0.8, 1.5, 0.8]} />

      {/* Additional construction elements */}
      <group position={[0, 0, 5]}>
        {/* Crane representation */}
        <mesh position={[0, 3, 0]} castShadow>
          <boxGeometry args={[0.3, 6, 0.3]} />
          <meshLambertMaterial color="#fbbf24" />
        </mesh>
        <mesh position={[2, 5.5, 0]} castShadow>
          <boxGeometry args={[4, 0.2, 0.2]} />
          <meshLambertMaterial color="#fbbf24" />
        </mesh>
      </group>
    </group>
  );
}
