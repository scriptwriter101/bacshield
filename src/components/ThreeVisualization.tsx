import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

const ProbioticCapsule: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Create particle system for bacteria
  const particles = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <>
      {/* Main Capsule */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <capsuleGeometry args={[0.5, 2, 4, 8]} />
        <meshStandardMaterial
          color="#3b82f6"
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Probiotic Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={particles}
            count={particles.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#10b981"
          size={0.05}
          transparent
          opacity={0.8}
        />
      </points>

      {/* Tumor Target */}
      <Sphere position={[3, 1, 0]} args={[0.3]} material-color="#ef4444" material-opacity={0.7} material-transparent />
      <Sphere position={[-2, -1, 1]} args={[0.2]} material-color="#ef4444" material-opacity={0.7} material-transparent />
      
      {/* Targeting Lines */}
      <mesh>
        <cylinderGeometry args={[0.01, 0.01, 3]} />
        <meshBasicMaterial color="#fbbf24" transparent opacity={0.6} />
      </mesh>

      {/* Ambient Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
    </>
  );
};

const ThreeVisualization: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
        <ProbioticCapsule />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};

export default ThreeVisualization;