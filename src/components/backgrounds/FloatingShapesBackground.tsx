"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingShapesBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="canvas-container" style={{ overflow: "hidden", zIndex: -1 }}>
      {/* Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "15%",
          left: "5%",
          width: "40vw",
          height: "40vw",
          maxWidth: "400px",
          maxHeight: "400px",
          background: "var(--primary-glow)",
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "35vw",
          height: "35vw",
          maxWidth: "350px",
          maxHeight: "350px",
          background: "var(--secondary-glow)",
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />

      {/* Floating Glass Panels */}
      <motion.div
        initial={{ y: 0, rotate: 10 }}
        animate={{ y: [-20, 20, -20], rotate: [10, 15, 10] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "20%",
          right: "15%",
          width: "200px",
          height: "200px",
          background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "30px",
          transform: "perspective(500px) rotateX(20deg) rotateY(-20deg)",
        }}
      />
      <motion.div
        initial={{ y: 0, rotate: -15 }}
        animate={{ y: [20, -20, 20], rotate: [-15, -10, -15] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute",
          bottom: "25%",
          left: "10%",
          width: "150px",
          height: "150px",
          background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          transform: "perspective(500px) rotateX(-10deg) rotateY(20deg)",
        }}
      />
      
      {/* Floating Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "600px",
          height: "600px",
          marginLeft: "-300px",
          marginTop: "-300px",
          border: "1px dashed rgba(255,255,255,0.05)",
          borderRadius: "50%",
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "800px",
          height: "800px",
          marginLeft: "-400px",
          marginTop: "-400px",
          border: "1px dashed var(--card-border)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}
