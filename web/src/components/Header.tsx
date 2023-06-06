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
        <nav className="fixed z-20 flex h-24 w-full items-center justify-between bg-transparent bg-cover px-60">
          <div className="flex w-60 items-center justify-center text-white">
            <Link href={'/'}>
              <Image src={logo} alt="logo" width={240} height={80} />
            </Link>
          </div>

          <ul className="flex gap-8 uppercase text-mainPalette-text">
            <Link href="/" className="group">
              <li className="navbar-li">Início</li>
              <NavbarAnimationHover />{' '}
            </Link>
            <Link href="/test" className="group">
              <li className="navbar-li ">Demo</li>
              <NavbarAnimationHover />{' '}
            </Link>
            <Link href="/contact" className="group">
              <li className="navbar-li">Contato</li>
              <NavbarAnimationHover />
            </Link>
          </ul>

          <div className="flex w-60 items-center justify-center">
            <Link href={'/test'}>
              <button className="button-hover font-lg rounded bg-mainPalette-primaryButton px-12 py-4 text-lg font-semibold uppercase tracking-wider transition-all duration-75 hover:-translate-y-1">
                Craft
              </button>
            </Link>
          </div>
        </nav>
      )}
    </>
  )
}

export function NavbarAnimationHover() {
  return (
    <div className="h-1 w-0 border-b-2 border-mainPalette-primaryButton transition-all group-hover:w-full" />
  )
}
