'use client'
import { api } from '@/lib/api'
import Cookies from 'js-cookie'
import { Trash2 } from 'lucide-react'
import Link from 'next/link'
import dayjs from 'dayjs'

interface NoteType {
  id: string
  title: string
  content: string
  createdAt: string
}

export default async function Notes() {
  const response = await api.get('/notes', {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
  })
  const notes = response.data

  return (
    <div className="p-12 flex justify-center items-start bg-zinc-900 flex-wrap gap-8">
      {notes.map((note: NoteType) => {
        async function handleDeleteNote() {
          await api.delete(`notes/${note.id}`, {
            headers: {
              Authorization: `Bearer ${Cookies.get('token')}`,
            },
          })
        }
        return (
          <div key={note.id} className="relative w-[300px]">
            <Link href={`/notes/${note.id}`}>
              <div className="text-zinc-200 p-6 flex flex-col items-center gap-4 border rounded bg-teal-800">
                <h1 className="text-xl font-bold">{note.title}</h1>
                <p className="text-sm indent-4 leading-relaxed">
                  {note.content.concat('...')}
                </p>
                <p className="text-xs">
                  {dayjs(note.createdAt).format('MMMM[ ]DD[, ]YYYY')}
                </p>
              </div>
            </Link>
            <button
              onClick={handleDeleteNote}
              className="text-red-500 absolute right-2 top-[85%] z-10"
            >
              <Trash2 />
            </button>
          </div>
        )
      })}
    </div>
  )
}
