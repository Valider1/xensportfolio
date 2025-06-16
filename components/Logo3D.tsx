// components/Logo3D.tsx
"use client"

import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Center, OrbitControls } from "@react-three/drei"

// This component *is* a child of <Canvas>, so useFrame will work
function RotatingText() {
  const group = useRef<THREE.Group>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (group.current) group.current.rotation.y = t * 0.2
  })

  return (
    <group ref={group}>
      <Center>
        <Text
          fontSize={1}
          letterSpacing={-0.05}
          font="/fonts/Inter_Bold.json"
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.03}
          curveSegments={12}
          material-toneMapped={false}
        >
          Xens
          <meshStandardMaterial color="#00FFFF" />
        </Text>
      </Center>
    </group>
  )
}

export default function Logo3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} className="w-full h-64">
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {/* Now RotatingText is inside the Canvas context */}
      <RotatingText />
    </Canvas>
  )
}
