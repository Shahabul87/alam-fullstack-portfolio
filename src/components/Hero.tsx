'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const DeveloperSVG = () => {
  const pathControls = useAnimation();

  useEffect(() => {
    pathControls.start({
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, delay: 0.5 }
    });
  }, [pathControls]);

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-full h-auto max-w-[400px] mx-auto mt-8 sm:mt-0"
      viewBox="0 0 714 611"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="bracketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5">
            <animate
              attributeName="stop-color"
              values="#4F46E5;#7C3AED;#4F46E5"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#7C3AED">
            <animate
              attributeName="stop-color"
              values="#7C3AED;#4F46E5;#7C3AED"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
        <linearGradient id="slashGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED">
            <animate
              attributeName="stop-color"
              values="#7C3AED;#EC4899;#7C3AED"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#EC4899">
            <animate
              attributeName="stop-color"
              values="#EC4899;#7C3AED;#EC4899"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>

      {/* Left and Right Brackets */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={pathControls}
        d="M236 397L120 287.5L236 178M478 178L594 287.5L478 397"
        stroke="url(#bracketGradient)"
        strokeWidth="40"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="filter drop-shadow-[0_0_10px_rgba(79,70,229,0.3)]"
      >
        <animate
          attributeName="stroke-width"
          values="40;45;40"
          dur="2s"
          repeatCount="indefinite"
        />
      </motion.path>

      {/* Middle Slash with separate animation */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1,
          opacity: 1,
          transition: { duration: 2, delay: 0.8 }
        }}
        d="M426 106L288 469"
        stroke="url(#slashGradient)"
        strokeWidth="40"
        strokeLinecap="round"
        className="filter drop-shadow-[0_0_10px_rgba(124,58,237,0.3)]"
      >
        <animate
          attributeName="stroke-width"
          values="40;45;40"
          dur="2s"
          repeatCount="indefinite"
        />
      </motion.path>

      {/* Glow Effects */}
      <motion.circle
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: [0, 0.1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        cx="357"
        cy="305.5"
        r="200"
        fill="url(#bracketGradient)"
        className="mix-blend-overlay filter blur-3xl"
      />
    </motion.svg>
  );
};

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8 }
    });
  }, [controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + (0.1 * i),
        duration: 0.6,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }),
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const techStackVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.1
      }
    }
  };

  const techItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-transparent to-gray-100/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-gray-200/30 to-transparent dark:from-gray-700/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-gray-300/30 to-transparent dark:from-gray-600/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={controls}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              className="space-y-6"
            >
              <motion.span
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="inline-block text-sm font-medium px-5 py-2 rounded-full bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-transparent bg-clip-text border border-indigo-100 dark:border-indigo-900 shadow-[0_0_15px_rgba(79,70,229,0.1)] dark:shadow-[0_0_15px_rgba(79,70,229,0.1)]"
              >
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-200 dark:to-pink-300 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </motion.span>
              <motion.h1 
                className="text-4xl sm:text-6xl lg:text-7xl font-bold"
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-200 dark:to-pink-300">
                  Crafting Digital
                </span>
                <br />
                <motion.span 
                  custom={3}
                  variants={textVariants}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-200 dark:via-pink-200 dark:to-orange-300"
                >
                  Experiences
                </motion.span>
              </motion.h1>
              <motion.p
                custom={4}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-lg sm:text-xl bg-gradient-to-r from-gray-700 to-gray-600 dark:from-gray-300 dark:to-gray-400 bg-clip-text text-transparent max-w-2xl mx-auto lg:mx-0"
              >
                Building elegant solutions through code. Specialized in creating modern, 
                responsive web applications with cutting-edge technologies.
              </motion.p>
            </motion.div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#projects"
                custom={1}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 text-white font-medium hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.2)] hover:shadow-[0_0_25px_rgba(79,70,229,0.3)]"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                custom={2}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                className="px-8 py-4 rounded-full border-2 border-transparent bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 font-medium shadow-[inset_0_0_0_2px_rgba(79,70,229,0.4)] dark:shadow-[inset_0_0_0_2px_rgba(139,92,246,0.4)] hover:shadow-[inset_0_0_0_2px_rgba(79,70,229,0.6)] dark:hover:shadow-[inset_0_0_0_2px_rgba(139,92,246,0.6)]"
              >
                Let&apos;s Connect
              </motion.a>
            </div>

            {/* Tech Stack */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={techStackVariants}
              className="mt-12 pt-8 border-t border-gray-200/30 dark:border-gray-800/30"
            >
              <motion.p
                variants={techItemVariants}
                className="text-sm bg-gradient-to-r from-gray-600 to-gray-500 dark:from-gray-400 dark:to-gray-500 bg-clip-text text-transparent mb-4"
              >
                Tech Stack
              </motion.p>
              <motion.div
                variants={techStackVariants}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                {[
                  { name: 'React', colors: 'from-cyan-600 via-cyan-500 to-blue-500 dark:from-cyan-300 dark:via-cyan-200 dark:to-blue-200' },
                  { name: 'Next.js', colors: 'from-gray-800 via-gray-700 to-gray-900 dark:from-gray-200 dark:via-gray-100 dark:to-white' },
                  { name: 'TypeScript', colors: 'from-blue-600 via-blue-500 to-indigo-500 dark:from-blue-300 dark:via-blue-200 dark:to-indigo-200' },
                  { name: 'Node.js', colors: 'from-green-600 via-green-500 to-emerald-500 dark:from-green-300 dark:via-green-200 dark:to-emerald-200' },
                  { name: 'Tailwind', colors: 'from-sky-600 via-sky-500 to-blue-500 dark:from-sky-300 dark:via-sky-200 dark:to-blue-200' },
                ].map((tech) => (
                  <motion.span
                    key={tech.name}
                    variants={techItemVariants}
                    className="group relative px-5 py-2.5 rounded-full bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 hover:from-white hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-900 text-gray-900 dark:text-gray-100 text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <span 
                      className={`relative z-10 bg-gradient-to-r ${tech.colors} bg-clip-text text-transparent transition-all duration-300`}
                    >
                      {tech.name}
                    </span>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${tech.colors.replace(/(from|via|to)-[a-z]+-[0-9]+/g, '$1-$2/0')} group-hover:${tech.colors.replace(/(from|via|to)-[a-z]+-[0-9]+/g, '$1-$2/5')} transition-all duration-300`} />
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* SVG Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={controls}
            className="relative"
          >
            <div className="relative z-10">
              <DeveloperSVG />
            </div>
            {/* Decorative circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent dark:from-gray-800 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
} 