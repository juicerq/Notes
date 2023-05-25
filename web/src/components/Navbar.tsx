import { getUser } from '@/hooks/getUser'
import { useIsLogged } from '@/hooks/useIsLogged'
import { User } from 'lucide-react'
import Link from 'next/link'
import { LogOutButton } from './LogOutButton'

export function Navbar() {
  const hasToken = useIsLogged()

  return (
    <nav className="z-20 bg-[url(../assets/stars-notes.svg)] bg-cover font-sans flex w-full h-20 justify-between fixed items-center px-20 bg-gray-900">
      <div className="flex items-center justify-center">
        {!hasToken ? (
          <Link
            className="text-sm underline text-pallete-title flex justify-center items-center gap-3 hover:text-zinc-300 transition-colors"
            href="/user/login"
          >
            <div className="transition-colors w-10 h-10 bg-pallete-brown text-pallete-title rounded-full flex items-center justify-center">
              <User className="w-7 h-7 text-pallete-darkgold" />
            </div>
            <p className=" text-zinc-300 underline">Sign in</p>
          </Link>
        ) : (
          <>
            <Link
              className="text-sm underline flex justify-center items-center gap-3 hover:text-zinc-300 transition-colors"
              href="/user/login"
            >
              <div className="w-10 h-10 bg-pallete-brown rounded-full flex items-center justify-center">
                <User className="w-7 h-7 text-pallete-lightgold" />
              </div>
            </Link>
            <div className="font-bold text-pallete-title flex flex-col p-2 items-center relative">
              <p className="text-sm uppercase">{getUser().name}</p>
              <LogOutButton />
            </div>
          </>
        )}
      </div>

      <ul className="flex gap-4 text-pallete-title uppercase">
        <Link href="/">
          <li className="border-transparent transition-all border-b hover:border-pallete-lightgold">
            Home
          </li>
        </Link>
        <Link href="/notes">
          <li className="border-transparent transition-all border-b hover:border-pallete-lightgold">
            Notes
          </li>
        </Link>
        <Link href="/test">
          <li className="border-transparent transition-all border-b hover:border-pallete-lightgold">
            Test
          </li>
        </Link>
        <Link href="/user/account">
          <li className="border-transparent transition-all border-b hover:border-pallete-lightgold">
            Account
          </li>
        </Link>
      </ul>
    </nav>
  )
}
