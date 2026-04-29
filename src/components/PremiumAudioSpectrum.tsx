import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Instances, Instance, Stars } from "@react-three/drei";
import * as THREE from "three";

const count = 40;

export const PremiumAudioSpectrum = () => {
  const barsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (barsRef.current) {
      barsRef.current.children.forEach((child, i) => {
        // Create a sophisticated, rhythmic "pulse" for each bar
        const pulse = Math.sin(t * 2 + i * 0.2) * 0.5 + 0.5;
        const wave = Math.cos(t * 1.5 + i * 0.1) * 0.3;
        child.scale.y = 1 + pulse * 4 + wave * 2;
        
        // Subtle movement
        child.position.y = (child.scale.y / 2) - 4;
      });
      barsRef.current.rotation.y = Math.sin(t * 0.1) * 0.2;
    }
  });

  const bars = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 8;
      temp.push({
        position: [Math.cos(angle) * radius, 0, Math.sin(angle) * radius],
        rotation: [0, -angle, 0],
      });
    }
    return temp;
  }, []);

  return (
    <group>
      {/* Background Stars for depth */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Central "Glass" Core */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[2, 64, 64]} />
          <MeshDistortMaterial
            color="#ffffff"
            transparent
            opacity={0.05}
            distort={0.3}
            speed={2}
            roughness={0}
            metalness={1}
            emissive="#22d3ee"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>

      {/* Ring of Light Particles */}
      <group ref={barsRef}>
        {bars.map((bar, i) => (
          <mesh key={i} position={bar.position as any} rotation={bar.rotation as any}>
            <boxGeometry args={[0.1, 1, 0.1]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#22d3ee" : "#818cf8"} 
              emissive={i % 2 === 0 ? "#22d3ee" : "#818cf8"} 
              emissiveIntensity={2}
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}
      </group>

      {/* Decorative Floor Grid */}
      <gridHelper args={[100, 50, "#22d3ee", "#1e293b"]} position={[0, -10, 0]} opacity={0.1} transparent />
      
      <Particles count={500} />
    </group>
  );
};

function Particles({ count = 500 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 10 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if(pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.z += 0.0005;
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
        size={0.05}
        color="#22d3ee"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}
