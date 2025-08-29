'use client'

import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, User, Mail, TrendingUp, Zap } from 'lucide-react'

const About = () => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const handleHireMe = () => {
    window.location.href = 'mailto:veludhanush93@gmail.com?subject=Interested in Hiring - Dhanush Rathinavelu&body=Hi Dhanush,%0D%0A%0D%0AI came across your portfolio and would like to discuss potential opportunities.%0D%0A%0D%0ABest regards,'
  }

  return (
    <section id="about" className="section-padding section-light relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Professional Summary */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="card h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Professional Summary</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    I am a <span className="font-semibold text-primary-600">results-driven Machine Learning Engineer</span> with a proven track record of building and deploying intelligent systems at scale. With hands-on experience in deploying production-ready ML solutions, I specialize in building end-to-end ML workflows, real-time data pipelines, and LLM-powered applications that drive measurable business impact.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-3 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-primary-600" />
                      <span className="text-sm font-medium text-primary-700 dark:text-primary-300">Proven Impact</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                      <Zap className="w-5 h-5 text-primary-600" />
                      <span className="text-sm font-medium text-primary-700 dark:text-primary-300">Fast Execution</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={handleHireMe}
                      className="btn-primary inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                    >
                      <Mail size={20} />
                      Hire Me
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="card h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">MSc in Artificial Intelligence & Machine Learning</h4>
                    <p className="text-gray-600 dark:text-gray-300">Coimbatore Institute of Technology</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2021–2026</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Coursework */}
          <motion.div variants={itemVariants} className="mt-8">
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Relevant Coursework</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {[
                  'Machine Learning',
                  'Deep Learning',
                  'Reinforcement Learning',
                  'Natural Language Processing',
                  'Data Analysis'
                ].map((course, index) => (
                  <div
                    key={index}
                    className="bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-3 py-2 rounded-lg text-sm font-medium text-center"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
