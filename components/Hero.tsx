'use client'

import { useState, useEffect } from 'react'
import { Download, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { useMobile, getMobileAnimationConfig } from '@/hooks/useMobile'

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const isMobile = useMobile()
  const titles = [
    'Machine Learning Engineer',
    'Data Science Practitioner',
    'Generative AI Developer',
    'Cloud Data Engineer'
  ]

  useEffect(() => {
    // Disable title animation on mobile for better performance
    if (isMobile) return
    
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [titles.length, isMobile])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-hero texture-overlay text-gray-800 dark:text-gray-100 relative">
      <div className="container-custom text-center">
        <motion.div
          {...getMobileAnimationConfig(isMobile)}
          className="space-y-6"
        >
          {/* Greeting */}
          {isMobile ? (
            <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
              Hello, I'm
            </p>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-300 font-medium"
            >
              Hello, I'm
            </motion.p>
          )}

          {/* Name */}
          {isMobile ? (
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
              Dhanush Rathinavelu
            </h1>
          ) : (
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white"
            >
              Dhanush Rathinavelu
            </motion.h1>
          )}

          {/* Animated Titles - Static on mobile */}
          {isMobile ? (
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary-600 dark:text-primary-400">
                {titles[0]} {/* Show first title only on mobile */}
              </h2>
            </div>
          ) : (
            <motion.div
              key={currentTitleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="h-16 flex items-center justify-center"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-primary-600 dark:text-primary-400">
                {titles[currentTitleIndex]}
              </h2>
            </motion.div>
          )}

          {/* Description */}
          {isMobile ? (
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Building intelligent systems and data-driven solutions that drive business impact
            </p>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Building intelligent systems and data-driven solutions that drive business impact
            </motion.p>
          )}

          {/* CTA Buttons */}
          {isMobile ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/71762134012_PROFILE (1) (2).pdf"
                download="Dhanush_Rathinavelu_Resume.pdf"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
              <button
                onClick={scrollToAbout}
                className="btn-secondary inline-flex items-center gap-2"
              >
                Learn More
                <ArrowDown size={20} />
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="/71762134012_PROFILE (1) (2).pdf"
                download="Dhanush_Rathinavelu_Resume.pdf"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
              <button
                onClick={scrollToAbout}
                className="btn-secondary inline-flex items-center gap-2"
              >
                Learn More
                <ArrowDown size={20} />
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on mobile for performance */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-300 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 dark:bg-gray-300 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Hero
