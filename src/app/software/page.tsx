"use client";

import { motion } from "framer-motion";
import { Smartphone, Server, Layers, LayoutTemplate } from "lucide-react";

export default function Software() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const projects = [
    {
      title: "Porto CRM",
      period: "2024 – 2025",
      description: "Internal Customer Relationship Management system for sales operations and workflow automation. Led full lifecycle from system design to deployment.",
      skills: ["Flutter", "Dart", "Swift", "Kotlin", "API", "System Design"],
      icon: <Smartphone size={32} color="var(--primary)" />,
      bg: "var(--primary-glow)",
    },
    {
      title: "Porto Portal Apps",
      period: "2025",
      description: "Cross-functional product development with native integrations and platform-specific features using Kotlin and Swift. REST API services via Express.js.",
      skills: ["Express.js", "Kotlin", "Swift", "Backend Integration"],
      icon: <Server size={32} color="var(--secondary)" />,
      bg: "rgba(139, 92, 246, 0.2)",
    },
    {
      title: "Porto HRIS Apps",
      period: "2024 – 2025",
      description: "Internal Human Resources Information System app for employee management, attendance tracking, and administrative workflows.",
      skills: ["Flutter", "UI/UX", "State Management"],
      icon: <Layers size={32} color="var(--accent)" />,
      bg: "rgba(16, 185, 129, 0.2)",
    },
    {
      title: "Porto Customer Apps",
      period: "2024 – 2025",
      description: "Customer-facing mobile applications focused on improved stability, usability, and performance to drive engagement and operational efficiency.",
      skills: ["Flutter", "REST API", "App Optimization"],
      icon: <LayoutTemplate size={32} color="#f43f5e" />,
      bg: "rgba(244, 63, 94, 0.2)",
    }
  ];

  return (
    <div className="section container">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ marginTop: "60px" }}>
        
        <motion.div variants={itemVariants} style={{ marginBottom: "60px", textAlign: "center" }}>
          <h1 className="heading-xl">Software & <span className="text-gradient">Mobile Apps</span></h1>
          <p className="text-muted" style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "16px auto 0" }}>
            A showcase of enterprise mobile solutions, CRM systems, and cross-functional backend integrations.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "32px" }}>
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="glass-card" 
              style={{ display: "flex", flexDirection: "column" }}
              whileHover={{ scale: 1.02 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                <div style={{ background: project.bg, padding: "16px", borderRadius: "16px" }}>
                  {project.icon}
                </div>
                <span className="text-muted" style={{ fontSize: "0.9rem", fontWeight: 500, background: "var(--card-border)", padding: "4px 12px", borderRadius: "20px" }}>
                  {project.period}
                </span>
              </div>
              
              <h3 className="heading-md" style={{ marginBottom: "12px", color: "var(--foreground)" }}>{project.title}</h3>
              <p className="text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "24px", flex: 1 }}>
                {project.description}
              </p>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {project.skills.map(skill => (
                  <span key={skill} style={{ fontSize: "0.8rem", color: "var(--foreground)", background: "rgba(255,255,255,0.05)", padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.1)" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
