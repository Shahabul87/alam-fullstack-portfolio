'use client';
import { useState, useEffect } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ChangeLog from '@/components/ChangeLog';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Remove any hydrated class if it exists
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('hydrated');
    }
  }, []);

  // Use the same component structure for both server and client rendering
  // Just control visibility with CSS to avoid hydration mismatches
  return (
    <LazyMotion features={domAnimation}>
      <Header />
      <main className={mounted ? 'opacity-100' : 'opacity-0'}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <ChangeLog />
        <Contact />
      </main>
    </LazyMotion>
  );
}
