'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check initial dark mode preference
    const htmlElement = document.documentElement
    const isDarkMode = htmlElement.classList.contains('dark')
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark')
      setIsDark(false)
      localStorage.setItem('theme', 'light')
    } else {
      htmlElement.classList.add('dark')
      setIsDark(true)
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <nav className="fixed top-0 right-0 z-40 p-6">
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-navy dark:border-teal bg-white dark:bg-charcoal transition-all duration-300 hover:shadow-md"
      >
        {isDark ? (
          <svg className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-navy" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.293 2.293a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.828a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm2.464 1.536a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zM5 13a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM3.05 4.293L3.757 3.586a1 1 0 111.414 1.414L4.464 5.707A1 1 0 013.05 4.293zM1 11a1 1 0 100-2H0a1 1 0 100 2h1zm2.464 1.536l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM10 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm4.293-2.293a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    </nav>
  )
}
