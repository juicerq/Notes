import { api } from '@/lib/api'
import Cookies from 'js-cookie'

export async function loginUser(email: String, password: String) {
  const options: Cookies.CookieAttributes = {
    expires: 7,
    path: '',
  }

  const { token } = await api
    .post('/login', {
      email,
      password,
    })
    .then((res) => res.data)

  Cookies.set('token', token, options)
}
