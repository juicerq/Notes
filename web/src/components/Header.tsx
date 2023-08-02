'use client'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar/Navbar'

export default function Header() {
  const pathName = usePathname()

  return <>{pathName === '/demo' ? '' : <Navbar />}</>
}
