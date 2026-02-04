import React from "react"
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const _poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Clocksure - Employee Time & Attendance Management System',
  description: 'Transform Your Workforce Management with Clocksure. The all-in-one platform for accurate time tracking, attendance management, and powerful analytics. Trusted by 10,000+ companies.',
  keywords: ['time tracking', 'attendance management', 'employee management', 'biometric', 'workforce', 'HR software'],
  openGraph: {
    title: 'Clocksure - Time Tracking Made Simple, Attendance Management Made Smart',
    description: 'The modern way to track time, manage attendance, and grow your business. Start your free trial today.',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
