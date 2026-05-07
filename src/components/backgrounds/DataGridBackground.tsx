"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function DataGridBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate vertical data streams
  const streams = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${(i / 18) * 100 + Math.random() * 3}%`,
    delay: Math.random() * 6,
    duration: 4 + Math.random() * 6,
    height: 60 + Math.random() * 200,
    opacity: 0.04 + Math.random() * 0.08,
  }));

  // Generate horizontal grid lines
  const horizontalLines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    top: `${12 + i * 11}%`,
    delay: i * 0.8,
  }));

  // Generate floating code-like particles
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    top: `${10 + Math.random() * 80}%`,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, overflow: "hidden", pointerEvents: "none" }}>
      {/* Subtle radial background gradient */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "radial-gradient(ellipse at 30% 20%, var(--primary-glow) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, var(--secondary-glow) 0%, transparent 50%)",
        opacity: 0.3,
        filter: "blur(60px)",
      }} />

      {/* Vertical data streams */}
      {streams.map((stream) => (
        <motion.div
          key={`stream-${stream.id}`}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "100vh", opacity: [0, stream.opacity, stream.opacity, 0] }}
          transition={{
            duration: stream.duration,
            repeat: Infinity,
            delay: stream.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: stream.left,
            top: 0,
            width: "1px",
            height: `${stream.height}px`,
            background: `linear-gradient(to bottom, transparent, var(--primary), transparent)`,
          }}
        />
      ))}

      {/* Horizontal grid lines that sweep */}
      {horizontalLines.map((line) => (
        <motion.div
          key={`hline-${line.id}`}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: [0, 1, 1, 0], opacity: [0, 0.06, 0.06, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: line.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: line.top,
            left: 0,
            width: "100%",
            height: "1px",
            background: "linear-gradient(to right, transparent 5%, var(--secondary) 50%, transparent 95%)",
            transformOrigin: "left",
          }}
        />
      ))}

      {/* Floating dot particles */}
      {particles.map((p) => (
        <motion.div
          key={`particle-${p.id}`}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: "var(--primary)",
            boxShadow: "0 0 8px var(--primary-glow)",
          }}
        />
      ))}

      {/* Corner bracket decorations */}
      <div style={{
        position: "absolute",
        top: "15%",
        left: "8%",
        width: "80px",
        height: "80px",
        borderLeft: "1px solid rgba(255,255,255,0.06)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }} />
      <div style={{
        position: "absolute",
        bottom: "15%",
        right: "8%",
        width: "80px",
        height: "80px",
        borderRight: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }} />
    </div>
  );
}
