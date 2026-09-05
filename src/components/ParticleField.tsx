import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 1200;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const t = Math.random();
      // blue to violet gradient
      col[i * 3] = 0.2 + t * 0.3;
      col[i * 3 + 1] = 0.4 + t * 0.1;
      col[i * 3 + 2] = 0.9 + t * 0.1;
    }
    return [pos, col];
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.04;
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.02) * 0.05;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function GridLines() {
  const lineRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const verts: number[] = [];
    const cols: number[] = [];
    const size = 16;
    const step = 2;

    for (let x = -size; x <= size; x += step) {
      verts.push(x, -size, -4, x, size, -4);
      const a = Math.abs(x) / size;
      cols.push(0.1, 0.2 + a * 0.1, 0.4 + a * 0.2);
      cols.push(0.1, 0.2 + a * 0.1, 0.4 + a * 0.2);
    }
    for (let y = -size; y <= size; y += step) {
      verts.push(-size, y, -4, size, y, -4);
      const a = Math.abs(y) / size;
      cols.push(0.1, 0.2 + a * 0.1, 0.4 + a * 0.2);
      cols.push(0.1, 0.2 + a * 0.1, 0.4 + a * 0.2);
    }

    geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(cols, 3));
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (!lineRef.current) return;
    lineRef.current.rotation.z = clock.getElapsedTime() * 0.01;
    lineRef.current.position.z = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
  });

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <lineBasicMaterial vertexColors transparent opacity={0.15} />
    </lineSegments>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 70 }}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
        <GridLines />
      </Canvas>
    </div>
  );
}
