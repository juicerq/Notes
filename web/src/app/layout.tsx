import './globals.css'
import { ReactNode } from 'react'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import Header from '@/components/Header'
import BackToTop from '@/components/general/BackToTop'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjurree',
})

export const metadata = {
  title: 'WebCraft',
  description: 'Showcase of Julios and Pedros Web Developer Skills',
  icons: {
    icon: '/images/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} overflow-x-hidden bg-mainPalette-bg`}
      >
        {/* Blur */}
        <div className="absolute right-1/2 top-1/2 h-20 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-mainPalette-primaryButton opacity-70 blur-full" />
        <Header />
        {children}

        <BackToTop />
      </body>
    </html>
  )
}
