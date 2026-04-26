import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import BuildWord from './BuildWord';
import MobileFallback from './MobileFallback';
import { useReducedMotion } from '../lib/useReducedMotion';

export default function HeroScene() {
  const reduced = useReducedMotion();

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
      camera={{ position: [0, 0, 7], fov: 35 }}
      style={{ background: 'transparent' }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[-3, 4, 5]} intensity={0.4} />

      <Suspense fallback={null}>
        {reduced ? (
          <BuildWord reduced />
        ) : (
          <Float
            speed={0.8}
            rotationIntensity={0.3}
            floatIntensity={0.4}
          >
            <BuildWord reduced={false} />
          </Float>
        )}
      </Suspense>
    </Canvas>
  );
}

// Re-export so consumers can use the SVG fallback when 3D is not desired.
export { MobileFallback };
