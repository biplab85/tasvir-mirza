import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tasvir Mirza | Content Creator & YouTuber',
  description: 'Official portfolio of Tasvir Mirza - Tech enthusiast, content creator, and digital storyteller. Explore my world of tech reviews, tutorials, and creative content.',
  keywords: ['YouTuber', 'Content Creator', 'Tech Reviews', 'Tutorials', 'Tasvir Mirza'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=cabinet-grotesk@400,500,700,800&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-void text-pearl antialiased">
        {children}
      </body>
    </html>
  )
}
