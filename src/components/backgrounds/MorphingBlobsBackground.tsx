"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MorphingBlobsBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, overflow: "hidden", pointerEvents: "none" }}>
      {/* Primary morphing blob */}
      <motion.div
        animate={{
          borderRadius: [
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "70% 30% 50% 50% / 30% 30% 70% 70%",
            "50% 50% 30% 70% / 60% 40% 60% 40%",
            "30% 70% 40% 60% / 50% 60% 30% 70%",
            "40% 60% 70% 30% / 40% 50% 60% 50%",
          ],
          scale: [1, 1.1, 0.95, 1.05, 1],
          rotate: [0, 45, 90, 135, 180],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "55vw",
          height: "55vw",
          maxWidth: "600px",
          maxHeight: "600px",
          background: "var(--primary-glow)",
          filter: "blur(100px)",
          opacity: 0.5,
        }}
      />

      {/* Secondary morphing blob */}
      <motion.div
        animate={{
          borderRadius: [
            "70% 30% 50% 50% / 30% 30% 70% 70%",
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "30% 70% 40% 60% / 50% 60% 30% 70%",
            "50% 50% 30% 70% / 60% 40% 60% 40%",
            "70% 30% 50% 50% / 30% 30% 70% 70%",
          ],
          scale: [1, 0.9, 1.1, 1, 1],
          rotate: [0, -30, -60, -90, -120],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "50vw",
          height: "50vw",
          maxWidth: "550px",
          maxHeight: "550px",
          background: "var(--secondary-glow)",
          filter: "blur(100px)",
          opacity: 0.4,
        }}
      />

      {/* Small accent blob */}
      <motion.div
        animate={{
          borderRadius: [
            "50% 50% 30% 70% / 60% 40% 60% 40%",
            "70% 30% 50% 50% / 30% 30% 70% 70%",
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "50% 50% 30% 70% / 60% 40% 60% 40%",
          ],
          x: [-20, 20, -20],
          y: [10, -10, 10],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          position: "absolute",
          top: "40%",
          left: "30%",
          width: "25vw",
          height: "25vw",
          maxWidth: "300px",
          maxHeight: "300px",
          background: "linear-gradient(135deg, var(--primary-glow), var(--secondary-glow))",
          filter: "blur(80px)",
          opacity: 0.3,
        }}
      />

      {/* Decorative lines */}
      <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, opacity: 0.04 }}>
        <motion.line
          x1="0" y1="30%" x2="100%" y2="70%"
          stroke="var(--primary)" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="20%" y1="0" x2="80%" y2="100%"
          stroke="var(--secondary)" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.circle
          cx="50%" cy="50%" r="200"
          fill="none" stroke="var(--primary)" strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1], opacity: [0, 0.3, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </svg>
    </div>
  );
}
