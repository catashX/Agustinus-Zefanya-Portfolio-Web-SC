"use client";

import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Stars, Text3D, Center } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Gamepad2, PlaySquare, Swords } from "lucide-react";

// A floating 3D primitive to represent game assets
function FloatingShape({ position, color, type }: { position: [number, number, number], color: string, type: 'box' | 'octahedron' | 'icosahedron' }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [clicked, setClick] = useState(false);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh
        position={position}
        ref={meshRef}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => setClick(!clicked)}
        onPointerOver={(event) => { setHover(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={(event) => { setHover(false); document.body.style.cursor = 'auto'; }}
      >
        {type === 'box' && <boxGeometry args={[1, 1, 1]} />}
        {type === 'octahedron' && <octahedronGeometry args={[1]} />}
        {type === 'icosahedron' && <icosahedronGeometry args={[1]} />}
        <meshStandardMaterial 
          color={hovered ? "#fff" : color} 
          roughness={0.1}
          metalness={0.8}
          emissive={hovered ? color : "#000"}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

export default function GameDev() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div style={{ position: "relative", width: "100vw", minHeight: "100vh", overflow: "hidden" }}>
      
      {/* 3D Canvas Background */}
      <div className="canvas-container" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
          <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
          
          <FloatingShape position={[-3, 1, -2]} color="#3b82f6" type="icosahedron" />
          <FloatingShape position={[4, -1, -3]} color="#10b981" type="octahedron" />
          <FloatingShape position={[2, 2, -1]} color="#f43f5e" type="box" />
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="section container content-wrapper" style={{ minHeight: "100vh", position: "relative", zIndex: 10, pointerEvents: "none" }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ marginTop: "80px", maxWidth: "800px" }}>
          
          <motion.div variants={itemVariants} style={{ marginBottom: "60px" }}>
            <h1 className="heading-xl">Game <span className="text-gradient">Development</span></h1>
            <p className="text-muted" style={{ fontSize: "1.2rem", marginTop: "16px", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
              Building immersive worlds, designing engaging mechanics, and writing optimized gameplay logic.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card" style={{ marginBottom: "32px", background: "rgba(10, 10, 10, 0.7)", pointerEvents: "auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <div style={{ background: "rgba(59, 130, 246, 0.2)", padding: "12px", borderRadius: "12px" }}>
                <Swords size={28} color="var(--primary)" />
              </div>
              <div>
                <h2 className="heading-md" style={{ margin: 0 }}>Courier Conquest</h2>
                <span className="text-muted" style={{ fontSize: "0.9rem" }}>Agate Academy (2023)</span>
              </div>
            </div>
            <p className="text-muted" style={{ fontSize: "1rem", lineHeight: "1.7", marginBottom: "20px" }}>
              Developed a fantasy adventure/RPG game set in the world of Eldoria, where players complete delivery missions, explore the environment, and overcome enemies. Contributed as Game Designer, Game Programmer, and Technical Artist.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
              {["Unity", "C#", "Game Design", "HLSL Shading", "Behaviour Tree", "OOP"].map(skill => (
                <span key={skill} style={{ fontSize: "0.8rem", color: "white", background: "rgba(255,255,255,0.1)", padding: "4px 10px", borderRadius: "6px" }}>
                  {skill}
                </span>
              ))}
            </div>
            <a href="https://zephx.itch.io" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ fontSize: "0.9rem", padding: "10px 20px" }}>
              Play on Itch.io <Gamepad2 size={16} />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card" style={{ background: "rgba(10, 10, 10, 0.7)", pointerEvents: "auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <div style={{ background: "rgba(139, 92, 246, 0.2)", padding: "12px", borderRadius: "12px" }}>
                <PlaySquare size={28} color="var(--secondary)" />
              </div>
              <div>
                <h2 className="heading-md" style={{ margin: 0 }}>Game Jams</h2>
                <span className="text-muted" style={{ fontSize: "0.9rem" }}>Multiple Events</span>
              </div>
            </div>
            <ul className="text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.8", paddingLeft: "20px" }}>
              <li><strong>Puaka:</strong> 1st Place Best Sounds at JOINTS Game Jam 2023.</li>
              <li><strong>Archemist's Chronicles:</strong> Finalist at GEMASTIK XVI 2023.</li>
              <li><strong>Uprising:</strong> Honorable Mention at GameJamPlus Indonesia 2022.</li>
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
