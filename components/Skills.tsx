'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Wrench } from 'lucide-react'

const Skills = () => {
  // Devicon-based icon set for compact, responsive grid
  const techIcons = [
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'NumPy', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Pandas', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'SciPy', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scipy/scipy-original.svg' },
    { name: 'scikit-learn', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
    { name: 'TensorFlow', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'PyTorch', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'Keras', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
    { name: 'OpenCV', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    { name: 'spaCy', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spacy/spacy-original.svg' },
    { name: 'Jupyter', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
    { name: 'Anaconda', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg' },
    { name: 'Matplotlib', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
    { name: 'Seaborn', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/seaborn/seaborn-original.svg' },
    { name: 'Plotly', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg' },
    { name: 'FastAPI', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'Flask', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'GCP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Redis', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Selenium', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
    { name: 'VS Code', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' }
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
      primary: 'bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border-primary-200 dark:border-primary-700',
      blue: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700',
      green: 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700',
      purple: 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700'
    }
    return colors[color as keyof typeof colors] || colors.primary
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

          {/* Skills Icon Wall - mobile static, desktop subtle hover */}
          <motion.div variants={itemVariants}>
            <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(80px,1fr))]">
              {techIcons.map((tech) => (
                <div
                  key={tech.name}
                  className="rounded-xl bg-white/60 dark:bg-dark-800/60 border border-gray-200 dark:border-dark-700 p-4 flex items-center justify-center transition-transform md:hover:scale-105 md:hover:shadow-lg md:transform-gpu"
                  aria-label={tech.name}
                  title={tech.name}
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-10 md:h-12 md:w-12"
                  />
                </div>
              ))}
            </div>
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
