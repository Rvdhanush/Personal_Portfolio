import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '')
}

// EmailJS configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
}

// Send email function
export const sendEmail = async (formData: FormData) => {
  try {
    const result = await emailjs.sendForm(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      formData,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    return { success: true, result }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error }
  }
}
