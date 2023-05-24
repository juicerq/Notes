import { NextRequest, NextResponse } from 'next/server'
// import { useRouter } from 'next/navigation'

const signInUrl = 'http://localhost:3000/user/signup'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(signInUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/notes/:path*',
}
