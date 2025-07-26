import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Galaxy = () => {
  const galaxyRef = useRef<THREE.Points>(null);
  
  // Create simple spiral galaxy
  const galaxyGeometry = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      
      // Create gentle spiral pattern
      const radius = Math.random() * 20;
      const branchAngle = (i % 3) * Math.PI * 0.66;
      const angle = branchAngle + radius * 0.2;
      
      const randomX = (Math.random() - 0.5) * 0.5;
      const randomY = (Math.random() - 0.5) * 0.3;
      const randomZ = (Math.random() - 0.5) * 0.5;
      
      positions[i3] = Math.cos(angle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(angle) * radius + randomZ;
      
      // Calm blue to white gradient
      const mixedColor = new THREE.Color();
      const centerColor = new THREE.Color('#ffffff');
      const edgeColor = new THREE.Color('#4a90e2');
      
      mixedColor.lerpColors(centerColor, edgeColor, radius / 20);
      
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (galaxyRef.current) {
      galaxyRef.current.rotation.y = time * 0.005; // Very slow rotation
    }
  });

  return (
    <points ref={galaxyRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2000}
          array={galaxyGeometry.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={2000}
          array={galaxyGeometry.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation={true}
        transparent
        opacity={0.6}
        vertexColors
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default Galaxy;