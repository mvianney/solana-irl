import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GlossaryProvider } from '@/components/glossary-provider'

const inter = Inter({ variable: '--font-sans', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Solana IRL: The Blockchain Quietly Changing Everyday Life',
  description: "This isn't about trading. This is about the real world.",
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth bg-white light`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark') {
                  document.documentElement.classList.add('dark')
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased text-charcoal dark:text-white bg-white dark:bg-charcoal transition-colors duration-300">
        <GlossaryProvider>
          {children}
        </GlossaryProvider>
      </body>
    </html>
  )
}
