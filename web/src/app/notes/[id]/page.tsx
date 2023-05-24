'use client'
import { api } from '@/lib/api'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Cookies from 'js-cookie'

async function getNote(noteId: string) {
  const note = await api
    .get(`/notes/${noteId}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    })
    .then((res) => res.data)
  return note
}

export default async function NotePage({ params }: Params) {
  const note = await getNote(params.id)

  return (
    <div className="h-screen justify-center items-center bg-gray-950">
      <div className="text-white">
        <h1>Note: {note.id}</h1>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <p>{note.createdAt}</p>
      </div>
    </div>
  )
}
