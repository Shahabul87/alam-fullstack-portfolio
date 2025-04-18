'use client';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

interface EducationUpdate {
  date: string;
  title: string;
  institution: string;
  details: string;
  type: 'achievement' | 'course' | 'degree';
}

const educationUpdates: EducationUpdate[] = [
  {
    date: 'May 2023',
    title: 'Advanced Machine Learning Certification',
    institution: 'Stanford Online',
    details: 'Completed advanced coursework in neural networks, deep learning, and AI applications',
    type: 'course'
  },
  {
    date: 'Dec 2022',
    title: 'Master of Computer Science',
    institution: 'Georgia Institute of Technology',
    details: 'Specialized in artificial intelligence and human-computer interaction',
    type: 'degree'
  },
  {
    date: 'Aug 2022',
    title: 'Research Publication',
    institution: 'International Conference on Web Development',
    details: 'Published paper on modern frontend architecture optimization techniques',
    type: 'achievement'
  },
  {
    date: 'Mar 2022',
    title: 'Full Stack Development Bootcamp',
    institution: 'Tech Academy',
    details: 'Intensive 12-week program covering modern web development technologies',
    type: 'course'
  },
  {
    date: 'Jun 2021',
    title: 'Bachelor of Science in Computer Science',
    institution: 'University of Washington',
    details: 'Graduated with honors, focusing on software engineering and algorithms',
    type: 'degree'
  }
];

export default function ChangeLog() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Get progress for the section scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });
  
  // Smooth progress for animations
  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 80, 
    damping: 20,
    restDelta: 0.001 
  });

  const typeIcons = {
    course: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    degree: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    achievement: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    )
  };

  // Card variants for animations
  const cardVariants = {
    hidden: (isEven: boolean) => ({
      opacity: 0,
      x: isEven ? -40 : 40,
      y: 20,
      rotateY: isEven ? -5 : 5
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  // Icon dot variants
  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15,
        delay: 0.2
      } 
    }
  };

  return (
    <section ref={sectionRef} id="education" className="py-20 sm:py-32 relative mb-40">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute -z-10 inset-0 overflow-hidden"
      >
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-indigo-300/10 dark:bg-indigo-700/10 rounded-full filter blur-3xl"
          style={{
            y: smoothProgress,
            scale: smoothProgress
          }}
          animate={{
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-300/10 dark:bg-purple-700/10 rounded-full filter blur-3xl"
          style={{
            y: smoothProgress, 
            scale: smoothProgress
          }}
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with improved animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            A timeline of my academic achievements and educational milestones
          </motion.p>
        </motion.div>

        {/* Progress bar that animates as you scroll */}
        <div className="relative w-full mb-16">
          {/* Milestone markers */}
          <div className="absolute top-0 w-full h-2 flex justify-between px-4">
            {educationUpdates.map((_, index) => (
              <motion.div 
                key={index}
                className="w-4 h-4 bg-white dark:bg-gray-800 rounded-full border-2 border-indigo-500 -mt-1 z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              />
            ))}
          </div>
          
          {/* Progress bar background */}
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            {/* Animated fill */}
            <motion.div 
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              style={{ scaleX: smoothProgress, transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
            />
          </div>
          
          {/* Progress percentage */}
          <motion.div 
            className="mt-2 text-sm text-right font-medium text-indigo-600 dark:text-indigo-400"
            style={{ opacity: smoothProgress }}
          >
            Progress: <motion.span>{Math.round(Number(smoothProgress) * 100)}%</motion.span>
          </motion.div>
        </div>

        {/* Timeline Container with normal scrolling cards and parallax effects */}
        <div className="relative max-w-6xl mx-auto">
          {/* Education Timeline Items */}
          <div ref={containerRef} className="relative">
            <AnimatePresence>
              {educationUpdates.map((update, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div 
                    key={update.title}
                    className={`flex mb-32 items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                    initial="visible"
                    animate="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    custom={isEven}
                    style={{
                      y: index * -15 * Number(smoothProgress.get())
                    }}
                  >
                    {/* Center Dot with animated ring */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <motion.div 
                        className="w-12 h-12 rounded-full flex items-center justify-center relative"
                        variants={dotVariants}
                      >
                        {/* Animated rings */}
                        <motion.div 
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-75"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.7, 0.5, 0.7]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut" 
                          }}
                        />
                        <motion.div 
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-75"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 0.3, 0.7] 
                          }}
                          transition={{ 
                            duration: 2.5, 
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.3
                          }}
                        />
                        
                        {/* Inner dot with icon */}
                        <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center z-10 shadow-lg">
                          <motion.div 
                            className="text-indigo-600 dark:text-indigo-400"
                            animate={{ rotate: [0, 5, 0, -5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            {typeIcons[update.type]}
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Card with 3D hover effect */}
                    <motion.div
                      className={`w-[calc(50%-60px)] ${isEven ? 'text-right pr-12' : 'text-left pl-12'}`}
                      variants={cardVariants}
                      custom={isEven}
                      whileHover={{ 
                        y: -8,
                        rotateY: isEven ? -5 : 5,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut"
                        }
                      }}
                      style={{ 
                        perspective: "1000px",
                        transformStyle: "preserve-3d"
                      }}
                    >
                      <div className="p-6 bg-white dark:bg-gray-800/90 rounded-xl shadow-md backdrop-blur-sm border border-gray-100 dark:border-gray-700/50
                                    transition-all duration-300 hover:shadow-xl overflow-hidden relative">
                        {/* Animated gradient background */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/50 dark:from-indigo-900/20 dark:to-purple-900/20"
                          animate={{ 
                            backgroundPosition: ['0% 0%', '100% 100%'] 
                          }}
                          transition={{ 
                            duration: 5, 
                            repeat: Infinity, 
                            repeatType: 'reverse',
                            ease: "easeInOut" 
                          }}
                          style={{ backgroundSize: '200% 200%' }}
                        />
                        
                        {/* Date Badge with counter animation */}
                        <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/50 dark:via-purple-900/50 dark:to-pink-900/50 text-sm font-medium text-indigo-800 dark:text-indigo-200 mb-3 relative overflow-hidden">
                          {update.date}
                          <motion.div 
                            className="absolute bottom-0 left-0 h-0.5 bg-indigo-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>

                        {/* Title with shimmer effect */}
                        <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent relative">
                          {update.title}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: [-100, 250] }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity, 
                              repeatDelay: 3,
                              ease: "easeInOut"
                            }}
                            style={{ skewX: -15 }}
                          />
                        </h3>

                        {/* Institution */}
                        <div className="mt-2 font-medium text-gray-600 dark:text-gray-300">
                          {update.institution}
                        </div>

                        {/* Details */}
                        <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                          {update.details}
                        </p>
                      </div>
                    </motion.div>
                    
                    {/* Empty div to balance the flex layout */}
                    <div className="w-[calc(50%-60px)]"></div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Clear spacer to prevent overlapping with the next component */}
      <div className="h-40 w-full"></div>
    </section>
  );
} 