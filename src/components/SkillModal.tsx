"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { type SkillInfo } from "@/data/skills";

interface SkillModalProps {
  skill: SkillInfo | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SkillModal({ skill, isOpen, onClose }: SkillModalProps) {
  if (!skill) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              zIndex: 200,
              cursor: "pointer",
            }}
          />

          {/* Centering wrapper — uses flexbox so framer-motion transforms don't fight centering */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 201,
              pointerEvents: "none",
              padding: "24px",
            }}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: "560px",
                maxHeight: "85vh",
                overflowY: "auto",
                background: "rgba(20, 20, 25, 0.95)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "24px",
                padding: "40px",
                pointerEvents: "auto",
                position: "relative",
              }}
            >
            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                padding: "8px",
                cursor: "pointer",
                color: "#94a3b8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "#ededed";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                e.currentTarget.style.color = "#94a3b8";
              }}
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div style={{ marginBottom: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                <span style={{ fontSize: "2.5rem" }}>{skill.icon}</span>
                <div>
                  <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--foreground)", lineHeight: 1.2 }}>
                    {skill.name}
                  </h2>
                  <span style={{
                    fontSize: "0.8rem",
                    color: "var(--primary)",
                    background: "rgba(255,255,255,0.05)",
                    padding: "2px 10px",
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontWeight: 500,
                  }}>
                    {skill.category}
                  </span>
                </div>
              </div>
              <p style={{ color: "var(--primary)", fontSize: "1.05rem", fontWeight: 500, fontStyle: "italic" }}>
                {skill.tagline}
              </p>
            </div>

            {/* Description */}
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "32px" }}>
              {skill.description}
            </p>

            {/* Highlights */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontSize: "0.85rem", color: "var(--primary)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "16px", fontWeight: 600 }}>
                Key Highlights
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {skill.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "10px 14px",
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: "10px",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <ArrowUpRight size={14} color="var(--primary)" style={{ flexShrink: 0 }} />
                    <span style={{ color: "#c8d0db", fontSize: "0.9rem" }}>{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Used In */}
            <div>
              <h3 style={{ fontSize: "0.85rem", color: "var(--secondary)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "12px", fontWeight: 600 }}>
                Used In Projects
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {skill.usedIn.map((project) => (
                  <span
                    key={project}
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--secondary)",
                      background: "rgba(255,255,255,0.04)",
                      padding: "6px 14px",
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
