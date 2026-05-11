"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Server, Layers, LayoutTemplate, ChevronRight, ChevronLeft } from "lucide-react";
import DataGridBackground from "@/components/backgrounds/DataGridBackground";
import SkillTag from "@/components/SkillTag";
import SkillModal from "@/components/SkillModal";
import StoreButton from "@/components/StoreButton";
import { type SkillInfo } from "@/data/skills";

const APP_PROJECTS = [
  {
    id: "sales",
    title: "Porto Sales Team",
    category: "Enterprise Solution",
    description: "A comprehensive sales management tool designed for field agents to manage orders, track performance, and sync real-time data with the central system.",
    skills: ["Flutter", "Dart", "Swift", "Kotlin", "State Management", "REST API"],
    theme: "#3b82f6",
    links: {
      android: "https://play.google.com/store/apps/details?id=co.id.porto.portosales",
      ios: "https://apps.apple.com/id/app/porto-sales-team/id1598551580"
    },
    screenshots: [
      "/assets/Sales_Assets/unnamed.png",
      "/assets/Sales_Assets/unnamed-1.png",
      "/assets/Sales_Assets/unnamed-2.png",
      "/assets/Sales_Assets/unnamed-3.png",
      "/assets/Sales_Assets/unnamed-4.png",
    ]
  },
  {
    id: "customer",
    title: "Porto Customer",
    category: "B2C Application",
    description: "User-centric mobile application for customers to browse products, track orders, and interact with the Porto ecosystem seamlessly.",
    skills: ["Flutter", "UI/UX", "Firebase", "App Optimization", "Customer Experience"],
    theme: "#f43f5e",
    links: {
      android: "https://play.google.com/store/apps/details?id=co.id.porto.customer",
      ios: "https://apps.apple.com/us/app/porto-customer/id6476086883"
    },
    screenshots: [
      "/assets/Customer_assets/unnamed.png",
      "/assets/Customer_assets/unnamed-1.png",
      "/assets/Customer_assets/unnamed-2.png",
      "/assets/Customer_assets/unnamed-3.png",
      "/assets/Customer_assets/unnamed-4.png",
    ]
  },
  {
    id: "crm",
    title: "Porto CRM",
    category: "Internal Management",
    description: "Internal Customer Relationship Management system for sales operations and workflow automation. Led full lifecycle from system design to deployment.",
    skills: ["Flutter", "Dart", "System Design", "Internal Tools", "Data Visualization"],
    theme: "#8b5cf6",
    links: {
      android: "https://play.google.com/store/apps/details?id=co.id.porto.crm",
      ios: "https://apps.apple.com/us/app/porto-crm/id6739332731"
    },
    screenshots: [
      "/assets/CRM_assets/unnamed.png",
      "/assets/CRM_assets/unnamed-1.png",
      "/assets/CRM_assets/unnamed-2.png",
      "/assets/CRM_assets/unnamed-3.png",
      "/assets/CRM_assets/unnamed-4.png",
    ]
  },
  {
    id: "hris",
    title: "Porto HRIS",
    category: "Enterprise HR",
    description: "Internal Human Resources Information System app for employee management, attendance tracking, and administrative workflows.",
    skills: ["Flutter", "Kotlin", "Swift", "HR Management", "Security"],
    theme: "#10b981",
    links: {
      android: "https://play.google.com/store/apps/details?id=co.id.porto.hrisapp",
      ios: "https://apps.apple.com/id/app/porto-hris/id1660736100"
    },
    screenshots: [
      "/assets/HRIS_assets/unnamed.png",
      "/assets/HRIS_assets/unnamed-1.png",
      "/assets/HRIS_assets/unnamed-2.png",
      "/assets/HRIS_assets/unnamed-3.png",
      "/assets/HRIS_assets/unnamed-4.png",
    ]
  },
  {
    id: "portal",
    title: "Porto Portal",
    category: "Cross-Platform Hub",
    description: "Cross-functional product development with native integrations and platform-specific features. Serves as a central hub for various Porto services.",
    skills: ["Express.js", "Kotlin", "Swift", "Backend Integration", "Native Modules"],
    theme: "#0ea5e9",
    links: {
      android: "https://play.google.com/store/apps/details?id=co.id.porto.portal",
      ios: "https://apps.apple.com/us/app/porto-portal/id6745817491"
    },
    screenshots: [
      "/assets/Portal_Assets/unnamed.png",
      "/assets/Portal_Assets/unnamed-1.png",
      "/assets/Portal_Assets/unnamed-2.png",
      "/assets/Portal_Assets/unnamed-3.png",
      "/assets/Portal_Assets/unnamed-4.png",
    ]
  }
];

