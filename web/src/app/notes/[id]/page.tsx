'use client'
import { api } from '@/lib/api'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { ArrowLeftFromLine } from 'lucide-react'

async function getNote(noteId: string) {
  const res = await api.get(`/notes/${noteId}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
  })
  const data = res.data
  return data
}

export default async function NotePage({ params }: Params) {
  const note = await getNote(params.id)

  return (
    <div className="p-12 flex justify-center relative items-center bg-zinc-900">
      <div className="text-zinc-300 flex flex-col items-center gap-8">
        <h1 className="text-lg font-bold">
          Note Id: <span className="text-cyan-400">{note.id}</span>
        </h1>
        <h3 className="text-lg">{note.title} Título</h3>
        <p>{note.content}</p>
        <p>{note.createdAt}</p>
      </div>
      <Link
        href={'/notes'}
        className="absolute left-3 top-3 text-zinc-300 opacity-80"
      >
        <ArrowLeftFromLine />
      </Link>
    </div>
  )
}
