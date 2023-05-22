import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const registerResponse = await api.post('/register')

  const { token } = registerResponse.data

  return NextResponse.redirect('localhost:3000/', {
    headers: {
      'Set-Cookie': `token=${token} Path=/; max-age=2592000`,
    },
  })
}
