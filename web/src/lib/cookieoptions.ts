import Cookies from 'js-cookie'

const expiresIn30Days = 60 * 60 * 24 * 30

export const options: Cookies.CookieAttributes = {
  expires: expiresIn30Days,
  httpOnly: true,
}
