import { cookies } from 'next/headers'

export function useIsLogged() {
  const isLogged = cookies().has('token')

  return isLogged
}
