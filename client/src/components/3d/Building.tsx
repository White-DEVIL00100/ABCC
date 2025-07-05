import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

interface BuildingProps {
  position?: [number, number, number];
  scale?: [number, number, number];
}

export default function Building({ 
  position = [0, 0, 0],
  scale = [1, 1, 1]
}: BuildingProps) {
  const buildingRef = useRef<THREE.Group>(null);
  
  // Pre-calculate random values for consistent appearance
  const { height, color, windowPattern } = useMemo(() => ({
    height: 2 + Math.random() * 3,
    color: Math.random() > 0.5 ? "#e5e7eb" : "#d1d5db",
    windowPattern: Array.from({ length: 6 }, () => Math.random() > 0.3)
  }), []);

  useFrame((state) => {
    if (buildingRef.current) {
      // Subtle breathing animation
      const breathe = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      buildingRef.current.scale.setScalar(breathe);
    }
  });

  return (
    <group ref={buildingRef} position={position} scale={scale}>
      {/* Main building structure */}
      <mesh position={[0, height / 2, 0]} castShadow>
        <boxGeometry args={[2, height, 2]} />
        <meshLambertMaterial color={color} />
      </mesh>
      
      {/* Windows */}
      {windowPattern.map((hasWindow, index) => {
        if (!hasWindow) return null;
        const row = Math.floor(index / 2);
        const col = index % 2;
        return (
          <mesh
            key={index}
            position={[
              col === 0 ? -0.7 : 0.7,
              0.5 + row * 0.8,
              1.01
            ]}
            castShadow
          >
            <boxGeometry args={[0.3, 0.4, 0.02]} />
            <meshLambertMaterial color="#3b82f6" />
          </mesh>
        );
      })}
      
      {/* Green roof (sustainable building feature) */}
      <mesh position={[0, height + 0.1, 0]} castShadow>
        <boxGeometry args={[2.2, 0.2, 2.2]} />
        <meshLambertMaterial color="#22c55e" />
      </mesh>
      
      {/* Solar panels */}
      <mesh position={[0, height + 0.25, 0]} castShadow>
        <boxGeometry args={[1.8, 0.05, 1.8]} />
        <meshLambertMaterial color="#1f2937" />
      </mesh>
    </group>
  );
}
