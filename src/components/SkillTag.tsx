"use client";

import { motion } from "framer-motion";
import { getSkillInfo, type SkillInfo } from "@/data/skills";

interface SkillTagProps {
  name: string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  onSelect: (skill: SkillInfo) => void;
}

export default function SkillTag({ name, color, bgColor, borderColor, onSelect }: SkillTagProps) {
  const skillInfo = getSkillInfo(name);

  const handleClick = () => {
    if (skillInfo) {
      onSelect(skillInfo);
    }
  };

  const isClickable = !!skillInfo;

  return (
    <motion.span
      whileHover={isClickable ? { scale: 1.08, y: -2 } : undefined}
      whileTap={isClickable ? { scale: 0.95 } : undefined}
      onClick={handleClick}
      className="skill-tag"
      style={{
        fontSize: "0.85rem",
        color: color || "var(--foreground)",
        background: bgColor || "rgba(255,255,255,0.05)",
        padding: "6px 12px",
        borderRadius: "6px",
        border: `1px solid ${borderColor || "rgba(255,255,255,0.1)"}`,
        cursor: isClickable ? "pointer" : "default",
        userSelect: "none",
        transition: "box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        if (isClickable) {
          e.currentTarget.style.boxShadow = `0 4px 16px ${bgColor || "rgba(255,255,255,0.1)"}`;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {name}
    </motion.span>
  );
}
