import { Center, Text3D } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Group } from 'three';

type Props = {
  reduced: boolean;
};

export default function BuildWord({ reduced }: Props) {
  const ref = useRef<Group>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!ref.current) return;

    if (!reduced) {
      // map pointer position to a tiny tilt (≤ ~4°)
      const px = state.pointer.x; // [-1, 1]
      const py = state.pointer.y;
      target.current.x = -py * 0.06;
      target.current.y = px * 0.07;

      // ease toward target for buttery feel
      current.current.x += (target.current.x - current.current.x) * 0.05;
      current.current.y += (target.current.y - current.current.y) * 0.05;

      ref.current.rotation.x = current.current.x;
      ref.current.rotation.y = current.current.y;
    } else {
      ref.current.rotation.x = 0;
      ref.current.rotation.y = 0;
    }
  });

  return (
    <group ref={ref}>
      <Center>
        <Text3D
          font="/fonts/helvetiker_bold.typeface.json"
          size={1.6}
          height={0.45}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.04}
          bevelSize={0.025}
          bevelOffset={0}
          bevelSegments={4}
          letterSpacing={-0.06}
        >
          build
          <meshStandardMaterial
            color="#1A1A1A"
            roughness={0.3}
            metalness={0}
          />
        </Text3D>
      </Center>
    </group>
  );
}
