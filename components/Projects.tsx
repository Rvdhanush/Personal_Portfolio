'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, TrendingUp, Code, Brain, Shield, Mic, Car, MessageSquare } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Public Speaking Training Platform',
      description: 'Comprehensive platform for improving public speaking skills using AI-driven feedback, speech analysis, and personalized training modules.',
      impact: 'Helps users develop confidence and improve communication skills through AI-powered coaching and real-time feedback.',
      technologies: ['AI/ML', 'Speech Recognition', 'NLP', 'Python', 'React', 'TensorFlow', 'OpenAI API'],
      icon: Mic,
      github: 'https://github.com/Rvdhanush/AI-Powered-Public-Speaking-Training-Platform',
      demo: '#',
      color: 'primary',
      priority: 'main'
    },
    {
      title: 'PSO-Firefly Portfolio Optimizer',
      description: 'Advanced portfolio optimization system using Hybrid PSO-FA algorithm and mean-variance analysis for S&P 500 stocks with real-time data integration.',
      impact: 'Optimized 15 S&P 500 stocks, improving return-risk ratio by 18%. Integrated live data + 10,000-path Monte Carlo simulations.',
      technologies: ['Python', 'PSO-FA Algorithm', 'Monte Carlo', 'S&P 500', 'Real-time Data', 'Financial Analytics'],
      icon: TrendingUp,
      github: 'https://github.com/Rvdhanush/PSO-Firefly-PortfolioOptimizer',
      demo: '#',
      color: 'blue',
      priority: 'main'
    },
    {
      title: 'Adaptive RAG System with Web Search',
      description: 'Intelligent question-answering system combining document retrieval with web search capabilities and LLM-based document grading.',
      impact: 'Implemented LLM-based document grading to filter irrelevant results, improving answer quality by 35%.',
      technologies: ['RAG', 'LLM', 'Web Search', 'Document Grading', 'Python', 'FastAPI', 'Vector DB'],
      icon: Brain,
      github: 'https://github.com/Rvdhanush/-Adaptive-RAG-system-with-web-search',
      demo: '#',
      color: 'green',
      priority: 'main'
    },
    {
      title: 'Face Mask Detection using MobileNetV2',
      description: 'Real-time face mask detection model optimized for edge devices and mobile applications with high accuracy.',
      impact: 'Achieved 94%+ accuracy with lightweight CNN architecture, enabling deployment on resource-constrained devices.',
      technologies: ['MobileNetV2', 'CNN', 'Computer Vision', 'Edge Computing', 'Python', 'OpenCV', 'TensorFlow'],
      icon: Shield,
      github: 'https://github.com/Rvdhanush/Face-Mask-Detection-using-MobileNetV2',
      demo: '#',
      color: 'purple',
      priority: 'side'
    },
    {
      title: '2025 F1 Predictions',
      description: 'Machine learning model for predicting Formula 1 race outcomes using historical data, driver statistics, and track conditions.',
      impact: 'Developed predictive models for race outcomes with comprehensive analysis of F1 data and trends.',
      technologies: ['ML', 'Data Analysis', 'Predictive Modeling', 'Python', 'Pandas', 'Scikit-learn', 'Sports Analytics'],
      icon: Car,
      github: 'https://github.com/Rvdhanush/2025_F1_Predictions',
      demo: '#',
      color: 'orange',
      priority: 'side'
    },
    {
      title: 'Luminator Assistant Chatbot (OpenAI Model)',
      description: 'Domain-specific AI chatbot developed during Schnell Energy internship using OpenAI models for field engineer assistance.',
      impact: 'Improved field engineers\' efficiency by 50% and reduced support tickets by 35% through intelligent assistance.',
      technologies: ['OpenAI API', 'GPT Models', 'FastAPI', 'Docker', 'RAG', 'Python', 'Company Knowledge Base'],
      icon: MessageSquare,
      github: 'https://github.com/Rvdhanush/LUMINATOR-ASSISTANT-CHATBOT-OPENAI-MODEL-',
      demo: '#',
      color: 'indigo',
      priority: 'schnell'
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
      orange: 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300'
    }
    return colors[color as keyof typeof colors] || colors.primary
  }

  const getPriorityBadge = (priority: string) => {
    const badges = {
      main: { text: 'Main Project', color: 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700' },
      side: { text: 'Side Project', color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700' },
      schnell: { text: 'Schnell Project', color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700' }
    }
    return badges[priority as keyof typeof badges] || badges.side
  }

  return (
    <section id="projects" className="section-padding section-muted">
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
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              A showcase of my technical expertise and problem-solving approach through real-world projects
            </p>
          </motion.div>

          {/* Project Priority Legend */}
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <div className="inline-flex gap-4 text-sm text-gray-600 dark:text-gray-300">
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                Main Projects
              </span>
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                Side Projects
              </span>
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                Schnell Energy Project
              </span>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card hover:scale-105 transition-transform duration-300 group"
              >
                {/* Project Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${getColorClasses(project.color)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <project.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityBadge(project.priority).color}`}>
                        {getPriorityBadge(project.priority).text}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-700 dark:text-green-300">Impact</span>
                  </div>
                  <p className="text-sm text-green-800 dark:text-green-200">{project.impact}</p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Interested in Collaborating?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting projects, or potential collaborations. 
                Let's build something amazing together!
              </p>
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
