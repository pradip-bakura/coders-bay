import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import * as THREE from "three";

const Text3DComponent = () => {
  const textRef = useRef(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Center position={[0, 2, 0]}>
      <mesh ref={textRef}>
        <boxGeometry args={[2, 0.5, 0.1]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#1e40af"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Center>
  );
};

export default Text3DComponent;
