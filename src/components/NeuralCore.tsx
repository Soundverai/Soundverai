import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Text } from "@react-three/drei";
import * as THREE from "three";

export const NeuralCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.rotation.z = t * 0.1;
    }
    if (coreRef.current) {
      coreRef.current.scale.setScalar(1 + Math.sin(t * 3) * 0.05);
    }
  });

  return (
    <group scale={1.2}>
      {/* Outer Wireframe Cage */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[2, 2]} />
        <meshStandardMaterial 
          color="#22d3ee" 
          wireframe 
          transparent 
          opacity={0.3} 
          emissive="#22d3ee"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Pulsing Core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <MeshDistortMaterial
          color="#22d3ee"
          speed={4}
          distort={0.4}
          emissive="#22d3ee"
          emissiveIntensity={2}
          roughness={0}
        />
      </mesh>

      {/* Orbiting Particles */}
      <OrbitingRing radius={3} speed={1} color="#c084fc" />
      <OrbitingRing radius={3.5} speed={-0.8} color="#22d3ee" />
    </group>
  );
};

function OrbitingRing({ radius, speed, color }: { radius: number; speed: number; color: string }) {
  const ref = useRef<THREE.Group>(null);
  const count = 12;

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * speed;
      ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={ref}>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(angle) * 0.5, Math.sin(angle) * radius]}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
          </mesh>
        );
      })}
    </group>
  );
}
