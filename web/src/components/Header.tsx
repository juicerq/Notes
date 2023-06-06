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
        <nav className="fixed z-20 flex h-20 w-full items-center justify-between bg-transparent bg-cover px-60">
          <div className="flex w-60 items-center justify-center text-white">
            <Link href={'/'}>
              <Image src={logo} alt="logo" width={240} height={80} />
            </Link>
          </div>

          <ul className="flex gap-8 uppercase text-mainPalette-text">
            <Link href="/" className="group">
              <li className="navbar-li">Início</li>
              <div className="h-1 w-0 border-b-2 border-mainPalette-primaryButton transition-all group-hover:w-full" />
            </Link>
            <Link href="/test" className="group">
              <li className="navbar-li ">Demo</li>
              <div className="h-1 w-0 border-b-2 border-mainPalette-primaryButton transition-all group-hover:w-full" />
            </Link>
            <Link href="/contact" className="group">
              <li className="navbar-li">Contato</li>
              <div className="h-1 w-0 border-b-2 border-mainPalette-primaryButton transition-all group-hover:w-full" />
            </Link>
          </ul>

          <div className="flex w-60 items-center justify-center">
            <Link href={'/test'}>
              <button>Craft</button>
            </Link>
          </div>
        </nav>
      )}
    </>
  )
}
