"use client";

import { motion } from "framer-motion";
import { BrainCircuit, ScanSearch, Cpu, Network } from "lucide-react";

export default function AIML() {
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="section container">
      
      {/* Background futuristic elements */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, background: "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 60%)" }}></div>
      <div style={{ position: "fixed", top: "20%", left: "-10%", width: "50%", height: "50%", border: "1px solid rgba(16, 185, 129, 0.1)", borderRadius: "50%", zIndex: -1 }}></div>
      <div style={{ position: "fixed", bottom: "-10%", right: "-10%", width: "60%", height: "60%", border: "1px solid rgba(59, 130, 246, 0.1)", borderRadius: "50%", zIndex: -1 }}></div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ marginTop: "40px" }}>
        
        <motion.div variants={itemVariants} style={{ marginBottom: "60px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(16, 185, 129, 0.1)", padding: "8px 16px", borderRadius: "30px", border: "1px solid rgba(16, 185, 129, 0.3)", marginBottom: "24px" }}>
            <BrainCircuit size={18} color="var(--accent)" />
            <span style={{ color: "var(--accent)", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "1px" }}>INTELLIGENT SYSTEMS</span>
          </div>
          <h1 className="heading-xl">AI & <span style={{ color: "var(--accent)" }}>Machine Learning</span></h1>
          <p className="text-muted" style={{ fontSize: "1.1rem", maxWidth: "700px", marginTop: "16px" }}>
            Developing optimization algorithms and computer vision systems for autonomous operations and industrial automation.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          
          {/* Project 1 */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="glass-card" style={{ position: "relative", overflow: "hidden", borderLeft: "4px solid var(--accent)" }}>
            <div style={{ position: "absolute", top: "-50px", right: "-50px", opacity: 0.05 }}>
              <Network size={300} />
            </div>
            
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px", position: "relative", zIndex: 1 }}>
              <div>
                <h2 className="heading-lg" style={{ marginBottom: "8px", fontSize: "2rem" }}>Multi-UAV 3D Plant Coverage</h2>
                <h3 className="text-muted" style={{ fontSize: "1.1rem", fontWeight: 400 }}>Bachelor Thesis | IPB University</h3>
              </div>
              <span style={{ background: "rgba(255,255,255,0.05)", padding: "6px 16px", borderRadius: "20px", fontSize: "0.9rem", border: "1px solid rgba(255,255,255,0.1)", color: "var(--foreground)" }}>
                2024 - 2025
              </span>
            </div>
            
            <p className="text-muted" style={{ fontSize: "1rem", lineHeight: "1.8", marginBottom: "32px", maxWidth: "800px", position: "relative", zIndex: 1 }}>
              Developed and analyzed an optimization algorithm for multi-UAV systems to maximize 3D plant surface coverage in controlled environment agriculture. Designed a mathematical modelling and simulation framework for autonomous drone placement, sensor visibility analysis, and system performance benchmarking.
            </p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginBottom: "32px", position: "relative", zIndex: 1 }}>
              <div style={{ background: "rgba(0,0,0,0.2)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <h4 style={{ color: "var(--accent)", marginBottom: "12px", fontSize: "0.9rem", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Cpu size={16} /> CORE ALGORITHMS
                </h4>
                <ul className="text-muted" style={{ fontSize: "0.9rem", lineHeight: "1.6", paddingLeft: "16px" }}>
                  <li>Next Best View (Greedy Optimization)</li>
                  <li>Genetic Algorithm</li>
                  <li>3D Geometry Processing</li>
                </ul>
              </div>
              <div style={{ background: "rgba(0,0,0,0.2)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <h4 style={{ color: "var(--accent)", marginBottom: "12px", fontSize: "0.9rem", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <ScanSearch size={16} /> IMPLEMENTATION
                </h4>
                <ul className="text-muted" style={{ fontSize: "0.9rem", lineHeight: "1.6", paddingLeft: "16px" }}>
                  <li>Python Simulation Environment</li>
                  <li>Camera Field-of-View Modelling</li>
                  <li>Occlusion Detection & Visibility Mapping</li>
                </ul>
              </div>
            </div>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", position: "relative", zIndex: 1 }}>
              {["Python", "Optimization", "Simulation", "Mathematical Modelling", "UAV Systems", "Data Analysis"].map(skill => (
                <span key={skill} className="skill-tag" style={{ fontSize: "0.85rem", color: "var(--accent)", background: "rgba(16, 185, 129, 0.1)", padding: "6px 12px", borderRadius: "6px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="glass-card" style={{ position: "relative", overflow: "hidden", borderLeft: "4px solid var(--primary)" }}>
            <div style={{ position: "absolute", top: "-50px", right: "-50px", opacity: 0.05 }}>
              <BrainCircuit size={300} />
            </div>
            
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px", position: "relative", zIndex: 1 }}>
              <div>
                <h2 className="heading-lg" style={{ marginBottom: "8px", fontSize: "2rem" }}>QC Automation System</h2>
                <h3 className="text-muted" style={{ fontSize: "1.1rem", fontWeight: 400 }}>PT. Porto Indonesia Sejahtera</h3>
              </div>
              <span style={{ background: "rgba(255,255,255,0.05)", padding: "6px 16px", borderRadius: "20px", fontSize: "0.9rem", border: "1px solid rgba(255,255,255,0.1)", color: "var(--foreground)" }}>
                2025 - 2026
              </span>
            </div>
            
            <p className="text-muted" style={{ fontSize: "1rem", lineHeight: "1.8", marginBottom: "32px", maxWidth: "800px", position: "relative", zIndex: 1 }}>
              Developed an intelligent Quality Control (QC) automation system using computer vision and real-time industrial sensing to improve inspection accuracy, consistency, and production efficiency. Designed the complete system architecture integrating conveyor cameras, sensors, actuators, and AI-based decision modules.
            </p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginBottom: "32px", position: "relative", zIndex: 1 }}>
              <div style={{ background: "rgba(0,0,0,0.2)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <h4 style={{ color: "var(--primary)", marginBottom: "12px", fontSize: "0.9rem", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <ScanSearch size={16} /> COMPUTER VISION
                </h4>
                <ul className="text-muted" style={{ fontSize: "0.9rem", lineHeight: "1.6", paddingLeft: "16px" }}>
                  <li>YOLO integration for object detection</li>
                  <li>Segment Anything Model (SAM) for segmentation</li>
                  <li>Automated pass/fail decision systems</li>
                </ul>
              </div>
              <div style={{ background: "rgba(0,0,0,0.2)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <h4 style={{ color: "var(--primary)", marginBottom: "12px", fontSize: "0.9rem", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Cpu size={16} /> SYSTEM ARCHITECTURE
                </h4>
                <ul className="text-muted" style={{ fontSize: "0.9rem", lineHeight: "1.6", paddingLeft: "16px" }}>
                  <li>PySide6 (Qt) Desktop Interface</li>
                  <li>Backend logic for sensor communication</li>
                  <li>Actuator triggering & Machine monitoring</li>
                </ul>
              </div>
            </div>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", position: "relative", zIndex: 1 }}>
              {["Python", "PySide6", "Qt", "YOLO", "SAM", "Signal Processing", "Sensor Integration"].map(skill => (
                <span key={skill} className="skill-tag" style={{ fontSize: "0.85rem", color: "var(--primary)", background: "rgba(59, 130, 246, 0.1)", padding: "6px 12px", borderRadius: "6px", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
