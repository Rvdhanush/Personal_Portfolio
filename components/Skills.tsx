'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Wrench, Sigma, BarChart3 } from 'lucide-react'

const Skills = () => {
  // Categorized skills with uniform blue styling
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'R', 'Bash']
    },
    {
      title: 'Tools & Frameworks',
      skills: ['FastAPI', 'Flask', 'Docker', 'Kubernetes', 'Git', 'VS Code', 'Jupyter', 'Anaconda', 'Selenium']
    },
    {
      title: 'ML & AI',
      skills: ['TensorFlow', 'PyTorch', 'Keras', 'scikit-learn', 'NumPy', 'Pandas', 'SciPy', 'OpenCV', 'spaCy', 'Hugging Face', 'Matplotlib', 'Seaborn', 'Plotly']
    },
    {
      title: 'Cloud Platforms & Databases',
      skills: ['AWS', 'GCP', 'PostgreSQL', 'MongoDB', 'Redis']
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

  const getCategoryIcon = (title: string) => {
    const icons = {
      'Programming Languages': Code,
      'Tools & Frameworks': Wrench,
      'ML & AI': Brain,
      'Cloud Platforms & Databases': Database
    }
    return icons[title as keyof typeof icons] || Code
  }

  return (
    <section id="skills" className="section-padding section-muted">
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
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent systems and data-driven solutions
            </p>
          </motion.div>

          {/* Categorized Skills with Uniform Blue Styling */}
          <motion.div variants={itemVariants} className="space-y-8">
            {skillCategories.map((category, categoryIndex) => {
              const CategoryIcon = getCategoryIcon(category.title)
              return (
                <div key={categoryIndex} className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Skills Grid */}
                  <div className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))]">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700 px-4 py-3 text-center transition-all duration-200 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-md"
                        aria-label={skill}
                        title={skill}
                      >
                        <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </motion.div>

          {/* Additional Skills Info */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Continuous Learning & Growth
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                I'm constantly expanding my skill set through hands-on projects, certifications, and staying updated with the latest advancements in AI/ML technologies. My approach combines theoretical knowledge with practical implementation to deliver robust, scalable solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
