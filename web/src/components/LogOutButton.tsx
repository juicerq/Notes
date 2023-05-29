'use client'

import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export function LogOutButton() {
  const router = useRouter()
  function logOut() {
    Cookies.remove('token')
    router.push('/')
    router.refresh()
  }

  return (
    <button
      onClick={logOut}
      className="text-xs self-start text-pallete-accent underline"
    >
      Log out
    </button>
  )
}
