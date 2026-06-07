'use client'

import { useGlossary } from './glossary-provider'

interface GlossaryTermProps {
  children: string
}

export default function GlossaryTerm({ children }: GlossaryTermProps) {
  const { setActiveWord } = useGlossary()

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveWord(children)
  }


  return (
    <span
      onClick={handleClick}
      className="border-b border-dotted border-navy dark:border-teal cursor-pointer hover:bg-teal/5 dark:hover:bg-teal/10 transition-colors"
    >
      {children}
    </span>
  )
}
