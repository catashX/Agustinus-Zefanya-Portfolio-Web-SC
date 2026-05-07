"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ThemeProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Remove all theme classes first
    document.body.classList.remove(
      'theme-profile',
      'theme-software',
      'theme-ai-ml',
      'theme-game-dev'
    );
    
    // Add the specific theme class based on the current path
    if (pathname?.startsWith('/profile')) {
      document.body.classList.add('theme-profile');
    } else if (pathname?.startsWith('/software')) {
      document.body.classList.add('theme-software');
    } else if (pathname?.startsWith('/ai-ml')) {
      document.body.classList.add('theme-ai-ml');
    } else if (pathname?.startsWith('/game-dev')) {
      document.body.classList.add('theme-game-dev');
    }
    // Home uses default variables, no extra class needed.
  }, [pathname]);

  return null;
}
