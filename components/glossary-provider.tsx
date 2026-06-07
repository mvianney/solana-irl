'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { glossaryTerms } from '@/lib/glossary'

interface GlossaryContextType {
  activeWord: string | null
  setActiveWord: (word: string | null) => void
}

const GlossaryContext = createContext<GlossaryContextType | undefined>(undefined)

export function GlossaryProvider({ children }: { children: ReactNode }) {
  const [activeWord, setActiveWord] = useState<string | null>(null)

  return (
    <GlossaryContext.Provider value={{ activeWord, setActiveWord }}>
      {children}
      <GlossaryTooltip activeWord={activeWord} />
    </GlossaryContext.Provider>
  )
}

export function useGlossary() {
  const context = useContext(GlossaryContext)
  if (!context) {
    throw new Error('useGlossary must be used within GlossaryProvider')
  }
  return context
}

function GlossaryTooltip({ activeWord }: { activeWord: string | null }) {
  const definition = activeWord ? glossaryTerms[activeWord] || 'No definition available.' : null

  return (
    <AnimatePresence>
      {activeWord && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed z-50 pointer-events-none"
          style={{
            left: '50%',
            top: '20px',
            transform: 'translateX(-50%)',
          }}
        >
          <div className="bg-white dark:bg-charcoal border-2 border-red-500 rounded-lg shadow-lg px-4 py-3 max-w-sm text-sm text-charcoal dark:text-white pointer-events-auto">
            <button
              onClick={(e) => {
                e.stopPropagation()
              }}
              className="absolute top-1 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-lg leading-none"
            >
              ×
            </button>
            <p className="font-semibold mb-1 text-navy dark:text-teal">{activeWord}</p>
            <p>{definition}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
