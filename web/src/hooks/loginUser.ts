import { api } from '@/lib/api'

export async function loginUser(email: String, password: String) {
  const response = await api.post('/login', { email, password })

  if (response.data === null) {
    return null
  }
  return response.data.token
}
