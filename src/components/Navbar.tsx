"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Profile", href: "/profile" },
    { name: "Software", href: "/software" },
    { name: "AI/ML", href: "/ai-ml" },
    { name: "Game Dev", href: "/game-dev" },
  ];

  return (
    <header className="nav-header">
      <div className="nav-container">
        <Link href="/" className="heading-md hover-glow" style={{ margin: 0, fontSize: '1.25rem', position: "relative", zIndex: 100 }}>
          <span className="text-gradient">A. Zefanya</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="nav-links desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{ position: "relative", padding: "8px 12px" }}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "8px",
                      zIndex: -1,
                      borderBottom: "2px solid var(--primary)"
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ position: "relative", zIndex: 100 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="mobile-nav-menu"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? "active" : ""}`}
                  style={{ display: "block", padding: "16px 24px", fontSize: "1.1rem", borderBottom: "1px solid var(--card-border)" }}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
