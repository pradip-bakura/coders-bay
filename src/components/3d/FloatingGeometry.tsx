import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingGeometry = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const octahedronRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.3;
      sphereRef.current.rotation.y = time * 0.5;
      sphereRef.current.position.y = Math.sin(time * 0.8) * 0.5;
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.4;
      boxRef.current.rotation.z = time * 0.3;
      boxRef.current.position.y = Math.sin(time * 1.2) * 0.3;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.y = time * 0.6;
      torusRef.current.position.y = Math.sin(time * 0.6) * 0.4;
    }
    
    if (octahedronRef.current) {
      octahedronRef.current.rotation.x = time * 0.5;
      octahedronRef.current.rotation.y = time * 0.4;
      octahedronRef.current.position.y = Math.sin(time * 1.0) * 0.6;
    }
  });

  return (
    <>
      <mesh ref={sphereRef} position={[-3, 0, -2]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#1e40af"
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      <mesh ref={boxRef} position={[3, 1, -1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#7c3aed"
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      <mesh ref={torusRef} position={[-2, -2, 1]}>
        <torusGeometry args={[0.6, 0.2, 16, 100]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#0891b2"
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      <mesh ref={octahedronRef} position={[2, -1, 2]}>
        <octahedronGeometry args={[0.7]} />
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#d97706"
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
    </>
  );
};

export default FloatingGeometry;