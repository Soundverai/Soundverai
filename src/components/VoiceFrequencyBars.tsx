import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const VoiceFrequencyBars = () => {
  const groupRef = useRef<THREE.Group>(null);
  const barsCount = 64;
  
  // Initialize random frequency data
  const frequencyData = useMemo(() => {
    return Array.from({ length: barsCount }).map(() => Math.random() * 0.5);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (!groupRef.current) return;

    // Update each bar with animated frequency
    groupRef.current.children.forEach((bar, i) => {
      const angle = (i / barsCount) * Math.PI * 2;
      
      // Create voice-like frequency patterns
      const freqPattern = Math.sin(t * 2 + i * 0.1) * 0.3 +
                         Math.sin(t * 0.5 + i * 0.05) * 0.2 +
                         Math.cos(t * 3 + i * 0.15) * 0.2;
      
      const height = Math.max(0.2, 1 + freqPattern);
      const scale = height / 2;
      
      bar.scale.y = scale;
      bar.position.y = (scale - 1) / 2;
      
      // Slight rotation for visual interest
      groupRef.current!.rotation.z = t * 0.2;
    });
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: barsCount }).map((_, i) => {
        const angle = (i / barsCount) * Math.PI * 2;
        const radius = 5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        // Color gradient from cyan to purple based on frequency
        const hue = i / barsCount;
        const color = new THREE.Color().setHSL(hue * 0.3 + 0.5, 1, 0.5);
        
        return (
          <mesh key={i} position={[x, 0, z]}>
            <boxGeometry args={[0.15, 1, 0.15]} />
            <meshPhongMaterial 
              color={color} 
              emissive={color}
              emissiveIntensity={0.5}
              wireframe={false}
            />
          </mesh>
        );
      })}
      
      {/* Center sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshPhongMaterial 
          color="#22d3ee" 
          emissive="#06b6d4"
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
};
