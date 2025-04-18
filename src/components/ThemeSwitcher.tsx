'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Initialize theme from HTML element's class
  useEffect(() => {
    // Wait for next frame to ensure DOM is accessible
    const timeoutId = setTimeout(() => {
      setMounted(true);
      // Check the current state of the dark class
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    }, 0);
    
    return () => clearTimeout(timeoutId);
  }, []);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="w-6 h-6"></div>; // Placeholder with same dimensions
  }

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <div className="w-6 h-6 relative">
        {/* Sun */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute inset-0 transition-opacity duration-300"
          style={{ opacity: isDark ? 0 : 1 }}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-amber-500"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" 
          />
        </motion.svg>

        {/* Moon */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute inset-0 transition-opacity duration-300"
          style={{ opacity: isDark ? 1 : 0 }}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-indigo-300"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" 
          />
        </motion.svg>
      </div>
    </motion.button>
  );
} 