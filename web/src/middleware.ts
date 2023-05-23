import { NextRequest, NextResponse } from 'next/server'

const signInUrl = 'localhost:3000/user/signup'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  if (!token) {
    NextResponse.redirect(signInUrl, {
      headers: {
        'Set-Cookie': `redirectTo=${req.url}; Path=/; HttpOnly; max-age=15`,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/notes/:path*',
}
