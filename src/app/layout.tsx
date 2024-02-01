import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const openFont = Open_Sans({     // Secondary font that i can use anywhere
  subsets: ['latin'], weight: ["800", '600'],
  style: "italic"
})


const metadata: Metadata = {
  title: 'Next App Main Title',
  description: 'My app main description',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      {/* Primary font */}
      <body className={inter.className}>{children}</body>    
    </html>
  )
}
export default RootLayout
