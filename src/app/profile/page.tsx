"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Award, Heart, Briefcase } from "lucide-react";

export default function Profile() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="section container">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ marginTop: "60px" }}>
        
        <motion.div variants={itemVariants} style={{ marginBottom: "60px", textAlign: "center" }}>
          <h1 className="heading-xl">My <span className="text-gradient">Profile</span></h1>
          <p className="text-muted" style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "16px auto 0" }}>
            A passionate developer focused on mobile apps, AI integrations, and game development.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
          
          {/* Education */}
          <motion.div variants={itemVariants} className="glass-card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ background: "var(--primary-glow)", padding: "12px", borderRadius: "12px" }}>
                <GraduationCap size={24} color="var(--primary)" />
              </div>
              <h2 className="heading-md" style={{ margin: 0 }}>Education</h2>
            </div>
            
            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--foreground)" }}>Computer Science (S.Kom)</h3>
              <p className="text-muted" style={{ fontSize: "0.95rem" }}>IPB University | Aug 2021 – Aug 2025</p>
              <ul className="text-muted" style={{ marginTop: "12px", marginLeft: "20px", fontSize: "0.95rem" }}>
                <li>GPA: 3.74</li>
                <li>Subsidiary: Computational Intelligence and Optimization</li>
                <li>Thesis: Swarm-UAV, Coordination Algorithm</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--foreground)" }}>High School</h3>
              <p className="text-muted" style={{ fontSize: "0.95rem" }}>SMAN 8 Depok | 2018 – Sep 2021</p>
              <p className="text-muted" style={{ marginTop: "8px", fontSize: "0.95rem" }}>National Science Olympiad (Physics) participant, top 3 ranking.</p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="glass-card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ background: "rgba(16, 185, 129, 0.2)", padding: "12px", borderRadius: "12px" }}>
                <Code2 size={24} color="var(--accent)" />
              </div>
              <h2 className="heading-md" style={{ margin: 0 }}>Skills</h2>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <h4 style={{ fontSize: "0.9rem", color: "var(--primary)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>Languages & Core</h4>
                <p className="text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.8" }}>
                  Flutter (Dart), C, C++, Python, Unity (C#), Swift, Javascript, Java, Kotlin, PostgreSQL, R
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: "0.9rem", color: "var(--primary)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>Domains</h4>
                <p className="text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.8" }}>
                  Mobile App Development, Game Programming, Optimization, Mathematical Modelling, Data Analysis, Computer Vision (YOLO, SAM)
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: "0.9rem", color: "var(--primary)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>Tools</h4>
                <p className="text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.8" }}>
                  Git, Figma, Visual Studio, PySide6, Qt, Linux, macOS
                </p>
              </div>
            </div>
          </motion.div>

          {/* Certificates & Hobbies */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <motion.div variants={itemVariants} className="glass-card" style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div style={{ background: "rgba(139, 92, 246, 0.2)", padding: "12px", borderRadius: "12px" }}>
                  <Award size={24} color="var(--secondary)" />
                </div>
                <h2 className="heading-md" style={{ margin: 0 }}>Achievements</h2>
              </div>
              
              <ul className="text-muted" style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px", fontSize: "0.95rem" }}>
                <li style={{ borderLeft: "2px solid var(--secondary)", paddingLeft: "16px" }}>
                  <strong>1st Place Best Sounds</strong> (Puaka) <br /> JOINTS Game Jam (2023)
                </li>
                <li style={{ borderLeft: "2px solid var(--secondary)", paddingLeft: "16px" }}>
                  <strong>Finalist</strong> (Archemist's Chronicles) <br /> GEMASTIK XVI (2023)
                </li>
                <li style={{ borderLeft: "2px solid var(--secondary)", paddingLeft: "16px" }}>
                  <strong>Honorable Mention</strong> (Uprising) <br /> GameJamPlus Indonesia (2022)
                </li>
                <li style={{ borderLeft: "2px solid var(--secondary)", paddingLeft: "16px" }}>
                  <strong>Certified Game Programmer</strong> <br /> Agate Academy (2024)
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div style={{ background: "rgba(244, 63, 94, 0.2)", padding: "12px", borderRadius: "12px" }}>
                  <Heart size={24} color="#f43f5e" />
                </div>
                <h2 className="heading-md" style={{ margin: 0 }}>Interests</h2>
              </div>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {["Game Development", "Swimming", "Badminton", "Listening to Music"].map((hobby) => (
                  <span key={hobby} style={{ background: "var(--card-border)", padding: "6px 12px", borderRadius: "20px", fontSize: "0.85rem", color: "var(--foreground)" }}>
                    {hobby}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
