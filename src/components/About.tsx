'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
  { name: 'Tools', items: ['Git', 'Docker', 'AWS', 'Firebase'] },
  { name: 'Design', items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'] },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.610, 0.355, 1.000],
      },
    },
  };

  return (
    <section id="about" className="py-20 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              variants={itemVariants}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src="/profile.jpg" // Add your profile image
                alt="Profile"
                fill
                className="object-cover"
              />
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-transparent to-gray-900/10 dark:from-gray-100/10 dark:to-gray-100/10" />
            </motion.div>
            
            {/* Background Decorations */}
            <div className="absolute -inset-4 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-50" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Section Title */}
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="mt-2 h-1 w-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" />
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                I&apos;m a passionate Full Stack Developer with a keen eye for design and a love for creating elegant, user-centric solutions. With years of experience in web development, I specialize in building modern, scalable applications that make a difference.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                My journey in tech started with a curiosity for how things work, which evolved into a career focused on crafting exceptional digital experiences. I believe in writing clean, maintainable code and staying current with industry best practices.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 grid grid-cols-2 gap-6"
            >
              {skills.map((category) => (
                <div key={category.name} className="space-y-3">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-200 dark:to-pink-300 bg-clip-text text-transparent">
                    {category.name}
                  </h3>
                  <div className="space-y-2">
                    {category.items.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="mt-10">
              <motion.a
                href="/resume.pdf" // Add your resume file
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">View Resume</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 