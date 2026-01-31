import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// --- Constants ---
const INK_COLOR = '#CCFF00'; // Lime Green
const GLOBE_RADIUS = 5;

// --- Detailed Earth Component ---
const DetailedGlobe = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  const wireframeRef = useRef<THREE.Mesh>(null!);
  const solidRef = useRef<THREE.Mesh>(null!);

  // Generate particles for a "Digital/Pixel" look
  const { positions, colors } = useMemo(() => {
    const count = 12000; 
    const pos = [];
    const col = [];
    const color = new THREE.Color('#FFFFFF'); 
    const accentColor = new THREE.Color(INK_COLOR);

    // Fibonacci Sphere Algorithm for even distribution
    // This creates a very structured, "connected" pixel feel
    for (let i = 0; i < count; i++) {
        const phi = Math.acos(1 - 2 * (i + 0.5) / count);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        
        const x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
        const y = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);
        const z = GLOBE_RADIUS * Math.cos(phi);
        
        pos.push(x, y, z);

        // Tech pattern: Periodic lime bands
        if (Math.abs(y) < 0.5 || Math.abs(y) > 4) {
             col.push(accentColor.r, accentColor.g, accentColor.b);
        } else {
             // Random tech noise
             if (Math.random() > 0.9) {
                col.push(accentColor.r, accentColor.g, accentColor.b);
             } else {
                col.push(color.r, color.g, color.b);
             }
        }
    }
    
    return {
        positions: new Float32Array(pos),
        colors: new Float32Array(col)
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const rotSpeed = 0.1;

    // Unified Rotation
    if (pointsRef.current) {
        pointsRef.current.rotation.y = time * rotSpeed;
        pointsRef.current.rotation.x = 0.2; // Slight tilt
    }
    if (wireframeRef.current) {
        wireframeRef.current.rotation.y = time * rotSpeed;
        wireframeRef.current.rotation.x = 0.2;
    }
    if (solidRef.current) {
        solidRef.current.rotation.y = time * rotSpeed;
        solidRef.current.rotation.x = 0.2;
    }
  });

  return (
    <group position={[3, 0, 0]}>
        {/* 1. Black Solid Core (Occlusion) - Makes it feel solid/real */}
        <mesh ref={solidRef}>
            <sphereGeometry args={[GLOBE_RADIUS * 0.99, 64, 64]} />
            <meshBasicMaterial color="#000000" />
        </mesh>

        {/* 2. Wireframe Mesh - "Connected" feel */}
        <mesh ref={wireframeRef}>
             <sphereGeometry args={[GLOBE_RADIUS, 48, 48]} />
             <meshBasicMaterial 
                color="#333333" 
                wireframe 
                transparent 
                opacity={0.3} 
             />
        </mesh>

        {/* 3. Pixel Points - "Fine Pixels" */}
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={colors.length / 3}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.04} 
                vertexColors
                transparent
                opacity={1}
                sizeAttenuation
                map={null} // Use squares (default) for pixel look
            />
        </points>
    </group>
  );
};

const ReactiveBackground = () => {
  return (
    <div className="absolute inset-0 z-0 bg-black">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 45 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={1} />
        <DetailedGlobe />
      </Canvas>
    </div>
  );
};

export default ReactiveBackground;
