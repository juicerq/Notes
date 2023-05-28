import { cookies } from 'next/headers'

export function isLogged() {
  const isLogged = cookies().has('token')

  return isLogged
}
