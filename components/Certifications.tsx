'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      name: 'Cyber Threat Management',
      issuer: 'Cisco Networking Academy',
      date: 'August 2024',
      description: 'Comprehensive cybersecurity course covering threat assessment, vulnerability management, risk planning, and incident response. Includes compliance frameworks, security controls, and forensic investigation techniques.',
      link: '#',
      color: 'primary'
    },
    {
      name: 'Google Cloud Data Engineering Fundamentals',
      issuer: 'Google Cloud',
      date: '2024',
      description: 'Comprehensive understanding of data engineering concepts on Google Cloud Platform.',
      link: '#',
      color: 'blue'
    },
    {
      name: 'NLP Specialization',
      issuer: 'Coursera',
      date: '2023',
      description: 'Advanced natural language processing techniques and applications.',
      link: '#',
      color: 'green'
    },
    {
      name: 'Prompt Engineering for LLMs',
      issuer: 'DeepLearning.AI',
      date: '2023',
      description: 'Expert techniques for designing effective prompts for large language models.',
      link: '#',
      color: 'purple'
    },
    {
      name: 'Introduction to Generative AI',
      issuer: 'Google',
      date: '2023',
      description: 'Foundational knowledge of generative AI technologies and applications.',
      link: '#',
      color: 'indigo'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const getColorClasses = (color: string) => {
    const colors = {
      primary: 'bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300',
      blue: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300',
      green: 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300',
      purple: 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300'
    }
    return colors[color as keyof typeof colors] || colors.primary
  }

  return (
    <section id="certifications" className="section-padding section-muted">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Certifications
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Continuous learning and validation of expertise in cutting-edge technologies
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card hover:scale-105 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${getColorClasses(cert.color)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                      <span className="font-medium text-primary-600">{cert.issuer}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {cert.description}
                    </p>
                    <a
                      href={cert.link}
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm group/link"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Learning Philosophy */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Commitment to Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                In the rapidly evolving field of AI and machine learning, staying current with the latest technologies 
                and methodologies is crucial. I actively pursue certifications and learning opportunities to ensure I 
                can deliver the most effective and innovative solutions to complex problems.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Industry-recognized credentials
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Practical skill validation
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Up-to-date knowledge
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
