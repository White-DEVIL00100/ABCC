import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Lighting() {
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useFrame((state) => {
    if (lightRef.current) {
      // Gentle light movement
      lightRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.2) * 2;
      lightRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.2) * 2;
    }
  });

  return (
    <>
      {/* Ambient light for general illumination */}
      <ambientLight intensity={0.4} color="#e0f2fe" />
      
      {/* Main directional light */}
      <directionalLight
        ref={lightRef}
        position={[10, 10, 5]}
        intensity={1}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      
      {/* Green accent light for branding */}
      <pointLight
        position={[0, 5, 0]}
        intensity={0.5}
        color="#22c55e"
        distance={20}
      />
      
      {/* Rim light for depth */}
      <directionalLight
        position={[-5, 3, -5]}
        intensity={0.3}
        color="#60a5fa"
      />
    </>
  );
}
