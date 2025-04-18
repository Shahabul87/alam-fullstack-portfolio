'use client';

import { useEffect } from 'react';

export default function ThemeInitializer() {
  useEffect(() => {
    // This runs only on the client side
    try {
      const theme = localStorage.getItem('theme');
      if (theme === 'light') {
        document.documentElement.classList.remove('dark');
      }
      // Remove any "hydrated" class if it exists
      document.documentElement.classList.remove('hydrated');
    } catch (e) {
      console.error('Error initializing theme:', e);
    }
  }, []);

  // This component doesn't render anything visible
  return null;
} 