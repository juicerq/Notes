import { cookies } from 'next/headers'

export async function useIsLogged() {
  const logged = await cookies().has('token')

  return logged
}
