'use client'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar/Navbar'

export default function Header() {
  const pathName = usePathname()

  return <>{pathName === '/test' ? '' : <Navbar />}</>
}

export function NavbarAnimationHover() {
  return (
    <div className="h-1 w-0 border-b-2 border-mainPalette-primaryButton transition-all group-hover:w-full" />
  )
}
