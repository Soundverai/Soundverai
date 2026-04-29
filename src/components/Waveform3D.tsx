import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Waveform3D = () => {
  const meshRef = useRef<THREE.Points>(null);
  const count = 100; // grid size 100x100
  const sep = 0.25;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    for (let x = 0; x < count; x++) {
      for (let z = 0; z < count; z++) {
        const i = (x * count + z) * 3;
        pos[i] = (x - count / 2) * sep;
        pos[i + 1] = 0;
        pos[i + 2] = (z - count / 2) * sep;
      }
    }
    return pos;
  }, [count, sep]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!meshRef.current) return;
    
    const posAttribute = meshRef.current.geometry.getAttribute("position");
    for (let x = 0; x < count; x++) {
      for (let z = 0; z < count; z++) {
        const i = (x * count + z) * 3;
        
        // Create organic voice-like wave patterns
        const dist = Math.sqrt(Math.pow((x - count / 2), 2) + Math.pow((z - count / 2), 2));
        const wave1 = Math.sin(x * 0.2 + t * 2) * 0.5;
        const wave2 = Math.cos(z * 0.2 + t * 1.5) * 0.5;
        const wave3 = Math.sin(dist * 0.1 - t * 3) * 1.2;
        
        // Dampen waves towards the center to keep text legible, or keep it consistent
        const amplitude = Math.max(0, 1 - dist / (count / 2));
        
        posAttribute.setY(x * count + z, (wave1 + wave2 + wave3) * 0.8);
      }
    }
    posAttribute.needsUpdate = true;
    
    // Slow rotation
    meshRef.current.rotation.y = t * 0.05;
  });

  return (
    <points ref={meshRef} rotation={[-Math.PI / 4, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#22d3ee"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};
