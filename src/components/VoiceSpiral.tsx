import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, useScroll } from "@react-three/drei";
import * as THREE from "three";

export const VoiceSpiral = () => {
  const groupRef = useRef<THREE.Group>(null);
  const count = 60;

  const points = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * Math.PI * 10; // Multiple turns
      const radius = 1 + (i / count) * 4;
      const x = Math.cos(angle) * radius;
      const y = (i / count) * 8 - 4; // Move up over time
      const z = Math.sin(angle) * radius;
      return { position: [x, y, z], index: i };
    });
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        // Individual oscillation for each point in the spiral
        const freqOffset = i * 0.1;
        const scale = 1 + Math.sin(t * 3 + freqOffset) * 0.5;
        child.scale.setScalar(scale);
        
        // Add a secondary color pulse
        if ((child as any).material) {
            (child as any).material.emissiveIntensity = 0.5 + scale;
        }
      });
      groupRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {points.map((p, i) => (
        <mesh key={i} position={p.position as any}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#22d3ee" : "#c084fc"} 
            emissive={i % 2 === 0 ? "#22d3ee" : "#c084fc"}
            emissiveIntensity={1}
          />
        </mesh>
      ))}
      
      {/* Central "Energy" Beam */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 10, 16]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.2} />
      </mesh>
    </group>
  );
};
