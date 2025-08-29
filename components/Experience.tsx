'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react'

const Experience = () => {
  const experience = {
    company: 'Schnell Energy',
    position: 'Data Science Intern',
    duration: 'Jul–Dec 2024',
    location: 'Coimbatore, Tamil Nadu (In-person)',
    achievements: [
      {
        title: 'Real-time Data Pipeline Engineering',
        description: 'Engineered real-time smart lighting data ingestion pipelines using Python, Pub/Sub, and GCP. Implemented data validation, error handling, and monitoring systems.',
        impact: 'Improved data processing efficiency by 40% and reduced data loss by 95%'
      },
      {
        title: 'BigQuery Schema Architecture & Optimization',
        description: 'Designed comprehensive BigQuery schema architecture and optimized SQL workflows for complex analytics queries. Implemented partitioning and clustering strategies.',
        impact: 'Improved query performance by 25% and reduced costs by 30%'
      },
      {
        title: 'Scalable ETL Pipelines & IoT Migration',
        description: 'Built scalable ETL pipelines and led IoT server migration project. Implemented automated data transformation workflows and real-time monitoring dashboards.',
        impact: 'Reduced manual effort by 30% and improved system reliability by 50%'
      },
      {
        title: 'AI Chatbot Development with RAG',
        description: 'Developed a domain-specific RAG-based AI chatbot using GPT-4, FAISS, FastAPI, and Docker. Integrated with company knowledge base and implemented user feedback loops.',
        impact: 'Improved field engineers\' efficiency by 50% and reduced support tickets by 35%'
      },
      {
        title: 'Data Analytics & Visualization',
        description: 'Created comprehensive dashboards and reports for stakeholders using Tableau and Python. Provided actionable insights for business decision-making.',
        impact: 'Enabled data-driven decisions leading to 20% improvement in operational efficiency'
      }
    ]
  }

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

  return (
    <section id="experience" className="section-padding section-light">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-900 mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="text-lg text-dark-600 mt-4">
              Hands-on experience in building and deploying intelligent systems at scale
            </p>
          </motion.div>

          {/* Experience Card */}
          <motion.div variants={itemVariants} className="card">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div className="flex items-center gap-3 mb-4 lg:mb-0">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-900">{experience.position}</h3>
                  <p className="text-xl text-primary-600 font-semibold">{experience.company}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-dark-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-dark-800 mb-4">Key Achievements & Impact</h4>
              
              {experience.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="border-l-4 border-primary-200 pl-4 py-2"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-dark-800 mb-1">
                        {achievement.title}
                      </h5>
                      <p className="text-dark-600 mb-2">
                        {achievement.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-green-700 font-medium">
                          {achievement.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technologies Used */}
            <div className="mt-8 pt-6 border-t border-dark-100">
              <h4 className="text-lg font-semibold text-dark-800 mb-4">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python', 'Google Cloud Platform', 'BigQuery', 'Pub/Sub', 'FastAPI', 
                  'Docker', 'GPT-4', 'FAISS', 'SQL', 'IoT', 'Tableau', 'TensorFlow',
                  'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn', 'Apache Kafka',
                  'Redis', 'MongoDB', 'Git', 'Docker Compose', 'Postman'
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium border border-primary-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Future Focus */}
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-200">
              <h3 className="text-lg font-semibold text-dark-800 mb-3">
                Looking Forward
              </h3>
              <p className="text-dark-600 max-w-2xl mx-auto leading-relaxed">
                I'm actively seeking opportunities to apply my ML engineering skills in challenging environments, 
                where I can contribute to building next-generation AI systems and continue growing as a professional. 
                My experience at Schnell Energy has given me valuable insights into real-world ML deployment challenges.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
