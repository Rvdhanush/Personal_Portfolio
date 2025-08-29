'use client'

import { useState, useEffect } from 'react'

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Initial check
    checkMobile()
    
    // Add resize listener
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

// Simplified animation config
export const getMobileAnimationConfig = (isMobile: boolean) => {
  return {
    initial: { opacity: 0, y: isMobile ? 0 : 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0.3 : 0.8 }
  }
}
