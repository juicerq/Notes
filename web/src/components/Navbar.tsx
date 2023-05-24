import { getUser } from '@/hooks/getUser'
import { useIsLogged } from '@/hooks/useIsLogged'
import { User } from 'lucide-react'
import Link from 'next/link'
import { LogOutButton } from './LogOutButton'

export function Navbar() {
  const hasToken = useIsLogged()

  return (
    <nav className="text-zinc-400 flex w-full h-16 justify-between items-center px-12 bg-gray-500">
      <div className="flex items-center justify-center">
        {!hasToken ? (
          <Link
            className="text-sm underline flex justify-center items-center gap-3 hover:text-zinc-300 transition-colors"
            href="/user/login"
          >
            <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <p className="text-sm">Sign in</p>
          </Link>
        ) : (
          <>
            <Link
              className="text-sm underline flex justify-center items-center gap-3 hover:text-zinc-300 transition-colors"
              href="/user/login"
            >
              <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
            </Link>
            <div className="flex flex-col p-2 items-center relative">
              <p className="text-sm">{getUser().name}</p>
              <LogOutButton />
            </div>
          </>
        )}
      </div>

      <ul className="flex gap-4">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href={hasToken ? '/notes' : 'user/login'}>
          <li>Notes</li>
        </Link>
      </ul>
    </nav>
  )
}
