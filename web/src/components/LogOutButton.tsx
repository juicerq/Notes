'use client'

import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export function LogOutButton() {
  const router = useRouter()
  function logOut() {
    Cookies.set('token', '')
    router.refresh()
    router.push('/')
  }

  return (
    <button onClick={logOut} className="text-[10px] text-red-500 underline">
      Log out
    </button>
  )
}
