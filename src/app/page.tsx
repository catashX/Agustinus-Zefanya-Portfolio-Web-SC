"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Gamepad2, Phone } from "lucide-react";
import Link from "next/link";
import FloatingShapesBackground from "@/components/backgrounds/FloatingShapesBackground";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="section container" style={{ alignItems: "center", textAlign: "center" }}>
      <FloatingShapesBackground />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="glass-card"
        style={{ maxWidth: "800px", width: "100%", padding: "60px 40px" }}
      >
        <motion.div variants={itemVariants} style={{ marginBottom: "24px" }}>
          <span className="text-gradient" style={{ fontSize: "1.2rem", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>
            Portfolio 2026
          </span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="heading-xl">
          Hi, I'm <span className="text-gradient">Agustinus Zefanya</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-muted" style={{ fontSize: "1.25rem", marginTop: "24px", marginBottom: "40px", maxWidth: "600px", marginInline: "auto" }}>
          Mobile Apps Developer, Game Dev, and AI Enthusiast building elegant digital experiences and intelligent systems.
        </motion.p>
        
        <motion.div variants={itemVariants} style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
          <Link href="/profile" className="btn btn-primary">
            View Profile <ArrowRight size={18} />
          </Link>
          <Link href="/software" className="btn btn-outline">
            See My Work
          </Link>
        </motion.div>
        
        <motion.div variants={itemVariants} style={{ display: "flex", gap: "24px", justifyContent: "center" }}>
          <motion.a whileHover={{ scale: 1.2, y: -4 }} href="https://github.com/catashX" target="_blank" rel="noreferrer" className="text-muted hover:text-white hover-glow" style={{ transition: "all 0.2s" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, y: -4 }} href="https://zephx.itch.io" target="_blank" rel="noreferrer" className="text-muted hover:text-white hover-glow" style={{ transition: "all 0.2s" }}>
            <Gamepad2 size={24} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, y: -4 }} href="mailto:agustinuszefanya@gmail.com" className="text-muted hover:text-white hover-glow" style={{ transition: "all 0.2s" }}>
            <Mail size={24} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, y: -4 }} href="tel:+6281318463100" className="text-muted hover:text-white hover-glow" style={{ transition: "all 0.2s" }}>
            <Phone size={24} />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
