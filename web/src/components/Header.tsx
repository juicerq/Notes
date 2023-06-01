'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/WebCraftLogo.png'

// export async function getUser() {
//   const user = await axios
//     .get('https://localhost:3000/v1/me')
//     .then((res) => res.data)
//   if (!user) {
//     return null
//   }
//   return user
// }

export default function Header() {
  const { user } = useUser()
  return (
    <nav className="z-20 bg-cover flex w-full h-20 justify-between fixed items-center px-60 bg-transparent">
      <div className="flex items-center w-60 justify-center text-white">
        <Link href={'/'}>
          <Image src={logo} alt="logo" width={240} height={80} />
        </Link>
      </div>

      <ul className="flex gap-8 text-mainPalette-text uppercase">
        <Link href="/">
          <li className="navbar-li">Início</li>
        </Link>
        <Link href="/test">
          <li className="navbar-li">Demo</li>
        </Link>
        <Link href="/contact">
          <li className="navbar-li">Contato</li>
        </Link>
      </ul>

      <div className="flex w-60 justify-center items-center">
        {user ? (
          <div className="text-sm text-mainPalette-text flex justify-center items-center gap-3 hover:text-zinc-300 transition-colors">
            <p className="px-1 text-center uppercase font-semibold tracking-wider text-mainPalette-text border-b border-mainPalette-primaryButton">
              {user?.fullName}
            </p>
            <UserButton afterSignOutUrl="/" signInUrl="/sign-in" />
          </div>
        ) : (
          <div className="text-base text-mainPalette-text flex w-full justify-between items-center">
            <a
              href="/sign-in"
              className="my-2 mx-6 font-semibold inline-block hover:text-mainPalette-primaryButton transition-colors"
            >
              Entrar
            </a>
            <a
              href="/sign-up"
              className="border font-semibold border-mainPalette-primaryButton py-2 rounded px-6 button-hover"
            >
              Criar conta
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
