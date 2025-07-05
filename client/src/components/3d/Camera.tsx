import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Camera() {
  const { camera } = useThree();
  const targetRef = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state) => {
    // Smooth camera orbit around the scene
    const time = state.clock.elapsedTime * 0.1;
    const radius = 15;
    
    camera.position.x = Math.sin(time) * radius;
    camera.position.z = Math.cos(time) * radius;
    camera.position.y = 5 + Math.sin(time * 0.5) * 2;
    
    camera.lookAt(targetRef.current);
  });

  return null;
}
