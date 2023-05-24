import { cookies } from 'next/headers'

export async function useIsLogged() {
  const isLogged = cookies().has('token')

  return isLogged
}
