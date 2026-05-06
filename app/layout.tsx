import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abdu Seid & Mahir Said | Innovative Web Developers',
  description: 'Award-winning web development duo specializing in cutting-edge web applications, AI integration, and exceptional user experiences.',
  keywords: 'web development, fullstack developers, AI integration, React, Next.js, TypeScript',
  authors: [{ name: 'Abdu Seid' }, { name: 'Mahir Said' }],
  openGraph: {
    title: 'Abdu Seid & Mahir Said | Web Development Excellence',
    description: 'Transform your digital presence with our innovative solutions',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}