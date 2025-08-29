'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'veludhanush93@gmail.com',
      link: 'mailto:veludhanush93@gmail.com',
      color: 'primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9360402803',
      link: 'tel:+919360402803',
      color: 'green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, Tamil Nadu, India',
      link: '#',
      color: 'blue'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/dhanush-rv-365b3b184',
      color: 'blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/Rvdhanush',
      color: 'dark'
    }
  ]

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

  const getColorClasses = (color: string) => {
    const colors = {
      primary: 'bg-primary-100 text-primary-700',
      blue: 'bg-blue-100 text-blue-700',
      green: 'bg-green-100 text-green-700',
      dark: 'bg-dark-100 text-dark-700'
    }
    return colors[color as keyof typeof colors] || colors.primary
  }

  return (
    <section id="contact" className="section-padding bg-white text-gray-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-3"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or potential collaborations
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group border border-gray-200"
                >
                  <div className={`w-12 h-12 ${getColorClasses(info.color)} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                    <p className="text-gray-900 font-medium text-sm">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className={`w-12 h-12 ${getColorClasses(social.color)} rounded-lg flex items-center justify-center hover:scale-110 transition-transform`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to Work Together?
              </h3>
              <p className="text-primary-100 mb-4 max-w-2xl mx-auto">
                I'm excited to hear about your project and explore how we can collaborate to bring your ideas to life. 
                Let's create something amazing together!
              </p>
              <a
                href="mailto:veludhanush93@gmail.com?subject=Project Discussion - Dhanush Rathinavelu"
                className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start a Conversation
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
