import { getUser } from '@/hooks/getUser'
import { isLogged } from '@/hooks/isLogged'
import { User } from 'lucide-react'
import Link from 'next/link'
import { LogOutButton } from './LogOutButton'

export function Navbar() {
  return (
    <nav className="z-20 bg-cover font-sans flex w-full h-20 justify-between fixed items-center px-20 bg-transparent">
      <div className="flex items-center justify-center">
        {!isLogged() ? (
          <Link
            className="text-sm text-pallete-text flex justify-center items-center gap-3 hover:text-zinc-300 transition-colors"
            href="/user/login"
          >
            <User className="w-7 h-7 text-pallete-accent" />
            <p className="px-1 text-pallete-text border-b border-pallete-primaryButton">
              Sign in
            </p>
          </Link>
        ) : (
          <>
            <Link
              className="text-sm underline flex justify-center items-center gap-3 hover:text-zinc-300 transition-colors"
              href="/user/account"
            >
              <User className="w-7 h-7 text-pallete-primaryButton" />
            </Link>
            <div className="font-bold text-pallete-text flex flex-col p-2 items-center relative">
              <p className="text-sm uppercase">{getUser().name}</p>
              <LogOutButton />
            </div>
          </>
        )}
      </div>

      <ul className="flex gap-4 text-pallete-text uppercase">
        <Link href="/">
          <li className="border-transparent transition-all border-b hover:border-pallete-primaryButton">
            Home
          </li>
        </Link>
        <Link href="/notes">
          <li className="border-transparent transition-all border-b hover:border-pallete-primaryButton">
            Notes
          </li>
        </Link>
        <Link href="/test">
          <li className="border-transparent transition-all border-b hover:border-pallete-primaryButton">
            Test
          </li>
        </Link>
        <Link href="/user/account">
          <li className="border-transparent transition-all border-b hover:border-pallete-primaryButton">
            Account
          </li>
        </Link>
      </ul>
    </nav>
  )
}
