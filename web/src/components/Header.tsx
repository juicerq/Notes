'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/WebCraftLogo.png'
import { usePathname } from 'next/navigation'

export default function Header() {

  const pathName = usePathname()

  return (
    <>
      {pathName === '/test' ? (
        ''
      ) : (
        <nav className="z-20 bg-cover flex w-full h-24 justify-between fixed items-center px-60 bg-transparent">
          <div className="flex items-center w-60 justify-center text-white">
            <Link href={'/'}>
              <Image src={logo} alt="logo" width={240} height={80} />
            </Link>
          </div>

          <ul className="flex gap-8 text-mainPalette-text text-lg uppercase">
            <Link href="/">
              <li className="navbar-li">Início</li>
              <div className="h-1 w-0 bg-mainPalette-primaryButton transition-all group-hover:w-full" />
            </Link>
            
            <Link href="/contact">
              <li className="navbar-li">Projetos</li>
            </Link>

            <Link href="/contact">
              <li className="navbar-li">Sobre nos</li>
            </Link>

            <Link href="/contact">
              <li className="navbar-li">Contato</li>
              <div className="h-1 w-0 bg-mainPalette-primaryButton transition-all group-hover:w-full" />
            </Link>
          </ul>

          <div className="flex w-60 justify-center items-center">
            <Link href="/test">
              <button className="bg-mainPalette-primaryButton font-semibold py-3 rounded px-12 uppercase tracking-wider button-hover">Craft</button>
            </Link>
          </div>
        </nav>
      )}
    </>
  )
}
