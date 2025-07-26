import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import Particles from './Particles';
import Galaxy from './Galaxy';

const Scene3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Soft ambient lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[0, 0, 0]} intensity={0.5} color="#ffffff" />
          <directionalLight
            position={[0, 10, 5]}
            intensity={0.8}
          />
          
          {/* Environment */}
          <Environment preset="night" />
          
          {/* Galaxy Components */}
          <Galaxy />
          <Particles />
          
          {/* Controls */}
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.1}
            maxDistance={40}
            minDistance={8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;