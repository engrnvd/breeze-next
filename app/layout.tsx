import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Laravel - Next',
  description: 'NextJs and Laravel Breeze Integration',
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <body>
    {children}
    </body>
    </html>
  )
}
