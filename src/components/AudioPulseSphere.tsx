import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const AudioPulseSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRefs = useRef<THREE.Group>(null);

  const particlesCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
        const theta = Math.acos(THREE.MathUtils.randFloatSpread(2));
        const phi = THREE.MathUtils.randFloatSpread(360);
        const distance = 4;
        
        pos[i * 3] = distance * Math.sin(theta) * Math.cos(phi);
        pos[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi);
        pos[i * 3 + 2] = distance * Math.cos(theta);
    }
    return pos;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.1;
      meshRef.current.rotation.z = t * 0.05;
      
      // Pulse scale
      const pulse = 1 + Math.sin(t * 2) * 0.05 + Math.sin(t * 5) * 0.02;
      meshRef.current.scale.set(pulse, pulse, pulse);
    }

    if (ringRefs.current) {
        ringRefs.current.children.forEach((ring, i) => {
            ring.rotation.x = t * (0.2 + i * 0.1);
            ring.rotation.y = t * (0.1 + i * 0.05);
            const ringPulse = 1 + Math.sin(t * 3 + i) * 0.1;
            ring.scale.set(ringPulse, ringPulse, ringPulse);
        });
    }
  });

  return (
    <group>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#22d3ee"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      <group ref={ringRefs}>
        {[1, 1.5, 2].map((radius, i) => (
            <mesh key={i}>
                <torusGeometry args={[radius * 3, 0.01, 16, 100]} />
                <meshBasicMaterial color="#22d3ee" transparent opacity={0.15 - i * 0.04} />
            </mesh>
        ))}
      </group>

      <mesh>
        <sphereGeometry args={[3.8, 32, 32]} />
        <meshBasicMaterial color="#0ea5e9" wireframe transparent opacity={0.05} />
      </mesh>
    </group>
  );
};
