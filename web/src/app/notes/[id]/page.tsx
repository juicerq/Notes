'use client'
import { api } from '@/lib/api'
import Cookies from 'js-cookie'

export default async function NotePage({ params }: any) {
  const note = await api
    .get(`/notes/${params.id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    })
    .then((res) => res.data)
  return (
    <div className="h-screen justify-center items-center bg-gray-950">
      <div className="text-white">
        <h1>{note.title}</h1>
        <p>{note.content}</p>
        <p>{note.createdAt}</p>
      </div>
    </div>
  )
}
