import { api } from '@/lib/api'
import Cookies from 'js-cookie'

const expiresIn30Days = 60 * 60 * 24 * 30

const options: Cookies.CookieAttributes = {
  expires: expiresIn30Days,
  httpOnly: true,
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

  Cookies.set('token', token, options)
}
