'use client';
import { motion, useMotionValue, useTransform, useSpring, useInView, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    title: 'BDLearn - Bengali Learning Platform',
    description: 'A comprehensive Bengali learning platform for students from class one to university level. Features interactive lessons, educational resources, and personalized learning paths.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    image: '/bdlearn.png',
    link: 'https://bdlearn.vercel.app/',
    github: 'https://github.com/yourusername/bdlearn'
  },
  {
    title: 'BDGenAI - Learning Platform',
    description: 'A collaborative learning platform connecting students worldwide. Features include course creation, resource sharing, and progress tracking.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Node.js'],
    image: '/bdgenai.png',
    link: 'https://www.bdgenai.com/',
    github: 'https://github.com/yourusername/bdgenai'
  },
  {
    title: 'Avaron - Learning Platform',
    description: 'A modern learning platform built with Next.js and TypeScript. Features course management, elegant UI, and dark mode support.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/avaron.png',
    link: 'https://avaron.vercel.app/',
    github: 'https://github.com/yourusername/avaron'
  },
  {
    title: 'Academic Portfolio',
    description: 'A professional portfolio website for Dr. Arafat showcasing academic achievements, research work, and publications. Features elegant design with dark mode support.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/arafat.png',
    link: 'https://arafat-nu.vercel.app/',
    github: 'https://github.com/yourusername/portfolio'
  },
  {
    title: 'Modern Portfolio',
    description: 'A creative portfolio website with innovative UI design, smooth animations, and interactive elements. Features Tailwind CSS and Framer Motion integration.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    image: '/alamfirstdesign.png',
    link: 'https://portfolio-five-alpha-82.vercel.app/',
    github: 'https://github.com/yourusername/modern-portfolio'
  }
];

// Text animation variants
const titleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03
    }
  }
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200
    }
  }
};

const descriptionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.015
    }
  }
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 12
    }
  }
};

// ProjectCard component with enhanced animations
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  // For 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  
  // Smooth values with springs
  const springX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 100, damping: 20 });
  
  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 200;
    const yPct = (mouseY / height - 0.5) * 200;
    x.set(xPct);
    y.set(yPct);
  }
  
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }
  
  // Animation variants for tech stack items
  const techItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.4,
        type: 'spring',
        stiffness: 120
      }
    })
  };

  // Split title into individual letters for animation
  const titleLetters = project.title.split("");

  // Split description into words for animation
  const descriptionWords = project.description.split(" ");

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { 
          opacity: 0, 
          y: 50,
          scale: 0.95
        },
        visible: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          transition: {
            duration: 0.7, 
            ease: [0.215, 0.610, 0.355, 1.000],
            delay: index * 0.15
          }
        }
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{
        perspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
    >
      <motion.div
        style={{
          rotateX: springX,
          rotateY: springY,
        }}
        className="bg-white dark:bg-gray-800 h-full"
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
          />
        </div>

        {/* Project Content */}
        <div className="p-6">
          {/* Animated title with letter-by-letter effect */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
            className="text-xl font-semibold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent inline-block"
          >
            {titleLetters.map((letter, i) => (
              <motion.span 
                key={`${letter}-${i}`} 
                variants={letterVariants}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
          
          {/* Animated description with word-by-word effect */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={descriptionVariants}
            className="mt-2 text-gray-600 dark:text-gray-300"
          >
            {descriptionWords.map((word, i) => (
              <motion.span 
                key={`${word}-${i}`} 
                variants={wordVariants}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          
          {/* Tech Stack */}
          <motion.div 
            className="mt-4 flex flex-wrap gap-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {project.tech.map((tech, i) => (
              <motion.span
                key={tech}
                custom={i}
                variants={techItemVariants}
                className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Links */}
          <div className="mt-6 flex items-center gap-4">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex-1 px-4 py-2 text-center rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-medium shadow-md hover:shadow-lg"
            >
              View Project
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 shadow-md"
            >
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const [isMounted, setIsMounted] = useState(false);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return a non-animated version for SSR
  if (!isMounted) {
    return (
      <section id="projects" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              A collection of projects I&apos;ve worked on
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0">
            {/* Static project cards */}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute -z-10 inset-0 overflow-hidden"
      >
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-300/10 dark:bg-indigo-700/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-300/10 dark:bg-purple-700/10 rounded-full filter blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-20 relative"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] }}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.215, 0.610, 0.355, 1.000] }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          >
            A collection of projects I&apos;ve worked on
          </motion.p>
          
          {/* Underline animation */}
          <motion.div
            initial={{ width: 0 }}
            animate={isHeaderInView ? { width: '80px' } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto mt-5 rounded-full"
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 