export default function Software() {
  const [selectedSkill, setSelectedSkill] = useState<SkillInfo | null>(null);
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);
  const activeApp = APP_PROJECTS[activeAppIndex];

  const nextApp = () => {
    setActiveAppIndex((prev) => (prev + 1) % APP_PROJECTS.length);
    setActiveScreenshotIndex(0);
  };
  const prevApp = () => {
    setActiveAppIndex((prev) => (prev - 1 + APP_PROJECTS.length) % APP_PROJECTS.length);
    setActiveScreenshotIndex(0);
  };

  return (
    <div className="section" style={{ minHeight: "100vh", padding: "100px 0 0" }}>
      <DataGridBackground />
      <SkillModal skill={selectedSkill} isOpen={!!selectedSkill} onClose={() => setSelectedSkill(null)} />
      
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <header style={{ marginBottom: "60px", textAlign: "center" }}>
          <motion.h1 
            className="heading-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Software & <span className="text-gradient">Mobile Apps</span>
          </motion.h1>
          <motion.p 
            className="text-muted" 
            style={{ fontSize: "1.1rem", maxWidth: "700px", margin: "16px auto 0" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Showcasing a collection of production-grade mobile applications and enterprise solutions built with Flutter, Kotlin, and Swift.
          </motion.p>
        </header>

        {/* Interactive Showcase */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "40px" }}>
          
          {/* Navigation Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
            {APP_PROJECTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveAppIndex(idx);
                  setActiveScreenshotIndex(0);
                }}
                style={{
                  width: activeAppIndex === idx ? "40px" : "12px",
                  height: "12px",
                  borderRadius: "6px",
                  background: activeAppIndex === idx ? activeApp.theme : "var(--card-border)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              />
            ))}
          </div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "60px", 
            alignItems: "center",
            minHeight: "650px"
          }}>
            {/* Left Side: Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeApp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                style={{ display: "flex", flexDirection: "column", gap: "24px" }}
              >
                <div>
                  <span style={{ 
                    color: activeApp.theme, 
                    fontWeight: 700, 
                    textTransform: "uppercase", 
                    letterSpacing: "0.1em",
                    fontSize: "0.9rem"
                  }}>
                    {activeApp.category}
                  </span>
                  <h2 className="heading-lg" style={{ marginTop: "8px", marginBottom: "16px" }}>{activeApp.title}</h2>
                  <p className="text-muted" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                    {activeApp.description}
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {activeApp.skills.map(skill => (
                    <SkillTag key={skill} name={skill} onSelect={setSelectedSkill} />
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "12px" }}>
                  <StoreButton platform="android" href={activeApp.links.android} />
                  <StoreButton platform="ios" href={activeApp.links.ios} />
                </div>

                <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
                  <motion.button 
                    onClick={prevApp} 
                    className="btn-outline" 
                    style={{ padding: "12px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}
                    whileHover={{ scale: 1.1, backgroundColor: "var(--card-hover)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                  <motion.button 
                    onClick={nextApp} 
                    className="btn-outline" 
                    style={{ padding: "12px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}
                    whileHover={{ scale: 1.1, backgroundColor: "var(--card-hover)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Side: Screenshot Display & Gallery */}
            <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ 
                position: "absolute", 
                width: "400px", 
                height: "400px", 
                background: activeApp.theme, 
                filter: "blur(150px)", 
                opacity: 0.15,
                borderRadius: "50%",
                zIndex: -1
              }} />
              
              <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeApp.id}-${activeScreenshotIndex}`}
                    initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.95, rotateY: -5 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      width: "300px",
                      height: "600px",
                      borderRadius: "24px",
                      overflow: "hidden",
                      boxShadow: `0 20px 40px -10px rgba(0,0,0,0.5), 0 0 20px -5px ${activeApp.theme}44`,
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "#000"
                    }}
                  >
                    <img 
                      src={activeApp.screenshots[activeScreenshotIndex]} 
                      alt="App Screenshot" 
                      style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                    />
                  </motion.div>
                </AnimatePresence>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {activeApp.screenshots.map((src, i) => (
                    <motion.div
                      key={i}
                      onClick={() => setActiveScreenshotIndex(i)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      style={{ 
                        width: "60px", 
                        height: "120px", 
                        borderRadius: "8px", 
                        overflow: "hidden", 
                        border: "2px solid",
                        borderColor: activeScreenshotIndex === i ? activeApp.theme : "var(--card-border)",
                        cursor: "pointer",
                        opacity: activeScreenshotIndex === i ? 1 : 0.6,
                        transition: "all 0.3s ease",
                        background: "#000"
                      }}
                      whileHover={{ scale: 1.1, opacity: 1 }}
                    >
                      <img src={src} alt={`Screenshot ${i}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Projects Grid (Smaller cards for quick access) */}
        <section style={{ marginTop: "120px", marginBottom: "80px" }}>
          <h3 className="heading-md" style={{ textAlign: "center", marginBottom: "40px" }}>Explore <span className="text-gradient">All Apps</span></h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {APP_PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass-card"
                style={{ 
                  cursor: "pointer", 
                  borderTop: activeAppIndex === index ? `4px solid ${project.theme}` : "1px solid var(--card-border)",
                  background: activeAppIndex === index ? "rgba(255,255,255,0.06)" : "var(--card-bg)"
                }}
                onClick={() => {
                  setActiveAppIndex(index);
                  setActiveScreenshotIndex(0);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                whileHover={{ y: -5 }}
              >
                <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>{project.title}</h4>
                <p className="text-muted" style={{ fontSize: "0.9rem", marginBottom: "16px" }}>{project.category}</p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {project.skills.slice(0, 3).map(s => (
                    <span key={s} style={{ fontSize: "0.75rem", background: "var(--card-border)", padding: "4px 8px", borderRadius: "4px" }}>{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          div[style*="flexDirection: column"] {
            align-items: center;
          }
          div[style*="justifyContent: center"] {
            margin-top: 40px;
          }
          .container {
            padding-bottom: 60px;
          }
        }
      `}</style>
    </div>
  );
}
