'use client'

import { usePathname } from 'next/navigation'

import Navbar from './navbar/Navbar'

export default function Header() {
  const pathName = usePathname()

  return <>{pathName === '/demo' ? '' : <Navbar />}</>
}
