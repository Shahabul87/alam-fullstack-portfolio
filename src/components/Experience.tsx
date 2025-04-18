'use client';
import { motion, useScroll, useTransform, useSpring, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    location: 'San Francisco, CA',
    description: [
      'Led development of multiple high-impact projects using Next.js and TypeScript',
      'Architected scalable solutions serving millions of users',
      'Mentored junior developers and implemented best practices',
    ],
    tech: ['Next.js', 'TypeScript', 'Node.js', 'AWS'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Innovation Labs',
    period: '2020 - 2022',
    location: 'New York, NY',
    description: [
      'Developed and maintained multiple client applications',
      'Implemented responsive designs and improved performance',
      'Collaborated with cross-functional teams to deliver solutions',
    ],
    tech: ['React', 'Python', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2018 - 2020',
    location: 'Boston, MA',
    description: [
      'Built interactive web applications using modern JavaScript',
      'Optimized application performance and user experience',
      'Worked directly with clients to implement features',
    ],
    tech: ['JavaScript', 'React', 'SASS', 'Firebase'],
  },
];

// Motion variants for animations
const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.215, 0.610, 0.355, 1.000] 
    }
  }
};

const cardVariants: Variants = {
  hidden: (isEven: boolean) => ({ 
    opacity: 0, 
    x: isEven ? -50 : 50,
    rotateY: isEven ? -5 : 5,
    scale: 0.95
  }),
  visible: { 
    opacity: 1, 
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.215, 0.610, 0.355, 1.000],
      staggerChildren: 0.1
    }
  },
  hover: { 
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 15 
    }
  }
};

const dotVariants: Variants = {
  hidden: { 
    scale: 0,
    opacity: 0 
  },
  visible: { 
    scale: [0, 1.5, 1],
    opacity: 1,
    transition: { 
      duration: 0.5,
      times: [0, 0.7, 1],
      ease: "easeOut" 
    }
  }
};

const badgeVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8, 
    y: 10 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 20 
    }
  }
};

const listItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }
  }
};

const techBadgeVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20, 
    scale: 0.8 
  },
  visible: (index: number) => ({ 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      delay: 0.2 + (index * 0.05), 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }
  })
};

// Experience Card Component
const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const isEven = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      custom={isEven}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      className={`relative mb-16 ${
        isEven ? 'sm:pr-1/2' : 'sm:pl-1/2 sm:ml-auto'
      }`}
    >
      {/* Timeline Dot with pulse animation */}
      <motion.div 
        className="absolute left-4 sm:left-1/2 transform -translate-x-1/2"
        variants={dotVariants}
      >
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg z-10 relative">
          <motion.div 
            className="absolute inset-0 rounded-full bg-indigo-400 opacity-50"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.2, 0.5] 
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.div>

      {/* Content Card */}
      <motion.div
        style={{ perspective: 1000 }}
        className={`relative ml-12 sm:ml-0 p-8 bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-100 dark:border-gray-700/50 ${
          isEven ? 'sm:mr-12' : 'sm:ml-12'
        }`}
      >
        {/* Glowing background effect */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 blur-md -z-10" />

        {/* Period Badge */}
        <motion.div 
          variants={badgeVariants}
          className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/50 dark:via-purple-900/50 dark:to-pink-900/50 text-sm font-medium text-indigo-800 dark:text-indigo-200 mb-5 shadow-sm"
        >
          {experience.period}
        </motion.div>

        {/* Job Title with gradient text */}
        <motion.h3 
          className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent"
        >
          {experience.title}
        </motion.h3>

        {/* Company & Location */}
        <motion.div 
          variants={listItemVariants}
          className="mt-2 flex items-center text-gray-600 dark:text-gray-300 space-x-2"
        >
          <span className="font-medium">{experience.company}</span>
          <span className="text-indigo-400">•</span>
          <span>{experience.location}</span>
        </motion.div>

        {/* Description with animated list items */}
        <motion.ul className="mt-5 space-y-3">
          {experience.description.map((item, i) => (
            <motion.li 
              key={i} 
              variants={listItemVariants}
              custom={i}
              className="flex items-start space-x-3"
            >
              <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" />
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Tech Stack with staggered animations */}
        <motion.div className="mt-6 flex flex-wrap gap-2">
          {experience.tech.map((tech, i) => (
            <motion.span
              key={tech}
              custom={i}
              variants={techBadgeVariants}
              className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 shadow-sm hover:shadow transition-shadow"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(79, 70, 229, 0.1)",
                color: "rgba(79, 70, 229, 1)",
                transition: { duration: 0.2 }
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Smooth the scroll progress for the timeline line animation
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  return (
    <section ref={sectionRef} id="experience" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute -z-10 inset-0 overflow-hidden"
      >
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-300/5 dark:bg-indigo-700/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-300/5 dark:bg-purple-700/5 rounded-full filter blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={isHeaderInView ? { width: "80px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            My professional journey and roles I&apos;ve had throughout my career
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line with scroll-based animation */}
          <motion.div 
            className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 origin-top"
            style={{ 
              scaleY: smoothProgress,
              opacity: useTransform(smoothProgress, [0, 0.5], [0.2, 1])
            }}
          />

          {/* Experience Cards */}
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.period} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 