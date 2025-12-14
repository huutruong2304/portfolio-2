'use client'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

// Import the shadcn button component
import { Button } from '@/components/ui/button'

const ScrollToTopButton = () => {
  // 1. State to track the scroll position
  const [isVisible, setIsVisible] = useState(false)

  // 2. Function to scroll to the top of the page
  const scrollToTop = () => {
    // Use the native window scroll method for smooth scrolling
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // 3. Effect to handle scroll event and update visibility
  useEffect(() => {
    // Define the scroll handler function
    const toggleVisibility = () => {
      // Show button if page is scrolled past a certain amount (e.g., 300px)
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', toggleVisibility)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div
      className={`fixed bottom-16 right-5 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <Button
        onClick={scrollToTop}
        className="rounded-full shadow-lg w-14 h-14"
        aria-label="Scroll to top"
      >
        <ArrowUp className="size-7" />
      </Button>
    </div>
  )
}

export default ScrollToTopButton
