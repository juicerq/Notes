import { User } from 'lucide-react'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="text-zinc-400 flex w-full h-16 justify-between items-center px-12 bg-gray-500">
      <div className="flex items-center justify-center">
        <Link
          className="text-sm underline flex justify-center items-center gap-3 hover:text-zinc-300 transition-colors"
          href="/user/login"
        >
          <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          {/* Conecte-se */}
        </Link>
      </div>

      <ul className="flex gap-4">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/notes">
          <li>Notes</li>
        </Link>
      </ul>
    </nav>
  )
}
