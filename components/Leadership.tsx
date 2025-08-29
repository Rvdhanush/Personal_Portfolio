'use client'

import { motion } from 'framer-motion'
import { Users, Calendar, Target, Award } from 'lucide-react'

const Leadership = () => {
  const leadership = {
    role: 'Innovation Head',
    organization: 'FOSS Club of CIT',
    duration: '2022–2023',
    achievements: [
      {
        title: 'Team Leadership',
        description: 'Led a dynamic team of 20+ members, fostering collaboration and innovation.',
        metric: '20+ members',
        icon: Users
      },
      {
        title: 'Workshop & Events',
        description: 'Conducted 50+ workshops and events to promote open-source culture and technical skills.',
        metric: '50+ events',
        icon: Calendar
      },
      {
        title: 'The Coding Season',
        description: 'Organized flagship event with 120+ students focused on LLMs and programming.',
        metric: '120+ students',
        icon: Target
      },
      {
        title: 'First-Year Outreach',
        description: 'Designed events specifically for 150+ first-year students to promote open-source culture.',
        metric: '150+ students',
        icon: Award
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
    <section id="leadership" className="section-padding section-light">
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
              Leadership & Activities
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="text-lg text-dark-600 mt-4">
              Demonstrating leadership through community building and knowledge sharing
            </p>
          </motion.div>

          {/* Leadership Role Card */}
          <motion.div variants={itemVariants} className="card mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-3xl font-bold text-dark-900 mb-2">
                {leadership.role}
              </h3>
              <p className="text-xl text-primary-600 font-semibold mb-2">
                {leadership.organization}
              </p>
              <p className="text-dark-600">
                {leadership.duration}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {leadership.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-6 bg-dark-50 rounded-xl border border-dark-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-dark-800 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-dark-600 mb-3 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {achievement.metric}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact Summary */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-8 border border-primary-200">
              <h3 className="text-xl font-semibold text-dark-800 mb-4">
                Impact & Legacy
              </h3>
              <p className="text-dark-600 max-w-3xl mx-auto leading-relaxed">
                During my tenure as Innovation Head, I successfully transformed the FOSS Club into a vibrant hub of 
                technological innovation and learning. The initiatives we launched continue to inspire students to 
                explore open-source technologies and contribute to the global developer community. This experience 
                taught me valuable lessons in team management, event planning, and community building.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Leadership
