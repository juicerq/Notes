import { api } from '@/lib/api'

export async function loginUser(email: String, password: String) {
  const { token } = await api
    .post('/login', { email, password })
    .then((res) => res.data)

  return token
}
