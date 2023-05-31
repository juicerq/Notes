import { getUser } from '@/hooks/getUser'
import { isLogged } from '@/hooks/isLogged'
import { User } from 'lucide-react'
import Link from 'next/link'
import { LogOutButton } from './LogOutButton'
import logo from '../assets/WebCraftLogo.png'
import Image from 'next/image'

export function Navbar() {
  return (
    <nav className="z-20 bg-cover flex w-full h-20 justify-between fixed items-center px-96 bg-transparent">
      <div className="flex items-center w-60 justify-center text-white">
        <Image src={logo} alt="logo" width={200} height={60} />
      </div>

      <ul className="flex gap-8 text-pallete-text uppercase">
        <Link href="/">
          <li className="border-transparent tracking-wider transition-all border-b hover:border-pallete-primaryButton">
            Início
          </li>
        </Link>
        <Link href="/notes">
          <li className="border-transparent tracking-wider transition-all border-b hover:border-pallete-primaryButton">
            Notas
          </li>
        </Link>
        <Link href="/test">
          <li className="border-transparent tracking-wider transition-all border-b hover:border-pallete-primaryButton">
            Test
          </li>
        </Link>
        <Link href="/user/account">
          <li className="border-transparent tracking-wider transition-all border-b hover:border-pallete-primaryButton">
            Conta
          </li>
        </Link>
      </ul>

      <div className="flex w-60 justify-center">
        {isLogged() ? (
          <>
            <div className="font-bold text-pallete-text flex flex-col p-2 items-center relative">
              <p className="text-sm uppercase tracking-wider">
                {getUser().name}
              </p>
              <LogOutButton />
            </div>
            <Link
              className="text-sm underline flex justify-center items-center gap-3 hover:text-zinc-300 transition-colors"
              href="/user/account"
            >
              <User className="w-10 h-10 border-2 border-pallete-primaryButton rounded-full p-1 text-pallete-primaryButton" />
            </Link>
          </>
        ) : (
          <Link
            className="text-sm text-pallete-text flex justify-center items-center gap-3 hover:text-zinc-300 transition-colors"
            href="/user/login"
          >
            <p className="px-1 font-semibold tracking-wider text-pallete-text border-b border-pallete-primaryButton">
              Entrar
            </p>
            <User className="w-10 h-10 border-2 border-pallete-accent rounded-full p-1 text-pallete-accent" />
          </Link>
        )}
      </div>
    </nav>
  )
}
