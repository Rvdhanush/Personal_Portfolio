'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Wrench } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Python', 'C', 'SQL', 'JavaScript', 'HTML/CSS'],
      color: 'primary'
    },
    {
      icon: Database,
      title: 'Libraries & Frameworks',
      skills: [
        'Pandas', 'NumPy', 'Scikit-learn', 'NLTK', 'Matplotlib', 'PyTorch', 'FastAPI', 'LangChain',
        'TensorFlow', 'Keras', 'OpenCV', 'SpaCy', 'Transformers', 'Hugging Face', 'Streamlit',
        'Plotly', 'Seaborn', 'XGBoost', 'LightGBM', 'CatBoost', 'Gensim', 'TextBlob'
      ],
      color: 'blue'
    },
    {
      icon: Cloud,
      title: 'Cloud & Databases',
      skills: [
        'Google Cloud Platform', 'BigQuery', 'AWS (Beginner)', 'Vector Databases',
        'MongoDB', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Firebase', 'Docker Hub'
      ],
      color: 'green'
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: [
        'Git', 'Docker', 'Postman', 'ThingsBoard', 'Jupyter Notebook', 'Google Colab',
        'VS Code', 'PyCharm', 'Tableau', 'Power BI', 'Apache Kafka', 'Apache Spark',
        'MLflow', 'Weights & Biases', 'TensorBoard', 'Gradio', 'Hugging Face Spaces'
      ],
      color: 'purple'
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
      primary: 'bg-primary-100 text-primary-700 border-primary-200',
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      green: 'bg-green-100 text-green-700 border-green-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200'
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
            <h2 className="text-4xl font-bold text-dark-900 mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="text-lg text-dark-600 mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent systems and data-driven solutions
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 ${getColorClasses(category.color)} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-900">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-2 rounded-lg text-sm font-medium border ${getColorClasses(category.color)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Info */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-dark-100">
              <h3 className="text-lg font-semibold text-dark-800 mb-3">
                Continuous Learning & Growth
              </h3>
              <p className="text-dark-600 max-w-3xl mx-auto">
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
