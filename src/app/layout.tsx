import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const openn = Open_Sans({subsets: ['latin'], weight:"800"})
import { Toaster, toast } from 'sonner'

export const metadata: Metadata = {
  title: 'Next App Main Title',
  description: 'My app main description',
}

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en"> 
      <body className={inter.className}>{children}</body>
      {/* <body className={openn.className}>{children}</body> */}
    </html>
  )
}
export default RootLayout
