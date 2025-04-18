'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.3)]' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Md Shahabul Alam"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-200 dark:to-pink-300 bg-clip-text text-transparent">
              S Alam
            </span>
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-200 dark:to-pink-300 transition-all duration-300 group-hover:w-full" />
          </motion.a>

          {/* Navigation Links */}
          <div className="hidden sm:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative group px-4 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <span className="relative z-10 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-gray-200 dark:via-gray-400 dark:to-gray-200 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-pink-600 dark:group-hover:from-indigo-300 dark:group-hover:via-purple-200 dark:group-hover:to-pink-300 transition-all duration-300">
                  {item.name}
                </span>
                <span className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Right side: Theme Switcher and CTA */}
          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
            
            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 text-white font-medium shadow-[0_2px_20px_rgba(79,70,229,0.2)] hover:shadow-[0_2px_25px_rgba(79,70,229,0.3)] transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Let&apos;s Talk</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="p-2 rounded-lg sm:hidden hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 relative">
                <span className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 dark:from-gray-300 dark:to-gray-400 bg-clip-text text-transparent">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>
              </div>
            </motion.button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
} 