import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, MeshWobbleMaterial, Float, Sphere } from "@react-three/drei";
import * as THREE from "three";

export const VoiceReactiveMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ribbonRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Slow organic breathing scale
      const scale = 1 + Math.sin(t * 0.5) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
      meshRef.current.rotation.y = t * 0.1;
    }
    if (ribbonRef.current) {
        ribbonRef.current.rotation.z = t * 0.05;
        ribbonRef.current.rotation.y = Math.sin(t * 0.2) * 0.2;
    }
  });

  return (
    <group>
      {/* Central Organic "Voice" Core */}
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <sphereGeometry args={[3, 128, 128]} />
          <MeshDistortMaterial
            color="#22d3ee"
            speed={3}
            distort={0.4}
            radius={1}
            emissive="#0891b2"
            emissiveIntensity={0.5}
            roughness={0}
            metalness={1}
          />
        </mesh>
      </Float>

      {/* Outer Audio Energy Ribbons */}
      <mesh ref={ribbonRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[6, 0.02, 16, 100]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.3} />
      </mesh>
      
      <mesh rotation={[Math.PI / 2.5, 0.5, 0]}>
        <torusGeometry args={[6.5, 0.01, 16, 100]} />
        <meshBasicMaterial color="#c084fc" transparent opacity={0.2} />
      </mesh>

      {/* Floating Data Particles */}
      <Points count={1000} />
    </group>
  );
};

function Points({ count = 1000 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 30;
      p[i * 3 + 1] = (Math.random() - 0.5) * 30;
      p[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if(pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}
