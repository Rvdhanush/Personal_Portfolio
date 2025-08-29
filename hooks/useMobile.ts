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

// Aggressive mobile optimization - disable most animations
export const getMobileAnimationConfig = (isMobile: boolean) => {
  if (isMobile) {
    // Minimal animation for mobile - just opacity
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.1 } // Very fast
    }
  }
  
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }
}

// For sections - disable animations entirely on mobile
export const getSectionAnimationConfig = (isMobile: boolean) => {
  if (isMobile) {
    // No animation on mobile
    return {
      initial: {},
      animate: {},
      transition: { duration: 0 }
    }
  }
  
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, staggerChildren: 0.1 }
  }
}
