import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function WaveformRibbon({ index, count }: { index: number; count: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create a unique sweep for each ribbon
  const radius = 5 + index * 0.5;
  const speed = 0.5 + Math.random();
  const factor = 0.4 + index * 0.1;

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Simulate audio reactivity by modulating scale and distortion
    const freq = Math.sin(t * speed + index) * 0.5 + 0.5;
    meshRef.current.scale.y = 1 + freq * 2;
    meshRef.current.rotation.z = t * 0.1 + (index * Math.PI) / count;
    
    // Pulse effect
    const pulse = Math.sin(t * 2 + index * 0.5) * 0.1 + 0.9;
    meshRef.current.scale.x = pulse;
    meshRef.current.scale.z = pulse;
  });

  const color = useMemo(() => {
    const colors = ["#22d3ee", "#818cf8", "#c084fc"]; // cyan, indigo, purple
    return colors[index % colors.length];
  }, [index]);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <MeshDistortMaterial
        color={color}
        speed={speed}
        distort={factor}
        radius={1}
        emissive={color}
        emissiveIntensity={2}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

function AudioSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const barCount = 64;
  
  const bars = useMemo(() => {
    const items = [];
    for (let i = 0; i < barCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / barCount);
      const theta = Math.sqrt(barCount * Math.PI) * phi;
      
      const x = Math.cos(theta) * Math.sin(phi) * 3;
      const y = Math.sin(theta) * Math.sin(phi) * 3;
      const z = Math.cos(phi) * 3;
      
      items.push({ position: [x, y, z] as [number, number, number], rotation: [phi, theta, 0] as [number, number, number] });
    }
    return items;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.005;
    groupRef.current.rotation.x += 0.002;
  });

  return (
    <group ref={groupRef}>
      {bars.map((bar, i) => (
        <mesh key={i} position={bar.position} rotation={bar.rotation}>
          <boxGeometry args={[0.05, 0.5, 0.05]} />
          <MeshWobbleMaterial 
            color="#22d3ee" 
            speed={2} 
            factor={0.5} 
            emissive="#22d3ee" 
            emissiveIntensity={1}
          />
        </mesh>
      ))}
    </group>
  );
}

export const AudioWorld = () => {
  const ribbonCount = 8;

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <AudioSphere />
        {Array.from({ length: ribbonCount }).map((_, i) => (
          <WaveformRibbon key={i} index={i} count={ribbonCount} />
        ))}
      </Float>
    </group>
  );
};
