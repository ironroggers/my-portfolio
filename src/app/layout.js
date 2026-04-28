import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import info from '@/data/information.json'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  title: info.seo.title,
  description: info.seo.description,
  keywords: info.seo.keywords,
  authors: [{ name: info.personal.name }],
  openGraph: {
    title: info.seo.title,
    description: info.seo.description,
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
