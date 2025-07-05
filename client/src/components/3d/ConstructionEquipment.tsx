import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

interface ConstructionEquipmentProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

export default function ConstructionEquipment({ 
  position = [0, 0, 0], 
  rotation = [0, 0, 0],
  scale = [1, 1, 1]
}: ConstructionEquipmentProps) {
  const equipmentRef = useRef<THREE.Group>(null);
  
  // Pre-calculate animation offset to avoid using Math.random in render
  const animationOffset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (equipmentRef.current) {
      // Gentle bobbing animation
      equipmentRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + animationOffset) * 0.1;
    }
  });

  return (
    <group ref={equipmentRef} position={position} rotation={rotation} scale={scale}>
      {/* Main body of excavator */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[2, 1, 1.5]} />
        <meshLambertMaterial color="#fbbf24" />
      </mesh>
      
      {/* Cabin */}
      <mesh position={[0, 1.2, 0.2]} castShadow>
        <boxGeometry args={[1.2, 0.8, 1]} />
        <meshLambertMaterial color="#374151" />
      </mesh>
      
      {/* Tracks */}
      <mesh position={[-0.8, 0, 0]} castShadow>
        <boxGeometry args={[0.3, 0.5, 2]} />
        <meshLambertMaterial color="#111827" />
      </mesh>
      <mesh position={[0.8, 0, 0]} castShadow>
        <boxGeometry args={[0.3, 0.5, 2]} />
        <meshLambertMaterial color="#111827" />
      </mesh>
      
      {/* Boom arm */}
      <mesh position={[1.5, 1, 0]} rotation={[0, 0, -0.3]} castShadow>
        <boxGeometry args={[2, 0.2, 0.2]} />
        <meshLambertMaterial color="#fbbf24" />
      </mesh>
      
      {/* Bucket */}
      <mesh position={[2.8, 0.3, 0]} rotation={[0, 0, 0.5]} castShadow>
        <boxGeometry args={[0.8, 0.3, 0.6]} />
        <meshLambertMaterial color="#6b7280" />
      </mesh>

      {/* Green accents for branding */}
      <mesh position={[0, 1.6, 0.2]} castShadow>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshLambertMaterial color="#22c55e" />
      </mesh>
    </group>
  );
}
