"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

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
        <Link href="/" className="heading-md" style={{ margin: 0, fontSize: '1.25rem' }}>
          <span className="text-gradient">A. Zefanya</span>
        </Link>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
