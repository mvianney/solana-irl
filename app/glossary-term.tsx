'use client'

import { useState, useRef, useEffect } from 'react'

const glossary: Record<string, string> = {
  'Blockchain': 'A digital record-keeping system stored across many computers, making it secure and tamper-proof',
  'blockchain network': 'A digital record-keeping system stored across many computers, making it secure and tamper-proof',
  'memecoins': 'Cryptocurrencies created as jokes or internet trends with little real-world utility',
  'Memecoins': 'Cryptocurrencies created as jokes or internet trends with little real-world utility',
  'Speculation': 'Buying assets hoping they will rise in value rather than using them practically',
  'Transaction fees': 'Small costs paid to process and confirm actions on a blockchain network',
  'Micro-payments': 'Tiny payments, often fractions of a cent, made possible by low-fee networks',
  'Decentralized': 'Not controlled by any single company, government, or person',
  'Firedancer': "Solana's next-generation upgrade designed to dramatically increase network speed",
  'Composability': 'The ability of different apps on a network to connect and work together seamlessly',
  'Ecosystem': 'A community of interconnected projects, apps, and users built around one platform',
  'Unbanked': 'People without access to traditional banking services like savings accounts or credit',
  'DePIN': 'Decentralized Physical Infrastructure Network — real-world infrastructure owned by a community',
  'HONEY tokens': 'The cryptocurrency earned by Hivemapper contributors for mapping roads',
  'On-chain': 'Data recorded directly on the blockchain, publicly and permanently',
  'Extractive model': 'A business model where a company takes user data without fairly compensating them',
  'Ethereum': 'An older blockchain network known for slower speeds and higher fees than Solana',
  'Pantera Capital': 'A major cryptocurrency-focused investment firm',
  'Mapbox': 'A platform providing location data and mapping services to developers',
  'Robotaxi': 'A self-driving taxi that operates without a human driver',
  'Scalability': "A network's ability to handle more users without slowing down or getting expensive",
  'Infrastructure': 'The underlying systems that other services and applications are built on top of',
}

export default function GlossaryTerm({ children }: { children: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const termRef = useRef<HTMLSpanElement>(null)

  const definition = glossary[children] || 'Definition not available'

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (termRef.current) {
      const rect = termRef.current.getBoundingClientRect()
      setPosition({
        top: rect.top - 12,
        left: rect.left + rect.width / 2,
      })
    }
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleOutsideClick = () => setIsOpen(false)
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick)
    }
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [isOpen])

  return (
    <>
      <span
        ref={termRef}
        onClick={handleClick}
        className="cursor-pointer border-b-2 border-dotted border-red-500 hover:text-red-600 transition-colors duration-200"
      >
        {children}
      </span>

      {isOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'fixed',
            top: `${position.top}px`,
            left: `${position.left}px`,
            transform: 'translate(-50%, -100%)',
            zIndex: 9999,
          }}
          className="bg-white border-2 border-red-500 rounded-lg shadow-xl p-4 w-72 text-sm text-gray-800 animate-fade-in"
        >
          <p className="font-bold text-red-600 mb-1">{children}</p>
          <p className="leading-relaxed text-gray-700">{definition}</p>
          {/* Arrow pointing down */}
          <div
            style={{
              position: 'absolute',
              bottom: '-9px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '9px solid transparent',
              borderRight: '9px solid transparent',
              borderTop: '9px solid #ef4444',
            }}
          />
        </div>
      )}
    </>
  )
}
