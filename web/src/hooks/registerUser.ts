import { api } from '@/lib/api'
import Cookies from 'js-cookie'

const signUpCookieOptions: Cookies.CookieAttributes = {
  expires: 7,
  path: '/',
}

export async function registerUser(
  name: String,
  email: String,
  password: String,
) {
  const { token } = await api
    .post('/register', {
      name,
      email,
      password,
    })
    .then((res) => res.data)

  Cookies.set('token', token, signUpCookieOptions)
}
