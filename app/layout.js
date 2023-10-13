import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Certificates',
  description: 'Alidev developer certificates (Estiven Muñoz)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/hacker.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
