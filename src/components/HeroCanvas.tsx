import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function DataNebula() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 5000;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color("#22d3ee");
    const blue = new THREE.Color("#0891b2");

    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const angle = Math.random() * Math.PI * 2;
        const radius = 2 + Math.random() * 8;
        const spin = radius * 0.8;
        
        pos[i3] = Math.cos(angle + spin) * radius;
        pos[i3 + 1] = (Math.random() - 0.5) * 2;
        pos[i3 + 2] = Math.sin(angle + spin) * radius;

        // Use lerp instead of learn (which doesn't exist)
        const mixed = cyan.clone().lerp(blue, Math.random());
        col[i3] = mixed.r;
        col[i3 + 1] = mixed.g;
        col[i3 + 2] = mixed.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingCore() {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
            meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
        }
    });

    return (
        <mesh ref={meshRef}>
            <torusGeometry args={[3, 0.01, 16, 100]} />
            <meshBasicMaterial color="#22d3ee" transparent opacity={0.2} />
        </mesh>
    );
}

export const HeroCanvas = () => {
  return (
    <div className="h-full w-full bg-[#020617]">
      <Canvas camera={{ position: [0, 5, 12], fov: 45 }}>
        <DataNebula />
        <FloatingCore />
        <fog attach="fog" args={["#020617", 5, 20]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#22d3ee" />
      </Canvas>
    </div>
  );
};