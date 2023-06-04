'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/WebCraftLogo.png'
import { usePathname } from 'next/navigation'

export default function Header() {
  const { user } = useUser()

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
              <div className="h-1 w-0 bg-mainPalette-primaryButton transition-all group-hover:w-full" />
            </Link>
            <Link href="/test" className="group">
              <li className="navbar-li ">Demo</li>
              <div className="h-1 w-0 bg-mainPalette-primaryButton transition-all group-hover:w-full" />
            </Link>
            <Link href="/contact" className="group">
              <li className="navbar-li">Contato</li>
              <div className="h-1 w-0 bg-mainPalette-primaryButton transition-all group-hover:w-full" />
            </Link>
          </ul>

          <div className="flex w-60 items-center justify-center">
            {user ? (
              <div className="flex items-center justify-center gap-3 text-sm text-mainPalette-text transition-colors hover:text-zinc-300">
                <p className="border-b border-mainPalette-primaryButton px-1 text-center font-semibold uppercase tracking-wider text-mainPalette-text">
                  {user?.fullName}
                </p>
                <UserButton afterSignOutUrl="/" signInUrl="/sign-in" />
              </div>
            ) : (
              <div className="flex w-full items-center justify-between text-base text-mainPalette-text">
                <a
                  href="/sign-in"
                  className="mx-6 my-2 inline-block font-semibold transition-colors hover:text-mainPalette-primaryButton"
                >
                  Entrar
                </a>
                <a
                  href="/sign-up"
                  className="button-hover rounded border border-mainPalette-primaryButton px-6 py-2 font-semibold"
                >
                  Criar conta
                </a>
              </div>
            )}
          </div>
        </nav>
      )}
    </>
  )
}
